/** @constructor */
ScalaJS.c.java_lang_Error = (function() {
  ScalaJS.c.java_lang_Throwable.call(this)
});
ScalaJS.c.java_lang_Error.prototype = new ScalaJS.inheritable.java_lang_Throwable();
ScalaJS.c.java_lang_Error.prototype.constructor = ScalaJS.c.java_lang_Error;
ScalaJS.c.java_lang_Error.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Error.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
ScalaJS.c.java_lang_Error.prototype.init___T = (function(s) {
  ScalaJS.c.java_lang_Error.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_lang_Error.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_lang_Error.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_lang_Error = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Error.prototype = ScalaJS.c.java_lang_Error.prototype;
ScalaJS.is.java_lang_Error = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Error)))
});
ScalaJS.as.java_lang_Error = (function(obj) {
  if ((ScalaJS.is.java_lang_Error(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Error")
  }
});
ScalaJS.isArrayOf.java_lang_Error = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Error)))
});
ScalaJS.asArrayOf.java_lang_Error = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Error(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Error;", depth)
  }
});
ScalaJS.data.java_lang_Error = new ScalaJS.ClassTypeData({
  java_lang_Error: 0
}, false, "java.lang.Error", ScalaJS.data.java_lang_Throwable, {
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Error.prototype.$classData = ScalaJS.data.java_lang_Error;
//@ sourceMappingURL=Error.js.map
