package example

import org.scalajs.dom
import scala.util.Random

case class Node(var pos: Point, var radius: Int, var color: String, var text: String, var parents: List[Node], var children: List[Node]) // may use (named & ) default args

case class TreeTex(bounds: Point, resetGame: () => Unit) extends Game{

  var nodeList: List[Node] = List(Node(Point(50, 50), 20, Color.Blue, "Root", Nil, Nil))
  var curNode = nodeList.head

  def draw(ctx: dom.CanvasRenderingContext2D) = {
    ctx.fillStyle = Color.Black
    ctx.fillRect(0, 0, bounds.x, bounds.y)

    ctx.fillStyle = Color.White
    ctx.strokeStyle = Color.White

    nodeList.foreach{ n => drawNode(ctx, n) }
    // draw branches
  }

  def drawNode(ctx: dom.CanvasRenderingContext2D, node: Node) = {
    ctx.fillStyle = node.color
    ctx.fillCircle(node.pos.x, node.pos.y, node.radius)
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

  def update(keys: Set[Action]): Unit = {
    val node = keys.head
    dom.alert("simple click")

    node match {
      case a: ActionMouseClick => simpleClick(a.pos)
      // case ActionMouseDoubleClick => 
      case a: ActionMouseDrag => drag(a.pos1, a.pos2)
      // case _ => // throw error ?? in JS ??
    }
    
  }

  def simpleClick(pos: Point) = {
    val nodes = getNodeAt(pos)

    if(!nodes.isEmpty && curNode == null){ // select the node
      curNode = nodes.head

    } else if(!nodes.isEmpty && curNode != null) { // link curNode and nodes.head
      curNode.children ::: List(nodes.head)

    } else { // create new node
      nodeList ::: List(Node(pos, 20, Color.Blue, "node", Nil, Nil))
      
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