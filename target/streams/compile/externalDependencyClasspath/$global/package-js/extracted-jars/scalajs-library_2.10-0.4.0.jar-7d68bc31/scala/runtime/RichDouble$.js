/** @constructor */
ScalaJS.c.scala_runtime_RichDouble$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichDouble$.prototype.constructor = ScalaJS.c.scala_runtime_RichDouble$;
ScalaJS.c.scala_runtime_RichDouble$.prototype.num$extension__D__Lscala_math_Numeric$DoubleIsFractional$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$DoubleIsFractional()
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.ord$extension__D__Lscala_math_Ordering$Double$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Double()
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.integralNum$extension__D__Lscala_math_Numeric$DoubleAsIfIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$DoubleAsIfIntegral()
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.round$extension__D__J = (function($$this) {
  return ScalaJS.modules.scala_math_package().round__D__J($$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.ceil$extension__D__D = (function($$this) {
  return ScalaJS.modules.scala_math_package().ceil__D__D($$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.floor$extension__D__D = (function($$this) {
  return ScalaJS.modules.scala_math_package().floor__D__D($$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.toRadians$extension__D__D = (function($$this) {
  return ScalaJS.modules.scala_math_package().toRadians__D__D($$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.toDegrees$extension__D__D = (function($$this) {
  return ScalaJS.modules.scala_math_package().toDegrees__D__D($$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isInfinity$extension__D__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Double().isInfinite__D__Z($$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isPosInfinity$extension__D__Z = (function($$this) {
  return (this.isInfinity$extension__D__Z($$this) && ($$this > 0.0))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isNegInfinity$extension__D__Z = (function($$this) {
  return (this.isInfinity$extension__D__Z($$this) && ($$this < 0.0))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidByte$extension__D__Z = (function($$this) {
  return (($$this | 0) === $$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidShort$extension__D__Z = (function($$this) {
  return (($$this | 0) === $$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidChar$extension__D__Z = (function($$this) {
  return (($$this & 65535) === $$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidInt$extension__D__Z = (function($$this) {
  return (($$this | 0) === $$this)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isWhole$extension__D__Z = (function($$this) {
  var l = ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long($$this);
  return (((l.toDouble__D() === $$this) || (l.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)) && ($$this < Infinity))) || (l.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288)) && ($$this > -Infinity)))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.hashCode$extension__D__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bD($$this))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.equals$extension__D__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichDouble(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichDouble$1 = ScalaJS.as.scala_runtime_RichDouble(x$1).self__D();
    return ($$this === RichDouble$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.equals$extension__D__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__D__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.hashCode$extension__D__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__D__I($$this$2))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isWhole$extension__D__ = (function($$this$3) {
  return ScalaJS.bZ(this.isWhole$extension__D__Z($$this$3))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidInt$extension__D__ = (function($$this$4) {
  return ScalaJS.bZ(this.isValidInt$extension__D__Z($$this$4))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidChar$extension__D__ = (function($$this$5) {
  return ScalaJS.bZ(this.isValidChar$extension__D__Z($$this$5))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidShort$extension__D__ = (function($$this$6) {
  return ScalaJS.bZ(this.isValidShort$extension__D__Z($$this$6))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isValidByte$extension__D__ = (function($$this$7) {
  return ScalaJS.bZ(this.isValidByte$extension__D__Z($$this$7))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isNegInfinity$extension__D__ = (function($$this$8) {
  return ScalaJS.bZ(this.isNegInfinity$extension__D__Z($$this$8))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isPosInfinity$extension__D__ = (function($$this$9) {
  return ScalaJS.bZ(this.isPosInfinity$extension__D__Z($$this$9))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.isInfinity$extension__D__ = (function($$this$10) {
  return ScalaJS.bZ(this.isInfinity$extension__D__Z($$this$10))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.toDegrees$extension__D__ = (function($$this$11) {
  return ScalaJS.bD(this.toDegrees$extension__D__D($$this$11))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.toRadians$extension__D__ = (function($$this$12) {
  return ScalaJS.bD(this.toRadians$extension__D__D($$this$12))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.floor$extension__D__ = (function($$this$13) {
  return ScalaJS.bD(this.floor$extension__D__D($$this$13))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.ceil$extension__D__ = (function($$this$14) {
  return ScalaJS.bD(this.ceil$extension__D__D($$this$14))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.round$extension__D__ = (function($$this$15) {
  return ScalaJS.bJ(this.round$extension__D__J($$this$15))
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.integralNum$extension__D__ = (function($$this$16) {
  return this.integralNum$extension__D__Lscala_math_Numeric$DoubleAsIfIntegral$($$this$16)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.ord$extension__D__ = (function($$this$17) {
  return this.ord$extension__D__Lscala_math_Ordering$Double$($$this$17)
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.num$extension__D__ = (function($$this$18) {
  return this.num$extension__D__Lscala_math_Numeric$DoubleIsFractional$($$this$18)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichDouble$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichDouble$.prototype = ScalaJS.c.scala_runtime_RichDouble$.prototype;
ScalaJS.is.scala_runtime_RichDouble$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichDouble$)))
});
ScalaJS.as.scala_runtime_RichDouble$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichDouble$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichDouble")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichDouble$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichDouble$)))
});
ScalaJS.asArrayOf.scala_runtime_RichDouble$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichDouble$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichDouble;", depth)
  }
});
ScalaJS.data.scala_runtime_RichDouble$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichDouble$: 0
}, false, "scala.runtime.RichDouble$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichDouble$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichDouble$.prototype.$classData = ScalaJS.data.scala_runtime_RichDouble$;
ScalaJS.moduleInstances.scala_runtime_RichDouble = undefined;
ScalaJS.modules.scala_runtime_RichDouble = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichDouble)) {
    ScalaJS.moduleInstances.scala_runtime_RichDouble = new ScalaJS.c.scala_runtime_RichDouble$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichDouble
});
//@ sourceMappingURL=RichDouble$.js.map
