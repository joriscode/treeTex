/** @constructor */
ScalaJS.c.java_lang_NoSuchFieldError = (function() {
  ScalaJS.c.java_lang_IncompatibleClassChangeError.call(this)
});
ScalaJS.c.java_lang_NoSuchFieldError.prototype = new ScalaJS.inheritable.java_lang_IncompatibleClassChangeError();
ScalaJS.c.java_lang_NoSuchFieldError.prototype.constructor = ScalaJS.c.java_lang_NoSuchFieldError;
ScalaJS.c.java_lang_NoSuchFieldError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NoSuchFieldError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NoSuchFieldError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NoSuchFieldError.prototype = ScalaJS.c.java_lang_NoSuchFieldError.prototype;
ScalaJS.is.java_lang_NoSuchFieldError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NoSuchFieldError)))
});
ScalaJS.as.java_lang_NoSuchFieldError = (function(obj) {
  if ((ScalaJS.is.java_lang_NoSuchFieldError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NoSuchFieldError")
  }
});
ScalaJS.isArrayOf.java_lang_NoSuchFieldError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NoSuchFieldError)))
});
ScalaJS.asArrayOf.java_lang_NoSuchFieldError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NoSuchFieldError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NoSuchFieldError;", depth)
  }
});
ScalaJS.data.java_lang_NoSuchFieldError = new ScalaJS.ClassTypeData({
  java_lang_NoSuchFieldError: 0
}, false, "java.lang.NoSuchFieldError", ScalaJS.data.java_lang_IncompatibleClassChangeError, {
  java_lang_NoSuchFieldError: 1,
  java_lang_IncompatibleClassChangeError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NoSuchFieldError.prototype.$classData = ScalaJS.data.java_lang_NoSuchFieldError;
//@ sourceMappingURL=NoSuchFieldError.js.map
