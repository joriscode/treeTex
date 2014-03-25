ScalaJS.is.scala_collection_generic_TraversableFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_TraversableFactory)))
});
ScalaJS.as.scala_collection_generic_TraversableFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_TraversableFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.TraversableFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_TraversableFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_TraversableFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_TraversableFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_TraversableFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.TraversableFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_TraversableFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_TraversableFactory: 0
}, true, "scala.collection.generic.TraversableFactory", undefined, {
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=TraversableFactory.js.map
