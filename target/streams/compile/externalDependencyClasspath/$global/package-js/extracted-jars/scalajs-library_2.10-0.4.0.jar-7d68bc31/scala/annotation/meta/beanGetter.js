/** @constructor */
ScalaJS.c.scala_annotation_meta_beanGetter = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_beanGetter.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_beanGetter.prototype.constructor = ScalaJS.c.scala_annotation_meta_beanGetter;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_beanGetter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_beanGetter.prototype = ScalaJS.c.scala_annotation_meta_beanGetter.prototype;
ScalaJS.is.scala_annotation_meta_beanGetter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_beanGetter)))
});
ScalaJS.as.scala_annotation_meta_beanGetter = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_beanGetter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.beanGetter")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_beanGetter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_beanGetter)))
});
ScalaJS.asArrayOf.scala_annotation_meta_beanGetter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_beanGetter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.beanGetter;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_beanGetter = new ScalaJS.ClassTypeData({
  scala_annotation_meta_beanGetter: 0
}, false, "scala.annotation.meta.beanGetter", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_beanGetter: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_beanGetter.prototype.$classData = ScalaJS.data.scala_annotation_meta_beanGetter;
//@ sourceMappingURL=beanGetter.js.map
