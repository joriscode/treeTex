/** @constructor */
ScalaJS.c.java_lang_ClassCircularityError = (function() {
  ScalaJS.c.java_lang_LinkageError.call(this)
});
ScalaJS.c.java_lang_ClassCircularityError.prototype = new ScalaJS.inheritable.java_lang_LinkageError();
ScalaJS.c.java_lang_ClassCircularityError.prototype.constructor = ScalaJS.c.java_lang_ClassCircularityError;
ScalaJS.c.java_lang_ClassCircularityError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ClassCircularityError.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ClassCircularityError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ClassCircularityError.prototype = ScalaJS.c.java_lang_ClassCircularityError.prototype;
ScalaJS.is.java_lang_ClassCircularityError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ClassCircularityError)))
});
ScalaJS.as.java_lang_ClassCircularityError = (function(obj) {
  if ((ScalaJS.is.java_lang_ClassCircularityError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ClassCircularityError")
  }
});
ScalaJS.isArrayOf.java_lang_ClassCircularityError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ClassCircularityError)))
});
ScalaJS.asArrayOf.java_lang_ClassCircularityError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ClassCircularityError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ClassCircularityError;", depth)
  }
});
ScalaJS.data.java_lang_ClassCircularityError = new ScalaJS.ClassTypeData({
  java_lang_ClassCircularityError: 0
}, false, "java.lang.ClassCircularityError", ScalaJS.data.java_lang_LinkageError, {
  java_lang_ClassCircularityError: 1,
  java_lang_LinkageError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ClassCircularityError.prototype.$classData = ScalaJS.data.java_lang_ClassCircularityError;
//@ sourceMappingURL=ClassCircularityError.js.map
