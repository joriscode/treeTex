ScalaJS.is.scala_collection_mutable_BufferProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_BufferProxy)))
});
ScalaJS.as.scala_collection_mutable_BufferProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_BufferProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.BufferProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_BufferProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_BufferProxy)))
});
ScalaJS.asArrayOf.scala_collection_mutable_BufferProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_BufferProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.BufferProxy;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_BufferProxy = new ScalaJS.ClassTypeData({
  scala_collection_mutable_BufferProxy: 0
}, true, "scala.collection.mutable.BufferProxy", undefined, {
  scala_collection_mutable_BufferProxy: 1,
  scala_Proxy: 1,
  scala_collection_mutable_Buffer: 1,
  scala_collection_mutable_BufferLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
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
//@ sourceMappingURL=BufferProxy.js.map