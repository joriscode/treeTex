/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMapEntryIterator = (function() {
  ScalaJS.c.scala_collection_immutable_IntMapIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMapEntryIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_IntMapIterator();
ScalaJS.c.scala_collection_immutable_IntMapEntryIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMapEntryIterator;
ScalaJS.c.scala_collection_immutable_IntMapEntryIterator.prototype.valueOf__Lscala_collection_immutable_IntMap$Tip__Lscala_Tuple2 = (function(tip$2) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(tip$2.key__I()), tip$2.value__O())
});
ScalaJS.c.scala_collection_immutable_IntMapEntryIterator.prototype.valueOf__Lscala_collection_immutable_IntMap$Tip__O = (function(tip) {
  return this.valueOf__Lscala_collection_immutable_IntMap$Tip__Lscala_Tuple2(tip)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMapEntryIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMapEntryIterator.prototype = ScalaJS.c.scala_collection_immutable_IntMapEntryIterator.prototype;
ScalaJS.is.scala_collection_immutable_IntMapEntryIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMapEntryIterator)))
});
ScalaJS.as.scala_collection_immutable_IntMapEntryIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMapEntryIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMapEntryIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMapEntryIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMapEntryIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMapEntryIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMapEntryIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMapEntryIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMapEntryIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMapEntryIterator: 0
}, false, "scala.collection.immutable.IntMapEntryIterator", ScalaJS.data.scala_collection_immutable_IntMapIterator, {
  scala_collection_immutable_IntMapEntryIterator: 1,
  scala_collection_immutable_IntMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMapEntryIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMapEntryIterator;
//@ sourceMappingURL=IntMapEntryIterator.js.map
