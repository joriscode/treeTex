/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$Tree();
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree;
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype.black__Lscala_collection_immutable_RedBlackTree$Tree = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree$BlackTree().apply__O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$BlackTree(ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.key__O.call(this), ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.value__O.call(this), ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.left__Lscala_collection_immutable_RedBlackTree$Tree.call(this), ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.right__Lscala_collection_immutable_RedBlackTree$Tree.call(this))
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype.red__Lscala_collection_immutable_RedBlackTree$Tree = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype.toString__T = (function() {
  return (((((((("RedTree(" + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.key__O.call(this)) + ", ") + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.value__O.call(this)) + ", ") + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.left__Lscala_collection_immutable_RedBlackTree$Tree.call(this)) + ", ") + ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.right__Lscala_collection_immutable_RedBlackTree$Tree.call(this)) + ")")
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$RedTree = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$RedTree.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$RedTree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$RedTree)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$RedTree = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$RedTree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$RedTree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$RedTree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$RedTree)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$RedTree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$RedTree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$RedTree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$RedTree = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$RedTree: 0
}, false, "scala.collection.immutable.RedBlackTree$RedTree", ScalaJS.data.scala_collection_immutable_RedBlackTree$Tree, {
  scala_collection_immutable_RedBlackTree$RedTree: 1,
  scala_collection_immutable_RedBlackTree$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$RedTree.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$RedTree;
//@ sourceMappingURL=RedBlackTree$RedTree.js.map
