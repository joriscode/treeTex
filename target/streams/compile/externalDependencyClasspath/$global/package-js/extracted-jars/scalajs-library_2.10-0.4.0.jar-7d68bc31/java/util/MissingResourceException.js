/** @constructor */
ScalaJS.c.java_util_MissingResourceException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.className$4 = null;
  this.key$4 = null
});
ScalaJS.c.java_util_MissingResourceException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_util_MissingResourceException.prototype.constructor = ScalaJS.c.java_util_MissingResourceException;
ScalaJS.c.java_util_MissingResourceException.prototype.className__p4__T = (function() {
  return this.className$4
});
ScalaJS.c.java_util_MissingResourceException.prototype.className$und$eq__p4__T__V = (function(x$1) {
  this.className$4 = x$1
});
ScalaJS.c.java_util_MissingResourceException.prototype.key__p4__T = (function() {
  return this.key$4
});
ScalaJS.c.java_util_MissingResourceException.prototype.key$und$eq__p4__T__V = (function(x$1) {
  this.key$4 = x$1
});
ScalaJS.c.java_util_MissingResourceException.prototype.getClassName__T = (function() {
  return this.className__p4__T()
});
ScalaJS.c.java_util_MissingResourceException.prototype.getKey__T = (function() {
  return this.key__p4__T()
});
ScalaJS.c.java_util_MissingResourceException.prototype.init___T__T__T__Ljava_lang_Throwable = (function(s, className, key, e) {
  this.className$4 = className;
  this.key$4 = key;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T__Ljava_lang_Throwable.call(this, s, e);
  return this
});
ScalaJS.c.java_util_MissingResourceException.prototype.init___T__T__T = (function(s, className, key) {
  ScalaJS.c.java_util_MissingResourceException.prototype.init___T__T__T__Ljava_lang_Throwable.call(this, s, className, key, null);
  return this
});
ScalaJS.c.java_util_MissingResourceException.prototype.getKey__ = (function() {
  return this.getKey__T()
});
ScalaJS.c.java_util_MissingResourceException.prototype.getClassName__ = (function() {
  return this.getClassName__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_MissingResourceException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_MissingResourceException.prototype = ScalaJS.c.java_util_MissingResourceException.prototype;
ScalaJS.is.java_util_MissingResourceException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_MissingResourceException)))
});
ScalaJS.as.java_util_MissingResourceException = (function(obj) {
  if ((ScalaJS.is.java_util_MissingResourceException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.MissingResourceException")
  }
});
ScalaJS.isArrayOf.java_util_MissingResourceException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_MissingResourceException)))
});
ScalaJS.asArrayOf.java_util_MissingResourceException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_MissingResourceException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.MissingResourceException;", depth)
  }
});
ScalaJS.data.java_util_MissingResourceException = new ScalaJS.ClassTypeData({
  java_util_MissingResourceException: 0
}, false, "java.util.MissingResourceException", ScalaJS.data.java_lang_RuntimeException, {
  java_util_MissingResourceException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_MissingResourceException.prototype.$classData = ScalaJS.data.java_util_MissingResourceException;
//@ sourceMappingURL=MissingResourceException.js.map
