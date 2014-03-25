/** @constructor */
ScalaJS.c.scala_collection_immutable_Queue = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.in$4 = null;
  this.out$4 = null
});
ScalaJS.c.scala_collection_immutable_Queue.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_Queue.prototype.constructor = ScalaJS.c.scala_collection_immutable_Queue;
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_immutable_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_LinearSeq$class__seq__Lscala_collection_immutable_LinearSeq__Lscala_collection_immutable_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.thisCollection__Lscala_collection_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.$in__Lscala_collection_immutable_List = (function() {
  return this.in$4
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.out__Lscala_collection_immutable_List = (function() {
  return this.out$4
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_Queue()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.apply__I__O = (function(n) {
  var len = this.out__Lscala_collection_immutable_List().length__I();
  if ((n < len)) {
    return this.out__Lscala_collection_immutable_List().apply__I__O(n)
  } else {
    var m = (n - len);
    if ((m < this.$in__Lscala_collection_immutable_List().length__I())) {
      return this.$in__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List().apply__I__O(m)
    } else {
      throw new ScalaJS.c.java_util_NoSuchElementException().init___T("index out of range")
    }
  }
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.iterator__Lscala_collection_Iterator = (function() {
  var x$1 = this.out__Lscala_collection_immutable_List();
  var jsx$1 = this.$in__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List().$$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(x$1);
  return jsx$1.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.isEmpty__Z = (function() {
  return (this.$in__Lscala_collection_immutable_List().isEmpty__Z() && this.out__Lscala_collection_immutable_List().isEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.head__O = (function() {
  if (this.out__Lscala_collection_immutable_List().nonEmpty__Z()) {
    return this.out__Lscala_collection_immutable_List().head__O()
  } else {
    if (this.$in__Lscala_collection_immutable_List().nonEmpty__Z()) {
      return this.$in__Lscala_collection_immutable_List().last__O()
    } else {
      throw new ScalaJS.c.java_util_NoSuchElementException().init___T("head on empty queue")
    }
  }
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.tail__Lscala_collection_immutable_Queue = (function() {
  if (this.out__Lscala_collection_immutable_List().nonEmpty__Z()) {
    return new ScalaJS.c.scala_collection_immutable_Queue().init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(this.$in__Lscala_collection_immutable_List(), ScalaJS.as.scala_collection_immutable_List(this.out__Lscala_collection_immutable_List().tail__O()))
  } else {
    if (this.$in__Lscala_collection_immutable_List().nonEmpty__Z()) {
      return new ScalaJS.c.scala_collection_immutable_Queue().init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.as.scala_collection_immutable_List(this.$in__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List().tail__O()))
    } else {
      throw new ScalaJS.c.java_util_NoSuchElementException().init___T("tail on empty queue")
    }
  }
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.length__I = (function() {
  return (this.$in__Lscala_collection_immutable_List().length__I() + this.out__Lscala_collection_immutable_List().length__I())
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.enqueue__O__Lscala_collection_immutable_Queue = (function(elem) {
  var jsx$3 = new ScalaJS.c.scala_collection_immutable_Queue();
  var x$2 = elem;
  var jsx$2 = this.$in__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$2);
  return jsx$3.init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(jsx$2, this.out__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.enqueue__Lscala_collection_immutable_Iterable__Lscala_collection_immutable_Queue = (function(iter) {
  var jsx$5 = new ScalaJS.c.scala_collection_immutable_Queue();
  var x$3 = iter.toList__Lscala_collection_immutable_List();
  var jsx$4 = this.$in__Lscala_collection_immutable_List().reverse$und$colon$colon$colon__Lscala_collection_immutable_List__Lscala_collection_immutable_List(x$3);
  return jsx$5.init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(jsx$4, this.out__Lscala_collection_immutable_List())
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.dequeue__Lscala_Tuple2 = (function() {
  var x1 = this.out__Lscala_collection_immutable_List();
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_collection_immutable_Nil(), x1)) {
    if ((!this.$in__Lscala_collection_immutable_List().isEmpty__Z())) {
      var rev = this.$in__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List();
      return new ScalaJS.c.scala_Tuple2().init___O__O(rev.head__O(), new ScalaJS.c.scala_collection_immutable_Queue().init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(ScalaJS.modules.scala_collection_immutable_Nil(), ScalaJS.as.scala_collection_immutable_List(rev.tail__O())))
    }
  };
  if (ScalaJS.is.scala_collection_immutable_$colon$colon(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_$colon$colon(x1);
    var x = x2.hd$1__O();
    var xs = x2.tl$1__Lscala_collection_immutable_List();
    return new ScalaJS.c.scala_Tuple2().init___O__O(x, new ScalaJS.c.scala_collection_immutable_Queue().init___Lscala_collection_immutable_List__Lscala_collection_immutable_List(this.$in__Lscala_collection_immutable_List(), xs))
  };
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T("dequeue on empty queue")
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.front__O = (function() {
  return this.head__O()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toString__T = (function() {
  return this.mkString__T__T__T__T("Queue(", ", ", ")")
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_Queue()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.init___Lscala_collection_immutable_List__Lscala_collection_immutable_List = (function(in$2, out) {
  this.in$4 = in$2;
  this.out$4 = out;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V(this);
  ScalaJS.impls.scala_collection_LinearSeq$class__$init$__Lscala_collection_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_LinearSeq$class__$init$__Lscala_collection_immutable_LinearSeq__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.toCollection__Lscala_collection_LinearSeqLike__ = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.front__ = (function() {
  return this.front__O()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.dequeue__ = (function() {
  return this.dequeue__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.enqueue__Lscala_collection_immutable_Iterable__ = (function(iter) {
  return this.enqueue__Lscala_collection_immutable_Iterable__Lscala_collection_immutable_Queue(iter)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.enqueue__O__ = (function(elem) {
  return this.enqueue__O__Lscala_collection_immutable_Queue(elem)
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.out__ = (function() {
  return this.out__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_Queue.prototype.$in__ = (function() {
  return this.$in__Lscala_collection_immutable_List()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Queue = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Queue.prototype = ScalaJS.c.scala_collection_immutable_Queue.prototype;
ScalaJS.is.scala_collection_immutable_Queue = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Queue)))
});
ScalaJS.as.scala_collection_immutable_Queue = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Queue(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Queue")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Queue = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Queue)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Queue = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Queue(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Queue;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Queue = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Queue: 0
}, false, "scala.collection.immutable.Queue", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_Queue: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_Queue.prototype.$classData = ScalaJS.data.scala_collection_immutable_Queue;
//@ sourceMappingURL=Queue.js.map
