ScalaJS.is.scala_scalajs_js_PropertyDescriptor = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_PropertyDescriptor)))
});
ScalaJS.as.scala_scalajs_js_PropertyDescriptor = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_PropertyDescriptor(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.PropertyDescriptor")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_PropertyDescriptor = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_PropertyDescriptor)))
});
ScalaJS.asArrayOf.scala_scalajs_js_PropertyDescriptor = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_PropertyDescriptor(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.PropertyDescriptor;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_PropertyDescriptor = new ScalaJS.ClassTypeData({
  scala_scalajs_js_PropertyDescriptor: 0
}, true, "scala.scalajs.js.PropertyDescriptor", undefined, {
  scala_scalajs_js_PropertyDescriptor: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=PropertyDescriptor.js.map
