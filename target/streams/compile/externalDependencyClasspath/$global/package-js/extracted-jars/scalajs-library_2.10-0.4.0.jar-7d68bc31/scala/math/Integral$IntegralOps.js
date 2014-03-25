/** @constructor */
ScalaJS.c.scala_math_Integral$IntegralOps = (function() {
  ScalaJS.c.scala_math_Numeric$Ops.call(this);
  this.lhs$2 = null
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype = new ScalaJS.inheritable.scala_math_Numeric$Ops();
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.constructor = ScalaJS.c.scala_math_Integral$IntegralOps;
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$$div__O__O = (function(rhs) {
  return this.scala$math$Integral$IntegralOps$$$outer__Lscala_math_Integral().quot__O__O__O(this.lhs$2, rhs)
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$$percent__O__O = (function(rhs) {
  return this.scala$math$Integral$IntegralOps$$$outer__Lscala_math_Integral().rem__O__O__O(this.lhs$2, rhs)
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$$div$percent__O__Lscala_Tuple2 = (function(rhs) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.scala$math$Integral$IntegralOps$$$outer__Lscala_math_Integral().quot__O__O__O(this.lhs$2, rhs), this.scala$math$Integral$IntegralOps$$$outer__Lscala_math_Integral().rem__O__O__O(this.lhs$2, rhs))
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.scala$math$Integral$IntegralOps$$$outer__Lscala_math_Integral = (function() {
  return ScalaJS.as.scala_math_Integral(this.$$outer$f)
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.init___Lscala_math_Integral__O = (function($$outer, lhs) {
  this.lhs$2 = lhs;
  ScalaJS.c.scala_math_Numeric$Ops.prototype.init___Lscala_math_Numeric__O.call(this, $$outer, lhs);
  return this
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.scala$math$Integral$IntegralOps$$$outer__ = (function() {
  return this.scala$math$Integral$IntegralOps$$$outer__Lscala_math_Integral()
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$$div$percent__O__ = (function(rhs) {
  return this.$$div$percent__O__Lscala_Tuple2(rhs)
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$$percent__O__ = (function(rhs$2) {
  return this.$$percent__O__O(rhs$2)
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$$div__O__ = (function(rhs$3) {
  return this.$$div__O__O(rhs$3)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Integral$IntegralOps = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Integral$IntegralOps.prototype = ScalaJS.c.scala_math_Integral$IntegralOps.prototype;
ScalaJS.is.scala_math_Integral$IntegralOps = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Integral$IntegralOps)))
});
ScalaJS.as.scala_math_Integral$IntegralOps = (function(obj) {
  if ((ScalaJS.is.scala_math_Integral$IntegralOps(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Integral$IntegralOps")
  }
});
ScalaJS.isArrayOf.scala_math_Integral$IntegralOps = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Integral$IntegralOps)))
});
ScalaJS.asArrayOf.scala_math_Integral$IntegralOps = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Integral$IntegralOps(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Integral$IntegralOps;", depth)
  }
});
ScalaJS.data.scala_math_Integral$IntegralOps = new ScalaJS.ClassTypeData({
  scala_math_Integral$IntegralOps: 0
}, false, "scala.math.Integral$IntegralOps", ScalaJS.data.scala_math_Numeric$Ops, {
  scala_math_Integral$IntegralOps: 1,
  scala_math_Numeric$Ops: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Integral$IntegralOps.prototype.$classData = ScalaJS.data.scala_math_Integral$IntegralOps;
//@ sourceMappingURL=Integral$IntegralOps.js.map
