/** @constructor */
ScalaJS.c.scala_collection_immutable_HashMap = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.call(this)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype = new ScalaJS.inheritable.scala_collection_immutable_AbstractMap();
ScalaJS.c.scala_collection_immutable_HashMap.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashMap;
ScalaJS.c.scala_collection_immutable_HashMap.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.size__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.empty__Lscala_collection_immutable_HashMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashMap().empty__Lscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.get__O__Lscala_Option = (function(key) {
  return this.get0__O__I__I__Lscala_Option(key, this.computeHash__O__I(key), 0)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.updated__O__O__Lscala_collection_immutable_HashMap = (function(key, value) {
  return this.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(key, this.computeHash__O__I(key), 0, value, null, null)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_HashMap = (function(kv) {
  return this.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(kv.$$und1__O(), this.computeHash__O__I(kv.$$und1__O()), 0, kv.$$und2__O(), kv, null)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_HashMap = (function(elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_immutable_HashMap(this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_HashMap(elem1).$$plus__Lscala_Tuple2__Lscala_collection_immutable_HashMap(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(elems, ScalaJS.modules.scala_collection_immutable_HashMap().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$minus__O__Lscala_collection_immutable_HashMap = (function(key) {
  return this.removed0__O__I__I__Lscala_collection_immutable_HashMap(key, this.computeHash__O__I(key), 0)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.elemHashCode__O__I = (function(key) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(key)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.improve__I__I = (function(hcode) {
  var h = (hcode + (~(hcode << 9)));
  h = (h ^ (h >>> 14));
  h = (h + (h << 4));
  return (h ^ (h >>> 10))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I(this.elemHashCode__O__I(key))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.get0__O__I__I__Lscala_Option = (function(key, hash, level) {
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(key, hash, level, value, kv, merger) {
  return new ScalaJS.c.scala_collection_immutable_HashMap$HashMap1().init___O__I__O__Lscala_Tuple2(key, hash, value, kv)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.removed0__O__I__I__Lscala_collection_immutable_HashMap = (function(key, hash, level) {
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.writeReplace__O = (function() {
  return new ScalaJS.c.scala_collection_immutable_HashMap$SerializationProxy().init___Lscala_collection_immutable_HashMap(this)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.split__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.as.scala_collection_immutable_Seq(ScalaJS.modules.scala_collection_immutable_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_HashMap.getArrayOf(), [this]), 1))))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merge__Lscala_collection_immutable_HashMap__Lscala_Function2__Lscala_collection_immutable_HashMap = (function(that, mergef) {
  return this.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(that, 0, ScalaJS.modules.scala_collection_immutable_HashMap().scala$collection$immutable$HashMap$$liftMerger__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger(mergef))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merge$default$2__Lscala_Null = (function() {
  return null
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merged__Lscala_collection_immutable_HashMap__Lscala_Function2__Lscala_collection_immutable_HashMap = (function(that, mergef) {
  return this.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(that, 0, ScalaJS.modules.scala_collection_immutable_HashMap().scala$collection$immutable$HashMap$$liftMerger__Lscala_Function2__Lscala_collection_immutable_HashMap$Merger(mergef))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap = (function(that, level, merger) {
  return that
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.par__Lscala_collection_parallel_immutable_ParHashMap = (function() {
  return ScalaJS.modules.scala_collection_parallel_immutable_ParHashMap().fromTrie__Lscala_collection_immutable_HashMap__Lscala_collection_parallel_immutable_ParHashMap(this)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.keySet__Lscala_collection_Set = (function() {
  return this.keySet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map(p)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(xs)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_immutable_ParHashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_HashMap(key)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_HashMap(elem)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_HashMap(key)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_HashMap(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_HashMap(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_HashMap(kv)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_HashMap(kv)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_HashMap(kv)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_HashMap(key, value)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_HashMap(key, value)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_HashMap(key, value)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return this.empty__Lscala_collection_immutable_HashMap()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_immutable_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__ = (function(that, level, merger) {
  return this.merge0__Lscala_collection_immutable_HashMap__I__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(that, level, merger)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merged__Lscala_collection_immutable_HashMap__Lscala_Function2__ = (function(that$2, mergef) {
  return this.merged__Lscala_collection_immutable_HashMap__Lscala_Function2__Lscala_collection_immutable_HashMap(that$2, mergef)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.merge__Lscala_collection_immutable_HashMap__Lscala_Function2__ = (function(that$3, mergef$2) {
  return this.merge__Lscala_collection_immutable_HashMap__Lscala_Function2__Lscala_collection_immutable_HashMap(that$3, mergef$2)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.split__ = (function() {
  return this.split__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.writeReplace__ = (function() {
  return this.writeReplace__O()
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.removed0__O__I__I__ = (function(key, hash, level$2) {
  return this.removed0__O__I__I__Lscala_collection_immutable_HashMap(key, hash, level$2)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__ = (function(key$2, hash$2, level$3, value, kv, merger$2) {
  return this.updated0__O__I__I__O__Lscala_Tuple2__Lscala_collection_immutable_HashMap$Merger__Lscala_collection_immutable_HashMap(key$2, hash$2, level$3, value, kv, merger$2)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.get0__O__I__I__ = (function(key$3, hash$3, level$4) {
  return this.get0__O__I__I__Lscala_Option(key$3, hash$3, level$4)
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.computeHash__O__ = (function(key$4) {
  return ScalaJS.bI(this.computeHash__O__I(key$4))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.improve__I__ = (function(hcode) {
  return ScalaJS.bI(this.improve__I__I(hcode))
});
ScalaJS.c.scala_collection_immutable_HashMap.prototype.elemHashCode__O__ = (function(key$5) {
  return ScalaJS.bI(this.elemHashCode__O__I(key$5))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashMap.prototype = ScalaJS.c.scala_collection_immutable_HashMap.prototype;
ScalaJS.is.scala_collection_immutable_HashMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashMap)))
});
ScalaJS.as.scala_collection_immutable_HashMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashMap)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashMap = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashMap: 0
}, false, "scala.collection.immutable.HashMap", ScalaJS.data.scala_collection_immutable_AbstractMap, {
  scala_collection_immutable_HashMap: 1,
  scala_collection_CustomParallelizable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_AbstractMap: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_HashMap.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashMap;
//@ sourceMappingURL=HashMap.js.map
