ScalaJS.is.scala_scalajs_js_Dictionary = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Dictionary)))
});
ScalaJS.as.scala_scalajs_js_Dictionary = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Dictionary(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Dictionary")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Dictionary = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Dictionary)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Dictionary = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Dictionary(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Dictionary;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Dictionary = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Dictionary: 0
}, true, "scala.scalajs.js.Dictionary", undefined, {
  scala_scalajs_js_Dictionary: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Dictionary.js.map
