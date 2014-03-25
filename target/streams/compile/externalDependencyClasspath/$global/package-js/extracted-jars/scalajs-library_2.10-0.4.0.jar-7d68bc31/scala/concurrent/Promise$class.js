ScalaJS.impls.scala_concurrent_Promise$class__internalExecutor__Lscala_concurrent_Promise__Lscala_concurrent_ExecutionContext = (function($$this) {
  return ScalaJS.modules.scala_concurrent_Future$InternalCallbackExecutor()
});
ScalaJS.impls.scala_concurrent_Promise$class__complete__Lscala_concurrent_Promise__Lscala_util_Try__Lscala_concurrent_Promise = (function($$this, result) {
  if ($$this.tryComplete__Lscala_util_Try__Z(result)) {
    return $$this
  } else {
    throw new ScalaJS.c.java_lang_IllegalStateException().init___T("Promise already completed.")
  }
});
ScalaJS.impls.scala_concurrent_Promise$class__completeWith__Lscala_concurrent_Promise__Lscala_concurrent_Future__Lscala_concurrent_Promise = (function($$this, other) {
  other.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$1) {
      return arg$outer.complete__Lscala_util_Try__Lscala_concurrent_Promise(x$1)
    })
  })($$this)), ScalaJS.impls.scala_concurrent_Promise$class__internalExecutor__Lscala_concurrent_Promise__Lscala_concurrent_ExecutionContext($$this));
  return $$this
});
ScalaJS.impls.scala_concurrent_Promise$class__tryCompleteWith__Lscala_concurrent_Promise__Lscala_concurrent_Future__Lscala_concurrent_Promise = (function($$this, other) {
  other.onComplete__Lscala_Function1__Lscala_concurrent_ExecutionContext__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$2) {
      return ScalaJS.bZ(arg$outer.tryComplete__Lscala_util_Try__Z(x$2))
    })
  })($$this)), ScalaJS.impls.scala_concurrent_Promise$class__internalExecutor__Lscala_concurrent_Promise__Lscala_concurrent_ExecutionContext($$this));
  return $$this
});
ScalaJS.impls.scala_concurrent_Promise$class__success__Lscala_concurrent_Promise__O__Lscala_concurrent_Promise = (function($$this, v) {
  return $$this.complete__Lscala_util_Try__Lscala_concurrent_Promise(new ScalaJS.c.scala_util_Success().init___O(v))
});
ScalaJS.impls.scala_concurrent_Promise$class__trySuccess__Lscala_concurrent_Promise__O__Z = (function($$this, value) {
  return $$this.tryComplete__Lscala_util_Try__Z(new ScalaJS.c.scala_util_Success().init___O(value))
});
ScalaJS.impls.scala_concurrent_Promise$class__failure__Lscala_concurrent_Promise__Ljava_lang_Throwable__Lscala_concurrent_Promise = (function($$this, t) {
  return $$this.complete__Lscala_util_Try__Lscala_concurrent_Promise(new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(t))
});
ScalaJS.impls.scala_concurrent_Promise$class__tryFailure__Lscala_concurrent_Promise__Ljava_lang_Throwable__Z = (function($$this, t) {
  return $$this.tryComplete__Lscala_util_Try__Z(new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(t))
});
ScalaJS.impls.scala_concurrent_Promise$class__$init$__Lscala_concurrent_Promise__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Promise$class.js.map
