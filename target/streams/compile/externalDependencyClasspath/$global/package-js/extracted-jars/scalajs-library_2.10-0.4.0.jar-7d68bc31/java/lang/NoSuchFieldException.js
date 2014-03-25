/** @constructor */
ScalaJS.c.java_lang_NoSuchFieldException = (function() {
  ScalaJS.c.java_lang_ReflectiveOperationException.call(this)
});
ScalaJS.c.java_lang_NoSuchFieldException.prototype = new ScalaJS.inheritable.java_lang_ReflectiveOperationException();
ScalaJS.c.java_lang_NoSuchFieldException.prototype.constructor = ScalaJS.c.java_lang_NoSuchFieldException;
ScalaJS.c.java_lang_NoSuchFieldException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NoSuchFieldException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NoSuchFieldException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NoSuchFieldException.prototype = ScalaJS.c.java_lang_NoSuchFieldException.prototype;
ScalaJS.is.java_lang_NoSuchFieldException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NoSuchFieldException)))
});
ScalaJS.as.java_lang_NoSuchFieldException = (function(obj) {
  if ((ScalaJS.is.java_lang_NoSuchFieldException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NoSuchFieldException")
  }
});
ScalaJS.isArrayOf.java_lang_NoSuchFieldException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NoSuchFieldException)))
});
ScalaJS.asArrayOf.java_lang_NoSuchFieldException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NoSuchFieldException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NoSuchFieldException;", depth)
  }
});
ScalaJS.data.java_lang_NoSuchFieldException = new ScalaJS.ClassTypeData({
  java_lang_NoSuchFieldException: 0
}, false, "java.lang.NoSuchFieldException", ScalaJS.data.java_lang_ReflectiveOperationException, {
  java_lang_NoSuchFieldException: 1,
  java_lang_ReflectiveOperationException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NoSuchFieldException.prototype.$classData = ScalaJS.data.java_lang_NoSuchFieldException;
//@ sourceMappingURL=NoSuchFieldException.js.map
