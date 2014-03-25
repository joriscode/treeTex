/** @constructor */
ScalaJS.c.scala_Float$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinPositiveValue$1 = 0.0;
  this.NaN$1 = 0.0;
  this.PositiveInfinity$1 = 0.0;
  this.NegativeInfinity$1 = 0.0;
  this.MinValue$1 = 0.0;
  this.MaxValue$1 = 0.0
});
ScalaJS.c.scala_Float$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Float$.prototype.constructor = ScalaJS.c.scala_Float$;
ScalaJS.c.scala_Float$.prototype.MinPositiveValue__F = (function() {
  return 1.401298464324817E-45
});
ScalaJS.c.scala_Float$.prototype.NaN__F = (function() {
  return NaN
});
ScalaJS.c.scala_Float$.prototype.PositiveInfinity__F = (function() {
  return Infinity
});
ScalaJS.c.scala_Float$.prototype.NegativeInfinity__F = (function() {
  return -Infinity
});
ScalaJS.c.scala_Float$.prototype.MinValue__F = (function() {
  return this.MinValue$1
});
ScalaJS.c.scala_Float$.prototype.MaxValue__F = (function() {
  return 3.4028234663852886E38
});
ScalaJS.c.scala_Float$.prototype.box__F__Ljava_lang_Float = (function(x) {
  return ScalaJS.modules.java_lang_Float().valueOf__F__Ljava_lang_Float(x)
});
ScalaJS.c.scala_Float$.prototype.unbox__O__F = (function(x) {
  return ScalaJS.as.java_lang_Float(x).floatValue__F()
});
ScalaJS.c.scala_Float$.prototype.toString__T = (function() {
  return "object scala.Float"
});
ScalaJS.c.scala_Float$.prototype.float2double__F__D = (function(x) {
  return x
});
ScalaJS.c.scala_Float$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_Float = this;
  this.MinValue$1 = (-3.4028234663852886E38);
  return this
});
ScalaJS.c.scala_Float$.prototype.float2double__F__ = (function(x) {
  return ScalaJS.bD(this.float2double__F__D(x))
});
ScalaJS.c.scala_Float$.prototype.unbox__O__ = (function(x$2) {
  return ScalaJS.bF(this.unbox__O__F(x$2))
});
ScalaJS.c.scala_Float$.prototype.box__F__ = (function(x$3) {
  return this.box__F__Ljava_lang_Float(x$3)
});
ScalaJS.c.scala_Float$.prototype.MaxValue__ = (function() {
  return ScalaJS.bF(this.MaxValue__F())
});
ScalaJS.c.scala_Float$.prototype.MinValue__ = (function() {
  return ScalaJS.bF(this.MinValue__F())
});
ScalaJS.c.scala_Float$.prototype.NegativeInfinity__ = (function() {
  return ScalaJS.bF(this.NegativeInfinity__F())
});
ScalaJS.c.scala_Float$.prototype.PositiveInfinity__ = (function() {
  return ScalaJS.bF(this.PositiveInfinity__F())
});
ScalaJS.c.scala_Float$.prototype.NaN__ = (function() {
  return ScalaJS.bF(this.NaN__F())
});
ScalaJS.c.scala_Float$.prototype.MinPositiveValue__ = (function() {
  return ScalaJS.bF(this.MinPositiveValue__F())
});
/** @constructor */
ScalaJS.inheritable.scala_Float$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Float$.prototype = ScalaJS.c.scala_Float$.prototype;
ScalaJS.is.scala_Float$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Float$)))
});
ScalaJS.as.scala_Float$ = (function(obj) {
  if ((ScalaJS.is.scala_Float$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Float")
  }
});
ScalaJS.isArrayOf.scala_Float$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Float$)))
});
ScalaJS.asArrayOf.scala_Float$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Float$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Float;", depth)
  }
});
ScalaJS.data.scala_Float$ = new ScalaJS.ClassTypeData({
  scala_Float$: 0
}, false, "scala.Float$", ScalaJS.data.java_lang_Object, {
  scala_Float$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Float$.prototype.$classData = ScalaJS.data.scala_Float$;
ScalaJS.moduleInstances.scala_Float = undefined;
ScalaJS.modules.scala_Float = (function() {
  if ((!ScalaJS.moduleInstances.scala_Float)) {
    ScalaJS.moduleInstances.scala_Float = new ScalaJS.c.scala_Float$().init___()
  };
  return ScalaJS.moduleInstances.scala_Float
});
//@ sourceMappingURL=Float$.js.map
