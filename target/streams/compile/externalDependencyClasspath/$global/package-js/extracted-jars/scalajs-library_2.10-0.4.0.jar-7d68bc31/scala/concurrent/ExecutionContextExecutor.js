ScalaJS.is.scala_concurrent_ExecutionContextExecutor = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ExecutionContextExecutor)))
});
ScalaJS.as.scala_concurrent_ExecutionContextExecutor = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ExecutionContextExecutor(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ExecutionContextExecutor")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ExecutionContextExecutor = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ExecutionContextExecutor)))
});
ScalaJS.asArrayOf.scala_concurrent_ExecutionContextExecutor = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ExecutionContextExecutor(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ExecutionContextExecutor;", depth)
  }
});
ScalaJS.data.scala_concurrent_ExecutionContextExecutor = new ScalaJS.ClassTypeData({
  scala_concurrent_ExecutionContextExecutor: 0
}, true, "scala.concurrent.ExecutionContextExecutor", undefined, {
  scala_concurrent_ExecutionContextExecutor: 1,
  java_util_concurrent_Executor: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ExecutionContextExecutor.js.map
