/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper = (function() {
  ScalaJS.c.java_util_AbstractCollection.call(this);
  this.underlying$2 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype = new ScalaJS.inheritable.java_util_AbstractCollection();
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__size__Lscala_collection_convert_Wrappers$IterableWrapperTrait__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.iterator__Lscala_collection_convert_Wrappers$IteratorWrapper = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__iterator__Lscala_collection_convert_Wrappers$IterableWrapperTrait__Lscala_collection_convert_Wrappers$IteratorWrapper(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__isEmpty__Lscala_collection_convert_Wrappers$IterableWrapperTrait__Z(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.underlying__Lscala_collection_Iterable = (function() {
  return this.underlying$2
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.copy__Lscala_collection_Iterable__Lscala_collection_convert_Wrappers$IterableWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper().init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterable(this.scala$collection$convert$Wrappers$IterableWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.copy$default$1__Lscala_collection_Iterable = (function() {
  return this.underlying__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productPrefix__T = (function() {
  return "IterableWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Lscala_collection_Iterable();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper(x1) && (ScalaJS.as.scala_collection_convert_Wrappers$IterableWrapper(x1).scala$collection$convert$Wrappers$IterableWrapper$$$outer__Lscala_collection_convert_Wrappers() === this.scala$collection$convert$Wrappers$IterableWrapper$$$outer__Lscala_collection_convert_Wrappers()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var IterableWrapper$1 = ScalaJS.as.scala_collection_convert_Wrappers$IterableWrapper(x$1);
      return (ScalaJS.anyRefEqEq(this.underlying__Lscala_collection_Iterable(), IterableWrapper$1.underlying__Lscala_collection_Iterable()) && IterableWrapper$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.scala$collection$convert$Wrappers$IterableWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.iterator__Ljava_util_Iterator = (function() {
  return this.iterator__Lscala_collection_convert_Wrappers$IteratorWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.init___Lscala_collection_convert_Wrappers__Lscala_collection_Iterable = (function($$outer, underlying) {
  this.underlying$2 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_util_AbstractCollection.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_convert_Wrappers$IterableWrapperTrait$class__$init$__Lscala_collection_convert_Wrappers$IterableWrapperTrait__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$IterableWrapperTrait$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.scala$collection$convert$Wrappers$IterableWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$IterableWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.copy__Lscala_collection_Iterable__ = (function(underlying) {
  return this.copy__Lscala_collection_Iterable__Lscala_collection_convert_Wrappers$IterableWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_Iterable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$IterableWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$IterableWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$IterableWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$IterableWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$IterableWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$IterableWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IterableWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$IterableWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$IterableWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$IterableWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$IterableWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$IterableWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$IterableWrapper: 0
}, false, "scala.collection.convert.Wrappers$IterableWrapper", ScalaJS.data.java_util_AbstractCollection, {
  scala_collection_convert_Wrappers$IterableWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_convert_Wrappers$IterableWrapperTrait: 1,
  java_util_AbstractCollection: 1,
  java_util_Collection: 1,
  java_lang_Iterable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$IterableWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$IterableWrapper;
//@ sourceMappingURL=Wrappers$IterableWrapper.js.map
