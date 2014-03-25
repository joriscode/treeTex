/** @constructor */
ScalaJS.c.java_lang_IllegalThreadStateException = (function() {
  ScalaJS.c.java_lang_IllegalArgumentException.call(this)
});
ScalaJS.c.java_lang_IllegalThreadStateException.prototype = new ScalaJS.inheritable.java_lang_IllegalArgumentException();
ScalaJS.c.java_lang_IllegalThreadStateException.prototype.constructor = ScalaJS.c.java_lang_IllegalThreadStateException;
ScalaJS.c.java_lang_IllegalThreadStateException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IllegalThreadStateException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IllegalThreadStateException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IllegalThreadStateException.prototype = ScalaJS.c.java_lang_IllegalThreadStateException.prototype;
ScalaJS.is.java_lang_IllegalThreadStateException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IllegalThreadStateException)))
});
ScalaJS.as.java_lang_IllegalThreadStateException = (function(obj) {
  if ((ScalaJS.is.java_lang_IllegalThreadStateException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IllegalThreadStateException")
  }
});
ScalaJS.isArrayOf.java_lang_IllegalThreadStateException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IllegalThreadStateException)))
});
ScalaJS.asArrayOf.java_lang_IllegalThreadStateException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IllegalThreadStateException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IllegalThreadStateException;", depth)
  }
});
ScalaJS.data.java_lang_IllegalThreadStateException = new ScalaJS.ClassTypeData({
  java_lang_IllegalThreadStateException: 0
}, false, "java.lang.IllegalThreadStateException", ScalaJS.data.java_lang_IllegalArgumentException, {
  java_lang_IllegalThreadStateException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IllegalThreadStateException.prototype.$classData = ScalaJS.data.java_lang_IllegalThreadStateException;
//@ sourceMappingURL=IllegalThreadStateException.js.map
