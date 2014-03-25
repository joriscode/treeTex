/** @constructor */
ScalaJS.c.scala_annotation_meta_companionMethod = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_meta_companionMethod.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_meta_companionMethod.prototype.constructor = ScalaJS.c.scala_annotation_meta_companionMethod;
/** @constructor */
ScalaJS.inheritable.scala_annotation_meta_companionMethod = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_meta_companionMethod.prototype = ScalaJS.c.scala_annotation_meta_companionMethod.prototype;
ScalaJS.is.scala_annotation_meta_companionMethod = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_meta_companionMethod)))
});
ScalaJS.as.scala_annotation_meta_companionMethod = (function(obj) {
  if ((ScalaJS.is.scala_annotation_meta_companionMethod(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.meta.companionMethod")
  }
});
ScalaJS.isArrayOf.scala_annotation_meta_companionMethod = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_meta_companionMethod)))
});
ScalaJS.asArrayOf.scala_annotation_meta_companionMethod = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_meta_companionMethod(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.meta.companionMethod;", depth)
  }
});
ScalaJS.data.scala_annotation_meta_companionMethod = new ScalaJS.ClassTypeData({
  scala_annotation_meta_companionMethod: 0
}, false, "scala.annotation.meta.companionMethod", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_meta_companionMethod: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_meta_companionMethod.prototype.$classData = ScalaJS.data.scala_annotation_meta_companionMethod;
//@ sourceMappingURL=companionMethod.js.map
