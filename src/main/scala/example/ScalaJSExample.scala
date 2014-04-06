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
    dom.setInterval( () => (treeTex.update()), 100 ) // change from 15ms to 100ms
  }
}



case class Node(var pos: Point, var radius: Int, var color: String, var text: String, var parents: List[Node], var children: List[Node]) // may use (named & ) default args

case class TreeTex(canvasName: String) {
  private[this] val canvas = dom.document.getElementById(canvasName).asInstanceOf[dom.HTMLCanvasElement]
  private[this] val bounds = Point(canvas.width, canvas.height)

  var nodeList: List[Node] = List(Node(Point(50, 50), 20, Color.Blue, "Root", Nil, Nil))
  var curNode = nodeList.head

  canvas.addEventListener("mousedown", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent => 
      //dom.alert(e.clientX + "," + e.clientY)
	  simpleClick(Point(e.clientX,e.clientY))
	  draw()
      // keys.add(ActionMouseClick(Point(e.clientX, e.clientY)))
  })

    canvas.addEventListener("click", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent => 
      simpleClick(Point(e.clientX, e.clientY))
  })

  canvas.addEventListener("dblclick", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent => 
      doubleClick(Point(e.clientX, e.clientY))
  })

    

  private[this] val ctx = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]

  draw()





  def draw() = {
    ctx.fillStyle = Color.Black
    ctx.fillRect(0, 0, bounds.x, bounds.y)

    ctx.fillStyle = Color.White
    ctx.strokeStyle = Color.White

    nodeList.foreach{ n => drawNode(n) }
    // draw branches
  }

  def drawNode(node: Node) = {
    ctx.beginPath()
    ctx.arc(node.pos.x, node.pos.y, node.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = node.color
    ctx.fill()
    ctx.lineWidth = 5
    ctx.strokeStyle = Color.White // Warning: hard coded
    ctx.stroke()

    ctx.fillText(node.text, node.pos.x, node.pos.y) // may need to be centered on the node
    // ...

  }

  def getNodeAt(click: Point): List[Node] = {
    // for (n <- nodeList; if isNode(click, n)) yield n
    nodeList.filter(n => isNode(n, click))
  }

  def isNode(node: Node, click: Point): Boolean = {
    val x = click.x - node.pos.x
    val y = click.x - node.pos.y
    (x*x) + (y*y) <= node.radius
  }


  def update(): Unit = {
    // dom.alert("update")
    draw()
    
  }


  // def update(keys: Set[Action]): Unit = {
  //   dom.alert("click")
  //   val node = keys.head
    

  //   node match {
  //     case a: ActionMouseClick => simpleClick(a.pos)
  //     // case ActionMouseDoubleClick => 
  //     case a: ActionMouseDrag => drag(a.pos1, a.pos2)
  //     // case _ => // throw error ?? in JS ??
  //   }
    
  // }

  def simpleClick(pos: Point) = {
    val nodes = getNodeAt(pos)

    if(nodes.isEmpty){ // remove focus
      curNode = null

    } else if (curNode != null){ // focus
      curNode = nodes.head
      
    }
  }

  def doubleClick(pos: Point) = {
    val nodes = getNodeAt(pos)

    if(!nodes.isEmpty && curNode == null){ // select the node
      curNode = nodes.head

    } else if(!nodes.isEmpty && curNode != null) { // link curNode and nodes.head
      curNode.children = nodes.head::curNode.children

    } else { // create new node
      nodeList = Node(pos, 20, Color.Blue, "node", Nil, Nil)::nodeList
      
    }
  }


  def drag(pos1: Point, pos2: Point){
    val nodes = getNodeAt(pos1)

    if(!nodes.isEmpty){
      curNode = nodes.head
      nodes.head.pos = pos2
    }
  }

}