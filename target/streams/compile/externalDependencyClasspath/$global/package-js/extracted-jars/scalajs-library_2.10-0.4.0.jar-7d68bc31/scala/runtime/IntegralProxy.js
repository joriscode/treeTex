ScalaJS.is.scala_runtime_IntegralProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_IntegralProxy)))
});
ScalaJS.as.scala_runtime_IntegralProxy = (function(obj) {
  if ((ScalaJS.is.scala_runtime_IntegralProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.IntegralProxy")
  }
});
ScalaJS.isArrayOf.scala_runtime_IntegralProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_IntegralProxy)))
});
ScalaJS.asArrayOf.scala_runtime_IntegralProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_IntegralProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.IntegralProxy;", depth)
  }
});
ScalaJS.data.scala_runtime_IntegralProxy = new ScalaJS.ClassTypeData({
  scala_runtime_IntegralProxy: 0
}, true, "scala.runtime.IntegralProxy", undefined, {
  scala_runtime_IntegralProxy: 1,
  scala_runtime_RangedProxy: 1,
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
//@ sourceMappingURL=IntegralProxy.js.map
