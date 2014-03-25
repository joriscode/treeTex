/** @constructor */
ScalaJS.c.java_util_ConcurrentModificationException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_util_ConcurrentModificationException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_util_ConcurrentModificationException.prototype.constructor = ScalaJS.c.java_util_ConcurrentModificationException;
ScalaJS.c.java_util_ConcurrentModificationException.prototype.init___ = (function() {
  ScalaJS.c.java_util_ConcurrentModificationException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_ConcurrentModificationException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_ConcurrentModificationException.prototype = ScalaJS.c.java_util_ConcurrentModificationException.prototype;
ScalaJS.is.java_util_ConcurrentModificationException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_ConcurrentModificationException)))
});
ScalaJS.as.java_util_ConcurrentModificationException = (function(obj) {
  if ((ScalaJS.is.java_util_ConcurrentModificationException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.ConcurrentModificationException")
  }
});
ScalaJS.isArrayOf.java_util_ConcurrentModificationException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_ConcurrentModificationException)))
});
ScalaJS.asArrayOf.java_util_ConcurrentModificationException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_ConcurrentModificationException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.ConcurrentModificationException;", depth)
  }
});
ScalaJS.data.java_util_ConcurrentModificationException = new ScalaJS.ClassTypeData({
  java_util_ConcurrentModificationException: 0
}, false, "java.util.ConcurrentModificationException", ScalaJS.data.java_lang_RuntimeException, {
  java_util_ConcurrentModificationException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_ConcurrentModificationException.prototype.$classData = ScalaJS.data.java_util_ConcurrentModificationException;
//@ sourceMappingURL=ConcurrentModificationException.js.map
