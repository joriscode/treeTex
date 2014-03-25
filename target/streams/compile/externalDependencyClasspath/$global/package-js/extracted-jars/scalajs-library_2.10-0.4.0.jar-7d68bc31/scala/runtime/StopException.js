/** @constructor */
ScalaJS.c.scala_runtime_StopException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.scala_runtime_StopException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.scala_runtime_StopException.prototype.constructor = ScalaJS.c.scala_runtime_StopException;
/** @constructor */
ScalaJS.inheritable.scala_runtime_StopException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_StopException.prototype = ScalaJS.c.scala_runtime_StopException.prototype;
ScalaJS.is.scala_runtime_StopException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_StopException)))
});
ScalaJS.as.scala_runtime_StopException = (function(obj) {
  if ((ScalaJS.is.scala_runtime_StopException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.StopException")
  }
});
ScalaJS.isArrayOf.scala_runtime_StopException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_StopException)))
});
ScalaJS.asArrayOf.scala_runtime_StopException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_StopException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.StopException;", depth)
  }
});
ScalaJS.data.scala_runtime_StopException = new ScalaJS.ClassTypeData({
  scala_runtime_StopException: 0
}, false, "scala.runtime.StopException", ScalaJS.data.java_lang_Exception, {
  scala_runtime_StopException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_StopException.prototype.$classData = ScalaJS.data.scala_runtime_StopException;
//@ sourceMappingURL=StopException.js.map
