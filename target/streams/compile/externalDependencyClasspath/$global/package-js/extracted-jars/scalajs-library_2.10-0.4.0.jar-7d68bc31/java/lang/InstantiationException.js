/** @constructor */
ScalaJS.c.java_lang_InstantiationException = (function() {
  ScalaJS.c.java_lang_ReflectiveOperationException.call(this)
});
ScalaJS.c.java_lang_InstantiationException.prototype = new ScalaJS.inheritable.java_lang_ReflectiveOperationException();
ScalaJS.c.java_lang_InstantiationException.prototype.constructor = ScalaJS.c.java_lang_InstantiationException;
ScalaJS.c.java_lang_InstantiationException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_InstantiationException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_InstantiationException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_InstantiationException.prototype = ScalaJS.c.java_lang_InstantiationException.prototype;
ScalaJS.is.java_lang_InstantiationException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_InstantiationException)))
});
ScalaJS.as.java_lang_InstantiationException = (function(obj) {
  if ((ScalaJS.is.java_lang_InstantiationException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.InstantiationException")
  }
});
ScalaJS.isArrayOf.java_lang_InstantiationException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_InstantiationException)))
});
ScalaJS.asArrayOf.java_lang_InstantiationException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_InstantiationException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.InstantiationException;", depth)
  }
});
ScalaJS.data.java_lang_InstantiationException = new ScalaJS.ClassTypeData({
  java_lang_InstantiationException: 0
}, false, "java.lang.InstantiationException", ScalaJS.data.java_lang_ReflectiveOperationException, {
  java_lang_InstantiationException: 1,
  java_lang_ReflectiveOperationException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_InstantiationException.prototype.$classData = ScalaJS.data.java_lang_InstantiationException;
//@ sourceMappingURL=InstantiationException.js.map
