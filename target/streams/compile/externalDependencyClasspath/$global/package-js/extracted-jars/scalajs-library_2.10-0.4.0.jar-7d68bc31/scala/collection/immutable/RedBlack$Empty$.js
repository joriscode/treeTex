/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$ = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlack$Tree.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlack$Tree();
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlack$Empty$;
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.isEmpty__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.isBlack__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.lookup__O__Lscala_collection_immutable_RedBlack$Tree = (function(k) {
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.upd__O__O__Lscala_collection_immutable_RedBlack$Tree = (function(k, v) {
  return new ScalaJS.c.scala_collection_immutable_RedBlack$RedTree().init___Lscala_collection_immutable_RedBlack__O__O__Lscala_collection_immutable_RedBlack$Tree__Lscala_collection_immutable_RedBlack$Tree(this.scala$collection$immutable$RedBlack$Empty$$$outer__Lscala_collection_immutable_RedBlack(), k, v, this.scala$collection$immutable$RedBlack$Empty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$(), this.scala$collection$immutable$RedBlack$Empty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$())
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.del__O__Lscala_collection_immutable_RedBlack$Tree = (function(k) {
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.smallest__Lscala_collection_immutable_RedBlack$NonEmpty = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.foreach__Lscala_Function2__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Empty$ = (function(from, until) {
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.first__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.last__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("empty map")
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.count__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productPrefix__T = (function() {
  return "Empty"
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_immutable_RedBlack$Empty$(x$1)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.hashCode__I = (function() {
  return 67081517
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.toString__T = (function() {
  return "Empty"
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.readResolve__p2__O = (function() {
  return this.scala$collection$immutable$RedBlack$Empty$$$outer__Lscala_collection_immutable_RedBlack().Empty__Lscala_collection_immutable_RedBlack$Empty$()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.scala$collection$immutable$RedBlack$Empty$$$outer__Lscala_collection_immutable_RedBlack = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.last__O = (function() {
  return this.last__Lscala_Nothing()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.first__O = (function() {
  return this.first__Lscala_Nothing()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Tree = (function(from, until) {
  return this.rng__Lscala_Option__Lscala_Option__Lscala_collection_immutable_RedBlack$Empty$(from, until)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.init___Lscala_collection_immutable_RedBlack = (function($$outer) {
  ScalaJS.c.scala_collection_immutable_RedBlack$Tree.prototype.init___Lscala_collection_immutable_RedBlack.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.scala$collection$immutable$RedBlack$Empty$$$outer__ = (function() {
  return this.scala$collection$immutable$RedBlack$Empty$$$outer__Lscala_collection_immutable_RedBlack()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlack$Empty$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlack$Empty$.prototype = ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype;
ScalaJS.is.scala_collection_immutable_RedBlack$Empty$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlack$Empty$)))
});
ScalaJS.as.scala_collection_immutable_RedBlack$Empty$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlack$Empty$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlack$Empty")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$Empty$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlack$Empty$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlack$Empty$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlack$Empty$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlack$Empty;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlack$Empty$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlack$Empty$: 0
}, false, "scala.collection.immutable.RedBlack$Empty$", ScalaJS.data.scala_collection_immutable_RedBlack$Tree, {
  scala_collection_immutable_RedBlack$Empty$: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_immutable_RedBlack$Tree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlack$Empty$.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlack$Empty$;
//@ sourceMappingURL=RedBlack$Empty$.js.map
