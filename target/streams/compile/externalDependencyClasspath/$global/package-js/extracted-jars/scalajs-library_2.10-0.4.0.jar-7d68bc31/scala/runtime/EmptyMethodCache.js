/** @constructor */
ScalaJS.c.scala_runtime_EmptyMethodCache = (function() {
  ScalaJS.c.scala_runtime_MethodCache.call(this)
});
ScalaJS.c.scala_runtime_EmptyMethodCache.prototype = new ScalaJS.inheritable.scala_runtime_MethodCache();
ScalaJS.c.scala_runtime_EmptyMethodCache.prototype.constructor = ScalaJS.c.scala_runtime_EmptyMethodCache;
ScalaJS.c.scala_runtime_EmptyMethodCache.prototype.find__Ljava_lang_Class__Ljava_lang_reflect_Method = (function(forReceiver$3) {
  return null
});
ScalaJS.c.scala_runtime_EmptyMethodCache.prototype.add__Ljava_lang_Class__Ljava_lang_reflect_Method__Lscala_runtime_MethodCache = (function(forReceiver, forMethod) {
  return new ScalaJS.c.scala_runtime_PolyMethodCache().init___Lscala_runtime_MethodCache__Ljava_lang_Class__Ljava_lang_reflect_Method__I(this, forReceiver, forMethod, 1)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_EmptyMethodCache = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_EmptyMethodCache.prototype = ScalaJS.c.scala_runtime_EmptyMethodCache.prototype;
ScalaJS.is.scala_runtime_EmptyMethodCache = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_EmptyMethodCache)))
});
ScalaJS.as.scala_runtime_EmptyMethodCache = (function(obj) {
  if ((ScalaJS.is.scala_runtime_EmptyMethodCache(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.EmptyMethodCache")
  }
});
ScalaJS.isArrayOf.scala_runtime_EmptyMethodCache = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_EmptyMethodCache)))
});
ScalaJS.asArrayOf.scala_runtime_EmptyMethodCache = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_EmptyMethodCache(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.EmptyMethodCache;", depth)
  }
});
ScalaJS.data.scala_runtime_EmptyMethodCache = new ScalaJS.ClassTypeData({
  scala_runtime_EmptyMethodCache: 0
}, false, "scala.runtime.EmptyMethodCache", ScalaJS.data.scala_runtime_MethodCache, {
  scala_runtime_EmptyMethodCache: 1,
  scala_runtime_MethodCache: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_EmptyMethodCache.prototype.$classData = ScalaJS.data.scala_runtime_EmptyMethodCache;
//@ sourceMappingURL=EmptyMethodCache.js.map
