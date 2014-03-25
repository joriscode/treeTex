/** @constructor */
ScalaJS.c.java_lang_VirtualMachineError = (function() {
  ScalaJS.c.java_lang_Error.call(this)
});
ScalaJS.c.java_lang_VirtualMachineError.prototype = new ScalaJS.inheritable.java_lang_Error();
ScalaJS.c.java_lang_VirtualMachineError.prototype.constructor = ScalaJS.c.java_lang_VirtualMachineError;
ScalaJS.c.java_lang_VirtualMachineError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_VirtualMachineError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_VirtualMachineError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_VirtualMachineError.prototype = ScalaJS.c.java_lang_VirtualMachineError.prototype;
ScalaJS.is.java_lang_VirtualMachineError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_VirtualMachineError)))
});
ScalaJS.as.java_lang_VirtualMachineError = (function(obj) {
  if ((ScalaJS.is.java_lang_VirtualMachineError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.VirtualMachineError")
  }
});
ScalaJS.isArrayOf.java_lang_VirtualMachineError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_VirtualMachineError)))
});
ScalaJS.asArrayOf.java_lang_VirtualMachineError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_VirtualMachineError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.VirtualMachineError;", depth)
  }
});
ScalaJS.data.java_lang_VirtualMachineError = new ScalaJS.ClassTypeData({
  java_lang_VirtualMachineError: 0
}, false, "java.lang.VirtualMachineError", ScalaJS.data.java_lang_Error, {
  java_lang_VirtualMachineError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_VirtualMachineError.prototype.$classData = ScalaJS.data.java_lang_VirtualMachineError;
//@ sourceMappingURL=VirtualMachineError.js.map
