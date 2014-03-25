ScalaJS.is.scala_scalajs_js_Boolean = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Boolean)))
});
ScalaJS.as.scala_scalajs_js_Boolean = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Boolean(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Boolean")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Boolean = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Boolean)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Boolean = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Boolean(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Boolean;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Boolean = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Boolean: 0
}, true, "scala.scalajs.js.Boolean", undefined, {
  scala_scalajs_js_Boolean: 1,
  scala_scalajs_js_Any: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Boolean.js.map
