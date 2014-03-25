ScalaJS.is.scala_collection_GenMapLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenMapLike)))
});
ScalaJS.as.scala_collection_GenMapLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenMapLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenMapLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenMapLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenMapLike)))
});
ScalaJS.asArrayOf.scala_collection_GenMapLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenMapLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenMapLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenMapLike = new ScalaJS.ClassTypeData({
  scala_collection_GenMapLike: 0
}, true, "scala.collection.GenMapLike", undefined, {
  scala_collection_GenMapLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenMapLike.js.map
