/** @constructor */
ScalaJS.c.java_lang_ThreadDeath = (function() {
  ScalaJS.c.java_lang_Error.call(this)
});
ScalaJS.c.java_lang_ThreadDeath.prototype = new ScalaJS.inheritable.java_lang_Error();
ScalaJS.c.java_lang_ThreadDeath.prototype.constructor = ScalaJS.c.java_lang_ThreadDeath;
/** @constructor */
ScalaJS.inheritable.java_lang_ThreadDeath = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_ThreadDeath.prototype = ScalaJS.c.java_lang_ThreadDeath.prototype;
ScalaJS.is.java_lang_ThreadDeath = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_ThreadDeath)))
});
ScalaJS.as.java_lang_ThreadDeath = (function(obj) {
  if ((ScalaJS.is.java_lang_ThreadDeath(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.ThreadDeath")
  }
});
ScalaJS.isArrayOf.java_lang_ThreadDeath = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_ThreadDeath)))
});
ScalaJS.asArrayOf.java_lang_ThreadDeath = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_ThreadDeath(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.ThreadDeath;", depth)
  }
});
ScalaJS.data.java_lang_ThreadDeath = new ScalaJS.ClassTypeData({
  java_lang_ThreadDeath: 0
}, false, "java.lang.ThreadDeath", ScalaJS.data.java_lang_Error, {
  java_lang_ThreadDeath: 1,
  java_lang_Error: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_ThreadDeath.prototype.$classData = ScalaJS.data.java_lang_ThreadDeath;
//@ sourceMappingURL=ThreadDeath.js.map
