/** @constructor */
ScalaJS.c.scala_collection_mutable_MutableList = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this);
  this.first0$5 = null;
  this.last0$5 = null;
  this.len$5 = 0
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_MutableList.prototype.constructor = ScalaJS.c.scala_collection_mutable_MutableList;
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foreach__Lscala_collection_LinearSeqOptimized__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__forall__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__exists__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__contains__Lscala_collection_LinearSeqOptimized__O__Z(this, elem)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__find__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.foldLeft__O__Lscala_Function2__O = (function(z, f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldLeft__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O(this, z, f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.foldRight__O__Lscala_Function2__O = (function(z, f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldRight__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O(this, z, f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.reduceLeft__Lscala_Function2__O = (function(f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceLeft__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceRight__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.take__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__take__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.drop__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__drop__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.dropRight__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__dropRight__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.slice__I__I__Lscala_collection_LinearSeqOptimized = (function(from, until) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__slice__Lscala_collection_LinearSeqOptimized__I__I__Lscala_collection_LinearSeqOptimized(this, from, until)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__takeWhile__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_collection_LinearSeqOptimized(this, p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__span__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__sameElements__Lscala_collection_LinearSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lengthCompare__Lscala_collection_LinearSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.isDefinedAt__I__Z = (function(x) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__isDefinedAt__Lscala_collection_LinearSeqOptimized__I__Z(this, x)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__segmentLength__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__indexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lastIndexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_mutable_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_LinearSeq$class__seq__Lscala_collection_mutable_LinearSeq__Lscala_collection_mutable_LinearSeq(this)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.thisCollection__Lscala_collection_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this, repr)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_MutableList().init___()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.first0__Lscala_collection_mutable_LinkedList = (function() {
  return this.first0$5
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.first0$und$eq__Lscala_collection_mutable_LinkedList__V = (function(x$1) {
  this.first0$5 = x$1
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.last0__Lscala_collection_mutable_LinkedList = (function() {
  return this.last0$5
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.last0$und$eq__Lscala_collection_mutable_LinkedList__V = (function(x$1) {
  this.last0$5 = x$1
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.len__I = (function() {
  return this.len$5
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.len$und$eq__I__V = (function(x$1) {
  this.len$5 = x$1
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toQueue__Lscala_collection_mutable_Queue = (function() {
  return new ScalaJS.c.scala_collection_mutable_Queue().init___Lscala_collection_mutable_LinkedList__Lscala_collection_mutable_LinkedList__I(this.first0__Lscala_collection_mutable_LinkedList(), this.last0__Lscala_collection_mutable_LinkedList(), this.len__I())
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.isEmpty__Z = (function() {
  return (this.len__I() === 0)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.head__O = (function() {
  if (this.nonEmpty__Z()) {
    return this.first0__Lscala_collection_mutable_LinkedList().head__O()
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___()
  }
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.tail__Lscala_collection_mutable_MutableList = (function() {
  var tl = new ScalaJS.c.scala_collection_mutable_MutableList().init___();
  this.tailImpl__p5__Lscala_collection_mutable_MutableList__V(tl);
  return tl
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.tailImpl__p5__Lscala_collection_mutable_MutableList__V = (function(tl) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V(this.nonEmpty__Z(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "tail of empty list"
    })
  })()));
  tl.first0$und$eq__Lscala_collection_mutable_LinkedList__V(ScalaJS.as.scala_collection_mutable_LinkedList(this.first0__Lscala_collection_mutable_LinkedList().tail__Lscala_collection_mutable_Seq()));
  tl.len$und$eq__I__V((this.len__I() - 1));
  var jsx$2 = tl;
  if ((tl.len__I() === 0)) {
    var jsx$1 = tl.first0__Lscala_collection_mutable_LinkedList()
  } else {
    var jsx$1 = this.last0__Lscala_collection_mutable_LinkedList()
  };
  jsx$2.last0$und$eq__Lscala_collection_mutable_LinkedList__V(jsx$1)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq$colon__O__Lscala_collection_mutable_MutableList = (function(elem) {
  this.prependElem__O__V(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.length__I = (function() {
  return this.len__I()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.apply__I__O = (function(n) {
  return this.first0__Lscala_collection_mutable_LinkedList().apply__I__O(n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.update__I__O__V = (function(n, x) {
  this.first0__Lscala_collection_mutable_LinkedList().update__I__O__V(n, x)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.get__I__Lscala_Option = (function(n) {
  return this.first0__Lscala_collection_mutable_LinkedList().get__I__Lscala_Option(n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.prependElem__O__V = (function(elem) {
  this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(new ScalaJS.c.scala_collection_mutable_LinkedList().init___O__Lscala_collection_mutable_LinkedList(elem, this.first0__Lscala_collection_mutable_LinkedList()));
  if ((this.len__I() === 0)) {
    this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(this.first0__Lscala_collection_mutable_LinkedList())
  };
  this.len$und$eq__I__V((this.len__I() + 1))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.appendElem__O__V = (function(elem) {
  if ((this.len__I() === 0)) {
    this.prependElem__O__V(elem)
  } else {
    this.last0__Lscala_collection_mutable_LinkedList().next$und$eq__Lscala_collection_mutable_Seq__V(new ScalaJS.c.scala_collection_mutable_LinkedList().init___());
    this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(ScalaJS.as.scala_collection_mutable_LinkedList(this.last0__Lscala_collection_mutable_LinkedList().next__Lscala_collection_mutable_Seq()));
    this.last0__Lscala_collection_mutable_LinkedList().elem$und$eq__O__V(elem);
    this.last0__Lscala_collection_mutable_LinkedList().next$und$eq__Lscala_collection_mutable_Seq__V(new ScalaJS.c.scala_collection_mutable_LinkedList().init___());
    this.len$und$eq__I__V((this.len__I() + 1))
  }
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.first0__Lscala_collection_mutable_LinkedList().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.last__O = (function() {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("MutableList.empty.last")
  };
  return this.last0__Lscala_collection_mutable_LinkedList().elem__O()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this.first0__Lscala_collection_mutable_LinkedList().toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toLinkedList__Lscala_collection_mutable_LinkedList = (function() {
  return this.first0__Lscala_collection_mutable_LinkedList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__Lscala_collection_mutable_MutableList = (function(elem) {
  this.appendElem__O__V(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.clear__V = (function() {
  this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(new ScalaJS.c.scala_collection_mutable_LinkedList().init___());
  this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(this.first0__Lscala_collection_mutable_LinkedList());
  this.len$und$eq__I__V(0)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.result__Lscala_collection_mutable_MutableList = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.clone__Lscala_collection_mutable_MutableList = (function() {
  var bf = this.newBuilder__Lscala_collection_mutable_Builder();
  bf.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this.seq__Lscala_collection_mutable_LinearSeq());
  return ScalaJS.as.scala_collection_mutable_MutableList(bf.result__O())
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized(p)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_LinearSeqOptimized(from, until)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_MutableList(elem)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_MutableList(elem)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V(this);
  ScalaJS.impls.scala_collection_LinearSeq$class__$init$__Lscala_collection_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_LinearSeq$class__$init$__Lscala_collection_mutable_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqOptimized$class__$init$__Lscala_collection_LinearSeqOptimized__V(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.first0$5 = new ScalaJS.c.scala_collection_mutable_LinkedList().init___();
  this.last0$5 = this.first0__Lscala_collection_mutable_LinkedList();
  this.len$5 = 0;
  return this
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toCollection__Lscala_collection_LinearSeqLike__ = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(repr)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_MutableList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_MutableList(elem)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toLinkedList__ = (function() {
  return this.toLinkedList__Lscala_collection_mutable_LinkedList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.appendElem__O__ = (function(elem$2) {
  return ScalaJS.bV(this.appendElem__O__V(elem$2))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.prependElem__O__ = (function(elem$3) {
  return ScalaJS.bV(this.prependElem__O__V(elem$3))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.get__I__ = (function(n) {
  return this.get__I__Lscala_Option(n)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$$plus$eq$colon__O__ = (function(elem$4) {
  return this.$$plus$eq$colon__O__Lscala_collection_mutable_MutableList(elem$4)
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.toQueue__ = (function() {
  return this.toQueue__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.len$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.len$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.len__ = (function() {
  return ScalaJS.bI(this.len__I())
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.last0$und$eq__Lscala_collection_mutable_LinkedList__ = (function(x$1$2) {
  return ScalaJS.bV(this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(x$1$2))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.last0__ = (function() {
  return this.last0__Lscala_collection_mutable_LinkedList()
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.first0$und$eq__Lscala_collection_mutable_LinkedList__ = (function(x$1$3) {
  return ScalaJS.bV(this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(x$1$3))
});
ScalaJS.c.scala_collection_mutable_MutableList.prototype.first0__ = (function() {
  return this.first0__Lscala_collection_mutable_LinkedList()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_MutableList = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_MutableList.prototype = ScalaJS.c.scala_collection_mutable_MutableList.prototype;
ScalaJS.is.scala_collection_mutable_MutableList = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_MutableList)))
});
ScalaJS.as.scala_collection_mutable_MutableList = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_MutableList(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.MutableList")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_MutableList = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_MutableList)))
});
ScalaJS.asArrayOf.scala_collection_mutable_MutableList = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_MutableList(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.MutableList;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_MutableList = new ScalaJS.ClassTypeData({
  scala_collection_mutable_MutableList: 0
}, false, "scala.collection.mutable.MutableList", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_MutableList: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_collection_mutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
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
ScalaJS.c.scala_collection_mutable_MutableList.prototype.$classData = ScalaJS.data.scala_collection_mutable_MutableList;
//@ sourceMappingURL=MutableList.js.map
