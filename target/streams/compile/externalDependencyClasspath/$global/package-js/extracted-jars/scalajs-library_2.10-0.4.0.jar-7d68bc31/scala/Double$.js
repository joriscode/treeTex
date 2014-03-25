/** @constructor */
ScalaJS.c.scala_Double$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinPositiveValue$1 = 0.0;
  this.NaN$1 = 0.0;
  this.PositiveInfinity$1 = 0.0;
  this.NegativeInfinity$1 = 0.0;
  this.MinValue$1 = 0.0;
  this.MaxValue$1 = 0.0
});
ScalaJS.c.scala_Double$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Double$.prototype.constructor = ScalaJS.c.scala_Double$;
ScalaJS.c.scala_Double$.prototype.MinPositiveValue__D = (function() {
  return 4.9E-324
});
ScalaJS.c.scala_Double$.prototype.NaN__D = (function() {
  return NaN
});
ScalaJS.c.scala_Double$.prototype.PositiveInfinity__D = (function() {
  return Infinity
});
ScalaJS.c.scala_Double$.prototype.NegativeInfinity__D = (function() {
  return -Infinity
});
ScalaJS.c.scala_Double$.prototype.MinValue__D = (function() {
  return this.MinValue$1
});
ScalaJS.c.scala_Double$.prototype.MaxValue__D = (function() {
  return 1.7976931348623157E308
});
ScalaJS.c.scala_Double$.prototype.box__D__Ljava_lang_Double = (function(x) {
  return ScalaJS.modules.java_lang_Double().valueOf__D__Ljava_lang_Double(x)
});
ScalaJS.c.scala_Double$.prototype.unbox__O__D = (function(x) {
  return ScalaJS.as.java_lang_Double(x).doubleValue__D()
});
ScalaJS.c.scala_Double$.prototype.toString__T = (function() {
  return "object scala.Double"
});
ScalaJS.c.scala_Double$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_Double = this;
  this.MinValue$1 = (-1.7976931348623157E308);
  return this
});
ScalaJS.c.scala_Double$.prototype.unbox__O__ = (function(x) {
  return ScalaJS.bD(this.unbox__O__D(x))
});
ScalaJS.c.scala_Double$.prototype.box__D__ = (function(x$2) {
  return this.box__D__Ljava_lang_Double(x$2)
});
ScalaJS.c.scala_Double$.prototype.MaxValue__ = (function() {
  return ScalaJS.bD(this.MaxValue__D())
});
ScalaJS.c.scala_Double$.prototype.MinValue__ = (function() {
  return ScalaJS.bD(this.MinValue__D())
});
ScalaJS.c.scala_Double$.prototype.NegativeInfinity__ = (function() {
  return ScalaJS.bD(this.NegativeInfinity__D())
});
ScalaJS.c.scala_Double$.prototype.PositiveInfinity__ = (function() {
  return ScalaJS.bD(this.PositiveInfinity__D())
});
ScalaJS.c.scala_Double$.prototype.NaN__ = (function() {
  return ScalaJS.bD(this.NaN__D())
});
ScalaJS.c.scala_Double$.prototype.MinPositiveValue__ = (function() {
  return ScalaJS.bD(this.MinPositiveValue__D())
});
/** @constructor */
ScalaJS.inheritable.scala_Double$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Double$.prototype = ScalaJS.c.scala_Double$.prototype;
ScalaJS.is.scala_Double$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Double$)))
});
ScalaJS.as.scala_Double$ = (function(obj) {
  if ((ScalaJS.is.scala_Double$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Double")
  }
});
ScalaJS.isArrayOf.scala_Double$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Double$)))
});
ScalaJS.asArrayOf.scala_Double$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Double$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Double;", depth)
  }
});
ScalaJS.data.scala_Double$ = new ScalaJS.ClassTypeData({
  scala_Double$: 0
}, false, "scala.Double$", ScalaJS.data.java_lang_Object, {
  scala_Double$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Double$.prototype.$classData = ScalaJS.data.scala_Double$;
ScalaJS.moduleInstances.scala_Double = undefined;
ScalaJS.modules.scala_Double = (function() {
  if ((!ScalaJS.moduleInstances.scala_Double)) {
    ScalaJS.moduleInstances.scala_Double = new ScalaJS.c.scala_Double$().init___()
  };
  return ScalaJS.moduleInstances.scala_Double
});
//@ sourceMappingURL=Double$.js.map
