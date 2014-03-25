/** @constructor */
ScalaJS.c.java_lang_NoSuchMethodException = (function() {
  ScalaJS.c.java_lang_ReflectiveOperationException.call(this)
});
ScalaJS.c.java_lang_NoSuchMethodException.prototype = new ScalaJS.inheritable.java_lang_ReflectiveOperationException();
ScalaJS.c.java_lang_NoSuchMethodException.prototype.constructor = ScalaJS.c.java_lang_NoSuchMethodException;
ScalaJS.c.java_lang_NoSuchMethodException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NoSuchMethodException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NoSuchMethodException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NoSuchMethodException.prototype = ScalaJS.c.java_lang_NoSuchMethodException.prototype;
ScalaJS.is.java_lang_NoSuchMethodException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NoSuchMethodException)))
});
ScalaJS.as.java_lang_NoSuchMethodException = (function(obj) {
  if ((ScalaJS.is.java_lang_NoSuchMethodException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NoSuchMethodException")
  }
});
ScalaJS.isArrayOf.java_lang_NoSuchMethodException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NoSuchMethodException)))
});
ScalaJS.asArrayOf.java_lang_NoSuchMethodException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NoSuchMethodException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NoSuchMethodException;", depth)
  }
});
ScalaJS.data.java_lang_NoSuchMethodException = new ScalaJS.ClassTypeData({
  java_lang_NoSuchMethodException: 0
}, false, "java.lang.NoSuchMethodException", ScalaJS.data.java_lang_ReflectiveOperationException, {
  java_lang_NoSuchMethodException: 1,
  java_lang_ReflectiveOperationException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NoSuchMethodException.prototype.$classData = ScalaJS.data.java_lang_NoSuchMethodException;
//@ sourceMappingURL=NoSuchMethodException.js.map
