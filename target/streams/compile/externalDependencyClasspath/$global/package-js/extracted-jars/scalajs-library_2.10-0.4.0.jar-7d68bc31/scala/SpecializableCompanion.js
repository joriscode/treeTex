ScalaJS.is.scala_SpecializableCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_SpecializableCompanion)))
});
ScalaJS.as.scala_SpecializableCompanion = (function(obj) {
  if ((ScalaJS.is.scala_SpecializableCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.SpecializableCompanion")
  }
});
ScalaJS.isArrayOf.scala_SpecializableCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_SpecializableCompanion)))
});
ScalaJS.asArrayOf.scala_SpecializableCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_SpecializableCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.SpecializableCompanion;", depth)
  }
});
ScalaJS.data.scala_SpecializableCompanion = new ScalaJS.ClassTypeData({
  scala_SpecializableCompanion: 0
}, true, "scala.SpecializableCompanion", undefined, {
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=SpecializableCompanion.js.map
