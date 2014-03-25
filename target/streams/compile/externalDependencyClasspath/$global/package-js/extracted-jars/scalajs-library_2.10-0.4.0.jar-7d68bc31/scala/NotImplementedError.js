/** @constructor */
ScalaJS.c.scala_NotImplementedError = (function() {
  ScalaJS.c.java_lang_Error.call(this)
});
ScalaJS.c.scala_NotImplementedError.prototype = new ScalaJS.inheritable.java_lang_Error();
ScalaJS.c.scala_NotImplementedError.prototype.constructor = ScalaJS.c.scala_NotImplementedError;
ScalaJS.c.scala_NotImplementedError.prototype.init___ = (function() {
  ScalaJS.c.scala_NotImplementedError.prototype.init___T.call(this, "an implementation is missing");
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_NotImplementedError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_NotImplementedError.prototype = ScalaJS.c.scala_NotImplementedError.prototype;
ScalaJS.is.scala_NotImplementedError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_NotImplementedError)))
});
ScalaJS.as.scala_NotImplementedError = (function(obj) {
  if ((ScalaJS.is.scala_NotImplementedError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.NotImplementedError")
  }
});
ScalaJS.isArrayOf.scala_NotImplementedError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_NotImplementedError)))
});
ScalaJS.asArrayOf.scala_NotImplementedError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_NotImplementedError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.NotImplementedError;", depth)
  }
});
ScalaJS.data.scala_NotImplementedError = new ScalaJS.ClassTypeData({
  scala_NotImplementedError: 0
}, false, "scala.NotImplementedError", ScalaJS.data.java_lang_Error, {
  scala_NotImplementedError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_NotImplementedError.prototype.$classData = ScalaJS.data.scala_NotImplementedError;
//@ sourceMappingURL=NotImplementedError.js.map
