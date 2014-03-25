ScalaJS.is.scala_collection_GenTraversable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversable)))
});
ScalaJS.as.scala_collection_GenTraversable = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversable")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversable)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversable;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversable = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversable: 0
}, true, "scala.collection.GenTraversable", undefined, {
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenTraversable.js.map
