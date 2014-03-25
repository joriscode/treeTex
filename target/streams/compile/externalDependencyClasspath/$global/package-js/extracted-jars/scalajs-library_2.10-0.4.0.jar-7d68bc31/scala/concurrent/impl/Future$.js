/** @constructor */
ScalaJS.c.scala_concurrent_impl_Future$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_impl_Future$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_Future$.prototype.constructor = ScalaJS.c.scala_concurrent_impl_Future$;
ScalaJS.c.scala_concurrent_impl_Future$.prototype.apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future = (function(body, executor) {
  var runnable$3 = new ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable().init___Lscala_Function0(body);
  executor.prepare__Lscala_concurrent_ExecutionContext().execute__Ljava_lang_Runnable__V(runnable$3);
  return runnable$3.promise__Lscala_concurrent_impl_Promise$DefaultPromise().future__Lscala_concurrent_impl_Promise()
});
ScalaJS.c.scala_concurrent_impl_Future$.prototype.apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__ = (function(body, executor) {
  return this.apply__Lscala_Function0__Lscala_concurrent_ExecutionContext__Lscala_concurrent_Future(body, executor)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_Future$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_Future$.prototype = ScalaJS.c.scala_concurrent_impl_Future$.prototype;
ScalaJS.is.scala_concurrent_impl_Future$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_Future$)))
});
ScalaJS.as.scala_concurrent_impl_Future$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_Future$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.Future")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_Future$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_Future$)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_Future$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_Future$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.Future;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_Future$ = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_Future$: 0
}, false, "scala.concurrent.impl.Future$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_Future$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_Future$.prototype.$classData = ScalaJS.data.scala_concurrent_impl_Future$;
ScalaJS.moduleInstances.scala_concurrent_impl_Future = undefined;
ScalaJS.modules.scala_concurrent_impl_Future = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_impl_Future)) {
    ScalaJS.moduleInstances.scala_concurrent_impl_Future = new ScalaJS.c.scala_concurrent_impl_Future$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_impl_Future
});
//@ sourceMappingURL=Future$.js.map
