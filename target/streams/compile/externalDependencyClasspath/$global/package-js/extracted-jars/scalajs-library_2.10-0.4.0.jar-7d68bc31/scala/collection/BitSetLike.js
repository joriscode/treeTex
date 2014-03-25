ScalaJS.is.scala_collection_BitSetLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_BitSetLike)))
});
ScalaJS.as.scala_collection_BitSetLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_BitSetLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.BitSetLike")
  }
});
ScalaJS.isArrayOf.scala_collection_BitSetLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_BitSetLike)))
});
ScalaJS.asArrayOf.scala_collection_BitSetLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_BitSetLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.BitSetLike;", depth)
  }
});
ScalaJS.data.scala_collection_BitSetLike = new ScalaJS.ClassTypeData({
  scala_collection_BitSetLike: 0
}, true, "scala.collection.BitSetLike", undefined, {
  scala_collection_BitSetLike: 1,
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
//@ sourceMappingURL=BitSetLike.js.map
