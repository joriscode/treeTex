/** @constructor */
ScalaJS.c.java_lang_IncompatibleClassChangeError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_IncompatibleClassChangeError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_IncompatibleClassChangeError.prototype.constructor = ScalaJS.c.java_lang_IncompatibleClassChangeError;
ScalaJS.c.java_lang_IncompatibleClassChangeError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IncompatibleClassChangeError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IncompatibleClassChangeError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IncompatibleClassChangeError.prototype = ScalaJS.c.java_lang_IncompatibleClassChangeError.prototype;
ScalaJS.is.java_lang_IncompatibleClassChangeError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IncompatibleClassChangeError)))
});
ScalaJS.as.java_lang_IncompatibleClassChangeError = (function(obj) {
  if ((ScalaJS.is.java_lang_IncompatibleClassChangeError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IncompatibleClassChangeError")
  }
});
ScalaJS.isArrayOf.java_lang_IncompatibleClassChangeError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IncompatibleClassChangeError)))
});
ScalaJS.asArrayOf.java_lang_IncompatibleClassChangeError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IncompatibleClassChangeError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IncompatibleClassChangeError;", depth)
  }
});
ScalaJS.data.java_lang_IncompatibleClassChangeError = new ScalaJS.ClassTypeData({
  java_lang_IncompatibleClassChangeError: 0
}, false, "java.lang.IncompatibleClassChangeError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_IncompatibleClassChangeError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IncompatibleClassChangeError.prototype.$classData = ScalaJS.data.java_lang_IncompatibleClassChangeError;
//@ sourceMappingURL=IncompatibleClassChangeError.js.map
