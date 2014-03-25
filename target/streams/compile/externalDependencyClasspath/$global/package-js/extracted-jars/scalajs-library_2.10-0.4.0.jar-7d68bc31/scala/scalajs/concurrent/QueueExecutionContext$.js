/** @constructor */
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.constructor = ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$;
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.prepare__Lscala_concurrent_ExecutionContext = (function() {
  return ScalaJS.impls.scala_concurrent_ExecutionContext$class__prepare__Lscala_concurrent_ExecutionContext__Lscala_concurrent_ExecutionContext(this)
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.execute__Ljava_lang_Runnable__V = (function(runnable) {
  var lambda = (function(runnable$1) {
    return (function() {
      try {
        runnable$1.run__V()
      } catch ($jsexc$) {
        $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
        var t = $jsexc$;
        ScalaJS.modules.scala_scalajs_concurrent_QueueExecutionContext().reportFailure__Ljava_lang_Throwable__V(t)
      };
      return ScalaJS.bV(undefined)
    })
  })(runnable);
  ScalaJS.g["setTimeout"](lambda, 0)
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.reportFailure__Ljava_lang_Throwable__V = (function(t) {
  ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream().println__T__V(("Failure in async execution: " + t))
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_scalajs_concurrent_QueueExecutionContext = this;
  ScalaJS.impls.scala_concurrent_ExecutionContext$class__$init$__Lscala_concurrent_ExecutionContext__V(this);
  return this
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.prepare__ = (function() {
  return this.prepare__Lscala_concurrent_ExecutionContext()
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.reportFailure__Ljava_lang_Throwable__ = (function(t) {
  return ScalaJS.bV(this.reportFailure__Ljava_lang_Throwable__V(t))
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.execute__Ljava_lang_Runnable__ = (function(runnable) {
  return ScalaJS.bV(this.execute__Ljava_lang_Runnable__V(runnable))
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_concurrent_QueueExecutionContext$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_concurrent_QueueExecutionContext$.prototype = ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype;
ScalaJS.is.scala_scalajs_concurrent_QueueExecutionContext$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_concurrent_QueueExecutionContext$)))
});
ScalaJS.as.scala_scalajs_concurrent_QueueExecutionContext$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_concurrent_QueueExecutionContext$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.concurrent.QueueExecutionContext")
  }
});
ScalaJS.isArrayOf.scala_scalajs_concurrent_QueueExecutionContext$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_concurrent_QueueExecutionContext$)))
});
ScalaJS.asArrayOf.scala_scalajs_concurrent_QueueExecutionContext$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_concurrent_QueueExecutionContext$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.concurrent.QueueExecutionContext;", depth)
  }
});
ScalaJS.data.scala_scalajs_concurrent_QueueExecutionContext$ = new ScalaJS.ClassTypeData({
  scala_scalajs_concurrent_QueueExecutionContext$: 0
}, false, "scala.scalajs.concurrent.QueueExecutionContext$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_concurrent_QueueExecutionContext$: 1,
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$.prototype.$classData = ScalaJS.data.scala_scalajs_concurrent_QueueExecutionContext$;
ScalaJS.moduleInstances.scala_scalajs_concurrent_QueueExecutionContext = undefined;
ScalaJS.modules.scala_scalajs_concurrent_QueueExecutionContext = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_concurrent_QueueExecutionContext)) {
    ScalaJS.moduleInstances.scala_scalajs_concurrent_QueueExecutionContext = new ScalaJS.c.scala_scalajs_concurrent_QueueExecutionContext$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_concurrent_QueueExecutionContext
});
//@ sourceMappingURL=QueueExecutionContext$.js.map
