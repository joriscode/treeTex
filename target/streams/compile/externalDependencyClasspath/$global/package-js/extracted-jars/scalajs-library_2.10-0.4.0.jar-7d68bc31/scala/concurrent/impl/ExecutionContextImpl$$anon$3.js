/** @constructor */
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = (function() {
  ScalaJS.c.scala_concurrent_forkjoin_ForkJoinTask.call(this);
  this.x1$1$2 = null
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype = new ScalaJS.inheritable.scala_concurrent_forkjoin_ForkJoinTask();
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.constructor = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3;
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.setRawResult__Lscala_runtime_BoxedUnit__V = (function(u) {
  /*<skip>*/
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.getRawResult__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.exec__Z = (function() {
  try {
    this.x1$1$2.run__V();
    return true
  } catch ($jsexc$) {
    $jsexc$ = ScalaJS.wrapJavaScriptException($jsexc$);
    var anything = $jsexc$;
    var t = ScalaJS.modules.java_lang_Thread().currentThread__Ljava_lang_Thread();
    var x1 = t.getUncaughtExceptionHandler__Ljava_lang_Thread$UncaughtExceptionHandler();
    matchEnd4: {
      if (ScalaJS.anyRefEqEq(null, x1)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      };
      x1.uncaughtException__Ljava_lang_Thread__Ljava_lang_Throwable__V(t, anything);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    throw ScalaJS.unwrapJavaScriptException(anything)
  }
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.getRawResult__O = (function() {
  this.getRawResult__V();
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.setRawResult__O__V = (function(x$1) {
  this.setRawResult__Lscala_runtime_BoxedUnit__V(ScalaJS.as.scala_runtime_BoxedUnit(x$1))
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.init___Lscala_concurrent_impl_ExecutionContextImpl__Ljava_lang_Runnable = (function($$outer, x1$1) {
  this.x1$1$2 = x1$1;
  ScalaJS.c.scala_concurrent_forkjoin_ForkJoinTask.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.setRawResult__Lscala_runtime_BoxedUnit__ = (function(u) {
  return ScalaJS.bV(this.setRawResult__Lscala_runtime_BoxedUnit__V(u))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype = ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype;
ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_ExecutionContextImpl$$anon$3)))
});
ScalaJS.as.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_ExecutionContextImpl$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.ExecutionContextImpl$$anon$3")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_ExecutionContextImpl$$anon$3)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_ExecutionContextImpl$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.ExecutionContextImpl$$anon$3;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$$anon$3 = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_ExecutionContextImpl$$anon$3: 0
}, false, "scala.concurrent.impl.ExecutionContextImpl$$anon$3", ScalaJS.data.scala_concurrent_forkjoin_ForkJoinTask, {
  scala_concurrent_impl_ExecutionContextImpl$$anon$3: 1,
  scala_concurrent_forkjoin_ForkJoinTask: 1,
  java_io_Serializable: 1,
  java_util_concurrent_Future: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_impl_ExecutionContextImpl$$anon$3.prototype.$classData = ScalaJS.data.scala_concurrent_impl_ExecutionContextImpl$$anon$3;
//@ sourceMappingURL=ExecutionContextImpl$$anon$3.js.map
