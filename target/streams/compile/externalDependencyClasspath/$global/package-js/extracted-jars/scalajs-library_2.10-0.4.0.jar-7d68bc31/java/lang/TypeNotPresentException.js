/** @constructor */
ScalaJS.c.java_lang_TypeNotPresentException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.t$4 = null
});
ScalaJS.c.java_lang_TypeNotPresentException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_TypeNotPresentException.prototype.constructor = ScalaJS.c.java_lang_TypeNotPresentException;
ScalaJS.c.java_lang_TypeNotPresentException.prototype.typeName__T = (function() {
  return this.t$4
});
ScalaJS.c.java_lang_TypeNotPresentException.prototype.init___T__Ljava_lang_Throwable = (function(t, e) {
  this.t$4 = t;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T__Ljava_lang_Throwable.call(this, (("Type " + t) + " not present"), e);
  return this
});
ScalaJS.c.java_lang_TypeNotPresentException.prototype.typeName__ = (function() {
  return this.typeName__T()
});
/** @constructor */
ScalaJS.inheritable.java_lang_TypeNotPresentException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_TypeNotPresentException.prototype = ScalaJS.c.java_lang_TypeNotPresentException.prototype;
ScalaJS.is.java_lang_TypeNotPresentException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_TypeNotPresentException)))
});
ScalaJS.as.java_lang_TypeNotPresentException = (function(obj) {
  if ((ScalaJS.is.java_lang_TypeNotPresentException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.TypeNotPresentException")
  }
});
ScalaJS.isArrayOf.java_lang_TypeNotPresentException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_TypeNotPresentException)))
});
ScalaJS.asArrayOf.java_lang_TypeNotPresentException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_TypeNotPresentException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.TypeNotPresentException;", depth)
  }
});
ScalaJS.data.java_lang_TypeNotPresentException = new ScalaJS.ClassTypeData({
  java_lang_TypeNotPresentException: 0
}, false, "java.lang.TypeNotPresentException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_TypeNotPresentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_TypeNotPresentException.prototype.$classData = ScalaJS.data.java_lang_TypeNotPresentException;
//@ sourceMappingURL=TypeNotPresentException.js.map
