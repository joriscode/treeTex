ScalaJS.is.scala_runtime_Boxed = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Boxed)))
});
ScalaJS.as.scala_runtime_Boxed = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Boxed(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Boxed")
  }
});
ScalaJS.isArrayOf.scala_runtime_Boxed = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Boxed)))
});
ScalaJS.asArrayOf.scala_runtime_Boxed = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Boxed(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Boxed;", depth)
  }
});
ScalaJS.data.scala_runtime_Boxed = new ScalaJS.ClassTypeData({
  scala_runtime_Boxed: 0
}, true, "scala.runtime.Boxed", undefined, {
  scala_runtime_Boxed: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Boxed.js.map
