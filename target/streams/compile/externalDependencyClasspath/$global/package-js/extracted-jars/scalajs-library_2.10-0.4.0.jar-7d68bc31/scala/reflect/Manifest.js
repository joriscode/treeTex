ScalaJS.is.scala_reflect_Manifest = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_Manifest)))
});
ScalaJS.as.scala_reflect_Manifest = (function(obj) {
  if ((ScalaJS.is.scala_reflect_Manifest(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.Manifest")
  }
});
ScalaJS.isArrayOf.scala_reflect_Manifest = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_Manifest)))
});
ScalaJS.asArrayOf.scala_reflect_Manifest = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_Manifest(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.Manifest;", depth)
  }
});
ScalaJS.data.scala_reflect_Manifest = new ScalaJS.ClassTypeData({
  scala_reflect_Manifest: 0
}, true, "scala.reflect.Manifest", undefined, {
  scala_reflect_Manifest: 1,
  scala_reflect_ClassTag: 1,
  scala_Equals: 1,
  scala_reflect_ClassManifestDeprecatedApis: 1,
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Manifest.js.map
