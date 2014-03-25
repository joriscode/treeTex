/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMapKeyIterator = (function() {
  ScalaJS.c.scala_collection_immutable_LongMapIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMapKeyIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_LongMapIterator();
ScalaJS.c.scala_collection_immutable_LongMapKeyIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMapKeyIterator;
ScalaJS.c.scala_collection_immutable_LongMapKeyIterator.prototype.valueOf__Lscala_collection_immutable_LongMap$Tip__J = (function(tip) {
  return tip.key__J()
});
ScalaJS.c.scala_collection_immutable_LongMapKeyIterator.prototype.valueOf__Lscala_collection_immutable_LongMap$Tip__O = (function(tip) {
  return ScalaJS.bJ(this.valueOf__Lscala_collection_immutable_LongMap$Tip__J(tip))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMapKeyIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMapKeyIterator.prototype = ScalaJS.c.scala_collection_immutable_LongMapKeyIterator.prototype;
ScalaJS.is.scala_collection_immutable_LongMapKeyIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMapKeyIterator)))
});
ScalaJS.as.scala_collection_immutable_LongMapKeyIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMapKeyIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMapKeyIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMapKeyIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMapKeyIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMapKeyIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMapKeyIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMapKeyIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMapKeyIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMapKeyIterator: 0
}, false, "scala.collection.immutable.LongMapKeyIterator", ScalaJS.data.scala_collection_immutable_LongMapIterator, {
  scala_collection_immutable_LongMapKeyIterator: 1,
  scala_collection_immutable_LongMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMapKeyIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMapKeyIterator;
//@ sourceMappingURL=LongMapKeyIterator.js.map
