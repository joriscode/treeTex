/** @constructor */
ScalaJS.c.scala_runtime_RichLong$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_runtime_RichLong$.prototype.constructor = ScalaJS.c.scala_runtime_RichLong$;
ScalaJS.c.scala_runtime_RichLong$.prototype.num$extension__J__Lscala_math_Numeric$LongIsIntegral$ = (function($$this) {
  return ScalaJS.modules.scala_math_Numeric$LongIsIntegral()
});
ScalaJS.c.scala_runtime_RichLong$.prototype.ord$extension__J__Lscala_math_Ordering$Long$ = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Long()
});
ScalaJS.c.scala_runtime_RichLong$.prototype.toBinaryString$extension__J__T = (function($$this) {
  return ScalaJS.modules.java_lang_Long().toBinaryString__J__T($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.toHexString$extension__J__T = (function($$this) {
  return ScalaJS.modules.java_lang_Long().toHexString__J__T($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.toOctalString$extension__J__T = (function($$this) {
  return ScalaJS.modules.java_lang_Long().toOctalString__J__T($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidByte$extension__J__Z = (function($$this) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromByte__B__Lscala_scalajs_runtime_Long($$this.toByte__B()).equals__O__Z($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidShort$extension__J__Z = (function($$this) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromShort__S__Lscala_scalajs_runtime_Long($$this.toShort__S()).equals__O__Z($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidChar$extension__J__Z = (function($$this) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long($$this.toChar__C()).equals__O__Z($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidInt$extension__J__Z = (function($$this) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.toInt__I()).equals__O__Z($$this)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.hashCode$extension__J__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bJ($$this))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.equals$extension__J__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_runtime_RichLong(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var RichLong$1 = ScalaJS.as.scala_runtime_RichLong(x$1).self__J();
    return $$this.equals__O__Z(RichLong$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_runtime_RichLong$.prototype.equals$extension__J__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__J__O__Z($$this, x$1))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.hashCode$extension__J__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__J__I($$this$2))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidInt$extension__J__ = (function($$this$3) {
  return ScalaJS.bZ(this.isValidInt$extension__J__Z($$this$3))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidChar$extension__J__ = (function($$this$4) {
  return ScalaJS.bZ(this.isValidChar$extension__J__Z($$this$4))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidShort$extension__J__ = (function($$this$5) {
  return ScalaJS.bZ(this.isValidShort$extension__J__Z($$this$5))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.isValidByte$extension__J__ = (function($$this$6) {
  return ScalaJS.bZ(this.isValidByte$extension__J__Z($$this$6))
});
ScalaJS.c.scala_runtime_RichLong$.prototype.toOctalString$extension__J__ = (function($$this$7) {
  return this.toOctalString$extension__J__T($$this$7)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.toHexString$extension__J__ = (function($$this$8) {
  return this.toHexString$extension__J__T($$this$8)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.toBinaryString$extension__J__ = (function($$this$9) {
  return this.toBinaryString$extension__J__T($$this$9)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.ord$extension__J__ = (function($$this$10) {
  return this.ord$extension__J__Lscala_math_Ordering$Long$($$this$10)
});
ScalaJS.c.scala_runtime_RichLong$.prototype.num$extension__J__ = (function($$this$11) {
  return this.num$extension__J__Lscala_math_Numeric$LongIsIntegral$($$this$11)
});
/** @constructor */
ScalaJS.inheritable.scala_runtime_RichLong$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_runtime_RichLong$.prototype = ScalaJS.c.scala_runtime_RichLong$.prototype;
ScalaJS.is.scala_runtime_RichLong$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_runtime_RichLong$)))
});
ScalaJS.as.scala_runtime_RichLong$ = (function(obj) {
  if ((ScalaJS.is.scala_runtime_RichLong$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.runtime.RichLong")
  }
});
ScalaJS.isArrayOf.scala_runtime_RichLong$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_runtime_RichLong$)))
});
ScalaJS.asArrayOf.scala_runtime_RichLong$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_runtime_RichLong$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.runtime.RichLong;", depth)
  }
});
ScalaJS.data.scala_runtime_RichLong$ = new ScalaJS.ClassTypeData({
  scala_runtime_RichLong$: 0
}, false, "scala.runtime.RichLong$", ScalaJS.data.java_lang_Object, {
  scala_runtime_RichLong$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_runtime_RichLong$.prototype.$classData = ScalaJS.data.scala_runtime_RichLong$;
ScalaJS.moduleInstances.scala_runtime_RichLong = undefined;
ScalaJS.modules.scala_runtime_RichLong = (function() {
  if ((!ScalaJS.moduleInstances.scala_runtime_RichLong)) {
    ScalaJS.moduleInstances.scala_runtime_RichLong = new ScalaJS.c.scala_runtime_RichLong$().init___()
  };
  return ScalaJS.moduleInstances.scala_runtime_RichLong
});
//@ sourceMappingURL=RichLong$.js.map
