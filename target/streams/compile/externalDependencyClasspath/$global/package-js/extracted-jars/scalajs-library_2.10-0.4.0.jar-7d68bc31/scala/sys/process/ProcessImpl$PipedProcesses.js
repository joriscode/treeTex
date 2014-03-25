/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.call(this);
  this.scala$sys$process$ProcessImpl$PipedProcesses$$a$f = null;
  this.scala$sys$process$ProcessImpl$PipedProcesses$$b$f = null;
  this.defaultIO$3 = null;
  this.toError$3 = false
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$CompoundProcess();
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses;
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.runAndExitValue__Lscala_Option = (function() {
  var currentSource = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  var pipeOut = new ScalaJS.c.java_io_PipedOutputStream().init___();
  var source = new ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource().init___Lscala_sys_process_Process$__Lscala_concurrent_SyncVar__Ljava_io_PipedOutputStream__Lscala_Function0(this.scala$sys$process$ProcessImpl$PipedProcesses$$$outer__Lscala_sys_process_Process$(), currentSource, pipeOut, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.objectToString(arg$outer.scala$sys$process$ProcessImpl$PipedProcesses$$a$f)
    })
  })(this)));
  source.start__V();
  var pipeIn = new ScalaJS.c.java_io_PipedInputStream().init___Ljava_io_PipedOutputStream(pipeOut);
  var currentSink = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  var sink = new ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink().init___Lscala_sys_process_Process$__Ljava_io_PipedInputStream__Lscala_concurrent_SyncVar__Lscala_Function0(this.scala$sys$process$ProcessImpl$PipedProcesses$$$outer__Lscala_sys_process_Process$(), pipeIn, currentSink, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.objectToString(arg$outer.scala$sys$process$ProcessImpl$PipedProcesses$$b$f)
    })
  })(this)));
  sink.start__V();
  if (this.toError$3) {
    var firstIO = this.defaultIO$3.withError__Lscala_Function1__Lscala_sys_process_ProcessIO(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, currentSource$1) {
      return (function(fromOutput) {
        arg$outer.scala$sys$process$ProcessImpl$PipedProcesses$$handleOutOrError$1__Ljava_io_InputStream__Lscala_concurrent_SyncVar__V(fromOutput, currentSource$1);
        return ScalaJS.bV(undefined)
      })
    })(this, currentSource)))
  } else {
    var firstIO = this.defaultIO$3.withOutput__Lscala_Function1__Lscala_sys_process_ProcessIO(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, currentSource$1) {
      return (function(fromOutput) {
        arg$outer.scala$sys$process$ProcessImpl$PipedProcesses$$handleOutOrError$1__Ljava_io_InputStream__Lscala_concurrent_SyncVar__V(fromOutput, currentSource$1);
        return ScalaJS.bV(undefined)
      })
    })(this, currentSource)))
  };
  var secondIO = this.defaultIO$3.withInput__Lscala_Function1__Lscala_sys_process_ProcessIO(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(currentSink$1) {
    return (function(toInput) {
      currentSink$1.put__O__V(new ScalaJS.c.scala_Some().init___O(toInput));
      return ScalaJS.bV(undefined)
    })
  })(currentSink)));
  var second = this.scala$sys$process$ProcessImpl$PipedProcesses$$b$f.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(secondIO);
  var first = this.scala$sys$process$ProcessImpl$PipedProcesses$$a$f.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(firstIO);
  try {
    return this.runInterruptible__Lscala_Function0__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, currentSource$1, currentSink$1, second$2, first$2) {
      return (function() {
        var exit1 = first$2.exitValue__I();
        currentSource$1.put__O__V(ScalaJS.modules.scala_None());
        currentSink$1.put__O__V(ScalaJS.modules.scala_None());
        var exit2 = second$2.exitValue__I();
        if (arg$outer.scala$sys$process$ProcessImpl$PipedProcesses$$b$f.hasExitValue__Z()) {
          var jsx$1 = exit2
        } else {
          var jsx$1 = exit1
        };
        return ScalaJS.bI(jsx$1)
      })
    })(this, currentSource, currentSink, second, first)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(second$2, first$2) {
      return (function() {
        first$2.destroy__V();
        second$2.destroy__V();
        return ScalaJS.bV(undefined)
      })
    })(second, first)))
  } finally {
    ScalaJS.modules.scala_sys_process_BasicIO().close__Ljava_io_Closeable__V(pipeIn);
    ScalaJS.modules.scala_sys_process_BasicIO().close__Ljava_io_Closeable__V(pipeOut)
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.scala$sys$process$ProcessImpl$PipedProcesses$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.scala$sys$process$ProcessImpl$PipedProcesses$$handleOutOrError$1__Ljava_io_InputStream__Lscala_concurrent_SyncVar__V = (function(fromOutput, currentSource$1) {
  currentSource$1.put__O__V(new ScalaJS.c.scala_Some().init___O(fromOutput))
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO__Z = (function($$outer, a, b, defaultIO, toError) {
  this.scala$sys$process$ProcessImpl$PipedProcesses$$a$f = a;
  this.scala$sys$process$ProcessImpl$PipedProcesses$$b$f = b;
  this.defaultIO$3 = defaultIO;
  this.toError$3 = toError;
  ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.init___Lscala_sys_process_Process$.call(this, $$outer);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.scala$sys$process$ProcessImpl$PipedProcesses$$handleOutOrError$1__Ljava_io_InputStream__Lscala_concurrent_SyncVar__ = (function(fromOutput, currentSource$1) {
  return ScalaJS.bV(this.scala$sys$process$ProcessImpl$PipedProcesses$$handleOutOrError$1__Ljava_io_InputStream__Lscala_concurrent_SyncVar__V(fromOutput, currentSource$1))
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.scala$sys$process$ProcessImpl$PipedProcesses$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$PipedProcesses$$$outer__Lscala_sys_process_Process$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipedProcesses = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipedProcesses.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$PipedProcesses = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$PipedProcesses)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$PipedProcesses = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$PipedProcesses(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$PipedProcesses")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipedProcesses = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$PipedProcesses)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$PipedProcesses = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipedProcesses(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$PipedProcesses;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$PipedProcesses = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$PipedProcesses: 0
}, false, "scala.sys.process.ProcessImpl$PipedProcesses", ScalaJS.data.scala_sys_process_ProcessImpl$CompoundProcess, {
  scala_sys_process_ProcessImpl$PipedProcesses: 1,
  scala_sys_process_ProcessImpl$CompoundProcess: 1,
  scala_sys_process_ProcessImpl$BasicProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$PipedProcesses;
//@ sourceMappingURL=ProcessImpl$PipedProcesses.js.map
