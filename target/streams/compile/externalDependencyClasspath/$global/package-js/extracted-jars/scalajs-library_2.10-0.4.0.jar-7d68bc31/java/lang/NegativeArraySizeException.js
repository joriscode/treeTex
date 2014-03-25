/** @constructor */
ScalaJS.c.java_lang_NegativeArraySizeException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_NegativeArraySizeException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_NegativeArraySizeException.prototype.constructor = ScalaJS.c.java_lang_NegativeArraySizeException;
ScalaJS.c.java_lang_NegativeArraySizeException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_NegativeArraySizeException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_NegativeArraySizeException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_NegativeArraySizeException.prototype = ScalaJS.c.java_lang_NegativeArraySizeException.prototype;
ScalaJS.is.java_lang_NegativeArraySizeException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_NegativeArraySizeException)))
});
ScalaJS.as.java_lang_NegativeArraySizeException = (function(obj) {
  if ((ScalaJS.is.java_lang_NegativeArraySizeException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.NegativeArraySizeException")
  }
});
ScalaJS.isArrayOf.java_lang_NegativeArraySizeException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_NegativeArraySizeException)))
});
ScalaJS.asArrayOf.java_lang_NegativeArraySizeException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_NegativeArraySizeException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.NegativeArraySizeException;", depth)
  }
});
ScalaJS.data.java_lang_NegativeArraySizeException = new ScalaJS.ClassTypeData({
  java_lang_NegativeArraySizeException: 0
}, false, "java.lang.NegativeArraySizeException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_NegativeArraySizeException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_NegativeArraySizeException.prototype.$classData = ScalaJS.data.java_lang_NegativeArraySizeException;
//@ sourceMappingURL=NegativeArraySizeException.js.map
