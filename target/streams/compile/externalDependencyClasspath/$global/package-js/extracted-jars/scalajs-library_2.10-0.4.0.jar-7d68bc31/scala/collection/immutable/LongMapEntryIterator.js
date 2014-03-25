/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMapEntryIterator = (function() {
  ScalaJS.c.scala_collection_immutable_LongMapIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMapEntryIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_LongMapIterator();
ScalaJS.c.scala_collection_immutable_LongMapEntryIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMapEntryIterator;
ScalaJS.c.scala_collection_immutable_LongMapEntryIterator.prototype.valueOf__Lscala_collection_immutable_LongMap$Tip__Lscala_Tuple2 = (function(tip$2) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bJ(tip$2.key__J()), tip$2.value__O())
});
ScalaJS.c.scala_collection_immutable_LongMapEntryIterator.prototype.valueOf__Lscala_collection_immutable_LongMap$Tip__O = (function(tip) {
  return this.valueOf__Lscala_collection_immutable_LongMap$Tip__Lscala_Tuple2(tip)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMapEntryIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMapEntryIterator.prototype = ScalaJS.c.scala_collection_immutable_LongMapEntryIterator.prototype;
ScalaJS.is.scala_collection_immutable_LongMapEntryIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMapEntryIterator)))
});
ScalaJS.as.scala_collection_immutable_LongMapEntryIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMapEntryIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMapEntryIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMapEntryIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMapEntryIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMapEntryIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMapEntryIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMapEntryIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMapEntryIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMapEntryIterator: 0
}, false, "scala.collection.immutable.LongMapEntryIterator", ScalaJS.data.scala_collection_immutable_LongMapIterator, {
  scala_collection_immutable_LongMapEntryIterator: 1,
  scala_collection_immutable_LongMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMapEntryIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMapEntryIterator;
//@ sourceMappingURL=LongMapEntryIterator.js.map
