/** @constructor */
ScalaJS.c.scala_collection_SeqLike$$anon$5 = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.Warr$4 = null;
  this.delta$4 = 0;
  this.done$4 = 0;
  this.wit$4 = null;
  this.i$4 = 0;
  this.length$4 = 0
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.constructor = ScalaJS.c.scala_collection_SeqLike$$anon$5;
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeq$class__companion__Lscala_collection_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeq$class__seq__Lscala_collection_IndexedSeq__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.wit__Lscala_collection_Iterator = (function() {
  return this.wit$4
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.i__I = (function() {
  return this.i$4
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.i$und$eq__I__V = (function(x$1) {
  this.i$4 = x$1
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.length__I = (function() {
  return this.length$4
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.apply__I__O = (function(x) {
  return this.Warr$4.underlying[x]
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.init___Lscala_collection_Seq__I__I__Z = (function(W$1, n0$1, n1$1, forward$1) {
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  this.Warr$4 = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [(n1$1 - n0$1)]);
  if (forward$1) {
    var jsx$1 = 1
  } else {
    var jsx$1 = -1
  };
  this.delta$4 = jsx$1;
  if (forward$1) {
    var jsx$2 = (n1$1 - n0$1)
  } else {
    var jsx$2 = -1
  };
  this.done$4 = jsx$2;
  this.wit$4 = W$1.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(n0$1);
  if (forward$1) {
    var jsx$3 = 0
  } else {
    var jsx$3 = ((n1$1 - n0$1) - 1)
  };
  this.i$4 = jsx$3;
  while ((this.i__I() !== this.done$4)) {
    this.Warr$4.underlying[this.i__I()] = this.wit__Lscala_collection_Iterator().next__O();
    this.i$und$eq__I__V((this.i__I() + this.delta$4))
  };
  this.length$4 = (n1$1 - n0$1);
  return this
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.i$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.i$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.i__ = (function() {
  return ScalaJS.bI(this.i__I())
});
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.wit__ = (function() {
  return this.wit__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_SeqLike$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_SeqLike$$anon$5.prototype = ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype;
ScalaJS.is.scala_collection_SeqLike$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqLike$$anon$5)))
});
ScalaJS.as.scala_collection_SeqLike$$anon$5 = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqLike$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqLike$$anon$5")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqLike$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqLike$$anon$5)))
});
ScalaJS.asArrayOf.scala_collection_SeqLike$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqLike$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqLike$$anon$5;", depth)
  }
});
ScalaJS.data.scala_collection_SeqLike$$anon$5 = new ScalaJS.ClassTypeData({
  scala_collection_SeqLike$$anon$5: 0
}, false, "scala.collection.SeqLike$$anon$5", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_SeqLike$$anon$5: 1,
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
ScalaJS.c.scala_collection_SeqLike$$anon$5.prototype.$classData = ScalaJS.data.scala_collection_SeqLike$$anon$5;
//@ sourceMappingURL=SeqLike$$anon$5.js.map
