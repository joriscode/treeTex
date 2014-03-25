/** @constructor */
ScalaJS.c.java_util_MissingFormatArgumentException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.s$6 = null
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.constructor = ScalaJS.c.java_util_MissingFormatArgumentException;
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.s__p6__T = (function() {
  return this.s$6
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.s$und$eq__p6__T__V = (function(x$1) {
  this.s$6 = x$1
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.getFormatSpecifier__T = (function() {
  return this.s__p6__T()
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.getMessage__T = (function() {
  return (("Format specifier '" + this.s__p6__T()) + "'")
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.s$6 = null;
  return this
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.init___T = (function(s) {
  ScalaJS.c.java_util_MissingFormatArgumentException.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.s$und$eq__p6__T__V(s);
  return this
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.getFormatSpecifier__ = (function() {
  return this.getFormatSpecifier__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_MissingFormatArgumentException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_MissingFormatArgumentException.prototype = ScalaJS.c.java_util_MissingFormatArgumentException.prototype;
ScalaJS.is.java_util_MissingFormatArgumentException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_MissingFormatArgumentException)))
});
ScalaJS.as.java_util_MissingFormatArgumentException = (function(obj) {
  if ((ScalaJS.is.java_util_MissingFormatArgumentException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.MissingFormatArgumentException")
  }
});
ScalaJS.isArrayOf.java_util_MissingFormatArgumentException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_MissingFormatArgumentException)))
});
ScalaJS.asArrayOf.java_util_MissingFormatArgumentException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_MissingFormatArgumentException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.MissingFormatArgumentException;", depth)
  }
});
ScalaJS.data.java_util_MissingFormatArgumentException = new ScalaJS.ClassTypeData({
  java_util_MissingFormatArgumentException: 0
}, false, "java.util.MissingFormatArgumentException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_MissingFormatArgumentException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_MissingFormatArgumentException.prototype.$classData = ScalaJS.data.java_util_MissingFormatArgumentException;
//@ sourceMappingURL=MissingFormatArgumentException.js.map
