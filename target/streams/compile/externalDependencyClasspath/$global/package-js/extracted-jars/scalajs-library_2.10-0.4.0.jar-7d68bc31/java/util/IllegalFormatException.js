/** @constructor */
ScalaJS.c.java_util_IllegalFormatException = (function() {
  ScalaJS.c.java_lang_IllegalArgumentException.call(this)
});
ScalaJS.c.java_util_IllegalFormatException.prototype = new ScalaJS.inheritable.java_lang_IllegalArgumentException();
ScalaJS.c.java_util_IllegalFormatException.prototype.constructor = ScalaJS.c.java_util_IllegalFormatException;
/** @constructor */
ScalaJS.inheritable.java_util_IllegalFormatException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllegalFormatException.prototype = ScalaJS.c.java_util_IllegalFormatException.prototype;
ScalaJS.is.java_util_IllegalFormatException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllegalFormatException)))
});
ScalaJS.as.java_util_IllegalFormatException = (function(obj) {
  if ((ScalaJS.is.java_util_IllegalFormatException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllegalFormatException")
  }
});
ScalaJS.isArrayOf.java_util_IllegalFormatException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllegalFormatException)))
});
ScalaJS.asArrayOf.java_util_IllegalFormatException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllegalFormatException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllegalFormatException;", depth)
  }
});
ScalaJS.data.java_util_IllegalFormatException = new ScalaJS.ClassTypeData({
  java_util_IllegalFormatException: 0
}, false, "java.util.IllegalFormatException", ScalaJS.data.java_lang_IllegalArgumentException, {
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllegalFormatException.prototype.$classData = ScalaJS.data.java_util_IllegalFormatException;
//@ sourceMappingURL=IllegalFormatException.js.map
