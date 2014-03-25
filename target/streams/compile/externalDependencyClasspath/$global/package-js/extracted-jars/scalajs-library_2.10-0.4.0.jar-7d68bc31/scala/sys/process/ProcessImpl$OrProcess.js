/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.call(this)
});
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$SequentialProcess();
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype.scala$sys$process$ProcessImpl$OrProcess$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype.init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO = (function($$outer, a, b, io) {
  ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO__Lscala_Function1.call(this, $$outer, a, b, io, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$2) {
      x$2 = ScalaJS.uI(x$2);
      return ScalaJS.bZ((x$2 !== 0))
    })
  })()));
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype.scala$sys$process$ProcessImpl$OrProcess$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$OrProcess$$$outer__Lscala_sys_process_Process$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$OrProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$OrProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$OrProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$OrProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$OrProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$OrProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$OrProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$OrProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$OrProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$OrProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$OrProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$OrProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$OrProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$OrProcess: 0
}, false, "scala.sys.process.ProcessImpl$OrProcess", ScalaJS.data.scala_sys_process_ProcessImpl$SequentialProcess, {
  scala_sys_process_ProcessImpl$OrProcess: 1,
  scala_sys_process_ProcessImpl$SequentialProcess: 1,
  scala_sys_process_ProcessImpl$CompoundProcess: 1,
  scala_sys_process_ProcessImpl$BasicProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$OrProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$OrProcess;
//@ sourceMappingURL=ProcessImpl$OrProcess.js.map
