/** @constructor */
ScalaJS.c.scala_native = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_native.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_native.prototype.constructor = ScalaJS.c.scala_native;
/** @constructor */
ScalaJS.inheritable.scala_native = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_native.prototype = ScalaJS.c.scala_native.prototype;
ScalaJS.is.scala_native = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_native)))
});
ScalaJS.as.scala_native = (function(obj) {
  if ((ScalaJS.is.scala_native(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.native")
  }
});
ScalaJS.isArrayOf.scala_native = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_native)))
});
ScalaJS.asArrayOf.scala_native = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_native(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.native;", depth)
  }
});
ScalaJS.data.scala_native = new ScalaJS.ClassTypeData({
  scala_native: 0
}, false, "scala.native", ScalaJS.data.scala_annotation_Annotation, {
  scala_native: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_native.prototype.$classData = ScalaJS.data.scala_native;
//@ sourceMappingURL=native.js.map
