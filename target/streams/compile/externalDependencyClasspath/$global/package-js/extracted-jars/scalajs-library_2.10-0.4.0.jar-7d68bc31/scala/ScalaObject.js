ScalaJS.is.scala_ScalaObject = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_ScalaObject)))
});
ScalaJS.as.scala_ScalaObject = (function(obj) {
  if ((ScalaJS.is.scala_ScalaObject(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.ScalaObject")
  }
});
ScalaJS.isArrayOf.scala_ScalaObject = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_ScalaObject)))
});
ScalaJS.asArrayOf.scala_ScalaObject = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_ScalaObject(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.ScalaObject;", depth)
  }
});
ScalaJS.data.scala_ScalaObject = new ScalaJS.ClassTypeData({
  scala_ScalaObject: 0
}, true, "scala.ScalaObject", undefined, {
  scala_ScalaObject: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ScalaObject.js.map
