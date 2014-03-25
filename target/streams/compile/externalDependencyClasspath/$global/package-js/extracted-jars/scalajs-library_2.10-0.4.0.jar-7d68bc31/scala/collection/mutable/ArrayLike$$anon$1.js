/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1 = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.$$outer$4 = null
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1;
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeq$class__companion__Lscala_collection_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeq$class__seq__Lscala_collection_IndexedSeq__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.length__I = (function() {
  return this.$$outer$4.length__I()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.apply__I__O = (function(idx) {
  var x1 = this.$$outer$4.apply__I__O(idx);
  if (ScalaJS.is.java_lang_Object(x1)) {
    var x2 = x1;
    if (ScalaJS.objectGetClass(x2).isArray__Z()) {
      return ScalaJS.modules.scala_collection_mutable_WrappedArray().make__O__Lscala_collection_mutable_WrappedArray(x2).deep__Lscala_collection_IndexedSeq()
    }
  };
  return x1
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.stringPrefix__T = (function() {
  return "Array"
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.init___Lscala_collection_mutable_ArrayLike = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$4 = $$outer
  };
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayLike$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayLike$$anon$1.prototype = ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype;
ScalaJS.is.scala_collection_mutable_ArrayLike$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayLike$$anon$1)))
});
ScalaJS.as.scala_collection_mutable_ArrayLike$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayLike$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayLike$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayLike$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayLike$$anon$1)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayLike$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayLike$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayLike$$anon$1;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayLike$$anon$1 = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayLike$$anon$1: 0
}, false, "scala.collection.mutable.ArrayLike$$anon$1", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_mutable_ArrayLike$$anon$1: 1,
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
ScalaJS.c.scala_collection_mutable_ArrayLike$$anon$1.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayLike$$anon$1;
//@ sourceMappingURL=ArrayLike$$anon$1.js.map
