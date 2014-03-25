/** @constructor */
ScalaJS.c.scala_collection_immutable_LongMapValueIterator = (function() {
  ScalaJS.c.scala_collection_immutable_LongMapIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_LongMapValueIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_LongMapIterator();
ScalaJS.c.scala_collection_immutable_LongMapValueIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_LongMapValueIterator;
ScalaJS.c.scala_collection_immutable_LongMapValueIterator.prototype.valueOf__Lscala_collection_immutable_LongMap$Tip__O = (function(tip) {
  return tip.value__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_LongMapValueIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_LongMapValueIterator.prototype = ScalaJS.c.scala_collection_immutable_LongMapValueIterator.prototype;
ScalaJS.is.scala_collection_immutable_LongMapValueIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_LongMapValueIterator)))
});
ScalaJS.as.scala_collection_immutable_LongMapValueIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_LongMapValueIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.LongMapValueIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_LongMapValueIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_LongMapValueIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_LongMapValueIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_LongMapValueIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.LongMapValueIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_LongMapValueIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_LongMapValueIterator: 0
}, false, "scala.collection.immutable.LongMapValueIterator", ScalaJS.data.scala_collection_immutable_LongMapIterator, {
  scala_collection_immutable_LongMapValueIterator: 1,
  scala_collection_immutable_LongMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_LongMapValueIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_LongMapValueIterator;
//@ sourceMappingURL=LongMapValueIterator.js.map
