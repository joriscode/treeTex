/** @constructor */
ScalaJS.c.java_lang_InterruptedException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.java_lang_InterruptedException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.java_lang_InterruptedException.prototype.constructor = ScalaJS.c.java_lang_InterruptedException;
ScalaJS.c.java_lang_InterruptedException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_InterruptedException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_InterruptedException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_InterruptedException.prototype = ScalaJS.c.java_lang_InterruptedException.prototype;
ScalaJS.is.java_lang_InterruptedException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_InterruptedException)))
});
ScalaJS.as.java_lang_InterruptedException = (function(obj) {
  if ((ScalaJS.is.java_lang_InterruptedException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.InterruptedException")
  }
});
ScalaJS.isArrayOf.java_lang_InterruptedException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_InterruptedException)))
});
ScalaJS.asArrayOf.java_lang_InterruptedException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_InterruptedException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.InterruptedException;", depth)
  }
});
ScalaJS.data.java_lang_InterruptedException = new ScalaJS.ClassTypeData({
  java_lang_InterruptedException: 0
}, false, "java.lang.InterruptedException", ScalaJS.data.java_lang_Exception, {
  java_lang_InterruptedException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_InterruptedException.prototype.$classData = ScalaJS.data.java_lang_InterruptedException;
//@ sourceMappingURL=InterruptedException.js.map
