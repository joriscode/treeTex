/** @constructor */
ScalaJS.c.scala_concurrent_impl_CallbackRunnable = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.executor$1 = null;
  this.onComplete$1 = null;
  this.value$1 = null
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.constructor = ScalaJS.c.scala_concurrent_impl_CallbackRunnable;
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.executor__Lscala_concurrent_ExecutionContext = (function() {
  return this.executor$1
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.onComplete__Lscala_Function1 = (function() {
  return this.onComplete$1
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.value__Lscala_util_Try = (function() {
  return this.value$1
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.value$und$eq__Lscala_util_Try__V = (function(x$1) {
  this.value$1 = x$1
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.run__V = (function() {
  ScalaJS.modules.scala_Predef().require__Z__V((this.value__Lscala_util_Try() !== null));
  try {
    this.onComplete__Lscala_Function1().apply__O__O(this.value__Lscala_util_Try())
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    matchEnd8: {
      var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
      if ((!o11.isEmpty__Z())) {
        var e = ScalaJS.as.java_lang_Throwable(o11.get__O());
        this.executor__Lscala_concurrent_ExecutionContext().reportFailure__Ljava_lang_Throwable__V(e);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      throw ScalaJS.unwrapJavaScriptException(ex6)
    }
  }
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.executeWithValue__Lscala_util_Try__V = (function(v) {
  ScalaJS.modules.scala_Predef().require__Z__V((this.value__Lscala_util_Try() === null));
  this.value$und$eq__Lscala_util_Try__V(v);
  try {
    this.executor__Lscala_concurrent_ExecutionContext().execute__Ljava_lang_Runnable__V(this)
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var ex6 = $jsexc$;
    var x4 = ex6;
    matchEnd8: {
      var o11 = ScalaJS.modules.scala_util_control_NonFatal().unapply__Ljava_lang_Throwable__Lscala_Option(x4);
      if ((!o11.isEmpty__Z())) {
        var t = ScalaJS.as.java_lang_Throwable(o11.get__O());
        this.executor__Lscala_concurrent_ExecutionContext().reportFailure__Ljava_lang_Throwable__V(t);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      throw ScalaJS.unwrapJavaScriptException(ex6)
    }
  }
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.init___Lscala_concurrent_ExecutionContext__Lscala_Function1 = (function(executor, onComplete) {
  this.executor$1 = executor;
  this.onComplete$1 = onComplete;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.value$1 = null;
  return this
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.executeWithValue__Lscala_util_Try__ = (function(v) {
  return ScalaJS.bV(this.executeWithValue__Lscala_util_Try__V(v))
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.run__ = (function() {
  return ScalaJS.bV(this.run__V())
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.value$und$eq__Lscala_util_Try__ = (function(x$1) {
  return ScalaJS.bV(this.value$und$eq__Lscala_util_Try__V(x$1))
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.value__ = (function() {
  return this.value__Lscala_util_Try()
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.onComplete__ = (function() {
  return this.onComplete__Lscala_Function1()
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.executor__ = (function() {
  return this.executor__Lscala_concurrent_ExecutionContext()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_CallbackRunnable = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_CallbackRunnable.prototype = ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype;
ScalaJS.is.scala_concurrent_impl_CallbackRunnable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_CallbackRunnable)))
});
ScalaJS.as.scala_concurrent_impl_CallbackRunnable = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_CallbackRunnable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.CallbackRunnable")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_CallbackRunnable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_CallbackRunnable)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_CallbackRunnable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_CallbackRunnable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.CallbackRunnable;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_CallbackRunnable = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_CallbackRunnable: 0
}, false, "scala.concurrent.impl.CallbackRunnable", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_CallbackRunnable: 1,
  scala_concurrent_OnCompleteRunnable: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_CallbackRunnable.prototype.$classData = ScalaJS.data.scala_concurrent_impl_CallbackRunnable;
//@ sourceMappingURL=CallbackRunnable.js.map
