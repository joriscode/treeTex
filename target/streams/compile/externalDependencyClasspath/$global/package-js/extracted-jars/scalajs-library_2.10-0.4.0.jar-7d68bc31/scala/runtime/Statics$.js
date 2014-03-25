/** @constructor */
ScalaJS.c.scala_runtime_Statics$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_Statics$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_Statics$.prototype.constructor = ScalaJS.c.scala_runtime_Statics$;
ScalaJS.c.scala_runtime_Statics$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  h = ScalaJS.modules.java_lang_Integer().rotateLeft__I__I__I(h, 13);
  return ((((h * 5) | 0) + -430675100) | 0)
});
ScalaJS.c.scala_runtime_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = ((k * -862048943) | 0);
  k = ScalaJS.modules.java_lang_Integer().rotateLeft__I__I__I(k, 15);
  k = ((k * 461845907) | 0);
  return (hash ^ k)
});
ScalaJS.c.scala_runtime_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  return this.avalanche__I__I((hash ^ length))
});
ScalaJS.c.scala_runtime_Statics$.prototype.avalanche__I__I = (function(h0) {
  var h = h0;
  h = (h ^ (h >>> 16));
  h = ((h * -2048144789) | 0);
  h = (h ^ (h >>> 13));
  h = ((h * -1028477387) | 0);
  h = (h ^ (h >>> 16));
  return h
});
ScalaJS.c.scala_runtime_Statics$.prototype.longHash__J__I = (function(lv) {
  return lv.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0)).toInt__I()
});
ScalaJS.c.scala_runtime_Statics$.prototype.doubleHash__D__I = (function(dv) {
  return (dv | 0)
});
ScalaJS.c.scala_runtime_Statics$.prototype.floatHash__F__I = (function(fv) {
  return (fv | 0)
});
ScalaJS.c.scala_runtime_Statics$.prototype.anyHash__O__I = (function(x) {
  var x1 = x;
  if (ScalaJS.anyRefEqEq(null, x1)) {
    return 0
  };
  if (ScalaJS.is.java_lang_Long(x1)) {
    var x3 = ScalaJS.uJ(x1);
    return this.longHash__J__I(x3)
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    var x4 = ScalaJS.uD(x1);
    return this.doubleHash__D__I(x4)
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    var x5 = ScalaJS.uF(x1);
    return this.floatHash__F__I(x5)
  };
  return ScalaJS.objectHashCode(x)
});
ScalaJS.c.scala_runtime_Statics$.prototype.anyHash__O__ = (function(x) {
  return ScalaJS.bI(this.anyHash__O__I(x))
});
ScalaJS.c.scala_runtime_Statics$.prototype.floatHash__F__ = (function(fv) {
  return ScalaJS.bI(this.floatHash__F__I(fv))
});
ScalaJS.c.scala_runtime_Statics$.prototype.doubleHash__D__ = (function(dv) {
  return ScalaJS.bI(this.doubleHash__D__I(dv))
});
ScalaJS.c.scala_runtime_Statics$.prototype.longHash__J__ = (function(lv) {
  return ScalaJS.bI(this.longHash__J__I(lv))
});
ScalaJS.c.scala_runtime_Statics$.prototype.avalanche__I__ = (function(h0) {
  return ScalaJS.bI(this.avalanche__I__I(h0))
});
ScalaJS.c.scala_runtime_Statics$.prototype.finalizeHash__I__I__ = (function(hash, length) {
  return ScalaJS.bI(this.finalizeHash__I__I__I(hash, length))
});
ScalaJS.c.scala_runtime_Statics$.prototype.mixLast__I__I__ = (function(hash$2, data) {
  return ScalaJS.bI(this.mixLast__I__I__I(hash$2, data))
});
ScalaJS.c.scala_runtime_Statics$.prototype.mix__I__I__ = (function(hash$3, data$2) {
  return ScalaJS.bI(this.mix__I__I__I(hash$3, data$2))
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_Statics$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_Statics$.prototype = ScalaJS.c.scala_runtime_Statics$.prototype;
ScalaJS.is.scala_runtime_Statics$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_Statics$)))
});
ScalaJS.as.scala_runtime_Statics$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_Statics$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.Statics")
  }
});
ScalaJS.isArrayOf.scala_runtime_Statics$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_Statics$)))
});
ScalaJS.asArrayOf.scala_runtime_Statics$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_Statics$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.Statics;", depth)
  }
});
ScalaJS.data.scala_runtime_Statics$ = new ScalaJS.ClassTypeData({
  scala_runtime_Statics$: 0
}, false, "scala.runtime.Statics$", ScalaJS.data.java_lang_Object, {
  scala_runtime_Statics$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_Statics$.prototype.$classData = ScalaJS.data.scala_runtime_Statics$;
ScalaJS.moduleInstances.scala_runtime_Statics = undefined;
ScalaJS.modules.scala_runtime_Statics = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_Statics)) {
    ScalaJS.moduleInstances.scala_runtime_Statics = new ScalaJS.c.scala_runtime_Statics$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_Statics
});
//@ sourceMappingURL=Statics$.js.map
