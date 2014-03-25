/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.call(this);
  this.a$3 = null;
  this.scala$sys$process$ProcessImpl$SequentialProcess$$b$f = null;
  this.scala$sys$process$ProcessImpl$SequentialProcess$$io$f = null;
  this.scala$sys$process$ProcessImpl$SequentialProcess$$evaluateSecondProcess$f = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$CompoundProcess();
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.runAndExitValue__Lscala_Option = (function() {
  var first = this.a$3.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(this.scala$sys$process$ProcessImpl$SequentialProcess$$io$f);
  return this.runInterruptible__Lscala_Function0__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(first$1) {
    return (function() {
      return ScalaJS.bI(first$1.exitValue__I())
    })
  })(first)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(first$1) {
    return (function() {
      first$1.destroy__V();
      return ScalaJS.bV(undefined)
    })
  })(first))).flatMap__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(codeA) {
      codeA = ScalaJS.uI(codeA);
      if (arg$outer.scala$sys$process$ProcessImpl$SequentialProcess$$evaluateSecondProcess$f.apply$mcZI$sp__I__Z(codeA)) {
        var second = arg$outer.scala$sys$process$ProcessImpl$SequentialProcess$$b$f.run__Lscala_sys_process_ProcessIO__Lscala_sys_process_Process(arg$outer.scala$sys$process$ProcessImpl$SequentialProcess$$io$f);
        return arg$outer.runInterruptible__Lscala_Function0__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess$$anonfun$runAndExitValue$5$$anonfun$apply$2().init___Lscala_sys_process_ProcessImpl$SequentialProcess$$anonfun$runAndExitValue$5__Lscala_sys_process_Process(this, second), new ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess$$anonfun$runAndExitValue$5$$anonfun$apply$3().init___Lscala_sys_process_ProcessImpl$SequentialProcess$$anonfun$runAndExitValue$5__Lscala_sys_process_Process(this, second))
      } else {
        return new ScalaJS.c.scala_Some().init___O(ScalaJS.bI(codeA))
      }
    })
  })(this)))
});
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.scala$sys$process$ProcessImpl$SequentialProcess$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.init___Lscala_sys_process_Process$__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessBuilder__Lscala_sys_process_ProcessIO__Lscala_Function1 = (function($$outer, a, b, io, evaluateSecondProcess) {
  this.a$3 = a;
  this.scala$sys$process$ProcessImpl$SequentialProcess$$b$f = b;
  this.scala$sys$process$ProcessImpl$SequentialProcess$$io$f = io;
  this.scala$sys$process$ProcessImpl$SequentialProcess$$evaluateSecondProcess$f = evaluateSecondProcess;
  ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.init___Lscala_sys_process_Process$.call(this, $$outer);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.scala$sys$process$ProcessImpl$SequentialProcess$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$SequentialProcess$$$outer__Lscala_sys_process_Process$()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$SequentialProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$SequentialProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$SequentialProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$SequentialProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$SequentialProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$SequentialProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$SequentialProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$SequentialProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$SequentialProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$SequentialProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$SequentialProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$SequentialProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$SequentialProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$SequentialProcess: 0
}, false, "scala.sys.process.ProcessImpl$SequentialProcess", ScalaJS.data.scala_sys_process_ProcessImpl$CompoundProcess, {
  scala_sys_process_ProcessImpl$SequentialProcess: 1,
  scala_sys_process_ProcessImpl$CompoundProcess: 1,
  scala_sys_process_ProcessImpl$BasicProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$SequentialProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$SequentialProcess;
//@ sourceMappingURL=ProcessImpl$SequentialProcess.js.map
