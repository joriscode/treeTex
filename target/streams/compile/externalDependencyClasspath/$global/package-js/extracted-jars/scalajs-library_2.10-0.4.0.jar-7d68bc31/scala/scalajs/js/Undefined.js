ScalaJS.is.scala_scalajs_js_Undefined = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Undefined)))
});
ScalaJS.as.scala_scalajs_js_Undefined = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Undefined(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Undefined")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Undefined = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Undefined)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Undefined = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Undefined(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Undefined;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Undefined = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Undefined: 0
}, true, "scala.scalajs.js.Undefined", undefined, {
  scala_scalajs_js_Undefined: 1,
  scala_scalajs_js_Any: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Undefined.js.map
