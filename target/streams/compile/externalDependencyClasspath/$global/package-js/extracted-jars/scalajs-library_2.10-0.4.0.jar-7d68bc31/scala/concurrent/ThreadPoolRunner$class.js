ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__functionAsTask__Lscala_concurrent_ThreadPoolRunner__Lscala_Function0__Ljava_util_concurrent_Callable = (function($$this, fun) {
  return new ScalaJS.c.scala_concurrent_ThreadPoolRunner$RunCallable().init___Lscala_concurrent_ThreadPoolRunner__Lscala_Function0($$this, fun)
});
ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__futureAsFunction__Lscala_concurrent_ThreadPoolRunner__Ljava_util_concurrent_Future__Lscala_Function0 = (function($$this, x) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(x$1) {
    return (function() {
      return x$1.get__O()
    })
  })(x))
});
ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__submit__Lscala_concurrent_ThreadPoolRunner__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future = (function($$this, task) {
  return $$this.executor__Ljava_util_concurrent_ExecutorService().submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future(task)
});
ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__execute__Lscala_concurrent_ThreadPoolRunner__Ljava_util_concurrent_Callable__V = (function($$this, task) {
  $$this.executor__Ljava_util_concurrent_ExecutorService().execute__Ljava_lang_Runnable__V(ScalaJS.as.java_lang_Runnable(task))
});
ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__managedBlock__Lscala_concurrent_ThreadPoolRunner__Lscala_concurrent_ManagedBlocker__V = (function($$this, blocker) {
  blocker.block__Z()
});
ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__$init$__Lscala_concurrent_ThreadPoolRunner__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ThreadPoolRunner$class.js.map
