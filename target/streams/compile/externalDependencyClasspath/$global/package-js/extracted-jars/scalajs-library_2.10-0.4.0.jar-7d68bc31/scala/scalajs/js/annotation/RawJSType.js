/** @constructor */
ScalaJS.c.scala_scalajs_js_annotation_RawJSType = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_scalajs_js_annotation_RawJSType.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_scalajs_js_annotation_RawJSType.prototype.constructor = ScalaJS.c.scala_scalajs_js_annotation_RawJSType;
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_annotation_RawJSType = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_annotation_RawJSType.prototype = ScalaJS.c.scala_scalajs_js_annotation_RawJSType.prototype;
ScalaJS.is.scala_scalajs_js_annotation_RawJSType = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_annotation_RawJSType)))
});
ScalaJS.as.scala_scalajs_js_annotation_RawJSType = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_annotation_RawJSType(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.annotation.RawJSType")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_annotation_RawJSType = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_annotation_RawJSType)))
});
ScalaJS.asArrayOf.scala_scalajs_js_annotation_RawJSType = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_annotation_RawJSType(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.annotation.RawJSType;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_annotation_RawJSType = new ScalaJS.ClassTypeData({
  scala_scalajs_js_annotation_RawJSType: 0
}, false, "scala.scalajs.js.annotation.RawJSType", ScalaJS.data.scala_annotation_Annotation, {
  scala_scalajs_js_annotation_RawJSType: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_annotation_RawJSType.prototype.$classData = ScalaJS.data.scala_scalajs_js_annotation_RawJSType;
//@ sourceMappingURL=RawJSType.js.map
