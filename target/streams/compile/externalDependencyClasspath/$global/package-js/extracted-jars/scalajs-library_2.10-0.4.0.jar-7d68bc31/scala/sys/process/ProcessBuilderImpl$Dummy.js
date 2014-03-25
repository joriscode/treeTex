/** @constructor */
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy = (function() {
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.call(this);
  this.toString$2 = null;
  this.exitValue$2 = null
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$AbstractBuilder();
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy;
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.toString__T = (function() {
  return this.toString$2
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process = (function(io) {
  return new ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess().init___Lscala_sys_process_Process$__Lscala_Function0(ScalaJS.modules.scala_sys_process_Process(), this.exitValue$2)
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.canPipeTo__Z = (function() {
  return true
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.scala$sys$process$ProcessBuilderImpl$Dummy$$$outer__Lscala_sys_process_ProcessBuilder$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.init___Lscala_sys_process_ProcessBuilder$__T__Lscala_Function0 = (function($$outer, toString, exitValue) {
  this.toString$2 = toString;
  this.exitValue$2 = exitValue;
  ScalaJS.c.scala_sys_process_ProcessBuilderImpl$AbstractBuilder.prototype.init___Lscala_sys_process_ProcessBuilder$.call(this, $$outer);
  return this
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.scala$sys$process$ProcessBuilderImpl$Dummy$$$outer__ = (function() {
  return this.scala$sys$process$ProcessBuilderImpl$Dummy$$$outer__Lscala_sys_process_ProcessBuilder$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$Dummy = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessBuilderImpl$Dummy.prototype = ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype;
ScalaJS.is.scala_sys_process_ProcessBuilderImpl$Dummy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessBuilderImpl$Dummy)))
});
ScalaJS.as.scala_sys_process_ProcessBuilderImpl$Dummy = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessBuilderImpl$Dummy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessBuilderImpl$Dummy")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$Dummy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessBuilderImpl$Dummy)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessBuilderImpl$Dummy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessBuilderImpl$Dummy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessBuilderImpl$Dummy;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessBuilderImpl$Dummy = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessBuilderImpl$Dummy: 0
}, false, "scala.sys.process.ProcessBuilderImpl$Dummy", ScalaJS.data.scala_sys_process_ProcessBuilderImpl$AbstractBuilder, {
  scala_sys_process_ProcessBuilderImpl$Dummy: 1,
  scala_sys_process_ProcessBuilderImpl$AbstractBuilder: 1,
  scala_sys_process_ProcessBuilder: 1,
  scala_sys_process_ProcessBuilder$Sink: 1,
  scala_sys_process_ProcessBuilder$Source: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessBuilderImpl$Dummy.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessBuilderImpl$Dummy;
//@ sourceMappingURL=ProcessBuilderImpl$Dummy.js.map
