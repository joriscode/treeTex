ScalaJS.is.scala_collection_GenSeqViewLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSeqViewLike)))
});
ScalaJS.as.scala_collection_GenSeqViewLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSeqViewLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSeqViewLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSeqViewLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSeqViewLike)))
});
ScalaJS.asArrayOf.scala_collection_GenSeqViewLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSeqViewLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSeqViewLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenSeqViewLike = new ScalaJS.ClassTypeData({
  scala_collection_GenSeqViewLike: 0
}, true, "scala.collection.GenSeqViewLike", undefined, {
  scala_collection_GenSeqViewLike: 1,
  scala_collection_GenIterableView: 1,
  scala_collection_GenIterableViewLike: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenSeqLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenSeqViewLike.js.map
