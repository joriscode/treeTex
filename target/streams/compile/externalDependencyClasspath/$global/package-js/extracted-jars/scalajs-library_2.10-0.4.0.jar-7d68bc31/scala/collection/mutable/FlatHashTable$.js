/** @constructor */
ScalaJS.c.scala_collection_mutable_FlatHashTable$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.constructor = ScalaJS.c.scala_collection_mutable_FlatHashTable$;
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.seedGenerator__Ljava_lang_ThreadLocal = (function() {
  return new ScalaJS.c.scala_collection_mutable_FlatHashTable$$anon$2().init___()
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.defaultLoadFactor__I = (function() {
  return 450
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.loadFactorDenum__I = (function() {
  return 1000
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.sizeForThreshold__I__I__I = (function(size, _loadFactor) {
  return ScalaJS.modules.scala_math_package().max__I__I__I(32, ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(size).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.loadFactorDenum__I())).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(_loadFactor)).toInt__I())
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.newThreshold__I__I__I = (function(_loadFactor, size) {
  var lf = _loadFactor;
  ScalaJS.modules.scala_Predef().assert__Z__Lscala_Function0__V((lf < ((this.loadFactorDenum__I() / 2) | 0)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return "loadFactor too large; must be < 0.5"
    })
  })()));
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(size).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(lf)).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.loadFactorDenum__I())).toInt__I()
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.newThreshold__I__I__ = (function(_loadFactor, size) {
  return ScalaJS.bI(this.newThreshold__I__I__I(_loadFactor, size))
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.sizeForThreshold__I__I__ = (function(size$2, _loadFactor$2) {
  return ScalaJS.bI(this.sizeForThreshold__I__I__I(size$2, _loadFactor$2))
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.loadFactorDenum__ = (function() {
  return ScalaJS.bI(this.loadFactorDenum__I())
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.defaultLoadFactor__ = (function() {
  return ScalaJS.bI(this.defaultLoadFactor__I())
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.seedGenerator__ = (function() {
  return this.seedGenerator__Ljava_lang_ThreadLocal()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_FlatHashTable$.prototype = ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype;
ScalaJS.is.scala_collection_mutable_FlatHashTable$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_FlatHashTable$)))
});
ScalaJS.as.scala_collection_mutable_FlatHashTable$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_FlatHashTable$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.FlatHashTable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_FlatHashTable$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_FlatHashTable$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.FlatHashTable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_FlatHashTable$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_FlatHashTable$: 0
}, false, "scala.collection.mutable.FlatHashTable$", ScalaJS.data.java_lang_Object, {
  scala_collection_mutable_FlatHashTable$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_FlatHashTable$.prototype.$classData = ScalaJS.data.scala_collection_mutable_FlatHashTable$;
ScalaJS.moduleInstances.scala_collection_mutable_FlatHashTable = undefined;
ScalaJS.modules.scala_collection_mutable_FlatHashTable = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_FlatHashTable)) {
    ScalaJS.moduleInstances.scala_collection_mutable_FlatHashTable = new ScalaJS.c.scala_collection_mutable_FlatHashTable$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_FlatHashTable
});
//@ sourceMappingURL=FlatHashTable$.js.map
