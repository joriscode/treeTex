/** @constructor */
ScalaJS.c.java_lang_StringIndexOutOfBoundsException = (function() {
  ScalaJS.c.java_lang_IndexOutOfBoundsException.call(this)
});
ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype = new ScalaJS.inheritable.java_lang_IndexOutOfBoundsException();
ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype.constructor = ScalaJS.c.java_lang_StringIndexOutOfBoundsException;
ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype.init___I = (function(index) {
  ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype.init___T.call(this, ("String index out of range: " + ScalaJS.bI(index)));
  return this
});
ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype.init___T.call(this, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_StringIndexOutOfBoundsException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_StringIndexOutOfBoundsException.prototype = ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype;
ScalaJS.is.java_lang_StringIndexOutOfBoundsException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_StringIndexOutOfBoundsException)))
});
ScalaJS.as.java_lang_StringIndexOutOfBoundsException = (function(obj) {
  if ((ScalaJS.is.java_lang_StringIndexOutOfBoundsException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.StringIndexOutOfBoundsException")
  }
});
ScalaJS.isArrayOf.java_lang_StringIndexOutOfBoundsException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_StringIndexOutOfBoundsException)))
});
ScalaJS.asArrayOf.java_lang_StringIndexOutOfBoundsException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_StringIndexOutOfBoundsException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.StringIndexOutOfBoundsException;", depth)
  }
});
ScalaJS.data.java_lang_StringIndexOutOfBoundsException = new ScalaJS.ClassTypeData({
  java_lang_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", ScalaJS.data.java_lang_IndexOutOfBoundsException, {
  java_lang_StringIndexOutOfBoundsException: 1,
  java_lang_IndexOutOfBoundsException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_StringIndexOutOfBoundsException.prototype.$classData = ScalaJS.data.java_lang_StringIndexOutOfBoundsException;
//@ sourceMappingURL=StringIndexOutOfBoundsException.js.map
