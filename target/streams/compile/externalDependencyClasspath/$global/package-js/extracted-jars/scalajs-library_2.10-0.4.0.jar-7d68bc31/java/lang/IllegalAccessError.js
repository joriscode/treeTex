/** @constructor */
ScalaJS.c.java_lang_IllegalAccessError = (function() {
  ScalaJS.c.java_lang_IncompatibleClassChangeError.call(this)
});
ScalaJS.c.java_lang_IllegalAccessError.prototype = new ScalaJS.inheritable.java_lang_IncompatibleClassChangeError();
ScalaJS.c.java_lang_IllegalAccessError.prototype.constructor = ScalaJS.c.java_lang_IllegalAccessError;
ScalaJS.c.java_lang_IllegalAccessError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IllegalAccessError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IllegalAccessError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IllegalAccessError.prototype = ScalaJS.c.java_lang_IllegalAccessError.prototype;
ScalaJS.is.java_lang_IllegalAccessError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IllegalAccessError)))
});
ScalaJS.as.java_lang_IllegalAccessError = (function(obj) {
  if ((ScalaJS.is.java_lang_IllegalAccessError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IllegalAccessError")
  }
});
ScalaJS.isArrayOf.java_lang_IllegalAccessError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IllegalAccessError)))
});
ScalaJS.asArrayOf.java_lang_IllegalAccessError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IllegalAccessError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IllegalAccessError;", depth)
  }
});
ScalaJS.data.java_lang_IllegalAccessError = new ScalaJS.ClassTypeData({
  java_lang_IllegalAccessError: 0
}, false, "java.lang.IllegalAccessError", ScalaJS.data.java_lang_IncompatibleClassChangeError, {
  java_lang_IllegalAccessError: 1,
  java_lang_IncompatibleClassChangeError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IllegalAccessError.prototype.$classData = ScalaJS.data.java_lang_IllegalAccessError;
//@ sourceMappingURL=IllegalAccessError.js.map
