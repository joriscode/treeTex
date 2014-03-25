/** @constructor */
ScalaJS.c.java_lang_NullPointerException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_NullPointerException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_NullPointerException.prototype.constructor = ScalaJS.c.java_lang_NullPointerException;
ScalaJS.c.java_lang_NullPointerException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NullPointerException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NullPointerException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NullPointerException.prototype = ScalaJS.c.java_lang_NullPointerException.prototype;
ScalaJS.is.java_lang_NullPointerException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NullPointerException)))
});
ScalaJS.as.java_lang_NullPointerException = (function(obj) {
  if ((ScalaJS.is.java_lang_NullPointerException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NullPointerException")
  }
});
ScalaJS.isArrayOf.java_lang_NullPointerException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NullPointerException)))
});
ScalaJS.asArrayOf.java_lang_NullPointerException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NullPointerException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NullPointerException;", depth)
  }
});
ScalaJS.data.java_lang_NullPointerException = new ScalaJS.ClassTypeData({
  java_lang_NullPointerException: 0
}, false, "java.lang.NullPointerException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_NullPointerException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NullPointerException.prototype.$classData = ScalaJS.data.java_lang_NullPointerException;
//@ sourceMappingURL=NullPointerException.js.map
