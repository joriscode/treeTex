/** @constructor */
ScalaJS.c.scala_collection_mutable_WrappedArray = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.constructor = ScalaJS.c.scala_collection_mutable_WrappedArray;
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.deep__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_ArrayLike$class__deep__Lscala_collection_mutable_ArrayLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$head__O = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$tail__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$last__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$init__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__isEmpty__Lscala_collection_IndexedSeqOptimized__Z(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foreach__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__forall__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__exists__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__find__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldLeft__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldRight__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceLeft__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceRight__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zip__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zipWithIndex__Lscala_collection_IndexedSeqOptimized__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.slice__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__slice__Lscala_collection_IndexedSeqOptimized__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__head__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.tail__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__tail__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__last__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.init__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__init__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.take__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__take__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.drop__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__drop__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.takeRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.dropRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__splitAt__Lscala_collection_IndexedSeqOptimized__I__Lscala_Tuple2(this, n)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__span__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__sameElements__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__copyToArray__Lscala_collection_IndexedSeqOptimized__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lengthCompare__Lscala_collection_IndexedSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__segmentLength__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__indexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lastIndexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.reverse__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverse__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverseIterator__Lscala_collection_IndexedSeqOptimized__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__startsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__endsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__companion__Lscala_collection_mutable_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_mutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__seq__Lscala_collection_mutable_IndexedSeq__Lscala_collection_mutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__Lscala_collection_mutable_IndexedSeqView = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__Lscala_collection_mutable_IndexedSeqView(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__I__I__Lscala_collection_mutable_IndexedSeqView = (function(from, until) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__I__I__Lscala_collection_mutable_IndexedSeqView(this, from, until)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.thisCollection__Lscala_collection_mutable_WrappedArray = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray = (function(repr) {
  return repr
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.elemManifest__Lscala_reflect_ClassTag = (function() {
  return ScalaJS.modules.scala_Predef().ClassManifest__Lscala_reflect_ClassManifestFactory$().fromClass__Ljava_lang_Class__Lscala_reflect_ClassTag(ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(this.elemTag__Lscala_reflect_ClassTag()))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.par__Lscala_collection_parallel_mutable_ParArray = (function() {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParArray().handoff__O__Lscala_collection_parallel_mutable_ParArray(this.array__O())
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.elementClass__p5__Ljava_lang_Class = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.objectGetClass(this.array__O()))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  var thatElementClass = ScalaJS.modules.scala_runtime_ScalaRunTime().arrayElementClass__O__Ljava_lang_Class(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1));
  if ((this.elementClass__p5__Ljava_lang_Class() === thatElementClass)) {
    return this.array__O()
  } else {
    return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
  }
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.stringPrefix__T = (function() {
  return "WrappedArray"
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.clone__Lscala_collection_mutable_WrappedArray = (function() {
  return ScalaJS.modules.scala_collection_mutable_WrappedArray().make__O__Lscala_collection_mutable_WrappedArray(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undclone__O__O(this.array__O()))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_WrappedArrayBuilder().init___Lscala_reflect_ClassTag(this.elemTag__Lscala_reflect_ClassTag())
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__I__I__Lscala_collection_SeqView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.view__Lscala_collection_SeqView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_mutable_ParArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray(ScalaJS.as.scala_collection_mutable_WrappedArray(repr))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray(ScalaJS.as.scala_collection_mutable_WrappedArray(repr))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray(ScalaJS.as.scala_collection_mutable_WrappedArray(repr))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray(ScalaJS.as.scala_collection_mutable_WrappedArray(repr))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__O__Lscala_collection_mutable_IndexedSeq = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray(ScalaJS.as.scala_collection_mutable_WrappedArray(repr))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return this.thisCollection__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.thisCollection__Lscala_collection_mutable_IndexedSeq = (function() {
  return this.thisCollection__Lscala_collection_mutable_WrappedArray()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__$init$__Lscala_collection_mutable_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__$init$__Lscala_collection_mutable_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__$init$__Lscala_collection_IndexedSeqOptimized__V(this);
  ScalaJS.impls.scala_collection_mutable_ArrayLike$class__$init$__Lscala_collection_mutable_ArrayLike__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z(that))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that$2) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that$2))
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$init__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$init__O()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$last__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$last__O()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$tail__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$tail__O()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$head__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$head__O()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf) {
  return this.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$3, bf)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__ = (function(op) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O(op)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__ = (function(op$2) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O(op$2)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.deep__ = (function() {
  return this.deep__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.elemManifest__ = (function() {
  return this.elemManifest__Lscala_reflect_ClassTag()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.toCollection__Lscala_collection_mutable_WrappedArray__ = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_WrappedArray__Lscala_collection_mutable_WrappedArray(repr)
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.array__ = (function() {
  return this.array__O()
});
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.elemTag__ = (function() {
  return this.elemTag__Lscala_reflect_ClassTag()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_WrappedArray = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_WrappedArray.prototype = ScalaJS.c.scala_collection_mutable_WrappedArray.prototype;
ScalaJS.is.scala_collection_mutable_WrappedArray = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_WrappedArray)))
});
ScalaJS.as.scala_collection_mutable_WrappedArray = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_WrappedArray(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.WrappedArray")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_WrappedArray)))
});
ScalaJS.asArrayOf.scala_collection_mutable_WrappedArray = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_WrappedArray(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.WrappedArray;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_WrappedArray = new ScalaJS.ClassTypeData({
  scala_collection_mutable_WrappedArray: 0
}, false, "scala.collection.mutable.WrappedArray", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_WrappedArray: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_ArrayLike: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_WrappedArray.prototype.$classData = ScalaJS.data.scala_collection_mutable_WrappedArray;
//@ sourceMappingURL=WrappedArray.js.map
