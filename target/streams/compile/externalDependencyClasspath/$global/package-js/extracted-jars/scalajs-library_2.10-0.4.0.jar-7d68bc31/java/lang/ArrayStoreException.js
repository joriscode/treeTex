/** @constructor */
ScalaJS.c.java_lang_ArrayStoreException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_ArrayStoreException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_ArrayStoreException.prototype.constructor = ScalaJS.c.java_lang_ArrayStoreException;
ScalaJS.c.java_lang_ArrayStoreException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ArrayStoreException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ArrayStoreException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ArrayStoreException.prototype = ScalaJS.c.java_lang_ArrayStoreException.prototype;
ScalaJS.is.java_lang_ArrayStoreException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ArrayStoreException)))
});
ScalaJS.as.java_lang_ArrayStoreException = (function(obj) {
  if ((ScalaJS.is.java_lang_ArrayStoreException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ArrayStoreException")
  }
});
ScalaJS.isArrayOf.java_lang_ArrayStoreException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ArrayStoreException)))
});
ScalaJS.asArrayOf.java_lang_ArrayStoreException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ArrayStoreException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ArrayStoreException;", depth)
  }
});
ScalaJS.data.java_lang_ArrayStoreException = new ScalaJS.ClassTypeData({
  java_lang_ArrayStoreException: 0
}, false, "java.lang.ArrayStoreException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_ArrayStoreException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ArrayStoreException.prototype.$classData = ScalaJS.data.java_lang_ArrayStoreException;
//@ sourceMappingURL=ArrayStoreException.js.map
