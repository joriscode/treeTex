/** @constructor */
ScalaJS.c.java_lang_SecurityException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_SecurityException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_SecurityException.prototype.constructor = ScalaJS.c.java_lang_SecurityException;
ScalaJS.c.java_lang_SecurityException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_SecurityException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_SecurityException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_SecurityException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_SecurityException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_SecurityException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_SecurityException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_SecurityException.prototype = ScalaJS.c.java_lang_SecurityException.prototype;
ScalaJS.is.java_lang_SecurityException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_SecurityException)))
});
ScalaJS.as.java_lang_SecurityException = (function(obj) {
  if ((ScalaJS.is.java_lang_SecurityException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.SecurityException")
  }
});
ScalaJS.isArrayOf.java_lang_SecurityException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_SecurityException)))
});
ScalaJS.asArrayOf.java_lang_SecurityException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_SecurityException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth)
  }
});
ScalaJS.data.java_lang_SecurityException = new ScalaJS.ClassTypeData({
  java_lang_SecurityException: 0
}, false, "java.lang.SecurityException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_SecurityException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_SecurityException.prototype.$classData = ScalaJS.data.java_lang_SecurityException;
//@ sourceMappingURL=SecurityException.js.map
