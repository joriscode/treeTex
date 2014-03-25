/** @constructor */
ScalaJS.c.java_lang_BootstrapMethodError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_BootstrapMethodError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_BootstrapMethodError.prototype.constructor = ScalaJS.c.java_lang_BootstrapMethodError;
ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___T__Ljava_lang_Throwable = (function(s, e) {
  ScalaJS.c.java_lang_LinkageError.prototype.init___T.call(this, s);
  return this
});
ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_BootstrapMethodError.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_BootstrapMethodError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_BootstrapMethodError.prototype = ScalaJS.c.java_lang_BootstrapMethodError.prototype;
ScalaJS.is.java_lang_BootstrapMethodError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_BootstrapMethodError)))
});
ScalaJS.as.java_lang_BootstrapMethodError = (function(obj) {
  if ((ScalaJS.is.java_lang_BootstrapMethodError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.BootstrapMethodError")
  }
});
ScalaJS.isArrayOf.java_lang_BootstrapMethodError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_BootstrapMethodError)))
});
ScalaJS.asArrayOf.java_lang_BootstrapMethodError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_BootstrapMethodError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.BootstrapMethodError;", depth)
  }
});
ScalaJS.data.java_lang_BootstrapMethodError = new ScalaJS.ClassTypeData({
  java_lang_BootstrapMethodError: 0
}, false, "java.lang.BootstrapMethodError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_BootstrapMethodError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_BootstrapMethodError.prototype.$classData = ScalaJS.data.java_lang_BootstrapMethodError;
//@ sourceMappingURL=BootstrapMethodError.js.map
