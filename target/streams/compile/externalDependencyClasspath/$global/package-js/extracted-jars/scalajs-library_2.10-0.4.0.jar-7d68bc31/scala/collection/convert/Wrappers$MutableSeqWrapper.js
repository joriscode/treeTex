/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper = (function() {
  ScalaJS.c.java_util_AbstractList.call(this);
  this.underlying$3 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype = new ScalaJS.inheritable.java_util_AbstractList();
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__size__Lscala_collection_convert_Wrappers$IterableWrapperTrait__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.iterator__Lscala_collection_convert_Wrappers$IteratorWrapper = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__iterator__Lscala_collection_convert_Wrappers$IterableWrapperTrait__Lscala_collection_convert_Wrappers$IteratorWrapper(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__isEmpty__Lscala_collection_convert_Wrappers$IterableWrapperTrait__Z(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.underlying__Lscala_collection_mutable_Seq = (function() {
  return this.underlying$3
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.get__I__O = (function(i) {
  return this.underlying__Lscala_collection_mutable_Seq().apply__I__O(i)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.set__I__O__O = (function(i, elem) {
  var p = this.underlying__Lscala_collection_mutable_Seq().apply__I__O(i);
  this.underlying__Lscala_collection_mutable_Seq().update__I__O__V(i, elem);
  return p
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.copy__Lscala_collection_mutable_Seq__Lscala_collection_convert_Wrappers$MutableSeqWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Seq(this.scala$collection$convert$Wrappers$MutableSeqWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.copy$default$1__Lscala_collection_mutable_Seq = (function() {
  return this.underlying__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productPrefix__T = (function() {
  return "MutableSeqWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Lscala_collection_mutable_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$MutableSeqWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.scala$collection$convert$Wrappers$MutableSeqWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.scala$collection$convert$Wrappers$MutableSeqWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.iterator__Ljava_util_Iterator = (function() {
  return this.iterator__Lscala_collection_convert_Wrappers$IteratorWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.underlying__Lscala_collection_Iterable = (function() {
  return this.underlying__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Seq = (function($$outer, underlying) {
  this.underlying$3 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_util_AbstractList.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__$init$__Lscala_collection_convert_Wrappers$IterableWrapperTrait__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.scala$collection$convert$Wrappers$MutableSeqWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$MutableSeqWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.copy__Lscala_collection_mutable_Seq__ = (function(underlying) {
  return this.copy__Lscala_collection_mutable_Seq__Lscala_collection_convert_Wrappers$MutableSeqWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_mutable_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSeqWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableSeqWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableSeqWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableSeqWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableSeqWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableSeqWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSeqWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableSeqWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableSeqWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSeqWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableSeqWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableSeqWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableSeqWrapper: 0
}, false, "scala.collection.convert.Wrappers$MutableSeqWrapper", ScalaJS.data.java_util_AbstractList, {
  scala_collection_convert_Wrappers$MutableSeqWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_convert_Wrappers$IterableWrapperTrait: 1,
  java_util_AbstractList: 1,
  java_util_List: 1,
  java_util_AbstractCollection: 1,
  java_util_Collection: 1,
  java_lang_Iterable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSeqWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableSeqWrapper;
//@ sourceMappingURL=Wrappers$MutableSeqWrapper.js.map
