/** @constructor */
ScalaJS.c.scala_concurrent_TaskRunners$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.threadRunner$1 = null;
  this.threadPoolRunner$1 = null
});
ScalaJS.c.scala_concurrent_TaskRunners$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.constructor = ScalaJS.c.scala_concurrent_TaskRunners$;
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.threadRunner__Lscala_concurrent_FutureTaskRunner = (function() {
  return this.threadRunner$1
});
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.threadPoolRunner__Lscala_concurrent_FutureTaskRunner = (function() {
  return this.threadPoolRunner$1
});
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_concurrent_TaskRunners = this;
  this.threadRunner$1 = new ScalaJS.c.scala_concurrent_ThreadRunner().init___();
  var numCores = ScalaJS.modules.java_lang_Runtime().getRuntime__Ljava_lang_Runtime().availableProcessors__I();
  var keepAliveTime = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60000, 0, 0);
  var workQueue = new ScalaJS.c.java_util_concurrent_LinkedBlockingQueue().init___();
  var exec = new ScalaJS.c.java_util_concurrent_ThreadPoolExecutor().init___I__I__J__Ljava_util_concurrent_TimeUnit__Ljava_util_concurrent_BlockingQueue__Ljava_util_concurrent_RejectedExecutionHandler(numCores, numCores, keepAliveTime, ScalaJS.modules.java_util_concurrent_TimeUnit().MILLISECONDS__Ljava_util_concurrent_TimeUnit(), workQueue, new ScalaJS.c.java_util_concurrent_ThreadPoolExecutor$CallerRunsPolicy().init___());
  var jsx$1 = ScalaJS.modules.scala_concurrent_JavaConversions().asTaskRunner__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_FutureTaskRunner(exec);
  this.threadPoolRunner$1 = jsx$1;
  return this
});
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.threadPoolRunner__ = (function() {
  return this.threadPoolRunner__Lscala_concurrent_FutureTaskRunner()
});
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.threadRunner__ = (function() {
  return this.threadRunner__Lscala_concurrent_FutureTaskRunner()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_TaskRunners$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_TaskRunners$.prototype = ScalaJS.c.scala_concurrent_TaskRunners$.prototype;
ScalaJS.is.scala_concurrent_TaskRunners$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_TaskRunners$)))
});
ScalaJS.as.scala_concurrent_TaskRunners$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_TaskRunners$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.TaskRunners")
  }
});
ScalaJS.isArrayOf.scala_concurrent_TaskRunners$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_TaskRunners$)))
});
ScalaJS.asArrayOf.scala_concurrent_TaskRunners$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_TaskRunners$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.TaskRunners;", depth)
  }
});
ScalaJS.data.scala_concurrent_TaskRunners$ = new ScalaJS.ClassTypeData({
  scala_concurrent_TaskRunners$: 0
}, false, "scala.concurrent.TaskRunners$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_TaskRunners$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_TaskRunners$.prototype.$classData = ScalaJS.data.scala_concurrent_TaskRunners$;
ScalaJS.moduleInstances.scala_concurrent_TaskRunners = undefined;
ScalaJS.modules.scala_concurrent_TaskRunners = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_TaskRunners)) {
    ScalaJS.moduleInstances.scala_concurrent_TaskRunners = new ScalaJS.c.scala_concurrent_TaskRunners$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_TaskRunners
});
//@ sourceMappingURL=TaskRunners$.js.map
