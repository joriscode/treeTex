/** @constructor */
ScalaJS.c.java_util_IllformedLocaleException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.errorIndex$4 = 0
});
ScalaJS.c.java_util_IllformedLocaleException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_util_IllformedLocaleException.prototype.constructor = ScalaJS.c.java_util_IllformedLocaleException;
ScalaJS.c.java_util_IllformedLocaleException.prototype.getErrorIndex__I = (function() {
  return this.errorIndex$4
});
ScalaJS.c.java_util_IllformedLocaleException.prototype.init___T__I = (function(s, errorIndex) {
  this.errorIndex$4 = errorIndex;
  var jsx$4 = ScalaJS.c.java_lang_RuntimeException.prototype.init___T;
  var jsx$3 = ("" + s);
  if ((errorIndex < 0)) {
    var jsx$2 = ""
  } else {
    var jsx$2 = ((" [at index " + ScalaJS.bI(errorIndex)) + "]")
  };
  var jsx$1 = (jsx$3 + jsx$2);
  jsx$4.call(this, jsx$1);
  return this
});
ScalaJS.c.java_util_IllformedLocaleException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllformedLocaleException.prototype.init___T__I.call(this, null, -1);
  return this
});
ScalaJS.c.java_util_IllformedLocaleException.prototype.init___T = (function(s) {
  ScalaJS.c.java_util_IllformedLocaleException.prototype.init___T__I.call(this, s, -1);
  return this
});
ScalaJS.c.java_util_IllformedLocaleException.prototype.getErrorIndex__ = (function() {
  return ScalaJS.bI(this.getErrorIndex__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_IllformedLocaleException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllformedLocaleException.prototype = ScalaJS.c.java_util_IllformedLocaleException.prototype;
ScalaJS.is.java_util_IllformedLocaleException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllformedLocaleException)))
});
ScalaJS.as.java_util_IllformedLocaleException = (function(obj) {
  if ((ScalaJS.is.java_util_IllformedLocaleException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllformedLocaleException")
  }
});
ScalaJS.isArrayOf.java_util_IllformedLocaleException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllformedLocaleException)))
});
ScalaJS.asArrayOf.java_util_IllformedLocaleException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllformedLocaleException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllformedLocaleException;", depth)
  }
});
ScalaJS.data.java_util_IllformedLocaleException = new ScalaJS.ClassTypeData({
  java_util_IllformedLocaleException: 0
}, false, "java.util.IllformedLocaleException", ScalaJS.data.java_lang_RuntimeException, {
  java_util_IllformedLocaleException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllformedLocaleException.prototype.$classData = ScalaJS.data.java_util_IllformedLocaleException;
//@ sourceMappingURL=IllformedLocaleException.js.map
