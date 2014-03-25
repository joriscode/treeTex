ScalaJS.is.scala_collection_LinearSeqOptimized = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_LinearSeqOptimized)))
});
ScalaJS.as.scala_collection_LinearSeqOptimized = (function(obj) {
  if ((ScalaJS.is.scala_collection_LinearSeqOptimized(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.LinearSeqOptimized")
  }
});
ScalaJS.isArrayOf.scala_collection_LinearSeqOptimized = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_LinearSeqOptimized)))
});
ScalaJS.asArrayOf.scala_collection_LinearSeqOptimized = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_LinearSeqOptimized(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.LinearSeqOptimized;", depth)
  }
});
ScalaJS.data.scala_collection_LinearSeqOptimized = new ScalaJS.ClassTypeData({
  scala_collection_LinearSeqOptimized: 0
}, true, "scala.collection.LinearSeqOptimized", undefined, {
  scala_collection_LinearSeqOptimized: 1,
  scala_collection_LinearSeqLike: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeqLike: 1,
  scala_collection_IterableLike: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=LinearSeqOptimized.js.map
