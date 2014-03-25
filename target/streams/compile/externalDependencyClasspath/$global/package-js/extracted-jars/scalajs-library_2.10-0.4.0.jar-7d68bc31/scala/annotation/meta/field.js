/** @constructor */
ScalaJS.c.scala_annotation_meta_field = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_field.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_field.prototype.constructor = ScalaJS.c.scala_annotation_meta_field;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_field = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_field.prototype = ScalaJS.c.scala_annotation_meta_field.prototype;
ScalaJS.is.scala_annotation_meta_field = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_field)))
});
ScalaJS.as.scala_annotation_meta_field = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_field(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.field")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_field = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_field)))
});
ScalaJS.asArrayOf.scala_annotation_meta_field = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_field(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.field;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_field = new ScalaJS.ClassTypeData({
  scala_annotation_meta_field: 0
}, false, "scala.annotation.meta.field", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_field: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_field.prototype.$classData = ScalaJS.data.scala_annotation_meta_field;
//@ sourceMappingURL=field.js.map
