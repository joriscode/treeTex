/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = (function() {
  ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.call(this)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype = new ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.asExecutorService__p2__Ljava_util_concurrent_ExecutorService = (function() {
  return ScalaJS.as.java_util_concurrent_ExecutorService(this.executor__Ljava_util_concurrent_Executor())
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.execute__Ljava_lang_Runnable__V = (function(command) {
  this.executor__Ljava_util_concurrent_Executor().execute__Ljava_lang_Runnable__V(command)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.shutdown__V = (function() {
  this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().shutdown__V()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.shutdownNow__Ljava_util_List = (function() {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().shutdownNow__Ljava_util_List()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.isShutdown__Z = (function() {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().isShutdown__Z()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.isTerminated__Z = (function() {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().isTerminated__Z()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.awaitTermination__J__Ljava_util_concurrent_TimeUnit__Z = (function(l, timeUnit) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().awaitTermination__J__Ljava_util_concurrent_TimeUnit__Z(l, timeUnit)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future = (function(callable) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future(callable)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.submit__Ljava_lang_Runnable__O__Ljava_util_concurrent_Future = (function(runnable, t) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().submit__Ljava_lang_Runnable__O__Ljava_util_concurrent_Future(runnable, t)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.submit__Ljava_lang_Runnable__Ljava_util_concurrent_Future = (function(runnable) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().submit__Ljava_lang_Runnable__Ljava_util_concurrent_Future(runnable)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAll__Ljava_util_Collection__Ljava_util_List = (function(callables) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().invokeAll__Ljava_util_Collection__Ljava_util_List(callables)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAll__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__Ljava_util_List = (function(callables, l, timeUnit) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().invokeAll__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__Ljava_util_List(callables, l, timeUnit)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAny__Ljava_util_Collection__O = (function(callables) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().invokeAny__Ljava_util_Collection__O(callables)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAny__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__O = (function(callables, l, timeUnit) {
  return this.asExecutorService__p2__Ljava_util_concurrent_ExecutorService().invokeAny__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__O(callables, l, timeUnit)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.init___Ljava_util_concurrent_ExecutorService__Lscala_Function1 = (function(es$1, reporter$1) {
  ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl.prototype.init___Ljava_util_concurrent_Executor__Lscala_Function1.call(this, es$1, reporter$1);
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAny__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__ = (function(callables, l, timeUnit) {
  return this.invokeAny__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__O(callables, l, timeUnit)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAny__Ljava_util_Collection__ = (function(callables$2) {
  return this.invokeAny__Ljava_util_Collection__O(callables$2)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAll__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__ = (function(callables$3, l$2, timeUnit$2) {
  return this.invokeAll__Ljava_util_Collection__J__Ljava_util_concurrent_TimeUnit__Ljava_util_List(callables$3, l$2, timeUnit$2)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.invokeAll__Ljava_util_Collection__ = (function(callables$4) {
  return this.invokeAll__Ljava_util_Collection__Ljava_util_List(callables$4)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.submit__Ljava_lang_Runnable__ = (function(runnable) {
  return this.submit__Ljava_lang_Runnable__Ljava_util_concurrent_Future(runnable)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.submit__Ljava_lang_Runnable__O__ = (function(runnable$2, t) {
  return this.submit__Ljava_lang_Runnable__O__Ljava_util_concurrent_Future(runnable$2, t)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.submit__Ljava_util_concurrent_Callable__ = (function(callable) {
  return this.submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future(callable)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.awaitTermination__J__Ljava_util_concurrent_TimeUnit__ = (function(l$3, timeUnit$3) {
  return ScalaJS.bZ(this.awaitTermination__J__Ljava_util_concurrent_TimeUnit__Z(l$3, timeUnit$3))
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.isTerminated__ = (function() {
  return ScalaJS.bZ(this.isTerminated__Z())
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.isShutdown__ = (function() {
  return ScalaJS.bZ(this.isShutdown__Z())
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.shutdownNow__ = (function() {
  return this.shutdownNow__Ljava_util_List()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.shutdown__ = (function() {
  return ScalaJS.bV(this.shutdown__V())
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$$anon$1)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$$anon$1)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl$$anon$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$$anon$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$$anon$1: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$$anon$1", ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl, {
  scala_concurrent_impl_ExecutionContextImpl$$anon$1: 1,
  scala_concurrent_ExecutionContextExecutorService: 1,
  java_util_concurrent_ExecutorService: 1,
  scala_concurrent_impl_ExecutionContextImpl: 1,
  scala_concurrent_ExecutionContextExecutor: 1,
  java_util_concurrent_Executor: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$1.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$$anon$1;
//@ sourceMappingURL=ExecutionContextImpl$$anon$1.js.map
