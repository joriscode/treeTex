/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this);
  this.underlying$3 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.underlying__Ljava_util_Collection = (function() {
  return this.underlying$3
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsScala().asScalaIterator__Ljava_util_Iterator__Lscala_collection_Iterator(this.underlying__Ljava_util_Collection().iterator__Ljava_util_Iterator())
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.size__I = (function() {
  return this.underlying__Ljava_util_Collection().size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.isEmpty__Z = (function() {
  return this.underlying__Ljava_util_Collection().isEmpty__Z()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.newBuilder__Lscala_collection_mutable_ArrayBuffer = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.copy__Ljava_util_Collection__Lscala_collection_convert_Wrappers$JCollectionWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Collection(this.scala$collection$convert$Wrappers$JCollectionWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.copy$default$1__Ljava_util_Collection = (function() {
  return this.underlying__Ljava_util_Collection()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productPrefix__T = (function() {
  return "JCollectionWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_Collection();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_collection_convert_Wrappers$JCollectionWrapper(x1) && (ScalaJS.as.scala_collection_convert_Wrappers$JCollectionWrapper(x1).scala$collection$convert$Wrappers$JCollectionWrapper$$$outer__Lscala_collection_convert_Wrappers() === this.scala$collection$convert$Wrappers$JCollectionWrapper$$$outer__Lscala_collection_convert_Wrappers()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var JCollectionWrapper$1 = ScalaJS.as.scala_collection_convert_Wrappers$JCollectionWrapper(x$1);
      return (ScalaJS.anyRefEqEq(this.underlying__Ljava_util_Collection(), JCollectionWrapper$1.underlying__Ljava_util_Collection()) && JCollectionWrapper$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.scala$collection$convert$Wrappers$JCollectionWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_Collection = (function($$outer, underlying) {
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
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.scala$collection$convert$Wrappers$JCollectionWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JCollectionWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.copy__Ljava_util_Collection__ = (function(underlying) {
  return this.copy__Ljava_util_Collection__Lscala_collection_convert_Wrappers$JCollectionWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_Collection()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JCollectionWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JCollectionWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JCollectionWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JCollectionWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JCollectionWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JCollectionWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JCollectionWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JCollectionWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JCollectionWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JCollectionWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JCollectionWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JCollectionWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JCollectionWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JCollectionWrapper: 0
}, false, "scala.collection.convert.Wrappers$JCollectionWrapper", ScalaJS.data.scala_collection_AbstractIterable, {
  scala_collection_convert_Wrappers$JCollectionWrapper: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JCollectionWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JCollectionWrapper;
//@ sourceMappingURL=Wrappers$JCollectionWrapper.js.map
