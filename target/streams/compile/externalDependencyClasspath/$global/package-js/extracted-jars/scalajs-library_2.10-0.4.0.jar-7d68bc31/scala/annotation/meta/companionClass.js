/** @constructor */
ScalaJS.c.scala_annotation_meta_companionClass = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_companionClass.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_companionClass.prototype.constructor = ScalaJS.c.scala_annotation_meta_companionClass;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_companionClass = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_companionClass.prototype = ScalaJS.c.scala_annotation_meta_companionClass.prototype;
ScalaJS.is.scala_annotation_meta_companionClass = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_companionClass)))
});
ScalaJS.as.scala_annotation_meta_companionClass = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_companionClass(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.companionClass")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_companionClass = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_companionClass)))
});
ScalaJS.asArrayOf.scala_annotation_meta_companionClass = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_companionClass(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.companionClass;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_companionClass = new ScalaJS.ClassTypeData({
  scala_annotation_meta_companionClass: 0
}, false, "scala.annotation.meta.companionClass", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_companionClass: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_companionClass.prototype.$classData = ScalaJS.data.scala_annotation_meta_companionClass;
//@ sourceMappingURL=companionClass.js.map
