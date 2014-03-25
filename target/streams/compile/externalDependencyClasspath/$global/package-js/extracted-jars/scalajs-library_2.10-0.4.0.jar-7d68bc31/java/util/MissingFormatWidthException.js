/** @constructor */
ScalaJS.c.java_util_MissingFormatWidthException = (function() {
  ScalaJS.c.java_util_IllegalFormatException.call(this);
  this.s$6 = null
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype = new ScalaJS.inheritable.java_util_IllegalFormatException();
ScalaJS.c.java_util_MissingFormatWidthException.prototype.constructor = ScalaJS.c.java_util_MissingFormatWidthException;
ScalaJS.c.java_util_MissingFormatWidthException.prototype.s__p6__T = (function() {
  return this.s$6
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.s$und$eq__p6__T__V = (function(x$1) {
  this.s$6 = x$1
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.getFormatSpecifier__T = (function() {
  return this.s__p6__T()
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.getMessage__T = (function() {
  return this.s__p6__T()
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.init___ = (function() {
  ScalaJS.c.java_util_IllegalFormatException.prototype.init___.call(this);
  this.s$6 = null;
  return this
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.init___T = (function(s) {
  ScalaJS.c.java_util_MissingFormatWidthException.prototype.init___.call(this);
  if (ScalaJS.anyRefEqEq(s, null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  };
  this.s$und$eq__p6__T__V(s);
  return this
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.getFormatSpecifier__ = (function() {
  return this.getFormatSpecifier__T()
});
/** @constructor */
ScalaJS.inheritable.java_util_MissingFormatWidthException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_MissingFormatWidthException.prototype = ScalaJS.c.java_util_MissingFormatWidthException.prototype;
ScalaJS.is.java_util_MissingFormatWidthException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_MissingFormatWidthException)))
});
ScalaJS.as.java_util_MissingFormatWidthException = (function(obj) {
  if ((ScalaJS.is.java_util_MissingFormatWidthException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.MissingFormatWidthException")
  }
});
ScalaJS.isArrayOf.java_util_MissingFormatWidthException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_MissingFormatWidthException)))
});
ScalaJS.asArrayOf.java_util_MissingFormatWidthException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_MissingFormatWidthException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.MissingFormatWidthException;", depth)
  }
});
ScalaJS.data.java_util_MissingFormatWidthException = new ScalaJS.ClassTypeData({
  java_util_MissingFormatWidthException: 0
}, false, "java.util.MissingFormatWidthException", ScalaJS.data.java_util_IllegalFormatException, {
  java_util_MissingFormatWidthException: 1,
  java_util_IllegalFormatException: 1,
  java_lang_IllegalArgumentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_MissingFormatWidthException.prototype.$classData = ScalaJS.data.java_util_MissingFormatWidthException;
//@ sourceMappingURL=MissingFormatWidthException.js.map
