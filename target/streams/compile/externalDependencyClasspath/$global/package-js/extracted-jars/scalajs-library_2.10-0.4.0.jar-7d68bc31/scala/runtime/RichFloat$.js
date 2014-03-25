/** @constructor */
ScalaJS.c.scala_runtime_RichFloat$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichFloat$.prototype.constructor = ScalaJS.c.scala_runtime_RichFloat$;
ScalaJS.c.scala_runtime_RichFloat$.prototype.num$extension__F__Lscala_math_Numeric$FloatIsFractional$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$FloatIsFractional()
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.ord$extension__F__Lscala_math_Ordering$Float$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Float()
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.integralNum$extension__F__Lscala_math_Numeric$FloatAsIfIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$FloatAsIfIntegral()
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.round$extension__F__I = (function($$this) {
  return ScalaJS.modules.scala_math_package().round__F__I($$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.ceil$extension__F__F = (function($$this) {
  return ScalaJS.modules.scala_math_package().ceil__D__D($$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.floor$extension__F__F = (function($$this) {
  return ScalaJS.modules.scala_math_package().floor__D__D($$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.toRadians$extension__F__F = (function($$this) {
  return ScalaJS.modules.scala_math_package().toRadians__D__D($$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.toDegrees$extension__F__F = (function($$this) {
  return ScalaJS.modules.scala_math_package().toDegrees__D__D($$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isInfinity$extension__F__Z = (function($$this) {
  return ScalaJS.modules.java_lang_Float().isInfinite__F__Z($$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isPosInfinity$extension__F__Z = (function($$this) {
  return (this.isInfinity$extension__F__Z($$this) && ($$this > 0.0))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isNegInfinity$extension__F__Z = (function($$this) {
  return (this.isInfinity$extension__F__Z($$this) && ($$this < 0.0))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidByte$extension__F__Z = (function($$this) {
  return (($$this | 0) === $$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidShort$extension__F__Z = (function($$this) {
  return (($$this | 0) === $$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidChar$extension__F__Z = (function($$this) {
  return (($$this & 65535) === $$this)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidInt$extension__F__Z = (function($$this) {
  var i = ($$this | 0);
  return ((i === $$this) && (i !== 2147483647))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isWhole$extension__F__Z = (function($$this) {
  var l = ScalaJS.modules.scala_scalajs_runtime_Long().fromFloat__F__Lscala_scalajs_runtime_Long($$this);
  return (((l.toFloat__F() === $$this) || (l.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)) && ($$this < Infinity))) || (l.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288)) && ($$this > -Infinity)))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.hashCode$extension__F__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bF($$this))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.equals$extension__F__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichFloat(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichFloat$1 = ScalaJS.as.scala_runtime_RichFloat(x$1).self__F();
    return ($$this === RichFloat$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.equals$extension__F__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__F__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.hashCode$extension__F__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__F__I($$this$2))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isWhole$extension__F__ = (function($$this$3) {
  return ScalaJS.bZ(this.isWhole$extension__F__Z($$this$3))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidInt$extension__F__ = (function($$this$4) {
  return ScalaJS.bZ(this.isValidInt$extension__F__Z($$this$4))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidChar$extension__F__ = (function($$this$5) {
  return ScalaJS.bZ(this.isValidChar$extension__F__Z($$this$5))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidShort$extension__F__ = (function($$this$6) {
  return ScalaJS.bZ(this.isValidShort$extension__F__Z($$this$6))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isValidByte$extension__F__ = (function($$this$7) {
  return ScalaJS.bZ(this.isValidByte$extension__F__Z($$this$7))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isNegInfinity$extension__F__ = (function($$this$8) {
  return ScalaJS.bZ(this.isNegInfinity$extension__F__Z($$this$8))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isPosInfinity$extension__F__ = (function($$this$9) {
  return ScalaJS.bZ(this.isPosInfinity$extension__F__Z($$this$9))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.isInfinity$extension__F__ = (function($$this$10) {
  return ScalaJS.bZ(this.isInfinity$extension__F__Z($$this$10))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.toDegrees$extension__F__ = (function($$this$11) {
  return ScalaJS.bF(this.toDegrees$extension__F__F($$this$11))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.toRadians$extension__F__ = (function($$this$12) {
  return ScalaJS.bF(this.toRadians$extension__F__F($$this$12))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.floor$extension__F__ = (function($$this$13) {
  return ScalaJS.bF(this.floor$extension__F__F($$this$13))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.ceil$extension__F__ = (function($$this$14) {
  return ScalaJS.bF(this.ceil$extension__F__F($$this$14))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.round$extension__F__ = (function($$this$15) {
  return ScalaJS.bI(this.round$extension__F__I($$this$15))
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.integralNum$extension__F__ = (function($$this$16) {
  return this.integralNum$extension__F__Lscala_math_Numeric$FloatAsIfIntegral$($$this$16)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.ord$extension__F__ = (function($$this$17) {
  return this.ord$extension__F__Lscala_math_Ordering$Float$($$this$17)
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.num$extension__F__ = (function($$this$18) {
  return this.num$extension__F__Lscala_math_Numeric$FloatIsFractional$($$this$18)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichFloat$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichFloat$.prototype = ScalaJS.c.scala_runtime_RichFloat$.prototype;
ScalaJS.is.scala_runtime_RichFloat$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichFloat$)))
});
ScalaJS.as.scala_runtime_RichFloat$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichFloat$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichFloat")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichFloat$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichFloat$)))
});
ScalaJS.asArrayOf.scala_runtime_RichFloat$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichFloat$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichFloat;", depth)
  }
});
ScalaJS.data.scala_runtime_RichFloat$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichFloat$: 0
}, false, "scala.runtime.RichFloat$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichFloat$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichFloat$.prototype.$classData = ScalaJS.data.scala_runtime_RichFloat$;
ScalaJS.moduleInstances.scala_runtime_RichFloat = undefined;
ScalaJS.modules.scala_runtime_RichFloat = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichFloat)) {
    ScalaJS.moduleInstances.scala_runtime_RichFloat = new ScalaJS.c.scala_runtime_RichFloat$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichFloat
});
//@ sourceMappingURL=RichFloat$.js.map
