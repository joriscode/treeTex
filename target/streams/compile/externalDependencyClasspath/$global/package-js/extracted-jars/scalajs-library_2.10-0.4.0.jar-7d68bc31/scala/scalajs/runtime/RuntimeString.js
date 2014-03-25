ScalaJS.is.scala_scalajs_runtime_RuntimeString = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_runtime_RuntimeString)))
});
ScalaJS.as.scala_scalajs_runtime_RuntimeString = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_runtime_RuntimeString(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.runtime.RuntimeString")
  }
});
ScalaJS.isArrayOf.scala_scalajs_runtime_RuntimeString = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_runtime_RuntimeString)))
});
ScalaJS.asArrayOf.scala_scalajs_runtime_RuntimeString = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_runtime_RuntimeString(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.runtime.RuntimeString;", depth)
  }
});
ScalaJS.data.scala_scalajs_runtime_RuntimeString = new ScalaJS.ClassTypeData({
  scala_scalajs_runtime_RuntimeString: 0
}, true, "scala.scalajs.runtime.RuntimeString", undefined, {
  scala_scalajs_runtime_RuntimeString: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=RuntimeString.js.map
