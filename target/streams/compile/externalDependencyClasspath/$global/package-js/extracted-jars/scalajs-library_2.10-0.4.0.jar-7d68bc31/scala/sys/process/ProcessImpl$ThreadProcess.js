/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.thread$1 = null;
  this.success$1 = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.exitValue__I = (function() {
  this.thread$1.join__V();
  if (ScalaJS.uZ(this.success$1.get__O())) {
    return 0
  } else {
    return 1
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.destroy__V = (function() {
  this.thread$1.interrupt__V()
});
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.init___Lscala_sys_process_Process$__Ljava_lang_Thread__Lscala_concurrent_SyncVar = (function($$outer, thread, success) {
  this.thread$1 = thread;
  this.success$1 = success;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.destroy__ = (function() {
  return ScalaJS.bV(this.destroy__V())
});
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.exitValue__ = (function() {
  return ScalaJS.bI(this.exitValue__I())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$ThreadProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$ThreadProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$ThreadProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$ThreadProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$ThreadProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$ThreadProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$ThreadProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$ThreadProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$ThreadProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$ThreadProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$ThreadProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$ThreadProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$ThreadProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$ThreadProcess: 0
}, false, "scala.sys.process.ProcessImpl$ThreadProcess", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessImpl$ThreadProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$ThreadProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$ThreadProcess;
//@ sourceMappingURL=ProcessImpl$ThreadProcess.js.map
