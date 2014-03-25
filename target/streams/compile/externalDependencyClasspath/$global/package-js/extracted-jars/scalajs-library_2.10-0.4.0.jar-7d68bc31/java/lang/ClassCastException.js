/** @constructor */
ScalaJS.c.java_lang_ClassCastException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_ClassCastException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_ClassCastException.prototype.constructor = ScalaJS.c.java_lang_ClassCastException;
ScalaJS.c.java_lang_ClassCastException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ClassCastException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ClassCastException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ClassCastException.prototype = ScalaJS.c.java_lang_ClassCastException.prototype;
ScalaJS.is.java_lang_ClassCastException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ClassCastException)))
});
ScalaJS.as.java_lang_ClassCastException = (function(obj) {
  if ((ScalaJS.is.java_lang_ClassCastException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ClassCastException")
  }
});
ScalaJS.isArrayOf.java_lang_ClassCastException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ClassCastException)))
});
ScalaJS.asArrayOf.java_lang_ClassCastException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ClassCastException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ClassCastException;", depth)
  }
});
ScalaJS.data.java_lang_ClassCastException = new ScalaJS.ClassTypeData({
  java_lang_ClassCastException: 0
}, false, "java.lang.ClassCastException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_ClassCastException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ClassCastException.prototype.$classData = ScalaJS.data.java_lang_ClassCastException;
//@ sourceMappingURL=ClassCastException.js.map
