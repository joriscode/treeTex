/** @constructor */
ScalaJS.c.scala_concurrent_duration_Duration = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_Duration.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Duration;
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$less__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$greater__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$less$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$greater$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.compareTo__O__I = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__compareTo__Lscala_math_Ordered__O__I(this, that)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.min__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  if (this.$$less__O__Z(other)) {
    return this
  } else {
    return other
  }
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.max__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  if (this.$$greater__O__Z(other)) {
    return this
  } else {
    return other
  }
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.div__D__Lscala_concurrent_duration_Duration = (function(divisor) {
  return this.$$div__D__Lscala_concurrent_duration_Duration(divisor)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.div__Lscala_concurrent_duration_Duration__D = (function(other) {
  return this.$$div__Lscala_concurrent_duration_Duration__D(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.gt__Lscala_concurrent_duration_Duration__Z = (function(other) {
  return this.$$greater__O__Z(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.gteq__Lscala_concurrent_duration_Duration__Z = (function(other) {
  return this.$$greater$eq__O__Z(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.lt__Lscala_concurrent_duration_Duration__Z = (function(other) {
  return this.$$less__O__Z(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.lteq__Lscala_concurrent_duration_Duration__Z = (function(other) {
  return this.$$less$eq__O__Z(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  return this.$$minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.mul__D__Lscala_concurrent_duration_Duration = (function(factor) {
  return this.$$times__D__Lscala_concurrent_duration_Duration(factor)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.neg__Lscala_concurrent_duration_Duration = (function() {
  return this.unary$und$minus__Lscala_concurrent_duration_Duration()
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  return this.$$plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_math_Ordered$class__$init$__Lscala_math_Ordered__V(this);
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.compareTo__O__ = (function(that) {
  return ScalaJS.bI(this.compareTo__O__I(that))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$greater$eq__O__ = (function(that$2) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(that$2))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$less$eq__O__ = (function(that$3) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(that$3))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$greater__O__ = (function(that$4) {
  return ScalaJS.bZ(this.$$greater__O__Z(that$4))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$less__O__ = (function(that$5) {
  return ScalaJS.bZ(this.$$less__O__Z(that$5))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.plus__Lscala_concurrent_duration_Duration__ = (function(other) {
  return this.plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.neg__ = (function() {
  return this.neg__Lscala_concurrent_duration_Duration()
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.mul__D__ = (function(factor) {
  return this.mul__D__Lscala_concurrent_duration_Duration(factor)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.minus__Lscala_concurrent_duration_Duration__ = (function(other$2) {
  return this.minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other$2)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.lteq__Lscala_concurrent_duration_Duration__ = (function(other$3) {
  return ScalaJS.bZ(this.lteq__Lscala_concurrent_duration_Duration__Z(other$3))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.lt__Lscala_concurrent_duration_Duration__ = (function(other$4) {
  return ScalaJS.bZ(this.lt__Lscala_concurrent_duration_Duration__Z(other$4))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.gteq__Lscala_concurrent_duration_Duration__ = (function(other$5) {
  return ScalaJS.bZ(this.gteq__Lscala_concurrent_duration_Duration__Z(other$5))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.gt__Lscala_concurrent_duration_Duration__ = (function(other$6) {
  return ScalaJS.bZ(this.gt__Lscala_concurrent_duration_Duration__Z(other$6))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.div__Lscala_concurrent_duration_Duration__ = (function(other$7) {
  return ScalaJS.bD(this.div__Lscala_concurrent_duration_Duration__D(other$7))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.div__D__ = (function(divisor) {
  return this.div__D__Lscala_concurrent_duration_Duration(divisor)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.max__Lscala_concurrent_duration_Duration__ = (function(other$8) {
  return this.max__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other$8)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.min__Lscala_concurrent_duration_Duration__ = (function(other$9) {
  return this.min__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other$9)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.isFinite__ = (function() {
  return ScalaJS.bZ(this.isFinite__Z())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.unary$und$minus__ = (function() {
  return this.unary$und$minus__Lscala_concurrent_duration_Duration()
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$div__Lscala_concurrent_duration_Duration__ = (function(divisor$2) {
  return ScalaJS.bD(this.$$div__Lscala_concurrent_duration_Duration__D(divisor$2))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$div__D__ = (function(divisor$3) {
  return this.$$div__D__Lscala_concurrent_duration_Duration(divisor$3)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$times__D__ = (function(factor$2) {
  return this.$$times__D__Lscala_concurrent_duration_Duration(factor$2)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$minus__Lscala_concurrent_duration_Duration__ = (function(other$10) {
  return this.$$minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other$10)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$$plus__Lscala_concurrent_duration_Duration__ = (function(other$11) {
  return this.$$plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration(other$11)
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toUnit__Ljava_util_concurrent_TimeUnit__ = (function(unit) {
  return ScalaJS.bD(this.toUnit__Ljava_util_concurrent_TimeUnit__D(unit))
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toDays__ = (function() {
  return ScalaJS.bJ(this.toDays__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toHours__ = (function() {
  return ScalaJS.bJ(this.toHours__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toMinutes__ = (function() {
  return ScalaJS.bJ(this.toMinutes__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toSeconds__ = (function() {
  return ScalaJS.bJ(this.toSeconds__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toMillis__ = (function() {
  return ScalaJS.bJ(this.toMillis__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toMicros__ = (function() {
  return ScalaJS.bJ(this.toMicros__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.toNanos__ = (function() {
  return ScalaJS.bJ(this.toNanos__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.unit__ = (function() {
  return this.unit__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.length__ = (function() {
  return ScalaJS.bJ(this.length__J())
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.compare__O__ = (function(that$6) {
  return ScalaJS.bI(this.compare__O__I(that$6))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Duration = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Duration.prototype = ScalaJS.c.scala_concurrent_duration_Duration.prototype;
ScalaJS.is.scala_concurrent_duration_Duration = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Duration)))
});
ScalaJS.as.scala_concurrent_duration_Duration = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Duration(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Duration")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Duration = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Duration)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Duration = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Duration(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Duration;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Duration = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Duration: 0
}, false, "scala.concurrent.duration.Duration", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_Duration: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Duration.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Duration;
//@ sourceMappingURL=Duration.js.map
