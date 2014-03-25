/** @constructor */
ScalaJS.c.java_lang_ClassFormatError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_ClassFormatError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_ClassFormatError.prototype.constructor = ScalaJS.c.java_lang_ClassFormatError;
ScalaJS.c.java_lang_ClassFormatError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ClassFormatError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ClassFormatError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ClassFormatError.prototype = ScalaJS.c.java_lang_ClassFormatError.prototype;
ScalaJS.is.java_lang_ClassFormatError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ClassFormatError)))
});
ScalaJS.as.java_lang_ClassFormatError = (function(obj) {
  if ((ScalaJS.is.java_lang_ClassFormatError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ClassFormatError")
  }
});
ScalaJS.isArrayOf.java_lang_ClassFormatError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ClassFormatError)))
});
ScalaJS.asArrayOf.java_lang_ClassFormatError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ClassFormatError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ClassFormatError;", depth)
  }
});
ScalaJS.data.java_lang_ClassFormatError = new ScalaJS.ClassTypeData({
  java_lang_ClassFormatError: 0
}, false, "java.lang.ClassFormatError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_ClassFormatError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ClassFormatError.prototype.$classData = ScalaJS.data.java_lang_ClassFormatError;
//@ sourceMappingURL=ClassFormatError.js.map
