/** @constructor */
ScalaJS.c.scala_concurrent_ExecutionContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.constructor = ScalaJS.c.scala_concurrent_ExecutionContext$;
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.global__Lscala_concurrent_ExecutionContextExecutor = (function() {
  return ScalaJS.modules.scala_concurrent_ExecutionContext$Implicits().global__Lscala_concurrent_ExecutionContextExecutor()
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__Lscala_concurrent_ExecutionContextExecutorService = (function(e, reporter) {
  return ScalaJS.as.scala_concurrent_ExecutionContextExecutorService(ScalaJS.modules.scala_concurrent_impl_ExecutionContextImpl().fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl(e, reporter))
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_ExecutionContextExecutorService = (function(e) {
  return this.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__Lscala_concurrent_ExecutionContextExecutorService(e, this.defaultReporter__Lscala_Function1())
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_ExecutionContextExecutor = (function(e, reporter) {
  return ScalaJS.modules.scala_concurrent_impl_ExecutionContextImpl().fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl(e, reporter)
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutor__Ljava_util_concurrent_Executor__Lscala_concurrent_ExecutionContextExecutor = (function(e) {
  return this.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_ExecutionContextExecutor(e, this.defaultReporter__Lscala_Function1())
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.defaultReporter__Lscala_Function1 = (function() {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(t) {
      t.printStackTrace__V();
      return ScalaJS.bV(undefined)
    })
  })())
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.defaultReporter__ = (function() {
  return this.defaultReporter__Lscala_Function1()
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutor__Ljava_util_concurrent_Executor__ = (function(e) {
  return this.fromExecutor__Ljava_util_concurrent_Executor__Lscala_concurrent_ExecutionContextExecutor(e)
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__ = (function(e$2, reporter) {
  return this.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_ExecutionContextExecutor(e$2, reporter)
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutorService__Ljava_util_concurrent_ExecutorService__ = (function(e$3) {
  return this.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_concurrent_ExecutionContextExecutorService(e$3)
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__ = (function(e$4, reporter$2) {
  return this.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__Lscala_concurrent_ExecutionContextExecutorService(e$4, reporter$2)
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.global__ = (function() {
  return this.global__Lscala_concurrent_ExecutionContextExecutor()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_ExecutionContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_ExecutionContext$.prototype = ScalaJS.c.scala_concurrent_ExecutionContext$.prototype;
ScalaJS.is.scala_concurrent_ExecutionContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ExecutionContext$)))
});
ScalaJS.as.scala_concurrent_ExecutionContext$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ExecutionContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ExecutionContext")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ExecutionContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ExecutionContext$)))
});
ScalaJS.asArrayOf.scala_concurrent_ExecutionContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ExecutionContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ExecutionContext;", depth)
  }
});
ScalaJS.data.scala_concurrent_ExecutionContext$ = new ScalaJS.ClassTypeData({
  scala_concurrent_ExecutionContext$: 0
}, false, "scala.concurrent.ExecutionContext$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_ExecutionContext$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_ExecutionContext$.prototype.$classData = ScalaJS.data.scala_concurrent_ExecutionContext$;
ScalaJS.moduleInstances.scala_concurrent_ExecutionContext = undefined;
ScalaJS.modules.scala_concurrent_ExecutionContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_ExecutionContext)) {
    ScalaJS.moduleInstances.scala_concurrent_ExecutionContext = new ScalaJS.c.scala_concurrent_ExecutionContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_ExecutionContext
});
//@ sourceMappingURL=ExecutionContext$.js.map
