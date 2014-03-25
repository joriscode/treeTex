/** @constructor */
ScalaJS.c.scala_collection_AbstractTraversable = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_AbstractTraversable.prototype.constructor = ScalaJS.c.scala_collection_AbstractTraversable;
ScalaJS.c.scala_collection_AbstractTraversable.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_Traversable$class__companion__Lscala_collection_Traversable__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.seq__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_Traversable$class__seq__Lscala_collection_Traversable__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__newBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.genericBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__genericBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.unzip__Lscala_Function1__Lscala_Tuple2 = (function(asPair) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple2(this, asPair)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.unzip3__Lscala_Function1__Lscala_Tuple3 = (function(asTriple) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip3__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple3(this, asTriple)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.flatten__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__flatten__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.transpose__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__transpose__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.repr__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__repr__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.isTraversableAgain__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__isTraversableAgain__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__thisCollection__Lscala_collection_TraversableLike__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toCollection__Lscala_collection_TraversableLike__O__Lscala_collection_Traversable(this, repr)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__parCombiner__Lscala_collection_TraversableLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__isEmpty__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__hasDefiniteSize__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__map__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__flatMap__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.filter__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__filter__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__filterNot__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function(pf, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__collect__Lscala_collection_TraversableLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(this, pf, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__partition__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.groupBy__Lscala_Function1__Lscala_collection_immutable_Map = (function(f) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__groupBy__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_immutable_Map(this, f)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__forall__Lscala_collection_TraversableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__exists__Lscala_collection_TraversableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__find__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scan__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, cbf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scanLeft__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scanRight__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__head__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.headOption__Lscala_Option = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__headOption__Lscala_collection_TraversableLike__Lscala_Option(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.tail__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.lastOption__Lscala_Option = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__lastOption__Lscala_collection_TraversableLike__Lscala_Option(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.init__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.take__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__take__Lscala_collection_TraversableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.drop__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__drop__Lscala_collection_TraversableLike__I__O(this, n)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.slice__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__slice__Lscala_collection_TraversableLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.sliceWithKnownDelta__I__I__I__O = (function(from, until, delta) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownDelta__Lscala_collection_TraversableLike__I__I__I__O(this, from, until, delta)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.sliceWithKnownBound__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownBound__Lscala_collection_TraversableLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__takeWhile__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__dropWhile__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__span__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__splitAt__Lscala_collection_TraversableLike__I__Lscala_Tuple2(this, n)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.tails__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tails__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.inits__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__inits__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_TraversableLike$class__copyToArray__Lscala_collection_TraversableLike__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toTraversable__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toTraversable__Lscala_collection_TraversableLike__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toIterator__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toStream__Lscala_collection_TraversableLike__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.to__Lscala_collection_generic_CanBuildFrom__O = (function(cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__to__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__O(this, cbf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toString__Lscala_collection_TraversableLike__T(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.stringPrefix__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__stringPrefix__Lscala_collection_TraversableLike__T(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.view__Lscala_collection_TraversableView = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__view__Lscala_collection_TraversableLike__Lscala_collection_TraversableView(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__view__Lscala_collection_TraversableLike__I__I__Lscala_collection_TraversableView(this, from, until)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__withFilter__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_FilterMonadic(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.par__Lscala_collection_Parallel = (function() {
  return ScalaJS.impls.scala_collection_Parallelizable$class__par__Lscala_collection_Parallelizable__Lscala_collection_Parallel(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reversed__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__size__Lscala_collection_TraversableOnce__I(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.collectFirst__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option(this, pf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldRight__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRight__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduce__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.fold__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__O = (function(z, seqop, combop) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O(this, z, seqop, combop)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V(this, xs, start)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V(this, xs)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIterable__Lscala_collection_TraversableOnce__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSeq__Lscala_collection_TraversableOnce__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSet__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toMap__Lscala_collection_TraversableOnce__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T(this, sep)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T(this)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$div$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_GenTraversableOnce$class__$div$colon$bslash__Lscala_collection_GenTraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_GenTraversableOnce$class__$init$__Lscala_collection_GenTraversableOnce__V(this);
  ScalaJS.impls.scala_collection_TraversableOnce$class__$init$__Lscala_collection_TraversableOnce__V(this);
  ScalaJS.impls.scala_collection_Parallelizable$class__$init$__Lscala_collection_Parallelizable__V(this);
  ScalaJS.impls.scala_collection_TraversableLike$class__$init$__Lscala_collection_TraversableLike__V(this);
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__$init$__Lscala_collection_generic_GenericTraversableTemplate__V(this);
  ScalaJS.impls.scala_collection_GenTraversable$class__$init$__Lscala_collection_GenTraversable__V(this);
  ScalaJS.impls.scala_collection_Traversable$class__$init$__Lscala_collection_Traversable__V(this);
  return this
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$div$colon$bslash__O__Lscala_Function2__ = (function(z, op) {
  return this.$$div$colon$bslash__O__Lscala_Function2__O(z, op)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.addString__Lscala_collection_mutable_StringBuilder__ = (function(b) {
  return this.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(b)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.addString__Lscala_collection_mutable_StringBuilder__T__ = (function(b$2, sep) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b$2, sep)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__ = (function(b$3, start, sep$2, end) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b$3, start, sep$2, end)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.mkString__ = (function() {
  return this.mkString__T()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.mkString__T__ = (function(sep$3) {
  return this.mkString__T__T(sep$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.mkString__T__T__T__ = (function(start$2, sep$4, end$2) {
  return this.mkString__T__T__T__T(start$2, sep$4, end$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toMap__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toVector__ = (function() {
  return this.toVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toSet__ = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toBuffer__ = (function() {
  return this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIndexedSeq__ = (function() {
  return this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIterable__ = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toArray__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.toArray__Lscala_reflect_ClassTag__O(evidence$1)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToArray__O__ = (function(xs) {
  return this.copyToArray__O__V(xs)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToArray__O__I__ = (function(xs$2, start$3) {
  return this.copyToArray__O__I__V(xs$2, start$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__ = (function(dest) {
  return this.copyToBuffer__Lscala_collection_mutable_Buffer__V(dest)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, cmp) {
  return this.minBy__Lscala_Function1__Lscala_math_Ordering__O(f, cmp)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$2, cmp$2) {
  return this.maxBy__Lscala_Function1__Lscala_math_Ordering__O(f$2, cmp$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.max__Lscala_math_Ordering__ = (function(cmp$3) {
  return this.max__Lscala_math_Ordering__O(cmp$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.min__Lscala_math_Ordering__ = (function(cmp$4) {
  return this.min__Lscala_math_Ordering__O(cmp$4)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.product__Lscala_math_Numeric__ = (function(num) {
  return this.product__Lscala_math_Numeric__O(num)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.sum__Lscala_math_Numeric__ = (function(num$2) {
  return this.sum__Lscala_math_Numeric__O(num$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__ = (function(z$2, seqop, combop) {
  return this.aggregate__O__Lscala_Function2__Lscala_Function2__O(z$2, seqop, combop)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.fold__O__Lscala_Function2__ = (function(z$3, op$2) {
  return this.fold__O__Lscala_Function2__O(z$3, op$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceOption__Lscala_Function2__ = (function(op$3) {
  return this.reduceOption__Lscala_Function2__Lscala_Option(op$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduce__Lscala_Function2__ = (function(op$4) {
  return this.reduce__Lscala_Function2__O(op$4)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceRightOption__Lscala_Function2__ = (function(op$5) {
  return this.reduceRightOption__Lscala_Function2__Lscala_Option(op$5)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceLeftOption__Lscala_Function2__ = (function(op$6) {
  return this.reduceLeftOption__Lscala_Function2__Lscala_Option(op$6)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceRight__Lscala_Function2__ = (function(op$7) {
  return this.reduceRight__Lscala_Function2__O(op$7)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reduceLeft__Lscala_Function2__ = (function(op$8) {
  return this.reduceLeft__Lscala_Function2__O(op$8)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.foldRight__O__Lscala_Function2__ = (function(z$4, op$9) {
  return this.foldRight__O__Lscala_Function2__O(z$4, op$9)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.foldLeft__O__Lscala_Function2__ = (function(z$5, op$10) {
  return this.foldLeft__O__Lscala_Function2__O(z$5, op$10)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$colon$bslash__O__Lscala_Function2__ = (function(z$6, op$11) {
  return this.$$colon$bslash__O__Lscala_Function2__O(z$6, op$11)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$div$colon__O__Lscala_Function2__ = (function(z$7, op$12) {
  return this.$$div$colon__O__Lscala_Function2__O(z$7, op$12)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.collectFirst__Lscala_PartialFunction__ = (function(pf) {
  return this.collectFirst__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.count__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.count__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.reversed__ = (function() {
  return this.reversed__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.par__ = (function() {
  return this.par__Lscala_collection_Parallel()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.withFilter__Lscala_Function1__ = (function(p$2) {
  return this.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(p$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.view__I__I__ = (function(from, until) {
  return this.view__I__I__Lscala_collection_TraversableView(from, until)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.view__ = (function() {
  return this.view__Lscala_collection_TraversableView()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.stringPrefix__ = (function() {
  return this.stringPrefix__T()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.to__Lscala_collection_generic_CanBuildFrom__ = (function(cbf) {
  return this.to__Lscala_collection_generic_CanBuildFrom__O(cbf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toIterator__ = (function() {
  return this.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toTraversable__ = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.copyToArray__O__I__I__ = (function(xs$3, start$4, len) {
  return this.copyToArray__O__I__I__V(xs$3, start$4, len)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.inits__ = (function() {
  return this.inits__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.tails__ = (function() {
  return this.tails__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.splitAt__I__ = (function(n) {
  return this.splitAt__I__Lscala_Tuple2(n)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.span__Lscala_Function1__ = (function(p$3) {
  return this.span__Lscala_Function1__Lscala_Tuple2(p$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.dropWhile__Lscala_Function1__ = (function(p$4) {
  return this.dropWhile__Lscala_Function1__O(p$4)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.takeWhile__Lscala_Function1__ = (function(p$5) {
  return this.takeWhile__Lscala_Function1__O(p$5)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.sliceWithKnownBound__I__I__ = (function(from$2, until$2) {
  return this.sliceWithKnownBound__I__I__O(from$2, until$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.sliceWithKnownDelta__I__I__I__ = (function(from$3, until$3, delta) {
  return this.sliceWithKnownDelta__I__I__I__O(from$3, until$3, delta)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.slice__I__I__ = (function(from$4, until$4) {
  return this.slice__I__I__O(from$4, until$4)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.drop__I__ = (function(n$2) {
  return this.drop__I__O(n$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.take__I__ = (function(n$3) {
  return this.take__I__O(n$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.init__ = (function() {
  return this.init__O()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.lastOption__ = (function() {
  return this.lastOption__Lscala_Option()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.last__ = (function() {
  return this.last__O()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.tail__ = (function() {
  return this.tail__O()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.headOption__ = (function() {
  return this.headOption__Lscala_Option()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.head__ = (function() {
  return this.head__O()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$8, op$13, bf) {
  return this.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$8, op$13, bf)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$9, op$14, bf$2) {
  return this.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$9, op$14, bf$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$10, op$15, cbf$2) {
  return this.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$10, op$15, cbf$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.find__Lscala_Function1__ = (function(p$6) {
  return this.find__Lscala_Function1__Lscala_Option(p$6)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.exists__Lscala_Function1__ = (function(p$7) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$7))
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.forall__Lscala_Function1__ = (function(p$8) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p$8))
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.groupBy__Lscala_Function1__ = (function(f$3) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.partition__Lscala_Function1__ = (function(p$9) {
  return this.partition__Lscala_Function1__Lscala_Tuple2(p$9)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__ = (function(pf$2, bf$3) {
  return this.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(pf$2, bf$3)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.filterNot__Lscala_Function1__ = (function(p$10) {
  return this.filterNot__Lscala_Function1__O(p$10)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.filter__Lscala_Function1__ = (function(p$11) {
  return this.filter__Lscala_Function1__O(p$11)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$4, bf$4) {
  return this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$4, bf$4)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$5, bf$5) {
  return this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$5, bf$5)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__ = (function(that, bf$6) {
  return this.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(that, bf$6)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$2, bf$7) {
  return this.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$2, bf$7)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf$8) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$3, bf$8)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.hasDefiniteSize__ = (function() {
  return ScalaJS.bZ(this.hasDefiniteSize__Z())
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.parCombiner__ = (function() {
  return this.parCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.toCollection__O__ = (function(repr) {
  return this.toCollection__O__Lscala_collection_Traversable(repr)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.thisCollection__ = (function() {
  return this.thisCollection__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.isTraversableAgain__ = (function() {
  return ScalaJS.bZ(this.isTraversableAgain__Z())
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.repr__ = (function() {
  return this.repr__O()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.transpose__Lscala_Function1__ = (function(asTraversable) {
  return this.transpose__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.flatten__Lscala_Function1__ = (function(asTraversable$2) {
  return this.flatten__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable$2)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.unzip3__Lscala_Function1__ = (function(asTriple) {
  return this.unzip3__Lscala_Function1__Lscala_Tuple3(asTriple)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.unzip__Lscala_Function1__ = (function(asPair) {
  return this.unzip__Lscala_Function1__Lscala_Tuple2(asPair)
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.genericBuilder__ = (function() {
  return this.genericBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.seq__ = (function() {
  return this.seq__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.companion__ = (function() {
  return this.companion__Lscala_collection_generic_GenericCompanion()
});
ScalaJS.c.scala_collection_AbstractTraversable.prototype.foreach__Lscala_Function1__ = (function(f$6) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f$6))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_AbstractTraversable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_AbstractTraversable.prototype = ScalaJS.c.scala_collection_AbstractTraversable.prototype;
ScalaJS.is.scala_collection_AbstractTraversable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_AbstractTraversable)))
});
ScalaJS.as.scala_collection_AbstractTraversable = (function(obj) {
  if ((ScalaJS.is.scala_collection_AbstractTraversable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.AbstractTraversable")
  }
});
ScalaJS.isArrayOf.scala_collection_AbstractTraversable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_AbstractTraversable)))
});
ScalaJS.asArrayOf.scala_collection_AbstractTraversable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_AbstractTraversable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.AbstractTraversable;", depth)
  }
});
ScalaJS.data.scala_collection_AbstractTraversable = new ScalaJS.ClassTypeData({
  scala_collection_AbstractTraversable: 0
}, false, "scala.collection.AbstractTraversable", ScalaJS.data.java_lang_Object, {
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
ScalaJS.c.scala_collection_AbstractTraversable.prototype.$classData = ScalaJS.data.scala_collection_AbstractTraversable;
//@ sourceMappingURL=AbstractTraversable.js.map
