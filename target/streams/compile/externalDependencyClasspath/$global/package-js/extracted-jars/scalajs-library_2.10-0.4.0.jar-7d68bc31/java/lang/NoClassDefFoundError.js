/** @constructor */
ScalaJS.c.java_lang_NoClassDefFoundError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_NoClassDefFoundError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_NoClassDefFoundError.prototype.constructor = ScalaJS.c.java_lang_NoClassDefFoundError;
ScalaJS.c.java_lang_NoClassDefFoundError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NoClassDefFoundError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NoClassDefFoundError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NoClassDefFoundError.prototype = ScalaJS.c.java_lang_NoClassDefFoundError.prototype;
ScalaJS.is.java_lang_NoClassDefFoundError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NoClassDefFoundError)))
});
ScalaJS.as.java_lang_NoClassDefFoundError = (function(obj) {
  if ((ScalaJS.is.java_lang_NoClassDefFoundError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NoClassDefFoundError")
  }
});
ScalaJS.isArrayOf.java_lang_NoClassDefFoundError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NoClassDefFoundError)))
});
ScalaJS.asArrayOf.java_lang_NoClassDefFoundError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NoClassDefFoundError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NoClassDefFoundError;", depth)
  }
});
ScalaJS.data.java_lang_NoClassDefFoundError = new ScalaJS.ClassTypeData({
  java_lang_NoClassDefFoundError: 0
}, false, "java.lang.NoClassDefFoundError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_NoClassDefFoundError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NoClassDefFoundError.prototype.$classData = ScalaJS.data.java_lang_NoClassDefFoundError;
//@ sourceMappingURL=NoClassDefFoundError.js.map
