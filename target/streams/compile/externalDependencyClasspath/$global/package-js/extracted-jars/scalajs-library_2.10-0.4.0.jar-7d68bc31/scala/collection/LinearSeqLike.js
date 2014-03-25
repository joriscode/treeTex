ScalaJS.is.scala_collection_LinearSeqLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_LinearSeqLike)))
});
ScalaJS.as.scala_collection_LinearSeqLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_LinearSeqLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.LinearSeqLike")
  }
});
ScalaJS.isArrayOf.scala_collection_LinearSeqLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_LinearSeqLike)))
});
ScalaJS.asArrayOf.scala_collection_LinearSeqLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_LinearSeqLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.LinearSeqLike;", depth)
  }
});
ScalaJS.data.scala_collection_LinearSeqLike = new ScalaJS.ClassTypeData({
  scala_collection_LinearSeqLike: 0
}, true, "scala.collection.LinearSeqLike", undefined, {
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
//@ sourceMappingURL=LinearSeqLike.js.map
