/** @constructor */
ScalaJS.c.java_util_UnknownFormatFlagsException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.flags$6 = null
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.constructor = ScalaJS.c.java_util_UnknownFormatFlagsException;
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.flags__p6__T = (function() {
  return this.flags$6
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.flags$und$eq__p6__T__V = (function(x$1) {
  this.flags$6 = x$1
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.getFlags__T = (function() {
  return this.flags__p6__T()
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.getMessage__T = (function() {
  return ("Flags = " + this.flags__p6__T())
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.flags$6 = null;
  return this
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.init___T = (function(f) {
  ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(f, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.flags$und$eq__p6__T__V(f);
  return this
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.getFlags__ = (function() {
  return this.getFlags__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_UnknownFormatFlagsException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_UnknownFormatFlagsException.prototype = ScalaJS.c.java_util_UnknownFormatFlagsException.prototype;
ScalaJS.is.java_util_UnknownFormatFlagsException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_UnknownFormatFlagsException)))
});
ScalaJS.as.java_util_UnknownFormatFlagsException = (function(obj) {
  if ((ScalaJS.is.java_util_UnknownFormatFlagsException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.UnknownFormatFlagsException")
  }
});
ScalaJS.isArrayOf.java_util_UnknownFormatFlagsException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_UnknownFormatFlagsException)))
});
ScalaJS.asArrayOf.java_util_UnknownFormatFlagsException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_UnknownFormatFlagsException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.UnknownFormatFlagsException;", depth)
  }
});
ScalaJS.data.java_util_UnknownFormatFlagsException = new ScalaJS.ClassTypeData({
  java_util_UnknownFormatFlagsException: 0
}, false, "java.util.UnknownFormatFlagsException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_UnknownFormatFlagsException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_UnknownFormatFlagsException.prototype.$classData = ScalaJS.data.java_util_UnknownFormatFlagsException;
//@ sourceMappingURL=UnknownFormatFlagsException.js.map
