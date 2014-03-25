/** @constructor */
ScalaJS.c.scala_concurrent_ops$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.defaultRunner$1 = null
});
ScalaJS.c.scala_concurrent_ops$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_ops$.prototype.constructor = ScalaJS.c.scala_concurrent_ops$;
ScalaJS.c.scala_concurrent_ops$.prototype.defaultRunner__Lscala_concurrent_FutureTaskRunner = (function() {
  return this.defaultRunner$1
});
ScalaJS.c.scala_concurrent_ops$.prototype.scala$concurrent$ops$$tryCatch__Lscala_Function0__Lscala_util_Either = (function(body) {
  return ScalaJS.modules.scala_util_control_Exception().allCatch__Lscala_util_control_Exception$Catch().either__Lscala_Function0__Lscala_util_Either(body)
});
ScalaJS.c.scala_concurrent_ops$.prototype.getOrThrow__p1__Lscala_util_Either__O = (function(x) {
  return x.fold__Lscala_Function1__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      throw ScalaJS.unwrapJavaScriptException(x$1)
    })
  })()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.modules.scala_Predef().identity__O__O(x)
    })
  })()))
});
ScalaJS.c.scala_concurrent_ops$.prototype.spawn__Lscala_Function0__Lscala_concurrent_TaskRunner__V = (function(p, runner) {
  runner.execute__O__V(runner.functionAsTask__Lscala_Function0__O(p))
});
ScalaJS.c.scala_concurrent_ops$.prototype.spawn$default$2__Lscala_Function0__Lscala_concurrent_TaskRunner = (function(p) {
  return this.defaultRunner__Lscala_concurrent_FutureTaskRunner()
});
ScalaJS.c.scala_concurrent_ops$.prototype.future__Lscala_Function0__Lscala_concurrent_FutureTaskRunner__Lscala_Function0 = (function(p, runner) {
  return runner.futureAsFunction__O__Lscala_Function0(runner.submit__O__O(runner.functionAsTask__Lscala_Function0__O(p)))
});
ScalaJS.c.scala_concurrent_ops$.prototype.future$default$2__Lscala_Function0__Lscala_concurrent_FutureTaskRunner = (function(p) {
  return this.defaultRunner__Lscala_concurrent_FutureTaskRunner()
});
ScalaJS.c.scala_concurrent_ops$.prototype.par__Lscala_Function0__Lscala_Function0__Lscala_concurrent_TaskRunner__Lscala_Tuple2 = (function(xp, yp, runner) {
  var y = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  this.spawn__Lscala_Function0__Lscala_concurrent_TaskRunner__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(yp$1, y$1) {
    return (function() {
      y$1.set__O__V(ScalaJS.modules.scala_concurrent_ops().scala$concurrent$ops$$tryCatch__Lscala_Function0__Lscala_util_Either(yp$1));
      return ScalaJS.bV(undefined)
    })
  })(yp, y)), runner);
  return new ScalaJS.c.scala_Tuple2().init___O__O(xp.apply__O(), this.getOrThrow__p1__Lscala_util_Either__O(ScalaJS.as.scala_util_Either(y.get__O())))
});
ScalaJS.c.scala_concurrent_ops$.prototype.par$default$3__Lscala_Function0__Lscala_Function0__Lscala_concurrent_TaskRunner = (function(xp, yp) {
  return this.defaultRunner__Lscala_concurrent_FutureTaskRunner()
});
ScalaJS.c.scala_concurrent_ops$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_concurrent_ops = this;
  this.defaultRunner$1 = ScalaJS.modules.scala_concurrent_TaskRunners().threadRunner__Lscala_concurrent_FutureTaskRunner();
  return this
});
ScalaJS.c.scala_concurrent_ops$.prototype.par__Lscala_Function0__Lscala_Function0__Lscala_concurrent_TaskRunner__ = (function(xp, yp, runner) {
  return this.par__Lscala_Function0__Lscala_Function0__Lscala_concurrent_TaskRunner__Lscala_Tuple2(xp, yp, runner)
});
ScalaJS.c.scala_concurrent_ops$.prototype.future__Lscala_Function0__Lscala_concurrent_FutureTaskRunner__ = (function(p, runner$2) {
  return this.future__Lscala_Function0__Lscala_concurrent_FutureTaskRunner__Lscala_Function0(p, runner$2)
});
ScalaJS.c.scala_concurrent_ops$.prototype.spawn__Lscala_Function0__Lscala_concurrent_TaskRunner__ = (function(p$2, runner$3) {
  return ScalaJS.bV(this.spawn__Lscala_Function0__Lscala_concurrent_TaskRunner__V(p$2, runner$3))
});
ScalaJS.c.scala_concurrent_ops$.prototype.scala$concurrent$ops$$tryCatch__Lscala_Function0__ = (function(body) {
  return this.scala$concurrent$ops$$tryCatch__Lscala_Function0__Lscala_util_Either(body)
});
ScalaJS.c.scala_concurrent_ops$.prototype.defaultRunner__ = (function() {
  return this.defaultRunner__Lscala_concurrent_FutureTaskRunner()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_ops$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_ops$.prototype = ScalaJS.c.scala_concurrent_ops$.prototype;
ScalaJS.is.scala_concurrent_ops$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ops$)))
});
ScalaJS.as.scala_concurrent_ops$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ops$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ops")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ops$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ops$)))
});
ScalaJS.asArrayOf.scala_concurrent_ops$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ops$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ops;", depth)
  }
});
ScalaJS.data.scala_concurrent_ops$ = new ScalaJS.ClassTypeData({
  scala_concurrent_ops$: 0
}, false, "scala.concurrent.ops$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_ops$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_ops$.prototype.$classData = ScalaJS.data.scala_concurrent_ops$;
ScalaJS.moduleInstances.scala_concurrent_ops = undefined;
ScalaJS.modules.scala_concurrent_ops = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_ops)) {
    ScalaJS.moduleInstances.scala_concurrent_ops = new ScalaJS.c.scala_concurrent_ops$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_ops
});
//@ sourceMappingURL=ops$.js.map
