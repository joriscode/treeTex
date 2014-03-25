/** @constructor */
ScalaJS.c.java_lang_Exception = (function() {
  ScalaJS.c.java_lang_Throwable.call(this)
});
ScalaJS.c.java_lang_Exception.prototype = new ScalaJS.inheritable.java_lang_Throwable();
ScalaJS.c.java_lang_Exception.prototype.constructor = ScalaJS.c.java_lang_Exception;
ScalaJS.c.java_lang_Exception.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_Exception.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_lang_Exception.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_Exception.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_Exception.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Exception.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_Exception = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Exception.prototype = ScalaJS.c.java_lang_Exception.prototype;
ScalaJS.is.java_lang_Exception = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Exception)))
});
ScalaJS.as.java_lang_Exception = (function(obj) {
  if ((ScalaJS.is.java_lang_Exception(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Exception")
  }
});
ScalaJS.isArrayOf.java_lang_Exception = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Exception)))
});
ScalaJS.asArrayOf.java_lang_Exception = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Exception(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Exception;", depth)
  }
});
ScalaJS.data.java_lang_Exception = new ScalaJS.ClassTypeData({
  java_lang_Exception: 0
}, false, "java.lang.Exception", ScalaJS.data.java_lang_Throwable, {
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Exception.prototype.$classData = ScalaJS.data.java_lang_Exception;
//@ sourceMappingURL=Exception.js.map
