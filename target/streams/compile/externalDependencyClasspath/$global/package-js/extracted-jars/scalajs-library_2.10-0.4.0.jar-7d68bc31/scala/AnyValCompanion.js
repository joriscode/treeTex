ScalaJS.is.scala_AnyValCompanion = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_AnyValCompanion)))
});
ScalaJS.as.scala_AnyValCompanion = (function(obj) {
  if ((ScalaJS.is.scala_AnyValCompanion(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.AnyValCompanion")
  }
});
ScalaJS.isArrayOf.scala_AnyValCompanion = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_AnyValCompanion)))
});
ScalaJS.asArrayOf.scala_AnyValCompanion = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_AnyValCompanion(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.AnyValCompanion;", depth)
  }
});
ScalaJS.data.scala_AnyValCompanion = new ScalaJS.ClassTypeData({
  scala_AnyValCompanion: 0
}, true, "scala.AnyValCompanion", undefined, {
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=AnyValCompanion.js.map
