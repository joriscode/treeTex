/** @constructor */
ScalaJS.c.java_util_ServiceConfigurationError = (function() {
  ScalaJS.c.java_lang_Error.call(this)
});
ScalaJS.c.java_util_ServiceConfigurationError.prototype = new ScalaJS.inheritable.java_lang_Error();
ScalaJS.c.java_util_ServiceConfigurationError.prototype.constructor = ScalaJS.c.java_util_ServiceConfigurationError;
ScalaJS.c.java_util_ServiceConfigurationError.prototype.init___T = (function(s) {
  ScalaJS.c.java_util_ServiceConfigurationError.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_ServiceConfigurationError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_ServiceConfigurationError.prototype = ScalaJS.c.java_util_ServiceConfigurationError.prototype;
ScalaJS.is.java_util_ServiceConfigurationError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_ServiceConfigurationError)))
});
ScalaJS.as.java_util_ServiceConfigurationError = (function(obj) {
  if ((ScalaJS.is.java_util_ServiceConfigurationError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.ServiceConfigurationError")
  }
});
ScalaJS.isArrayOf.java_util_ServiceConfigurationError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_ServiceConfigurationError)))
});
ScalaJS.asArrayOf.java_util_ServiceConfigurationError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_ServiceConfigurationError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.ServiceConfigurationError;", depth)
  }
});
ScalaJS.data.java_util_ServiceConfigurationError = new ScalaJS.ClassTypeData({
  java_util_ServiceConfigurationError: 0
}, false, "java.util.ServiceConfigurationError", ScalaJS.data.java_lang_Error, {
  java_util_ServiceConfigurationError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_ServiceConfigurationError.prototype.$classData = ScalaJS.data.java_util_ServiceConfigurationError;
//@ sourceMappingURL=ServiceConfigurationError.js.map
