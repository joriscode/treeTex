/** @constructor */
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction.call(this);
  this.handler$2$2 = null
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction();
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.constructor = ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1;
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O = (function(x2, default$3) {
  var x1$3 = x2;
  if (ScalaJS.is.java_io_IOException(x1$3)) {
    var x2$2 = ScalaJS.as.java_io_IOException(x1$3);
    return this.handler$2$2.apply__O__O(x2$2)
  };
  return default$3.apply__O__O(x2)
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.isDefinedAt__Ljava_lang_Throwable__Z = (function(x2) {
  var x1 = x2;
  if (ScalaJS.is.java_io_IOException(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__Ljava_lang_Throwable__Z(ScalaJS.as.java_lang_Throwable(x))
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return this.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O(ScalaJS.as.java_lang_Throwable(x), default$2)
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.init___Lscala_Function1 = (function(handler$2) {
  this.handler$2$2 = handler$2;
  ScalaJS.c.scala_runtime_AbstractPartialFunction.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.isDefinedAt__Ljava_lang_Throwable__ = (function(x2) {
  return ScalaJS.bZ(this.isDefinedAt__Ljava_lang_Throwable__Z(x2))
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__ = (function(x2$2, default$2) {
  return this.applyOrElse__Ljava_lang_Throwable__Lscala_Function1__O(x2$2, default$2)
});
/** @constructor */
ScalaJS.inheritable.scala_sys_process_processInternal$$anonfun$ioFailure$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype = ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype;
ScalaJS.is.scala_sys_process_processInternal$$anonfun$ioFailure$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_sys_process_processInternal$$anonfun$ioFailure$1)))
});
ScalaJS.as.scala_sys_process_processInternal$$anonfun$ioFailure$1 = (function(obj) {
  if ((ScalaJS.is.scala_sys_process_processInternal$$anonfun$ioFailure$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.sys.process.processInternal$$anonfun$ioFailure$1")
  }
});
ScalaJS.isArrayOf.scala_sys_process_processInternal$$anonfun$ioFailure$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_sys_process_processInternal$$anonfun$ioFailure$1)))
});
ScalaJS.asArrayOf.scala_sys_process_processInternal$$anonfun$ioFailure$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_sys_process_processInternal$$anonfun$ioFailure$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.sys.process.processInternal$$anonfun$ioFailure$1;", depth)
  }
});
ScalaJS.data.scala_sys_process_processInternal$$anonfun$ioFailure$1 = new ScalaJS.ClassTypeData({
  scala_sys_process_processInternal$$anonfun$ioFailure$1: 0
}, false, "scala.sys.process.processInternal$$anonfun$ioFailure$1", ScalaJS.data.scala_runtime_AbstractPartialFunction, {
  scala_sys_process_processInternal$$anonfun$ioFailure$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_sys_process_processInternal$$anonfun$ioFailure$1.prototype.$classData = ScalaJS.data.scala_sys_process_processInternal$$anonfun$ioFailure$1;
//@ sourceMappingURL=processInternal$$anonfun$ioFailure$1.js.map
