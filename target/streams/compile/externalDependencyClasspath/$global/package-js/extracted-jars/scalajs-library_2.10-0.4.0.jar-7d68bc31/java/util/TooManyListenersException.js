/** @constructor */
ScalaJS.c.java_util_TooManyListenersException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.java_util_TooManyListenersException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.java_util_TooManyListenersException.prototype.constructor = ScalaJS.c.java_util_TooManyListenersException;
ScalaJS.c.java_util_TooManyListenersException.prototype.init___ = (function() {
  ScalaJS.c.java_util_TooManyListenersException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_TooManyListenersException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_TooManyListenersException.prototype = ScalaJS.c.java_util_TooManyListenersException.prototype;
ScalaJS.is.java_util_TooManyListenersException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_TooManyListenersException)))
});
ScalaJS.as.java_util_TooManyListenersException = (function(obj) {
  if ((ScalaJS.is.java_util_TooManyListenersException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.TooManyListenersException")
  }
});
ScalaJS.isArrayOf.java_util_TooManyListenersException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_TooManyListenersException)))
});
ScalaJS.asArrayOf.java_util_TooManyListenersException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_TooManyListenersException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.TooManyListenersException;", depth)
  }
});
ScalaJS.data.java_util_TooManyListenersException = new ScalaJS.ClassTypeData({
  java_util_TooManyListenersException: 0
}, false, "java.util.TooManyListenersException", ScalaJS.data.java_lang_Exception, {
  java_util_TooManyListenersException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_TooManyListenersException.prototype.$classData = ScalaJS.data.java_util_TooManyListenersException;
//@ sourceMappingURL=TooManyListenersException.js.map
