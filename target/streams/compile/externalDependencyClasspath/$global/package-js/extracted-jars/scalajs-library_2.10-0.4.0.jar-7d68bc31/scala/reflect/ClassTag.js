ScalaJS.is.scala_reflect_ClassTag = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_ClassTag)))
});
ScalaJS.as.scala_reflect_ClassTag = (function(obj) {
  if ((ScalaJS.is.scala_reflect_ClassTag(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.ClassTag")
  }
});
ScalaJS.isArrayOf.scala_reflect_ClassTag = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_ClassTag)))
});
ScalaJS.asArrayOf.scala_reflect_ClassTag = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_ClassTag(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.ClassTag;", depth)
  }
});
ScalaJS.data.scala_reflect_ClassTag = new ScalaJS.ClassTypeData({
  scala_reflect_ClassTag: 0
}, true, "scala.reflect.ClassTag", undefined, {
  scala_reflect_ClassTag: 1,
  scala_Equals: 1,
  scala_reflect_ClassManifestDeprecatedApis: 1,
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ClassTag.js.map
