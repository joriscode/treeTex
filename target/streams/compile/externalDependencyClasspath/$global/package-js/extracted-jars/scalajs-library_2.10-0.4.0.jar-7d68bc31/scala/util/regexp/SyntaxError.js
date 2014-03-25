/** @constructor */
ScalaJS.c.scala_util_regexp_SyntaxError = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.scala_util_regexp_SyntaxError.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_util_regexp_SyntaxError.prototype.constructor = ScalaJS.c.scala_util_regexp_SyntaxError;
/** @constructor */
ScalaJS.inheritable.scala_util_regexp_SyntaxError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_regexp_SyntaxError.prototype = ScalaJS.c.scala_util_regexp_SyntaxError.prototype;
ScalaJS.is.scala_util_regexp_SyntaxError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_regexp_SyntaxError)))
});
ScalaJS.as.scala_util_regexp_SyntaxError = (function(obj) {
  if ((ScalaJS.is.scala_util_regexp_SyntaxError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.regexp.SyntaxError")
  }
});
ScalaJS.isArrayOf.scala_util_regexp_SyntaxError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_regexp_SyntaxError)))
});
ScalaJS.asArrayOf.scala_util_regexp_SyntaxError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_regexp_SyntaxError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.regexp.SyntaxError;", depth)
  }
});
ScalaJS.data.scala_util_regexp_SyntaxError = new ScalaJS.ClassTypeData({
  scala_util_regexp_SyntaxError: 0
}, false, "scala.util.regexp.SyntaxError", ScalaJS.data.java_lang_RuntimeException, {
  scala_util_regexp_SyntaxError: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_regexp_SyntaxError.prototype.$classData = ScalaJS.data.scala_util_regexp_SyntaxError;
//@ sourceMappingURL=SyntaxError.js.map
