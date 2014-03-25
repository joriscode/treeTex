/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.call(this);
  this.first$4 = null;
  this.second$4 = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$SequentialBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$OrProcess = (function(io) {
  return new ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess().init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO(ScalaJS.modules.scala_sys_process_Process(), this.first$4, this.second$4, io)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.scala$sys$process$ProcessBuilderImpl$OrBuilder$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$BasicProcess = (function(io) {
  return this.createProcess__Lscala_sys_process_ProcessIO__Lscala_sys_process_ProcessImpl$OrProcess(io)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder = (function($$outer, first, second) {
  this.first$4 = first;
  this.second$4 = second;
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$SequentialBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__T.call(this, $$outer, first, second, "#||");
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.scala$sys$process$ProcessBuilderImpl$OrBuilder$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$OrBuilder$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$OrBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$OrBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$OrBuilder)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$OrBuilder = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$OrBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$OrBuilder")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$OrBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$OrBuilder)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$OrBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$OrBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$OrBuilder;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$OrBuilder = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$OrBuilder: 0
}, false, "scala.sys.process.ProcessBuilderImpl$OrBuilder", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$SequentialBuilder, {
  scala_sys_process_ProcessBuilderImpl$OrBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$SequentialBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$BasicBuilder: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$OrBuilder.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$OrBuilder;
//@ sourceMappingURL=ProcessBuilderImpl$OrBuilder.js.map
