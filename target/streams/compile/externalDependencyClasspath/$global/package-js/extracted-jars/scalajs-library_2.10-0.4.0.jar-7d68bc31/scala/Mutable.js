ScalaJS.is.scala_Mutable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Mutable)))
});
ScalaJS.as.scala_Mutable = (function(obj) {
  if ((ScalaJS.is.scala_Mutable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Mutable")
  }
});
ScalaJS.isArrayOf.scala_Mutable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Mutable)))
});
ScalaJS.asArrayOf.scala_Mutable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Mutable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Mutable;", depth)
  }
});
ScalaJS.data.scala_Mutable = new ScalaJS.ClassTypeData({
  scala_Mutable: 0
}, true, "scala.Mutable", undefined, {
  scala_Mutable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Mutable.js.map
