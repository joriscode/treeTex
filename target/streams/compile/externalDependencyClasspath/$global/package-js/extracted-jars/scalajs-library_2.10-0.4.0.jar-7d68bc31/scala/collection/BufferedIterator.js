ScalaJS.is.scala_collection_BufferedIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_BufferedIterator)))
});
ScalaJS.as.scala_collection_BufferedIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_BufferedIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.BufferedIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_BufferedIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_BufferedIterator)))
});
ScalaJS.asArrayOf.scala_collection_BufferedIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_BufferedIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.BufferedIterator;", depth)
  }
});
ScalaJS.data.scala_collection_BufferedIterator = new ScalaJS.ClassTypeData({
  scala_collection_BufferedIterator: 0
}, true, "scala.collection.BufferedIterator", undefined, {
  scala_collection_BufferedIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=BufferedIterator.js.map
