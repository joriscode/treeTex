ScalaJS.is.scala_collection_MapProxyLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_MapProxyLike)))
});
ScalaJS.as.scala_collection_MapProxyLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_MapProxyLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.MapProxyLike")
  }
});
ScalaJS.isArrayOf.scala_collection_MapProxyLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_MapProxyLike)))
});
ScalaJS.asArrayOf.scala_collection_MapProxyLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_MapProxyLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.MapProxyLike;", depth)
  }
});
ScalaJS.data.scala_collection_MapProxyLike = new ScalaJS.ClassTypeData({
  scala_collection_MapProxyLike: 0
}, true, "scala.collection.MapProxyLike", undefined, {
  scala_collection_MapProxyLike: 1,
  scala_collection_IterableProxyLike: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenMapLike: 1,
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
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=MapProxyLike.js.map
