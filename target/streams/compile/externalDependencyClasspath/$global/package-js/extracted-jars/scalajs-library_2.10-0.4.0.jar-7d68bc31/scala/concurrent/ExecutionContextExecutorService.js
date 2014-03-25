ScalaJS.is.scala_concurrent_ExecutionContextExecutorService = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ExecutionContextExecutorService)))
});
ScalaJS.as.scala_concurrent_ExecutionContextExecutorService = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ExecutionContextExecutorService(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ExecutionContextExecutorService")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ExecutionContextExecutorService = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ExecutionContextExecutorService)))
});
ScalaJS.asArrayOf.scala_concurrent_ExecutionContextExecutorService = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ExecutionContextExecutorService(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ExecutionContextExecutorService;", depth)
  }
});
ScalaJS.data.scala_concurrent_ExecutionContextExecutorService = new ScalaJS.ClassTypeData({
  scala_concurrent_ExecutionContextExecutorService: 0
}, true, "scala.concurrent.ExecutionContextExecutorService", undefined, {
  scala_concurrent_ExecutionContextExecutorService: 1,
  java_util_concurrent_ExecutorService: 1,
  scala_concurrent_ExecutionContextExecutor: 1,
  java_util_concurrent_Executor: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ExecutionContextExecutorService.js.map
