ScalaJS.is.scala_collection_SortedMapLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SortedMapLike)))
});
ScalaJS.as.scala_collection_SortedMapLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_SortedMapLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SortedMapLike")
  }
});
ScalaJS.isArrayOf.scala_collection_SortedMapLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SortedMapLike)))
});
ScalaJS.asArrayOf.scala_collection_SortedMapLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SortedMapLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SortedMapLike;", depth)
  }
});
ScalaJS.data.scala_collection_SortedMapLike = new ScalaJS.ClassTypeData({
  scala_collection_SortedMapLike: 0
}, true, "scala.collection.SortedMapLike", undefined, {
  scala_collection_SortedMapLike: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenMapLike: 1,
  scala_collection_IterableLike: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_Equals: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_generic_Sorted: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=SortedMapLike.js.map
