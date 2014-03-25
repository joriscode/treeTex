ScalaJS.is.scala_collection_GenIterable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenIterable)))
});
ScalaJS.as.scala_collection_GenIterable = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenIterable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenIterable")
  }
});
ScalaJS.isArrayOf.scala_collection_GenIterable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenIterable)))
});
ScalaJS.asArrayOf.scala_collection_GenIterable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenIterable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenIterable;", depth)
  }
});
ScalaJS.data.scala_collection_GenIterable = new ScalaJS.ClassTypeData({
  scala_collection_GenIterable: 0
}, true, "scala.collection.GenIterable", undefined, {
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
//@ sourceMappingURL=GenIterable.js.map
