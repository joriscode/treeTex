/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this);
  this.underlying$3 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.underlying__Ljava_lang_Iterable = (function() {
  return this.underlying$3
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsScala().asScalaIterator__Ljava_util_Iterator__Lscala_collection_Iterator(this.underlying__Ljava_lang_Iterable().iterator__Ljava_util_Iterator())
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.newBuilder__Lscala_collection_mutable_ArrayBuffer = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.copy__Ljava_lang_Iterable__Lscala_collection_convert_Wrappers$JIterableWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper().init___Lscala_collection_convert_Wrappers__Ljava_lang_Iterable(this.scala$collection$convert$Wrappers$JIterableWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.copy$default$1__Ljava_lang_Iterable = (function() {
  return this.underlying__Ljava_lang_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productPrefix__T = (function() {
  return "JIterableWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_lang_Iterable();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_convert_Wrappers$JIterableWrapper(x1) && (ScalaJS.as.scala_collection_convert_Wrappers$JIterableWrapper(x1).scala$collection$convert$Wrappers$JIterableWrapper$$$outer__Lscala_collection_convert_Wrappers() === this.scala$collection$convert$Wrappers$JIterableWrapper$$$outer__Lscala_collection_convert_Wrappers()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var JIterableWrapper$1 = ScalaJS.as.scala_collection_convert_Wrappers$JIterableWrapper(x$1);
      return (ScalaJS.anyRefEqEq(this.underlying__Ljava_lang_Iterable(), JIterableWrapper$1.underlying__Ljava_lang_Iterable()) && JIterableWrapper$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.scala$collection$convert$Wrappers$JIterableWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_lang_Iterable = (function($$outer, underlying) {
  this.underlying$3 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.scala$collection$convert$Wrappers$JIterableWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JIterableWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.copy__Ljava_lang_Iterable__ = (function(underlying) {
  return this.copy__Ljava_lang_Iterable__Lscala_collection_convert_Wrappers$JIterableWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_lang_Iterable()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JIterableWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JIterableWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JIterableWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JIterableWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JIterableWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JIterableWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JIterableWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JIterableWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JIterableWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JIterableWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JIterableWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JIterableWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JIterableWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JIterableWrapper: 0
}, false, "scala.collection.convert.Wrappers$JIterableWrapper", ScalaJS.data.scala_collection_AbstractIterable, {
  scala_collection_convert_Wrappers$JIterableWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JIterableWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JIterableWrapper;
//@ sourceMappingURL=Wrappers$JIterableWrapper.js.map
