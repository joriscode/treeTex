/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.key$1 = null;
  this.value$1 = null;
  this.left$1 = null;
  this.right$1 = null;
  this.count$1 = 0
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree;
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.key__O = (function() {
  return this.key$1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.value__O = (function() {
  return this.value$1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.left__Lscala_collection_immutable_RedBlackTree$Tree = (function() {
  return this.left$1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.right__Lscala_collection_immutable_RedBlackTree$Tree = (function() {
  return this.right$1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.count__I = (function() {
  return this.count$1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.init___O__O__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree = (function(key, value, left, right) {
  this.key$1 = key;
  this.value$1 = value;
  this.left$1 = left;
  this.right$1 = right;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.count$1 = ((1 + ScalaJS.modules.scala_collection_immutable_RedBlackTree().count__Lscala_collection_immutable_RedBlackTree$Tree__I(left)) + ScalaJS.modules.scala_collection_immutable_RedBlackTree().count__Lscala_collection_immutable_RedBlackTree$Tree__I(right));
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.count__ = (function() {
  return ScalaJS.bI(this.count__I())
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.right__ = (function() {
  return this.right__Lscala_collection_immutable_RedBlackTree$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.left__ = (function() {
  return this.left__Lscala_collection_immutable_RedBlackTree$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.value__ = (function() {
  return this.value__O()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.key__ = (function() {
  return this.key__O()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.red__ = (function() {
  return this.red__Lscala_collection_immutable_RedBlackTree$Tree()
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.black__ = (function() {
  return this.black__Lscala_collection_immutable_RedBlackTree$Tree()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$Tree = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$Tree.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$Tree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$Tree)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$Tree = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$Tree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$Tree")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$Tree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$Tree)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$Tree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$Tree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$Tree;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$Tree = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$Tree: 0
}, false, "scala.collection.immutable.RedBlackTree$Tree", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_RedBlackTree$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$Tree.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$Tree;
//@ sourceMappingURL=RedBlackTree$Tree.js.map
