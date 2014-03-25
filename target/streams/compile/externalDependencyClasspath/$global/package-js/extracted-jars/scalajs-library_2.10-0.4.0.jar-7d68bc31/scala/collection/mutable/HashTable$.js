/** @constructor */
ScalaJS.c.scala_collection_mutable_HashTable$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.constructor = ScalaJS.c.scala_collection_mutable_HashTable$;
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.defaultLoadFactor__I = (function() {
  return 750
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.loadFactorDenum__I = (function() {
  return 1000
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.newThreshold__I__I__I = (function(_loadFactor, size) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(size).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(_loadFactor)).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.loadFactorDenum__I())).toInt__I()
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.sizeForThreshold__I__I__I = (function(_loadFactor, thr) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(thr).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.loadFactorDenum__I())).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(_loadFactor)).toInt__I()
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.capacity__I__I = (function(expectedSize) {
  if ((expectedSize === 0)) {
    return 1
  } else {
    return this.powerOfTwo__I__I(expectedSize)
  }
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.powerOfTwo__I__I = (function(target) {
  var c = (target - 1);
  c = (c | (c >>> 1));
  c = (c | (c >>> 2));
  c = (c | (c >>> 4));
  c = (c | (c >>> 8));
  c = (c | (c >>> 16));
  return (c + 1)
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.powerOfTwo__I__ = (function(target) {
  return ScalaJS.bI(this.powerOfTwo__I__I(target))
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.capacity__I__ = (function(expectedSize) {
  return ScalaJS.bI(this.capacity__I__I(expectedSize))
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.sizeForThreshold__I__I__ = (function(_loadFactor, thr) {
  return ScalaJS.bI(this.sizeForThreshold__I__I__I(_loadFactor, thr))
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.newThreshold__I__I__ = (function(_loadFactor$2, size) {
  return ScalaJS.bI(this.newThreshold__I__I__I(_loadFactor$2, size))
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.loadFactorDenum__ = (function() {
  return ScalaJS.bI(this.loadFactorDenum__I())
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.defaultLoadFactor__ = (function() {
  return ScalaJS.bI(this.defaultLoadFactor__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_HashTable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_HashTable$.prototype = ScalaJS.c.scala_collection_mutable_HashTable$.prototype;
ScalaJS.is.scala_collection_mutable_HashTable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashTable$)))
});
ScalaJS.as.scala_collection_mutable_HashTable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashTable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashTable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashTable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashTable$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashTable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashTable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashTable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashTable$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashTable$: 0
}, false, "scala.collection.mutable.HashTable$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_HashTable$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_HashTable$.prototype.$classData = ScalaJS.data.scala_collection_mutable_HashTable$;
ScalaJS.moduleInstances.scala_collection_mutable_HashTable = undefined;
ScalaJS.modules.scala_collection_mutable_HashTable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_HashTable)) {
    ScalaJS.moduleInstances.scala_collection_mutable_HashTable = new ScalaJS.c.scala_collection_mutable_HashTable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_HashTable
});
//@ sourceMappingURL=HashTable$.js.map
