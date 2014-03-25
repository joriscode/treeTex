/** @constructor */
ScalaJS.c.scala_annotation_serializable = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_serializable.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_serializable.prototype.constructor = ScalaJS.c.scala_annotation_serializable;
/** @constructor */
ScalaJS.inheritable.scala_annotation_serializable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_serializable.prototype = ScalaJS.c.scala_annotation_serializable.prototype;
ScalaJS.is.scala_annotation_serializable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_serializable)))
});
ScalaJS.as.scala_annotation_serializable = (function(obj) {
  if ((ScalaJS.is.scala_annotation_serializable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.serializable")
  }
});
ScalaJS.isArrayOf.scala_annotation_serializable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_serializable)))
});
ScalaJS.asArrayOf.scala_annotation_serializable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_serializable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.serializable;", depth)
  }
});
ScalaJS.data.scala_annotation_serializable = new ScalaJS.ClassTypeData({
  scala_annotation_serializable: 0
}, false, "scala.annotation.serializable", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_serializable: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_serializable.prototype.$classData = ScalaJS.data.scala_annotation_serializable;
//@ sourceMappingURL=serializable.js.map
