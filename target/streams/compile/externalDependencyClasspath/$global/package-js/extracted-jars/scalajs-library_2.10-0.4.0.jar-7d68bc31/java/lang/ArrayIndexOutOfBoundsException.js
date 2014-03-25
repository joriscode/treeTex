/** @constructor */
ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException = (function() {
  ScalaJS.c.java_lang_IndexOutOfBoundsException.call(this)
});
ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype = new ScalaJS.inheritable.java_lang_IndexOutOfBoundsException();
ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype.constructor = ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException;
ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype.init___I = (function(index) {
  ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype.init___T.call(this, ("Array index out of range: " + ScalaJS.bI(index)));
  return this
});
ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_ArrayIndexOutOfBoundsException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ArrayIndexOutOfBoundsException.prototype = ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype;
ScalaJS.is.java_lang_ArrayIndexOutOfBoundsException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ArrayIndexOutOfBoundsException)))
});
ScalaJS.as.java_lang_ArrayIndexOutOfBoundsException = (function(obj) {
  if ((ScalaJS.is.java_lang_ArrayIndexOutOfBoundsException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ArrayIndexOutOfBoundsException")
  }
});
ScalaJS.isArrayOf.java_lang_ArrayIndexOutOfBoundsException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ArrayIndexOutOfBoundsException)))
});
ScalaJS.asArrayOf.java_lang_ArrayIndexOutOfBoundsException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ArrayIndexOutOfBoundsException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ArrayIndexOutOfBoundsException;", depth)
  }
});
ScalaJS.data.java_lang_ArrayIndexOutOfBoundsException = new ScalaJS.ClassTypeData({
  java_lang_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", ScalaJS.data.java_lang_IndexOutOfBoundsException, {
  java_lang_ArrayIndexOutOfBoundsException: 1,
  java_lang_IndexOutOfBoundsException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ArrayIndexOutOfBoundsException.prototype.$classData = ScalaJS.data.java_lang_ArrayIndexOutOfBoundsException;
//@ sourceMappingURL=ArrayIndexOutOfBoundsException.js.map
