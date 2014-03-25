/** @constructor */
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet = (function() {
  ScalaJS.c.scala_collection_MapLike$DefaultKeySet.call(this)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype = new ScalaJS.inheritable.scala_collection_MapLike$DefaultKeySet();
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.constructor = ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet;
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.empty__Lscala_collection_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_SortedSet$class__empty__Lscala_collection_SortedSet__Lscala_collection_SortedSet(this)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__subsetOf__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.keySet__Lscala_collection_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__keySet__Lscala_collection_SortedSetLike__Lscala_collection_SortedSet(this)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.firstKey__O = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__firstKey__Lscala_collection_SortedSetLike__O(this)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.lastKey__O = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__lastKey__Lscala_collection_SortedSetLike__O(this)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.from__O__Lscala_collection_SortedSet = (function(from) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__from__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet(this, from)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.until__O__Lscala_collection_SortedSet = (function(until) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__until__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet(this, until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.range__O__O__Lscala_collection_SortedSet = (function(from, until) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__range__Lscala_collection_SortedSetLike__O__O__Lscala_collection_SortedSet(this, from, until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__subsetOf__Lscala_collection_SortedSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.compare__O__O__I = (function(k0, k1) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__compare__Lscala_collection_generic_Sorted__O__O__I(this, k0, k1)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.to__O__Lscala_collection_generic_Sorted = (function(to) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__to__Lscala_collection_generic_Sorted__O__Lscala_collection_generic_Sorted(this, to)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.hasAll__Lscala_collection_Iterator__Z = (function(j) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__hasAll__Lscala_collection_generic_Sorted__Lscala_collection_Iterator__Z(this, j)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.ordering__Lscala_math_Ordering = (function() {
  return this.scala$collection$SortedMapLike$DefaultKeySortedSet$$$outer__Lscala_collection_SortedMapLike().ordering__Lscala_math_Ordering()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$plus__O__Lscala_collection_SortedSet = (function(elem) {
  return ScalaJS.as.scala_collection_SortedSet(ScalaJS.modules.scala_collection_SortedSet().apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedSet(ScalaJS.modules.scala_collection_immutable_Nil(), this.ordering__Lscala_math_Ordering()).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this).$$plus__O__Lscala_collection_Set(elem))
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_SortedSet = (function(elem) {
  return ScalaJS.as.scala_collection_SortedSet(ScalaJS.modules.scala_collection_SortedSet().apply__Lscala_collection_Seq__Lscala_math_Ordering__Lscala_collection_SortedSet(ScalaJS.modules.scala_collection_immutable_Nil(), this.ordering__Lscala_math_Ordering()).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this).$$minus__O__Lscala_collection_Set(elem))
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet = (function(from, until) {
  var map = this.scala$collection$SortedMapLike$DefaultKeySortedSet$$$outer__Lscala_collection_SortedMapLike().rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedMap(from, until);
  return new ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet().init___Lscala_collection_SortedMapLike(map)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.scala$collection$SortedMapLike$DefaultKeySortedSet$$$outer__Lscala_collection_SortedMapLike = (function() {
  return ScalaJS.as.scala_collection_SortedMapLike(this.$$outer$f)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.repr__Lscala_collection_generic_Sorted = (function() {
  return ScalaJS.as.scala_collection_generic_Sorted(this.repr__O())
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.range__O__O__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.until__O__Lscala_collection_generic_Sorted = (function(until) {
  return this.until__O__Lscala_collection_SortedSet(until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.from__O__Lscala_collection_generic_Sorted = (function(from) {
  return this.from__O__Lscala_collection_SortedSet(from)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_SortedSet()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_SortedSet()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_SortedSet(elem)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_SortedSet(elem)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_SortedSet(elem)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_SortedSet(elem)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_SortedSet(elem)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.init___Lscala_collection_SortedMapLike = (function($$outer) {
  ScalaJS.c.scala_collection_MapLike$DefaultKeySet.prototype.init___Lscala_collection_MapLike.call(this, $$outer);
  ScalaJS.impls.scala_collection_generic_Sorted$class__$init$__Lscala_collection_generic_Sorted__V(this);
  ScalaJS.impls.scala_collection_SortedSetLike$class__$init$__Lscala_collection_SortedSetLike__V(this);
  ScalaJS.impls.scala_collection_SortedSet$class__$init$__Lscala_collection_SortedSet__V(this);
  return this
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.hasAll__Lscala_collection_Iterator__ = (function(j) {
  return ScalaJS.bZ(this.hasAll__Lscala_collection_Iterator__Z(j))
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.to__O__ = (function(to) {
  return this.to__O__Lscala_collection_generic_Sorted(to)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.compare__O__O__ = (function(k0, k1) {
  return ScalaJS.bI(this.compare__O__O__I(k0, k1))
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.range__O__O__ = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.until__O__ = (function(until$2) {
  return this.until__O__Lscala_collection_SortedSet(until$2)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.from__O__ = (function(from$2) {
  return this.from__O__Lscala_collection_SortedSet(from$2)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.lastKey__ = (function() {
  return this.lastKey__O()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.firstKey__ = (function() {
  return this.firstKey__O()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.keySet__ = (function() {
  return this.keySet__Lscala_collection_SortedSet()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z(that))
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.scala$collection$SortedMapLike$DefaultKeySortedSet$$$outer__ = (function() {
  return this.scala$collection$SortedMapLike$DefaultKeySortedSet$$$outer__Lscala_collection_SortedMapLike()
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__ = (function(from$3, until$3) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet(from$3, until$3)
});
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.ordering__ = (function() {
  return this.ordering__Lscala_math_Ordering()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SortedMapLike$DefaultKeySortedSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype = ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype;
ScalaJS.is.scala_collection_SortedMapLike$DefaultKeySortedSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SortedMapLike$DefaultKeySortedSet)))
});
ScalaJS.as.scala_collection_SortedMapLike$DefaultKeySortedSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_SortedMapLike$DefaultKeySortedSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SortedMapLike$DefaultKeySortedSet")
  }
});
ScalaJS.isArrayOf.scala_collection_SortedMapLike$DefaultKeySortedSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SortedMapLike$DefaultKeySortedSet)))
});
ScalaJS.asArrayOf.scala_collection_SortedMapLike$DefaultKeySortedSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SortedMapLike$DefaultKeySortedSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SortedMapLike$DefaultKeySortedSet;", depth)
  }
});
ScalaJS.data.scala_collection_SortedMapLike$DefaultKeySortedSet = new ScalaJS.ClassTypeData({
  scala_collection_SortedMapLike$DefaultKeySortedSet: 0
}, false, "scala.collection.SortedMapLike$DefaultKeySortedSet", ScalaJS.data.scala_collection_MapLike$DefaultKeySet, {
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
ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet.prototype.$classData = ScalaJS.data.scala_collection_SortedMapLike$DefaultKeySortedSet;
//@ sourceMappingURL=SortedMapLike$DefaultKeySortedSet.js.map
