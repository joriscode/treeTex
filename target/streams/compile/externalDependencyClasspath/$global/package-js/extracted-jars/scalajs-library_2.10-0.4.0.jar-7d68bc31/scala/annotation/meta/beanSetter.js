/** @constructor */
ScalaJS.c.scala_annotation_meta_beanSetter = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_beanSetter.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_beanSetter.prototype.constructor = ScalaJS.c.scala_annotation_meta_beanSetter;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_beanSetter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_beanSetter.prototype = ScalaJS.c.scala_annotation_meta_beanSetter.prototype;
ScalaJS.is.scala_annotation_meta_beanSetter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_beanSetter)))
});
ScalaJS.as.scala_annotation_meta_beanSetter = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_beanSetter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.beanSetter")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_beanSetter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_beanSetter)))
});
ScalaJS.asArrayOf.scala_annotation_meta_beanSetter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_beanSetter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.beanSetter;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_beanSetter = new ScalaJS.ClassTypeData({
  scala_annotation_meta_beanSetter: 0
}, false, "scala.annotation.meta.beanSetter", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_beanSetter: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_beanSetter.prototype.$classData = ScalaJS.data.scala_annotation_meta_beanSetter;
//@ sourceMappingURL=beanSetter.js.map
