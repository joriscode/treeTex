/** @constructor */
ScalaJS.c.scala_annotation_meta_param = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_param.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_param.prototype.constructor = ScalaJS.c.scala_annotation_meta_param;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_param = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_param.prototype = ScalaJS.c.scala_annotation_meta_param.prototype;
ScalaJS.is.scala_annotation_meta_param = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_param)))
});
ScalaJS.as.scala_annotation_meta_param = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_param(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.param")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_param = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_param)))
});
ScalaJS.asArrayOf.scala_annotation_meta_param = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_param(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.param;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_param = new ScalaJS.ClassTypeData({
  scala_annotation_meta_param: 0
}, false, "scala.annotation.meta.param", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_param: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_param.prototype.$classData = ScalaJS.data.scala_annotation_meta_param;
//@ sourceMappingURL=param.js.map
