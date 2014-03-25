ScalaJS.is.scala_collection_TraversableLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableLike)))
});
ScalaJS.as.scala_collection_TraversableLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableLike")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableLike)))
});
ScalaJS.asArrayOf.scala_collection_TraversableLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableLike;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableLike = new ScalaJS.ClassTypeData({
  scala_collection_TraversableLike: 0
}, true, "scala.collection.TraversableLike", undefined, {
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=TraversableLike.js.map
