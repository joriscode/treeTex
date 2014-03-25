/** @constructor */
ScalaJS.c.scala_collection_immutable_HashSet = (function() {
  ScalaJS.c.scala_collection_AbstractSet.call(this)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype = new ScalaJS.inheritable.scala_collection_AbstractSet();
ScalaJS.c.scala_collection_immutable_HashSet.prototype.constructor = ScalaJS.c.scala_collection_immutable_HashSet;
ScalaJS.c.scala_collection_immutable_HashSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__toSet__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__seq__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.par__Lscala_collection_parallel_immutable_ParHashSet = (function() {
  return ScalaJS.modules.scala_collection_parallel_immutable_ParHashSet().fromTrie__Lscala_collection_immutable_HashSet__Lscala_collection_parallel_immutable_ParHashSet(this)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.size__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.empty__Lscala_collection_immutable_HashSet = (function() {
  return ScalaJS.modules.scala_collection_immutable_HashSet().empty__Lscala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.foreach__Lscala_Function1__V = (function(f) {
  /*<skip>*/
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.contains__O__Z = (function(e) {
  return this.get0__O__I__I__Z(e, this.computeHash__O__I(e), 0)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$plus__O__Lscala_collection_immutable_HashSet = (function(e) {
  return this.updated0__O__I__I__Lscala_collection_immutable_HashSet(e, this.computeHash__O__I(e), 0)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_immutable_HashSet = (function(elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_immutable_HashSet(this.$$plus__O__Lscala_collection_immutable_HashSet(elem1).$$plus__O__Lscala_collection_immutable_HashSet(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(elems))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$minus__O__Lscala_collection_immutable_HashSet = (function(e) {
  return this.removed0__O__I__I__Lscala_collection_immutable_HashSet(e, this.computeHash__O__I(e), 0)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.elemHashCode__O__I = (function(key) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(key)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.improve__I__I = (function(hcode) {
  var h = (hcode + (~(hcode << 9)));
  h = (h ^ (h >>> 14));
  h = (h + (h << 4));
  return (h ^ (h >>> 10))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.computeHash__O__I = (function(key) {
  return this.improve__I__I(this.elemHashCode__O__I(key))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.get0__O__I__I__Z = (function(key, hash, level) {
  return false
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.updated0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  return new ScalaJS.c.scala_collection_immutable_HashSet$HashSet1().init___O__I(key, hash)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.removed0__O__I__I__Lscala_collection_immutable_HashSet = (function(key, hash, level) {
  return this
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.writeReplace__O = (function() {
  return new ScalaJS.c.scala_collection_immutable_HashSet$SerializationProxy().init___Lscala_collection_immutable_HashSet(this)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_HashSet(elem)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_HashSet(elem)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_HashSet(elem)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_immutable_HashSet(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_HashSet(elem)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_HashSet(elem)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_immutable_HashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_immutable_ParHashSet()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Set$class__$init$__Lscala_collection_immutable_Set__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.writeReplace__ = (function() {
  return this.writeReplace__O()
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.removed0__O__I__I__ = (function(key, hash, level) {
  return this.removed0__O__I__I__Lscala_collection_immutable_HashSet(key, hash, level)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.updated0__O__I__I__ = (function(key$2, hash$2, level$2) {
  return this.updated0__O__I__I__Lscala_collection_immutable_HashSet(key$2, hash$2, level$2)
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.get0__O__I__I__ = (function(key$3, hash$3, level$3) {
  return ScalaJS.bZ(this.get0__O__I__I__Z(key$3, hash$3, level$3))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.computeHash__O__ = (function(key$4) {
  return ScalaJS.bI(this.computeHash__O__I(key$4))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.improve__I__ = (function(hcode) {
  return ScalaJS.bI(this.improve__I__I(hcode))
});
ScalaJS.c.scala_collection_immutable_HashSet.prototype.elemHashCode__O__ = (function(key$5) {
  return ScalaJS.bI(this.elemHashCode__O__I(key$5))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_HashSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_HashSet.prototype = ScalaJS.c.scala_collection_immutable_HashSet.prototype;
ScalaJS.is.scala_collection_immutable_HashSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_HashSet)))
});
ScalaJS.as.scala_collection_immutable_HashSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_HashSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.HashSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_HashSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_HashSet)))
});
ScalaJS.asArrayOf.scala_collection_immutable_HashSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_HashSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.HashSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_HashSet = new ScalaJS.ClassTypeData({
  scala_collection_immutable_HashSet: 0
}, false, "scala.collection.immutable.HashSet", ScalaJS.data.scala_collection_AbstractSet, {
  scala_collection_immutable_HashSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
ScalaJS.c.scala_collection_immutable_HashSet.prototype.$classData = ScalaJS.data.scala_collection_immutable_HashSet;
//@ sourceMappingURL=HashSet.js.map
