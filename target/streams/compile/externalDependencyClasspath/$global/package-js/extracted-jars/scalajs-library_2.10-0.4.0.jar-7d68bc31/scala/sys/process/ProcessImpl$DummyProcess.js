/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.exitCode$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.exitValue__I = (function() {
  return this.exitCode$1.apply$mcI$sp__I()
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.destroy__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.scala$sys$process$ProcessImpl$DummyProcess$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.init___Lscala_sys_process_Process$__Lscala_Function0 = (function($$outer, action) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.exitCode$1 = $$outer.Future__Lscala_sys_process_ProcessImpl$Future$().apply__Lscala_Function0__Lscala_Function0(action);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.scala$sys$process$ProcessImpl$DummyProcess$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$DummyProcess$$$outer__Lscala_sys_process_Process$()
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.destroy__ = (function() {
  return ScalaJS.bV(this.destroy__V())
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.exitValue__ = (function() {
  return ScalaJS.bI(this.exitValue__I())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$DummyProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$DummyProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$DummyProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$DummyProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$DummyProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$DummyProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$DummyProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$DummyProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$DummyProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$DummyProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$DummyProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$DummyProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$DummyProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$DummyProcess: 0
}, false, "scala.sys.process.ProcessImpl$DummyProcess", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessImpl$DummyProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$DummyProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$DummyProcess;
//@ sourceMappingURL=ProcessImpl$DummyProcess.js.map
