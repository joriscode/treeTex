/** @constructor */
ScalaJS.c.java_lang_UnsupportedClassVersionError = (function() {
  ScalaJS.c.java_lang_ClassFormatError.call(this)
});
ScalaJS.c.java_lang_UnsupportedClassVersionError.prototype = new ScalaJS.inheritable.java_lang_ClassFormatError();
ScalaJS.c.java_lang_UnsupportedClassVersionError.prototype.constructor = ScalaJS.c.java_lang_UnsupportedClassVersionError;
ScalaJS.c.java_lang_UnsupportedClassVersionError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_UnsupportedClassVersionError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_UnsupportedClassVersionError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_UnsupportedClassVersionError.prototype = ScalaJS.c.java_lang_UnsupportedClassVersionError.prototype;
ScalaJS.is.java_lang_UnsupportedClassVersionError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_UnsupportedClassVersionError)))
});
ScalaJS.as.java_lang_UnsupportedClassVersionError = (function(obj) {
  if ((ScalaJS.is.java_lang_UnsupportedClassVersionError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.UnsupportedClassVersionError")
  }
});
ScalaJS.isArrayOf.java_lang_UnsupportedClassVersionError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_UnsupportedClassVersionError)))
});
ScalaJS.asArrayOf.java_lang_UnsupportedClassVersionError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_UnsupportedClassVersionError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.UnsupportedClassVersionError;", depth)
  }
});
ScalaJS.data.java_lang_UnsupportedClassVersionError = new ScalaJS.ClassTypeData({
  java_lang_UnsupportedClassVersionError: 0
}, false, "java.lang.UnsupportedClassVersionError", ScalaJS.data.java_lang_ClassFormatError, {
  java_lang_UnsupportedClassVersionError: 1,
  java_lang_ClassFormatError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_UnsupportedClassVersionError.prototype.$classData = ScalaJS.data.java_lang_UnsupportedClassVersionError;
//@ sourceMappingURL=UnsupportedClassVersionError.js.map
