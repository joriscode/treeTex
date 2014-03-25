/** @constructor */
ScalaJS.c.scala_collection_immutable_PagedSeq = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.more$4 = null;
  this.first1$4 = null;
  this.start$4 = 0;
  this.end$4 = 0;
  this.evidence$3$4 = null;
  this.current$4 = null
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.constructor = ScalaJS.c.scala_collection_immutable_PagedSeq;
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeq$class__companion__Lscala_collection_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeq$class__seq__Lscala_collection_IndexedSeq__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.current__p4__Lscala_collection_immutable_Page = (function() {
  return this.current$4
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.current$und$eq__p4__Lscala_collection_immutable_Page__V = (function(x$1) {
  this.current$4 = x$1
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.latest__p4__Lscala_collection_immutable_Page = (function() {
  return this.first1$4.latest__Lscala_collection_immutable_Page()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.addMore__p4__Lscala_collection_immutable_Page = (function() {
  return this.latest__p4__Lscala_collection_immutable_Page().addMore__Lscala_Function3__Lscala_collection_immutable_Page(this.more$4)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.page__p4__I__Lscala_collection_immutable_Page = (function(absindex) {
  if ((absindex < this.current__p4__Lscala_collection_immutable_Page().start__I())) {
    this.current$und$eq__p4__Lscala_collection_immutable_Page__V(this.first1$4)
  };
  while (((absindex >= this.current__p4__Lscala_collection_immutable_Page().end__I()) && (!ScalaJS.anyRefEqEq(this.current__p4__Lscala_collection_immutable_Page().next__Lscala_collection_immutable_Page(), null)))) {
    this.current$und$eq__p4__Lscala_collection_immutable_Page__V(this.current__p4__Lscala_collection_immutable_Page().next__Lscala_collection_immutable_Page())
  };
  while (((absindex >= this.current__p4__Lscala_collection_immutable_Page().end__I()) && (!this.current__p4__Lscala_collection_immutable_Page().isLast__Z()))) {
    this.current$und$eq__p4__Lscala_collection_immutable_Page__V(this.addMore__p4__Lscala_collection_immutable_Page())
  };
  return this.current__p4__Lscala_collection_immutable_Page()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.length__I = (function() {
  while ((!this.latest__p4__Lscala_collection_immutable_Page().isLast__Z())) {
    this.addMore__p4__Lscala_collection_immutable_Page()
  };
  return (ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(this.latest__p4__Lscala_collection_immutable_Page().end__I()), this.end$4) - this.start$4)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.apply__I__O = (function(index) {
  if (this.isDefinedAt__I__Z(index)) {
    return this.page__p4__I__Lscala_collection_immutable_Page((index + this.start$4)).apply__I__O((index + this.start$4))
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(index)))
  }
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.isDefinedAt__I__Z = (function(index) {
  if (((index >= 0) && (index < (this.end$4 - this.start$4)))) {
    var p = this.page__p4__I__Lscala_collection_immutable_Page((index + this.start$4));
    return ((index + this.start$4) < p.end__I())
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.slice__I__I__Lscala_collection_immutable_PagedSeq = (function(_start, _end) {
  this.page__p4__I__Lscala_collection_immutable_Page(this.start$4);
  var s = (this.start$4 + _start);
  if ((_end === 2147483647)) {
    var e = _end
  } else {
    var e = (this.start$4 + _end)
  };
  var f = this.first1$4;
  while (((f.end__I() <= s) && (!f.isLast__Z()))) {
    f = f.next__Lscala_collection_immutable_Page()
  };
  return new ScalaJS.c.scala_collection_immutable_PagedSeq().init___Lscala_Function3__Lscala_collection_immutable_Page__I__I__Lscala_reflect_ClassTag(this.more$4, f, s, e, this.evidence$3$4)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.slice__I__Lscala_collection_immutable_PagedSeq = (function(start) {
  return this.slice__I__I__Lscala_collection_immutable_PagedSeq(start, 2147483647)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toString__T = (function() {
  var buf = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  this.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(buf$1) {
    return (function(ch) {
      return buf$1.append__O__Lscala_collection_mutable_StringBuilder(ch)
    })
  })(buf)));
  return buf.toString__T()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_PagedSeq(from, until)
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.init___Lscala_Function3__Lscala_collection_immutable_Page__I__I__Lscala_reflect_ClassTag = (function(more, first1, start, end, evidence$3) {
  this.more$4 = more;
  this.first1$4 = first1;
  this.start$4 = start;
  this.end$4 = end;
  this.evidence$3$4 = evidence$3;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  this.current$4 = first1;
  return this
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.init___Lscala_Function3__Lscala_reflect_ClassTag = (function(more, evidence$4) {
  ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.init___Lscala_Function3__Lscala_collection_immutable_Page__I__I__Lscala_reflect_ClassTag.call(this, more, new ScalaJS.c.scala_collection_immutable_Page().init___I__Lscala_reflect_ClassTag(0, evidence$4), 0, 2147483647, evidence$4);
  return this
});
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.slice__I__ = (function(start) {
  return this.slice__I__Lscala_collection_immutable_PagedSeq(start)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_PagedSeq = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_PagedSeq.prototype = ScalaJS.c.scala_collection_immutable_PagedSeq.prototype;
ScalaJS.is.scala_collection_immutable_PagedSeq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_PagedSeq)))
});
ScalaJS.as.scala_collection_immutable_PagedSeq = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_PagedSeq(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.PagedSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_PagedSeq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_PagedSeq)))
});
ScalaJS.asArrayOf.scala_collection_immutable_PagedSeq = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_PagedSeq(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.PagedSeq;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_PagedSeq = new ScalaJS.ClassTypeData({
  scala_collection_immutable_PagedSeq: 0
}, false, "scala.collection.immutable.PagedSeq", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_PagedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
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
ScalaJS.c.scala_collection_immutable_PagedSeq.prototype.$classData = ScalaJS.data.scala_collection_immutable_PagedSeq;
//@ sourceMappingURL=PagedSeq.js.map
