/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMapValueIterator = (function() {
  ScalaJS.c.scala_collection_immutable_IntMapIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMapValueIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_IntMapIterator();
ScalaJS.c.scala_collection_immutable_IntMapValueIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMapValueIterator;
ScalaJS.c.scala_collection_immutable_IntMapValueIterator.prototype.valueOf__Lscala_collection_immutable_IntMap$Tip__O = (function(tip) {
  return tip.value__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMapValueIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMapValueIterator.prototype = ScalaJS.c.scala_collection_immutable_IntMapValueIterator.prototype;
ScalaJS.is.scala_collection_immutable_IntMapValueIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMapValueIterator)))
});
ScalaJS.as.scala_collection_immutable_IntMapValueIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMapValueIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMapValueIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMapValueIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMapValueIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMapValueIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMapValueIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMapValueIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMapValueIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMapValueIterator: 0
}, false, "scala.collection.immutable.IntMapValueIterator", ScalaJS.data.scala_collection_immutable_IntMapIterator, {
  scala_collection_immutable_IntMapValueIterator: 1,
  scala_collection_immutable_IntMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMapValueIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMapValueIterator;
//@ sourceMappingURL=IntMapValueIterator.js.map
