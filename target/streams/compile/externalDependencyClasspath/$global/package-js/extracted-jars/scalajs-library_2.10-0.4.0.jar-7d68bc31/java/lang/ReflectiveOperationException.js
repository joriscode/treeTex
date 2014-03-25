/** @constructor */
ScalaJS.c.java_lang_ReflectiveOperationException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.java_lang_ReflectiveOperationException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.java_lang_ReflectiveOperationException.prototype.constructor = ScalaJS.c.java_lang_ReflectiveOperationException;
ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ReflectiveOperationException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ReflectiveOperationException.prototype = ScalaJS.c.java_lang_ReflectiveOperationException.prototype;
ScalaJS.is.java_lang_ReflectiveOperationException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ReflectiveOperationException)))
});
ScalaJS.as.java_lang_ReflectiveOperationException = (function(obj) {
  if ((ScalaJS.is.java_lang_ReflectiveOperationException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ReflectiveOperationException")
  }
});
ScalaJS.isArrayOf.java_lang_ReflectiveOperationException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ReflectiveOperationException)))
});
ScalaJS.asArrayOf.java_lang_ReflectiveOperationException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ReflectiveOperationException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ReflectiveOperationException;", depth)
  }
});
ScalaJS.data.java_lang_ReflectiveOperationException = new ScalaJS.ClassTypeData({
  java_lang_ReflectiveOperationException: 0
}, false, "java.lang.ReflectiveOperationException", ScalaJS.data.java_lang_Exception, {
  java_lang_ReflectiveOperationException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ReflectiveOperationException.prototype.$classData = ScalaJS.data.java_lang_ReflectiveOperationException;
//@ sourceMappingURL=ReflectiveOperationException.js.map
