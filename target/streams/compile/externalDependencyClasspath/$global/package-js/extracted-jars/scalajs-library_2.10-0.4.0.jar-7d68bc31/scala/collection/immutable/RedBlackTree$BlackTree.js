/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$Tree();
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree;
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype.black__Lscala_collection_immutable_RedBlackTree$Tree = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype.red__Lscala_collection_immutable_RedBlackTree$Tree = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree$RedTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$RedTree(ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.key__O.call(this), ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.value__O.call(this), ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.left__Lscala_collection_immutable_RedBlackTree$Tree.call(this), ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.right__Lscala_collection_immutable_RedBlackTree$Tree.call(this))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype.toString__T = (function() {
  return (((((((("BlackTree(" + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.key__O.call(this)) + ", ") + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.value__O.call(this)) + ", ") + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.left__Lscala_collection_immutable_RedBlackTree$Tree.call(this)) + ", ") + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.right__Lscala_collection_immutable_RedBlackTree$Tree.call(this)) + ")")
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$BlackTree = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$BlackTree.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$BlackTree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$BlackTree)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$BlackTree = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$BlackTree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$BlackTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$BlackTree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$BlackTree)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$BlackTree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$BlackTree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$BlackTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$BlackTree = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$BlackTree: 0
}, false, "scala.collection.immutable.RedBlackTree$BlackTree", ScalaJS.data.scala_collection_immutable_RedBlackTree$Tree, {
  scala_collection_immutable_RedBlackTree$BlackTree: 1,
  scala_collection_immutable_RedBlackTree$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$BlackTree.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$BlackTree;
//@ sourceMappingURL=RedBlackTree$BlackTree.js.map
