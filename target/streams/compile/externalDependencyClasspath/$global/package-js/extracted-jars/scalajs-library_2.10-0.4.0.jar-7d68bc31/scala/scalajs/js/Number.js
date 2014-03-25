ScalaJS.is.scala_scalajs_js_Number = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Number)))
});
ScalaJS.as.scala_scalajs_js_Number = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Number(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Number")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Number = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Number)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Number = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Number(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Number;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Number = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Number: 0
}, true, "scala.scalajs.js.Number", undefined, {
  scala_scalajs_js_Number: 1,
  scala_scalajs_js_Any: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Number.js.map
