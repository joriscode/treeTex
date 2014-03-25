ScalaJS.is.scala_collection_GenSeqLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSeqLike)))
});
ScalaJS.as.scala_collection_GenSeqLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSeqLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSeqLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSeqLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSeqLike)))
});
ScalaJS.asArrayOf.scala_collection_GenSeqLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSeqLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSeqLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenSeqLike = new ScalaJS.ClassTypeData({
  scala_collection_GenSeqLike: 0
}, true, "scala.collection.GenSeqLike", undefined, {
  scala_collection_GenSeqLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenSeqLike.js.map
