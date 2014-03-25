/** @constructor */
ScalaJS.c.scala_concurrent_ThreadRunner = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.constructor = ScalaJS.c.scala_concurrent_ThreadRunner;
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.functionAsTask__Lscala_Function0__Lscala_Function0 = (function(fun) {
  return fun
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.futureAsFunction__Lscala_Function0__Lscala_Function0 = (function(x) {
  return x
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.scala$concurrent$ThreadRunner$$tryCatch__Lscala_Function0__Lscala_util_Either = (function(body) {
  try {
    return ScalaJS.modules.scala_package().Right__Lscala_util_Right$().apply__O__Lscala_util_Right(body.apply__O())
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    if (ScalaJS.is.java_lang_Exception($jsexc$)) {
      var ex = $jsexc$;
      return ScalaJS.modules.scala_package().Left__Lscala_util_Left$().apply__O__Lscala_util_Left(ex)
    } else {
      throw ScalaJS.unwrapJavaScriptException($jsexc$)
    }
  }
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.execute__Lscala_Function0__V = (function(task) {
  var runnable = new ScalaJS.c.scala_concurrent_ThreadRunner$$anon$1().init___Lscala_concurrent_ThreadRunner__Lscala_Function0(this, task);
  new ScalaJS.c.java_lang_Thread().init___Ljava_lang_Runnable(runnable).start__V()
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.submit__Lscala_Function0__Lscala_Function0 = (function(task) {
  var result = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  var runnable = new ScalaJS.c.scala_concurrent_ThreadRunner$$anon$2().init___Lscala_concurrent_ThreadRunner__Lscala_Function0__Lscala_concurrent_SyncVar(this, task, result);
  new ScalaJS.c.java_lang_Thread().init___Ljava_lang_Runnable(runnable).start__V();
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(result$1) {
    return (function() {
      return ScalaJS.as.scala_util_Either(result$1.get__O()).fold__Lscala_Function1__Lscala_Function1__O(new ScalaJS.c.scala_concurrent_ThreadRunner$$anonfun$submit$1$$anonfun$apply$1().init___Lscala_concurrent_ThreadRunner$$anonfun$submit$1(this), new ScalaJS.c.scala_concurrent_ThreadRunner$$anonfun$submit$1$$anonfun$apply$2().init___Lscala_concurrent_ThreadRunner$$anonfun$submit$1(this))
    })
  })(result))
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.managedBlock__Lscala_concurrent_ManagedBlocker__V = (function(blocker) {
  blocker.block__Z()
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.shutdown__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.submit__O__O = (function(task) {
  return this.submit__Lscala_Function0__Lscala_Function0(ScalaJS.as.scala_Function0(task))
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.execute__O__V = (function(task) {
  this.execute__Lscala_Function0__V(ScalaJS.as.scala_Function0(task))
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.futureAsFunction__O__Lscala_Function0 = (function(x) {
  return this.futureAsFunction__Lscala_Function0__Lscala_Function0(ScalaJS.as.scala_Function0(x))
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.functionAsTask__Lscala_Function0__O = (function(fun) {
  return this.functionAsTask__Lscala_Function0__Lscala_Function0(fun)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.shutdown__ = (function() {
  return ScalaJS.bV(this.shutdown__V())
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.managedBlock__Lscala_concurrent_ManagedBlocker__ = (function(blocker) {
  return ScalaJS.bV(this.managedBlock__Lscala_concurrent_ManagedBlocker__V(blocker))
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.submit__Lscala_Function0__ = (function(task) {
  return this.submit__Lscala_Function0__Lscala_Function0(task)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.execute__Lscala_Function0__ = (function(task$2) {
  return ScalaJS.bV(this.execute__Lscala_Function0__V(task$2))
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.scala$concurrent$ThreadRunner$$tryCatch__Lscala_Function0__ = (function(body) {
  return this.scala$concurrent$ThreadRunner$$tryCatch__Lscala_Function0__Lscala_util_Either(body)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.futureAsFunction__Lscala_Function0__ = (function(x) {
  return this.futureAsFunction__Lscala_Function0__Lscala_Function0(x)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.functionAsTask__Lscala_Function0__ = (function(fun) {
  return this.functionAsTask__Lscala_Function0__Lscala_Function0(fun)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.submit__O__ = (function(task$3) {
  return this.submit__O__O(task$3)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.futureAsFunction__O__ = (function(x$2) {
  return this.futureAsFunction__O__Lscala_Function0(x$2)
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.execute__O__ = (function(task$4) {
  return ScalaJS.bV(this.execute__O__V(task$4))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_ThreadRunner = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_ThreadRunner.prototype = ScalaJS.c.scala_concurrent_ThreadRunner.prototype;
ScalaJS.is.scala_concurrent_ThreadRunner = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ThreadRunner)))
});
ScalaJS.as.scala_concurrent_ThreadRunner = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ThreadRunner(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ThreadRunner")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ThreadRunner = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ThreadRunner)))
});
ScalaJS.asArrayOf.scala_concurrent_ThreadRunner = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ThreadRunner(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ThreadRunner;", depth)
  }
});
ScalaJS.data.scala_concurrent_ThreadRunner = new ScalaJS.ClassTypeData({
  scala_concurrent_ThreadRunner: 0
}, false, "scala.concurrent.ThreadRunner", ScalaJS.data.java_lang_Object, {
  scala_concurrent_ThreadRunner: 1,
  scala_concurrent_FutureTaskRunner: 1,
  scala_concurrent_TaskRunner: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_ThreadRunner.prototype.$classData = ScalaJS.data.scala_concurrent_ThreadRunner;
//@ sourceMappingURL=ThreadRunner.js.map
