ScalaJS.is.scala_runtime_OrderedProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_OrderedProxy)))
});
ScalaJS.as.scala_runtime_OrderedProxy = (function(obj) {
  if ((ScalaJS.is.scala_runtime_OrderedProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.OrderedProxy")
  }
});
ScalaJS.isArrayOf.scala_runtime_OrderedProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_OrderedProxy)))
});
ScalaJS.asArrayOf.scala_runtime_OrderedProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_OrderedProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.OrderedProxy;", depth)
  }
});
ScalaJS.data.scala_runtime_OrderedProxy = new ScalaJS.ClassTypeData({
  scala_runtime_OrderedProxy: 0
}, true, "scala.runtime.OrderedProxy", undefined, {
  scala_runtime_OrderedProxy: 1,
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=OrderedProxy.js.map
