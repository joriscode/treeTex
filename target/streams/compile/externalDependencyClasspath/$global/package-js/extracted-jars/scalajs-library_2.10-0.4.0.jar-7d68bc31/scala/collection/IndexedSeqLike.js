ScalaJS.is.scala_collection_IndexedSeqLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IndexedSeqLike)))
});
ScalaJS.as.scala_collection_IndexedSeqLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_IndexedSeqLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IndexedSeqLike")
  }
});
ScalaJS.isArrayOf.scala_collection_IndexedSeqLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IndexedSeqLike)))
});
ScalaJS.asArrayOf.scala_collection_IndexedSeqLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IndexedSeqLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IndexedSeqLike;", depth)
  }
});
ScalaJS.data.scala_collection_IndexedSeqLike = new ScalaJS.ClassTypeData({
  scala_collection_IndexedSeqLike: 0
}, true, "scala.collection.IndexedSeqLike", undefined, {
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
//@ sourceMappingURL=IndexedSeqLike.js.map
