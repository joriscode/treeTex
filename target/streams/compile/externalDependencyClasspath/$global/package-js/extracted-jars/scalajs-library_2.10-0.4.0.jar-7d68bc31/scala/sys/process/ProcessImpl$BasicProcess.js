/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$f = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.scala$sys$process$ProcessImpl$BasicProcess$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.init___Lscala_sys_process_Process$ = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.scala$sys$process$ProcessImpl$BasicProcess$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$BasicProcess$$$outer__Lscala_sys_process_Process$()
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.start__ = (function() {
  return ScalaJS.bV(this.start__V())
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.destroy__ = (function() {
  return ScalaJS.bV(this.destroy__V())
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.exitValue__ = (function() {
  return ScalaJS.bI(this.exitValue__I())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$BasicProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$BasicProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$BasicProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$BasicProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$BasicProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$BasicProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$BasicProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$BasicProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$BasicProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$BasicProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$BasicProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$BasicProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$BasicProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$BasicProcess: 0
}, false, "scala.sys.process.ProcessImpl$BasicProcess", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessImpl$BasicProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$BasicProcess;
//@ sourceMappingURL=ProcessImpl$BasicProcess.js.map
