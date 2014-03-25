/** @constructor */
ScalaJS.c.java_lang_NumberFormatException = (function() {
  ScalaJS.c.java_lang_IllegalArgumentException.call(this)
});
ScalaJS.c.java_lang_NumberFormatException.prototype = new ScalaJS.inheritable.java_lang_IllegalArgumentException();
ScalaJS.c.java_lang_NumberFormatException.prototype.constructor = ScalaJS.c.java_lang_NumberFormatException;
ScalaJS.c.java_lang_NumberFormatException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NumberFormatException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NumberFormatException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NumberFormatException.prototype = ScalaJS.c.java_lang_NumberFormatException.prototype;
ScalaJS.is.java_lang_NumberFormatException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NumberFormatException)))
});
ScalaJS.as.java_lang_NumberFormatException = (function(obj) {
  if ((ScalaJS.is.java_lang_NumberFormatException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NumberFormatException")
  }
});
ScalaJS.isArrayOf.java_lang_NumberFormatException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NumberFormatException)))
});
ScalaJS.asArrayOf.java_lang_NumberFormatException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NumberFormatException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NumberFormatException;", depth)
  }
});
ScalaJS.data.java_lang_NumberFormatException = new ScalaJS.ClassTypeData({
  java_lang_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", ScalaJS.data.java_lang_IllegalArgumentException, {
  java_lang_NumberFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NumberFormatException.prototype.$classData = ScalaJS.data.java_lang_NumberFormatException;
//@ sourceMappingURL=NumberFormatException.js.map
