/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = (function() {
  ScalaJS.c.scala_concurrent_forkjoin_ForkJoinWorkerThread.call(this)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype = new ScalaJS.inheritable.scala_concurrent_forkjoin_ForkJoinWorkerThread();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O = (function(thunk, permission) {
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  ScalaJS.modules.scala_concurrent_forkjoin_ForkJoinPool().managedBlock__Lscala_concurrent_forkjoin_ForkJoinPool$ManagedBlocker__V(new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2$$anon$5().init___Lscala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2__Lscala_Function0__Lscala_runtime_ObjectRef(this, thunk, result));
  return result.elem$1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype.init___Lscala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory__Lscala_concurrent_forkjoin_ForkJoinPool = (function($$outer, fjp$1) {
  ScalaJS.c.scala_concurrent_forkjoin_ForkJoinWorkerThread.prototype.init___Lscala_concurrent_forkjoin_ForkJoinPool.call(this, fjp$1);
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__ = (function(thunk, permission) {
  return this.blockOn__Lscala_Function0__Lscala_concurrent_CanAwait__O(thunk, permission)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory$$anon$2;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2 = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory$$anon$2", ScalaJS.data.scala_concurrent_forkjoin_ForkJoinWorkerThread, {
  scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2: 1,
  scala_concurrent_BlockContext: 1,
  scala_concurrent_forkjoin_ForkJoinWorkerThread: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2;
//@ sourceMappingURL=ExecutionContextImpl$DefaultThreadFactory$$anon$2.js.map
