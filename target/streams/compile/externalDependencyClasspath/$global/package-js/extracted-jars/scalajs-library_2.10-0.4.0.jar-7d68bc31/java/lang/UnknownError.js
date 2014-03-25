/** @constructor */
ScalaJS.c.java_lang_UnknownError = (function() {
  ScalaJS.c.java_lang_VirtualMachineError.call(this)
});
ScalaJS.c.java_lang_UnknownError.prototype = new ScalaJS.inheritable.java_lang_VirtualMachineError();
ScalaJS.c.java_lang_UnknownError.prototype.constructor = ScalaJS.c.java_lang_UnknownError;
ScalaJS.c.java_lang_UnknownError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_UnknownError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_UnknownError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_UnknownError.prototype = ScalaJS.c.java_lang_UnknownError.prototype;
ScalaJS.is.java_lang_UnknownError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_UnknownError)))
});
ScalaJS.as.java_lang_UnknownError = (function(obj) {
  if ((ScalaJS.is.java_lang_UnknownError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.UnknownError")
  }
});
ScalaJS.isArrayOf.java_lang_UnknownError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_UnknownError)))
});
ScalaJS.asArrayOf.java_lang_UnknownError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_UnknownError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.UnknownError;", depth)
  }
});
ScalaJS.data.java_lang_UnknownError = new ScalaJS.ClassTypeData({
  java_lang_UnknownError: 0
}, false, "java.lang.UnknownError", ScalaJS.data.java_lang_VirtualMachineError, {
  java_lang_UnknownError: 1,
  java_lang_VirtualMachineError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_UnknownError.prototype.$classData = ScalaJS.data.java_lang_UnknownError;
//@ sourceMappingURL=UnknownError.js.map
