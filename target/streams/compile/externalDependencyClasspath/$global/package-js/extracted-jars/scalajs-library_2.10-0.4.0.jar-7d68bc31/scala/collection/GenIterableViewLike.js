ScalaJS.is.scala_collection_GenIterableViewLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenIterableViewLike)))
});
ScalaJS.as.scala_collection_GenIterableViewLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenIterableViewLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenIterableViewLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenIterableViewLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenIterableViewLike)))
});
ScalaJS.asArrayOf.scala_collection_GenIterableViewLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenIterableViewLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenIterableViewLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenIterableViewLike = new ScalaJS.ClassTypeData({
  scala_collection_GenIterableViewLike: 0
}, true, "scala.collection.GenIterableViewLike", undefined, {
  scala_collection_GenIterableViewLike: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenIterableViewLike.js.map
