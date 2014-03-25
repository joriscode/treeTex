/** @constructor */
ScalaJS.c.scala_annotation_cloneable = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_cloneable.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_cloneable.prototype.constructor = ScalaJS.c.scala_annotation_cloneable;
/** @constructor */
ScalaJS.inheritable.scala_annotation_cloneable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_cloneable.prototype = ScalaJS.c.scala_annotation_cloneable.prototype;
ScalaJS.is.scala_annotation_cloneable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_cloneable)))
});
ScalaJS.as.scala_annotation_cloneable = (function(obj) {
  if ((ScalaJS.is.scala_annotation_cloneable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.cloneable")
  }
});
ScalaJS.isArrayOf.scala_annotation_cloneable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_cloneable)))
});
ScalaJS.asArrayOf.scala_annotation_cloneable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_cloneable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.cloneable;", depth)
  }
});
ScalaJS.data.scala_annotation_cloneable = new ScalaJS.ClassTypeData({
  scala_annotation_cloneable: 0
}, false, "scala.annotation.cloneable", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_cloneable: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_cloneable.prototype.$classData = ScalaJS.data.scala_annotation_cloneable;
//@ sourceMappingURL=cloneable.js.map
