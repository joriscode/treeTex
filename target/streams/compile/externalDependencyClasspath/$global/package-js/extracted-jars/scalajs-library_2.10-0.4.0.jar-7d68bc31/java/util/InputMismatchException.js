/** @constructor */
ScalaJS.c.java_util_InputMismatchException = (function() {
  ScalaJS.c.java_util_NoSuchElementException.call(this)
});
ScalaJS.c.java_util_InputMismatchException.prototype = new ScalaJS.inheritable.java_util_NoSuchElementException();
ScalaJS.c.java_util_InputMismatchException.prototype.constructor = ScalaJS.c.java_util_InputMismatchException;
ScalaJS.c.java_util_InputMismatchException.prototype.init___ = (function() {
  ScalaJS.c.java_util_InputMismatchException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_InputMismatchException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_InputMismatchException.prototype = ScalaJS.c.java_util_InputMismatchException.prototype;
ScalaJS.is.java_util_InputMismatchException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_InputMismatchException)))
});
ScalaJS.as.java_util_InputMismatchException = (function(obj) {
  if ((ScalaJS.is.java_util_InputMismatchException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.InputMismatchException")
  }
});
ScalaJS.isArrayOf.java_util_InputMismatchException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_InputMismatchException)))
});
ScalaJS.asArrayOf.java_util_InputMismatchException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_InputMismatchException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.InputMismatchException;", depth)
  }
});
ScalaJS.data.java_util_InputMismatchException = new ScalaJS.ClassTypeData({
  java_util_InputMismatchException: 0
}, false, "java.util.InputMismatchException", ScalaJS.data.java_util_NoSuchElementException, {
  java_util_InputMismatchException: 1,
  java_util_NoSuchElementException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_InputMismatchException.prototype.$classData = ScalaJS.data.java_util_InputMismatchException;
//@ sourceMappingURL=InputMismatchException.js.map
