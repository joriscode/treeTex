ScalaJS.is.scala_annotation_StaticAnnotation = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_StaticAnnotation)))
});
ScalaJS.as.scala_annotation_StaticAnnotation = (function(obj) {
  if ((ScalaJS.is.scala_annotation_StaticAnnotation(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.StaticAnnotation")
  }
});
ScalaJS.isArrayOf.scala_annotation_StaticAnnotation = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_StaticAnnotation)))
});
ScalaJS.asArrayOf.scala_annotation_StaticAnnotation = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_StaticAnnotation(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.StaticAnnotation;", depth)
  }
});
ScalaJS.data.scala_annotation_StaticAnnotation = new ScalaJS.ClassTypeData({
  scala_annotation_StaticAnnotation: 0
}, true, "scala.annotation.StaticAnnotation", undefined, {
  scala_annotation_StaticAnnotation: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=StaticAnnotation.js.map
