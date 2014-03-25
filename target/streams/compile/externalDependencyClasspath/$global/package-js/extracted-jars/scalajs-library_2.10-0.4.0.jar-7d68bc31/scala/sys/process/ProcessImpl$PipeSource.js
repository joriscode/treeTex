/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.call(this);
  this.currentSource$3 = null;
  this.pipe$3 = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeThread();
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource;
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype.run__V = (function() {
  var _$this = this;
  tailCallLoop: while (true) {
    var x1 = ScalaJS.as.scala_Option(_$this.currentSource$3.get__O());
    matchEnd5: {
      if (ScalaJS.is.scala_Some(x1)) {
        var x2 = ScalaJS.as.scala_Some(x1);
        var source = ScalaJS.as.java_io_InputStream(x2.x__O());
        try {
          _$this.runloop__Ljava_io_InputStream__Ljava_io_OutputStream__V(source, _$this.pipe$3)
        } finally {
          _$this.currentSource$3.unset__V()
        };
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
        _$this.currentSource$3.unset__V();
        ScalaJS.modules.scala_sys_process_BasicIO().close__Ljava_io_Closeable__V(_$this.pipe$3);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    return undefined
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype.scala$sys$process$ProcessImpl$PipeSource$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype.init___Lscala_sys_process_Process$__Lscala_concurrent_SyncVar__Ljava_io_PipedOutputStream__Lscala_Function0 = (function($$outer, currentSource, pipe, label) {
  this.currentSource$3 = currentSource;
  this.pipe$3 = pipe;
  ScalaJS.c.scala_sys_process_ProcessImpl$PipeThread.prototype.init___Lscala_sys_process_Process$__Z__Lscala_Function0.call(this, $$outer, false, label);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype.scala$sys$process$ProcessImpl$PipeSource$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$PipeSource$$$outer__Lscala_sys_process_Process$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeSource = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$PipeSource.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$PipeSource = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$PipeSource)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$PipeSource = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$PipeSource(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$PipeSource")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipeSource = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$PipeSource)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$PipeSource = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$PipeSource(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$PipeSource;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$PipeSource = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$PipeSource: 0
}, false, "scala.sys.process.ProcessImpl$PipeSource", ScalaJS.data.scala_sys_process_ProcessImpl$PipeThread, {
  scala_sys_process_ProcessImpl$PipeSource: 1,
  scala_sys_process_ProcessImpl$PipeThread: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$PipeSource.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$PipeSource;
//@ sourceMappingURL=ProcessImpl$PipeSource.js.map
