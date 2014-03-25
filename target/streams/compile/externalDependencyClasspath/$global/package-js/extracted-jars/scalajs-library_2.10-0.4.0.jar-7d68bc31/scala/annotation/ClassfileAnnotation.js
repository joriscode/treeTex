ScalaJS.is.scala_annotation_ClassfileAnnotation = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_annotation_ClassfileAnnotation)))
});
ScalaJS.as.scala_annotation_ClassfileAnnotation = (function(obj) {
  if ((ScalaJS.is.scala_annotation_ClassfileAnnotation(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.annotation.ClassfileAnnotation")
  }
});
ScalaJS.isArrayOf.scala_annotation_ClassfileAnnotation = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_annotation_ClassfileAnnotation)))
});
ScalaJS.asArrayOf.scala_annotation_ClassfileAnnotation = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_annotation_ClassfileAnnotation(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.annotation.ClassfileAnnotation;", depth)
  }
});
ScalaJS.data.scala_annotation_ClassfileAnnotation = new ScalaJS.ClassTypeData({
  scala_annotation_ClassfileAnnotation: 0
}, true, "scala.annotation.ClassfileAnnotation", undefined, {
  scala_annotation_ClassfileAnnotation: 1,
  scala_annotation_StaticAnnotation: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ClassfileAnnotation.js.map
