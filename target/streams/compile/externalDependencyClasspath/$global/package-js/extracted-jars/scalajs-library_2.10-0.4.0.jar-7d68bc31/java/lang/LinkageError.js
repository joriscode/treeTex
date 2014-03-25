/** @constructor */
ScalaJS.c.java_lang_LinkageError = (function() {
  ScalaJS.c.java_lang_Error.call(this)
});
ScalaJS.c.java_lang_LinkageError.prototype = new ScalaJS.inheritable.java_lang_Error();
ScalaJS.c.java_lang_LinkageError.prototype.constructor = ScalaJS.c.java_lang_LinkageError;
ScalaJS.c.java_lang_LinkageError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_LinkageError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_LinkageError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_LinkageError.prototype = ScalaJS.c.java_lang_LinkageError.prototype;
ScalaJS.is.java_lang_LinkageError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_LinkageError)))
});
ScalaJS.as.java_lang_LinkageError = (function(obj) {
  if ((ScalaJS.is.java_lang_LinkageError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.LinkageError")
  }
});
ScalaJS.isArrayOf.java_lang_LinkageError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_LinkageError)))
});
ScalaJS.asArrayOf.java_lang_LinkageError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_LinkageError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.LinkageError;", depth)
  }
});
ScalaJS.data.java_lang_LinkageError = new ScalaJS.ClassTypeData({
  java_lang_LinkageError: 0
}, false, "java.lang.LinkageError", ScalaJS.data.java_lang_Error, {
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_LinkageError.prototype.$classData = ScalaJS.data.java_lang_LinkageError;
//@ sourceMappingURL=LinkageError.js.map
