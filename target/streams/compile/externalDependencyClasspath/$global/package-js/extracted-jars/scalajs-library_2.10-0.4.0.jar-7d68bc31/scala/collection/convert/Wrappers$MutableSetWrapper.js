/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper = (function() {
  ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.call(this);
  this.underlying$4 = null
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype = new ScalaJS.inheritable.scala_collection_convert_Wrappers$SetWrapper();
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.underlying__Lscala_collection_mutable_Set = (function() {
  return this.underlying$4
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.add__O__Z = (function(elem) {
  var sz = this.underlying__Lscala_collection_mutable_Set().size__I();
  this.underlying__Lscala_collection_mutable_Set().$$plus$eq__O__Lscala_collection_mutable_SetLike(elem);
  return (sz < this.underlying__Lscala_collection_mutable_Set().size__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.remove__O__Z = (function(elem) {
  try {
    return this.underlying__Lscala_collection_mutable_Set().remove__O__Z(elem)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.clear__V = (function() {
  this.underlying__Lscala_collection_mutable_Set().clear__V()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.copy__Lscala_collection_mutable_Set__Lscala_collection_convert_Wrappers$MutableSetWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Set(this.scala$collection$convert$Wrappers$MutableSetWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.copy$default$1__Lscala_collection_mutable_Set = (function() {
  return this.underlying__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productPrefix__T = (function() {
  return "MutableSetWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Lscala_collection_mutable_Set();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$MutableSetWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.scala$collection$convert$Wrappers$MutableSetWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_mutable_Set = (function($$outer, underlying) {
  this.underlying$4 = underlying;
  ScalaJS.c.scala_collection_convert_Wrappers$SetWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Set.call(this, $$outer, underlying);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.scala$collection$convert$Wrappers$MutableSetWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$MutableSetWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.copy__Lscala_collection_mutable_Set__ = (function(underlying) {
  return this.copy__Lscala_collection_mutable_Set__Lscala_collection_convert_Wrappers$MutableSetWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_mutable_Set()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSetWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$MutableSetWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$MutableSetWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$MutableSetWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$MutableSetWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$MutableSetWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$MutableSetWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSetWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$MutableSetWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$MutableSetWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$MutableSetWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$MutableSetWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$MutableSetWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$MutableSetWrapper: 0
}, false, "scala.collection.convert.Wrappers$MutableSetWrapper", ScalaJS.data.scala_collection_convert_Wrappers$SetWrapper, {
  scala_collection_convert_Wrappers$MutableSetWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_convert_Wrappers$SetWrapper: 1,
  java_util_AbstractSet: 1,
  java_util_Set: 1,
  java_util_AbstractCollection: 1,
  java_util_Collection: 1,
  java_lang_Iterable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$MutableSetWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$MutableSetWrapper;
//@ sourceMappingURL=Wrappers$MutableSetWrapper.js.map
