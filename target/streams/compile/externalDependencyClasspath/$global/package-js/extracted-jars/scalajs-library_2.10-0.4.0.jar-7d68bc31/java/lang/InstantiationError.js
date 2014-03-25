/** @constructor */
ScalaJS.c.java_lang_InstantiationError = (function() {
  ScalaJS.c.java_lang_IncompatibleClassChangeError.call(this)
});
ScalaJS.c.java_lang_InstantiationError.prototype = new ScalaJS.inheritable.java_lang_IncompatibleClassChangeError();
ScalaJS.c.java_lang_InstantiationError.prototype.constructor = ScalaJS.c.java_lang_InstantiationError;
ScalaJS.c.java_lang_InstantiationError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_InstantiationError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_InstantiationError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_InstantiationError.prototype = ScalaJS.c.java_lang_InstantiationError.prototype;
ScalaJS.is.java_lang_InstantiationError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_InstantiationError)))
});
ScalaJS.as.java_lang_InstantiationError = (function(obj) {
  if ((ScalaJS.is.java_lang_InstantiationError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.InstantiationError")
  }
});
ScalaJS.isArrayOf.java_lang_InstantiationError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_InstantiationError)))
});
ScalaJS.asArrayOf.java_lang_InstantiationError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_InstantiationError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.InstantiationError;", depth)
  }
});
ScalaJS.data.java_lang_InstantiationError = new ScalaJS.ClassTypeData({
  java_lang_InstantiationError: 0
}, false, "java.lang.InstantiationError", ScalaJS.data.java_lang_IncompatibleClassChangeError, {
  java_lang_InstantiationError: 1,
  java_lang_IncompatibleClassChangeError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_InstantiationError.prototype.$classData = ScalaJS.data.java_lang_InstantiationError;
//@ sourceMappingURL=InstantiationError.js.map
