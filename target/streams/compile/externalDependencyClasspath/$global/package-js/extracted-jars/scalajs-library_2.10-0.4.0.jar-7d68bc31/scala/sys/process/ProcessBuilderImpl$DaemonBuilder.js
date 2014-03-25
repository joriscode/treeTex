/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.call(this);
  this.underlying$2 = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process = (function(io) {
  return this.underlying$2.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(io.daemonized__Lscala_sys_process_ProcessIO())
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype.scala$sys$process$ProcessBuilderImpl$DaemonBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder = (function($$outer, underlying) {
  this.underlying$2 = underlying;
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$.call(this, $$outer);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype.scala$sys$process$ProcessBuilderImpl$DaemonBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$DaemonBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$DaemonBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$DaemonBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$DaemonBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$DaemonBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$DaemonBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$DaemonBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$DaemonBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$DaemonBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$DaemonBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder, {
  scala_sys_process_ProcessBuilderImpl$DaemonBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$DaemonBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$DaemonBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$DaemonBuilder.js.map
