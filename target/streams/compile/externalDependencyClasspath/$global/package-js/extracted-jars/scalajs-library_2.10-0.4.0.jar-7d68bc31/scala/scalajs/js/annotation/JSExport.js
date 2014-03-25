/** @constructor */
ScalaJS.c.scala_scalajs_js_annotation_JSExport = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.constructor = ScalaJS.c.scala_scalajs_js_annotation_JSExport;
ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.init___Lscala_Option = (function(name) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.init___ = (function() {
  ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.init___Lscala_Option.call(this, ScalaJS.modules.scala_None());
  return this
});
ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.init___T = (function(name) {
  ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.init___Lscala_Option.call(this, new ScalaJS.c.scala_Some().init___O(name));
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_annotation_JSExport = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_annotation_JSExport.prototype = ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype;
ScalaJS.is.scala_scalajs_js_annotation_JSExport = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_annotation_JSExport)))
});
ScalaJS.as.scala_scalajs_js_annotation_JSExport = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_annotation_JSExport(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.annotation.JSExport")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_annotation_JSExport = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_annotation_JSExport)))
});
ScalaJS.asArrayOf.scala_scalajs_js_annotation_JSExport = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_annotation_JSExport(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.annotation.JSExport;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_annotation_JSExport = new ScalaJS.ClassTypeData({
  scala_scalajs_js_annotation_JSExport: 0
}, false, "scala.scalajs.js.annotation.JSExport", ScalaJS.data.scala_annotation_Annotation, {
  scala_scalajs_js_annotation_JSExport: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_annotation_JSExport.prototype.$classData = ScalaJS.data.scala_scalajs_js_annotation_JSExport;
//@ sourceMappingURL=JSExport.js.map
