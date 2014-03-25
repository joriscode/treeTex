/** @constructor */
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet = (function() {
  ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.call(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype = new ScalaJS.inheritable.scala_collection_SortedMapLike$DefaultKeySortedSet();
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.constructor = ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet;
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.empty__Lscala_collection_immutable_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_immutable_SortedSet$class__empty__Lscala_collection_immutable_SortedSet__Lscala_collection_immutable_SortedSet(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__companion__Lscala_collection_immutable_Set__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__toSet__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__seq__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__parCombiner__Lscala_collection_immutable_Set__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$plus__O__Lscala_collection_immutable_SortedSet = (function(elem) {
  if (this.apply__O__Z(elem)) {
    return this
  } else {
    return ScalaJS.as.scala_collection_immutable_SortedSet(ScalaJS.modules.scala_collection_immutable_SortedSet().apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedSet(ScalaJS.modules.scala_collection_immutable_Nil(), this.ordering__Lscala_math_Ordering()).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this).$$plus__O__Lscala_collection_Set(elem))
  }
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_immutable_SortedSet = (function(elem) {
  if (this.apply__O__Z(elem)) {
    return ScalaJS.as.scala_collection_immutable_SortedSet(ScalaJS.modules.scala_collection_immutable_SortedSet().apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedSet(ScalaJS.modules.scala_collection_immutable_Nil(), this.ordering__Lscala_math_Ordering()).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this).$$minus__O__Lscala_collection_Set(elem))
  } else {
    return this
  }
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_SortedSet = (function(from, until) {
  var map = ScalaJS.as.scala_collection_immutable_SortedMap(this.scala$collection$immutable$SortedMap$DefaultKeySortedSet$$$outer__Lscala_collection_immutable_SortedMap().rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedMap(from, until));
  return new ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet().init___Lscala_collection_immutable_SortedMap(map)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.scala$collection$immutable$SortedMap$DefaultKeySortedSet$$$outer__Lscala_collection_immutable_SortedMap = (function() {
  return ScalaJS.as.scala_collection_immutable_SortedMap(this.$$outer$f)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.repr__Lscala_collection_generic_Sorted = (function() {
  return ScalaJS.as.scala_collection_generic_Sorted(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.range__O__O__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.until__O__Lscala_collection_generic_Sorted = (function(until) {
  return this.until__O__Lscala_collection_SortedSet(until)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.from__O__Lscala_collection_generic_Sorted = (function(from) {
  return this.from__O__Lscala_collection_SortedSet(from)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.empty__Lscala_collection_SortedSet = (function() {
  return this.empty__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_SortedSet(from, until)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_SortedSet(from, until)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_SortedSet = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$$plus__O__Lscala_collection_SortedSet = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_SortedSet(elem)
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.init___Lscala_collection_immutable_SortedMap = (function($$outer) {
  ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.init___Lscala_collection_SortedMapLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Set$class__$init$__Lscala_collection_immutable_Set__V(this);
  ScalaJS.impls.scala_collection_immutable_SortedSet$class__$init$__Lscala_collection_immutable_SortedSet__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.scala$collection$immutable$SortedMap$DefaultKeySortedSet$$$outer__ = (function() {
  return this.scala$collection$immutable$SortedMap$DefaultKeySortedSet$$$outer__Lscala_collection_immutable_SortedMap()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_SortedMap$DefaultKeySortedSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype = ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype;
ScalaJS.is.scala_collection_immutable_SortedMap$DefaultKeySortedSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_SortedMap$DefaultKeySortedSet)))
});
ScalaJS.as.scala_collection_immutable_SortedMap$DefaultKeySortedSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_SortedMap$DefaultKeySortedSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.SortedMap$DefaultKeySortedSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_SortedMap$DefaultKeySortedSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_SortedMap$DefaultKeySortedSet)))
});
ScalaJS.asArrayOf.scala_collection_immutable_SortedMap$DefaultKeySortedSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_SortedMap$DefaultKeySortedSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.SortedMap$DefaultKeySortedSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_SortedMap$DefaultKeySortedSet = new ScalaJS.ClassTypeData({
  scala_collection_immutable_SortedMap$DefaultKeySortedSet: 0
}, false, "scala.collection.immutable.SortedMap$DefaultKeySortedSet", ScalaJS.data.scala_collection_SortedMapLike$DefaultKeySortedSet, {
  scala_collection_immutable_SortedMap$DefaultKeySortedSet: 1,
  scala_collection_immutable_SortedSet: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_SortedMapLike$DefaultKeySortedSet: 1,
  scala_collection_SortedSet: 1,
  scala_collection_SortedSetLike: 1,
  scala_collection_generic_Sorted: 1,
  scala_collection_MapLike$DefaultKeySet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet.prototype.$classData = ScalaJS.data.scala_collection_immutable_SortedMap$DefaultKeySortedSet;
//@ sourceMappingURL=SortedMap$DefaultKeySortedSet.js.map
