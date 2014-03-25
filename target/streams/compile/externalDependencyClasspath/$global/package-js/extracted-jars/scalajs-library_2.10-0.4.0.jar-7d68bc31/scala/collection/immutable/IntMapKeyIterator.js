/** @constructor */
ScalaJS.c.scala_collection_immutable_IntMapKeyIterator = (function() {
  ScalaJS.c.scala_collection_immutable_IntMapIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_IntMapKeyIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_IntMapIterator();
ScalaJS.c.scala_collection_immutable_IntMapKeyIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_IntMapKeyIterator;
ScalaJS.c.scala_collection_immutable_IntMapKeyIterator.prototype.valueOf__Lscala_collection_immutable_IntMap$Tip__I = (function(tip) {
  return tip.key__I()
});
ScalaJS.c.scala_collection_immutable_IntMapKeyIterator.prototype.valueOf__Lscala_collection_immutable_IntMap$Tip__O = (function(tip) {
  return ScalaJS.bI(this.valueOf__Lscala_collection_immutable_IntMap$Tip__I(tip))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_IntMapKeyIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_IntMapKeyIterator.prototype = ScalaJS.c.scala_collection_immutable_IntMapKeyIterator.prototype;
ScalaJS.is.scala_collection_immutable_IntMapKeyIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_IntMapKeyIterator)))
});
ScalaJS.as.scala_collection_immutable_IntMapKeyIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_IntMapKeyIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.IntMapKeyIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_IntMapKeyIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_IntMapKeyIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_IntMapKeyIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_IntMapKeyIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.IntMapKeyIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_IntMapKeyIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_IntMapKeyIterator: 0
}, false, "scala.collection.immutable.IntMapKeyIterator", ScalaJS.data.scala_collection_immutable_IntMapIterator, {
  scala_collection_immutable_IntMapKeyIterator: 1,
  scala_collection_immutable_IntMapIterator: 1,
  scala_collection_AbstractIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_IntMapKeyIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_IntMapKeyIterator;
//@ sourceMappingURL=IntMapKeyIterator.js.map
