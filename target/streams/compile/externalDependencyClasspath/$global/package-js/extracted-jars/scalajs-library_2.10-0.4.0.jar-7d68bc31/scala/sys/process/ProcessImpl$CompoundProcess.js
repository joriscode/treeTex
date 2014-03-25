/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess = (function() {
  ScalaJS.c.scala_sys_process_ProcessImpl$BasicProcess.call(this);
  this.x$4$2 = null;
  this.getExitValue$2 = null;
  this.destroyer$2 = null;
  this.bitmap$0$2 = 0
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype = new ScalaJS.inheritable.scala_sys_process_ProcessImpl$BasicProcess();
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess;
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.x$4$lzycompute__p2__Lscala_Tuple2 = (function() {
  if (((this.bitmap$0$2 & 1) === 0)) {
    var code = new ScalaJS.c.scala_concurrent_SyncVar().init___();
    code.set__O__V(ScalaJS.modules.scala_None());
    var thread = this.scala$sys$process$ProcessImpl$CompoundProcess$$$outer__Lscala_sys_process_Process$().Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, code$1) {
      return (function() {
        code$1.set__O__V(arg$outer.runAndExitValue__Lscala_Option());
        return ScalaJS.bV(undefined)
      })
    })(this, code)));
    var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(this.scala$sys$process$ProcessImpl$CompoundProcess$$$outer__Lscala_sys_process_Process$().Future__Lscala_sys_process_ProcessImpl$Future$().apply__Lscala_Function0__Lscala_Function0(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(code$1, thread$1) {
      return (function() {
        thread$1.join__V();
        return ScalaJS.as.scala_Option(code$1.get__O())
      })
    })(code, thread))), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(thread$1) {
      return (function() {
        thread$1.interrupt__V();
        return ScalaJS.bV(undefined)
      })
    })(thread)));
    matchEnd3: {
      if ((x1 !== null)) {
        var getExitValue = ScalaJS.as.scala_Function0(x1.$$und1__O());
        var destroyer = ScalaJS.as.scala_Function0(x1.$$und2__O());
        var jsx$1 = new ScalaJS.c.scala_Tuple2().init___O__O(getExitValue, destroyer);
        break matchEnd3
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    };
    this.x$4$2 = jsx$1;
    this.bitmap$0$2 = (this.bitmap$0$2 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.x$4$2
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.getExitValue$lzycompute__p2__Lscala_Function0 = (function() {
  if (((this.bitmap$0$2 & 2) === 0)) {
    this.getExitValue$2 = ScalaJS.as.scala_Function0(this.x$4__p2__Lscala_Tuple2().$$und1__O());
    this.bitmap$0$2 = (this.bitmap$0$2 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.getExitValue$2
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.destroyer$lzycompute__p2__Lscala_Function0 = (function() {
  if (((this.bitmap$0$2 & 4) === 0)) {
    this.destroyer$2 = ScalaJS.as.scala_Function0(this.x$4__p2__Lscala_Tuple2().$$und2__O());
    this.bitmap$0$2 = (this.bitmap$0$2 | 4)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.destroyer$2
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.destroy__V = (function() {
  this.destroyer__Lscala_Function0().apply$mcV$sp__V()
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.exitValue__I = (function() {
  return ScalaJS.uI(ScalaJS.as.scala_Option(this.getExitValue__Lscala_Function0().apply__O()).getOrElse__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("No exit code: process destroyed.")
    })
  })())))
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.start__V = (function() {
  this.getExitValue__Lscala_Function0()
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.x$4__p2__Lscala_Tuple2 = (function() {
  if (((this.bitmap$0$2 & 1) === 0)) {
    return this.x$4$lzycompute__p2__Lscala_Tuple2()
  } else {
    return this.x$4$2
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.getExitValue__Lscala_Function0 = (function() {
  if (((this.bitmap$0$2 & 2) === 0)) {
    return this.getExitValue$lzycompute__p2__Lscala_Function0()
  } else {
    return this.getExitValue$2
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.destroyer__Lscala_Function0 = (function() {
  if (((this.bitmap$0$2 & 4) === 0)) {
    return this.destroyer$lzycompute__p2__Lscala_Function0()
  } else {
    return this.destroyer$2
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.runInterruptible__Lscala_Function0__Lscala_Function0__Lscala_Option = (function(action, destroyImpl) {
  try {
    return new ScalaJS.c.scala_Some().init___O(action.apply__O())
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var x1 = $jsexc$;
    var catchExpr1 = ScalaJS.modules.scala_sys_process_processInternal().onInterrupt__Lscala_Function0__Lscala_PartialFunction(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(destroyImpl$1) {
      return (function() {
        destroyImpl$1.apply$mcV$sp__V();
        return ScalaJS.modules.scala_None()
      })
    })(destroyImpl)));
    if (catchExpr1.isDefinedAt__O__Z(x1)) {
      return ScalaJS.as.scala_Option(catchExpr1.apply__O__O(x1))
    } else {
      throw ScalaJS.unwrapJavaScriptException(x1)
    }
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.scala$sys$process$ProcessImpl$CompoundProcess$$$outer__Lscala_sys_process_Process$ = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.scala$sys$process$ProcessImpl$CompoundProcess$$$outer__ = (function() {
  return this.scala$sys$process$ProcessImpl$CompoundProcess$$$outer__Lscala_sys_process_Process$()
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.runInterruptible__Lscala_Function0__Lscala_Function0__ = (function(action, destroyImpl) {
  return this.runInterruptible__Lscala_Function0__Lscala_Function0__Lscala_Option(action, destroyImpl)
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.destroyer__ = (function() {
  return this.destroyer__Lscala_Function0()
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.getExitValue__ = (function() {
  return this.getExitValue__Lscala_Function0()
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.runAndExitValue__ = (function() {
  return this.runAndExitValue__Lscala_Option()
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$CompoundProcess = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$CompoundProcess.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$CompoundProcess = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$CompoundProcess)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$CompoundProcess = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$CompoundProcess(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$CompoundProcess")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$CompoundProcess = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$CompoundProcess)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$CompoundProcess = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$CompoundProcess(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$CompoundProcess;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$CompoundProcess = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$CompoundProcess: 0
}, false, "scala.sys.process.ProcessImpl$CompoundProcess", ScalaJS.data.scala_sys_process_ProcessImpl$BasicProcess, {
  scala_sys_process_ProcessImpl$CompoundProcess: 1,
  scala_sys_process_ProcessImpl$BasicProcess: 1,
  scala_sys_process_Process: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$CompoundProcess.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$CompoundProcess;
//@ sourceMappingURL=ProcessImpl$CompoundProcess.js.map
