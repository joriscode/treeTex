/** @constructor */
ScalaJS.c.java_util_FormatFlagsConversionMismatchException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.c$6 = 0;
  this.f$6 = null
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.constructor = ScalaJS.c.java_util_FormatFlagsConversionMismatchException;
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.c__p6__C = (function() {
  return this.c$6
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.f__p6__T = (function() {
  return this.f$6
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.f$und$eq__p6__T__V = (function(x$1) {
  this.f$6 = x$1
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.getFlags__T = (function() {
  return this.f__p6__T()
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.getConversion__C = (function() {
  return this.c__p6__C()
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.getMessage__T = (function() {
  return ((("Conversion = " + ScalaJS.bC(this.c__p6__C())) + ", Flags = ") + this.f__p6__T())
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.init___C = (function(c) {
  this.c$6 = c;
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.f$6 = null;
  return this
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.init___T__C = (function(f, c) {
  ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.init___C.call(this, c);
  if (ScalaJS.anyRefEqEq(f, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.f$und$eq__p6__T__V(f);
  return this
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.getConversion__ = (function() {
  return ScalaJS.bC(this.getConversion__C())
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.getFlags__ = (function() {
  return this.getFlags__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_FormatFlagsConversionMismatchException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_FormatFlagsConversionMismatchException.prototype = ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype;
ScalaJS.is.java_util_FormatFlagsConversionMismatchException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_FormatFlagsConversionMismatchException)))
});
ScalaJS.as.java_util_FormatFlagsConversionMismatchException = (function(obj) {
  if ((ScalaJS.is.java_util_FormatFlagsConversionMismatchException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.FormatFlagsConversionMismatchException")
  }
});
ScalaJS.isArrayOf.java_util_FormatFlagsConversionMismatchException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_FormatFlagsConversionMismatchException)))
});
ScalaJS.asArrayOf.java_util_FormatFlagsConversionMismatchException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_FormatFlagsConversionMismatchException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.FormatFlagsConversionMismatchException;", depth)
  }
});
ScalaJS.data.java_util_FormatFlagsConversionMismatchException = new ScalaJS.ClassTypeData({
  java_util_FormatFlagsConversionMismatchException: 0
}, false, "java.util.FormatFlagsConversionMismatchException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_FormatFlagsConversionMismatchException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_FormatFlagsConversionMismatchException.prototype.$classData = ScalaJS.data.java_util_FormatFlagsConversionMismatchException;
//@ sourceMappingURL=FormatFlagsConversionMismatchException.js.map
