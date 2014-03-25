/** @constructor */
ScalaJS.c.java_lang_CloneNotSupportedException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.java_lang_CloneNotSupportedException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.java_lang_CloneNotSupportedException.prototype.constructor = ScalaJS.c.java_lang_CloneNotSupportedException;
ScalaJS.c.java_lang_CloneNotSupportedException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_CloneNotSupportedException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_CloneNotSupportedException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_CloneNotSupportedException.prototype = ScalaJS.c.java_lang_CloneNotSupportedException.prototype;
ScalaJS.is.java_lang_CloneNotSupportedException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_CloneNotSupportedException)))
});
ScalaJS.as.java_lang_CloneNotSupportedException = (function(obj) {
  if ((ScalaJS.is.java_lang_CloneNotSupportedException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.CloneNotSupportedException")
  }
});
ScalaJS.isArrayOf.java_lang_CloneNotSupportedException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_CloneNotSupportedException)))
});
ScalaJS.asArrayOf.java_lang_CloneNotSupportedException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_CloneNotSupportedException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.CloneNotSupportedException;", depth)
  }
});
ScalaJS.data.java_lang_CloneNotSupportedException = new ScalaJS.ClassTypeData({
  java_lang_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", ScalaJS.data.java_lang_Exception, {
  java_lang_CloneNotSupportedException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_CloneNotSupportedException.prototype.$classData = ScalaJS.data.java_lang_CloneNotSupportedException;
//@ sourceMappingURL=CloneNotSupportedException.js.map
