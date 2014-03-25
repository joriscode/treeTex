ScalaJS.is.scala_collection_generic_GenericSeqCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenericSeqCompanion)))
});
ScalaJS.as.scala_collection_generic_GenericSeqCompanion = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenericSeqCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenericSeqCompanion")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenericSeqCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenericSeqCompanion)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenericSeqCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenericSeqCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenericSeqCompanion;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenericSeqCompanion = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenericSeqCompanion: 0
}, true, "scala.collection.generic.GenericSeqCompanion", undefined, {
  scala_collection_generic_GenericSeqCompanion: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenericSeqCompanion.js.map
