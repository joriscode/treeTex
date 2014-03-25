/** @constructor */
ScalaJS.c.java_lang_InheritableThreadLocal = (function() {
  ScalaJS.c.java_lang_ThreadLocal.call(this)
});
ScalaJS.c.java_lang_InheritableThreadLocal.prototype = new ScalaJS.inheritable.java_lang_ThreadLocal();
ScalaJS.c.java_lang_InheritableThreadLocal.prototype.constructor = ScalaJS.c.java_lang_InheritableThreadLocal;
/** @constructor */
ScalaJS.inheritable.java_lang_InheritableThreadLocal = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_InheritableThreadLocal.prototype = ScalaJS.c.java_lang_InheritableThreadLocal.prototype;
ScalaJS.is.java_lang_InheritableThreadLocal = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_InheritableThreadLocal)))
});
ScalaJS.as.java_lang_InheritableThreadLocal = (function(obj) {
  if ((ScalaJS.is.java_lang_InheritableThreadLocal(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.InheritableThreadLocal")
  }
});
ScalaJS.isArrayOf.java_lang_InheritableThreadLocal = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_InheritableThreadLocal)))
});
ScalaJS.asArrayOf.java_lang_InheritableThreadLocal = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_InheritableThreadLocal(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.InheritableThreadLocal;", depth)
  }
});
ScalaJS.data.java_lang_InheritableThreadLocal = new ScalaJS.ClassTypeData({
  java_lang_InheritableThreadLocal: 0
}, false, "java.lang.InheritableThreadLocal", ScalaJS.data.java_lang_ThreadLocal, {
  java_lang_InheritableThreadLocal: 1,
  java_lang_ThreadLocal: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_InheritableThreadLocal.prototype.$classData = ScalaJS.data.java_lang_InheritableThreadLocal;
//@ sourceMappingURL=InheritableThreadLocal.js.map
