/** @constructor */
ScalaJS.c.java_lang_VerifyError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_VerifyError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_VerifyError.prototype.constructor = ScalaJS.c.java_lang_VerifyError;
ScalaJS.c.java_lang_VerifyError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_VerifyError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_VerifyError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_VerifyError.prototype = ScalaJS.c.java_lang_VerifyError.prototype;
ScalaJS.is.java_lang_VerifyError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_VerifyError)))
});
ScalaJS.as.java_lang_VerifyError = (function(obj) {
  if ((ScalaJS.is.java_lang_VerifyError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.VerifyError")
  }
});
ScalaJS.isArrayOf.java_lang_VerifyError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_VerifyError)))
});
ScalaJS.asArrayOf.java_lang_VerifyError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_VerifyError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.VerifyError;", depth)
  }
});
ScalaJS.data.java_lang_VerifyError = new ScalaJS.ClassTypeData({
  java_lang_VerifyError: 0
}, false, "java.lang.VerifyError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_VerifyError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_VerifyError.prototype.$classData = ScalaJS.data.java_lang_VerifyError;
//@ sourceMappingURL=VerifyError.js.map
