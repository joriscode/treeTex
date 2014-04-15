package example
import scala.scalajs.js._
import org.scalajs.dom
import scala.collection.mutable
import scala.scalajs.js.Any._
import scala.scalajs.js.Math
import annotation.JSExport

object Color{
  def rgb(r: Int, g: Int, b: Int) = s"rgb($r, $g, $b)"
  val White = rgb(255, 255, 255)
  val Red = rgb(255, 0, 0)
  val Green = rgb(0, 255, 0)
  val Blue = rgb(0, 0, 255)
  val Cyan = rgb(0, 255, 255)
  val Magenta = rgb(255, 0, 255)
  val Yellow = rgb(255, 255, 0)
  val Black = rgb(0, 0, 0)
  val all = Seq(White, Red, Green, Blue, Cyan, Magenta, Yellow, Black)
}

// class Color{
  
// }

case class Point(x: Double, y: Double){
  def +(other: Point) = Point(x + other.x, y + other.y)
  def -(other: Point) = Point(x - other.x, y - other.y)
  def %(other: Point) = Point(x % other.x, y % other.y)
  def <(other: Point) = x < other.x && y < other.y
  def >(other: Point) = x > other.x && y > other.y
  def /(value: Double) = Point(x / value, y / value)
  def *(value: Double) = Point(x * value, y * value)
  def *(other: Point) = x * other.x + y * other.y
  def length = Math.sqrt(lengthSquared)
  def lengthSquared = x * x + y * y
  def within(a: Point, b: Point, extra: Point = Point(0, 0)) = {
    import math.{min, max}
    x >= min(a.x, b.x) - extra.x &&
    x < max(a.x, b.x) + extra.y &&
    y >= min(a.y, b.y) - extra.x &&
    y < max(a.y, b.y) + extra.y
  }
  def rotate(theta: Double) = {
    val (cos, sin) = (Math.cos(theta), math.sin(theta))
    Point(cos * x - sin * y, sin * x + cos * y)
  }
}


@JSExport
object ScalaJSExample {
  @JSExport
  def main(): Unit = {
    val treeTex = new TreeTex("treePanel")
  }
}

case class Node(var pos: Point, var radius: Int, var color: String, var text: String, var neighbors: List[Connector]){ // may use (named & ) default args
  def isLeftOf(node: Node): Boolean = {
    pos.x < node.pos.x
  }
}

case class Connector(var isChild: Boolean, var end: Node, branch: Branch)
case class Branch(var width: Int, var color: String, var text: String /* ... */)

class TreeTex(canvasName: String) {
  private val canvas = dom.document.getElementById(canvasName).asInstanceOf[dom.HTMLCanvasElement]
  private val bounds = Point(canvas.width, canvas.height)
  private val ctx = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]

  private var nodeList: List[Node] = List(Node(Point(50, 50), 20, Color.Blue, "Root", Nil))
  private var focusNode = nodeList.head
  private var isMouseDown = false

  private val defaultBranch = Branch(10, Color.Green, "default branch")

  canvas.addEventListener("mousedown", (e:dom.Event) => e match { //wtf can't do partial function 
	case e:dom.MouseEvent if e.ctrlKey => 
		addBranchTo(Point(e.clientX, e.clientY - canvas.offsetTop))
    case e:dom.MouseEvent => 
		simpleClick(Point(e.clientX, e.clientY - canvas.offsetTop)) 
		isMouseDown = true
  })

  canvas.addEventListener("mouseup", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent => isMouseDown = false
      draw()
  })
  
  canvas.addEventListener("mousemove", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent if isMouseDown && focusNode != null => 
		drag(focusNode, Point(e.clientX, e.clientY - canvas.offsetTop))
		draw()
  })

  canvas.addEventListener("click", (e:dom.Event) => e match {
	case e:dom.MouseEvent if e.ctrlKey => 
	case e:dom.MouseEvent if e.shiftKey => 
		deleteNodeAt(Point(e.clientX, e.clientY - canvas.offsetTop))
		draw()
    case e:dom.MouseEvent  => 
      simpleClick(Point(e.clientX, e.clientY - canvas.offsetTop))
	  isMouseDown = false
      draw()
  })

  canvas.addEventListener("dblclick", (e:dom.Event) => e match {
	case e:dom.MouseEvent if e.ctrlKey => 
	case e:dom.MouseEvent if e.shiftKey => 
    case e:dom.MouseEvent => 
      doubleClick(Point(e.clientX, e.clientY - canvas.offsetTop))
	  isMouseDown = false
      draw()
  })

  def draw() = {
  
    ctx.fillStyle = Color.Black
    ctx.fillRect(0, 0, bounds.x, bounds.y)

    ctx.fillStyle = Color.White
    ctx.strokeStyle = Color.White

    nodeList.foreach{ n => drawNode(n) }
    if (focusNode != null) strokeFocus(focusNode)
    nodeList.foreach{ n => drawBranches(n) } // draw branches
  }

  def drawNode(node: Node) = {
    ctx.beginPath()
    ctx.arc(node.pos.x, node.pos.y, node.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = node.color
    ctx.fill()
    ctx.lineWidth = 5
    ctx.strokeStyle = node.color
    ctx.stroke()

    ctx.fillText(node.text, node.pos.x, node.pos.y) // may need to be centered on the node
    // ...

  }

  def drawBranches(node: Node){ // Need to be update to changes
    ctx.beginPath();
    node.neighbors.foreach{
      c =>
		ctx.moveTo(node.pos.x, node.pos.y); 
        ctx.lineTo(c.end.pos.x, c.end.pos.y);
        ctx.lineWidth = 10;
        ctx.strokeStyle = Color.White;
        ctx.stroke();
    }
  }

  def strokeFocus(node: Node) = {
    ctx.strokeStyle = Color.White
    ctx.stroke()
  }

  def getNodeAt(click: Point): List[Node] = nodeList.filter(n => intersectNode(n, click))
  
  def addBranchTo(point: Point) = if (focusNode != null){
	getNodeAt(point) match {
		case node::_ => 
			if (!focusNode.neighbors.exists(_.end == node)){
				focusNode.neighbors = Connector(false,node,Branch(10,"Blue",""))::focusNode.neighbors
				node.neighbors = Connector(true,focusNode,Branch(10,"Blue",""))::node.neighbors
			}
		case _ => 
	}
  }

  def intersectNode(node: Node, click: Point): Boolean = {
    val x = click.x - node.pos.x
    val y = click.y - node.pos.y
    (x*x) + (y*y) <= node.radius * node.radius
  }

  def simpleClick(pos: Point) = getNodeAt(pos) match {
    case x::xs => focusThisNode(x)
    case Nil => focusThisNode(null)
  }
  
  def deleteNodeAt(pos: Point) = getNodeAt(pos) match {
    case x::xs => 
		nodeList = nodeList.filter(_ != x)
		if (focusNode == x) focusThisNode(null)
    case Nil => focusThisNode(null)
  }
  
  def doubleClick(pos: Point) = getNodeAt(pos) match{
  	case x::xs if focusNode != null => // link nodes
  		focusNode.neighbors = Connector(false, x, defaultBranch)::focusNode.neighbors // parent
      x.neighbors = Connector(true, focusNode, defaultBranch)::x.neighbors // child
  	case x::xs => 
  		focusThisNode(x)
  	case _ => 
  		val n = Node(pos, 20, Color.Blue, "node", Nil)
  		nodeList = n::nodeList
  		//focusThisNode(n)
  }

  def drag(pos1: Point, pos2: Point) = getNodeAt(pos1) match {
  	case x::xs => focusThisNode(x).pos = pos2
  	case Nil => 
  }
  
  def drag(node: Node, pos2: Point) = node match {
  	case null => 
  	case x => focusThisNode(x).pos = pos2
  }
  
  def focusThisNode(node:Node):Node = {
  	if (focusNode != null) 
  		focusNode.color = Color.Blue
  	focusNode = node
  	if (node != null)
  		focusNode.color = Color.Red
  	focusNode
  }

  case class Latex(){
    def toLatex(): String = {

      // hard coded parameters!!!
      val start = " \\begin{tikzpicture}[ fact/.style={rectangle, draw=none, rounded corners=1mm, fill=blue, drop shadow, text centered, anchor=north, text=white}, state/.style={circle, draw=none, fill=orange, circular drop shadow, text centered, anchor=north, text=white}, leaf/.style={circle, draw=none, fill=red, circular drop shadow, text centered, anchor=north, text=white}, level distance=0.5cm, growth parent anchor=south]"
      val slash = " \\"
      val end = "; \\end{tikzpictu†re}"
      var body = ""

      if(verifyTreeConnected && verifyUniqueParent){ // display msg if error
        val root = searchRoot(nodeList.head) // head is a random node, not necessary root
        val tempL = constructTexList(root).reverse

      }

      start + slash + body + end
    }

    def verifyTreeConnected(): Boolean = {
      nodeList.forall{n => n.neighbors != Nil}
    }

    def verifyUniqueParent(): Boolean = {
      nodeList.forall{n => n.neighbors.count( x => !x.isChild) == 1}
    }

    def searchRoot(node: Node): Node = { // CAUTION: must be applied after checking of tree correctness
      val parents = node.neighbors.filter(!_.isChild)
      
      parents match {
        case Nil => node
        case _ => searchRoot(parents.head.end)
      }
    }

    def orderChildren(node: Node): List[Connector] = {
      node.neighbors.sortWith((x, y) => x.end.isLeftOf(y.end))
    }

    // generate ordered list of nodes
    def constructTexList(node: Node): List[Node] = {
      val l = orderChildren(node).map{x => x.end}
      node::( l.flatMap(constructTexList(_)) )
    }

    // generate the Tex text of the tree body
    def generateTex(list: List[Node]): String = { // Caution: need to handle sibling distance, increasing value as going up to the root
      list.foldLeft(""){(acc, c) => "child{" + acc + nodeTex(c) + "}"} // Caution does not check if leaf => no children
    }

    // node Tex text
    def nodeTex(node: Node): String = {
      "node [state] {$" + node.text + "$}"
    }

  }

  draw()
}