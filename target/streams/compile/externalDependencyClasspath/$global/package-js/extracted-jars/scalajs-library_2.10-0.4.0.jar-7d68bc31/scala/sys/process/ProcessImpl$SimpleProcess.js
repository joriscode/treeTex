/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.p$1 = null;
  this.inputThread$1 = null;
  this.outputThreads$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.exitValue__I = (function() {
  try {
    this.p$1.waitFor__I()
  } finally {
    this.inputThread$1.interrupt__V()
  };
  this.outputThreads$1.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$5) {
      x$5.join__V();
      return ScalaJS.bV(undefined)
    })
  })()));
  return this.p$1.exitValue__I()
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.destroy__V = (function() {
  try {
    this.outputThreads$1.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$6) {
        x$6.stop__V();
        return ScalaJS.bV(undefined)
      })
    })()));
    this.p$1.destroy__V()
  } finally {
    this.inputThread$1.interrupt__V()
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.scala$sys$process$ProcessImpl$SimpleProcess$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.init___Lscala_sys_process_Process$__Ljava_lang_Process__Ljava_lang_Thread__Lscala_collection_immutable_List = (function($$outer, p, inputThread, outputThreads) {
  this.p$1 = p;
  this.inputThread$1 = inputThread;
  this.outputThreads$1 = outputThreads;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.scala$sys$process$ProcessImpl$SimpleProcess$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$SimpleProcess$$$outer__Lscala_sys_process_Process$()
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.destroy__ = (function() {
  return ScalaJS.bV(this.destroy__V())
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.exitValue__ = (function() {
  return ScalaJS.bI(this.exitValue__I())
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$SimpleProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$SimpleProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$SimpleProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$SimpleProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$SimpleProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$SimpleProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$SimpleProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$SimpleProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$SimpleProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$SimpleProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$SimpleProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$SimpleProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$SimpleProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$SimpleProcess: 0
}, false, "scala.sys.process.ProcessImpl$SimpleProcess", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessImpl$SimpleProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$SimpleProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$SimpleProcess;
//@ sourceMappingURL=ProcessImpl$SimpleProcess.js.map
