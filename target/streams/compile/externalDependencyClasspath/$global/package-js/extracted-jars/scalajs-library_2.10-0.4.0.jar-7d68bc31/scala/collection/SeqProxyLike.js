ScalaJS.is.scala_collection_SeqProxyLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SeqProxyLike)))
});
ScalaJS.as.scala_collection_SeqProxyLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_SeqProxyLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SeqProxyLike")
  }
});
ScalaJS.isArrayOf.scala_collection_SeqProxyLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SeqProxyLike)))
});
ScalaJS.asArrayOf.scala_collection_SeqProxyLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SeqProxyLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SeqProxyLike;", depth)
  }
});
ScalaJS.data.scala_collection_SeqProxyLike = new ScalaJS.ClassTypeData({
  scala_collection_SeqProxyLike: 0
}, true, "scala.collection.SeqProxyLike", undefined, {
  scala_collection_SeqProxyLike: 1,
  scala_collection_IterableProxyLike: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
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
//@ sourceMappingURL=SeqProxyLike.js.map
