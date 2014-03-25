/** @constructor */
ScalaJS.c.scala_collection_mutable_AbstractSeq = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.constructor = ScalaJS.c.scala_collection_mutable_AbstractSeq;
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_mutable_Seq$class__companion__Lscala_collection_mutable_Seq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_mutable_Seq$class__seq__Lscala_collection_mutable_Seq__Lscala_collection_mutable_Seq(this)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_mutable_SeqLike$class__parCombiner__Lscala_collection_mutable_SeqLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.transform__Lscala_Function1__Lscala_collection_mutable_SeqLike = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_SeqLike$class__transform__Lscala_collection_mutable_SeqLike__Lscala_Function1__Lscala_collection_mutable_SeqLike(this, f)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.scala$collection$mutable$Cloneable$$super$clone__O = (function() {
  return ScalaJS.c.java_lang_Object.prototype.clone__O.call(this)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.clone__O = (function() {
  return ScalaJS.impls.scala_collection_mutable_Cloneable$class__clone__Lscala_collection_mutable_Cloneable__O(this)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Seq(repr)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_Traversable$class__$init$__Lscala_collection_mutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_mutable_Iterable$class__$init$__Lscala_collection_mutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_mutable_Cloneable$class__$init$__Lscala_collection_mutable_Cloneable__V(this);
  ScalaJS.impls.scala_collection_mutable_SeqLike$class__$init$__Lscala_collection_mutable_SeqLike__V(this);
  ScalaJS.impls.scala_collection_mutable_Seq$class__$init$__Lscala_collection_mutable_Seq__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.scala$collection$mutable$Cloneable$$super$clone__ = (function() {
  return this.scala$collection$mutable$Cloneable$$super$clone__O()
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.transform__Lscala_Function1__ = (function(f) {
  return this.transform__Lscala_Function1__Lscala_collection_mutable_SeqLike(f)
});
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.update__I__O__ = (function(idx, elem) {
  return ScalaJS.bV(this.update__I__O__V(idx, elem))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_AbstractSeq = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_AbstractSeq.prototype = ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype;
ScalaJS.is.scala_collection_mutable_AbstractSeq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_AbstractSeq)))
});
ScalaJS.as.scala_collection_mutable_AbstractSeq = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_AbstractSeq(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.AbstractSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_AbstractSeq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_AbstractSeq)))
});
ScalaJS.asArrayOf.scala_collection_mutable_AbstractSeq = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_AbstractSeq(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.AbstractSeq;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_AbstractSeq = new ScalaJS.ClassTypeData({
  scala_collection_mutable_AbstractSeq: 0
}, false, "scala.collection.mutable.AbstractSeq", ScalaJS.data.scala_collection_AbstractSeq, {
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
ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.$classData = ScalaJS.data.scala_collection_mutable_AbstractSeq;
//@ sourceMappingURL=AbstractSeq.js.map
