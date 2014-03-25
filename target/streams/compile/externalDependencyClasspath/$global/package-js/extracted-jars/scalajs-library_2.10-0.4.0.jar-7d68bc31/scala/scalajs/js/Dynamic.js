ScalaJS.is.scala_scalajs_js_Dynamic = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Dynamic)))
});
ScalaJS.as.scala_scalajs_js_Dynamic = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Dynamic(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Dynamic")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Dynamic = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Dynamic)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Dynamic = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Dynamic(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Dynamic;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Dynamic = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Dynamic: 0
}, true, "scala.scalajs.js.Dynamic", undefined, {
  scala_scalajs_js_Dynamic: 1,
  scala_Dynamic: 1,
  scala_scalajs_js_Any: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Dynamic.js.map
