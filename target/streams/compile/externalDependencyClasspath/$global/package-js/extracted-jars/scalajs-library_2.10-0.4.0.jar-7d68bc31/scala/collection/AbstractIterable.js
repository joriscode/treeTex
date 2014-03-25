/** @constructor */
ScalaJS.c.scala_collection_AbstractIterable = (function() {
  ScalaJS.c.scala_collection_AbstractTraversable.call(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype = new ScalaJS.inheritable.scala_collection_AbstractTraversable();
ScalaJS.c.scala_collection_AbstractIterable.prototype.constructor = ScalaJS.c.scala_collection_AbstractIterable;
ScalaJS.c.scala_collection_AbstractIterable.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_Iterable$class__companion__Lscala_collection_Iterable__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.seq__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_Iterable$class__seq__Lscala_collection_Iterable__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__thisCollection__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return ScalaJS.impls.scala_collection_IterableLike$class__toCollection__Lscala_collection_IterableLike__O__Lscala_collection_Iterable(this, repr)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_IterableLike$class__foreach__Lscala_collection_IterableLike__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__forall__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__exists__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__find__Lscala_collection_IterableLike__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__isEmpty__Lscala_collection_IterableLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__foldRight__Lscala_collection_IterableLike__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterable__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterator__Lscala_collection_IterableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.slice__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_IterableLike$class__slice__Lscala_collection_IterableLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.take__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IterableLike$class__take__Lscala_collection_IterableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.drop__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IterableLike$class__drop__Lscala_collection_IterableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__takeWhile__Lscala_collection_IterableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.grouped__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__grouped__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.sliding__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.sliding__I__I__Lscala_collection_Iterator = (function(size, step) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__I__Lscala_collection_Iterator(this, size, step)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.takeRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IterableLike$class__takeRight__Lscala_collection_IterableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.dropRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IterableLike$class__dropRight__Lscala_collection_IterableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_IterableLike$class__copyToArray__Lscala_collection_IterableLike__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O = (function(that, thisElem, thatElem, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zipAll__Lscala_collection_IterableLike__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(this, that, thisElem, thatElem, bf)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zipWithIndex__Lscala_collection_IterableLike__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toStream__Lscala_collection_IterableLike__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.canEqual__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__canEqual__Lscala_collection_IterableLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.view__Lscala_collection_IterableView = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__Lscala_collection_IterableView(this)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__I__I__Lscala_collection_IterableView(this, from, until)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractTraversable.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_GenIterable$class__$init$__Lscala_collection_GenIterable__V(this);
  ScalaJS.impls.scala_collection_IterableLike$class__$init$__Lscala_collection_IterableLike__V(this);
  ScalaJS.impls.scala_collection_Iterable$class__$init$__Lscala_collection_Iterable__V(this);
  return this
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.canEqual__O__ = (function(that) {
  return ScalaJS.bZ(this.canEqual__O__Z(that))
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.sameElements__Lscala_collection_GenIterable__ = (function(that$2) {
  return this.sameElements__Lscala_collection_GenIterable__Z(that$2)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__ = (function(bf) {
  return this.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(bf)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, thisElem, thatElem, bf$2) {
  return this.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(that$3, thisElem, thatElem, bf$2)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$4, bf$3) {
  return this.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$4, bf$3)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.dropRight__I__ = (function(n) {
  return this.dropRight__I__O(n)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.takeRight__I__ = (function(n$2) {
  return this.takeRight__I__O(n$2)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.sliding__I__I__ = (function(size, step) {
  return this.sliding__I__I__Lscala_collection_Iterator(size, step)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.sliding__I__ = (function(size$2) {
  return this.sliding__I__Lscala_collection_Iterator(size$2)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.grouped__I__ = (function(size$3) {
  return this.grouped__I__Lscala_collection_Iterator(size$3)
});
ScalaJS.c.scala_collection_AbstractIterable.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_AbstractIterable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_AbstractIterable.prototype = ScalaJS.c.scala_collection_AbstractIterable.prototype;
ScalaJS.is.scala_collection_AbstractIterable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_AbstractIterable)))
});
ScalaJS.as.scala_collection_AbstractIterable = (function(obj) {
  if ((ScalaJS.is.scala_collection_AbstractIterable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.AbstractIterable")
  }
});
ScalaJS.isArrayOf.scala_collection_AbstractIterable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_AbstractIterable)))
});
ScalaJS.asArrayOf.scala_collection_AbstractIterable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_AbstractIterable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.AbstractIterable;", depth)
  }
});
ScalaJS.data.scala_collection_AbstractIterable = new ScalaJS.ClassTypeData({
  scala_collection_AbstractIterable: 0
}, false, "scala.collection.AbstractIterable", ScalaJS.data.scala_collection_AbstractTraversable, {
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
ScalaJS.c.scala_collection_AbstractIterable.prototype.$classData = ScalaJS.data.scala_collection_AbstractIterable;
//@ sourceMappingURL=AbstractIterable.js.map
