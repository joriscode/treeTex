/** @constructor */
ScalaJS.c.scala_runtime_MegaMethodCache = (function() {
  ScalaJS.c.scala_runtime_MethodCache.call(this);
  this.forName$2 = null;
  this.forParameterTypes$2 = null
});
ScalaJS.c.scala_runtime_MegaMethodCache.prototype = new ScalaJS.inheritable.scala_runtime_MethodCache();
ScalaJS.c.scala_runtime_MegaMethodCache.prototype.constructor = ScalaJS.c.scala_runtime_MegaMethodCache;
ScalaJS.c.scala_runtime_MegaMethodCache.prototype.find__Ljava_lang_Class__Ljava_lang_reflect_Method = (function(forReceiver) {
  return forReceiver.getMethod__T__ALjava_lang_Class__Ljava_lang_reflect_Method(this.forName$2, this.forParameterTypes$2)
});
ScalaJS.c.scala_runtime_MegaMethodCache.prototype.add__Ljava_lang_Class__Ljava_lang_reflect_Method__Lscala_runtime_MethodCache = (function(forReceiver, forMethod) {
  return this
});
ScalaJS.c.scala_runtime_MegaMethodCache.prototype.init___T__ALjava_lang_Class = (function(forName, forParameterTypes) {
  this.forName$2 = forName;
  this.forParameterTypes$2 = forParameterTypes;
  ScalaJS.c.scala_runtime_MethodCache.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_MegaMethodCache = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_MegaMethodCache.prototype = ScalaJS.c.scala_runtime_MegaMethodCache.prototype;
ScalaJS.is.scala_runtime_MegaMethodCache = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_MegaMethodCache)))
});
ScalaJS.as.scala_runtime_MegaMethodCache = (function(obj) {
  if ((ScalaJS.is.scala_runtime_MegaMethodCache(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.MegaMethodCache")
  }
});
ScalaJS.isArrayOf.scala_runtime_MegaMethodCache = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_MegaMethodCache)))
});
ScalaJS.asArrayOf.scala_runtime_MegaMethodCache = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_MegaMethodCache(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.MegaMethodCache;", depth)
  }
});
ScalaJS.data.scala_runtime_MegaMethodCache = new ScalaJS.ClassTypeData({
  scala_runtime_MegaMethodCache: 0
}, false, "scala.runtime.MegaMethodCache", ScalaJS.data.scala_runtime_MethodCache, {
  scala_runtime_MegaMethodCache: 1,
  scala_runtime_MethodCache: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_MegaMethodCache.prototype.$classData = ScalaJS.data.scala_runtime_MegaMethodCache;
//@ sourceMappingURL=MegaMethodCache.js.map
