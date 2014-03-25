/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.daemonic$1 = false;
  this.$$outer$f = null
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.wire__Ljava_lang_Thread__Ljava_lang_Thread = (function(thread) {
  thread.setDaemon__Z__V(this.daemonic$1);
  thread.setUncaughtExceptionHandler__Ljava_lang_Thread$UncaughtExceptionHandler__V(this.scala$concurrent$impl$ExecutionContextImpl$DefaultThreadFactory$$$outer__Lscala_concurrent_impl_ExecutionContextImpl().scala$concurrent$impl$ExecutionContextImpl$$uncaughtExceptionHandler$f);
  return thread
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.newThread__Ljava_lang_Runnable__Ljava_lang_Thread = (function(runnable) {
  return this.wire__Ljava_lang_Thread__Ljava_lang_Thread(new ScalaJS.c.java_lang_Thread().init___Ljava_lang_Runnable(runnable))
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.newThread__Lscala_concurrent_forkjoin_ForkJoinPool__Lscala_concurrent_forkjoin_ForkJoinWorkerThread = (function(fjp) {
  return ScalaJS.as.scala_concurrent_forkjoin_ForkJoinWorkerThread(this.wire__Ljava_lang_Thread__Ljava_lang_Thread(new ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory$$anon$2().init___Lscala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory__Lscala_concurrent_forkjoin_ForkJoinPool(this, fjp)))
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.scala$concurrent$impl$ExecutionContextImpl$DefaultThreadFactory$$$outer__Lscala_concurrent_impl_ExecutionContextImpl = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.init___Lscala_concurrent_impl_ExecutionContextImpl__Z = (function($$outer, daemonic) {
  this.daemonic$1 = daemonic;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.scala$concurrent$impl$ExecutionContextImpl$DefaultThreadFactory$$$outer__ = (function() {
  return this.scala$concurrent$impl$ExecutionContextImpl$DefaultThreadFactory$$$outer__Lscala_concurrent_impl_ExecutionContextImpl()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.newThread__Lscala_concurrent_forkjoin_ForkJoinPool__ = (function(fjp) {
  return this.newThread__Lscala_concurrent_forkjoin_ForkJoinPool__Lscala_concurrent_forkjoin_ForkJoinWorkerThread(fjp)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.newThread__Ljava_lang_Runnable__ = (function(runnable) {
  return this.newThread__Ljava_lang_Runnable__Ljava_lang_Thread(runnable)
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.wire__Ljava_lang_Thread__ = (function(thread) {
  return this.wire__Ljava_lang_Thread__Ljava_lang_Thread(thread)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$DefaultThreadFactory", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory: 1,
  scala_concurrent_forkjoin_ForkJoinPool$ForkJoinWorkerThreadFactory: 1,
  java_util_concurrent_ThreadFactory: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$DefaultThreadFactory;
//@ sourceMappingURL=ExecutionContextImpl$DefaultThreadFactory.js.map
