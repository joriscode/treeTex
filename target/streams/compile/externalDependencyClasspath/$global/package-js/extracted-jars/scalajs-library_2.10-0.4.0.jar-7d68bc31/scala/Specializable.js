ScalaJS.is.scala_Specializable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Specializable)))
});
ScalaJS.as.scala_Specializable = (function(obj) {
  if ((ScalaJS.is.scala_Specializable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Specializable")
  }
});
ScalaJS.isArrayOf.scala_Specializable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Specializable)))
});
ScalaJS.asArrayOf.scala_Specializable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Specializable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Specializable;", depth)
  }
});
ScalaJS.data.scala_Specializable = new ScalaJS.ClassTypeData({
  scala_Specializable: 0
}, true, "scala.Specializable", undefined, {
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Specializable.js.map
