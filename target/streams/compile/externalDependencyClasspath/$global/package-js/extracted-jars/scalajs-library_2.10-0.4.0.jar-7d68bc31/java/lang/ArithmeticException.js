/** @constructor */
ScalaJS.c.java_lang_ArithmeticException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_ArithmeticException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_ArithmeticException.prototype.constructor = ScalaJS.c.java_lang_ArithmeticException;
ScalaJS.c.java_lang_ArithmeticException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ArithmeticException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ArithmeticException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ArithmeticException.prototype = ScalaJS.c.java_lang_ArithmeticException.prototype;
ScalaJS.is.java_lang_ArithmeticException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ArithmeticException)))
});
ScalaJS.as.java_lang_ArithmeticException = (function(obj) {
  if ((ScalaJS.is.java_lang_ArithmeticException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ArithmeticException")
  }
});
ScalaJS.isArrayOf.java_lang_ArithmeticException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ArithmeticException)))
});
ScalaJS.asArrayOf.java_lang_ArithmeticException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ArithmeticException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ArithmeticException;", depth)
  }
});
ScalaJS.data.java_lang_ArithmeticException = new ScalaJS.ClassTypeData({
  java_lang_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_ArithmeticException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ArithmeticException.prototype.$classData = ScalaJS.data.java_lang_ArithmeticException;
//@ sourceMappingURL=ArithmeticException.js.map
