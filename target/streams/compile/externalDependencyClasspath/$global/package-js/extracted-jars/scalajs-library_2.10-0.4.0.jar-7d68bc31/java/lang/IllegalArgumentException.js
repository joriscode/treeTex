/** @constructor */
ScalaJS.c.java_lang_IllegalArgumentException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_IllegalArgumentException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_IllegalArgumentException.prototype.constructor = ScalaJS.c.java_lang_IllegalArgumentException;
ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IllegalArgumentException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IllegalArgumentException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IllegalArgumentException.prototype = ScalaJS.c.java_lang_IllegalArgumentException.prototype;
ScalaJS.is.java_lang_IllegalArgumentException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IllegalArgumentException)))
});
ScalaJS.as.java_lang_IllegalArgumentException = (function(obj) {
  if ((ScalaJS.is.java_lang_IllegalArgumentException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IllegalArgumentException")
  }
});
ScalaJS.isArrayOf.java_lang_IllegalArgumentException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IllegalArgumentException)))
});
ScalaJS.asArrayOf.java_lang_IllegalArgumentException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IllegalArgumentException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IllegalArgumentException;", depth)
  }
});
ScalaJS.data.java_lang_IllegalArgumentException = new ScalaJS.ClassTypeData({
  java_lang_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IllegalArgumentException.prototype.$classData = ScalaJS.data.java_lang_IllegalArgumentException;
//@ sourceMappingURL=IllegalArgumentException.js.map
