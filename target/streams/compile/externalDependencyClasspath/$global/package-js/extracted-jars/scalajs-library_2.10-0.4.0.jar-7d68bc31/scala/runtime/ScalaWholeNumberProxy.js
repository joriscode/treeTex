ScalaJS.is.scala_runtime_ScalaWholeNumberProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ScalaWholeNumberProxy)))
});
ScalaJS.as.scala_runtime_ScalaWholeNumberProxy = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ScalaWholeNumberProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ScalaWholeNumberProxy")
  }
});
ScalaJS.isArrayOf.scala_runtime_ScalaWholeNumberProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ScalaWholeNumberProxy)))
});
ScalaJS.asArrayOf.scala_runtime_ScalaWholeNumberProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ScalaWholeNumberProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ScalaWholeNumberProxy;", depth)
  }
});
ScalaJS.data.scala_runtime_ScalaWholeNumberProxy = new ScalaJS.ClassTypeData({
  scala_runtime_ScalaWholeNumberProxy: 0
}, true, "scala.runtime.ScalaWholeNumberProxy", undefined, {
  scala_runtime_ScalaWholeNumberProxy: 1,
  scala_runtime_ScalaNumberProxy: 1,
  scala_runtime_OrderedProxy: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  scala_math_ScalaNumericAnyConversions: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ScalaWholeNumberProxy.js.map
