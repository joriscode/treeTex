/** @constructor */
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractMap.call(this);
  this.underlying$5 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractMap();
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.constructor = ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper;
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__size__Lscala_collection_convert_Wrappers$JMapWrapperLike__I(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike = (function(kv) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$plus$eq__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(this, kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus$eq__O__Lscala_collection_convert_Wrappers$JMapWrapperLike = (function(key) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$minus$eq__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_collection_convert_Wrappers$JMapWrapperLike(this, key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.put__O__O__Lscala_Option = (function(k, v) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__put__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__O__Lscala_Option(this, k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.update__O__O__V = (function(k, v) {
  ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__update__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__O__V(this, k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.remove__O__Lscala_Option = (function(k) {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__remove__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_Option(this, k)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__iterator__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.clear__V = (function() {
  ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__clear__Lscala_collection_convert_Wrappers$JMapWrapperLike__V(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.underlying__Ljava_util_concurrent_ConcurrentMap = (function() {
  return this.underlying$5
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.get__O__Lscala_Option = (function(k) {
  var v = this.underlying__Ljava_util_concurrent_ConcurrentMap().get__O__O(k);
  if ((!ScalaJS.anyRefEqEq(v, null))) {
    return new ScalaJS.c.scala_Some().init___O(v)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.empty__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper = (function() {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap(this.scala$collection$convert$Wrappers$JConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers(), new ScalaJS.c.java_util_concurrent_ConcurrentHashMap().init___())
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.putIfAbsent__O__O__Lscala_Option = (function(k, v) {
  var r = this.underlying__Ljava_util_concurrent_ConcurrentMap().putIfAbsent__O__O__O(k, v);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(r)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.remove__O__O__Z = (function(k, v) {
  return this.underlying__Ljava_util_concurrent_ConcurrentMap().remove__O__O__Z(k, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.replace__O__O__Lscala_Option = (function(k, v) {
  var prev = this.underlying__Ljava_util_concurrent_ConcurrentMap().replace__O__O__O(k, v);
  if ((!ScalaJS.anyRefEqEq(prev, null))) {
    return new ScalaJS.c.scala_Some().init___O(prev)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.replace__O__O__O__Z = (function(k, oldvalue, newvalue) {
  return this.underlying__Ljava_util_concurrent_ConcurrentMap().replace__O__O__O__Z(k, oldvalue, newvalue)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.copy__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper = (function(underlying) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper().init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap(this.scala$collection$convert$Wrappers$JConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers(), underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.copy$default$1__Ljava_util_concurrent_ConcurrentMap = (function() {
  return this.underlying__Ljava_util_concurrent_ConcurrentMap()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productPrefix__T = (function() {
  return "JConcurrentMapWrapper"
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.underlying__Ljava_util_concurrent_ConcurrentMap();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.scala$collection$convert$Wrappers$JConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.scala$collection$convert$Wrappers$JMapWrapperLike$$$outer__Lscala_collection_convert_Wrappers = (function() {
  return this.scala$collection$convert$Wrappers$JConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JMapWrapperLike(elem)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$minus$eq__O__Lscala_collection_mutable_MapLike = (function(key) {
  return this.$$minus$eq__O__Lscala_collection_convert_Wrappers$JMapWrapperLike(key)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(ScalaJS.as.scala_Tuple2(elem))
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike(kv)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return this.empty__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.underlying__Ljava_util_Map = (function() {
  return this.underlying__Ljava_util_concurrent_ConcurrentMap()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.init___Lscala_collection_convert_Wrappers__Ljava_util_concurrent_ConcurrentMap = (function($$outer, underlying) {
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
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.scala$collection$convert$Wrappers$JMapWrapperLike$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JMapWrapperLike$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.scala$collection$convert$Wrappers$JConcurrentMapWrapper$$$outer__ = (function() {
  return this.scala$collection$convert$Wrappers$JConcurrentMapWrapper$$$outer__Lscala_collection_convert_Wrappers()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productElement__I__ = (function(x$1) {
  return this.productElement__I__O(x$1)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.copy__Ljava_util_concurrent_ConcurrentMap__ = (function(underlying) {
  return this.copy__Ljava_util_concurrent_ConcurrentMap__Lscala_collection_convert_Wrappers$JConcurrentMapWrapper(underlying)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.replace__O__O__O__ = (function(k, oldvalue, newvalue) {
  return ScalaJS.bZ(this.replace__O__O__O__Z(k, oldvalue, newvalue))
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.replace__O__O__ = (function(k$2, v) {
  return this.replace__O__O__Lscala_Option(k$2, v)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.remove__O__O__ = (function(k$3, v$2) {
  return ScalaJS.bZ(this.remove__O__O__Z(k$3, v$2))
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.putIfAbsent__O__O__ = (function(k$4, v$3) {
  return this.putIfAbsent__O__O__Lscala_Option(k$4, v$3)
});
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.underlying__ = (function() {
  return this.underlying__Ljava_util_concurrent_ConcurrentMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_convert_Wrappers$JConcurrentMapWrapper = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype = ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype;
ScalaJS.is.scala_collection_convert_Wrappers$JConcurrentMapWrapper = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers$JConcurrentMapWrapper)))
});
ScalaJS.as.scala_collection_convert_Wrappers$JConcurrentMapWrapper = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers$JConcurrentMapWrapper(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers$JConcurrentMapWrapper")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JConcurrentMapWrapper = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers$JConcurrentMapWrapper)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers$JConcurrentMapWrapper = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers$JConcurrentMapWrapper(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers$JConcurrentMapWrapper;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers$JConcurrentMapWrapper = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers$JConcurrentMapWrapper: 0
}, false, "scala.collection.convert.Wrappers$JConcurrentMapWrapper", ScalaJS.data.scala_collection_mutable_AbstractMap, {
  scala_collection_convert_Wrappers$JConcurrentMapWrapper: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_collection_concurrent_Map: 1,
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
ScalaJS.c.scala_collection_convert_Wrappers$JConcurrentMapWrapper.prototype.$classData = ScalaJS.data.scala_collection_convert_Wrappers$JConcurrentMapWrapper;
//@ sourceMappingURL=Wrappers$JConcurrentMapWrapper.js.map
