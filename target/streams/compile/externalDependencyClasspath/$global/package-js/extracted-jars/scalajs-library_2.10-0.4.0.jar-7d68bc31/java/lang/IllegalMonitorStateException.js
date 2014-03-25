/** @constructor */
ScalaJS.c.java_lang_IllegalMonitorStateException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_IllegalMonitorStateException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_IllegalMonitorStateException.prototype.constructor = ScalaJS.c.java_lang_IllegalMonitorStateException;
ScalaJS.c.java_lang_IllegalMonitorStateException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IllegalMonitorStateException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IllegalMonitorStateException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IllegalMonitorStateException.prototype = ScalaJS.c.java_lang_IllegalMonitorStateException.prototype;
ScalaJS.is.java_lang_IllegalMonitorStateException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IllegalMonitorStateException)))
});
ScalaJS.as.java_lang_IllegalMonitorStateException = (function(obj) {
  if ((ScalaJS.is.java_lang_IllegalMonitorStateException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IllegalMonitorStateException")
  }
});
ScalaJS.isArrayOf.java_lang_IllegalMonitorStateException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IllegalMonitorStateException)))
});
ScalaJS.asArrayOf.java_lang_IllegalMonitorStateException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IllegalMonitorStateException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IllegalMonitorStateException;", depth)
  }
});
ScalaJS.data.java_lang_IllegalMonitorStateException = new ScalaJS.ClassTypeData({
  java_lang_IllegalMonitorStateException: 0
}, false, "java.lang.IllegalMonitorStateException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_IllegalMonitorStateException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IllegalMonitorStateException.prototype.$classData = ScalaJS.data.java_lang_IllegalMonitorStateException;
//@ sourceMappingURL=IllegalMonitorStateException.js.map
