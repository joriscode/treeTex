/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper = (function() {
  ScalaJS.c.java_util_AbstractList.call(this);
  this.underlying$3 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype = new ScalaJS.inheritable.java_util_AbstractList();
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__size__Lscala_collection_convert_Wrappers$IterableWrapperTrait__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.iterator__Lscala_collection_convert_Wrappers$IteratorWrapper = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__iterator__Lscala_collection_convert_Wrappers$IterableWrapperTrait__Lscala_collection_convert_Wrappers$IteratorWrapper(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__isEmpty__Lscala_collection_convert_Wrappers$IterableWrapperTrait__Z(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.underlying__Lscala_collection_Seq = (function() {
  return this.underlying$3
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.get__I__O = (function(i) {
  return this.underlying__Lscala_collection_Seq().apply__I__O(i)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.copy__Lscala_collection_Seq__Lscala_collection_convert_Wrappers$SeqWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Seq(this.scala$collection$convert$Wrappers$SeqWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.copy$default$1__Lscala_collection_Seq = (function() {
  return this.underlying__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productPrefix__T = (function() {
  return "SeqWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$SeqWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.scala$collection$convert$Wrappers$SeqWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.scala$collection$convert$Wrappers$SeqWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.iterator__Ljava_util_Iterator = (function() {
  return this.iterator__Lscala_collection_convert_Wrappers$IteratorWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.underlying__Lscala_collection_Iterable = (function() {
  return this.underlying__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Seq = (function($$outer, underlying) {
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
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.scala$collection$convert$Wrappers$SeqWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$SeqWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.copy__Lscala_collection_Seq__ = (function(underlying) {
  return this.copy__Lscala_collection_Seq__Lscala_collection_convert_Wrappers$SeqWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$SeqWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$SeqWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$SeqWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$SeqWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$SeqWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$SeqWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$SeqWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SeqWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$SeqWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$SeqWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$SeqWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$SeqWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$SeqWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$SeqWrapper: 0
}, false, "scala.collection.convert.Wrappers$SeqWrapper", ScalaJS.data.java_util_AbstractList, {
  scala_collection_convert_Wrappers$SeqWrapper: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$SeqWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$SeqWrapper;
//@ sourceMappingURL=Wrappers$SeqWrapper.js.map
