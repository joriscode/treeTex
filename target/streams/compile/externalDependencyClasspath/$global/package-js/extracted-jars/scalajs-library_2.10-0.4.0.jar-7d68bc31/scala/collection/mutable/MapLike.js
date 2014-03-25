ScalaJS.is.scala_collection_mutable_MapLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_MapLike)))
});
ScalaJS.as.scala_collection_mutable_MapLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_MapLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.MapLike")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_MapLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_MapLike)))
});
ScalaJS.asArrayOf.scala_collection_mutable_MapLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_MapLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.MapLike;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_MapLike = new ScalaJS.ClassTypeData({
  scala_collection_mutable_MapLike: 0
}, true, "scala.collection.mutable.MapLike", undefined, {
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
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
  java_lang_Object: 1
});
//@ sourceMappingURL=MapLike.js.map
