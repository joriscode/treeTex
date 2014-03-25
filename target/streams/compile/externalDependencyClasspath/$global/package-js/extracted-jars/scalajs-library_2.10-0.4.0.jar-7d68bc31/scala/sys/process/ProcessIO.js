/** @constructor */
ScalaJS.c.scala_sys_process_ProcessIO = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.writeInput$1 = null;
  this.processOutput$1 = null;
  this.processError$1 = null;
  this.daemonizeThreads$1 = false
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessIO.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessIO;
ScalaJS.c.scala_sys_process_ProcessIO.prototype.writeInput__Lscala_Function1 = (function() {
  return this.writeInput$1
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.processOutput__Lscala_Function1 = (function() {
  return this.processOutput$1
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.processError__Lscala_Function1 = (function() {
  return this.processError$1
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.daemonizeThreads__Z = (function() {
  return this.daemonizeThreads$1
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.withInput__Lscala_Function1__Lscala_sys_process_ProcessIO = (function(write) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1__Z(write, this.processOutput__Lscala_Function1(), this.processError__Lscala_Function1(), this.daemonizeThreads__Z())
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.withOutput__Lscala_Function1__Lscala_sys_process_ProcessIO = (function(process) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1__Z(this.writeInput__Lscala_Function1(), process, this.processError__Lscala_Function1(), this.daemonizeThreads__Z())
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.withError__Lscala_Function1__Lscala_sys_process_ProcessIO = (function(process) {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1__Z(this.writeInput__Lscala_Function1(), this.processOutput__Lscala_Function1(), process, this.daemonizeThreads__Z())
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.daemonized__Lscala_sys_process_ProcessIO = (function() {
  return new ScalaJS.c.scala_sys_process_ProcessIO().init___Lscala_Function1__Lscala_Function1__Lscala_Function1__Z(this.writeInput__Lscala_Function1(), this.processOutput__Lscala_Function1(), this.processError__Lscala_Function1(), true)
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.init___Lscala_Function1__Lscala_Function1__Lscala_Function1__Z = (function(writeInput, processOutput, processError, daemonizeThreads) {
  this.writeInput$1 = writeInput;
  this.processOutput$1 = processOutput;
  this.processError$1 = processError;
  this.daemonizeThreads$1 = daemonizeThreads;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.init___Lscala_Function1__Lscala_Function1__Lscala_Function1 = (function(in$2, out, err) {
  ScalaJS.c.scala_sys_process_ProcessIO.prototype.init___Lscala_Function1__Lscala_Function1__Lscala_Function1__Z.call(this, in$2, out, err, false);
  return this
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.daemonized__ = (function() {
  return this.daemonized__Lscala_sys_process_ProcessIO()
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.withError__Lscala_Function1__ = (function(process) {
  return this.withError__Lscala_Function1__Lscala_sys_process_ProcessIO(process)
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.withOutput__Lscala_Function1__ = (function(process$2) {
  return this.withOutput__Lscala_Function1__Lscala_sys_process_ProcessIO(process$2)
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.withInput__Lscala_Function1__ = (function(write) {
  return this.withInput__Lscala_Function1__Lscala_sys_process_ProcessIO(write)
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.daemonizeThreads__ = (function() {
  return ScalaJS.bZ(this.daemonizeThreads__Z())
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.processError__ = (function() {
  return this.processError__Lscala_Function1()
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.processOutput__ = (function() {
  return this.processOutput__Lscala_Function1()
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.writeInput__ = (function() {
  return this.writeInput__Lscala_Function1()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessIO = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessIO.prototype = ScalaJS.c.scala_sys_process_ProcessIO.prototype;
ScalaJS.is.scala_sys_process_ProcessIO = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessIO)))
});
ScalaJS.as.scala_sys_process_ProcessIO = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessIO(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessIO")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessIO = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessIO)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessIO = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessIO(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessIO;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessIO = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessIO: 0
}, false, "scala.sys.process.ProcessIO", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessIO: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessIO.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessIO;
//@ sourceMappingURL=ProcessIO.js.map
