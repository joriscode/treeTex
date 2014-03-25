/** @constructor */
ScalaJS.c.scala_collection_mutable_ArraySeq = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this);
  this.length$5 = 0;
  this.array$5 = null
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArraySeq;
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$head__O = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$tail__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$last__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$init__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__isEmpty__Lscala_collection_IndexedSeqOptimized__Z(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__forall__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__exists__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__find__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldLeft__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldRight__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceLeft__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceRight__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zip__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zipWithIndex__Lscala_collection_IndexedSeqOptimized__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.slice__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__slice__Lscala_collection_IndexedSeqOptimized__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__head__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.tail__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__tail__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__last__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.init__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__init__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.take__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__take__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.drop__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__drop__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.takeRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.dropRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__splitAt__Lscala_collection_IndexedSeqOptimized__I__Lscala_Tuple2(this, n)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__span__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__sameElements__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lengthCompare__Lscala_collection_IndexedSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__segmentLength__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__indexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lastIndexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.reverse__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverse__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverseIterator__Lscala_collection_IndexedSeqOptimized__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__startsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__endsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_mutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__seq__Lscala_collection_mutable_IndexedSeq__Lscala_collection_mutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.thisCollection__Lscala_collection_mutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__thisCollection__Lscala_collection_mutable_IndexedSeqLike__Lscala_collection_mutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toCollection__O__Lscala_collection_mutable_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__toCollection__Lscala_collection_mutable_IndexedSeqLike__O__Lscala_collection_mutable_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__Lscala_collection_mutable_IndexedSeqView = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__Lscala_collection_mutable_IndexedSeqView(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__I__I__Lscala_collection_mutable_IndexedSeqView = (function(from, until) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__I__I__Lscala_collection_mutable_IndexedSeqView(this, from, until)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.length__I = (function() {
  return this.length$5
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArraySeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.array__AO = (function() {
  return this.array$5
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.par__Lscala_collection_parallel_mutable_ParArray = (function() {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParArray().handoff__O__I__Lscala_collection_parallel_mutable_ParArray(this.array__AO(), this.length__I())
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.apply__I__O = (function(idx) {
  if ((idx >= this.length__I())) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  };
  return this.array__AO().underlying[idx]
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.update__I__O__V = (function(idx, elem) {
  if ((idx >= this.length__I())) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  };
  this.array__AO().underlying[idx] = elem
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.foreach__Lscala_Function1__V = (function(f) {
  var i = 0;
  while ((i < this.length__I())) {
    f.apply__O__O(this.array__AO().underlying[i]);
    i = (i + 1)
  }
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  var len1 = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(len), (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start))), this.length__I());
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.array__AO(), 0, xs, start, len1)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.clone__Lscala_collection_mutable_ArraySeq = (function() {
  var cloned = ScalaJS.asArrayOf.java_lang_Object(this.array__AO().clone__O(), 1);
  return new ScalaJS.c.scala_collection_mutable_ArraySeq$$anon$1().init___Lscala_collection_mutable_ArraySeq__AO(this, cloned)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__I__I__Lscala_collection_SeqView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.view__Lscala_collection_SeqView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_ArraySeq()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_mutable_ParArray()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.init___I = (function(length) {
  this.length$5 = length;
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__$init$__Lscala_collection_mutable_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__$init$__Lscala_collection_mutable_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__$init$__Lscala_collection_IndexedSeqOptimized__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  this.array$5 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [length]);
  return this
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z(that))
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that$2) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that$2))
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$init__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$init__O()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$last__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$last__O()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$tail__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$tail__O()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$head__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$head__O()
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf) {
  return this.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$3, bf)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__ = (function(op) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O(op)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__ = (function(op$2) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O(op$2)
});
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.array__ = (function() {
  return this.array__AO()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArraySeq = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArraySeq.prototype = ScalaJS.c.scala_collection_mutable_ArraySeq.prototype;
ScalaJS.is.scala_collection_mutable_ArraySeq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArraySeq)))
});
ScalaJS.as.scala_collection_mutable_ArraySeq = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArraySeq(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArraySeq")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArraySeq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArraySeq)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArraySeq = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArraySeq(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArraySeq = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArraySeq: 0
}, false, "scala.collection.mutable.ArraySeq", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_ArraySeq: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
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
ScalaJS.c.scala_collection_mutable_ArraySeq.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArraySeq;
//@ sourceMappingURL=ArraySeq.js.map
