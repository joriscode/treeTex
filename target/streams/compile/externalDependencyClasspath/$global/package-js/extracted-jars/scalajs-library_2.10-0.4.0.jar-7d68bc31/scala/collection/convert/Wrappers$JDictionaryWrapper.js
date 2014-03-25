/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.underlying$5 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.underlying__Ljava_util_Dictionary = (function() {
  return this.underlying$5
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.size__I = (function() {
  return this.underlying__Ljava_util_Dictionary().size__I()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.get__O__Lscala_Option = (function(k) {
  var v = this.underlying__Ljava_util_Dictionary().get__O__O(k);
  if ((!ScalaJS.anyRefEqEq(v, null))) {
    return new ScalaJS.c.scala_Some().init___O(v)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JDictionaryWrapper = (function(kv) {
  this.underlying__Ljava_util_Dictionary().put__O__O__O(kv.$$und1__O(), kv.$$und2__O());
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$minus$eq__O__Lscala_collection_convert_Wrappers$JDictionaryWrapper = (function(key) {
  this.underlying__Ljava_util_Dictionary().remove__O__O(key);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.put__O__O__Lscala_Option = (function(k, v) {
  var r = this.underlying__Ljava_util_Dictionary().put__O__O__O(k, v);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(r)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.update__O__O__V = (function(k, v) {
  this.underlying__Ljava_util_Dictionary().put__O__O__O(k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.remove__O__Lscala_Option = (function(k) {
  var r = this.underlying__Ljava_util_Dictionary().remove__O__O(k);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(r)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_convert_WrapAsScala().enumerationAsScalaIterator__Ljava_util_Enumeration__Lscala_collection_Iterator(this.underlying__Ljava_util_Dictionary().keys__Ljava_util_Enumeration()).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(k) {
      return new ScalaJS.c.scala_Tuple2().init___O__O(k, arg$outer.underlying__Ljava_util_Dictionary().get__O__O(k))
    })
  })(this)))
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.clear__V = (function() {
  ScalaJS.modules.scala_collection_convert_WrapAsScala().dictionaryAsScalaMap__Ljava_util_Dictionary__Lscala_collection_mutable_Map(this.underlying__Ljava_util_Dictionary()).clear__V()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.copy__Ljava_util_Dictionary__Lscala_collection_convert_Wrappers$JDictionaryWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Dictionary(this.scala$collection$convert$Wrappers$JDictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.copy$default$1__Ljava_util_Dictionary = (function() {
  return this.underlying__Ljava_util_Dictionary()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productPrefix__T = (function() {
  return "JDictionaryWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_Dictionary();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.scala$collection$convert$Wrappers$JDictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JDictionaryWrapper(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JDictionaryWrapper(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JDictionaryWrapper(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JDictionaryWrapper(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JDictionaryWrapper(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_Dictionary = (function($$outer, underlying) {
  this.underlying$5 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.scala$collection$convert$Wrappers$JDictionaryWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JDictionaryWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.copy__Ljava_util_Dictionary__ = (function(underlying) {
  return this.copy__Ljava_util_Dictionary__Lscala_collection_convert_Wrappers$JDictionaryWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_Dictionary()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JDictionaryWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JDictionaryWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JDictionaryWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JDictionaryWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JDictionaryWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JDictionaryWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JDictionaryWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JDictionaryWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JDictionaryWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JDictionaryWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JDictionaryWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JDictionaryWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JDictionaryWrapper: 0
}, false, "scala.collection.convert.Wrappers$JDictionaryWrapper", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_convert_Wrappers$JDictionaryWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JDictionaryWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JDictionaryWrapper;
//@ sourceMappingURL=Wrappers$JDictionaryWrapper.js.map
