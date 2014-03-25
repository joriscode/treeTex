/** @constructor */
ScalaJS.c.scala_UninitializedError = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.scala_UninitializedError.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.scala_UninitializedError.prototype.constructor = ScalaJS.c.scala_UninitializedError;
ScalaJS.c.scala_UninitializedError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T.call(this, "uninitialized value");
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_UninitializedError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_UninitializedError.prototype = ScalaJS.c.scala_UninitializedError.prototype;
ScalaJS.is.scala_UninitializedError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_UninitializedError)))
});
ScalaJS.as.scala_UninitializedError = (function(obj) {
  if ((ScalaJS.is.scala_UninitializedError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.UninitializedError")
  }
});
ScalaJS.isArrayOf.scala_UninitializedError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_UninitializedError)))
});
ScalaJS.asArrayOf.scala_UninitializedError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_UninitializedError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.UninitializedError;", depth)
  }
});
ScalaJS.data.scala_UninitializedError = new ScalaJS.ClassTypeData({
  scala_UninitializedError: 0
}, false, "scala.UninitializedError", ScalaJS.data.java_lang_RuntimeException, {
  scala_UninitializedError: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_UninitializedError.prototype.$classData = ScalaJS.data.scala_UninitializedError;
//@ sourceMappingURL=UninitializedError.js.map
