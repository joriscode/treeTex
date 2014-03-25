ScalaJS.is.scala_collection_mutable_ArrayLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayLike)))
});
ScalaJS.as.scala_collection_mutable_ArrayLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayLike")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayLike)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayLike;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayLike = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayLike: 0
}, true, "scala.collection.mutable.ArrayLike", undefined, {
  scala_collection_mutable_ArrayLike: 1,
  scala_collection_mutable_IndexedSeqOptimized: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
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
//@ sourceMappingURL=ArrayLike.js.map
