ScalaJS.is.scala_collection_GenIterableLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenIterableLike)))
});
ScalaJS.as.scala_collection_GenIterableLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenIterableLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenIterableLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenIterableLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenIterableLike)))
});
ScalaJS.asArrayOf.scala_collection_GenIterableLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenIterableLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenIterableLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenIterableLike = new ScalaJS.ClassTypeData({
  scala_collection_GenIterableLike: 0
}, true, "scala.collection.GenIterableLike", undefined, {
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenIterableLike.js.map
