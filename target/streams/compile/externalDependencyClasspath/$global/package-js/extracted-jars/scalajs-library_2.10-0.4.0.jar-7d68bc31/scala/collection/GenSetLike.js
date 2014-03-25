ScalaJS.is.scala_collection_GenSetLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSetLike)))
});
ScalaJS.as.scala_collection_GenSetLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSetLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSetLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSetLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSetLike)))
});
ScalaJS.asArrayOf.scala_collection_GenSetLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSetLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSetLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenSetLike = new ScalaJS.ClassTypeData({
  scala_collection_GenSetLike: 0
}, true, "scala.collection.GenSetLike", undefined, {
  scala_collection_GenSetLike: 1,
  scala_Equals: 1,
  scala_Function1: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenSetLike.js.map
