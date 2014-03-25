/** @constructor */
ScalaJS.c.scala_sys_process_ProcessImpl$Future$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.$$outer$1 = null
});
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.constructor = ScalaJS.c.scala_sys_process_ProcessImpl$Future$;
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.apply__Lscala_Function0__Lscala_Function0 = (function(f$3) {
  var result = new ScalaJS.c.scala_concurrent_SyncVar().init___();
  this.$$outer$1.Spawn__Lscala_sys_process_ProcessImpl$Spawn$().apply__Lscala_Function0__Ljava_lang_Thread(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, f$2, result$1) {
    return (function() {
      arg$outer.scala$sys$process$ProcessImpl$Future$$run$1__Lscala_Function0__Lscala_concurrent_SyncVar__V(f$2, result$1);
      return ScalaJS.bV(undefined)
    })
  })(this, f$3, result)));
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(result$1) {
    return (function() {
      var x1 = ScalaJS.as.scala_util_Either(result$1.get__O());
      if (ScalaJS.is.scala_util_Right(x1)) {
        var x2 = ScalaJS.as.scala_util_Right(x1);
        var value = x2.b__O();
        return value
      };
      if (ScalaJS.is.scala_util_Left(x1)) {
        var x3 = ScalaJS.as.scala_util_Left(x1);
        var exception = ScalaJS.as.java_lang_Throwable(x3.a__O());
        throw ScalaJS.unwrapJavaScriptException(exception)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(result))
});
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.scala$sys$process$ProcessImpl$Future$$run$1__Lscala_Function0__Lscala_concurrent_SyncVar__V = (function(f$2, result$1) {
  try {
    result$1.set__O__V(ScalaJS.modules.scala_package().Right__Lscala_util_Right$().apply__O__Lscala_util_Right(f$2.apply__O()))
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    if (ScalaJS.is.java_lang_Exception($jsexc$)) {
      var e = $jsexc$;
      result$1.set__O__V(ScalaJS.modules.scala_package().Left__Lscala_util_Left$().apply__O__Lscala_util_Left(e))
    } else {
      throw ScalaJS.unwrapJavaScriptException($jsexc$)
    }
  }
});
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.init___Lscala_sys_process_Process$ = (function($$outer) {
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$1 = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.scala$sys$process$ProcessImpl$Future$$run$1__Lscala_Function0__Lscala_concurrent_SyncVar__ = (function(f$2, result$1) {
  return ScalaJS.bV(this.scala$sys$process$ProcessImpl$Future$$run$1__Lscala_Function0__Lscala_concurrent_SyncVar__V(f$2, result$1))
});
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.apply__Lscala_Function0__ = (function(f) {
  return this.apply__Lscala_Function0__Lscala_Function0(f)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_ProcessImpl$Future$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_ProcessImpl$Future$.prototype = ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype;
ScalaJS.is.scala_sys_process_ProcessImpl$Future$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_ProcessImpl$Future$)))
});
ScalaJS.as.scala_sys_process_ProcessImpl$Future$ = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_ProcessImpl$Future$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.ProcessImpl$Future")
  }
});
ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$Future$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_ProcessImpl$Future$)))
});
ScalaJS.asArrayOf.scala_sys_process_ProcessImpl$Future$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_ProcessImpl$Future$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.ProcessImpl$Future;", depth)
  }
});
ScalaJS.data.scala_sys_process_ProcessImpl$Future$ = new ScalaJS.ClassTypeData({
  scala_sys_process_ProcessImpl$Future$: 0
}, false, "scala.sys.process.ProcessImpl$Future$", ScalaJS.data.java_lang_Object, {
  scala_sys_process_ProcessImpl$Future$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_ProcessImpl$Future$.prototype.$classData = ScalaJS.data.scala_sys_process_ProcessImpl$Future$;
//@ sourceMappingURL=ProcessImpl$Future$.js.map
