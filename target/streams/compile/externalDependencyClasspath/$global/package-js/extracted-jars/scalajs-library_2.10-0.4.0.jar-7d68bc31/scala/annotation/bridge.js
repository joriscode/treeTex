/** @constructor */
ScalaJS.c.scala_annotation_bridge = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_bridge.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_bridge.prototype.constructor = ScalaJS.c.scala_annotation_bridge;
/** @constructor */
ScalaJS.inheritable.scala_annotation_bridge = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_bridge.prototype = ScalaJS.c.scala_annotation_bridge.prototype;
ScalaJS.is.scala_annotation_bridge = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_bridge)))
});
ScalaJS.as.scala_annotation_bridge = (function(obj) {
  if ((ScalaJS.is.scala_annotation_bridge(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.bridge")
  }
});
ScalaJS.isArrayOf.scala_annotation_bridge = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_bridge)))
});
ScalaJS.asArrayOf.scala_annotation_bridge = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_bridge(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.bridge;", depth)
  }
});
ScalaJS.data.scala_annotation_bridge = new ScalaJS.ClassTypeData({
  scala_annotation_bridge: 0
}, false, "scala.annotation.bridge", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_bridge: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_bridge.prototype.$classData = ScalaJS.data.scala_annotation_bridge;
//@ sourceMappingURL=bridge.js.map
