/** @constructor */
ScalaJS.c.scala_annotation_elidable = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this);
  this.level$2 = 0
});
ScalaJS.c.scala_annotation_elidable.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_elidable.prototype.constructor = ScalaJS.c.scala_annotation_elidable;
ScalaJS.c.scala_annotation_elidable.prototype.level__I = (function() {
  return this.level$2
});
ScalaJS.c.scala_annotation_elidable.prototype.init___I = (function(level) {
  this.level$2 = level;
  ScalaJS.c.scala_annotation_Annotation.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_annotation_elidable.prototype.level__ = (function() {
  return ScalaJS.bI(this.level__I())
});
/** @constructor */
ScalaJS.inheritable.scala_annotation_elidable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_elidable.prototype = ScalaJS.c.scala_annotation_elidable.prototype;
ScalaJS.is.scala_annotation_elidable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_elidable)))
});
ScalaJS.as.scala_annotation_elidable = (function(obj) {
  if ((ScalaJS.is.scala_annotation_elidable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.elidable")
  }
});
ScalaJS.isArrayOf.scala_annotation_elidable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_elidable)))
});
ScalaJS.asArrayOf.scala_annotation_elidable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_elidable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.elidable;", depth)
  }
});
ScalaJS.data.scala_annotation_elidable = new ScalaJS.ClassTypeData({
  scala_annotation_elidable: 0
}, false, "scala.annotation.elidable", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_elidable: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_elidable.prototype.$classData = ScalaJS.data.scala_annotation_elidable;
//@ sourceMappingURL=elidable.js.map
