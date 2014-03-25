/** @constructor */
ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator = (function() {
  ScalaJS.c.scala_collection_immutable_RedBlackTree$TreeIterator.call(this)
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator.prototype = new ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$TreeIterator();
ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator.prototype.constructor = ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator;
ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator.prototype.nextResult__Lscala_collection_immutable_RedBlackTree$Tree__O = (function(tree) {
  return tree.value__O()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$ValuesIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_RedBlackTree$ValuesIterator.prototype = ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator.prototype;
ScalaJS.is.scala_collection_immutable_RedBlackTree$ValuesIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_RedBlackTree$ValuesIterator)))
});
ScalaJS.as.scala_collection_immutable_RedBlackTree$ValuesIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_RedBlackTree$ValuesIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.RedBlackTree$ValuesIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$ValuesIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_RedBlackTree$ValuesIterator)))
});
ScalaJS.asArrayOf.scala_collection_immutable_RedBlackTree$ValuesIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_RedBlackTree$ValuesIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.RedBlackTree$ValuesIterator;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_RedBlackTree$ValuesIterator = new ScalaJS.ClassTypeData({
  scala_collection_immutable_RedBlackTree$ValuesIterator: 0
}, false, "scala.collection.immutable.RedBlackTree$ValuesIterator", ScalaJS.data.scala_collection_immutable_RedBlackTree$TreeIterator, {
  scala_collection_immutable_RedBlackTree$ValuesIterator: 1,
  scala_collection_immutable_RedBlackTree$TreeIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_RedBlackTree$ValuesIterator.prototype.$classData = ScalaJS.data.scala_collection_immutable_RedBlackTree$ValuesIterator;
//@ sourceMappingURL=RedBlackTree$ValuesIterator.js.map
