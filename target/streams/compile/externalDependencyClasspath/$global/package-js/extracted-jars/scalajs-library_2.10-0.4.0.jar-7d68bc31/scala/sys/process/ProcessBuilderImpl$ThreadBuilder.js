/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.call(this);
  this.toString$2 = null;
  this.scala$sys$process$ProcessBuilderImpl$ThreadBuilder$$runImpl$f = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.toString__T = (function() {
  return this.toString$2
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process = (function(io) {
  var success = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  success.put__O__V(ScalaJS.bZ(false));
  var t = ScalaJS.modules.scala_sys_process_Process().Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Z__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, io$1, success$1) {
    return (function() {
      arg$outer.scala$sys$process$ProcessBuilderImpl$ThreadBuilder$$runImpl$f.apply__O__O(io$1);
      success$1.set__O__V(ScalaJS.bZ(true));
      return ScalaJS.bV(undefined)
    })
  })(this, io, success)), io.daemonizeThreads__Z());
  return new ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess().init___Lscala_sys_process_Process$__Ljava_lang_Thread__Lscala_concurrent_SyncVar(ScalaJS.modules.scala_sys_process_Process(), t, success)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.scala$sys$process$ProcessBuilderImpl$ThreadBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__T__Lscala_Function1 = (function($$outer, toString, runImpl) {
  this.toString$2 = toString;
  this.scala$sys$process$ProcessBuilderImpl$ThreadBuilder$$runImpl$f = runImpl;
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$.call(this, $$outer);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.scala$sys$process$ProcessBuilderImpl$ThreadBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$ThreadBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$ThreadBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$ThreadBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$ThreadBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$ThreadBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$ThreadBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$ThreadBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$ThreadBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$ThreadBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder, {
  scala_sys_process_ProcessBuilderImpl$ThreadBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$ThreadBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$ThreadBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$ThreadBuilder.js.map
