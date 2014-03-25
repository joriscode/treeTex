ScalaJS.is.scala_collection_TraversableProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableProxy)))
});
ScalaJS.as.scala_collection_TraversableProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableProxy)))
});
ScalaJS.asArrayOf.scala_collection_TraversableProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableProxy;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableProxy = new ScalaJS.ClassTypeData({
  scala_collection_TraversableProxy: 0
}, true, "scala.collection.TraversableProxy", undefined, {
  scala_collection_TraversableProxy: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
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
//@ sourceMappingURL=TraversableProxy.js.map
