/** @constructor */
ScalaJS.c.scala_annotation_meta_getter = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_getter.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_getter.prototype.constructor = ScalaJS.c.scala_annotation_meta_getter;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_getter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_getter.prototype = ScalaJS.c.scala_annotation_meta_getter.prototype;
ScalaJS.is.scala_annotation_meta_getter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_getter)))
});
ScalaJS.as.scala_annotation_meta_getter = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_getter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.getter")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_getter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_getter)))
});
ScalaJS.asArrayOf.scala_annotation_meta_getter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_getter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.getter;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_getter = new ScalaJS.ClassTypeData({
  scala_annotation_meta_getter: 0
}, false, "scala.annotation.meta.getter", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_getter: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_getter.prototype.$classData = ScalaJS.data.scala_annotation_meta_getter;
//@ sourceMappingURL=getter.js.map
