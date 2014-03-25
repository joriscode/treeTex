/** @constructor */
ScalaJS.c.scala_scalajs_js_annotation_JSName = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_scalajs_js_annotation_JSName.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_scalajs_js_annotation_JSName.prototype.constructor = ScalaJS.c.scala_scalajs_js_annotation_JSName;
ScalaJS.c.scala_scalajs_js_annotation_JSName.prototype.init___T = (function(name) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_annotation_JSName = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_annotation_JSName.prototype = ScalaJS.c.scala_scalajs_js_annotation_JSName.prototype;
ScalaJS.is.scala_scalajs_js_annotation_JSName = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_annotation_JSName)))
});
ScalaJS.as.scala_scalajs_js_annotation_JSName = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_annotation_JSName(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.annotation.JSName")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_annotation_JSName = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_annotation_JSName)))
});
ScalaJS.asArrayOf.scala_scalajs_js_annotation_JSName = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_annotation_JSName(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.annotation.JSName;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_annotation_JSName = new ScalaJS.ClassTypeData({
  scala_scalajs_js_annotation_JSName: 0
}, false, "scala.scalajs.js.annotation.JSName", ScalaJS.data.scala_annotation_Annotation, {
  scala_scalajs_js_annotation_JSName: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_annotation_JSName.prototype.$classData = ScalaJS.data.scala_scalajs_js_annotation_JSName;
//@ sourceMappingURL=JSName.js.map
