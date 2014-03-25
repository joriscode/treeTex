/** @constructor */
ScalaJS.c.java_util_NoSuchElementException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_util_NoSuchElementException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_util_NoSuchElementException.prototype.constructor = ScalaJS.c.java_util_NoSuchElementException;
ScalaJS.c.java_util_NoSuchElementException.prototype.init___ = (function() {
  ScalaJS.c.java_util_NoSuchElementException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_NoSuchElementException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_NoSuchElementException.prototype = ScalaJS.c.java_util_NoSuchElementException.prototype;
ScalaJS.is.java_util_NoSuchElementException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_NoSuchElementException)))
});
ScalaJS.as.java_util_NoSuchElementException = (function(obj) {
  if ((ScalaJS.is.java_util_NoSuchElementException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.NoSuchElementException")
  }
});
ScalaJS.isArrayOf.java_util_NoSuchElementException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_NoSuchElementException)))
});
ScalaJS.asArrayOf.java_util_NoSuchElementException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_NoSuchElementException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.NoSuchElementException;", depth)
  }
});
ScalaJS.data.java_util_NoSuchElementException = new ScalaJS.ClassTypeData({
  java_util_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", ScalaJS.data.java_lang_RuntimeException, {
  java_util_NoSuchElementException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_NoSuchElementException.prototype.$classData = ScalaJS.data.java_util_NoSuchElementException;
//@ sourceMappingURL=NoSuchElementException.js.map
