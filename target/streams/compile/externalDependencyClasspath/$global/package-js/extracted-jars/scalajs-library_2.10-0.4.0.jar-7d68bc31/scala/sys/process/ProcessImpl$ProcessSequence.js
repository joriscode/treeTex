/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.call(this)
});
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$SequentialProcess();
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence;
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype.scala$sys$process$ProcessImpl$ProcessSequence$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype.init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO = (function($$outer, a, b, io) {
  ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO__Lscala_Function1.call(this, $$outer, a, b, io, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$3) {
      x$3 = ScalaJS.uI(x$3);
      return ScalaJS.bZ(true)
    })
  })()));
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype.scala$sys$process$ProcessImpl$ProcessSequence$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$ProcessSequence$$$outer__Lscala_sys_process_Process$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$ProcessSequence = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$ProcessSequence.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$ProcessSequence = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$ProcessSequence)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$ProcessSequence = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$ProcessSequence(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$ProcessSequence")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$ProcessSequence = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$ProcessSequence)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$ProcessSequence = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$ProcessSequence(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$ProcessSequence;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$ProcessSequence = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$ProcessSequence: 0
}, false, "scala.sys.process.ProcessImpl$ProcessSequence", ScalaJS.data.scala_sys_process_ProcessImpl$SequentialProcess, {
  scala_sys_process_ProcessImpl$ProcessSequence: 1,
  scala_sys_process_ProcessImpl$SequentialProcess: 1,
  scala_sys_process_ProcessImpl$CompoundProcess: 1,
  scala_sys_process_ProcessImpl$BasicProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$ProcessSequence.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$ProcessSequence;
//@ sourceMappingURL=ProcessImpl$ProcessSequence.js.map
