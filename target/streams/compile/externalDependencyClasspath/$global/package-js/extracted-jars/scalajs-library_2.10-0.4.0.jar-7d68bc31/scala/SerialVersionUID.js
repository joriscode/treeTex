/** @constructor */
ScalaJS.c.scala_SerialVersionUID = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_SerialVersionUID.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_SerialVersionUID.prototype.constructor = ScalaJS.c.scala_SerialVersionUID;
ScalaJS.c.scala_SerialVersionUID.prototype.init___J = (function(uid) {
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_SerialVersionUID = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_SerialVersionUID.prototype = ScalaJS.c.scala_SerialVersionUID.prototype;
ScalaJS.is.scala_SerialVersionUID = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_SerialVersionUID)))
});
ScalaJS.as.scala_SerialVersionUID = (function(obj) {
  if ((ScalaJS.is.scala_SerialVersionUID(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.SerialVersionUID")
  }
});
ScalaJS.isArrayOf.scala_SerialVersionUID = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_SerialVersionUID)))
});
ScalaJS.asArrayOf.scala_SerialVersionUID = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_SerialVersionUID(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.SerialVersionUID;", depth)
  }
});
ScalaJS.data.scala_SerialVersionUID = new ScalaJS.ClassTypeData({
  scala_SerialVersionUID: 0
}, false, "scala.SerialVersionUID", ScalaJS.data.scala_annotation_Annotation, {
  scala_SerialVersionUID: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_SerialVersionUID.prototype.$classData = ScalaJS.data.scala_SerialVersionUID;
//@ sourceMappingURL=SerialVersionUID.js.map
