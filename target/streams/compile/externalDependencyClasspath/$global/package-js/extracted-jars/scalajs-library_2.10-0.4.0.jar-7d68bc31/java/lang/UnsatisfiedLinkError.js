/** @constructor */
ScalaJS.c.java_lang_UnsatisfiedLinkError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_UnsatisfiedLinkError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_UnsatisfiedLinkError.prototype.constructor = ScalaJS.c.java_lang_UnsatisfiedLinkError;
ScalaJS.c.java_lang_UnsatisfiedLinkError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_UnsatisfiedLinkError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_UnsatisfiedLinkError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_UnsatisfiedLinkError.prototype = ScalaJS.c.java_lang_UnsatisfiedLinkError.prototype;
ScalaJS.is.java_lang_UnsatisfiedLinkError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_UnsatisfiedLinkError)))
});
ScalaJS.as.java_lang_UnsatisfiedLinkError = (function(obj) {
  if ((ScalaJS.is.java_lang_UnsatisfiedLinkError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.UnsatisfiedLinkError")
  }
});
ScalaJS.isArrayOf.java_lang_UnsatisfiedLinkError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_UnsatisfiedLinkError)))
});
ScalaJS.asArrayOf.java_lang_UnsatisfiedLinkError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_UnsatisfiedLinkError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.UnsatisfiedLinkError;", depth)
  }
});
ScalaJS.data.java_lang_UnsatisfiedLinkError = new ScalaJS.ClassTypeData({
  java_lang_UnsatisfiedLinkError: 0
}, false, "java.lang.UnsatisfiedLinkError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_UnsatisfiedLinkError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_UnsatisfiedLinkError.prototype.$classData = ScalaJS.data.java_lang_UnsatisfiedLinkError;
//@ sourceMappingURL=UnsatisfiedLinkError.js.map
