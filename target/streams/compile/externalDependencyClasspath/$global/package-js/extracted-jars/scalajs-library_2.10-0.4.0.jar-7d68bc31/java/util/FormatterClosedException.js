/** @constructor */
ScalaJS.c.java_util_FormatterClosedException = (function() {
  ScalaJS.c.java_lang_IllegalStateException.call(this)
});
ScalaJS.c.java_util_FormatterClosedException.prototype = new ScalaJS.inheritable.java_lang_IllegalStateException();
ScalaJS.c.java_util_FormatterClosedException.prototype.constructor = ScalaJS.c.java_util_FormatterClosedException;
/** @constructor */
ScalaJS.inheritable.java_util_FormatterClosedException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_FormatterClosedException.prototype = ScalaJS.c.java_util_FormatterClosedException.prototype;
ScalaJS.is.java_util_FormatterClosedException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_FormatterClosedException)))
});
ScalaJS.as.java_util_FormatterClosedException = (function(obj) {
  if ((ScalaJS.is.java_util_FormatterClosedException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.FormatterClosedException")
  }
});
ScalaJS.isArrayOf.java_util_FormatterClosedException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_FormatterClosedException)))
});
ScalaJS.asArrayOf.java_util_FormatterClosedException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_FormatterClosedException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.FormatterClosedException;", depth)
  }
});
ScalaJS.data.java_util_FormatterClosedException = new ScalaJS.ClassTypeData({
  java_util_FormatterClosedException: 0
}, false, "java.util.FormatterClosedException", ScalaJS.data.java_lang_IllegalStateException, {
  java_util_FormatterClosedException: 1,
  java_lang_IllegalStateException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_FormatterClosedException.prototype.$classData = ScalaJS.data.java_util_FormatterClosedException;
//@ sourceMappingURL=FormatterClosedException.js.map
