/** @constructor */
ScalaJS.c.java_lang_ExceptionInInitializerError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this);
  this.e$4 = null
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.constructor = ScalaJS.c.java_lang_ExceptionInInitializerError;
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.e__p4__Ljava_lang_Throwable = (function() {
  return this.e$4
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.getException__Ljava_lang_Throwable = (function() {
  return this.e__p4__Ljava_lang_Throwable()
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.getCause__Ljava_lang_Throwable = (function() {
  return this.e__p4__Ljava_lang_Throwable()
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___T__Ljava_lang_Throwable = (function(s, e) {
  this.e$4 = e;
  ScalaJS.c.java_lang_LinkageError.prototype.init___T.call(this, s);
  return this
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___Ljava_lang_Throwable = (function(thrown) {
  ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___T__Ljava_lang_Throwable.call(this, null, thrown);
  return this
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.getException__ = (function() {
  return this.getException__Ljava_lang_Throwable()
});
/** @constructor */
ScalaJS.inheritable.java_lang_ExceptionInInitializerError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ExceptionInInitializerError.prototype = ScalaJS.c.java_lang_ExceptionInInitializerError.prototype;
ScalaJS.is.java_lang_ExceptionInInitializerError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ExceptionInInitializerError)))
});
ScalaJS.as.java_lang_ExceptionInInitializerError = (function(obj) {
  if ((ScalaJS.is.java_lang_ExceptionInInitializerError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ExceptionInInitializerError")
  }
});
ScalaJS.isArrayOf.java_lang_ExceptionInInitializerError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ExceptionInInitializerError)))
});
ScalaJS.asArrayOf.java_lang_ExceptionInInitializerError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ExceptionInInitializerError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ExceptionInInitializerError;", depth)
  }
});
ScalaJS.data.java_lang_ExceptionInInitializerError = new ScalaJS.ClassTypeData({
  java_lang_ExceptionInInitializerError: 0
}, false, "java.lang.ExceptionInInitializerError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_ExceptionInInitializerError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ExceptionInInitializerError.prototype.$classData = ScalaJS.data.java_lang_ExceptionInInitializerError;
//@ sourceMappingURL=ExceptionInInitializerError.js.map
