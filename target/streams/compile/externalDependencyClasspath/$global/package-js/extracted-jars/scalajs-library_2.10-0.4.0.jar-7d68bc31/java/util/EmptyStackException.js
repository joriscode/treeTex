/** @constructor */
ScalaJS.c.java_util_EmptyStackException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_util_EmptyStackException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_util_EmptyStackException.prototype.constructor = ScalaJS.c.java_util_EmptyStackException;
/** @constructor */
ScalaJS.inheritable.java_util_EmptyStackException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_EmptyStackException.prototype = ScalaJS.c.java_util_EmptyStackException.prototype;
ScalaJS.is.java_util_EmptyStackException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_EmptyStackException)))
});
ScalaJS.as.java_util_EmptyStackException = (function(obj) {
  if ((ScalaJS.is.java_util_EmptyStackException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.EmptyStackException")
  }
});
ScalaJS.isArrayOf.java_util_EmptyStackException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_EmptyStackException)))
});
ScalaJS.asArrayOf.java_util_EmptyStackException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_EmptyStackException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.EmptyStackException;", depth)
  }
});
ScalaJS.data.java_util_EmptyStackException = new ScalaJS.ClassTypeData({
  java_util_EmptyStackException: 0
}, false, "java.util.EmptyStackException", ScalaJS.data.java_lang_RuntimeException, {
  java_util_EmptyStackException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_EmptyStackException.prototype.$classData = ScalaJS.data.java_util_EmptyStackException;
//@ sourceMappingURL=EmptyStackException.js.map
