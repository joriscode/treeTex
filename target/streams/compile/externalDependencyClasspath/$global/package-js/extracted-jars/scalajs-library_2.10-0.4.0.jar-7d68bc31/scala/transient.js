/** @constructor */
ScalaJS.c.scala_transient = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_transient.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_transient.prototype.constructor = ScalaJS.c.scala_transient;
/** @constructor */
ScalaJS.inheritable.scala_transient = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_transient.prototype = ScalaJS.c.scala_transient.prototype;
ScalaJS.is.scala_transient = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_transient)))
});
ScalaJS.as.scala_transient = (function(obj) {
  if ((ScalaJS.is.scala_transient(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.transient")
  }
});
ScalaJS.isArrayOf.scala_transient = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_transient)))
});
ScalaJS.asArrayOf.scala_transient = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_transient(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.transient;", depth)
  }
});
ScalaJS.data.scala_transient = new ScalaJS.ClassTypeData({
  scala_transient: 0
}, false, "scala.transient", ScalaJS.data.scala_annotation_Annotation, {
  scala_transient: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_transient.prototype.$classData = ScalaJS.data.scala_transient;
//@ sourceMappingURL=transient.js.map
