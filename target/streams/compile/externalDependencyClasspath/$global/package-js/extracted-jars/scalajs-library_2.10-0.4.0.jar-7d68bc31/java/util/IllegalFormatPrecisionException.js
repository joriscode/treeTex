/** @constructor */
ScalaJS.c.java_util_IllegalFormatPrecisionException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.p$6 = 0
});
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.constructor = ScalaJS.c.java_util_IllegalFormatPrecisionException;
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.p__p6__I = (function() {
  return this.p$6
});
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.getPrecision__I = (function() {
  return this.p__p6__I()
});
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.getMessage__T = (function() {
  return ScalaJS.modules.java_lang_Integer().toString__I__T(this.p__p6__I())
});
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.init___I = (function(p) {
  this.p$6 = p;
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.getPrecision__ = (function() {
  return ScalaJS.bI(this.getPrecision__I())
});
/** @constructor */
ScalaJS.inheritable.java_util_IllegalFormatPrecisionException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllegalFormatPrecisionException.prototype = ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype;
ScalaJS.is.java_util_IllegalFormatPrecisionException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllegalFormatPrecisionException)))
});
ScalaJS.as.java_util_IllegalFormatPrecisionException = (function(obj) {
  if ((ScalaJS.is.java_util_IllegalFormatPrecisionException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllegalFormatPrecisionException")
  }
});
ScalaJS.isArrayOf.java_util_IllegalFormatPrecisionException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllegalFormatPrecisionException)))
});
ScalaJS.asArrayOf.java_util_IllegalFormatPrecisionException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllegalFormatPrecisionException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllegalFormatPrecisionException;", depth)
  }
});
ScalaJS.data.java_util_IllegalFormatPrecisionException = new ScalaJS.ClassTypeData({
  java_util_IllegalFormatPrecisionException: 0
}, false, "java.util.IllegalFormatPrecisionException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_IllegalFormatPrecisionException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllegalFormatPrecisionException.prototype.$classData = ScalaJS.data.java_util_IllegalFormatPrecisionException;
//@ sourceMappingURL=IllegalFormatPrecisionException.js.map
