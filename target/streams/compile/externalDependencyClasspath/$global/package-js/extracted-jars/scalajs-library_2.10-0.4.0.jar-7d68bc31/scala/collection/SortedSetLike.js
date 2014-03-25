ScalaJS.is.scala_collection_SortedSetLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_SortedSetLike)))
});
ScalaJS.as.scala_collection_SortedSetLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_SortedSetLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.SortedSetLike")
  }
});
ScalaJS.isArrayOf.scala_collection_SortedSetLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_SortedSetLike)))
});
ScalaJS.asArrayOf.scala_collection_SortedSetLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_SortedSetLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.SortedSetLike;", depth)
  }
});
ScalaJS.data.scala_collection_SortedSetLike = new ScalaJS.ClassTypeData({
  scala_collection_SortedSetLike: 0
}, true, "scala.collection.SortedSetLike", undefined, {
  scala_collection_SortedSetLike: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
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
  scala_collection_generic_Sorted: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=SortedSetLike.js.map
