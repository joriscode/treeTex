/** @constructor */
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive = (function() {
  ScalaJS.c.scala_collection_immutable_NumericRange.call(this);
  this.num$5 = null
});
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype = new ScalaJS.inheritable.scala_collection_immutable_NumericRange();
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.constructor = ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive;
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.copy__O__O__O__Lscala_collection_immutable_NumericRange$Inclusive = (function(start, end, step) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().inclusive__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step, this.num$5)
});
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.exclusive__Lscala_collection_immutable_NumericRange$Exclusive = (function() {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(ScalaJS.c.scala_collection_immutable_NumericRange.prototype.start__O.call(this), ScalaJS.c.scala_collection_immutable_NumericRange.prototype.end__O.call(this), ScalaJS.c.scala_collection_immutable_NumericRange.prototype.step__O.call(this), this.num$5)
});
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.copy__O__O__O__Lscala_collection_immutable_NumericRange = (function(start, end, step) {
  return this.copy__O__O__O__Lscala_collection_immutable_NumericRange$Inclusive(start, end, step)
});
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.init___O__O__O__Lscala_math_Integral = (function(start, end, step, num) {
  this.num$5 = num;
  ScalaJS.c.scala_collection_immutable_NumericRange.prototype.init___O__O__O__Z__Lscala_math_Integral.call(this, start, end, step, true, num);
  return this
});
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.exclusive__ = (function() {
  return this.exclusive__Lscala_collection_immutable_NumericRange$Exclusive()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_NumericRange$Inclusive = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_NumericRange$Inclusive.prototype = ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype;
ScalaJS.is.scala_collection_immutable_NumericRange$Inclusive = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_NumericRange$Inclusive)))
});
ScalaJS.as.scala_collection_immutable_NumericRange$Inclusive = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_NumericRange$Inclusive(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.NumericRange$Inclusive")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_NumericRange$Inclusive = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_NumericRange$Inclusive)))
});
ScalaJS.asArrayOf.scala_collection_immutable_NumericRange$Inclusive = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_NumericRange$Inclusive(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.NumericRange$Inclusive;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_NumericRange$Inclusive = new ScalaJS.ClassTypeData({
  scala_collection_immutable_NumericRange$Inclusive: 0
}, false, "scala.collection.immutable.NumericRange$Inclusive", ScalaJS.data.scala_collection_immutable_NumericRange, {
  scala_collection_immutable_NumericRange$Inclusive: 1,
  scala_collection_immutable_NumericRange: 1,
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
ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive.prototype.$classData = ScalaJS.data.scala_collection_immutable_NumericRange$Inclusive;
//@ sourceMappingURL=NumericRange$Inclusive.js.map