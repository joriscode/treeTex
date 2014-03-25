/** @constructor */
ScalaJS.c.scala_annotation_strictfp = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_strictfp.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_strictfp.prototype.constructor = ScalaJS.c.scala_annotation_strictfp;
/** @constructor */
ScalaJS.inheritable.scala_annotation_strictfp = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_strictfp.prototype = ScalaJS.c.scala_annotation_strictfp.prototype;
ScalaJS.is.scala_annotation_strictfp = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_strictfp)))
});
ScalaJS.as.scala_annotation_strictfp = (function(obj) {
  if ((ScalaJS.is.scala_annotation_strictfp(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.strictfp")
  }
});
ScalaJS.isArrayOf.scala_annotation_strictfp = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_strictfp)))
});
ScalaJS.asArrayOf.scala_annotation_strictfp = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_strictfp(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.strictfp;", depth)
  }
});
ScalaJS.data.scala_annotation_strictfp = new ScalaJS.ClassTypeData({
  scala_annotation_strictfp: 0
}, false, "scala.annotation.strictfp", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_strictfp: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_strictfp.prototype.$classData = ScalaJS.data.scala_annotation_strictfp;
//@ sourceMappingURL=strictfp.js.map
