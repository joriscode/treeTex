/** @constructor */
ScalaJS.c.java_lang_UnsupportedOperationException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_UnsupportedOperationException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_UnsupportedOperationException.prototype.constructor = ScalaJS.c.java_lang_UnsupportedOperationException;
ScalaJS.c.java_lang_UnsupportedOperationException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_UnsupportedOperationException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
ScalaJS.c.java_lang_UnsupportedOperationException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_UnsupportedOperationException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_UnsupportedOperationException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_UnsupportedOperationException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_UnsupportedOperationException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_UnsupportedOperationException.prototype = ScalaJS.c.java_lang_UnsupportedOperationException.prototype;
ScalaJS.is.java_lang_UnsupportedOperationException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_UnsupportedOperationException)))
});
ScalaJS.as.java_lang_UnsupportedOperationException = (function(obj) {
  if ((ScalaJS.is.java_lang_UnsupportedOperationException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.UnsupportedOperationException")
  }
});
ScalaJS.isArrayOf.java_lang_UnsupportedOperationException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_UnsupportedOperationException)))
});
ScalaJS.asArrayOf.java_lang_UnsupportedOperationException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_UnsupportedOperationException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.UnsupportedOperationException;", depth)
  }
});
ScalaJS.data.java_lang_UnsupportedOperationException = new ScalaJS.ClassTypeData({
  java_lang_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_UnsupportedOperationException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_UnsupportedOperationException.prototype.$classData = ScalaJS.data.java_lang_UnsupportedOperationException;
//@ sourceMappingURL=UnsupportedOperationException.js.map
