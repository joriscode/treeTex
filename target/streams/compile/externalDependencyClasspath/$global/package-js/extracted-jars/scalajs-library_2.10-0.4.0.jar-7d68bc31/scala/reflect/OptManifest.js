ScalaJS.is.scala_reflect_OptManifest = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_reflect_OptManifest)))
});
ScalaJS.as.scala_reflect_OptManifest = (function(obj) {
  if ((ScalaJS.is.scala_reflect_OptManifest(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.reflect.OptManifest")
  }
});
ScalaJS.isArrayOf.scala_reflect_OptManifest = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_reflect_OptManifest)))
});
ScalaJS.asArrayOf.scala_reflect_OptManifest = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_reflect_OptManifest(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.reflect.OptManifest;", depth)
  }
});
ScalaJS.data.scala_reflect_OptManifest = new ScalaJS.ClassTypeData({
  scala_reflect_OptManifest: 0
}, true, "scala.reflect.OptManifest", undefined, {
  scala_reflect_OptManifest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=OptManifest.js.map
