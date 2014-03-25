/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.call(this);
  this.pipe$3 = null;
  this.currentSink$3 = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeThread();
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink;
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype.run__V = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = ScalaJS.as.scala_Option(_$this.currentSink$3.get__O());
    matchEnd5: {
      if (ScalaJS.is.scala_Some(x1)) {
        var x2 = ScalaJS.as.scala_Some(x1);
        var sink = ScalaJS.as.java_io_OutputStream(x2.x__O());
        try {
          _$this.runloop__Ljava_io_InputStream__Ljava_io_OutputStream__V(_$this.pipe$3, sink)
        } finally {
          _$this.currentSink$3.unset__V()
        };
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
        _$this.currentSink$3.unset__V();
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype.scala$sys$process$ProcessImpl$PipeSink$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype.init___Lscala_sys_process_Process$__Ljava_io_PipedInputStream__Lscala_concurrent_SyncVar__Lscala_Function0 = (function($$outer, pipe, currentSink, label) {
  this.pipe$3 = pipe;
  this.currentSink$3 = currentSink;
  ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.init___Lscala_sys_process_Process$__Z__Lscala_Function0.call(this, $$outer, true, label);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype.scala$sys$process$ProcessImpl$PipeSink$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$PipeSink$$$outer__Lscala_sys_process_Process$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeSink = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeSink.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$PipeSink = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$PipeSink)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$PipeSink = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$PipeSink(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$PipeSink")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipeSink = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$PipeSink)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$PipeSink = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipeSink(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$PipeSink;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$PipeSink = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$PipeSink: 0
}, false, "scala.sys.process.ProcessImpl$PipeSink", ScalaJS.data.scala_sys_process_ProcessImpl$PipeThread, {
  scala_sys_process_ProcessImpl$PipeSink: 1,
  scala_sys_process_ProcessImpl$PipeThread: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSink.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$PipeSink;
//@ sourceMappingURL=ProcessImpl$PipeSink.js.map
