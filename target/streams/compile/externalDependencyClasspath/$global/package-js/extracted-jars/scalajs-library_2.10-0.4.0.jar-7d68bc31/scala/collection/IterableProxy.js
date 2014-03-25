ScalaJS.is.scala_collection_IterableProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_IterableProxy)))
});
ScalaJS.as.scala_collection_IterableProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_IterableProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.IterableProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_IterableProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_IterableProxy)))
});
ScalaJS.asArrayOf.scala_collection_IterableProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_IterableProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.IterableProxy;", depth)
  }
});
ScalaJS.data.scala_collection_IterableProxy = new ScalaJS.ClassTypeData({
  scala_collection_IterableProxy: 0
}, true, "scala.collection.IterableProxy", undefined, {
  scala_collection_IterableProxy: 1,
  scala_collection_IterableProxyLike: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=IterableProxy.js.map
