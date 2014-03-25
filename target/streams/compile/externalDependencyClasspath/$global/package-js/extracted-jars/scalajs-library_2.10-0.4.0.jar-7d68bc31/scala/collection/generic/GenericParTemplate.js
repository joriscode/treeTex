ScalaJS.is.scala_collection_generic_GenericParTemplate = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericParTemplate)))
});
ScalaJS.as.scala_collection_generic_GenericParTemplate = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericParTemplate(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericParTemplate")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericParTemplate = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericParTemplate)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericParTemplate = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericParTemplate(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericParTemplate;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericParTemplate = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericParTemplate: 0
}, true, "scala.collection.generic.GenericParTemplate", undefined, {
  scala_collection_generic_GenericParTemplate: 1,
  scala_collection_generic_HasNewCombiner: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenericParTemplate.js.map
