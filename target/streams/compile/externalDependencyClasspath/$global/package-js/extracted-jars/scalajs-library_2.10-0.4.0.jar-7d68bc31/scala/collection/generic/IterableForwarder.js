ScalaJS.is.scala_collection_generic_IterableForwarder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IterableForwarder)))
});
ScalaJS.as.scala_collection_generic_IterableForwarder = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IterableForwarder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IterableForwarder")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IterableForwarder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IterableForwarder)))
});
ScalaJS.asArrayOf.scala_collection_generic_IterableForwarder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IterableForwarder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IterableForwarder;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IterableForwarder = new ScalaJS.ClassTypeData({
  scala_collection_generic_IterableForwarder: 0
}, true, "scala.collection.generic.IterableForwarder", undefined, {
  scala_collection_generic_IterableForwarder: 1,
  scala_collection_generic_TraversableForwarder: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
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
//@ sourceMappingURL=IterableForwarder.js.map
