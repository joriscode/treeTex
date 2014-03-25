/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayBuffer = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.call(this);
  this.initialSize$6 = 0;
  this.array$6 = null;
  this.size0$6 = 0
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractBuffer();
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayBuffer;
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.array__AO = (function() {
  return this.array$6
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.array$und$eq__AO__V = (function(x$1) {
  this.array$6 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.size0__I = (function() {
  return this.size0$6
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.size0$und$eq__I__V = (function(x$1) {
  this.size0$6 = x$1
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_mutable_ResizableArray$class__length__Lscala_collection_mutable_ResizableArray__I(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.apply__I__O = (function(idx) {
  return ScalaJS.impls.scala_collection_mutable_ResizableArray$class__apply__Lscala_collection_mutable_ResizableArray__I__O(this, idx)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.update__I__O__V = (function(idx, elem) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__update__Lscala_collection_mutable_ResizableArray__I__O__V(this, idx, elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__foreach__Lscala_collection_mutable_ResizableArray__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__copyToArray__Lscala_collection_mutable_ResizableArray__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.reduceToSize__I__V = (function(sz) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__reduceToSize__Lscala_collection_mutable_ResizableArray__I__V(this, sz)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.ensureSize__I__V = (function(n) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__ensureSize__Lscala_collection_mutable_ResizableArray__I__V(this, n)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.swap__I__I__V = (function(a, b) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__swap__Lscala_collection_mutable_ResizableArray__I__I__V(this, a, b)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.copy__I__I__I__V = (function(m, n, len) {
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__copy__Lscala_collection_mutable_ResizableArray__I__I__I__V(this, m, n, len)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_mutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__seq__Lscala_collection_mutable_IndexedSeq__Lscala_collection_mutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$head__O = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$tail__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$last__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$init__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__isEmpty__Lscala_collection_IndexedSeqOptimized__Z(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__forall__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__exists__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__find__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldLeft__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldRight__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceLeft__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceRight__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zip__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zipWithIndex__Lscala_collection_IndexedSeqOptimized__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.slice__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__slice__Lscala_collection_IndexedSeqOptimized__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__head__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.tail__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__tail__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__last__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.init__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__init__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.take__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__take__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.drop__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__drop__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.takeRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.dropRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__splitAt__Lscala_collection_IndexedSeqOptimized__I__Lscala_Tuple2(this, n)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__span__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__sameElements__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lengthCompare__Lscala_collection_IndexedSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__segmentLength__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__indexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lastIndexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.reverse__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverse__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverseIterator__Lscala_collection_IndexedSeqOptimized__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__startsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__endsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.thisCollection__Lscala_collection_mutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__thisCollection__Lscala_collection_mutable_IndexedSeqLike__Lscala_collection_mutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toCollection__O__Lscala_collection_mutable_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__toCollection__Lscala_collection_mutable_IndexedSeqLike__O__Lscala_collection_mutable_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__Lscala_collection_mutable_IndexedSeqView = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__Lscala_collection_mutable_IndexedSeqView(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__I__I__Lscala_collection_mutable_IndexedSeqView = (function(from, until) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__I__I__Lscala_collection_mutable_IndexedSeqView(this, from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.initialSize__I = (function() {
  return this.initialSize$6
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArrayBuffer()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.clear__V = (function() {
  this.reduceToSize__I__V(0)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHint__I__V = (function(len) {
  if (((len > this.size__I()) && (len >= 1))) {
    var newarray = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [len]);
    ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V(this.array__AO(), 0, newarray, 0, this.size0__I());
    this.array$und$eq__AO__V(newarray)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.par__Lscala_collection_parallel_mutable_ParArray = (function() {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParArray().handoff__O__I__Lscala_collection_parallel_mutable_ParArray(this.array__AO(), this.size__I())
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer = (function(elem) {
  this.ensureSize__I__V((this.size0__I() + 1));
  this.array__AO().underlying[this.size0__I()] = elem;
  this.size0$und$eq__I__V((this.size0__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer = (function(xs) {
  var x1 = xs;
  if (ScalaJS.is.scala_collection_IndexedSeqLike(x1)) {
    var x2 = ScalaJS.as.scala_collection_IndexedSeqLike(x1);
    var n = x2.length__I();
    this.ensureSize__I__V((this.size0__I() + n));
    x2.copyToArray__O__I__I__V(this.array__AO(), this.size0__I(), n);
    this.size0$und$eq__I__V((this.size0__I() + n));
    return this
  };
  return ScalaJS.as.scala_collection_mutable_ArrayBuffer(ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_ArrayBuffer = (function(elem) {
  this.ensureSize__I__V((this.size0__I() + 1));
  this.copy__I__I__I__V(0, 1, this.size0__I());
  this.array__AO().underlying[0] = elem;
  this.size0$und$eq__I__V((this.size0__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer = (function(xs) {
  this.insertAll__I__Lscala_collection_Traversable__V(0, xs.toTraversable__Lscala_collection_Traversable());
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.insertAll__I__Lscala_collection_Traversable__V = (function(n, seq) {
  if (((n < 0) || (n > this.size0__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  };
  var xs = seq.toList__Lscala_collection_immutable_List();
  var len = xs.length__I();
  this.ensureSize__I__V((this.size0__I() + len));
  this.copy__I__I__I__V(n, (n + len), (this.size0__I() - n));
  xs.copyToArray__O__I__V(this.array__AO(), n);
  this.size0$und$eq__I__V((this.size0__I() + len))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.remove__I__I__V = (function(n, count) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V((count >= 0), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "removing negative number of elements"
    })
  })()));
  if (((n < 0) || (n > (this.size0__I() - count)))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(n)))
  };
  this.copy__I__I__I__V((n + count), n, (this.size0__I() - (n + count)));
  this.reduceToSize__I__V((this.size0__I() - count))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.remove__I__O = (function(n) {
  var result = this.apply__I__O(n);
  this.remove__I__I__V(n, 1);
  return result
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.result__Lscala_collection_mutable_ArrayBuffer = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.stringPrefix__T = (function() {
  return "ArrayBuffer"
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Buffer(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Buffer(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Buffer(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__O__Lscala_collection_mutable_Buffer(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__I__I__Lscala_collection_SeqView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.view__Lscala_collection_SeqView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return this.toCollection__O__Lscala_collection_mutable_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return this.thisCollection__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_ArrayBuffer()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer = (function(xs) {
  return this.$$plus$plus$eq$colon__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq$colon__O__Lscala_collection_mutable_ArrayBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ArrayBuffer(xs)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_Buffer = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(elem)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_mutable_ParArray()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.init___I = (function(initialSize) {
  this.initialSize$6 = initialSize;
  ScalaJS.c.scala_collection_mutable_AbstractBuffer.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__$init$__Lscala_collection_mutable_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__$init$__Lscala_collection_IndexedSeqOptimized__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__$init$__Lscala_collection_mutable_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_ResizableArray$class__$init$__Lscala_collection_mutable_ResizableArray__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.init___I.call(this, 16);
  return this
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z(that))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that$2) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that$2))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$init__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$init__O()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$last__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$last__O()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$tail__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$tail__O()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$head__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$head__O()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf) {
  return this.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$3, bf)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__ = (function(op) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O(op)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__ = (function(op$2) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O(op$2)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.copy__I__I__I__ = (function(m, n, len) {
  return ScalaJS.bV(this.copy__I__I__I__V(m, n, len))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.swap__I__I__ = (function(a, b) {
  return ScalaJS.bV(this.swap__I__I__V(a, b))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.ensureSize__I__ = (function(n$2) {
  return ScalaJS.bV(this.ensureSize__I__V(n$2))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.reduceToSize__I__ = (function(sz) {
  return ScalaJS.bV(this.reduceToSize__I__V(sz))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.size0$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.size0$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.size0__ = (function() {
  return ScalaJS.bI(this.size0__I())
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.array$und$eq__AO__ = (function(x$1$2) {
  return ScalaJS.bV(this.array$und$eq__AO__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.array__ = (function() {
  return this.array__AO()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_ArrayBuffer()
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.sizeHint__I__ = (function(len$2) {
  return ScalaJS.bV(this.sizeHint__I__V(len$2))
});
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.initialSize__ = (function() {
  return ScalaJS.bI(this.initialSize__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayBuffer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayBuffer.prototype = ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype;
ScalaJS.is.scala_collection_mutable_ArrayBuffer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayBuffer)))
});
ScalaJS.as.scala_collection_mutable_ArrayBuffer = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayBuffer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuffer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayBuffer)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayBuffer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayBuffer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayBuffer = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", ScalaJS.data.scala_collection_mutable_AbstractBuffer, {
  scala_collection_mutable_ArrayBuffer: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
  scala_collection_mutable_ResizableArray: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeqLike: 1,
  scala_collection_mutable_AbstractBuffer: 1,
  scala_collection_mutable_Buffer: 1,
  scala_collection_mutable_BufferLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
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
ScalaJS.c.scala_collection_mutable_ArrayBuffer.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayBuffer;
//@ sourceMappingURL=ArrayBuffer.js.map
