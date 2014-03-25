ScalaJS.is.scala_collection_GenTraversableLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversableLike)))
});
ScalaJS.as.scala_collection_GenTraversableLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversableLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversableLike")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversableLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversableLike)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversableLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversableLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversableLike;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversableLike = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversableLike: 0
}, true, "scala.collection.GenTraversableLike", undefined, {
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenTraversableLike.js.map
