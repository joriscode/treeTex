/** @constructor */
ScalaJS.c.scala_annotation_switch = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_switch.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_switch.prototype.constructor = ScalaJS.c.scala_annotation_switch;
/** @constructor */
ScalaJS.inheritable.scala_annotation_switch = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_switch.prototype = ScalaJS.c.scala_annotation_switch.prototype;
ScalaJS.is.scala_annotation_switch = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_switch)))
});
ScalaJS.as.scala_annotation_switch = (function(obj) {
  if ((ScalaJS.is.scala_annotation_switch(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.switch")
  }
});
ScalaJS.isArrayOf.scala_annotation_switch = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_switch)))
});
ScalaJS.asArrayOf.scala_annotation_switch = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_switch(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.switch;", depth)
  }
});
ScalaJS.data.scala_annotation_switch = new ScalaJS.ClassTypeData({
  scala_annotation_switch: 0
}, false, "scala.annotation.switch", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_switch: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_switch.prototype.$classData = ScalaJS.data.scala_annotation_switch;
//@ sourceMappingURL=switch.js.map
