/** @constructor */
ScalaJS.c.java_lang_StackOverflowError = (function() {
  ScalaJS.c.java_lang_VirtualMachineError.call(this)
});
ScalaJS.c.java_lang_StackOverflowError.prototype = new ScalaJS.inheritable.java_lang_VirtualMachineError();
ScalaJS.c.java_lang_StackOverflowError.prototype.constructor = ScalaJS.c.java_lang_StackOverflowError;
ScalaJS.c.java_lang_StackOverflowError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_StackOverflowError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_StackOverflowError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StackOverflowError.prototype = ScalaJS.c.java_lang_StackOverflowError.prototype;
ScalaJS.is.java_lang_StackOverflowError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StackOverflowError)))
});
ScalaJS.as.java_lang_StackOverflowError = (function(obj) {
  if ((ScalaJS.is.java_lang_StackOverflowError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StackOverflowError")
  }
});
ScalaJS.isArrayOf.java_lang_StackOverflowError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StackOverflowError)))
});
ScalaJS.asArrayOf.java_lang_StackOverflowError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StackOverflowError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StackOverflowError;", depth)
  }
});
ScalaJS.data.java_lang_StackOverflowError = new ScalaJS.ClassTypeData({
  java_lang_StackOverflowError: 0
}, false, "java.lang.StackOverflowError", ScalaJS.data.java_lang_VirtualMachineError, {
  java_lang_StackOverflowError: 1,
  java_lang_VirtualMachineError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StackOverflowError.prototype.$classData = ScalaJS.data.java_lang_StackOverflowError;
//@ sourceMappingURL=StackOverflowError.js.map
