/** @constructor */
ScalaJS.c.java_lang_EnumConstantNotPresentException = (function() {
  ScalaJS.c.java_lang_RuntimeException.call(this);
  this.e$4 = null;
  this.c$4 = null
});
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype = new ScalaJS.inheritable.java_lang_RuntimeException();
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.constructor = ScalaJS.c.java_lang_EnumConstantNotPresentException;
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.enumType__Ljava_lang_Class = (function() {
  return this.e$4
});
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.constantName__T = (function() {
  return this.c$4
});
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.init___Ljava_lang_Class__T = (function(e, c) {
  this.e$4 = e;
  this.c$4 = c;
  ScalaJS.c.java_lang_RuntimeException.prototype.init___T.call(this, ((("" + e.getName__T()) + ".") + c));
  return this
});
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.constantName__ = (function() {
  return this.constantName__T()
});
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.enumType__ = (function() {
  return this.enumType__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_EnumConstantNotPresentException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_EnumConstantNotPresentException.prototype = ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype;
ScalaJS.is.java_lang_EnumConstantNotPresentException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_EnumConstantNotPresentException)))
});
ScalaJS.as.java_lang_EnumConstantNotPresentException = (function(obj) {
  if ((ScalaJS.is.java_lang_EnumConstantNotPresentException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.EnumConstantNotPresentException")
  }
});
ScalaJS.isArrayOf.java_lang_EnumConstantNotPresentException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_EnumConstantNotPresentException)))
});
ScalaJS.asArrayOf.java_lang_EnumConstantNotPresentException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_EnumConstantNotPresentException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.EnumConstantNotPresentException;", depth)
  }
});
ScalaJS.data.java_lang_EnumConstantNotPresentException = new ScalaJS.ClassTypeData({
  java_lang_EnumConstantNotPresentException: 0
}, false, "java.lang.EnumConstantNotPresentException", ScalaJS.data.java_lang_RuntimeException, {
  java_lang_EnumConstantNotPresentException: 1,
  java_lang_RuntimeException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_EnumConstantNotPresentException.prototype.$classData = ScalaJS.data.java_lang_EnumConstantNotPresentException;
//@ sourceMappingURL=EnumConstantNotPresentException.js.map
