/** @constructor */
ScalaJS.c.java_lang_AssertionError = (function() {
  ScalaJS.c.java_lang_Error.call(this)
});
ScalaJS.c.java_lang_AssertionError.prototype = new ScalaJS.inheritable.java_lang_Error();
ScalaJS.c.java_lang_AssertionError.prototype.constructor = ScalaJS.c.java_lang_AssertionError;
ScalaJS.c.java_lang_AssertionError.prototype.init___ = (function() {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, null);
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___O = (function(o) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(o));
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___Z = (function(b) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(ScalaJS.bZ(b)));
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___C = (function(c) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(ScalaJS.bC(c)));
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___I = (function(i) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(ScalaJS.bI(i)));
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___J = (function(l) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(ScalaJS.bJ(l)));
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___F = (function(f) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(ScalaJS.bF(f)));
  return this
});
ScalaJS.c.java_lang_AssertionError.prototype.init___D = (function(d) {
  ScalaJS.c.java_lang_AssertionError.prototype.init___T.call(this, ScalaJS.objectToString(ScalaJS.bD(d)));
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_AssertionError = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_AssertionError.prototype = ScalaJS.c.java_lang_AssertionError.prototype;
ScalaJS.is.java_lang_AssertionError = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_AssertionError)))
});
ScalaJS.as.java_lang_AssertionError = (function(obj) {
  if ((ScalaJS.is.java_lang_AssertionError(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.AssertionError")
  }
});
ScalaJS.isArrayOf.java_lang_AssertionError = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_AssertionError)))
});
ScalaJS.asArrayOf.java_lang_AssertionError = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_AssertionError(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.AssertionError;", depth)
  }
});
ScalaJS.data.java_lang_AssertionError = new ScalaJS.ClassTypeData({
  java_lang_AssertionError: 0
}, false, "java.lang.AssertionError", ScalaJS.data.java_lang_Error, {
  java_lang_AssertionError: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_AssertionError.prototype.$classData = ScalaJS.data.java_lang_AssertionError;
//@ sourceMappingURL=AssertionError.js.map
