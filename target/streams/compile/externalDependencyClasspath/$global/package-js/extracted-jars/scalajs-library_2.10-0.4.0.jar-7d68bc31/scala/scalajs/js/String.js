ScalaJS.is.scala_scalajs_js_String = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_String)))
});
ScalaJS.as.scala_scalajs_js_String = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_String(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.String")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_String = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_String)))
});
ScalaJS.asArrayOf.scala_scalajs_js_String = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_String(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.String;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_String = new ScalaJS.ClassTypeData({
  scala_scalajs_js_String: 0
}, true, "scala.scalajs.js.String", undefined, {
  scala_scalajs_js_String: 1,
  scala_scalajs_js_Any: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=String.js.map
