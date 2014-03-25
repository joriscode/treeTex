ScalaJS.is.scala_collection_generic_GenericSetTemplate = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericSetTemplate)))
});
ScalaJS.as.scala_collection_generic_GenericSetTemplate = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericSetTemplate(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericSetTemplate")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericSetTemplate = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericSetTemplate)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericSetTemplate = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericSetTemplate(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericSetTemplate;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericSetTemplate = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericSetTemplate: 0
}, true, "scala.collection.generic.GenericSetTemplate", undefined, {
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenericSetTemplate.js.map
