/** @constructor */
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this);
  this.handler$1$2 = null
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.constructor = ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1;
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O = (function(x1, default$2) {
  var x1$2 = x1;
  if (ScalaJS.is.java_lang_InterruptedException(x1$2)) {
    return this.handler$1$2.apply__O()
  };
  return default$2.apply__O__O(x1)
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.isDefinedAt__Ljava_lang_Throwable__Z = (function(x1) {
  var x1$2 = x1;
  if (ScalaJS.is.java_lang_InterruptedException(x1$2)) {
    return true
  };
  return false
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__Ljava_lang_Throwable__Z(ScalaJS.as.java_lang_Throwable(x))
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return this.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O(ScalaJS.as.java_lang_Throwable(x), default$2)
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.init___Lscala_Function0 = (function(handler$1) {
  this.handler$1$2 = handler$1;
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.isDefinedAt__Ljava_lang_Throwable__ = (function(x1) {
  return ScalaJS.bZ(this.isDefinedAt__Ljava_lang_Throwable__Z(x1))
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__ = (function(x1$2, default$2) {
  return this.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O(x1$2, default$2)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype = ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype;
ScalaJS.is.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_processInternal$$anonfun$onInterrupt$1)))
});
ScalaJS.as.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_processInternal$$anonfun$onInterrupt$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.processInternal$$anonfun$onInterrupt$1")
  }
});
ScalaJS.isArrayOf.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_processInternal$$anonfun$onInterrupt$1)))
});
ScalaJS.asArrayOf.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_processInternal$$anonfun$onInterrupt$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.processInternal$$anonfun$onInterrupt$1;", depth)
  }
});
ScalaJS.data.scala_sys_process_processInternal$$anonfun$onInterrupt$1 = new ScalaJS.ClassTypeData({
  scala_sys_process_processInternal$$anonfun$onInterrupt$1: 0
}, false, "scala.sys.process.processInternal$$anonfun$onInterrupt$1", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_sys_process_processInternal$$anonfun$onInterrupt$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$onInterrupt$1.prototype.$classData = ScalaJS.data.scala_sys_process_processInternal$$anonfun$onInterrupt$1;
//@ sourceMappingURL=processInternal$$anonfun$onInterrupt$1.js.map
