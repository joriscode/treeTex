/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.underlying$5 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__size__Lscala_collection_convert_Wrappers$JMapWrapperLike__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.get__O__Lscala_Option = (function(k) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__get__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_Option(this, k)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike = (function(kv) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$plus$eq__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(this, kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus$eq__O__Lscala_collection_convert_Wrappers$JMapWrapperLike = (function(key) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$minus$eq__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_collection_convert_Wrappers$JMapWrapperLike(this, key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.put__O__O__Lscala_Option = (function(k, v) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__put__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__O__Lscala_Option(this, k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.update__O__O__V = (function(k, v) {
  ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__update__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__O__V(this, k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.remove__O__Lscala_Option = (function(k) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__remove__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_Option(this, k)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__iterator__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.clear__V = (function() {
  ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__clear__Lscala_collection_convert_Wrappers$JMapWrapperLike__V(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.underlying__Ljava_util_Map = (function() {
  return this.underlying$5
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.empty__Lscala_collection_convert_Wrappers$JMapWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Map(this.scala$collection$convert$Wrappers$JMapWrapper$$$outer__Lscala_collection_convert_Wrappers(), new ScalaJS.c.java_util_HashMap().init___())
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.copy__Ljava_util_Map__Lscala_collection_convert_Wrappers$JMapWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_Map(this.scala$collection$convert$Wrappers$JMapWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.copy$default$1__Ljava_util_Map = (function() {
  return this.underlying__Ljava_util_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productPrefix__T = (function() {
  return "JMapWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_Map();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.scala$collection$convert$Wrappers$JMapWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.scala$collection$convert$Wrappers$JMapWrapperLike$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.scala$collection$convert$Wrappers$JMapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JMapWrapperLike(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JMapWrapperLike(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JMapWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JMapWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_Map = (function($$outer, underlying) {
  this.underlying$5 = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$init$__Lscala_collection_convert_Wrappers$JMapWrapperLike__V(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.scala$collection$convert$Wrappers$JMapWrapperLike$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JMapWrapperLike$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.scala$collection$convert$Wrappers$JMapWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JMapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.copy__Ljava_util_Map__ = (function(underlying) {
  return this.copy__Ljava_util_Map__Lscala_collection_convert_Wrappers$JMapWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_Map()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JMapWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JMapWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JMapWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JMapWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JMapWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JMapWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JMapWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JMapWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JMapWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JMapWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JMapWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JMapWrapper: 0
}, false, "scala.collection.convert.Wrappers$JMapWrapper", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_convert_Wrappers$JMapWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_convert_Wrappers$JMapWrapperLike: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JMapWrapper;
//@ sourceMappingURL=Wrappers$JMapWrapper.js.map
