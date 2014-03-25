/** @constructor */
ScalaJS.c.scala_concurrent_JavaConversions$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.constructor = ScalaJS.c.scala_concurrent_JavaConversions$;
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asTaskRunner__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_FutureTaskRunner = (function(exec) {
  return new ScalaJS.c.scala_concurrent_JavaConversions$$anon$1().init___Ljava_util_concurrent_ExecutorService(exec)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asTaskRunner__Ljava_util_concurrent_Executor__Lscala_concurrent_TaskRunner = (function(exec) {
  return new ScalaJS.c.scala_concurrent_JavaConversions$$anon$2().init___Ljava_util_concurrent_Executor(exec)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asExecutionContext__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_ExecutionContextExecutorService = (function(exec) {
  return ScalaJS.modules.scala_concurrent_ExecutionContext().fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_ExecutionContextExecutorService(exec)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asExecutionContext__Ljava_util_concurrent_Executor__Lscala_concurrent_ExecutionContextExecutor = (function(exec) {
  return ScalaJS.modules.scala_concurrent_ExecutionContext().fromExecutor__Ljava_util_concurrent_Executor__Lscala_concurrent_ExecutionContextExecutor(exec)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asExecutionContext__Ljava_util_concurrent_Executor__ = (function(exec) {
  return this.asExecutionContext__Ljava_util_concurrent_Executor__Lscala_concurrent_ExecutionContextExecutor(exec)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asExecutionContext__Ljava_util_concurrent_ExecutorService__ = (function(exec$2) {
  return this.asExecutionContext__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_ExecutionContextExecutorService(exec$2)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asTaskRunner__Ljava_util_concurrent_Executor__ = (function(exec$3) {
  return this.asTaskRunner__Ljava_util_concurrent_Executor__Lscala_concurrent_TaskRunner(exec$3)
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.asTaskRunner__Ljava_util_concurrent_ExecutorService__ = (function(exec$4) {
  return this.asTaskRunner__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_FutureTaskRunner(exec$4)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_JavaConversions$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_JavaConversions$.prototype = ScalaJS.c.scala_concurrent_JavaConversions$.prototype;
ScalaJS.is.scala_concurrent_JavaConversions$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_JavaConversions$)))
});
ScalaJS.as.scala_concurrent_JavaConversions$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_JavaConversions$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.JavaConversions")
  }
});
ScalaJS.isArrayOf.scala_concurrent_JavaConversions$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_JavaConversions$)))
});
ScalaJS.asArrayOf.scala_concurrent_JavaConversions$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_JavaConversions$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.JavaConversions;", depth)
  }
});
ScalaJS.data.scala_concurrent_JavaConversions$ = new ScalaJS.ClassTypeData({
  scala_concurrent_JavaConversions$: 0
}, false, "scala.concurrent.JavaConversions$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_JavaConversions$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_JavaConversions$.prototype.$classData = ScalaJS.data.scala_concurrent_JavaConversions$;
ScalaJS.moduleInstances.scala_concurrent_JavaConversions = undefined;
ScalaJS.modules.scala_concurrent_JavaConversions = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_JavaConversions)) {
    ScalaJS.moduleInstances.scala_concurrent_JavaConversions = new ScalaJS.c.scala_concurrent_JavaConversions$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_JavaConversions
});
//@ sourceMappingURL=JavaConversions$.js.map
