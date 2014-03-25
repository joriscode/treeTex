ScalaJS.is.scala_collection_immutable_Traversable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Traversable)))
});
ScalaJS.as.scala_collection_immutable_Traversable = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Traversable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Traversable")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Traversable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Traversable)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Traversable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Traversable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Traversable;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Traversable = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Traversable: 0
}, true, "scala.collection.immutable.Traversable", undefined, {
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Traversable.js.map
