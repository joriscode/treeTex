/** @constructor */
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.constructor = ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$;
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.prepare__Lscala_concurrent_ExecutionContext = (function() {
  return ScalaJS.impls.scala_concurrent_ExecutionContext$class__prepare__Lscala_concurrent_ExecutionContext__Lscala_concurrent_ExecutionContext(this)
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.execute__Ljava_lang_Runnable__V = (function(runnable) {
  try {
    runnable.run__V()
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var t = $jsexc$;
    this.reportFailure__Ljava_lang_Throwable__V(t)
  }
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.reportFailure__Ljava_lang_Throwable__V = (function(t) {
  ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream().println__T__V(("Failure in async execution: " + t))
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_scalajs_concurrent_RunNowExecutionContext = this;
  ScalaJS.impls.scala_concurrent_ExecutionContext$class__$init$__Lscala_concurrent_ExecutionContext__V(this);
  return this
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.prepare__ = (function() {
  return this.prepare__Lscala_concurrent_ExecutionContext()
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.reportFailure__Ljava_lang_Throwable__ = (function(t) {
  return ScalaJS.bV(this.reportFailure__Ljava_lang_Throwable__V(t))
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.execute__Ljava_lang_Runnable__ = (function(runnable) {
  return ScalaJS.bV(this.execute__Ljava_lang_Runnable__V(runnable))
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_concurrent_RunNowExecutionContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_concurrent_RunNowExecutionContext$.prototype = ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype;
ScalaJS.is.scala_scalajs_concurrent_RunNowExecutionContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_concurrent_RunNowExecutionContext$)))
});
ScalaJS.as.scala_scalajs_concurrent_RunNowExecutionContext$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_concurrent_RunNowExecutionContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.concurrent.RunNowExecutionContext")
  }
});
ScalaJS.isArrayOf.scala_scalajs_concurrent_RunNowExecutionContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_concurrent_RunNowExecutionContext$)))
});
ScalaJS.asArrayOf.scala_scalajs_concurrent_RunNowExecutionContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_concurrent_RunNowExecutionContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.concurrent.RunNowExecutionContext;", depth)
  }
});
ScalaJS.data.scala_scalajs_concurrent_RunNowExecutionContext$ = new ScalaJS.ClassTypeData({
  scala_scalajs_concurrent_RunNowExecutionContext$: 0
}, false, "scala.scalajs.concurrent.RunNowExecutionContext$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_concurrent_RunNowExecutionContext$: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$.prototype.$classData = ScalaJS.data.scala_scalajs_concurrent_RunNowExecutionContext$;
ScalaJS.moduleInstances.scala_scalajs_concurrent_RunNowExecutionContext = undefined;
ScalaJS.modules.scala_scalajs_concurrent_RunNowExecutionContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_concurrent_RunNowExecutionContext)) {
    ScalaJS.moduleInstances.scala_scalajs_concurrent_RunNowExecutionContext = new ScalaJS.c.scala_scalajs_concurrent_RunNowExecutionContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_concurrent_RunNowExecutionContext
});
//@ sourceMappingURL=RunNowExecutionContext$.js.map
