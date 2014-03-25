/** @constructor */
ScalaJS.c.java_util_InvalidPropertiesFormatException = (function() {
  ScalaJS.c.java_io_IOException.call(this)
});
ScalaJS.c.java_util_InvalidPropertiesFormatException.prototype = new ScalaJS.inheritable.java_io_IOException();
ScalaJS.c.java_util_InvalidPropertiesFormatException.prototype.constructor = ScalaJS.c.java_util_InvalidPropertiesFormatException;
ScalaJS.c.java_util_InvalidPropertiesFormatException.prototype.init___Ljava_lang_Throwable = (function(e) {
  var jsx$2 = ScalaJS.c.java_util_InvalidPropertiesFormatException.prototype.init___T;
  if (ScalaJS.anyRefEqEq(e, null)) {
    var jsx$1 = null
  } else {
    var jsx$1 = e.toString__T()
  };
  jsx$2.call(this, jsx$1);
  this.initCause__Ljava_lang_Throwable__Ljava_lang_Throwable(e);
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_InvalidPropertiesFormatException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_InvalidPropertiesFormatException.prototype = ScalaJS.c.java_util_InvalidPropertiesFormatException.prototype;
ScalaJS.is.java_util_InvalidPropertiesFormatException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_InvalidPropertiesFormatException)))
});
ScalaJS.as.java_util_InvalidPropertiesFormatException = (function(obj) {
  if ((ScalaJS.is.java_util_InvalidPropertiesFormatException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.InvalidPropertiesFormatException")
  }
});
ScalaJS.isArrayOf.java_util_InvalidPropertiesFormatException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_InvalidPropertiesFormatException)))
});
ScalaJS.asArrayOf.java_util_InvalidPropertiesFormatException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_InvalidPropertiesFormatException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.InvalidPropertiesFormatException;", depth)
  }
});
ScalaJS.data.java_util_InvalidPropertiesFormatException = new ScalaJS.ClassTypeData({
  java_util_InvalidPropertiesFormatException: 0
}, false, "java.util.InvalidPropertiesFormatException", ScalaJS.data.java_io_IOException, {
  java_util_InvalidPropertiesFormatException: 1,
  java_io_IOException: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_InvalidPropertiesFormatException.prototype.$classData = ScalaJS.data.java_util_InvalidPropertiesFormatException;
//@ sourceMappingURL=InvalidPropertiesFormatException.js.map
