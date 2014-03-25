/** @constructor */
ScalaJS.c.scala_annotation_Annotation = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_annotation_Annotation.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_annotation_Annotation.prototype.constructor = ScalaJS.c.scala_annotation_Annotation;
/** @constructor */
ScalaJS.inheritable.scala_annotation_Annotation = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_Annotation.prototype = ScalaJS.c.scala_annotation_Annotation.prototype;
ScalaJS.is.scala_annotation_Annotation = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_Annotation)))
});
ScalaJS.as.scala_annotation_Annotation = (function(obj) {
  if ((ScalaJS.is.scala_annotation_Annotation(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.Annotation")
  }
});
ScalaJS.isArrayOf.scala_annotation_Annotation = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_Annotation)))
});
ScalaJS.asArrayOf.scala_annotation_Annotation = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_Annotation(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.Annotation;", depth)
  }
});
ScalaJS.data.scala_annotation_Annotation = new ScalaJS.ClassTypeData({
  scala_annotation_Annotation: 0
}, false, "scala.annotation.Annotation", ScalaJS.data.java_lang_Object, {
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_Annotation.prototype.$classData = ScalaJS.data.scala_annotation_Annotation;
//@ sourceMappingURL=Annotation.js.map
