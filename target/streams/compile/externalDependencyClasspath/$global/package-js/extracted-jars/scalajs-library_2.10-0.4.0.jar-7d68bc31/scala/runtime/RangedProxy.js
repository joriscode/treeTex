ScalaJS.is.scala_runtime_RangedProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RangedProxy)))
});
ScalaJS.as.scala_runtime_RangedProxy = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RangedProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RangedProxy")
  }
});
ScalaJS.isArrayOf.scala_runtime_RangedProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RangedProxy)))
});
ScalaJS.asArrayOf.scala_runtime_RangedProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RangedProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RangedProxy;", depth)
  }
});
ScalaJS.data.scala_runtime_RangedProxy = new ScalaJS.ClassTypeData({
  scala_runtime_RangedProxy: 0
}, true, "scala.runtime.RangedProxy", undefined, {
  scala_runtime_RangedProxy: 1,
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=RangedProxy.js.map
