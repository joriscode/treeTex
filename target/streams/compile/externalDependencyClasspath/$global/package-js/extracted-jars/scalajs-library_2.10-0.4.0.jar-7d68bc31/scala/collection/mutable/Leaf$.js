/** @constructor */
ScalaJS.c.scala_collection_mutable_Leaf$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.balance$1 = 0;
  this.depth$1 = 0
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.constructor = ScalaJS.c.scala_collection_mutable_Leaf$;
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__iterator__Lscala_collection_mutable_AVLTree__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.contains__O__Lscala_math_Ordering__Z = (function(value, ordering) {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__contains__Lscala_collection_mutable_AVLTree__O__Lscala_math_Ordering__Z(this, value, ordering)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.insert__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree = (function(value, ordering) {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__insert__Lscala_collection_mutable_AVLTree__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(this, value, ordering)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.remove__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree = (function(value, ordering) {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__remove__Lscala_collection_mutable_AVLTree__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(this, value, ordering)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.removeMin__Lscala_Tuple2 = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__removeMin__Lscala_collection_mutable_AVLTree__Lscala_Tuple2(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.removeMax__Lscala_Tuple2 = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__removeMax__Lscala_collection_mutable_AVLTree__Lscala_Tuple2(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.rebalance__Lscala_collection_mutable_AVLTree = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__rebalance__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_AVLTree(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.leftRotation__Lscala_collection_mutable_Node = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__leftRotation__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.rightRotation__Lscala_collection_mutable_Node = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__rightRotation__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.doubleLeftRotation__Lscala_collection_mutable_Node = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__doubleLeftRotation__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.doubleRightRotation__Lscala_collection_mutable_Node = (function() {
  return ScalaJS.impls.scala_collection_mutable_AVLTree$class__doubleRightRotation__Lscala_collection_mutable_AVLTree__Lscala_collection_mutable_Node(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.balance__I = (function() {
  return this.balance$1
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.depth__I = (function() {
  return this.depth$1
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productPrefix__T = (function() {
  return "Leaf"
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_mutable_Leaf$(x$1)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.hashCode__I = (function() {
  return 2364286
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.toString__T = (function() {
  return "Leaf"
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_Leaf()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_collection_mutable_Leaf = this;
  ScalaJS.impls.scala_collection_mutable_AVLTree$class__$init$__Lscala_collection_mutable_AVLTree__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.balance$1 = 0;
  this.depth$1 = -1;
  return this
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.doubleRightRotation__ = (function() {
  return this.doubleRightRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.doubleLeftRotation__ = (function() {
  return this.doubleLeftRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.rightRotation__ = (function() {
  return this.rightRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.leftRotation__ = (function() {
  return this.leftRotation__Lscala_collection_mutable_Node()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.rebalance__ = (function() {
  return this.rebalance__Lscala_collection_mutable_AVLTree()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.removeMax__ = (function() {
  return this.removeMax__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.removeMin__ = (function() {
  return this.removeMin__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.remove__O__Lscala_math_Ordering__ = (function(value, ordering) {
  return this.remove__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value, ordering)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.insert__O__Lscala_math_Ordering__ = (function(value$2, ordering$2) {
  return this.insert__O__Lscala_math_Ordering__Lscala_collection_mutable_AVLTree(value$2, ordering$2)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.contains__O__Lscala_math_Ordering__ = (function(value$3, ordering$3) {
  return this.contains__O__Lscala_math_Ordering__Z(value$3, ordering$3)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.depth__ = (function() {
  return ScalaJS.bI(this.depth__I())
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.balance__ = (function() {
  return ScalaJS.bI(this.balance__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Leaf$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Leaf$.prototype = ScalaJS.c.scala_collection_mutable_Leaf$.prototype;
ScalaJS.is.scala_collection_mutable_Leaf$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Leaf$)))
});
ScalaJS.as.scala_collection_mutable_Leaf$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Leaf$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Leaf")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Leaf$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Leaf$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Leaf$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Leaf$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Leaf;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Leaf$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Leaf$: 0
}, false, "scala.collection.mutable.Leaf$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_Leaf$: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_mutable_AVLTree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_Leaf$.prototype.$classData = ScalaJS.data.scala_collection_mutable_Leaf$;
ScalaJS.moduleInstances.scala_collection_mutable_Leaf = undefined;
ScalaJS.modules.scala_collection_mutable_Leaf = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_Leaf)) {
    ScalaJS.moduleInstances.scala_collection_mutable_Leaf = new ScalaJS.c.scala_collection_mutable_Leaf$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_Leaf
});
//@ sourceMappingURL=Leaf$.js.map
