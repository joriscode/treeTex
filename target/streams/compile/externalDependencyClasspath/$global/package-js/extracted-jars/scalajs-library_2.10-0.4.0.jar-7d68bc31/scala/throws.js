/** @constructor */
ScalaJS.c.scala_throws = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_throws.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_throws.prototype.constructor = ScalaJS.c.scala_throws;
ScalaJS.c.scala_throws.prototype.init___T = (function(cause) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_throws.prototype.init___Ljava_lang_Class = (function(clazz) {
  ScalaJS.c.scala_throws.prototype.init___T.call(this, ScalaJS.modules.scala_throws().$$lessinit$greater$default$1__T());
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_throws = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_throws.prototype = ScalaJS.c.scala_throws.prototype;
ScalaJS.is.scala_throws = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_throws)))
});
ScalaJS.as.scala_throws = (function(obj) {
  if ((ScalaJS.is.scala_throws(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.throws")
  }
});
ScalaJS.isArrayOf.scala_throws = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_throws)))
});
ScalaJS.asArrayOf.scala_throws = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_throws(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.throws;", depth)
  }
});
ScalaJS.data.scala_throws = new ScalaJS.ClassTypeData({
  scala_throws: 0
}, false, "scala.throws", ScalaJS.data.scala_annotation_Annotation, {
  scala_throws: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_throws.prototype.$classData = ScalaJS.data.scala_throws;
//@ sourceMappingURL=throws.js.map
