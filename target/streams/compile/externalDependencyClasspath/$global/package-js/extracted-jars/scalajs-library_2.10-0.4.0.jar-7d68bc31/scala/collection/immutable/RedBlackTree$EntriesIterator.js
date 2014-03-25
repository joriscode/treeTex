/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlackTree$TreeIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$TreeIterator();
ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator;
ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype.nextResult__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Tuple2 = (function(tree$2) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(tree$2.key__O(), tree$2.value__O())
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype.nextResult__Lscala_collection_immutable_RedBlackTree$Tree__O = (function(tree) {
  return this.nextResult__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Tuple2(tree)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$EntriesIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$EntriesIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$EntriesIterator)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$EntriesIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$EntriesIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$EntriesIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$EntriesIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$EntriesIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$EntriesIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$EntriesIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$EntriesIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$EntriesIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$EntriesIterator: 0
}, false, "scala.collection.immutable.RedBlackTree$EntriesIterator", ScalaJS.data.scala_collection_immutable_RedBlackTree$TreeIterator, {
  scala_collection_immutable_RedBlackTree$EntriesIterator: 1,
  scala_collection_immutable_RedBlackTree$TreeIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$EntriesIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$EntriesIterator;
//@ sourceMappingURL=RedBlackTree$EntriesIterator.js.map
