ScalaJS.is.scala_annotation_TypeConstraint = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_TypeConstraint)))
});
ScalaJS.as.scala_annotation_TypeConstraint = (function(obj) {
  if ((ScalaJS.is.scala_annotation_TypeConstraint(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.TypeConstraint")
  }
});
ScalaJS.isArrayOf.scala_annotation_TypeConstraint = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_TypeConstraint)))
});
ScalaJS.asArrayOf.scala_annotation_TypeConstraint = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_TypeConstraint(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.TypeConstraint;", depth)
  }
});
ScalaJS.data.scala_annotation_TypeConstraint = new ScalaJS.ClassTypeData({
  scala_annotation_TypeConstraint: 0
}, true, "scala.annotation.TypeConstraint", undefined, {
  scala_annotation_TypeConstraint: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=TypeConstraint.js.map
