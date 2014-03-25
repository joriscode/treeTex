/** @constructor */
ScalaJS.c.scala_deprecatedInheritance = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_deprecatedInheritance.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_deprecatedInheritance.prototype.constructor = ScalaJS.c.scala_deprecatedInheritance;
ScalaJS.c.scala_deprecatedInheritance.prototype.init___T__T = (function(message, since) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_deprecatedInheritance = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_deprecatedInheritance.prototype = ScalaJS.c.scala_deprecatedInheritance.prototype;
ScalaJS.is.scala_deprecatedInheritance = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_deprecatedInheritance)))
});
ScalaJS.as.scala_deprecatedInheritance = (function(obj) {
  if ((ScalaJS.is.scala_deprecatedInheritance(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.deprecatedInheritance")
  }
});
ScalaJS.isArrayOf.scala_deprecatedInheritance = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_deprecatedInheritance)))
});
ScalaJS.asArrayOf.scala_deprecatedInheritance = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_deprecatedInheritance(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.deprecatedInheritance;", depth)
  }
});
ScalaJS.data.scala_deprecatedInheritance = new ScalaJS.ClassTypeData({
  scala_deprecatedInheritance: 0
}, false, "scala.deprecatedInheritance", ScalaJS.data.scala_annotation_Annotation, {
  scala_deprecatedInheritance: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_deprecatedInheritance.prototype.$classData = ScalaJS.data.scala_deprecatedInheritance;
//@ sourceMappingURL=deprecatedInheritance.js.map
