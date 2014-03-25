/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlackTree$TreeIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$TreeIterator();
ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator;
ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator.prototype.nextResult__Lscala_collection_immutable_RedBlackTree$Tree__O = (function(tree) {
  return tree.key__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$KeysIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$KeysIterator.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$KeysIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$KeysIterator)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$KeysIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$KeysIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$KeysIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$KeysIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$KeysIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$KeysIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$KeysIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$KeysIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$KeysIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$KeysIterator: 0
}, false, "scala.collection.immutable.RedBlackTree$KeysIterator", ScalaJS.data.scala_collection_immutable_RedBlackTree$TreeIterator, {
  scala_collection_immutable_RedBlackTree$KeysIterator: 1,
  scala_collection_immutable_RedBlackTree$TreeIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$KeysIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$KeysIterator;
//@ sourceMappingURL=RedBlackTree$KeysIterator.js.map
