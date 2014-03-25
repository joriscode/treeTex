/** @constructor */
ScalaJS.c.scala_math_Numeric$Ops = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.lhs$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_math_Numeric$Ops.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Numeric$Ops.prototype.constructor = ScalaJS.c.scala_math_Numeric$Ops;
ScalaJS.c.scala_math_Numeric$Ops.prototype.$$plus__O__O = (function(rhs) {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().plus__O__O__O(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.$$minus__O__O = (function(rhs) {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().minus__O__O__O(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.$$times__O__O = (function(rhs) {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().times__O__O__O(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.unary$und$minus__O = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().negate__O__O(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.abs__O = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().abs__O__O(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.signum__I = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().signum__O__I(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toInt__I = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().toInt__O__I(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toLong__J = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().toLong__O__J(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toFloat__F = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().toFloat__O__F(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toDouble__D = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric().toDouble__O__D(this.lhs$1)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.init___Lscala_math_Numeric__O = (function($$outer, lhs) {
  this.lhs$1 = lhs;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.scala$math$Numeric$Ops$$$outer__ = (function() {
  return this.scala$math$Numeric$Ops$$$outer__Lscala_math_Numeric()
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.signum__ = (function() {
  return ScalaJS.bI(this.signum__I())
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.abs__ = (function() {
  return this.abs__O()
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.unary$und$minus__ = (function() {
  return this.unary$und$minus__O()
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.$$times__O__ = (function(rhs) {
  return this.$$times__O__O(rhs)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.$$minus__O__ = (function(rhs$2) {
  return this.$$minus__O__O(rhs$2)
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.$$plus__O__ = (function(rhs$3) {
  return this.$$plus__O__O(rhs$3)
});
/** @constructor */
ScalaJS.inheritable.scala_math_Numeric$Ops = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Numeric$Ops.prototype = ScalaJS.c.scala_math_Numeric$Ops.prototype;
ScalaJS.is.scala_math_Numeric$Ops = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$Ops)))
});
ScalaJS.as.scala_math_Numeric$Ops = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$Ops(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric$Ops")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$Ops = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$Ops)))
});
ScalaJS.asArrayOf.scala_math_Numeric$Ops = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$Ops(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric$Ops;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$Ops = new ScalaJS.ClassTypeData({
  scala_math_Numeric$Ops: 0
}, false, "scala.math.Numeric$Ops", ScalaJS.data.java_lang_Object, {
  scala_math_Numeric$Ops: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Numeric$Ops.prototype.$classData = ScalaJS.data.scala_math_Numeric$Ops;
//@ sourceMappingURL=Numeric$Ops.js.map
