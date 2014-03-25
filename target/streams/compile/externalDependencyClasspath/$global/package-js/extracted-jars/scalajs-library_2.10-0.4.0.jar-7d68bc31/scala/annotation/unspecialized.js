/** @constructor */
ScalaJS.c.scala_annotation_unspecialized = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_unspecialized.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_unspecialized.prototype.constructor = ScalaJS.c.scala_annotation_unspecialized;
/** @constructor */
ScalaJS.inheritable.scala_annotation_unspecialized = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_unspecialized.prototype = ScalaJS.c.scala_annotation_unspecialized.prototype;
ScalaJS.is.scala_annotation_unspecialized = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_unspecialized)))
});
ScalaJS.as.scala_annotation_unspecialized = (function(obj) {
  if ((ScalaJS.is.scala_annotation_unspecialized(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.unspecialized")
  }
});
ScalaJS.isArrayOf.scala_annotation_unspecialized = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_unspecialized)))
});
ScalaJS.asArrayOf.scala_annotation_unspecialized = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_unspecialized(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.unspecialized;", depth)
  }
});
ScalaJS.data.scala_annotation_unspecialized = new ScalaJS.ClassTypeData({
  scala_annotation_unspecialized: 0
}, false, "scala.annotation.unspecialized", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_unspecialized: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_unspecialized.prototype.$classData = ScalaJS.data.scala_annotation_unspecialized;
//@ sourceMappingURL=unspecialized.js.map
