ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toChar__Lscala_math_ScalaNumericAnyConversions__C = (function($$this) {
  return ($$this.intValue__I() & 65535)
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toByte__Lscala_math_ScalaNumericAnyConversions__B = (function($$this) {
  return $$this.byteValue__B()
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toShort__Lscala_math_ScalaNumericAnyConversions__S = (function($$this) {
  return $$this.shortValue__S()
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toInt__Lscala_math_ScalaNumericAnyConversions__I = (function($$this) {
  return $$this.intValue__I()
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toLong__Lscala_math_ScalaNumericAnyConversions__J = (function($$this) {
  return $$this.longValue__J()
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toFloat__Lscala_math_ScalaNumericAnyConversions__F = (function($$this) {
  return $$this.floatValue__F()
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toDouble__Lscala_math_ScalaNumericAnyConversions__D = (function($$this) {
  return $$this.doubleValue__D()
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__isValidByte__Lscala_math_ScalaNumericAnyConversions__Z = (function($$this) {
  return ($$this.isWhole__Z() && ($$this.toInt__I() === $$this.toByte__B()))
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__isValidShort__Lscala_math_ScalaNumericAnyConversions__Z = (function($$this) {
  return ($$this.isWhole__Z() && ($$this.toInt__I() === $$this.toShort__S()))
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__isValidInt__Lscala_math_ScalaNumericAnyConversions__Z = (function($$this) {
  return ($$this.isWhole__Z() && $$this.toLong__J().equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this.toInt__I())))
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__isValidChar__Lscala_math_ScalaNumericAnyConversions__Z = (function($$this) {
  return ($$this.isWhole__Z() && (($$this.toInt__I() >= 0) && ($$this.toInt__I() <= 65535)))
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__unifiedPrimitiveHashcode__Lscala_math_ScalaNumericAnyConversions__I = (function($$this) {
  var lv = $$this.toLong__J();
  if ((lv.$$greater$eq__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(-2147483648)) && lv.$$less$eq__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(2147483647)))) {
    return lv.toInt__I()
  } else {
    return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__J__I(lv)
  }
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__unifiedPrimitiveEquals__Lscala_math_ScalaNumericAnyConversions__O__Z = (function($$this, x) {
  var x1 = x;
  if (ScalaJS.is.java_lang_Character(x1)) {
    var x2 = ScalaJS.uC(x1);
    return ($$this.isValidChar__Z() && ($$this.toInt__I() === x2))
  };
  if (ScalaJS.is.java_lang_Byte(x1)) {
    var x3 = ScalaJS.uB(x1);
    return ($$this.isValidByte__Z() && ($$this.toByte__B() === x3))
  };
  if (ScalaJS.is.java_lang_Short(x1)) {
    var x4 = ScalaJS.uS(x1);
    return ($$this.isValidShort__Z() && ($$this.toShort__S() === x4))
  };
  if (ScalaJS.is.java_lang_Integer(x1)) {
    var x5 = ScalaJS.uI(x1);
    return ($$this.isValidInt__Z() && ($$this.toInt__I() === x5))
  };
  if (ScalaJS.is.java_lang_Long(x1)) {
    var x6 = ScalaJS.uJ(x1);
    return $$this.toLong__J().equals__O__Z(x6)
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    var x7 = ScalaJS.uF(x1);
    return ($$this.toFloat__F() === x7)
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    var x8 = ScalaJS.uD(x1);
    return ($$this.toDouble__D() === x8)
  };
  return false
});
ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__$init$__Lscala_math_ScalaNumericAnyConversions__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ScalaNumericAnyConversions$class.js.map
