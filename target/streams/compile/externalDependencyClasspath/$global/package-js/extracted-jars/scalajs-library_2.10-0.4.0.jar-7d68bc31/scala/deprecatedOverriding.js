/** @constructor */
ScalaJS.c.scala_deprecatedOverriding = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_deprecatedOverriding.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_deprecatedOverriding.prototype.constructor = ScalaJS.c.scala_deprecatedOverriding;
ScalaJS.c.scala_deprecatedOverriding.prototype.init___T__T = (function(message, since) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_deprecatedOverriding = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_deprecatedOverriding.prototype = ScalaJS.c.scala_deprecatedOverriding.prototype;
ScalaJS.is.scala_deprecatedOverriding = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_deprecatedOverriding)))
});
ScalaJS.as.scala_deprecatedOverriding = (function(obj) {
  if ((ScalaJS.is.scala_deprecatedOverriding(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.deprecatedOverriding")
  }
});
ScalaJS.isArrayOf.scala_deprecatedOverriding = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_deprecatedOverriding)))
});
ScalaJS.asArrayOf.scala_deprecatedOverriding = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_deprecatedOverriding(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.deprecatedOverriding;", depth)
  }
});
ScalaJS.data.scala_deprecatedOverriding = new ScalaJS.ClassTypeData({
  scala_deprecatedOverriding: 0
}, false, "scala.deprecatedOverriding", ScalaJS.data.scala_annotation_Annotation, {
  scala_deprecatedOverriding: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_deprecatedOverriding.prototype.$classData = ScalaJS.data.scala_deprecatedOverriding;
//@ sourceMappingURL=deprecatedOverriding.js.map
