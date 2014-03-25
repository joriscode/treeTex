ScalaJS.is.scala_runtime_ScalaNumberProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_ScalaNumberProxy)))
});
ScalaJS.as.scala_runtime_ScalaNumberProxy = (function(obj) {
  if ((ScalaJS.is.scala_runtime_ScalaNumberProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.ScalaNumberProxy")
  }
});
ScalaJS.isArrayOf.scala_runtime_ScalaNumberProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_ScalaNumberProxy)))
});
ScalaJS.asArrayOf.scala_runtime_ScalaNumberProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_ScalaNumberProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.ScalaNumberProxy;", depth)
  }
});
ScalaJS.data.scala_runtime_ScalaNumberProxy = new ScalaJS.ClassTypeData({
  scala_runtime_ScalaNumberProxy: 0
}, true, "scala.runtime.ScalaNumberProxy", undefined, {
  scala_runtime_ScalaNumberProxy: 1,
  scala_runtime_OrderedProxy: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  scala_math_ScalaNumericAnyConversions: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ScalaNumberProxy.js.map
