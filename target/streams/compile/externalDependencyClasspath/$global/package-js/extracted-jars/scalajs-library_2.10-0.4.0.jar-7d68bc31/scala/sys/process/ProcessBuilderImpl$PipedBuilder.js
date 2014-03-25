/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.call(this);
  this.first$4 = null;
  this.second$4 = null;
  this.toError$4 = false
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$SequentialBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$PipedProcesses = (function(io) {
  return new ScalaJS.c.scala_sys_process_ProcessImpl$PipedProcesses().init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO__Z(ScalaJS.modules.scala_sys_process_Process(), this.first$4, this.second$4, io, this.toError$4)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.scala$sys$process$ProcessBuilderImpl$PipedBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$BasicProcess = (function(io) {
  return this.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$PipedProcesses(io)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Z = (function($$outer, first, second, toError) {
  this.first$4 = first;
  this.second$4 = second;
  this.toError$4 = toError;
  var jsx$5 = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__T;
  var jsx$4 = $$outer;
  var jsx$3 = first;
  var jsx$2 = second;
  if (toError) {
    var jsx$1 = "#|!"
  } else {
    var jsx$1 = "#|"
  };
  jsx$5.call(this, jsx$4, jsx$3, jsx$2, jsx$1);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.scala$sys$process$ProcessBuilderImpl$PipedBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$PipedBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$PipedBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$PipedBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$PipedBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$PipedBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$PipedBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$PipedBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$PipedBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$PipedBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$PipedBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$PipedBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$PipedBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$PipedBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$PipedBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$PipedBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$SequentialBuilder, {
  scala_sys_process_ProcessBuilderImpl$PipedBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$SequentialBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$BasicBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$PipedBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$PipedBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$PipedBuilder.js.map
