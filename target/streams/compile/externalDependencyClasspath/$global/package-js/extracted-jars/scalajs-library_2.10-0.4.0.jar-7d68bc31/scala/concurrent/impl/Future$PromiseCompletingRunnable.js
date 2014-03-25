/** @constructor */
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.body$1 = null;
  this.promise$1 = null
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.constructor = ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable;
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.promise__Lscala_concurrent_impl_Promise$DefaultPromise = (function() {
  return this.promise$1
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.run__V = (function() {
  this.promise__Lscala_concurrent_impl_Promise$DefaultPromise().complete__Lscala_util_Try__Lscala_concurrent_Promise(this.liftedTree1$1__p1__Lscala_util_Try())
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.liftedTree1$1__p1__Lscala_util_Try = (function() {
  try {
    return new ScalaJS.c.scala_util_Success().init___O(this.body$1.apply__O())
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
    if ((!o11.isEmpty__Z())) {
      var e = ScalaJS.as.java_lang_Throwable(o11.get__O());
      return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(e)
    };
    throw ScalaJS.unwrapJavaScriptException(ex6)
  }
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.init___Lscala_Function0 = (function(body) {
  this.body$1 = body;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.promise$1 = new ScalaJS.c.scala_concurrent_impl_Promise$DefaultPromise().init___();
  return this
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.run__ = (function() {
  return ScalaJS.bV(this.run__V())
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.promise__ = (function() {
  return this.promise__Lscala_concurrent_impl_Promise$DefaultPromise()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_Future$PromiseCompletingRunnable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype = ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype;
ScalaJS.is.scala_concurrent_impl_Future$PromiseCompletingRunnable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_Future$PromiseCompletingRunnable)))
});
ScalaJS.as.scala_concurrent_impl_Future$PromiseCompletingRunnable = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_Future$PromiseCompletingRunnable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.Future$PromiseCompletingRunnable")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_Future$PromiseCompletingRunnable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_Future$PromiseCompletingRunnable)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_Future$PromiseCompletingRunnable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_Future$PromiseCompletingRunnable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.Future$PromiseCompletingRunnable;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_Future$PromiseCompletingRunnable = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_Future$PromiseCompletingRunnable: 0
}, false, "scala.concurrent.impl.Future$PromiseCompletingRunnable", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_Future$PromiseCompletingRunnable: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_Future$PromiseCompletingRunnable.prototype.$classData = ScalaJS.data.scala_concurrent_impl_Future$PromiseCompletingRunnable;
//@ sourceMappingURL=Future$PromiseCompletingRunnable.js.map
