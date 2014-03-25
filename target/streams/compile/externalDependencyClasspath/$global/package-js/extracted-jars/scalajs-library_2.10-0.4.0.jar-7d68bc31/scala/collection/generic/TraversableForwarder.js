ScalaJS.is.scala_collection_generic_TraversableForwarder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_TraversableForwarder)))
});
ScalaJS.as.scala_collection_generic_TraversableForwarder = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_TraversableForwarder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.TraversableForwarder")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_TraversableForwarder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_TraversableForwarder)))
});
ScalaJS.asArrayOf.scala_collection_generic_TraversableForwarder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_TraversableForwarder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.TraversableForwarder;", depth)
  }
});
ScalaJS.data.scala_collection_generic_TraversableForwarder = new ScalaJS.ClassTypeData({
  scala_collection_generic_TraversableForwarder: 0
}, true, "scala.collection.generic.TraversableForwarder", undefined, {
  scala_collection_generic_TraversableForwarder: 1,
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
//@ sourceMappingURL=TraversableForwarder.js.map
