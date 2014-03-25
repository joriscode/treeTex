/** @constructor */
ScalaJS.c.scala_annotation_unchecked_uncheckedStable = (function() {
  ScalaJS.c.scala_annotation_Annotation.call(this)
});
ScalaJS.c.scala_annotation_unchecked_uncheckedStable.prototype = new ScalaJS.inheritable.scala_annotation_Annotation();
ScalaJS.c.scala_annotation_unchecked_uncheckedStable.prototype.constructor = ScalaJS.c.scala_annotation_unchecked_uncheckedStable;
/** @constructor */
ScalaJS.inheritable.scala_annotation_unchecked_uncheckedStable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_annotation_unchecked_uncheckedStable.prototype = ScalaJS.c.scala_annotation_unchecked_uncheckedStable.prototype;
ScalaJS.is.scala_annotation_unchecked_uncheckedStable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_unchecked_uncheckedStable)))
});
ScalaJS.as.scala_annotation_unchecked_uncheckedStable = (function(obj) {
  if ((ScalaJS.is.scala_annotation_unchecked_uncheckedStable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.unchecked.uncheckedStable")
  }
});
ScalaJS.isArrayOf.scala_annotation_unchecked_uncheckedStable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_unchecked_uncheckedStable)))
});
ScalaJS.asArrayOf.scala_annotation_unchecked_uncheckedStable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_unchecked_uncheckedStable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.unchecked.uncheckedStable;", depth)
  }
});
ScalaJS.data.scala_annotation_unchecked_uncheckedStable = new ScalaJS.ClassTypeData({
  scala_annotation_unchecked_uncheckedStable: 0
}, false, "scala.annotation.unchecked.uncheckedStable", ScalaJS.data.scala_annotation_Annotation, {
  scala_annotation_unchecked_uncheckedStable: 1,
  scala_annotation_StaticAnnotation: 1,
  scala_annotation_Annotation: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_annotation_unchecked_uncheckedStable.prototype.$classData = ScalaJS.data.scala_annotation_unchecked_uncheckedStable;
//@ sourceMappingURL=uncheckedStable.js.map
