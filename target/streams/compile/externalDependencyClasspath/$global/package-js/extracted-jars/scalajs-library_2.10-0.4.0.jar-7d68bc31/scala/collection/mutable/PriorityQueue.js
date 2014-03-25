/** @constructor */
ScalaJS.c.scala_collection_mutable_PriorityQueue = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractIterable.call(this);
  this.ord$4 = null;
  this.scala$collection$mutable$PriorityQueue$$resarr$4 = null
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractIterable();
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.constructor = ScalaJS.c.scala_collection_mutable_PriorityQueue;
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.genericOrderedBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder = (function(ord) {
  return ScalaJS.impls.scala_collection_generic_GenericOrderedTraversableTemplate$class__genericOrderedBuilder__Lscala_collection_generic_GenericOrderedTraversableTemplate__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this, ord)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.ord__Lscala_math_Ordering = (function() {
  return this.ord$4
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.newBuilder__Lscala_collection_mutable_PriorityQueue = (function() {
  return new ScalaJS.c.scala_collection_mutable_PriorityQueue().init___Lscala_math_Ordering(this.ord__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess = (function() {
  return this.scala$collection$mutable$PriorityQueue$$resarr$4
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.length__I = (function() {
  return (this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().length__I() - 1)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.size__I = (function() {
  return this.length__I()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.isEmpty__Z = (function() {
  return (this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() < 2)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.repr__Lscala_collection_mutable_PriorityQueue = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.result__Lscala_collection_mutable_PriorityQueue = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.orderedCompanion__Lscala_collection_mutable_PriorityQueue$ = (function() {
  return ScalaJS.modules.scala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.scala$collection$mutable$PriorityQueue$$toA__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.fixUp__AO__I__V = (function(as, m) {
  var k = m;
  while (((k > 1) && this.ord__Lscala_math_Ordering().mkOrderingOps__O__Lscala_math_Ordering$Ops(this.scala$collection$mutable$PriorityQueue$$toA__O__O(as.underlying[((k / 2) | 0)])).$$less__O__Z(this.scala$collection$mutable$PriorityQueue$$toA__O__O(as.underlying[k])))) {
    this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undswap__I__I__V(k, ((k / 2) | 0));
    k = ((k / 2) | 0)
  }
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.fixDown__AO__I__I__V = (function(as, m, n) {
  var k = m;
  while ((n >= (2 * k))) {
    var j = (2 * k);
    if (((j < n) && this.ord__Lscala_math_Ordering().mkOrderingOps__O__Lscala_math_Ordering$Ops(this.scala$collection$mutable$PriorityQueue$$toA__O__O(as.underlying[j])).$$less__O__Z(this.scala$collection$mutable$PriorityQueue$$toA__O__O(as.underlying[(j + 1)])))) {
      j = (j + 1)
    };
    if (this.ord__Lscala_math_Ordering().mkOrderingOps__O__Lscala_math_Ordering$Ops(this.scala$collection$mutable$PriorityQueue$$toA__O__O(as.underlying[k])).$$greater$eq__O__Z(this.scala$collection$mutable$PriorityQueue$$toA__O__O(as.underlying[j]))) {
      return undefined
    } else {
      var h = as.underlying[k];
      as.underlying[k] = as.underlying[j];
      as.underlying[j] = h;
      k = j
    }
  }
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue = (function(elem) {
  this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undensureSize__I__V((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() + 1));
  this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO().underlying[this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I()] = elem;
  this.fixUp__AO__I__V(this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO(), this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I());
  this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0$und$eq__I__V((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_PriorityQueue = (function(xs) {
  return ScalaJS.as.scala_collection_mutable_PriorityQueue(this.clone__Lscala_collection_mutable_PriorityQueue().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.enqueue__Lscala_collection_Seq__V = (function(elems) {
  this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.dequeue__O = (function() {
  if ((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() > 1)) {
    this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0$und$eq__I__V((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() - 1));
    this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undswap__I__I__V(1, this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I());
    this.fixDown__AO__I__I__V(this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO(), 1, (this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() - 1));
    return this.scala$collection$mutable$PriorityQueue$$toA__O__O(this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO().underlying[this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I()])
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("no element to remove from heap")
  }
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.dequeueAll__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  var b = bf.apply__Lscala_collection_mutable_Builder();
  while (this.nonEmpty__Z()) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(this.dequeue__O())
  };
  return b.result__O()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.max__O = (function() {
  if ((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() > 1)) {
    return this.scala$collection$mutable$PriorityQueue$$toA__O__O(this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO().underlying[1])
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("queue is empty")
  }
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.head__O = (function() {
  if ((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() > 1)) {
    return this.scala$collection$mutable$PriorityQueue$$toA__O__O(this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undarray__AO().underlying[1])
  } else {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("queue is empty")
  }
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.clear__V = (function() {
  this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0$und$eq__I__V(1)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$2().init___Lscala_collection_mutable_PriorityQueue(this)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.reverse__Lscala_collection_mutable_PriorityQueue = (function() {
  var revq = new ScalaJS.c.scala_collection_mutable_PriorityQueue().init___Lscala_math_Ordering(new ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$1().init___Lscala_collection_mutable_PriorityQueue(this));
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(1), this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().length__I()).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, revq$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      return revq$1.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue(arg$outer.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().apply__I__O(i))
    })
  })(this, revq)));
  return revq
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_mutable_PriorityQueue$$anon$3().init___Lscala_collection_mutable_PriorityQueue(this)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.hashCode__I = (function() {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("unsuitable as hash key")
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toQueue__Lscala_collection_mutable_Queue = (function() {
  return ScalaJS.as.scala_collection_mutable_Queue(new ScalaJS.c.scala_collection_mutable_Queue().init___().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this.iterator__Lscala_collection_Iterator()))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toString__T = (function() {
  return this.toList__Lscala_collection_immutable_List().mkString__T__T__T__T("PriorityQueue(", ", ", ")")
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toList__Lscala_collection_immutable_List = (function() {
  return this.iterator__Lscala_collection_Iterator().toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.clone__Lscala_collection_mutable_PriorityQueue = (function() {
  return ScalaJS.as.scala_collection_mutable_PriorityQueue(new ScalaJS.c.scala_collection_mutable_PriorityQueue().init___Lscala_math_Ordering(this.ord__Lscala_math_Ordering()).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this.iterator__Lscala_collection_Iterator()))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue(elem)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue(elem)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.orderedCompanion__Lscala_collection_generic_GenericOrderedCompanion = (function() {
  return this.orderedCompanion__Lscala_collection_mutable_PriorityQueue$()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.repr__O = (function() {
  return this.repr__Lscala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return this.newBuilder__Lscala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.init___Lscala_math_Ordering = (function(ord) {
  this.ord$4 = ord;
  ScalaJS.c.scala_collection_mutable_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_GenericOrderedTraversableTemplate$class__$init$__Lscala_collection_generic_GenericOrderedTraversableTemplate__V(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  this.scala$collection$mutable$PriorityQueue$$resarr$4 = new ScalaJS.c.scala_collection_mutable_PriorityQueue$ResizableArrayAccess().init___Lscala_collection_mutable_PriorityQueue(this);
  this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0$und$eq__I__V((this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess().p$undsize0__I() + 1));
  return this
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.genericOrderedBuilder__Lscala_math_Ordering__ = (function(ord) {
  return this.genericOrderedBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(ord)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.toQueue__ = (function() {
  return this.toQueue__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.reverseIterator__ = (function() {
  return this.reverseIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.reverse__ = (function() {
  return this.reverse__Lscala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.max__ = (function() {
  return this.max__O()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.dequeueAll__Lscala_collection_generic_CanBuildFrom__ = (function(bf) {
  return this.dequeueAll__Lscala_collection_generic_CanBuildFrom__O(bf)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.dequeue__ = (function() {
  return this.dequeue__O()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.enqueue__Lscala_collection_Seq__ = (function(elems$2) {
  return ScalaJS.bV(this.enqueue__Lscala_collection_Seq__V(elems$2))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__ = (function(xs$2) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_PriorityQueue(xs$2)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_PriorityQueue(elem)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.fixDown__AO__I__I__ = (function(as, m, n) {
  return ScalaJS.bV(this.fixDown__AO__I__I__V(as, m, n))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.fixUp__AO__I__ = (function(as$2, m$2) {
  return ScalaJS.bV(this.fixUp__AO__I__V(as$2, m$2))
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.scala$collection$mutable$PriorityQueue$$toA__O__ = (function(x) {
  return this.scala$collection$mutable$PriorityQueue$$toA__O__O(x)
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.orderedCompanion__ = (function() {
  return this.orderedCompanion__Lscala_collection_mutable_PriorityQueue$()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_PriorityQueue()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.scala$collection$mutable$PriorityQueue$$resarr__ = (function() {
  return this.scala$collection$mutable$PriorityQueue$$resarr__Lscala_collection_mutable_PriorityQueue$ResizableArrayAccess()
});
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.ord__ = (function() {
  return this.ord__Lscala_math_Ordering()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_PriorityQueue = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_PriorityQueue.prototype = ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype;
ScalaJS.is.scala_collection_mutable_PriorityQueue = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_PriorityQueue)))
});
ScalaJS.as.scala_collection_mutable_PriorityQueue = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_PriorityQueue(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.PriorityQueue")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_PriorityQueue = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_PriorityQueue)))
});
ScalaJS.asArrayOf.scala_collection_mutable_PriorityQueue = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_PriorityQueue(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.PriorityQueue;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_PriorityQueue = new ScalaJS.ClassTypeData({
  scala_collection_mutable_PriorityQueue: 0
}, false, "scala.collection.mutable.PriorityQueue", ScalaJS.data.scala_collection_mutable_AbstractIterable, {
  scala_collection_mutable_PriorityQueue: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_generic_GenericOrderedTraversableTemplate: 1,
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_PriorityQueue.prototype.$classData = ScalaJS.data.scala_collection_mutable_PriorityQueue;
//@ sourceMappingURL=PriorityQueue.js.map
