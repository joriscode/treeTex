ScalaJS.is.scala_Immutable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Immutable)))
});
ScalaJS.as.scala_Immutable = (function(obj) {
  if ((ScalaJS.is.scala_Immutable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Immutable")
  }
});
ScalaJS.isArrayOf.scala_Immutable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Immutable)))
});
ScalaJS.asArrayOf.scala_Immutable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Immutable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Immutable;", depth)
  }
});
ScalaJS.data.scala_Immutable = new ScalaJS.ClassTypeData({
  scala_Immutable: 0
}, true, "scala.Immutable", undefined, {
  scala_Immutable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Immutable.js.map
