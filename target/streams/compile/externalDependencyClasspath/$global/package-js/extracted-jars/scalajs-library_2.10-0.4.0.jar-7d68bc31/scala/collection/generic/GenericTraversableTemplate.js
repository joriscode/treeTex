ScalaJS.is.scala_collection_generic_GenericTraversableTemplate = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericTraversableTemplate)))
});
ScalaJS.as.scala_collection_generic_GenericTraversableTemplate = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericTraversableTemplate(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericTraversableTemplate")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericTraversableTemplate = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericTraversableTemplate)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericTraversableTemplate = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericTraversableTemplate(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericTraversableTemplate;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericTraversableTemplate = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericTraversableTemplate: 0
}, true, "scala.collection.generic.GenericTraversableTemplate", undefined, {
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenericTraversableTemplate.js.map
