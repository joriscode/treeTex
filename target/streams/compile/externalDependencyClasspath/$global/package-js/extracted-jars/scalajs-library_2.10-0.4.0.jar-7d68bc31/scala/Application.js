ScalaJS.is.scala_Application = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Application)))
});
ScalaJS.as.scala_Application = (function(obj) {
  if ((ScalaJS.is.scala_Application(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Application")
  }
});
ScalaJS.isArrayOf.scala_Application = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Application)))
});
ScalaJS.asArrayOf.scala_Application = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Application(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Application;", depth)
  }
});
ScalaJS.data.scala_Application = new ScalaJS.ClassTypeData({
  scala_Application: 0
}, true, "scala.Application", undefined, {
  scala_Application: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Application.js.map
