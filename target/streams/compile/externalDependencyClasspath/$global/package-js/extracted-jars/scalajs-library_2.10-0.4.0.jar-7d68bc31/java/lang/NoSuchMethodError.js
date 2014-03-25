/** @constructor */
ScalaJS.c.java_lang_NoSuchMethodError = (function() {
  ScalaJS.c.java_lang_IncompatibleClassChangeError.call(this)
});
ScalaJS.c.java_lang_NoSuchMethodError.prototype = new ScalaJS.inheritable.java_lang_IncompatibleClassChangeError();
ScalaJS.c.java_lang_NoSuchMethodError.prototype.constructor = ScalaJS.c.java_lang_NoSuchMethodError;
ScalaJS.c.java_lang_NoSuchMethodError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NoSuchMethodError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NoSuchMethodError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NoSuchMethodError.prototype = ScalaJS.c.java_lang_NoSuchMethodError.prototype;
ScalaJS.is.java_lang_NoSuchMethodError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NoSuchMethodError)))
});
ScalaJS.as.java_lang_NoSuchMethodError = (function(obj) {
  if ((ScalaJS.is.java_lang_NoSuchMethodError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NoSuchMethodError")
  }
});
ScalaJS.isArrayOf.java_lang_NoSuchMethodError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NoSuchMethodError)))
});
ScalaJS.asArrayOf.java_lang_NoSuchMethodError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NoSuchMethodError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NoSuchMethodError;", depth)
  }
});
ScalaJS.data.java_lang_NoSuchMethodError = new ScalaJS.ClassTypeData({
  java_lang_NoSuchMethodError: 0
}, false, "java.lang.NoSuchMethodError", ScalaJS.data.java_lang_IncompatibleClassChangeError, {
  java_lang_NoSuchMethodError: 1,
  java_lang_IncompatibleClassChangeError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NoSuchMethodError.prototype.$classData = ScalaJS.data.java_lang_NoSuchMethodError;
//@ sourceMappingURL=NoSuchMethodError.js.map
