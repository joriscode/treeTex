/** @constructor */
ScalaJS.c.scala_collection_AbstractSeq = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_AbstractSeq.prototype.constructor = ScalaJS.c.scala_collection_AbstractSeq;
ScalaJS.c.scala_collection_AbstractSeq.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_Seq$class__companion__Lscala_collection_Seq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.seq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_Seq$class__seq__Lscala_collection_Seq__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__thisCollection__Lscala_collection_SeqLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return ScalaJS.impls.scala_collection_SeqLike$class__toCollection__Lscala_collection_SeqLike__O__Lscala_collection_Seq(this, repr)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__parCombiner__Lscala_collection_SeqLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lengthCompare__Lscala_collection_SeqLike__I__I(this, len)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__isEmpty__Lscala_collection_SeqLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__size__Lscala_collection_SeqLike__I(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_SeqLike$class__segmentLength__Lscala_collection_SeqLike__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_SeqLike$class__indexWhere__Lscala_collection_SeqLike__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lastIndexWhere__Lscala_collection_SeqLike__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.permutations__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__permutations__Lscala_collection_SeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.combinations__I__Lscala_collection_Iterator = (function(n) {
  return ScalaJS.impls.scala_collection_SeqLike$class__combinations__Lscala_collection_SeqLike__I__Lscala_collection_Iterator(this, n)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.reverse__O = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__reverse__Lscala_collection_SeqLike__O(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__reverseMap__Lscala_collection_SeqLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__reverseIterator__Lscala_collection_SeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_SeqLike$class__startsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOfSlice__Lscala_collection_GenSeq__I = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__indexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOfSlice__Lscala_collection_GenSeq__I__I = (function(that, from) {
  return ScalaJS.impls.scala_collection_SeqLike$class__indexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__I(this, that, from)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lastIndexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I__I = (function(that, end) {
  return ScalaJS.impls.scala_collection_SeqLike$class__lastIndexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__I(this, that, end)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.containsSlice__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__containsSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_SeqLike$class__contains__Lscala_collection_SeqLike__O__Z(this, elem)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.union__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__union__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.diff__Lscala_collection_GenSeq__O = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__diff__Lscala_collection_SeqLike__Lscala_collection_GenSeq__O(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.intersect__Lscala_collection_GenSeq__O = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__intersect__Lscala_collection_SeqLike__Lscala_collection_GenSeq__O(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.distinct__O = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__distinct__Lscala_collection_SeqLike__O(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.patch__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O = (function(from, patch, replaced, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__patch__Lscala_collection_SeqLike__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O(this, from, patch, replaced, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.updated__I__O__Lscala_collection_generic_CanBuildFrom__O = (function(index, elem, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__updated__Lscala_collection_SeqLike__I__O__Lscala_collection_generic_CanBuildFrom__O(this, index, elem, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__$plus$colon__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__$colon$plus__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.padTo__I__O__Lscala_collection_generic_CanBuildFrom__O = (function(len, elem, bf) {
  return ScalaJS.impls.scala_collection_SeqLike$class__padTo__Lscala_collection_SeqLike__I__O__Lscala_collection_generic_CanBuildFrom__O(this, len, elem, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_SeqLike$class__corresponds__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.sortWith__Lscala_Function2__O = (function(lt) {
  return ScalaJS.impls.scala_collection_SeqLike$class__sortWith__Lscala_collection_SeqLike__Lscala_Function2__O(this, lt)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.sortBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, ord) {
  return ScalaJS.impls.scala_collection_SeqLike$class__sortBy__Lscala_collection_SeqLike__Lscala_Function1__Lscala_math_Ordering__O(this, f, ord)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.sorted__Lscala_math_Ordering__O = (function(ord) {
  return ScalaJS.impls.scala_collection_SeqLike$class__sorted__Lscala_collection_SeqLike__Lscala_math_Ordering__O(this, ord)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__toSeq__Lscala_collection_SeqLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indices__Lscala_collection_immutable_Range = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__indices__Lscala_collection_SeqLike__Lscala_collection_immutable_Range(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.view__Lscala_collection_SeqView = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__view__Lscala_collection_SeqLike__Lscala_collection_SeqView(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.view__I__I__Lscala_collection_SeqView = (function(from, until) {
  return ScalaJS.impls.scala_collection_SeqLike$class__view__Lscala_collection_SeqLike__I__I__Lscala_collection_SeqView(this, from, until)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_SeqLike$class__toString__Lscala_collection_SeqLike__T(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.isDefinedAt__I__Z = (function(idx) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__isDefinedAt__Lscala_collection_GenSeqLike__I__Z(this, idx)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.prefixLength__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__prefixLength__Lscala_collection_GenSeqLike__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__indexWhere__Lscala_collection_GenSeqLike__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__indexOf__Lscala_collection_GenSeqLike__O__I(this, elem)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOf__O__I__I = (function(elem, from) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__indexOf__Lscala_collection_GenSeqLike__O__I__I(this, elem, from)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexOf__Lscala_collection_GenSeqLike__O__I(this, elem)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOf__O__I__I = (function(elem, end) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexOf__Lscala_collection_GenSeqLike__O__I__I(this, elem, end)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexWhere__Lscala_collection_GenSeqLike__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.startsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__startsWith__Lscala_collection_GenSeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__hashCode__Lscala_collection_GenSeqLike__I(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.orElse__Lscala_PartialFunction__Lscala_PartialFunction = (function(that) {
  return ScalaJS.impls.scala_PartialFunction$class__orElse__Lscala_PartialFunction__Lscala_PartialFunction__Lscala_PartialFunction(this, that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen__Lscala_Function1__Lscala_PartialFunction = (function(k) {
  return ScalaJS.impls.scala_PartialFunction$class__andThen__Lscala_PartialFunction__Lscala_Function1__Lscala_PartialFunction(this, k)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lift__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_PartialFunction$class__lift__Lscala_PartialFunction__Lscala_Function1(this)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return ScalaJS.impls.scala_PartialFunction$class__applyOrElse__Lscala_PartialFunction__O__Lscala_Function1__O(this, x, default$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.runWith__Lscala_Function1__Lscala_Function1 = (function(action) {
  return ScalaJS.impls.scala_PartialFunction$class__runWith__Lscala_PartialFunction__Lscala_Function1__Lscala_Function1(this, action)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  ScalaJS.impls.scala_PartialFunction$class__$init$__Lscala_PartialFunction__V(this);
  ScalaJS.impls.scala_collection_GenSeqLike$class__$init$__Lscala_collection_GenSeqLike__V(this);
  ScalaJS.impls.scala_collection_GenSeq$class__$init$__Lscala_collection_GenSeq__V(this);
  ScalaJS.impls.scala_collection_SeqLike$class__$init$__Lscala_collection_SeqLike__V(this);
  ScalaJS.impls.scala_collection_Seq$class__$init$__Lscala_collection_Seq__V(this);
  return this
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$25) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.compose__Lscala_Function1__ = (function(g$49) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.runWith__Lscala_Function1__ = (function(action) {
  return this.runWith__Lscala_Function1__Lscala_Function1(action)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.applyOrElse__O__Lscala_Function1__ = (function(x, default$2) {
  return this.applyOrElse__O__Lscala_Function1__O(x, default$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lift__ = (function() {
  return this.lift__Lscala_Function1()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.andThen__Lscala_Function1__ = (function(k) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(k)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.orElse__Lscala_PartialFunction__ = (function(that) {
  return this.orElse__Lscala_PartialFunction__Lscala_PartialFunction(that)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.startsWith__Lscala_collection_GenSeq__ = (function(that$2) {
  return this.startsWith__Lscala_collection_GenSeq__Z(that$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexWhere__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.lastIndexWhere__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOf__O__I__ = (function(elem, end) {
  return this.lastIndexOf__O__I__I(elem, end)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOf__O__ = (function(elem$2) {
  return this.lastIndexOf__O__I(elem$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOf__O__I__ = (function(elem$3, from) {
  return this.indexOf__O__I__I(elem$3, from)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOf__O__ = (function(elem$4) {
  return this.indexOf__O__I(elem$4)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexWhere__Lscala_Function1__ = (function(p$2) {
  return ScalaJS.bI(this.indexWhere__Lscala_Function1__I(p$2))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.prefixLength__Lscala_Function1__ = (function(p$3) {
  return ScalaJS.bI(this.prefixLength__Lscala_Function1__I(p$3))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.isDefinedAt__I__ = (function(idx) {
  return ScalaJS.bZ(this.isDefinedAt__I__Z(idx))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indices__ = (function() {
  return this.indices__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.sorted__Lscala_math_Ordering__ = (function(ord) {
  return this.sorted__Lscala_math_Ordering__O(ord)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.sortBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, ord$2) {
  return this.sortBy__Lscala_Function1__Lscala_math_Ordering__O(f, ord$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.sortWith__Lscala_Function2__ = (function(lt) {
  return this.sortWith__Lscala_Function2__O(lt)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__ = (function(that$3, p$4) {
  return this.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z(that$3, p$4)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.padTo__I__O__Lscala_collection_generic_CanBuildFrom__ = (function(len, elem$5, bf) {
  return this.padTo__I__O__Lscala_collection_generic_CanBuildFrom__O(len, elem$5, bf)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__ = (function(elem$6, bf$2) {
  return this.$$colon$plus__O__Lscala_collection_generic_CanBuildFrom__O(elem$6, bf$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__ = (function(elem$7, bf$3) {
  return this.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O(elem$7, bf$3)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.updated__I__O__Lscala_collection_generic_CanBuildFrom__ = (function(index, elem$8, bf$4) {
  return this.updated__I__O__Lscala_collection_generic_CanBuildFrom__O(index, elem$8, bf$4)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.patch__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__ = (function(from$2, patch, replaced, bf$5) {
  return this.patch__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O(from$2, patch, replaced, bf$5)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.distinct__ = (function() {
  return this.distinct__O()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.intersect__Lscala_collection_GenSeq__ = (function(that$4) {
  return this.intersect__Lscala_collection_GenSeq__O(that$4)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.diff__Lscala_collection_GenSeq__ = (function(that$5) {
  return this.diff__Lscala_collection_GenSeq__O(that$5)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.union__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__ = (function(that$6, bf$6) {
  return this.union__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O(that$6, bf$6)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.contains__O__ = (function(elem$9) {
  return ScalaJS.bZ(this.contains__O__Z(elem$9))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.containsSlice__Lscala_collection_GenSeq__ = (function(that$7) {
  return this.containsSlice__Lscala_collection_GenSeq__Z(that$7)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__I__ = (function(that$8, end$2) {
  return this.lastIndexOfSlice__Lscala_collection_GenSeq__I__I(that$8, end$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexOfSlice__Lscala_collection_GenSeq__ = (function(that$9) {
  return this.lastIndexOfSlice__Lscala_collection_GenSeq__I(that$9)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOfSlice__Lscala_collection_GenSeq__I__ = (function(that$10, from$3) {
  return this.indexOfSlice__Lscala_collection_GenSeq__I__I(that$10, from$3)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexOfSlice__Lscala_collection_GenSeq__ = (function(that$11) {
  return this.indexOfSlice__Lscala_collection_GenSeq__I(that$11)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.endsWith__Lscala_collection_GenSeq__ = (function(that$12) {
  return this.endsWith__Lscala_collection_GenSeq__Z(that$12)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.startsWith__Lscala_collection_GenSeq__I__ = (function(that$13, offset) {
  return this.startsWith__Lscala_collection_GenSeq__I__Z(that$13, offset)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.reverseIterator__ = (function() {
  return this.reverseIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$2, bf$7) {
  return this.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$2, bf$7)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.reverse__ = (function() {
  return this.reverse__O()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.combinations__I__ = (function(n) {
  return this.combinations__I__Lscala_collection_Iterator(n)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.permutations__ = (function() {
  return this.permutations__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lastIndexWhere__Lscala_Function1__I__ = (function(p$5, end$3) {
  return ScalaJS.bI(this.lastIndexWhere__Lscala_Function1__I__I(p$5, end$3))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.indexWhere__Lscala_Function1__I__ = (function(p$6, from$4) {
  return ScalaJS.bI(this.indexWhere__Lscala_Function1__I__I(p$6, from$4))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.segmentLength__Lscala_Function1__I__ = (function(p$7, from$5) {
  return ScalaJS.bI(this.segmentLength__Lscala_Function1__I__I(p$7, from$5))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.lengthCompare__I__ = (function(len$2) {
  return ScalaJS.bI(this.lengthCompare__I__I(len$2))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply__I__ = (function(idx$2) {
  return this.apply__I__O(idx$2)
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.isDefinedAt__O__ = (function(x$2) {
  return ScalaJS.bZ(this.isDefinedAt__O__Z(x$2))
});
ScalaJS.c.scala_collection_AbstractSeq.prototype.apply__O__ = (function(v1$25) {
  return this.apply__O__O(v1$25)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_AbstractSeq = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_AbstractSeq.prototype = ScalaJS.c.scala_collection_AbstractSeq.prototype;
ScalaJS.is.scala_collection_AbstractSeq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_AbstractSeq)))
});
ScalaJS.as.scala_collection_AbstractSeq = (function(obj) {
  if ((ScalaJS.is.scala_collection_AbstractSeq(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.AbstractSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_AbstractSeq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_AbstractSeq)))
});
ScalaJS.asArrayOf.scala_collection_AbstractSeq = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_AbstractSeq(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.AbstractSeq;", depth)
  }
});
ScalaJS.data.scala_collection_AbstractSeq = new ScalaJS.ClassTypeData({
  scala_collection_AbstractSeq: 0
}, false, "scala.collection.AbstractSeq", ScalaJS.data.scala_collection_AbstractIterable, {
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
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
ScalaJS.c.scala_collection_AbstractSeq.prototype.$classData = ScalaJS.data.scala_collection_AbstractSeq;
//@ sourceMappingURL=AbstractSeq.js.map
