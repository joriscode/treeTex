/** @constructor */
ScalaJS.c.scala_collection_immutable_ListSet = (function() {
  ScalaJS.c.scala_collection_AbstractSet.call(this)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype = new ScalaJS.inheritable.scala_collection_AbstractSet();
ScalaJS.c.scala_collection_immutable_ListSet.prototype.constructor = ScalaJS.c.scala_collection_immutable_ListSet;
ScalaJS.c.scala_collection_immutable_ListSet.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__toSet__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__seq__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__parCombiner__Lscala_collection_immutable_Set__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.size__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.isEmpty__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.contains__O__Z = (function(elem) {
  return false
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$plus__O__Lscala_collection_immutable_ListSet = (function(elem) {
  return new ScalaJS.c.scala_collection_immutable_ListSet$Node().init___Lscala_collection_immutable_ListSet__O(this, elem)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$minus__O__Lscala_collection_immutable_ListSet = (function(elem) {
  return this
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_ListSet = (function(xs) {
  if (xs.isEmpty__Z()) {
    return this
  } else {
    return ScalaJS.as.scala_collection_immutable_ListSet$ListSetBuilder(new ScalaJS.c.scala_collection_immutable_ListSet$ListSetBuilder().init___Lscala_collection_immutable_ListSet(this).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs.seq__Lscala_collection_TraversableOnce())).result__Lscala_collection_immutable_ListSet()
  }
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.scala$collection$immutable$ListSet$$unchecked$und$plus__O__Lscala_collection_immutable_ListSet = (function(e) {
  return new ScalaJS.c.scala_collection_immutable_ListSet$Node().init___Lscala_collection_immutable_ListSet__O(this, e)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.scala$collection$immutable$ListSet$$unchecked$undouter__Lscala_collection_immutable_ListSet = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("Empty ListSet has no outer pointer")
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_ListSet$$anon$1().init___Lscala_collection_immutable_ListSet(this)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.head__O = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("Set has no elements")
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.tail__Lscala_collection_immutable_ListSet = (function() {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("Next of an empty set")
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.stringPrefix__T = (function() {
  return "ListSet"
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.empty__Lscala_collection_Set = (function() {
  return ScalaJS.as.scala_collection_Set(this.empty__Lscala_collection_GenSet())
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_ListSet(elems)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_ListSet(elem)
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Set$class__$init$__Lscala_collection_immutable_Set__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.scala$collection$immutable$ListSet$$unchecked$undouter__ = (function() {
  return this.scala$collection$immutable$ListSet$$unchecked$undouter__Lscala_collection_immutable_ListSet()
});
ScalaJS.c.scala_collection_immutable_ListSet.prototype.scala$collection$immutable$ListSet$$unchecked$und$plus__O__ = (function(e) {
  return this.scala$collection$immutable$ListSet$$unchecked$und$plus__O__Lscala_collection_immutable_ListSet(e)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_ListSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_ListSet.prototype = ScalaJS.c.scala_collection_immutable_ListSet.prototype;
ScalaJS.is.scala_collection_immutable_ListSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_ListSet)))
});
ScalaJS.as.scala_collection_immutable_ListSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_ListSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.ListSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_ListSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_ListSet)))
});
ScalaJS.asArrayOf.scala_collection_immutable_ListSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_ListSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.ListSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_ListSet = new ScalaJS.ClassTypeData({
  scala_collection_immutable_ListSet: 0
}, false, "scala.collection.immutable.ListSet", ScalaJS.data.scala_collection_AbstractSet, {
  scala_collection_immutable_ListSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_immutable_ListSet.prototype.$classData = ScalaJS.data.scala_collection_immutable_ListSet;
//@ sourceMappingURL=ListSet.js.map
