ScalaJS.is.scala_collection_immutable_StringLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StringLike)))
});
ScalaJS.as.scala_collection_immutable_StringLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StringLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StringLike")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StringLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StringLike)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StringLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StringLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StringLike;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StringLike = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StringLike: 0
}, true, "scala.collection.immutable.StringLike", undefined, {
  scala_collection_immutable_StringLike: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqLike: 1,
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
//@ sourceMappingURL=StringLike.js.map
