ScalaJS.is.scala_collection_immutable_MapProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_MapProxy)))
});
ScalaJS.as.scala_collection_immutable_MapProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_MapProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.MapProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_MapProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_MapProxy)))
});
ScalaJS.asArrayOf.scala_collection_immutable_MapProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_MapProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.MapProxy;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_MapProxy = new ScalaJS.ClassTypeData({
  scala_collection_immutable_MapProxy: 0
}, true, "scala.collection.immutable.MapProxy", undefined, {
  scala_collection_immutable_MapProxy: 1,
  scala_collection_MapProxyLike: 1,
  scala_collection_IterableProxyLike: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
//@ sourceMappingURL=MapProxy.js.map
