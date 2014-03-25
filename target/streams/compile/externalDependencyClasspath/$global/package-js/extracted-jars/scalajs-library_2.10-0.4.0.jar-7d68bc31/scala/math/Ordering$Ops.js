/** @constructor */
ScalaJS.c.scala_math_Ordering$Ops = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.lhs$1 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_math_Ordering$Ops.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_math_Ordering$Ops.prototype.constructor = ScalaJS.c.scala_math_Ordering$Ops;
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$less__O__Z = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().lt__O__O__Z(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$less$eq__O__Z = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().lteq__O__O__Z(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$greater__O__Z = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().gt__O__O__Z(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$greater$eq__O__Z = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().gteq__O__O__Z(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.equiv__O__Z = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().equiv__O__O__Z(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.max__O__O = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().max__O__O__O(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.min__O__O = (function(rhs) {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering().min__O__O__O(this.lhs$1, rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.init___Lscala_math_Ordering__O = (function($$outer, lhs) {
  this.lhs$1 = lhs;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.scala$math$Ordering$Ops$$$outer__ = (function() {
  return this.scala$math$Ordering$Ops$$$outer__Lscala_math_Ordering()
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.min__O__ = (function(rhs) {
  return this.min__O__O(rhs)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.max__O__ = (function(rhs$2) {
  return this.max__O__O(rhs$2)
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.equiv__O__ = (function(rhs$3) {
  return ScalaJS.bZ(this.equiv__O__Z(rhs$3))
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$greater$eq__O__ = (function(rhs$4) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(rhs$4))
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$greater__O__ = (function(rhs$5) {
  return ScalaJS.bZ(this.$$greater__O__Z(rhs$5))
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$less$eq__O__ = (function(rhs$6) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(rhs$6))
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$$less__O__ = (function(rhs$7) {
  return ScalaJS.bZ(this.$$less__O__Z(rhs$7))
});
/** @constructor */
ScalaJS.inheritable.scala_math_Ordering$Ops = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_Ordering$Ops.prototype = ScalaJS.c.scala_math_Ordering$Ops.prototype;
ScalaJS.is.scala_math_Ordering$Ops = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering$Ops)))
});
ScalaJS.as.scala_math_Ordering$Ops = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering$Ops(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering$Ops")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering$Ops = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering$Ops)))
});
ScalaJS.asArrayOf.scala_math_Ordering$Ops = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering$Ops(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering$Ops;", depth)
  }
});
ScalaJS.data.scala_math_Ordering$Ops = new ScalaJS.ClassTypeData({
  scala_math_Ordering$Ops: 0
}, false, "scala.math.Ordering$Ops", ScalaJS.data.java_lang_Object, {
  scala_math_Ordering$Ops: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_Ordering$Ops.prototype.$classData = ScalaJS.data.scala_math_Ordering$Ops;
//@ sourceMappingURL=Ordering$Ops.js.map
