/** @constructor */
ScalaJS.c.scala_annotation_meta_languageFeature = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_languageFeature.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_languageFeature.prototype.constructor = ScalaJS.c.scala_annotation_meta_languageFeature;
ScalaJS.c.scala_annotation_meta_languageFeature.prototype.init___T__Z = (function(feature, enableRequired) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_languageFeature = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_languageFeature.prototype = ScalaJS.c.scala_annotation_meta_languageFeature.prototype;
ScalaJS.is.scala_annotation_meta_languageFeature = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_languageFeature)))
});
ScalaJS.as.scala_annotation_meta_languageFeature = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_languageFeature(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.languageFeature")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_languageFeature = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_languageFeature)))
});
ScalaJS.asArrayOf.scala_annotation_meta_languageFeature = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_languageFeature(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.languageFeature;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_languageFeature = new ScalaJS.ClassTypeData({
  scala_annotation_meta_languageFeature: 0
}, false, "scala.annotation.meta.languageFeature", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_languageFeature: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_languageFeature.prototype.$classData = ScalaJS.data.scala_annotation_meta_languageFeature;
//@ sourceMappingURL=languageFeature.js.map
