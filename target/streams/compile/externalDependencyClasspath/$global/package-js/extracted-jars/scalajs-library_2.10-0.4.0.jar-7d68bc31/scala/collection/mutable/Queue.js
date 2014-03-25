/** @constructor */
ScalaJS.c.scala_collection_mutable_Queue = (function() {
  ScalaJS.c.scala_collection_mutable_MutableList.call(this)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype = new ScalaJS.inheritable.scala_collection_mutable_MutableList();
ScalaJS.c.scala_collection_mutable_Queue.prototype.constructor = ScalaJS.c.scala_collection_mutable_Queue;
ScalaJS.c.scala_collection_mutable_Queue.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return this.companion__Lscala_collection_generic_GenericCompanion().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.enqueue__Lscala_collection_Seq__V = (function(elems) {
  this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeue__O = (function() {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___T("queue empty")
  } else {
    var res = this.first0__Lscala_collection_mutable_LinkedList().elem__O();
    this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(ScalaJS.as.scala_collection_mutable_LinkedList(this.first0__Lscala_collection_mutable_LinkedList().next__Lscala_collection_mutable_Seq()));
    this.decrementLength__p6__V();
    return res
  }
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeueFirst__Lscala_Function1__Lscala_Option = (function(p) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    if (ScalaJS.uZ(p.apply__O__O(this.first0__Lscala_collection_mutable_LinkedList().elem__O()))) {
      var res = new ScalaJS.c.scala_Some().init___O(this.first0__Lscala_collection_mutable_LinkedList().elem__O());
      this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(ScalaJS.as.scala_collection_mutable_LinkedList(this.first0__Lscala_collection_mutable_LinkedList().next__Lscala_collection_mutable_Seq()));
      this.decrementLength__p6__V();
      return res
    } else {
      var optElem = this.removeFromList__p6__Lscala_Function1__Lscala_Option(p);
      if ((!ScalaJS.anyRefEqEq(optElem, ScalaJS.modules.scala_None()))) {
        this.decrementLength__p6__V()
      };
      return optElem
    }
  }
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.removeFromList__p6__Lscala_Function1__Lscala_Option = (function(p) {
  var leftlst = this.first0__Lscala_collection_mutable_LinkedList();
  var res = ScalaJS.modules.scala_None();
  while ((leftlst.next__Lscala_collection_mutable_Seq().nonEmpty__Z() && (!ScalaJS.uZ(p.apply__O__O(ScalaJS.as.scala_collection_mutable_LinkedListLike(leftlst.next__Lscala_collection_mutable_Seq()).elem__O()))))) {
    leftlst = ScalaJS.as.scala_collection_mutable_LinkedList(leftlst.next__Lscala_collection_mutable_Seq())
  };
  if (leftlst.next__Lscala_collection_mutable_Seq().nonEmpty__Z()) {
    res = new ScalaJS.c.scala_Some().init___O(ScalaJS.as.scala_collection_mutable_LinkedListLike(leftlst.next__Lscala_collection_mutable_Seq()).elem__O());
    if ((leftlst.next__Lscala_collection_mutable_Seq() === this.last0__Lscala_collection_mutable_LinkedList())) {
      this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(leftlst)
    };
    leftlst.next$und$eq__Lscala_collection_mutable_Seq__V(ScalaJS.as.scala_collection_mutable_LinkedListLike(leftlst.next__Lscala_collection_mutable_Seq()).next__Lscala_collection_mutable_Seq())
  };
  return res
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeueAll__Lscala_Function1__Lscala_collection_mutable_Seq = (function(p) {
  if (this.first0__Lscala_collection_mutable_LinkedList().isEmpty__Z()) {
    return ScalaJS.as.scala_collection_mutable_Seq(ScalaJS.modules.scala_collection_mutable_Seq().empty__Lscala_collection_GenTraversable())
  } else {
    var res = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___();
    while ((this.first0__Lscala_collection_mutable_LinkedList().nonEmpty__Z() && ScalaJS.uZ(p.apply__O__O(this.first0__Lscala_collection_mutable_LinkedList().elem__O())))) {
      res.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(this.first0__Lscala_collection_mutable_LinkedList().elem__O());
      this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(ScalaJS.as.scala_collection_mutable_LinkedList(this.first0__Lscala_collection_mutable_LinkedList().next__Lscala_collection_mutable_Seq()));
      this.decrementLength__p6__V()
    };
    if (this.first0__Lscala_collection_mutable_LinkedList().isEmpty__Z()) {
      return res
    } else {
      return this.removeAllFromList__p6__Lscala_Function1__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_mutable_ArrayBuffer(p, res)
    }
  }
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.removeAllFromList__p6__Lscala_Function1__Lscala_collection_mutable_ArrayBuffer__Lscala_collection_mutable_ArrayBuffer = (function(p, res) {
  var leftlst = this.first0__Lscala_collection_mutable_LinkedList();
  while (leftlst.next__Lscala_collection_mutable_Seq().nonEmpty__Z()) {
    if (ScalaJS.uZ(p.apply__O__O(ScalaJS.as.scala_collection_mutable_LinkedListLike(leftlst.next__Lscala_collection_mutable_Seq()).elem__O()))) {
      res.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(ScalaJS.as.scala_collection_mutable_LinkedListLike(leftlst.next__Lscala_collection_mutable_Seq()).elem__O());
      if ((leftlst.next__Lscala_collection_mutable_Seq() === this.last0__Lscala_collection_mutable_LinkedList())) {
        this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(leftlst)
      };
      leftlst.next$und$eq__Lscala_collection_mutable_Seq__V(ScalaJS.as.scala_collection_mutable_LinkedListLike(leftlst.next__Lscala_collection_mutable_Seq()).next__Lscala_collection_mutable_Seq());
      this.decrementLength__p6__V()
    } else {
      leftlst = ScalaJS.as.scala_collection_mutable_LinkedList(leftlst.next__Lscala_collection_mutable_Seq())
    }
  };
  return res
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.extractFirst__Lscala_collection_mutable_LinkedList__Lscala_Function1__Lscala_Option = (function(start, p) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    var cell = start;
    while ((cell.next__Lscala_collection_mutable_Seq().nonEmpty__Z() && (!ScalaJS.uZ(p.apply__O__O(ScalaJS.as.scala_collection_mutable_LinkedListLike(cell.next__Lscala_collection_mutable_Seq()).elem__O()))))) {
      cell = ScalaJS.as.scala_collection_mutable_LinkedList(cell.next__Lscala_collection_mutable_Seq())
    };
    if (ScalaJS.as.scala_collection_mutable_LinkedListLike(cell.next__Lscala_collection_mutable_Seq()).isEmpty__Z()) {
      return ScalaJS.modules.scala_None()
    } else {
      var res = new ScalaJS.c.scala_Some().init___O(cell.next__Lscala_collection_mutable_Seq());
      cell.next$und$eq__Lscala_collection_mutable_Seq__V(ScalaJS.as.scala_collection_mutable_LinkedListLike(cell.next__Lscala_collection_mutable_Seq()).next__Lscala_collection_mutable_Seq());
      this.decrementLength__p6__V();
      return res
    }
  }
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.front__O = (function() {
  return this.head__O()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.tailImpl__p6__Lscala_collection_mutable_Queue__V = (function(tl) {
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
ScalaJS.c.scala_collection_mutable_Queue.prototype.tail__Lscala_collection_mutable_Queue = (function() {
  var tl = new ScalaJS.c.scala_collection_mutable_Queue().init___();
  this.tailImpl__p6__Lscala_collection_mutable_Queue__V(tl);
  return tl
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.clone__Lscala_collection_mutable_Queue = (function() {
  var bf = this.newBuilder__Lscala_collection_mutable_Builder();
  bf.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this.seq__Lscala_collection_mutable_LinearSeq());
  return ScalaJS.as.scala_collection_mutable_Queue(bf.result__O())
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.decrementLength__p6__V = (function() {
  this.len$und$eq__I__V((this.len__I() - 1));
  if ((this.len__I() === 0)) {
    this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(this.first0__Lscala_collection_mutable_LinkedList())
  }
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_mutable_LinearSeq()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized(p)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_LinearSeqOptimized(from, until)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.clone__Lscala_collection_mutable_MutableList = (function() {
  return this.clone__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return this.tail__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.tail__Lscala_collection_mutable_MutableList = (function() {
  return this.tail__Lscala_collection_mutable_Queue()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.init___Lscala_collection_mutable_LinkedList__Lscala_collection_mutable_LinkedList__I = (function(fst, lst, lng) {
  ScalaJS.c.scala_collection_mutable_Queue.prototype.init___.call(this);
  this.first0$und$eq__Lscala_collection_mutable_LinkedList__V(fst);
  this.last0$und$eq__Lscala_collection_mutable_LinkedList__V(lst);
  this.len$und$eq__I__V(lng);
  return this
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.front__ = (function() {
  return this.front__O()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.extractFirst__Lscala_collection_mutable_LinkedList__Lscala_Function1__ = (function(start, p) {
  return this.extractFirst__Lscala_collection_mutable_LinkedList__Lscala_Function1__Lscala_Option(start, p)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeueAll__Lscala_Function1__ = (function(p$2) {
  return this.dequeueAll__Lscala_Function1__Lscala_collection_mutable_Seq(p$2)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeueFirst__Lscala_Function1__ = (function(p$3) {
  return this.dequeueFirst__Lscala_Function1__Lscala_Option(p$3)
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.dequeue__ = (function() {
  return this.dequeue__O()
});
ScalaJS.c.scala_collection_mutable_Queue.prototype.enqueue__Lscala_collection_Seq__ = (function(elems) {
  return ScalaJS.bV(this.enqueue__Lscala_collection_Seq__V(elems))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_Queue = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_Queue.prototype = ScalaJS.c.scala_collection_mutable_Queue.prototype;
ScalaJS.is.scala_collection_mutable_Queue = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Queue)))
});
ScalaJS.as.scala_collection_mutable_Queue = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Queue(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Queue")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Queue = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Queue)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Queue = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Queue(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Queue;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Queue = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Queue: 0
}, false, "scala.collection.mutable.Queue", ScalaJS.data.scala_collection_mutable_MutableList, {
  scala_collection_mutable_Queue: 1,
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
ScalaJS.c.scala_collection_mutable_Queue.prototype.$classData = ScalaJS.data.scala_collection_mutable_Queue;
//@ sourceMappingURL=Queue.js.map
