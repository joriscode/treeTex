/** @constructor */
ScalaJS.c.java_lang_IllegalAccessException = (function() {
  ScalaJS.c.java_lang_ReflectiveOperationException.call(this)
});
ScalaJS.c.java_lang_IllegalAccessException.prototype = new ScalaJS.inheritable.java_lang_ReflectiveOperationException();
ScalaJS.c.java_lang_IllegalAccessException.prototype.constructor = ScalaJS.c.java_lang_IllegalAccessException;
ScalaJS.c.java_lang_IllegalAccessException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IllegalAccessException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IllegalAccessException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IllegalAccessException.prototype = ScalaJS.c.java_lang_IllegalAccessException.prototype;
ScalaJS.is.java_lang_IllegalAccessException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IllegalAccessException)))
});
ScalaJS.as.java_lang_IllegalAccessException = (function(obj) {
  if ((ScalaJS.is.java_lang_IllegalAccessException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IllegalAccessException")
  }
});
ScalaJS.isArrayOf.java_lang_IllegalAccessException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IllegalAccessException)))
});
ScalaJS.asArrayOf.java_lang_IllegalAccessException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IllegalAccessException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IllegalAccessException;", depth)
  }
});
ScalaJS.data.java_lang_IllegalAccessException = new ScalaJS.ClassTypeData({
  java_lang_IllegalAccessException: 0
}, false, "java.lang.IllegalAccessException", ScalaJS.data.java_lang_ReflectiveOperationException, {
  java_lang_IllegalAccessException: 1,
  java_lang_ReflectiveOperationException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IllegalAccessException.prototype.$classData = ScalaJS.data.java_lang_IllegalAccessException;
//@ sourceMappingURL=IllegalAccessException.js.map
