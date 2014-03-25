/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Ljava_io_File__Lscala_sys_process_ProcessBuilder = (function(f) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Sink$class__$hash$less__Lscala_sys_process_ProcessBuilder$Sink__Ljava_io_File__Lscala_sys_process_ProcessBuilder(this, f)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Ljava_net_URL__Lscala_sys_process_ProcessBuilder = (function(f) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Sink$class__$hash$less__Lscala_sys_process_ProcessBuilder$Sink__Ljava_net_URL__Lscala_sys_process_ProcessBuilder(this, f)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Lscala_Function0__Lscala_sys_process_ProcessBuilder = (function(in$2) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Sink$class__$hash$less__Lscala_sys_process_ProcessBuilder$Sink__Lscala_Function0__Lscala_sys_process_ProcessBuilder(this, in$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(b) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Sink$class__$hash$less__Lscala_sys_process_ProcessBuilder$Sink__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(this, b)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater__Ljava_io_File__Lscala_sys_process_ProcessBuilder = (function(f) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Source$class__$hash$greater__Lscala_sys_process_ProcessBuilder$Source__Ljava_io_File__Lscala_sys_process_ProcessBuilder(this, f)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater$greater__Ljava_io_File__Lscala_sys_process_ProcessBuilder = (function(f) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Source$class__$hash$greater$greater__Lscala_sys_process_ProcessBuilder$Source__Ljava_io_File__Lscala_sys_process_ProcessBuilder(this, f)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater__Lscala_Function0__Lscala_sys_process_ProcessBuilder = (function(out) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Source$class__$hash$greater__Lscala_sys_process_ProcessBuilder$Source__Lscala_Function0__Lscala_sys_process_ProcessBuilder(this, out)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(b) {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Source$class__$hash$greater__Lscala_sys_process_ProcessBuilder$Source__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(this, b)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.cat__Lscala_sys_process_ProcessBuilder = (function() {
  return ScalaJS.impls.scala_sys_process_ProcessBuilder$Source$class__cat__Lscala_sys_process_ProcessBuilder$Source__Lscala_sys_process_ProcessBuilder(this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.toSource__Lscala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function() {
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.toSink__Lscala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function() {
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$bar__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(other) {
  ScalaJS.modules.scala_Predef().require__Z__Lscala_Function0__V(other.canPipeTo__Z(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "Piping to multiple processes is not supported."
    })
  })()));
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder().init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Z(this.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$(), this, other, false)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$bar$bar__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(other) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder().init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(this.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$(), this, other)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$amp$amp__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(other) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AndBuilder().init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(this.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$(), this, other)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$hash$hash__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function(other) {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequenceBuilder().init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(this.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$(), this, other)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Lscala_sys_process_Process = (function() {
  return this.run__Z__Lscala_sys_process_Process(false)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Z__Lscala_sys_process_Process = (function(connectInput) {
  return this.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(ScalaJS.modules.scala_sys_process_BasicIO().standard__Z__Lscala_sys_process_ProcessIO(connectInput))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Lscala_sys_process_ProcessLogger__Lscala_sys_process_Process = (function(log) {
  return this.run__Lscala_sys_process_ProcessLogger__Z__Lscala_sys_process_Process(log, false)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Lscala_sys_process_ProcessLogger__Z__Lscala_sys_process_Process = (function(log, connectInput) {
  return this.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(ScalaJS.modules.scala_sys_process_BasicIO().apply__Z__Lscala_sys_process_ProcessLogger__Lscala_sys_process_ProcessIO(connectInput, log))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang__T = (function() {
  return this.slurp__p1__Lscala_Option__Z__T(ScalaJS.modules.scala_None(), false)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang__Lscala_sys_process_ProcessLogger__T = (function(log) {
  return this.slurp__p1__Lscala_Option__Z__T(new ScalaJS.c.scala_Some().init___O(log), false)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang$less__T = (function() {
  return this.slurp__p1__Lscala_Option__Z__T(ScalaJS.modules.scala_None(), true)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang$less__Lscala_sys_process_ProcessLogger__T = (function(log) {
  return this.slurp__p1__Lscala_Option__Z__T(new ScalaJS.c.scala_Some().init___O(log), true)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines__Lscala_collection_immutable_Stream = (function() {
  return this.lines__p1__Z__Z__Lscala_Option__Lscala_collection_immutable_Stream(false, true, ScalaJS.modules.scala_None())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines__Lscala_sys_process_ProcessLogger__Lscala_collection_immutable_Stream = (function(log) {
  return this.lines__p1__Z__Z__Lscala_Option__Lscala_collection_immutable_Stream(false, true, new ScalaJS.c.scala_Some().init___O(log))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines$und$bang__Lscala_collection_immutable_Stream = (function() {
  return this.lines__p1__Z__Z__Lscala_Option__Lscala_collection_immutable_Stream(false, false, ScalaJS.modules.scala_None())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines$und$bang__Lscala_sys_process_ProcessLogger__Lscala_collection_immutable_Stream = (function(log) {
  return this.lines__p1__Z__Z__Lscala_Option__Lscala_collection_immutable_Stream(false, false, new ScalaJS.c.scala_Some().init___O(log))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang__I = (function() {
  return this.run__Z__Lscala_sys_process_Process(false).exitValue__I()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang__Lscala_sys_process_ProcessIO__I = (function(io) {
  return this.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(io).exitValue__I()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang__Lscala_sys_process_ProcessLogger__I = (function(log) {
  return this.runBuffered__p1__Lscala_sys_process_ProcessLogger__Z__I(log, false)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$less__I = (function() {
  return this.run__Z__Lscala_sys_process_Process(true).exitValue__I()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$less__Lscala_sys_process_ProcessLogger__I = (function(log) {
  return this.runBuffered__p1__Lscala_sys_process_ProcessLogger__Z__I(log, true)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.daemonized__Lscala_sys_process_ProcessBuilder = (function() {
  return new ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder().init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder(this.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$(), this)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.slurp__p1__Lscala_Option__Z__T = (function(log, withIn) {
  var buffer = new ScalaJS.c.java_lang_StringBuffer().init___();
  var code = this.$$bang__Lscala_sys_process_ProcessIO__I(ScalaJS.modules.scala_sys_process_BasicIO().apply__Z__Ljava_lang_StringBuffer__Lscala_Option__Lscala_sys_process_ProcessIO(withIn, buffer, log));
  if ((code === 0)) {
    return buffer.toString__T()
  } else {
    return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing(("Nonzero exit value: " + ScalaJS.bI(code)))
  }
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines__p1__Z__Z__Lscala_Option__Lscala_collection_immutable_Stream = (function(withInput, nonZeroException, log) {
  var streamed = ScalaJS.modules.scala_sys_process_BasicIO$Streamed().apply__Z__Lscala_sys_process_BasicIO$Streamed(nonZeroException);
  var process = this.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(ScalaJS.modules.scala_sys_process_BasicIO().apply__Z__Lscala_Function1__Lscala_Option__Lscala_sys_process_ProcessIO(withInput, streamed.process__Lscala_Function1(), log));
  ScalaJS.modules.scala_sys_process_Process().Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(streamed$1, process$2) {
    return (function() {
      streamed$1.done__Lscala_Function1().apply$mcVI$sp__I__V(process$2.exitValue__I());
      return ScalaJS.bV(undefined)
    })
  })(streamed, process)));
  return ScalaJS.as.scala_collection_immutable_Stream(streamed.stream__Lscala_Function0().apply__O())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.runBuffered__p1__Lscala_sys_process_ProcessLogger__Z__I = (function(log, connectInput) {
  return ScalaJS.uI(log.buffer__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, log$1, connectInput$1) {
    return (function() {
      return ScalaJS.bI(arg$outer.run__Lscala_sys_process_ProcessLogger__Z__Lscala_sys_process_Process(log$1, connectInput$1).exitValue__I())
    })
  })(this, log, connectInput))))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.canPipeTo__Z = (function() {
  return false
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.hasExitValue__Z = (function() {
  return true
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.toSink__Lscala_sys_process_ProcessBuilder = (function() {
  return this.toSink__Lscala_sys_process_ProcessBuilderImpl$AbstractBuilder()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.toSource__Lscala_sys_process_ProcessBuilder = (function() {
  return this.toSource__Lscala_sys_process_ProcessBuilderImpl$AbstractBuilder()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$ = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_sys_process_ProcessBuilder$Source$class__$init$__Lscala_sys_process_ProcessBuilder$Source__V(this);
  ScalaJS.impls.scala_sys_process_ProcessBuilder$Sink$class__$init$__Lscala_sys_process_ProcessBuilder$Sink__V(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.cat__ = (function() {
  return this.cat__Lscala_sys_process_ProcessBuilder()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater__Lscala_sys_process_ProcessBuilder__ = (function(b) {
  return this.$$hash$greater__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(b)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater__Lscala_Function0__ = (function(out) {
  return this.$$hash$greater__Lscala_Function0__Lscala_sys_process_ProcessBuilder(out)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater$greater__Ljava_io_File__ = (function(f) {
  return this.$$hash$greater$greater__Ljava_io_File__Lscala_sys_process_ProcessBuilder(f)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$greater__Ljava_io_File__ = (function(f$2) {
  return this.$$hash$greater__Ljava_io_File__Lscala_sys_process_ProcessBuilder(f$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Lscala_sys_process_ProcessBuilder__ = (function(b$2) {
  return this.$$hash$less__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(b$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Lscala_Function0__ = (function(in$2) {
  return this.$$hash$less__Lscala_Function0__Lscala_sys_process_ProcessBuilder(in$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Ljava_net_URL__ = (function(f$3) {
  return this.$$hash$less__Ljava_net_URL__Lscala_sys_process_ProcessBuilder(f$3)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$less__Ljava_io_File__ = (function(f$4) {
  return this.$$hash$less__Ljava_io_File__Lscala_sys_process_ProcessBuilder(f$4)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$AbstractBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.hasExitValue__ = (function() {
  return ScalaJS.bZ(this.hasExitValue__Z())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.canPipeTo__ = (function() {
  return ScalaJS.bZ(this.canPipeTo__Z())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.daemonized__ = (function() {
  return this.daemonized__Lscala_sys_process_ProcessBuilder()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$less__Lscala_sys_process_ProcessLogger__ = (function(log) {
  return ScalaJS.bI(this.$$bang$less__Lscala_sys_process_ProcessLogger__I(log))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$less__ = (function() {
  return ScalaJS.bI(this.$$bang$less__I())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang__Lscala_sys_process_ProcessLogger__ = (function(log$2) {
  return ScalaJS.bI(this.$$bang__Lscala_sys_process_ProcessLogger__I(log$2))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang__Lscala_sys_process_ProcessIO__ = (function(io) {
  return ScalaJS.bI(this.$$bang__Lscala_sys_process_ProcessIO__I(io))
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang__ = (function() {
  return ScalaJS.bI(this.$$bang__I())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines$und$bang__Lscala_sys_process_ProcessLogger__ = (function(log$3) {
  return this.lines$und$bang__Lscala_sys_process_ProcessLogger__Lscala_collection_immutable_Stream(log$3)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines$und$bang__ = (function() {
  return this.lines$und$bang__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines__Lscala_sys_process_ProcessLogger__ = (function(log$4) {
  return this.lines__Lscala_sys_process_ProcessLogger__Lscala_collection_immutable_Stream(log$4)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.lines__ = (function() {
  return this.lines__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang$less__Lscala_sys_process_ProcessLogger__ = (function(log$5) {
  return this.$$bang$bang$less__Lscala_sys_process_ProcessLogger__T(log$5)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang$less__ = (function() {
  return this.$$bang$bang$less__T()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang__Lscala_sys_process_ProcessLogger__ = (function(log$6) {
  return this.$$bang$bang__Lscala_sys_process_ProcessLogger__T(log$6)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$bang$bang__ = (function() {
  return this.$$bang$bang__T()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Lscala_sys_process_ProcessLogger__Z__ = (function(log$7, connectInput) {
  return this.run__Lscala_sys_process_ProcessLogger__Z__Lscala_sys_process_Process(log$7, connectInput)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Lscala_sys_process_ProcessLogger__ = (function(log$8) {
  return this.run__Lscala_sys_process_ProcessLogger__Lscala_sys_process_Process(log$8)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Z__ = (function(connectInput$2) {
  return this.run__Z__Lscala_sys_process_Process(connectInput$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__ = (function() {
  return this.run__Lscala_sys_process_Process()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$hash$hash__Lscala_sys_process_ProcessBuilder__ = (function(other) {
  return this.$$hash$hash$hash__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(other)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$amp$amp__Lscala_sys_process_ProcessBuilder__ = (function(other$2) {
  return this.$$hash$amp$amp__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(other$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$bar$bar__Lscala_sys_process_ProcessBuilder__ = (function(other$3) {
  return this.$$hash$bar$bar__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(other$3)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$$hash$bar__Lscala_sys_process_ProcessBuilder__ = (function(other$4) {
  return this.$$hash$bar__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder(other$4)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.toSink__ = (function() {
  return this.toSink__Lscala_sys_process_ProcessBuilderImpl$AbstractBuilder()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.toSource__ = (function() {
  return this.toSource__Lscala_sys_process_ProcessBuilderImpl$AbstractBuilder()
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.run__Lscala_sys_process_ProcessIO__ = (function(io$2) {
  return this.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(io$2)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$AbstractBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$AbstractBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$AbstractBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$AbstractBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$AbstractBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$AbstractBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$AbstractBuilder", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$AbstractBuilder.js.map
