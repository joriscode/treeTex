/** @constructor */
ScalaJS.c.java_util_IllegalFormatFlagsException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.flags$6 = null
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.constructor = ScalaJS.c.java_util_IllegalFormatFlagsException;
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.flags__p6__T = (function() {
  return this.flags$6
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.flags$und$eq__p6__T__V = (function(x$1) {
  this.flags$6 = x$1
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.getFlags__T = (function() {
  return this.flags__p6__T()
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.getMessage__T = (function() {
  return (("Flags = '" + this.flags__p6__T()) + "'")
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.flags$6 = null;
  return this
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.init___T = (function(f) {
  ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(f, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.flags$und$eq__p6__T__V(f);
  return this
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.getFlags__ = (function() {
  return this.getFlags__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_IllegalFormatFlagsException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_IllegalFormatFlagsException.prototype = ScalaJS.c.java_util_IllegalFormatFlagsException.prototype;
ScalaJS.is.java_util_IllegalFormatFlagsException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_IllegalFormatFlagsException)))
});
ScalaJS.as.java_util_IllegalFormatFlagsException = (function(obj) {
  if ((ScalaJS.is.java_util_IllegalFormatFlagsException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.IllegalFormatFlagsException")
  }
});
ScalaJS.isArrayOf.java_util_IllegalFormatFlagsException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_IllegalFormatFlagsException)))
});
ScalaJS.asArrayOf.java_util_IllegalFormatFlagsException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_IllegalFormatFlagsException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.IllegalFormatFlagsException;", depth)
  }
});
ScalaJS.data.java_util_IllegalFormatFlagsException = new ScalaJS.ClassTypeData({
  java_util_IllegalFormatFlagsException: 0
}, false, "java.util.IllegalFormatFlagsException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_IllegalFormatFlagsException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_IllegalFormatFlagsException.prototype.$classData = ScalaJS.data.java_util_IllegalFormatFlagsException;
//@ sourceMappingURL=IllegalFormatFlagsException.js.map
