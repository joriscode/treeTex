/** @constructor */
ScalaJS.c.java_lang_OutOfMemoryError = (function() {
  ScalaJS.c.java_lang_VirtualMachineError.call(this)
});
ScalaJS.c.java_lang_OutOfMemoryError.prototype = new ScalaJS.inheritable.java_lang_VirtualMachineError();
ScalaJS.c.java_lang_OutOfMemoryError.prototype.constructor = ScalaJS.c.java_lang_OutOfMemoryError;
ScalaJS.c.java_lang_OutOfMemoryError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_OutOfMemoryError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_OutOfMemoryError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_OutOfMemoryError.prototype = ScalaJS.c.java_lang_OutOfMemoryError.prototype;
ScalaJS.is.java_lang_OutOfMemoryError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_OutOfMemoryError)))
});
ScalaJS.as.java_lang_OutOfMemoryError = (function(obj) {
  if ((ScalaJS.is.java_lang_OutOfMemoryError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.OutOfMemoryError")
  }
});
ScalaJS.isArrayOf.java_lang_OutOfMemoryError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_OutOfMemoryError)))
});
ScalaJS.asArrayOf.java_lang_OutOfMemoryError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_OutOfMemoryError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.OutOfMemoryError;", depth)
  }
});
ScalaJS.data.java_lang_OutOfMemoryError = new ScalaJS.ClassTypeData({
  java_lang_OutOfMemoryError: 0
}, false, "java.lang.OutOfMemoryError", ScalaJS.data.java_lang_VirtualMachineError, {
  java_lang_OutOfMemoryError: 1,
  java_lang_VirtualMachineError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_OutOfMemoryError.prototype.$classData = ScalaJS.data.java_lang_OutOfMemoryError;
//@ sourceMappingURL=OutOfMemoryError.js.map
