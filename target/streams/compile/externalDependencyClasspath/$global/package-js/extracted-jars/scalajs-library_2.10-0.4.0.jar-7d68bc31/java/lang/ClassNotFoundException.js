/** @constructor */
ScalaJS.c.java_lang_ClassNotFoundException = (function() {
  ScalaJS.c.java_lang_ReflectiveOperationException.call(this);
  this.e$4 = null
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype = new ScalaJS.inheritable.java_lang_ReflectiveOperationException();
ScalaJS.c.java_lang_ClassNotFoundException.prototype.constructor = ScalaJS.c.java_lang_ClassNotFoundException;
ScalaJS.c.java_lang_ClassNotFoundException.prototype.getException__Ljava_lang_Throwable = (function() {
  return this.e$4
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype.getCause__Ljava_lang_Throwable = (function() {
  return this.e$4
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype.init___T__Ljava_lang_Throwable = (function(s, e) {
  this.e$4 = e;
  ScalaJS.c.java_lang_ReflectiveOperationException.prototype.init___T.call(this, s);
  return this
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_ClassNotFoundException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype.init___ = (function() {
  ScalaJS.c.java_lang_ClassNotFoundException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype.getException__ = (function() {
  return this.getException__Ljava_lang_Throwable()
});
/** @constructor */
ScalaJS.inheritable.java_lang_ClassNotFoundException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ClassNotFoundException.prototype = ScalaJS.c.java_lang_ClassNotFoundException.prototype;
ScalaJS.is.java_lang_ClassNotFoundException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ClassNotFoundException)))
});
ScalaJS.as.java_lang_ClassNotFoundException = (function(obj) {
  if ((ScalaJS.is.java_lang_ClassNotFoundException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ClassNotFoundException")
  }
});
ScalaJS.isArrayOf.java_lang_ClassNotFoundException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ClassNotFoundException)))
});
ScalaJS.asArrayOf.java_lang_ClassNotFoundException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ClassNotFoundException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ClassNotFoundException;", depth)
  }
});
ScalaJS.data.java_lang_ClassNotFoundException = new ScalaJS.ClassTypeData({
  java_lang_ClassNotFoundException: 0
}, false, "java.lang.ClassNotFoundException", ScalaJS.data.java_lang_ReflectiveOperationException, {
  java_lang_ClassNotFoundException: 1,
  java_lang_ReflectiveOperationException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ClassNotFoundException.prototype.$classData = ScalaJS.data.java_lang_ClassNotFoundException;
//@ sourceMappingURL=ClassNotFoundException.js.map
