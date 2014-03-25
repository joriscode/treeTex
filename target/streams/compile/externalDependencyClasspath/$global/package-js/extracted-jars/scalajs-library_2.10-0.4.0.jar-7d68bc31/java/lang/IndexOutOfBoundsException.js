/** @constructor */
ScalaJS.c.java_lang_IndexOutOfBoundsException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this)
});
ScalaJS.c.java_lang_IndexOutOfBoundsException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_IndexOutOfBoundsException.prototype.constructor = ScalaJS.c.java_lang_IndexOutOfBoundsException;
ScalaJS.c.java_lang_IndexOutOfBoundsException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_IndexOutOfBoundsException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_IndexOutOfBoundsException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_IndexOutOfBoundsException.prototype = ScalaJS.c.java_lang_IndexOutOfBoundsException.prototype;
ScalaJS.is.java_lang_IndexOutOfBoundsException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_IndexOutOfBoundsException)))
});
ScalaJS.as.java_lang_IndexOutOfBoundsException = (function(obj) {
  if ((ScalaJS.is.java_lang_IndexOutOfBoundsException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.IndexOutOfBoundsException")
  }
});
ScalaJS.isArrayOf.java_lang_IndexOutOfBoundsException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_IndexOutOfBoundsException)))
});
ScalaJS.asArrayOf.java_lang_IndexOutOfBoundsException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_IndexOutOfBoundsException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.IndexOutOfBoundsException;", depth)
  }
});
ScalaJS.data.java_lang_IndexOutOfBoundsException = new ScalaJS.ClassTypeData({
  java_lang_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_IndexOutOfBoundsException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_IndexOutOfBoundsException.prototype.$classData = ScalaJS.data.java_lang_IndexOutOfBoundsException;
//@ sourceMappingURL=IndexOutOfBoundsException.js.map
