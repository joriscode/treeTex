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
  }
}


case class Node(var pos: Point, var radius: Int, var color: String, var text: String, var parents: List[Node], var children: List[Node]) // may use (named & ) default args

class TreeTex(canvasName: String) {
  private val canvas = dom.document.getElementById(canvasName).asInstanceOf[dom.HTMLCanvasElement]
  private val bounds = Point(canvas.width, canvas.height)
  private val ctx = canvas.getContext("2d").asInstanceOf[dom.CanvasRenderingContext2D]

  private var nodeList: List[Node] = List(Node(Point(50, 50), 20, Color.Blue, "Root", Nil, Nil))
  private var focusNode = nodeList.head
  private var downPos: Point = Point(0, 0) // can check if on node but implies to set downPos at null to avoid fake drags

  canvas.addEventListener("mousedown", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent => 
      downPos = Point(e.clientX, e.clientY - canvas.offsetTop)
  })

  canvas.addEventListener("mouseup", (e:dom.Event) => e match { //wtf can't do partial function 
    case e:dom.MouseEvent => 
      if(downPos.x != e.clientX || downPos.y != e.clientY){
        drag(downPos, Point(e.clientX, e.clientY - canvas.offsetTop))
      }
      draw()
  })

  canvas.addEventListener("click", (e:dom.Event) => e match {
    case e:dom.MouseEvent => 
      simpleClick(Point(e.clientX, e.clientY - canvas.offsetTop))
      draw()
  })

  canvas.addEventListener("dblclick", (e:dom.Event) => e match {
    case e:dom.MouseEvent => 
      doubleClick(Point(e.clientX, e.clientY - canvas.offsetTop))
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

  def drawBranches(node: Node){
    ctx.beginPath();
    ctx.moveTo(node.pos.x, node.pos.y);
    node.children.foreach{
      c => 
        ctx.lineTo(c.pos.x, c.pos.y);
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

  def intersectNode(node: Node, click: Point): Boolean = {
    val x = click.x - node.pos.x
    val y = click.y - node.pos.y
    (x*x) + (y*y) <= node.radius * node.radius
  }

  def simpleClick(pos: Point) = getNodeAt(pos) match {
    case x::xs => focusNode = x
	case Nil => focusNode = null
  }
  
  def doubleClick(pos: Point) = getNodeAt(pos) match{
	case x::xs if focusNode != null =>
		focusNode.children = x::focusNode.children
	case x::xs => 
		focusNode = x
	case _ => 
		val n = Node(pos, 20, Color.Blue, "node", Nil, Nil)
		nodeList = n::nodeList
		focusNode = n
  }

  def drag(pos1: Point, pos2: Point) = getNodeAt(pos1) match {
	case x::xs => 
		focusNode = x
		focusNode.pos = pos2
	case Nil => 
  }
  
  draw()

}