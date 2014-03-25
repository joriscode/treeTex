/** @constructor */
ScalaJS.c.java_util_IllegalFormatWidthException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.w$6 = 0
});
ScalaJS.c.java_util_IllegalFormatWidthException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.constructor = ScalaJS.c.java_util_IllegalFormatWidthException;
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.w__p6__I = (function() {
  return this.w$6
});
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.getWidth__I = (function() {
  return this.w__p6__I()
});
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.getMessage__T = (function() {
  return ScalaJS.modules.java_lang_Integer().toString__I__T(this.w__p6__I())
});
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.init___I = (function(w) {
  this.w$6 = w;
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.getWidth__ = (function() {
  return ScalaJS.bI(this.getWidth__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_IllegalFormatWidthException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllegalFormatWidthException.prototype = ScalaJS.c.java_util_IllegalFormatWidthException.prototype;
ScalaJS.is.java_util_IllegalFormatWidthException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllegalFormatWidthException)))
});
ScalaJS.as.java_util_IllegalFormatWidthException = (function(obj) {
  if ((ScalaJS.is.java_util_IllegalFormatWidthException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllegalFormatWidthException")
  }
});
ScalaJS.isArrayOf.java_util_IllegalFormatWidthException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllegalFormatWidthException)))
});
ScalaJS.asArrayOf.java_util_IllegalFormatWidthException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllegalFormatWidthException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllegalFormatWidthException;", depth)
  }
});
ScalaJS.data.java_util_IllegalFormatWidthException = new ScalaJS.ClassTypeData({
  java_util_IllegalFormatWidthException: 0
}, false, "java.util.IllegalFormatWidthException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_IllegalFormatWidthException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllegalFormatWidthException.prototype.$classData = ScalaJS.data.java_util_IllegalFormatWidthException;
//@ sourceMappingURL=IllegalFormatWidthException.js.map
