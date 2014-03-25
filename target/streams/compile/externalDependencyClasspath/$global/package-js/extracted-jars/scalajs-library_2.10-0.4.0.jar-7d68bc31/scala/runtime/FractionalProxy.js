ScalaJS.is.scala_runtime_FractionalProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_FractionalProxy)))
});
ScalaJS.as.scala_runtime_FractionalProxy = (function(obj) {
  if ((ScalaJS.is.scala_runtime_FractionalProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.FractionalProxy")
  }
});
ScalaJS.isArrayOf.scala_runtime_FractionalProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_FractionalProxy)))
});
ScalaJS.asArrayOf.scala_runtime_FractionalProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_FractionalProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.FractionalProxy;", depth)
  }
});
ScalaJS.data.scala_runtime_FractionalProxy = new ScalaJS.ClassTypeData({
  scala_runtime_FractionalProxy: 0
}, true, "scala.runtime.FractionalProxy", undefined, {
  scala_runtime_FractionalProxy: 1,
  scala_runtime_RangedProxy: 1,
  scala_runtime_ScalaNumberProxy: 1,
  scala_runtime_OrderedProxy: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  scala_math_ScalaNumericAnyConversions: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=FractionalProxy.js.map
