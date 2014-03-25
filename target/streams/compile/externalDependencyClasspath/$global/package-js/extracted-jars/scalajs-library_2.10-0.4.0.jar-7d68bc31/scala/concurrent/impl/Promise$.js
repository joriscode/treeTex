/** @constructor */
ScalaJS.c.scala_concurrent_impl_Promise$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_impl_Promise$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_impl_Promise$.prototype.constructor = ScalaJS.c.scala_concurrent_impl_Promise$;
ScalaJS.c.scala_concurrent_impl_Promise$.prototype.scala$concurrent$impl$Promise$$resolveTry__Lscala_util_Try__Lscala_util_Try = (function(source) {
  var x1 = source;
  if (ScalaJS.is.scala_util_Failure(x1)) {
    var x2 = ScalaJS.as.scala_util_Failure(x1);
    var t = x2.exception__Ljava_lang_Throwable();
    return this.resolver__p1__Ljava_lang_Throwable__Lscala_util_Try(t)
  };
  return source
});
ScalaJS.c.scala_concurrent_impl_Promise$.prototype.resolver__p1__Ljava_lang_Throwable__Lscala_util_Try = (function(throwable) {
  var x1 = throwable;
  if (ScalaJS.is.scala_runtime_NonLocalReturnControl(x1)) {
    var x2 = ScalaJS.as.scala_runtime_NonLocalReturnControl(x1);
    return new ScalaJS.c.scala_util_Success().init___O(x2.value__O())
  };
  if (ScalaJS.is.scala_util_control_ControlThrowable(x1)) {
    var x3 = ScalaJS.as.scala_util_control_ControlThrowable(x1);
    return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.java_util_concurrent_ExecutionException().init___T__Ljava_lang_Throwable("Boxed ControlThrowable", ScalaJS.as.java_lang_Throwable(x3)))
  };
  if (ScalaJS.is.java_lang_InterruptedException(x1)) {
    var x4 = ScalaJS.as.java_lang_InterruptedException(x1);
    return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.java_util_concurrent_ExecutionException().init___T__Ljava_lang_Throwable("Boxed InterruptedException", x4))
  };
  if (ScalaJS.is.java_lang_Error(x1)) {
    var x5 = ScalaJS.as.java_lang_Error(x1);
    return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(new ScalaJS.c.java_util_concurrent_ExecutionException().init___T__Ljava_lang_Throwable("Boxed Error", x5))
  };
  return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(x1)
});
ScalaJS.c.scala_concurrent_impl_Promise$.prototype.scala$concurrent$impl$Promise$$resolveTry__Lscala_util_Try__ = (function(source) {
  return this.scala$concurrent$impl$Promise$$resolveTry__Lscala_util_Try__Lscala_util_Try(source)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_Promise$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_Promise$.prototype = ScalaJS.c.scala_concurrent_impl_Promise$.prototype;
ScalaJS.is.scala_concurrent_impl_Promise$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_Promise$)))
});
ScalaJS.as.scala_concurrent_impl_Promise$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_Promise$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.Promise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_Promise$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_Promise$)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_Promise$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_Promise$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.Promise;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_Promise$ = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_Promise$: 0
}, false, "scala.concurrent.impl.Promise$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_impl_Promise$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_Promise$.prototype.$classData = ScalaJS.data.scala_concurrent_impl_Promise$;
ScalaJS.moduleInstances.scala_concurrent_impl_Promise = undefined;
ScalaJS.modules.scala_concurrent_impl_Promise = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_impl_Promise)) {
    ScalaJS.moduleInstances.scala_concurrent_impl_Promise = new ScalaJS.c.scala_concurrent_impl_Promise$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_impl_Promise
});
//@ sourceMappingURL=Promise$.js.map
