/** @constructor */
ScalaJS.c.java_lang_AbstractMethodError = (function() {
  ScalaJS.c.java_lang_IncompatibleClassChangeError.call(this)
});
ScalaJS.c.java_lang_AbstractMethodError.prototype = new ScalaJS.inheritable.java_lang_IncompatibleClassChangeError();
ScalaJS.c.java_lang_AbstractMethodError.prototype.constructor = ScalaJS.c.java_lang_AbstractMethodError;
ScalaJS.c.java_lang_AbstractMethodError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_AbstractMethodError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_AbstractMethodError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_AbstractMethodError.prototype = ScalaJS.c.java_lang_AbstractMethodError.prototype;
ScalaJS.is.java_lang_AbstractMethodError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_AbstractMethodError)))
});
ScalaJS.as.java_lang_AbstractMethodError = (function(obj) {
  if ((ScalaJS.is.java_lang_AbstractMethodError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.AbstractMethodError")
  }
});
ScalaJS.isArrayOf.java_lang_AbstractMethodError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_AbstractMethodError)))
});
ScalaJS.asArrayOf.java_lang_AbstractMethodError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_AbstractMethodError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.AbstractMethodError;", depth)
  }
});
ScalaJS.data.java_lang_AbstractMethodError = new ScalaJS.ClassTypeData({
  java_lang_AbstractMethodError: 0
}, false, "java.lang.AbstractMethodError", ScalaJS.data.java_lang_IncompatibleClassChangeError, {
  java_lang_AbstractMethodError: 1,
  java_lang_IncompatibleClassChangeError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_AbstractMethodError.prototype.$classData = ScalaJS.data.java_lang_AbstractMethodError;
//@ sourceMappingURL=AbstractMethodError.js.map
