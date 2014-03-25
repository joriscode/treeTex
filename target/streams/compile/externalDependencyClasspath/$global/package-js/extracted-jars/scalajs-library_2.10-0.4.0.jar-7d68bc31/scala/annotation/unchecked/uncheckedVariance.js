/** @constructor */
ScalaJS.c.scala_annotation_unchecked_uncheckedVariance = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_unchecked_uncheckedVariance.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_unchecked_uncheckedVariance.prototype.constructor = ScalaJS.c.scala_annotation_unchecked_uncheckedVariance;
/** @constructor */
ScalaJS.inheritable.scala_annotation_unchecked_uncheckedVariance = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_unchecked_uncheckedVariance.prototype = ScalaJS.c.scala_annotation_unchecked_uncheckedVariance.prototype;
ScalaJS.is.scala_annotation_unchecked_uncheckedVariance = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_unchecked_uncheckedVariance)))
});
ScalaJS.as.scala_annotation_unchecked_uncheckedVariance = (function(obj) {
  if ((ScalaJS.is.scala_annotation_unchecked_uncheckedVariance(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.unchecked.uncheckedVariance")
  }
});
ScalaJS.isArrayOf.scala_annotation_unchecked_uncheckedVariance = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_unchecked_uncheckedVariance)))
});
ScalaJS.asArrayOf.scala_annotation_unchecked_uncheckedVariance = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_unchecked_uncheckedVariance(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.unchecked.uncheckedVariance;", depth)
  }
});
ScalaJS.data.scala_annotation_unchecked_uncheckedVariance = new ScalaJS.ClassTypeData({
  scala_annotation_unchecked_uncheckedVariance: 0
}, false, "scala.annotation.unchecked.uncheckedVariance", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_unchecked_uncheckedVariance: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_unchecked_uncheckedVariance.prototype.$classData = ScalaJS.data.scala_annotation_unchecked_uncheckedVariance;
//@ sourceMappingURL=uncheckedVariance.js.map
