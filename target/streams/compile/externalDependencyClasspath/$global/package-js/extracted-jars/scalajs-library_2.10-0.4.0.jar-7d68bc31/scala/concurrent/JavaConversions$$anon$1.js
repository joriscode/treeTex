/** @constructor */
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1 = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.exec$1$1 = null
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.constructor = ScalaJS.c.scala_concurrent_JavaConversions$$anon$1;
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.functionAsTask__Lscala_Function0__Ljava_util_concurrent_Callable = (function(fun) {
  return ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__functionAsTask__Lscala_concurrent_ThreadPoolRunner__Lscala_Function0__Ljava_util_concurrent_Callable(this, fun)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.futureAsFunction__Ljava_util_concurrent_Future__Lscala_Function0 = (function(x) {
  return ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__futureAsFunction__Lscala_concurrent_ThreadPoolRunner__Ljava_util_concurrent_Future__Lscala_Function0(this, x)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future = (function(task) {
  return ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__submit__Lscala_concurrent_ThreadPoolRunner__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future(this, task)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.execute__Ljava_util_concurrent_Callable__V = (function(task) {
  ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__execute__Lscala_concurrent_ThreadPoolRunner__Ljava_util_concurrent_Callable__V(this, task)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.managedBlock__Lscala_concurrent_ManagedBlocker__V = (function(blocker) {
  ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__managedBlock__Lscala_concurrent_ThreadPoolRunner__Lscala_concurrent_ManagedBlocker__V(this, blocker)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.executor__Ljava_util_concurrent_ExecutorService = (function() {
  return this.exec$1$1
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.shutdown__V = (function() {
  this.exec$1$1.shutdown__V()
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.execute__O__V = (function(task) {
  this.execute__Ljava_util_concurrent_Callable__V(ScalaJS.as.java_util_concurrent_Callable(task))
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.submit__O__O = (function(task) {
  return this.submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future(ScalaJS.as.java_util_concurrent_Callable(task))
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.futureAsFunction__O__Lscala_Function0 = (function(x) {
  return this.futureAsFunction__Ljava_util_concurrent_Future__Lscala_Function0(ScalaJS.as.java_util_concurrent_Future(x))
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.functionAsTask__Lscala_Function0__O = (function(fun) {
  return this.functionAsTask__Lscala_Function0__Ljava_util_concurrent_Callable(fun)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.init___Ljava_util_concurrent_ExecutorService = (function(exec$1) {
  this.exec$1$1 = exec$1;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_concurrent_ThreadPoolRunner$class__$init$__Lscala_concurrent_ThreadPoolRunner__V(this);
  return this
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.managedBlock__Lscala_concurrent_ManagedBlocker__ = (function(blocker) {
  return ScalaJS.bV(this.managedBlock__Lscala_concurrent_ManagedBlocker__V(blocker))
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.execute__Ljava_util_concurrent_Callable__ = (function(task) {
  return this.execute__Ljava_util_concurrent_Callable__V(task)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.submit__Ljava_util_concurrent_Callable__ = (function(task$2) {
  return this.submit__Ljava_util_concurrent_Callable__Ljava_util_concurrent_Future(task$2)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.futureAsFunction__Ljava_util_concurrent_Future__ = (function(x) {
  return this.futureAsFunction__Ljava_util_concurrent_Future__Lscala_Function0(x)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.functionAsTask__Lscala_Function0__ = (function(fun) {
  return this.functionAsTask__Lscala_Function0__Ljava_util_concurrent_Callable(fun)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.shutdown__ = (function() {
  return ScalaJS.bV(this.shutdown__V())
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.executor__ = (function() {
  return this.executor__Ljava_util_concurrent_ExecutorService()
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.submit__O__ = (function(task$3) {
  return this.submit__O__O(task$3)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.futureAsFunction__O__ = (function(x$2) {
  return this.futureAsFunction__O__Lscala_Function0(x$2)
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.execute__O__ = (function(task$4) {
  return ScalaJS.bV(this.execute__O__V(task$4))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_JavaConversions$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_JavaConversions$$anon$1.prototype = ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype;
ScalaJS.is.scala_concurrent_JavaConversions$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_JavaConversions$$anon$1)))
});
ScalaJS.as.scala_concurrent_JavaConversions$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_JavaConversions$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.JavaConversions$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_JavaConversions$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_JavaConversions$$anon$1)))
});
ScalaJS.asArrayOf.scala_concurrent_JavaConversions$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_JavaConversions$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.JavaConversions$$anon$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_JavaConversions$$anon$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_JavaConversions$$anon$1: 0
}, false, "scala.concurrent.JavaConversions$$anon$1", ScalaJS.data.java_lang_Object, {
  scala_concurrent_JavaConversions$$anon$1: 1,
  scala_concurrent_ThreadPoolRunner: 1,
  scala_concurrent_FutureTaskRunner: 1,
  scala_concurrent_TaskRunner: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_JavaConversions$$anon$1.prototype.$classData = ScalaJS.data.scala_concurrent_JavaConversions$$anon$1;
//@ sourceMappingURL=JavaConversions$$anon$1.js.map
