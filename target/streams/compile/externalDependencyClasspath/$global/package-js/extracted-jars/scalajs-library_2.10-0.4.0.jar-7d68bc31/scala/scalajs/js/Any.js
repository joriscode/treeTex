ScalaJS.is.scala_scalajs_js_Any = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Any)))
});
ScalaJS.as.scala_scalajs_js_Any = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Any(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Any")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Any = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Any)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Any = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Any(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Any;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Any = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Any: 0
}, true, "scala.scalajs.js.Any", undefined, {
  scala_scalajs_js_Any: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Any.js.map
