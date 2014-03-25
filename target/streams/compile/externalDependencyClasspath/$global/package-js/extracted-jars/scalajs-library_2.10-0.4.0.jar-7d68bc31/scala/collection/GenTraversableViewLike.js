ScalaJS.is.scala_collection_GenTraversableViewLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversableViewLike)))
});
ScalaJS.as.scala_collection_GenTraversableViewLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversableViewLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversableViewLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversableViewLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversableViewLike)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversableViewLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversableViewLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversableViewLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversableViewLike = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversableViewLike: 0
}, true, "scala.collection.GenTraversableViewLike", undefined, {
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenTraversableViewLike.js.map
