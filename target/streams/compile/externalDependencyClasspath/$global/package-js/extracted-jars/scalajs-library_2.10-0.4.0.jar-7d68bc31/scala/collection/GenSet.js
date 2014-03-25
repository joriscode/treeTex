ScalaJS.is.scala_collection_GenSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSet)))
});
ScalaJS.as.scala_collection_GenSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSet")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSet)))
});
ScalaJS.asArrayOf.scala_collection_GenSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSet;", depth)
  }
});
ScalaJS.data.scala_collection_GenSet = new ScalaJS.ClassTypeData({
  scala_collection_GenSet: 0
}, true, "scala.collection.GenSet", undefined, {
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenSetLike: 1,
  scala_Equals: 1,
  scala_Function1: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenSet.js.map
