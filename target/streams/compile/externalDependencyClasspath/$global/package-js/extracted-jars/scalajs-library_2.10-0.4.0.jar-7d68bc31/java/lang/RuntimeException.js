/** @constructor */
ScalaJS.c.java_lang_RuntimeException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.java_lang_RuntimeException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.java_lang_RuntimeException.prototype.constructor = ScalaJS.c.java_lang_RuntimeException;
ScalaJS.c.java_lang_RuntimeException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_RuntimeException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_RuntimeException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_RuntimeException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_RuntimeException.prototype = ScalaJS.c.java_lang_RuntimeException.prototype;
ScalaJS.is.java_lang_RuntimeException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_RuntimeException)))
});
ScalaJS.as.java_lang_RuntimeException = (function(obj) {
  if ((ScalaJS.is.java_lang_RuntimeException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.RuntimeException")
  }
});
ScalaJS.isArrayOf.java_lang_RuntimeException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_RuntimeException)))
});
ScalaJS.asArrayOf.java_lang_RuntimeException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_RuntimeException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.RuntimeException;", depth)
  }
});
ScalaJS.data.java_lang_RuntimeException = new ScalaJS.ClassTypeData({
  java_lang_RuntimeException: 0
}, false, "java.lang.RuntimeException", ScalaJS.data.java_lang_Exception, {
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_RuntimeException.prototype.$classData = ScalaJS.data.java_lang_RuntimeException;
//@ sourceMappingURL=RuntimeException.js.map
