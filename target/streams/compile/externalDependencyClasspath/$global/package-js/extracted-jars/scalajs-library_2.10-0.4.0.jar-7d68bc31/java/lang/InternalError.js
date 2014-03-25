/** @constructor */
ScalaJS.c.java_lang_InternalError = (function() {
  ScalaJS.c.java_lang_VirtualMachineError.call(this)
});
ScalaJS.c.java_lang_InternalError.prototype = new ScalaJS.inheritable.java_lang_VirtualMachineError();
ScalaJS.c.java_lang_InternalError.prototype.constructor = ScalaJS.c.java_lang_InternalError;
ScalaJS.c.java_lang_InternalError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_InternalError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_InternalError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_InternalError.prototype = ScalaJS.c.java_lang_InternalError.prototype;
ScalaJS.is.java_lang_InternalError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_InternalError)))
});
ScalaJS.as.java_lang_InternalError = (function(obj) {
  if ((ScalaJS.is.java_lang_InternalError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.InternalError")
  }
});
ScalaJS.isArrayOf.java_lang_InternalError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_InternalError)))
});
ScalaJS.asArrayOf.java_lang_InternalError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_InternalError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.InternalError;", depth)
  }
});
ScalaJS.data.java_lang_InternalError = new ScalaJS.ClassTypeData({
  java_lang_InternalError: 0
}, false, "java.lang.InternalError", ScalaJS.data.java_lang_VirtualMachineError, {
  java_lang_InternalError: 1,
  java_lang_VirtualMachineError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_InternalError.prototype.$classData = ScalaJS.data.java_lang_InternalError;
//@ sourceMappingURL=InternalError.js.map
