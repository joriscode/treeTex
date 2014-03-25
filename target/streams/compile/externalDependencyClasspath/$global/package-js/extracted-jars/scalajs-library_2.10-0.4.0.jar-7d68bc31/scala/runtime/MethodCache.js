/** @constructor */
ScalaJS.c.scala_runtime_MethodCache = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_MethodCache.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_MethodCache.prototype.constructor = ScalaJS.c.scala_runtime_MethodCache;
ScalaJS.c.scala_runtime_MethodCache.prototype.add__Ljava_lang_Class__Ljava_lang_reflect_Method__ = (function(forReceiver, forMethod) {
  return this.add__Ljava_lang_Class__Ljava_lang_reflect_Method__Lscala_runtime_MethodCache(forReceiver, forMethod)
});
ScalaJS.c.scala_runtime_MethodCache.prototype.find__Ljava_lang_Class__ = (function(forReceiver$2) {
  return this.find__Ljava_lang_Class__Ljava_lang_reflect_Method(forReceiver$2)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_MethodCache = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_MethodCache.prototype = ScalaJS.c.scala_runtime_MethodCache.prototype;
ScalaJS.is.scala_runtime_MethodCache = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_MethodCache)))
});
ScalaJS.as.scala_runtime_MethodCache = (function(obj) {
  if ((ScalaJS.is.scala_runtime_MethodCache(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.MethodCache")
  }
});
ScalaJS.isArrayOf.scala_runtime_MethodCache = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_MethodCache)))
});
ScalaJS.asArrayOf.scala_runtime_MethodCache = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_MethodCache(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.MethodCache;", depth)
  }
});
ScalaJS.data.scala_runtime_MethodCache = new ScalaJS.ClassTypeData({
  scala_runtime_MethodCache: 0
}, false, "scala.runtime.MethodCache", ScalaJS.data.java_lang_Object, {
  scala_runtime_MethodCache: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_MethodCache.prototype.$classData = ScalaJS.data.scala_runtime_MethodCache;
//@ sourceMappingURL=MethodCache.js.map
