ScalaJS.is.scala_collection_GenMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenMap)))
});
ScalaJS.as.scala_collection_GenMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenMap")
  }
});
ScalaJS.isArrayOf.scala_collection_GenMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenMap)))
});
ScalaJS.asArrayOf.scala_collection_GenMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenMap;", depth)
  }
});
ScalaJS.data.scala_collection_GenMap = new ScalaJS.ClassTypeData({
  scala_collection_GenMap: 0
}, true, "scala.collection.GenMap", undefined, {
  scala_collection_GenMap: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenMapLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenMap.js.map
