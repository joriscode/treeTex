/** @constructor */
ScalaJS.c.scala_annotation_implicitNotFound = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_implicitNotFound.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_implicitNotFound.prototype.constructor = ScalaJS.c.scala_annotation_implicitNotFound;
ScalaJS.c.scala_annotation_implicitNotFound.prototype.init___T = (function(msg) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_annotation_implicitNotFound = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_implicitNotFound.prototype = ScalaJS.c.scala_annotation_implicitNotFound.prototype;
ScalaJS.is.scala_annotation_implicitNotFound = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_implicitNotFound)))
});
ScalaJS.as.scala_annotation_implicitNotFound = (function(obj) {
  if ((ScalaJS.is.scala_annotation_implicitNotFound(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.implicitNotFound")
  }
});
ScalaJS.isArrayOf.scala_annotation_implicitNotFound = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_implicitNotFound)))
});
ScalaJS.asArrayOf.scala_annotation_implicitNotFound = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_implicitNotFound(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.implicitNotFound;", depth)
  }
});
ScalaJS.data.scala_annotation_implicitNotFound = new ScalaJS.ClassTypeData({
  scala_annotation_implicitNotFound: 0
}, false, "scala.annotation.implicitNotFound", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_implicitNotFound: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_implicitNotFound.prototype.$classData = ScalaJS.data.scala_annotation_implicitNotFound;
//@ sourceMappingURL=implicitNotFound.js.map
