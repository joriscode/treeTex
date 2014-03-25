ScalaJS.is.scala_collection_generic_GenericParCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericParCompanion)))
});
ScalaJS.as.scala_collection_generic_GenericParCompanion = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericParCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericParCompanion")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericParCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericParCompanion)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericParCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericParCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericParCompanion;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericParCompanion = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericParCompanion: 0
}, true, "scala.collection.generic.GenericParCompanion", undefined, {
  scala_collection_generic_GenericParCompanion: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenericParCompanion.js.map
