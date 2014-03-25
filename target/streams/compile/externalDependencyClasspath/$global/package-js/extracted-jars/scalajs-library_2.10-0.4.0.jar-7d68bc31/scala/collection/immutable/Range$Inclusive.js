/** @constructor */
ScalaJS.c.scala_collection_immutable_Range$Inclusive = (function() {
  ScalaJS.c.scala_collection_immutable_Range.call(this)
});
ScalaJS.c.scala_collection_immutable_Range$Inclusive.prototype = new ScalaJS.inheritable.scala_collection_immutable_Range();
ScalaJS.c.scala_collection_immutable_Range$Inclusive.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range$Inclusive;
ScalaJS.c.scala_collection_immutable_Range$Inclusive.prototype.isInclusive__Z = (function() {
  return true
});
ScalaJS.c.scala_collection_immutable_Range$Inclusive.prototype.copy__I__I__I__Lscala_collection_immutable_Range = (function(start, end, step) {
  return new ScalaJS.c.scala_collection_immutable_Range$Inclusive().init___I__I__I(start, end, step)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range$Inclusive = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range$Inclusive.prototype = ScalaJS.c.scala_collection_immutable_Range$Inclusive.prototype;
ScalaJS.is.scala_collection_immutable_Range$Inclusive = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range$Inclusive)))
});
ScalaJS.as.scala_collection_immutable_Range$Inclusive = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range$Inclusive(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range$Inclusive")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range$Inclusive = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range$Inclusive)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range$Inclusive = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range$Inclusive(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range$Inclusive;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range$Inclusive = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range$Inclusive: 0
}, false, "scala.collection.immutable.Range$Inclusive", ScalaJS.data.scala_collection_immutable_Range, {
  scala_collection_immutable_Range$Inclusive: 1,
  scala_collection_immutable_Range: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
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
ScalaJS.c.scala_collection_immutable_Range$Inclusive.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range$Inclusive;
//@ sourceMappingURL=Range$Inclusive.js.map
