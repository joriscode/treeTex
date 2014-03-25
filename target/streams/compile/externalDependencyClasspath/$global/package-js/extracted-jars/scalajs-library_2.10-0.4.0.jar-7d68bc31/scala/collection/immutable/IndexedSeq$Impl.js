/** @constructor */
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.buf$4 = null
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.constructor = ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl;
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__companion__Lscala_collection_immutable_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__toIndexedSeq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__seq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.length__I = (function() {
  return this.buf$4.length__I()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.apply__I__O = (function(idx) {
  return this.buf$4.apply__I__O(idx)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.init___Lscala_collection_mutable_ArrayBuffer = (function(buf) {
  this.buf$4 = buf;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__$init$__Lscala_collection_immutable_IndexedSeq__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IndexedSeq$Impl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IndexedSeq$Impl.prototype = ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype;
ScalaJS.is.scala_collection_immutable_IndexedSeq$Impl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IndexedSeq$Impl)))
});
ScalaJS.as.scala_collection_immutable_IndexedSeq$Impl = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IndexedSeq$Impl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IndexedSeq$Impl")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IndexedSeq$Impl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IndexedSeq$Impl)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IndexedSeq$Impl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IndexedSeq$Impl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq$Impl;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IndexedSeq$Impl = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IndexedSeq$Impl: 0
}, false, "scala.collection.immutable.IndexedSeq$Impl", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_IndexedSeq$Impl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_IndexedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
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
ScalaJS.c.scala_collection_immutable_IndexedSeq$Impl.prototype.$classData = ScalaJS.data.scala_collection_immutable_IndexedSeq$Impl;
//@ sourceMappingURL=IndexedSeq$Impl.js.map
