ScalaJS.is.scala_collection_Iterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Iterator)))
});
ScalaJS.as.scala_collection_Iterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_Iterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Iterator")
  }
});
ScalaJS.isArrayOf.scala_collection_Iterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Iterator)))
});
ScalaJS.asArrayOf.scala_collection_Iterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Iterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Iterator;", depth)
  }
});
ScalaJS.data.scala_collection_Iterator = new ScalaJS.ClassTypeData({
  scala_collection_Iterator: 0
}, true, "scala.collection.Iterator", undefined, {
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Iterator.js.map
