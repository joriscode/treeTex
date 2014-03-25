/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl = (function(e, reporter) {
  return new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl().init___Ljava_util_concurrent_Executor__Lscala_Function1(e, reporter)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.fromExecutor$default$2__Lscala_Function1 = (function() {
  return ScalaJS.modules.scala_concurrent_ExecutionContext().defaultReporter__Lscala_Function1()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl = (function(es, reporter) {
  return new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1().init___Ljava_util_concurrent_ExecutorService__Lscala_Function1(es, reporter)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.fromExecutorService$default$2__Lscala_Function1 = (function() {
  return ScalaJS.modules.scala_concurrent_ExecutionContext().defaultReporter__Lscala_Function1()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__ = (function(es, reporter) {
  return this.fromExecutorService__Ljava_util_concurrent_ExecutorService__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl(es, reporter)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__ = (function(e, reporter$2) {
  return this.fromExecutor__Ljava_util_concurrent_Executor__Lscala_Function1__Lscala_concurrent_impl_ExecutionContextImpl(e, reporter$2)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$ = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_ExecutionContextImpl$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$;
ScalaJS.moduleInstances.scala_concurrent_impl_ExecutionContextImpl = undefined;
ScalaJS.modules.scala_concurrent_impl_ExecutionContextImpl = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_impl_ExecutionContextImpl)) {
    ScalaJS.moduleInstances.scala_concurrent_impl_ExecutionContextImpl = new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_impl_ExecutionContextImpl
});
//@ sourceMappingURL=ExecutionContextImpl$.js.map
