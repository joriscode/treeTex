/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread = (function() {
  ScalaJS.c.java_lang_Thread.call(this);
  this.isSink$2 = false;
  this.labelFn$2 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype = new ScalaJS.inheritable.java_lang_Thread();
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread;
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.runloop__Ljava_io_InputStream__Ljava_io_OutputStream__V = (function(src, dst) {
  try {
    ScalaJS.modules.scala_sys_process_BasicIO().transferFully__Ljava_io_InputStream__Ljava_io_OutputStream__V(src, dst)
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var x2 = $jsexc$;
    var catchExpr2 = ScalaJS.modules.scala_sys_process_processInternal().ioFailure__Lscala_Function1__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(e) {
        arg$outer.scala$sys$process$ProcessImpl$PipeThread$$ioHandler__Ljava_io_IOException__V(e);
        return ScalaJS.bV(undefined)
      })
    })(this)));
    if (catchExpr2.isDefinedAt__O__Z(x2)) {
      catchExpr2.apply__O__O(x2)
    } else {
      throw ScalaJS.unwrapJavaScriptException(x2)
    }
  } finally {
    var jsx$2 = ScalaJS.modules.scala_sys_process_BasicIO();
    if (this.isSink$2) {
      var jsx$1 = dst
    } else {
      var jsx$1 = src
    };
    jsx$2.close__Ljava_io_Closeable__V(jsx$1)
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.scala$sys$process$ProcessImpl$PipeThread$$ioHandler__Ljava_io_IOException__V = (function(e) {
  ScalaJS.modules.scala_Predef().println__O__V(((("I/O error " + e.getMessage__T()) + " for process: ") + this.labelFn$2.apply__O()));
  e.printStackTrace__V()
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.scala$sys$process$ProcessImpl$PipeThread$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.init___Lscala_sys_process_Process$__Z__Lscala_Function0 = (function($$outer, isSink, labelFn) {
  this.isSink$2 = isSink;
  this.labelFn$2 = labelFn;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Thread.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.scala$sys$process$ProcessImpl$PipeThread$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$PipeThread$$$outer__Lscala_sys_process_Process$()
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.scala$sys$process$ProcessImpl$PipeThread$$ioHandler__Ljava_io_IOException__ = (function(e) {
  return ScalaJS.bV(this.scala$sys$process$ProcessImpl$PipeThread$$ioHandler__Ljava_io_IOException__V(e))
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.runloop__Ljava_io_InputStream__Ljava_io_OutputStream__ = (function(src, dst) {
  return ScalaJS.bV(this.runloop__Ljava_io_InputStream__Ljava_io_OutputStream__V(src, dst))
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeThread = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeThread.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$PipeThread = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$PipeThread)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$PipeThread = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$PipeThread(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$PipeThread")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipeThread = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$PipeThread)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$PipeThread = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipeThread(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$PipeThread;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$PipeThread = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$PipeThread: 0
}, false, "scala.sys.process.ProcessImpl$PipeThread", ScalaJS.data.java_lang_Thread, {
  scala_sys_process_ProcessImpl$PipeThread: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$PipeThread;
//@ sourceMappingURL=ProcessImpl$PipeThread.js.map
