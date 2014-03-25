/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.underlying$1 = null;
  this.$$outer$1 = null;
  this.bitmap$0$1 = false
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$$anon$1;
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.underlying$lzycompute__p1__Lscala_collection_immutable_Stream = (function() {
  if ((!this.bitmap$0$1)) {
    this.underlying$1 = ScalaJS.as.scala_collection_immutable_Stream(this.$$outer$1.repr__O());
    this.bitmap$0$1 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.underlying$1
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.force__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__force__Lscala_collection_immutable_StreamViewLike__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newForced__Lscala_Function0__Lscala_collection_immutable_StreamViewLike$Transformed = (function(xs) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newForced__Lscala_collection_immutable_StreamViewLike__Lscala_Function0__Lscala_collection_immutable_StreamViewLike$Transformed(this, xs)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newAppended__Lscala_collection_GenTraversable__Lscala_collection_immutable_StreamViewLike$Transformed = (function(that) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newAppended__Lscala_collection_immutable_StreamViewLike__Lscala_collection_GenTraversable__Lscala_collection_immutable_StreamViewLike$Transformed(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed = (function(f) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newMapped__Lscala_collection_immutable_StreamViewLike__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(this, f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFlatMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed = (function(f) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newFlatMapped__Lscala_collection_immutable_StreamViewLike__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(this, f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFiltered__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed = (function(p) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newFiltered__Lscala_collection_immutable_StreamViewLike__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_immutable_StreamViewLike$Transformed = (function(_endpoints) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newSliced__Lscala_collection_immutable_StreamViewLike__Lscala_collection_generic_SliceInterval__Lscala_collection_immutable_StreamViewLike$Transformed(this, _endpoints)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDroppedWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed = (function(p) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newDroppedWhile__Lscala_collection_immutable_StreamViewLike__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTakenWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed = (function(p) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newTakenWhile__Lscala_collection_immutable_StreamViewLike__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZipped__Lscala_collection_GenIterable__Lscala_collection_immutable_StreamViewLike$Transformed = (function(that) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newZipped__Lscala_collection_immutable_StreamViewLike__Lscala_collection_GenIterable__Lscala_collection_immutable_StreamViewLike$Transformed(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZippedAll__Lscala_collection_GenIterable__O__O__Lscala_collection_immutable_StreamViewLike$Transformed = (function(that, _thisElem, _thatElem) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newZippedAll__Lscala_collection_immutable_StreamViewLike__Lscala_collection_GenIterable__O__O__Lscala_collection_immutable_StreamViewLike$Transformed(this, that, _thisElem, _thatElem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newReversed__Lscala_collection_immutable_StreamViewLike$Transformed = (function() {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newReversed__Lscala_collection_immutable_StreamViewLike__Lscala_collection_immutable_StreamViewLike$Transformed(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newPatched__I__Lscala_collection_GenSeq__I__Lscala_collection_immutable_StreamViewLike$Transformed = (function(_from, _patch, _replaced) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newPatched__Lscala_collection_immutable_StreamViewLike__I__Lscala_collection_GenSeq__I__Lscala_collection_immutable_StreamViewLike$Transformed(this, _from, _patch, _replaced)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newPrepended__O__Lscala_collection_immutable_StreamViewLike$Transformed = (function(elem) {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__newPrepended__Lscala_collection_immutable_StreamViewLike__O__Lscala_collection_immutable_StreamViewLike$Transformed(this, elem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.stringPrefix__T = (function() {
  return ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__stringPrefix__Lscala_collection_immutable_StreamViewLike__T(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTaken__I__Lscala_collection_SeqViewLike$Transformed = (function(n) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__newTaken__Lscala_collection_SeqViewLike__I__Lscala_collection_SeqViewLike$Transformed(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDropped__I__Lscala_collection_SeqViewLike$Transformed = (function(n) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__newDropped__Lscala_collection_SeqViewLike__I__Lscala_collection_SeqViewLike$Transformed(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverse__Lscala_collection_SeqView = (function() {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__reverse__Lscala_collection_SeqViewLike__Lscala_collection_SeqView(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.patch__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O = (function(from, patch, replaced, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__patch__Lscala_collection_SeqViewLike__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O(this, from, patch, replaced, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.padTo__I__O__Lscala_collection_generic_CanBuildFrom__O = (function(len, elem, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__padTo__Lscala_collection_SeqViewLike__I__O__Lscala_collection_generic_CanBuildFrom__O(this, len, elem, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__reverseMap__Lscala_collection_SeqViewLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.updated__I__O__Lscala_collection_generic_CanBuildFrom__O = (function(index, elem, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__updated__Lscala_collection_SeqViewLike__I__O__Lscala_collection_generic_CanBuildFrom__O(this, index, elem, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__$plus$colon__Lscala_collection_SeqViewLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__$colon$plus__Lscala_collection_SeqViewLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.union__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__union__Lscala_collection_SeqViewLike__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.diff__Lscala_collection_GenSeq__Lscala_collection_SeqView = (function(that) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__diff__Lscala_collection_SeqViewLike__Lscala_collection_GenSeq__Lscala_collection_SeqView(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.intersect__Lscala_collection_GenSeq__Lscala_collection_SeqView = (function(that) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__intersect__Lscala_collection_SeqViewLike__Lscala_collection_GenSeq__Lscala_collection_SeqView(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sorted__Lscala_math_Ordering__Lscala_collection_SeqView = (function(ord) {
  return ScalaJS.impls.scala_collection_SeqViewLike$class__sorted__Lscala_collection_SeqViewLike__Lscala_math_Ordering__Lscala_collection_SeqView(this, ord)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.drop__I__Lscala_collection_IterableView = (function(n) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__drop__Lscala_collection_IterableViewLike__I__Lscala_collection_IterableView(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.take__I__Lscala_collection_IterableView = (function(n) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__take__Lscala_collection_IterableViewLike__I__Lscala_collection_IterableView(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__zip__Lscala_collection_IterableViewLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__zipWithIndex__Lscala_collection_IterableViewLike__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O = (function(that, thisElem, thatElem, bf) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__zipAll__Lscala_collection_IterableViewLike__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(this, that, thisElem, thatElem, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.grouped__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__grouped__Lscala_collection_IterableViewLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliding__I__I__Lscala_collection_Iterator = (function(size, step) {
  return ScalaJS.impls.scala_collection_IterableViewLike$class__sliding__Lscala_collection_IterableViewLike__I__I__Lscala_collection_Iterator(this, size, step)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__newBuilder__Lscala_collection_TraversableViewLike__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.viewIdentifier__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__viewIdentifier__Lscala_collection_TraversableViewLike__T(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.viewIdString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__viewIdString__Lscala_collection_TraversableViewLike__T(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(xs, bf) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__$plus$plus__Lscala_collection_TraversableViewLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, xs, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__map__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function(pf, bf) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__collect__Lscala_collection_TraversableViewLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(this, pf, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__flatMap__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.flatten__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__flatten__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(this, asTraversable)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.filter__Lscala_Function1__Lscala_collection_TraversableView = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__filter__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.withFilter__Lscala_Function1__Lscala_collection_TraversableView = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__withFilter__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__partition__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.init__Lscala_collection_TraversableView = (function() {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__init__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableView(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.slice__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__slice__Lscala_collection_TraversableViewLike__I__I__Lscala_collection_TraversableView(this, from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.dropWhile__Lscala_Function1__Lscala_collection_TraversableView = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__dropWhile__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.takeWhile__Lscala_Function1__Lscala_collection_TraversableView = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__takeWhile__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__span__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__splitAt__Lscala_collection_TraversableViewLike__I__Lscala_Tuple2(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scanLeft__Lscala_collection_TraversableViewLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scanRight__Lscala_collection_TraversableViewLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.groupBy__Lscala_Function1__Lscala_collection_immutable_Map = (function(f) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__groupBy__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_immutable_Map(this, f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.unzip__Lscala_Function1__Lscala_Tuple2 = (function(asPair) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__unzip__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple2(this, asPair)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.unzip3__Lscala_Function1__Lscala_Tuple3 = (function(asTriple) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__unzip3__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple3(this, asTriple)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__toString__Lscala_collection_TraversableViewLike__T(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.viewToString__T = (function() {
  return ScalaJS.impls.scala_collection_GenTraversableViewLike$class__viewToString__Lscala_collection_GenTraversableViewLike__T(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.thisSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_ViewMkString$class__thisSeq__Lscala_collection_ViewMkString__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_ViewMkString$class__mkString__Lscala_collection_ViewMkString__T(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_ViewMkString$class__mkString__Lscala_collection_ViewMkString__T__T(this, sep)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_ViewMkString$class__mkString__Lscala_collection_ViewMkString__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_ViewMkString$class__addString__Lscala_collection_ViewMkString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_Seq$class__companion__Lscala_collection_Seq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.seq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_Seq$class__seq__Lscala_collection_Seq__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__thisCollection__Lscala_collection_SeqLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return ScalaJS.impls.scala_collection_SeqLike$class__toCollection__Lscala_collection_SeqLike__O__Lscala_collection_Seq(this, repr)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__parCombiner__Lscala_collection_SeqLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lengthCompare__Lscala_collection_SeqLike__I__I(this, len)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__isEmpty__Lscala_collection_SeqLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__size__Lscala_collection_SeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_SeqLike$class__segmentLength__Lscala_collection_SeqLike__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_SeqLike$class__indexWhere__Lscala_collection_SeqLike__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lastIndexWhere__Lscala_collection_SeqLike__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.permutations__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__permutations__Lscala_collection_SeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.combinations__I__Lscala_collection_Iterator = (function(n) {
  return ScalaJS.impls.scala_collection_SeqLike$class__combinations__Lscala_collection_SeqLike__I__Lscala_collection_Iterator(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__reverseIterator__Lscala_collection_SeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_SeqLike$class__startsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOfSlice__Lscala_collection_GenSeq__I = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__indexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOfSlice__Lscala_collection_GenSeq__I__I = (function(that, from) {
  return ScalaJS.impls.scala_collection_SeqLike$class__indexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__I(this, that, from)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lastIndexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I__I = (function(that, end) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lastIndexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__I(this, that, end)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.containsSlice__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__containsSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_SeqLike$class__contains__Lscala_collection_SeqLike__O__Z(this, elem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.distinct__O = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__distinct__Lscala_collection_SeqLike__O(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_SeqLike$class__corresponds__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sortWith__Lscala_Function2__O = (function(lt) {
  return ScalaJS.impls.scala_collection_SeqLike$class__sortWith__Lscala_collection_SeqLike__Lscala_Function2__O(this, lt)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sortBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, ord) {
  return ScalaJS.impls.scala_collection_SeqLike$class__sortBy__Lscala_collection_SeqLike__Lscala_Function1__Lscala_math_Ordering__O(this, f, ord)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__toSeq__Lscala_collection_SeqLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indices__Lscala_collection_immutable_Range = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__indices__Lscala_collection_SeqLike__Lscala_collection_immutable_Range(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__Lscala_collection_SeqView = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__view__Lscala_collection_SeqLike__Lscala_collection_SeqView(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__I__I__Lscala_collection_SeqView = (function(from, until) {
  return ScalaJS.impls.scala_collection_SeqLike$class__view__Lscala_collection_SeqLike__I__I__Lscala_collection_SeqView(this, from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isDefinedAt__I__Z = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__isDefinedAt__Lscala_collection_GenSeqLike__I__Z(this, idx)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.prefixLength__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__prefixLength__Lscala_collection_GenSeqLike__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__indexWhere__Lscala_collection_GenSeqLike__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__indexOf__Lscala_collection_GenSeqLike__O__I(this, elem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOf__O__I__I = (function(elem, from) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__indexOf__Lscala_collection_GenSeqLike__O__I__I(this, elem, from)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexOf__Lscala_collection_GenSeqLike__O__I(this, elem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOf__O__I__I = (function(elem, end) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexOf__Lscala_collection_GenSeqLike__O__I__I(this, elem, end)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexWhere__Lscala_collection_GenSeqLike__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.startsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__startsWith__Lscala_collection_GenSeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__hashCode__Lscala_collection_GenSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_IterableLike$class__foreach__Lscala_collection_IterableLike__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__forall__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__exists__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__find__Lscala_collection_IterableLike__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__foldRight__Lscala_collection_IterableLike__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterable__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterator__Lscala_collection_IterableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliding__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.takeRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IterableLike$class__takeRight__Lscala_collection_IterableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.dropRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IterableLike$class__dropRight__Lscala_collection_IterableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_IterableLike$class__copyToArray__Lscala_collection_IterableLike__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toStream__Lscala_collection_IterableLike__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.canEqual__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__canEqual__Lscala_collection_IterableLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.genericBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__genericBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.transpose__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__transpose__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.repr__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__repr__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isTraversableAgain__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__isTraversableAgain__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__hasDefiniteSize__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__filterNot__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scan__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, cbf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.headOption__Lscala_Option = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__headOption__Lscala_collection_TraversableLike__Lscala_Option(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.tail__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastOption__Lscala_Option = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__lastOption__Lscala_collection_TraversableLike__Lscala_Option(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliceWithKnownDelta__I__I__I__O = (function(from, until, delta) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownDelta__Lscala_collection_TraversableLike__I__I__I__O(this, from, until, delta)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliceWithKnownBound__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownBound__Lscala_collection_TraversableLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.tails__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tails__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.inits__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__inits__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toTraversable__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toTraversable__Lscala_collection_TraversableLike__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.to__Lscala_collection_generic_CanBuildFrom__O = (function(cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__to__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__O(this, cbf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.par__Lscala_collection_Parallel = (function() {
  return ScalaJS.impls.scala_collection_Parallelizable$class__par__Lscala_collection_Parallelizable__Lscala_collection_Parallel(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reversed__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.collectFirst__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option(this, pf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduce__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.fold__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__O = (function(z, seqop, combop) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O(this, z, seqop, combop)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V(this, xs, start)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V(this, xs)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSet__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toMap__Lscala_collection_TraversableOnce__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$div$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_GenTraversableOnce$class__$div$colon$bslash__Lscala_collection_GenTraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.orElse__Lscala_PartialFunction__Lscala_PartialFunction = (function(that) {
  return ScalaJS.impls.scala_PartialFunction$class__orElse__Lscala_PartialFunction__Lscala_PartialFunction__Lscala_PartialFunction(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen__Lscala_Function1__Lscala_PartialFunction = (function(k) {
  return ScalaJS.impls.scala_PartialFunction$class__andThen__Lscala_PartialFunction__Lscala_Function1__Lscala_PartialFunction(this, k)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lift__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_PartialFunction$class__lift__Lscala_PartialFunction__Lscala_Function1(this)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return ScalaJS.impls.scala_PartialFunction$class__applyOrElse__Lscala_PartialFunction__O__Lscala_Function1__O(this, x, default$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.runWith__Lscala_Function1__Lscala_Function1 = (function(action) {
  return ScalaJS.impls.scala_PartialFunction$class__runWith__Lscala_PartialFunction__Lscala_Function1__Lscala_Function1(this, action)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.underlying__Lscala_collection_immutable_Stream = (function() {
  if ((!this.bitmap$0$1)) {
    return this.underlying$lzycompute__p1__Lscala_collection_immutable_Stream()
  } else {
    return this.underlying$1
  }
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.$$outer$1.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.length__I = (function() {
  return this.$$outer$1.length__I()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply__I__O = (function(idx) {
  return this.$$outer$1.apply__I__O(idx)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_TraversableView(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_TraversableView(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_TraversableView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.init__O = (function() {
  return this.init__Lscala_collection_TraversableView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return this.withFilter__Lscala_Function1__Lscala_collection_TraversableView(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.filter__Lscala_Function1__O = (function(p) {
  return this.filter__Lscala_Function1__Lscala_collection_TraversableView(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.flatten__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return this.flatten__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(asTraversable)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_IterableView(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.take__I__Lscala_collection_TraversableView = (function(n) {
  return this.take__I__Lscala_collection_IterableView(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_IterableView(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.drop__I__Lscala_collection_TraversableView = (function(n) {
  return this.drop__I__Lscala_collection_IterableView(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sorted__Lscala_math_Ordering__O = (function(ord) {
  return this.sorted__Lscala_math_Ordering__Lscala_collection_SeqView(ord)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.intersect__Lscala_collection_GenSeq__O = (function(that) {
  return this.intersect__Lscala_collection_GenSeq__Lscala_collection_SeqView(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.diff__Lscala_collection_GenSeq__O = (function(that) {
  return this.diff__Lscala_collection_GenSeq__Lscala_collection_SeqView(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverse__O = (function() {
  return this.reverse__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDropped__I__Lscala_collection_TraversableViewLike$Transformed = (function(n) {
  return this.newDropped__I__Lscala_collection_SeqViewLike$Transformed(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDropped__I__Lscala_collection_IterableViewLike$Transformed = (function(n) {
  return this.newDropped__I__Lscala_collection_SeqViewLike$Transformed(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTaken__I__Lscala_collection_TraversableViewLike$Transformed = (function(n) {
  return this.newTaken__I__Lscala_collection_SeqViewLike$Transformed(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTaken__I__Lscala_collection_IterableViewLike$Transformed = (function(n) {
  return this.newTaken__I__Lscala_collection_SeqViewLike$Transformed(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newPrepended__O__Lscala_collection_SeqViewLike$Transformed = (function(elem) {
  return this.newPrepended__O__Lscala_collection_immutable_StreamViewLike$Transformed(elem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newPatched__I__Lscala_collection_GenSeq__I__Lscala_collection_SeqViewLike$Transformed = (function(_from, _patch, _replaced) {
  return this.newPatched__I__Lscala_collection_GenSeq__I__Lscala_collection_immutable_StreamViewLike$Transformed(_from, _patch, _replaced)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newReversed__Lscala_collection_SeqViewLike$Transformed = (function() {
  return this.newReversed__Lscala_collection_immutable_StreamViewLike$Transformed()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZippedAll__Lscala_collection_GenIterable__O__O__Lscala_collection_IterableViewLike$Transformed = (function(that, _thisElem, _thatElem) {
  return this.newZippedAll__Lscala_collection_GenIterable__O__O__Lscala_collection_immutable_StreamViewLike$Transformed(that, _thisElem, _thatElem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZippedAll__Lscala_collection_GenIterable__O__O__Lscala_collection_SeqViewLike$Transformed = (function(that, _thisElem, _thatElem) {
  return this.newZippedAll__Lscala_collection_GenIterable__O__O__Lscala_collection_immutable_StreamViewLike$Transformed(that, _thisElem, _thatElem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZipped__Lscala_collection_GenIterable__Lscala_collection_IterableViewLike$Transformed = (function(that) {
  return this.newZipped__Lscala_collection_GenIterable__Lscala_collection_immutable_StreamViewLike$Transformed(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZipped__Lscala_collection_GenIterable__Lscala_collection_SeqViewLike$Transformed = (function(that) {
  return this.newZipped__Lscala_collection_GenIterable__Lscala_collection_immutable_StreamViewLike$Transformed(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTakenWhile__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function(p) {
  return this.newTakenWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTakenWhile__Lscala_Function1__Lscala_collection_IterableViewLike$Transformed = (function(p) {
  return this.newTakenWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTakenWhile__Lscala_Function1__Lscala_collection_SeqViewLike$Transformed = (function(p) {
  return this.newTakenWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDroppedWhile__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function(p) {
  return this.newDroppedWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDroppedWhile__Lscala_Function1__Lscala_collection_IterableViewLike$Transformed = (function(p) {
  return this.newDroppedWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDroppedWhile__Lscala_Function1__Lscala_collection_SeqViewLike$Transformed = (function(p) {
  return this.newDroppedWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_TraversableViewLike$Transformed = (function(_endpoints) {
  return this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_immutable_StreamViewLike$Transformed(_endpoints)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_IterableViewLike$Transformed = (function(_endpoints) {
  return this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_immutable_StreamViewLike$Transformed(_endpoints)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_SeqViewLike$Transformed = (function(_endpoints) {
  return this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_immutable_StreamViewLike$Transformed(_endpoints)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFiltered__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function(p) {
  return this.newFiltered__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFiltered__Lscala_Function1__Lscala_collection_IterableViewLike$Transformed = (function(p) {
  return this.newFiltered__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFiltered__Lscala_Function1__Lscala_collection_SeqViewLike$Transformed = (function(p) {
  return this.newFiltered__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFlatMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function(f) {
  return this.newFlatMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFlatMapped__Lscala_Function1__Lscala_collection_IterableViewLike$Transformed = (function(f) {
  return this.newFlatMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFlatMapped__Lscala_Function1__Lscala_collection_SeqViewLike$Transformed = (function(f) {
  return this.newFlatMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function(f) {
  return this.newMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newMapped__Lscala_Function1__Lscala_collection_IterableViewLike$Transformed = (function(f) {
  return this.newMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newMapped__Lscala_Function1__Lscala_collection_SeqViewLike$Transformed = (function(f) {
  return this.newMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newAppended__Lscala_collection_GenTraversable__Lscala_collection_TraversableViewLike$Transformed = (function(that) {
  return this.newAppended__Lscala_collection_GenTraversable__Lscala_collection_immutable_StreamViewLike$Transformed(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newAppended__Lscala_collection_GenTraversable__Lscala_collection_IterableViewLike$Transformed = (function(that) {
  return this.newAppended__Lscala_collection_GenTraversable__Lscala_collection_immutable_StreamViewLike$Transformed(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newAppended__Lscala_collection_GenTraversable__Lscala_collection_SeqViewLike$Transformed = (function(that) {
  return this.newAppended__Lscala_collection_GenTraversable__Lscala_collection_immutable_StreamViewLike$Transformed(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newForced__Lscala_Function0__Lscala_collection_TraversableViewLike$Transformed = (function(xs) {
  return this.newForced__Lscala_Function0__Lscala_collection_immutable_StreamViewLike$Transformed(xs)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newForced__Lscala_Function0__Lscala_collection_IterableViewLike$Transformed = (function(xs) {
  return this.newForced__Lscala_Function0__Lscala_collection_immutable_StreamViewLike$Transformed(xs)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newForced__Lscala_Function0__Lscala_collection_SeqViewLike$Transformed = (function(xs) {
  return this.newForced__Lscala_Function0__Lscala_collection_immutable_StreamViewLike$Transformed(xs)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.underlying__O = (function() {
  return this.underlying__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.init___Lscala_collection_immutable_Stream = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  ScalaJS.impls.scala_PartialFunction$class__$init$__Lscala_PartialFunction__V(this);
  ScalaJS.impls.scala_collection_GenTraversableOnce$class__$init$__Lscala_collection_GenTraversableOnce__V(this);
  ScalaJS.impls.scala_collection_TraversableOnce$class__$init$__Lscala_collection_TraversableOnce__V(this);
  ScalaJS.impls.scala_collection_Parallelizable$class__$init$__Lscala_collection_Parallelizable__V(this);
  ScalaJS.impls.scala_collection_TraversableLike$class__$init$__Lscala_collection_TraversableLike__V(this);
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__$init$__Lscala_collection_generic_GenericTraversableTemplate__V(this);
  ScalaJS.impls.scala_collection_GenTraversable$class__$init$__Lscala_collection_GenTraversable__V(this);
  ScalaJS.impls.scala_collection_Traversable$class__$init$__Lscala_collection_Traversable__V(this);
  ScalaJS.impls.scala_collection_GenIterable$class__$init$__Lscala_collection_GenIterable__V(this);
  ScalaJS.impls.scala_collection_IterableLike$class__$init$__Lscala_collection_IterableLike__V(this);
  ScalaJS.impls.scala_collection_Iterable$class__$init$__Lscala_collection_Iterable__V(this);
  ScalaJS.impls.scala_collection_GenSeqLike$class__$init$__Lscala_collection_GenSeqLike__V(this);
  ScalaJS.impls.scala_collection_GenSeq$class__$init$__Lscala_collection_GenSeq__V(this);
  ScalaJS.impls.scala_collection_SeqLike$class__$init$__Lscala_collection_SeqLike__V(this);
  ScalaJS.impls.scala_collection_Seq$class__$init$__Lscala_collection_Seq__V(this);
  ScalaJS.impls.scala_collection_ViewMkString$class__$init$__Lscala_collection_ViewMkString__V(this);
  ScalaJS.impls.scala_collection_GenTraversableViewLike$class__$init$__Lscala_collection_GenTraversableViewLike__V(this);
  ScalaJS.impls.scala_collection_TraversableViewLike$class__$init$__Lscala_collection_TraversableViewLike__V(this);
  ScalaJS.impls.scala_collection_GenIterableViewLike$class__$init$__Lscala_collection_GenIterableViewLike__V(this);
  ScalaJS.impls.scala_collection_IterableViewLike$class__$init$__Lscala_collection_IterableViewLike__V(this);
  ScalaJS.impls.scala_collection_GenSeqViewLike$class__$init$__Lscala_collection_GenSeqViewLike__V(this);
  ScalaJS.impls.scala_collection_SeqViewLike$class__$init$__Lscala_collection_SeqViewLike__V(this);
  ScalaJS.impls.scala_collection_immutable_StreamViewLike$class__$init$__Lscala_collection_immutable_StreamViewLike__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$25) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.compose__Lscala_Function1__ = (function(g$49) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.runWith__Lscala_Function1__ = (function(action) {
  return this.runWith__Lscala_Function1__Lscala_Function1(action)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.applyOrElse__O__Lscala_Function1__ = (function(x, default$2) {
  return this.applyOrElse__O__Lscala_Function1__O(x, default$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lift__ = (function() {
  return this.lift__Lscala_Function1()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.andThen__Lscala_Function1__ = (function(k) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(k)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.orElse__Lscala_PartialFunction__ = (function(that) {
  return this.orElse__Lscala_PartialFunction__Lscala_PartialFunction(that)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$div$colon$bslash__O__Lscala_Function2__ = (function(z, op) {
  return this.$$div$colon$bslash__O__Lscala_Function2__O(z, op)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.addString__Lscala_collection_mutable_StringBuilder__ = (function(b) {
  return this.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(b)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.addString__Lscala_collection_mutable_StringBuilder__T__ = (function(b$2, sep) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b$2, sep)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toMap__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toVector__ = (function() {
  return this.toVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toSet__ = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toBuffer__ = (function() {
  return this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIndexedSeq__ = (function() {
  return this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toArray__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.toArray__Lscala_reflect_ClassTag__O(evidence$1)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToArray__O__ = (function(xs) {
  return this.copyToArray__O__V(xs)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToArray__O__I__ = (function(xs$2, start) {
  return this.copyToArray__O__I__V(xs$2, start)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__ = (function(dest) {
  return this.copyToBuffer__Lscala_collection_mutable_Buffer__V(dest)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, cmp) {
  return this.minBy__Lscala_Function1__Lscala_math_Ordering__O(f, cmp)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$2, cmp$2) {
  return this.maxBy__Lscala_Function1__Lscala_math_Ordering__O(f$2, cmp$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.max__Lscala_math_Ordering__ = (function(cmp$3) {
  return this.max__Lscala_math_Ordering__O(cmp$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.min__Lscala_math_Ordering__ = (function(cmp$4) {
  return this.min__Lscala_math_Ordering__O(cmp$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.product__Lscala_math_Numeric__ = (function(num) {
  return this.product__Lscala_math_Numeric__O(num)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sum__Lscala_math_Numeric__ = (function(num$2) {
  return this.sum__Lscala_math_Numeric__O(num$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__ = (function(z$2, seqop, combop) {
  return this.aggregate__O__Lscala_Function2__Lscala_Function2__O(z$2, seqop, combop)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.fold__O__Lscala_Function2__ = (function(z$3, op$2) {
  return this.fold__O__Lscala_Function2__O(z$3, op$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceOption__Lscala_Function2__ = (function(op$3) {
  return this.reduceOption__Lscala_Function2__Lscala_Option(op$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduce__Lscala_Function2__ = (function(op$4) {
  return this.reduce__Lscala_Function2__O(op$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceRightOption__Lscala_Function2__ = (function(op$5) {
  return this.reduceRightOption__Lscala_Function2__Lscala_Option(op$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceLeftOption__Lscala_Function2__ = (function(op$6) {
  return this.reduceLeftOption__Lscala_Function2__Lscala_Option(op$6)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceLeft__Lscala_Function2__ = (function(op$7) {
  return this.reduceLeft__Lscala_Function2__O(op$7)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.foldLeft__O__Lscala_Function2__ = (function(z$4, op$8) {
  return this.foldLeft__O__Lscala_Function2__O(z$4, op$8)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$colon$bslash__O__Lscala_Function2__ = (function(z$5, op$9) {
  return this.$$colon$bslash__O__Lscala_Function2__O(z$5, op$9)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$div$colon__O__Lscala_Function2__ = (function(z$6, op$10) {
  return this.$$div$colon__O__Lscala_Function2__O(z$6, op$10)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.collectFirst__Lscala_PartialFunction__ = (function(pf) {
  return this.collectFirst__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.count__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.count__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reversed__ = (function() {
  return this.reversed__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.par__ = (function() {
  return this.par__Lscala_collection_Parallel()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.to__Lscala_collection_generic_CanBuildFrom__ = (function(cbf) {
  return this.to__Lscala_collection_generic_CanBuildFrom__O(cbf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toTraversable__ = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.inits__ = (function() {
  return this.inits__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.tails__ = (function() {
  return this.tails__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliceWithKnownBound__I__I__ = (function(from, until) {
  return this.sliceWithKnownBound__I__I__O(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliceWithKnownDelta__I__I__I__ = (function(from$2, until$2, delta) {
  return this.sliceWithKnownDelta__I__I__I__O(from$2, until$2, delta)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastOption__ = (function() {
  return this.lastOption__Lscala_Option()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.last__ = (function() {
  return this.last__O()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.tail__ = (function() {
  return this.tail__O()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.headOption__ = (function() {
  return this.headOption__Lscala_Option()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$7, op$11, cbf$2) {
  return this.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$7, op$11, cbf$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.filterNot__Lscala_Function1__ = (function(p$2) {
  return this.filterNot__Lscala_Function1__O(p$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__ = (function(that$2, bf) {
  return this.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(that$2, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf$2) {
  return this.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$3, bf$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.hasDefiniteSize__ = (function() {
  return ScalaJS.bZ(this.hasDefiniteSize__Z())
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isTraversableAgain__ = (function() {
  return ScalaJS.bZ(this.isTraversableAgain__Z())
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.repr__ = (function() {
  return this.repr__O()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.transpose__Lscala_Function1__ = (function(asTraversable) {
  return this.transpose__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.genericBuilder__ = (function() {
  return this.genericBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.canEqual__O__ = (function(that$4) {
  return ScalaJS.bZ(this.canEqual__O__Z(that$4))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sameElements__Lscala_collection_GenIterable__ = (function(that$5) {
  return this.sameElements__Lscala_collection_GenIterable__Z(that$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.copyToArray__O__I__I__ = (function(xs$3, start$2, len) {
  return this.copyToArray__O__I__I__V(xs$3, start$2, len)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.dropRight__I__ = (function(n) {
  return this.dropRight__I__O(n)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.takeRight__I__ = (function(n$2) {
  return this.takeRight__I__O(n$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliding__I__ = (function(size) {
  return this.sliding__I__Lscala_collection_Iterator(size)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.head__ = (function() {
  return this.head__O()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIterator__ = (function() {
  return this.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toIterable__ = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reduceRight__Lscala_Function2__ = (function(op$12) {
  return this.reduceRight__Lscala_Function2__O(op$12)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.foldRight__O__Lscala_Function2__ = (function(z$8, op$13) {
  return this.foldRight__O__Lscala_Function2__O(z$8, op$13)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.find__Lscala_Function1__ = (function(p$3) {
  return this.find__Lscala_Function1__Lscala_Option(p$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.exists__Lscala_Function1__ = (function(p$4) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$4))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.forall__Lscala_Function1__ = (function(p$5) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p$5))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.foreach__Lscala_Function1__ = (function(f$3) {
  return this.foreach__Lscala_Function1__V(f$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.startsWith__Lscala_collection_GenSeq__ = (function(that$6) {
  return this.startsWith__Lscala_collection_GenSeq__Z(that$6)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexWhere__Lscala_Function1__ = (function(p$6) {
  return ScalaJS.bI(this.lastIndexWhere__Lscala_Function1__I(p$6))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOf__O__I__ = (function(elem, end) {
  return this.lastIndexOf__O__I__I(elem, end)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOf__O__ = (function(elem$2) {
  return this.lastIndexOf__O__I(elem$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOf__O__I__ = (function(elem$3, from$3) {
  return this.indexOf__O__I__I(elem$3, from$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOf__O__ = (function(elem$4) {
  return this.indexOf__O__I(elem$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexWhere__Lscala_Function1__ = (function(p$7) {
  return ScalaJS.bI(this.indexWhere__Lscala_Function1__I(p$7))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.prefixLength__Lscala_Function1__ = (function(p$8) {
  return ScalaJS.bI(this.prefixLength__Lscala_Function1__I(p$8))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isDefinedAt__I__ = (function(idx) {
  return ScalaJS.bZ(this.isDefinedAt__I__Z(idx))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__I__I__ = (function(from$4, until$3) {
  return this.view__I__I__Lscala_collection_SeqView(from$4, until$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.view__ = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indices__ = (function() {
  return this.indices__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sortBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$4, ord) {
  return this.sortBy__Lscala_Function1__Lscala_math_Ordering__O(f$4, ord)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sortWith__Lscala_Function2__ = (function(lt) {
  return this.sortWith__Lscala_Function2__O(lt)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__ = (function(that$7, p$9) {
  return this.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z(that$7, p$9)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.distinct__ = (function() {
  return this.distinct__O()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.contains__O__ = (function(elem$5) {
  return ScalaJS.bZ(this.contains__O__Z(elem$5))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.containsSlice__Lscala_collection_GenSeq__ = (function(that$8) {
  return this.containsSlice__Lscala_collection_GenSeq__Z(that$8)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I__ = (function(that$9, end$2) {
  return this.lastIndexOfSlice__Lscala_collection_GenSeq__I__I(that$9, end$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__ = (function(that$10) {
  return this.lastIndexOfSlice__Lscala_collection_GenSeq__I(that$10)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOfSlice__Lscala_collection_GenSeq__I__ = (function(that$11, from$5) {
  return this.indexOfSlice__Lscala_collection_GenSeq__I__I(that$11, from$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexOfSlice__Lscala_collection_GenSeq__ = (function(that$12) {
  return this.indexOfSlice__Lscala_collection_GenSeq__I(that$12)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.endsWith__Lscala_collection_GenSeq__ = (function(that$13) {
  return this.endsWith__Lscala_collection_GenSeq__Z(that$13)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.startsWith__Lscala_collection_GenSeq__I__ = (function(that$14, offset) {
  return this.startsWith__Lscala_collection_GenSeq__I__Z(that$14, offset)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverseIterator__ = (function() {
  return this.reverseIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.combinations__I__ = (function(n$3) {
  return this.combinations__I__Lscala_collection_Iterator(n$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.permutations__ = (function() {
  return this.permutations__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lastIndexWhere__Lscala_Function1__I__ = (function(p$10, end$3) {
  return ScalaJS.bI(this.lastIndexWhere__Lscala_Function1__I__I(p$10, end$3))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.indexWhere__Lscala_Function1__I__ = (function(p$11, from$6) {
  return ScalaJS.bI(this.indexWhere__Lscala_Function1__I__I(p$11, from$6))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.segmentLength__Lscala_Function1__I__ = (function(p$12, from$7) {
  return ScalaJS.bI(this.segmentLength__Lscala_Function1__I__I(p$12, from$7))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.lengthCompare__I__ = (function(len$2) {
  return ScalaJS.bI(this.lengthCompare__I__I(len$2))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.parCombiner__ = (function() {
  return this.parCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.toCollection__O__ = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.thisCollection__ = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.seq__ = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.companion__ = (function() {
  return this.companion__Lscala_collection_generic_GenericCompanion()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__ = (function(b$3, start$3, sep$2, end$4) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b$3, start$3, sep$2, end$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.mkString__T__T__T__ = (function(start$4, sep$3, end$5) {
  return this.mkString__T__T__T__T(start$4, sep$3, end$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.mkString__T__ = (function(sep$4) {
  return this.mkString__T__T(sep$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.mkString__ = (function() {
  return this.mkString__T()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.thisSeq__ = (function() {
  return this.thisSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.viewToString__ = (function() {
  return this.viewToString__T()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.unzip3__Lscala_Function1__ = (function(asTriple) {
  return this.unzip3__Lscala_Function1__Lscala_Tuple3(asTriple)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.unzip__Lscala_Function1__ = (function(asPair) {
  return this.unzip__Lscala_Function1__Lscala_Tuple2(asPair)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.groupBy__Lscala_Function1__ = (function(f$5) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$9, op$14, bf$3) {
  return this.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$9, op$14, bf$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$10, op$15, bf$4) {
  return this.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$10, op$15, bf$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.splitAt__I__ = (function(n$4) {
  return this.splitAt__I__Lscala_Tuple2(n$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.span__Lscala_Function1__ = (function(p$13) {
  return this.span__Lscala_Function1__Lscala_Tuple2(p$13)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.takeWhile__Lscala_Function1__ = (function(p$14) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_TraversableView(p$14)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.dropWhile__Lscala_Function1__ = (function(p$15) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_TraversableView(p$15)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.slice__I__I__ = (function(from$8, until$4) {
  return this.slice__I__I__Lscala_collection_TraversableView(from$8, until$4)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.init__ = (function() {
  return this.init__Lscala_collection_TraversableView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.partition__Lscala_Function1__ = (function(p$16) {
  return this.partition__Lscala_Function1__Lscala_Tuple2(p$16)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.withFilter__Lscala_Function1__ = (function(p$17) {
  return this.withFilter__Lscala_Function1__Lscala_collection_TraversableView(p$17)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.filter__Lscala_Function1__ = (function(p$18) {
  return this.filter__Lscala_Function1__Lscala_collection_TraversableView(p$18)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.flatten__Lscala_Function1__ = (function(asTraversable$2) {
  return this.flatten__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(asTraversable$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$6, bf$5) {
  return this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$6, bf$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__ = (function(pf$2, bf$6) {
  return this.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(pf$2, bf$6)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$7, bf$7) {
  return this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$7, bf$7)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(xs$4, bf$8) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(xs$4, bf$8)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.viewIdString__ = (function() {
  return this.viewIdString__T()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.viewIdentifier__ = (function() {
  return this.viewIdentifier__T()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sliding__I__I__ = (function(size$2, step) {
  return this.sliding__I__I__Lscala_collection_Iterator(size$2, step)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.grouped__I__ = (function(size$3) {
  return this.grouped__I__Lscala_collection_Iterator(size$3)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__ = (function(that$15, thisElem, thatElem, bf$9) {
  return this.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(that$15, thisElem, thatElem, bf$9)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__ = (function(bf$10) {
  return this.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(bf$10)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$16, bf$11) {
  return this.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$16, bf$11)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.take__I__ = (function(n$5) {
  return this.take__I__Lscala_collection_IterableView(n$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.drop__I__ = (function(n$6) {
  return this.drop__I__Lscala_collection_IterableView(n$6)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.sorted__Lscala_math_Ordering__ = (function(ord$2) {
  return this.sorted__Lscala_math_Ordering__Lscala_collection_SeqView(ord$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.intersect__Lscala_collection_GenSeq__ = (function(that$17) {
  return this.intersect__Lscala_collection_GenSeq__Lscala_collection_SeqView(that$17)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.diff__Lscala_collection_GenSeq__ = (function(that$18) {
  return this.diff__Lscala_collection_GenSeq__Lscala_collection_SeqView(that$18)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.union__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__ = (function(that$19, bf$12) {
  return this.union__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O(that$19, bf$12)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__ = (function(elem$6, bf$13) {
  return this.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__O(elem$6, bf$13)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__ = (function(elem$7, bf$14) {
  return this.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(elem$7, bf$14)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.updated__I__O__Lscala_collection_generic_CanBuildFrom__ = (function(index, elem$8, bf$15) {
  return this.updated__I__O__Lscala_collection_generic_CanBuildFrom__O(index, elem$8, bf$15)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$8, bf$16) {
  return this.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$8, bf$16)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.padTo__I__O__Lscala_collection_generic_CanBuildFrom__ = (function(len$3, elem$9, bf$17) {
  return this.padTo__I__O__Lscala_collection_generic_CanBuildFrom__O(len$3, elem$9, bf$17)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.patch__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__ = (function(from$9, patch, replaced, bf$18) {
  return this.patch__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O(from$9, patch, replaced, bf$18)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.reverse__ = (function() {
  return this.reverse__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDropped__I__ = (function(n$7) {
  return this.newDropped__I__Lscala_collection_SeqViewLike$Transformed(n$7)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTaken__I__ = (function(n$8) {
  return this.newTaken__I__Lscala_collection_SeqViewLike$Transformed(n$8)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.stringPrefix__ = (function() {
  return this.stringPrefix__T()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newPrepended__O__ = (function(elem$10) {
  return this.newPrepended__O__Lscala_collection_immutable_StreamViewLike$Transformed(elem$10)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newPatched__I__Lscala_collection_GenSeq__I__ = (function(_from, _patch, _replaced) {
  return this.newPatched__I__Lscala_collection_GenSeq__I__Lscala_collection_immutable_StreamViewLike$Transformed(_from, _patch, _replaced)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newReversed__ = (function() {
  return this.newReversed__Lscala_collection_immutable_StreamViewLike$Transformed()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZippedAll__Lscala_collection_GenIterable__O__O__ = (function(that$20, _thisElem, _thatElem) {
  return this.newZippedAll__Lscala_collection_GenIterable__O__O__Lscala_collection_immutable_StreamViewLike$Transformed(that$20, _thisElem, _thatElem)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newZipped__Lscala_collection_GenIterable__ = (function(that$21) {
  return this.newZipped__Lscala_collection_GenIterable__Lscala_collection_immutable_StreamViewLike$Transformed(that$21)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newTakenWhile__Lscala_Function1__ = (function(p$19) {
  return this.newTakenWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p$19)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newDroppedWhile__Lscala_Function1__ = (function(p$20) {
  return this.newDroppedWhile__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p$20)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newSliced__Lscala_collection_generic_SliceInterval__ = (function(_endpoints) {
  return this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_immutable_StreamViewLike$Transformed(_endpoints)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFiltered__Lscala_Function1__ = (function(p$21) {
  return this.newFiltered__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(p$21)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newFlatMapped__Lscala_Function1__ = (function(f$9) {
  return this.newFlatMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f$9)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newMapped__Lscala_Function1__ = (function(f$10) {
  return this.newMapped__Lscala_Function1__Lscala_collection_immutable_StreamViewLike$Transformed(f$10)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newAppended__Lscala_collection_GenTraversable__ = (function(that$22) {
  return this.newAppended__Lscala_collection_GenTraversable__Lscala_collection_immutable_StreamViewLike$Transformed(that$22)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.newForced__Lscala_Function0__ = (function(xs$5) {
  return this.newForced__Lscala_Function0__Lscala_collection_immutable_StreamViewLike$Transformed(xs$5)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.force__Lscala_collection_generic_CanBuildFrom__ = (function(bf$19) {
  return this.force__Lscala_collection_generic_CanBuildFrom__O(bf$19)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply__I__ = (function(idx$2) {
  return this.apply__I__O(idx$2)
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.underlying__ = (function() {
  return this.underlying__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.isDefinedAt__O__ = (function(x$2) {
  return ScalaJS.bZ(this.isDefinedAt__O__Z(x$2))
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.apply__O__ = (function(v1$25) {
  return this.apply__O__O(v1$25)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$$anon$1.prototype = ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype;
ScalaJS.is.scala_collection_immutable_Stream$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$$anon$1)))
});
ScalaJS.as.scala_collection_immutable_Stream$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$$anon$1: 0
}, false, "scala.collection.immutable.Stream$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_Stream$$anon$1: 1,
  scala_collection_immutable_StreamView: 1,
  scala_collection_immutable_StreamViewLike: 1,
  scala_collection_SeqView: 1,
  scala_collection_GenSeqView: 1,
  scala_collection_SeqViewLike: 1,
  scala_collection_GenSeqViewLike: 1,
  scala_collection_IterableView: 1,
  scala_collection_GenIterableView: 1,
  scala_collection_IterableViewLike: 1,
  scala_collection_GenIterableViewLike: 1,
  scala_collection_TraversableView: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_TraversableViewLike: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_ViewMkString: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
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
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$$anon$1;
//@ sourceMappingURL=Stream$$anon$1.js.map
