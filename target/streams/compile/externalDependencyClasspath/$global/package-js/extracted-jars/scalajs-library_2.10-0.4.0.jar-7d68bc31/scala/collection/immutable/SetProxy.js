ScalaJS.is.scala_collection_immutable_SetProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_SetProxy)))
});
ScalaJS.as.scala_collection_immutable_SetProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_SetProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.SetProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_SetProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_SetProxy)))
});
ScalaJS.asArrayOf.scala_collection_immutable_SetProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_SetProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.SetProxy;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_SetProxy = new ScalaJS.ClassTypeData({
  scala_collection_immutable_SetProxy: 0
}, true, "scala.collection.immutable.SetProxy", undefined, {
  scala_collection_immutable_SetProxy: 1,
  scala_collection_SetProxyLike: 1,
  scala_collection_IterableProxyLike: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
//@ sourceMappingURL=SetProxy.js.map
