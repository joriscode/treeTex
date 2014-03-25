/** @constructor */
ScalaJS.c.java_lang_IllegalStateException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_IllegalStateException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_IllegalStateException.prototype.constructor = ScalaJS.c.java_lang_IllegalStateException;
ScalaJS.c.java_lang_IllegalStateException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_IllegalStateException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_IllegalStateException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_IllegalStateException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_IllegalStateException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IllegalStateException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IllegalStateException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IllegalStateException.prototype = ScalaJS.c.java_lang_IllegalStateException.prototype;
ScalaJS.is.java_lang_IllegalStateException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IllegalStateException)))
});
ScalaJS.as.java_lang_IllegalStateException = (function(obj) {
  if ((ScalaJS.is.java_lang_IllegalStateException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IllegalStateException")
  }
});
ScalaJS.isArrayOf.java_lang_IllegalStateException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IllegalStateException)))
});
ScalaJS.asArrayOf.java_lang_IllegalStateException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IllegalStateException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IllegalStateException;", depth)
  }
});
ScalaJS.data.java_lang_IllegalStateException = new ScalaJS.ClassTypeData({
  java_lang_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_IllegalStateException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IllegalStateException.prototype.$classData = ScalaJS.data.java_lang_IllegalStateException;
//@ sourceMappingURL=IllegalStateException.js.map
