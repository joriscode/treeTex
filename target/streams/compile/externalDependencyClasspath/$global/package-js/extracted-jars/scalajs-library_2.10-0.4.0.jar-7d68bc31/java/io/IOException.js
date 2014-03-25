/** @constructor */
ScalaJS.c.java_io_IOException = (function() {
  ScalaJS.c.java_lang_Exception.call(this)
});
ScalaJS.c.java_io_IOException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.java_io_IOException.prototype.constructor = ScalaJS.c.java_io_IOException;
ScalaJS.c.java_io_IOException.prototype.init___T__Ljava_lang_Throwable = (function(s$3, e) {
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, s$3);
  return this
});
ScalaJS.c.java_io_IOException.prototype.init___Ljava_lang_Throwable = (function(e) {
  ScalaJS.c.java_io_IOException.prototype.init___T__Ljava_lang_Throwable.call(this, null, e);
  return this
});
ScalaJS.c.java_io_IOException.prototype.init___T = (function(s) {
  ScalaJS.c.java_io_IOException.prototype.init___T__Ljava_lang_Throwable.call(this, s, null);
  return this
});
ScalaJS.c.java_io_IOException.prototype.init___ = (function() {
  ScalaJS.c.java_io_IOException.prototype.init___T__Ljava_lang_Throwable.call(this, null, null);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_io_IOException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_io_IOException.prototype = ScalaJS.c.java_io_IOException.prototype;
ScalaJS.is.java_io_IOException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_io_IOException)))
});
ScalaJS.as.java_io_IOException = (function(obj) {
  if ((ScalaJS.is.java_io_IOException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.IOException")
  }
});
ScalaJS.isArrayOf.java_io_IOException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_IOException)))
});
ScalaJS.asArrayOf.java_io_IOException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_IOException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.IOException;", depth)
  }
});
ScalaJS.data.java_io_IOException = new ScalaJS.ClassTypeData({
  java_io_IOException: 0
}, false, "java.io.IOException", ScalaJS.data.java_lang_Exception, {
  java_io_IOException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_io_IOException.prototype.$classData = ScalaJS.data.java_io_IOException;
//@ sourceMappingURL=IOException.js.map
