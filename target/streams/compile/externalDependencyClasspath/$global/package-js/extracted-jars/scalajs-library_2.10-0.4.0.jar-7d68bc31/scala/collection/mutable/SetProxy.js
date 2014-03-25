ScalaJS.is.scala_collection_mutable_SetProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_SetProxy)))
});
ScalaJS.as.scala_collection_mutable_SetProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_SetProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.SetProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_SetProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_SetProxy)))
});
ScalaJS.asArrayOf.scala_collection_mutable_SetProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_SetProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.SetProxy;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_SetProxy = new ScalaJS.ClassTypeData({
  scala_collection_mutable_SetProxy: 0
}, true, "scala.collection.mutable.SetProxy", undefined, {
  scala_collection_mutable_SetProxy: 1,
  scala_collection_SetProxyLike: 1,
  scala_collection_IterableProxyLike: 1,
  scala_collection_TraversableProxyLike: 1,
  scala_Proxy: 1,
  scala_collection_mutable_Set: 1,
  scala_collection_mutable_SetLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
