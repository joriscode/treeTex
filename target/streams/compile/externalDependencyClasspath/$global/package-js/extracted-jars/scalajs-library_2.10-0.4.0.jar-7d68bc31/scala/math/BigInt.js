/** @constructor */
ScalaJS.c.scala_math_BigInt = (function() {
  ScalaJS.c.scala_math_ScalaNumber.call(this);
  this.bigInteger$3 = null
});
ScalaJS.c.scala_math_BigInt.prototype = new ScalaJS.inheritable.scala_math_ScalaNumber();
ScalaJS.c.scala_math_BigInt.prototype.constructor = ScalaJS.c.scala_math_BigInt;
ScalaJS.c.scala_math_BigInt.prototype.toChar__C = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toChar__Lscala_math_ScalaNumericAnyConversions__C(this)
});
ScalaJS.c.scala_math_BigInt.prototype.toByte__B = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toByte__Lscala_math_ScalaNumericAnyConversions__B(this)
});
ScalaJS.c.scala_math_BigInt.prototype.toShort__S = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toShort__Lscala_math_ScalaNumericAnyConversions__S(this)
});
ScalaJS.c.scala_math_BigInt.prototype.toInt__I = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toInt__Lscala_math_ScalaNumericAnyConversions__I(this)
});
ScalaJS.c.scala_math_BigInt.prototype.toLong__J = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toLong__Lscala_math_ScalaNumericAnyConversions__J(this)
});
ScalaJS.c.scala_math_BigInt.prototype.toFloat__F = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toFloat__Lscala_math_ScalaNumericAnyConversions__F(this)
});
ScalaJS.c.scala_math_BigInt.prototype.toDouble__D = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toDouble__Lscala_math_ScalaNumericAnyConversions__D(this)
});
ScalaJS.c.scala_math_BigInt.prototype.unifiedPrimitiveHashcode__I = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__unifiedPrimitiveHashcode__Lscala_math_ScalaNumericAnyConversions__I(this)
});
ScalaJS.c.scala_math_BigInt.prototype.unifiedPrimitiveEquals__O__Z = (function(x) {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__unifiedPrimitiveEquals__Lscala_math_ScalaNumericAnyConversions__O__Z(this, x)
});
ScalaJS.c.scala_math_BigInt.prototype.bigInteger__Ljava_math_BigInteger = (function() {
  return this.bigInteger$3
});
ScalaJS.c.scala_math_BigInt.prototype.hashCode__I = (function() {
  if (this.isValidLong__Z()) {
    return this.unifiedPrimitiveHashcode__I()
  } else {
    return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__Ljava_lang_Number__I(this.bigInteger__Ljava_math_BigInteger())
  }
});
ScalaJS.c.scala_math_BigInt.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if (ScalaJS.is.scala_math_BigInt(x1)) {
    var x2 = ScalaJS.as.scala_math_BigInt(x1);
    return this.equals__Lscala_math_BigInt__Z(x2)
  };
  if (ScalaJS.is.scala_math_BigDecimal(x1)) {
    var x3 = ScalaJS.as.scala_math_BigDecimal(x1);
    return x3.toBigIntExact__Lscala_Option().exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
      return (function(x$1) {
        return ScalaJS.bZ(arg$outer.equals__Lscala_math_BigInt__Z(x$1))
      })
    })(this)))
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    var x4 = ScalaJS.uD(x1);
    return (this.isValidDouble__Z() && (this.toDouble__D() === x4))
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    var x5 = ScalaJS.uF(x1);
    return (this.isValidFloat__Z() && (this.toFloat__F() === x5))
  };
  return (this.isValidLong__Z() && this.unifiedPrimitiveEquals__O__Z(x1))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidByte__Z = (function() {
  return (this.$$greater$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(-128)) && this.$$less$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(127)))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidShort__Z = (function() {
  return (this.$$greater$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(-32768)) && this.$$less$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(32767)))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidChar__Z = (function() {
  return (this.$$greater$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(0)) && this.$$less$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(65535)))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidInt__Z = (function() {
  return (this.$$greater$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(-2147483648)) && this.$$less$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().int2bigInt__I__Lscala_math_BigInt(2147483647)))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidLong__Z = (function() {
  return (this.$$greater$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().long2bigInt__J__Lscala_math_BigInt(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288))) && this.$$less$eq__Lscala_math_BigInt__Z(ScalaJS.modules.scala_math_BigInt().long2bigInt__J__Lscala_math_BigInt(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287))))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidFloat__Z = (function() {
  var bitLen = this.bitLength__I();
  if ((bitLen <= 24)) {
    var jsx$1 = true
  } else {
    var lowest = this.lowestSetBit__I();
    var jsx$1 = (((bitLen <= 128) && (lowest >= (bitLen - 24))) && (lowest < 128))
  };
  if (jsx$1) {
    return (!this.bitLengthOverflow__p3__Z())
  } else {
    return false
  }
});
ScalaJS.c.scala_math_BigInt.prototype.isValidDouble__Z = (function() {
  var bitLen = this.bitLength__I();
  if ((bitLen <= 53)) {
    var jsx$2 = true
  } else {
    var lowest = this.lowestSetBit__I();
    var jsx$2 = (((bitLen <= 1024) && (lowest >= (bitLen - 53))) && (lowest < 1024))
  };
  if (jsx$2) {
    return (!this.bitLengthOverflow__p3__Z())
  } else {
    return false
  }
});
ScalaJS.c.scala_math_BigInt.prototype.bitLengthOverflow__p3__Z = (function() {
  var shifted = this.bigInteger__Ljava_math_BigInteger().shiftRight__I__Ljava_math_BigInteger(2147483647);
  return ((shifted.signum__I() !== 0) && (!shifted.equals__O__Z(ScalaJS.modules.scala_math_BigInt().scala$math$BigInt$$minusOne__Ljava_math_BigInteger())))
});
ScalaJS.c.scala_math_BigInt.prototype.isWhole__Z = (function() {
  return true
});
ScalaJS.c.scala_math_BigInt.prototype.underlying__Ljava_math_BigInteger = (function() {
  return this.bigInteger__Ljava_math_BigInteger()
});
ScalaJS.c.scala_math_BigInt.prototype.equals__Lscala_math_BigInt__Z = (function(that) {
  return (this.compare__Lscala_math_BigInt__I(that) === 0)
});
ScalaJS.c.scala_math_BigInt.prototype.compare__Lscala_math_BigInt__I = (function(that) {
  return this.bigInteger__Ljava_math_BigInteger().compareTo__Ljava_math_BigInteger__I(that.bigInteger__Ljava_math_BigInteger())
});
ScalaJS.c.scala_math_BigInt.prototype.$$less$eq__Lscala_math_BigInt__Z = (function(that) {
  return (this.compare__Lscala_math_BigInt__I(that) <= 0)
});
ScalaJS.c.scala_math_BigInt.prototype.$$greater$eq__Lscala_math_BigInt__Z = (function(that) {
  return (this.compare__Lscala_math_BigInt__I(that) >= 0)
});
ScalaJS.c.scala_math_BigInt.prototype.$$less__Lscala_math_BigInt__Z = (function(that) {
  return (this.compare__Lscala_math_BigInt__I(that) < 0)
});
ScalaJS.c.scala_math_BigInt.prototype.$$greater__Lscala_math_BigInt__Z = (function(that) {
  return (this.compare__Lscala_math_BigInt__I(that) > 0)
});
ScalaJS.c.scala_math_BigInt.prototype.$$plus__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().add__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$minus__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().subtract__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$times__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().multiply__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$div__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().divide__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$percent__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().remainder__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$div$percent__Lscala_math_BigInt__Lscala_Tuple2 = (function(that) {
  var dr = this.bigInteger__Ljava_math_BigInteger().divideAndRemainder__Ljava_math_BigInteger__ALjava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger());
  return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(dr.underlying[0]), new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(dr.underlying[1]))
});
ScalaJS.c.scala_math_BigInt.prototype.$$less$less__I__Lscala_math_BigInt = (function(n) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().shiftLeft__I__Ljava_math_BigInteger(n))
});
ScalaJS.c.scala_math_BigInt.prototype.$$greater$greater__I__Lscala_math_BigInt = (function(n) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().shiftRight__I__Ljava_math_BigInteger(n))
});
ScalaJS.c.scala_math_BigInt.prototype.$$amp__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().and__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$bar__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().or__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$up__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().xor__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.$$amp$tilde__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().andNot__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.gcd__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().gcd__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.mod__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().mod__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.min__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().min__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.max__Lscala_math_BigInt__Lscala_math_BigInt = (function(that) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().max__Ljava_math_BigInteger__Ljava_math_BigInteger(that.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.pow__I__Lscala_math_BigInt = (function(exp) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().pow__I__Ljava_math_BigInteger(exp))
});
ScalaJS.c.scala_math_BigInt.prototype.modPow__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt = (function(exp, m) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().modPow__Ljava_math_BigInteger__Ljava_math_BigInteger__Ljava_math_BigInteger(exp.bigInteger__Ljava_math_BigInteger(), m.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.modInverse__Lscala_math_BigInt__Lscala_math_BigInt = (function(m) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().modInverse__Ljava_math_BigInteger__Ljava_math_BigInteger(m.bigInteger__Ljava_math_BigInteger()))
});
ScalaJS.c.scala_math_BigInt.prototype.unary$und$minus__Lscala_math_BigInt = (function() {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().negate__Ljava_math_BigInteger())
});
ScalaJS.c.scala_math_BigInt.prototype.abs__Lscala_math_BigInt = (function() {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().abs__Ljava_math_BigInteger())
});
ScalaJS.c.scala_math_BigInt.prototype.signum__I = (function() {
  return this.bigInteger__Ljava_math_BigInteger().signum__I()
});
ScalaJS.c.scala_math_BigInt.prototype.$$tilde__Lscala_math_BigInt = (function() {
  return this.unary$und$tilde__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt.prototype.unary$und$tilde__Lscala_math_BigInt = (function() {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().not__Ljava_math_BigInteger())
});
ScalaJS.c.scala_math_BigInt.prototype.testBit__I__Z = (function(n) {
  return this.bigInteger__Ljava_math_BigInteger().testBit__I__Z(n)
});
ScalaJS.c.scala_math_BigInt.prototype.setBit__I__Lscala_math_BigInt = (function(n) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().setBit__I__Ljava_math_BigInteger(n))
});
ScalaJS.c.scala_math_BigInt.prototype.clearBit__I__Lscala_math_BigInt = (function(n) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().clearBit__I__Ljava_math_BigInteger(n))
});
ScalaJS.c.scala_math_BigInt.prototype.flipBit__I__Lscala_math_BigInt = (function(n) {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigInteger__Ljava_math_BigInteger().flipBit__I__Ljava_math_BigInteger(n))
});
ScalaJS.c.scala_math_BigInt.prototype.lowestSetBit__I = (function() {
  return this.bigInteger__Ljava_math_BigInteger().getLowestSetBit__I()
});
ScalaJS.c.scala_math_BigInt.prototype.bitLength__I = (function() {
  return this.bigInteger__Ljava_math_BigInteger().bitLength__I()
});
ScalaJS.c.scala_math_BigInt.prototype.bitCount__I = (function() {
  return this.bigInteger__Ljava_math_BigInteger().bitCount__I()
});
ScalaJS.c.scala_math_BigInt.prototype.isProbablePrime__I__Z = (function(certainty) {
  return this.bigInteger__Ljava_math_BigInteger().isProbablePrime__I__Z(certainty)
});
ScalaJS.c.scala_math_BigInt.prototype.byteValue__B = (function() {
  return this.intValue__I()
});
ScalaJS.c.scala_math_BigInt.prototype.shortValue__S = (function() {
  return this.intValue__I()
});
ScalaJS.c.scala_math_BigInt.prototype.charValue__C = (function() {
  return (this.intValue__I() & 65535)
});
ScalaJS.c.scala_math_BigInt.prototype.intValue__I = (function() {
  return this.bigInteger__Ljava_math_BigInteger().intValue__I()
});
ScalaJS.c.scala_math_BigInt.prototype.longValue__J = (function() {
  return this.bigInteger__Ljava_math_BigInteger().longValue__J()
});
ScalaJS.c.scala_math_BigInt.prototype.floatValue__F = (function() {
  return this.bigInteger__Ljava_math_BigInteger().floatValue__F()
});
ScalaJS.c.scala_math_BigInt.prototype.doubleValue__D = (function() {
  return this.bigInteger__Ljava_math_BigInteger().doubleValue__D()
});
ScalaJS.c.scala_math_BigInt.prototype.until__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Exclusive = (function(end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range$BigInt().apply__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Exclusive(this, end, step)
});
ScalaJS.c.scala_math_BigInt.prototype.until$default$2__Lscala_math_BigInt = (function() {
  return ScalaJS.modules.scala_math_BigInt().apply__I__Lscala_math_BigInt(1)
});
ScalaJS.c.scala_math_BigInt.prototype.to__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Inclusive = (function(end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range$BigInt().inclusive__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Inclusive(this, end, step)
});
ScalaJS.c.scala_math_BigInt.prototype.to$default$2__Lscala_math_BigInt = (function() {
  return ScalaJS.modules.scala_math_BigInt().apply__I__Lscala_math_BigInt(1)
});
ScalaJS.c.scala_math_BigInt.prototype.toString__T = (function() {
  return this.bigInteger__Ljava_math_BigInteger().toString__T()
});
ScalaJS.c.scala_math_BigInt.prototype.toString__I__T = (function(radix) {
  return this.bigInteger__Ljava_math_BigInteger().toString__I__T(radix)
});
ScalaJS.c.scala_math_BigInt.prototype.toByteArray__AB = (function() {
  return this.bigInteger__Ljava_math_BigInteger().toByteArray__AB()
});
ScalaJS.c.scala_math_BigInt.prototype.underlying__O = (function() {
  return this.underlying__Ljava_math_BigInteger()
});
ScalaJS.c.scala_math_BigInt.prototype.init___Ljava_math_BigInteger = (function(bigInteger) {
  this.bigInteger$3 = bigInteger;
  ScalaJS.c.scala_math_ScalaNumber.prototype.init___.call(this);
  ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__$init$__Lscala_math_ScalaNumericAnyConversions__V(this);
  return this
});
ScalaJS.c.scala_math_BigInt.prototype.unifiedPrimitiveEquals__O__ = (function(x) {
  return ScalaJS.bZ(this.unifiedPrimitiveEquals__O__Z(x))
});
ScalaJS.c.scala_math_BigInt.prototype.unifiedPrimitiveHashcode__ = (function() {
  return ScalaJS.bI(this.unifiedPrimitiveHashcode__I())
});
ScalaJS.c.scala_math_BigInt.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.scala_math_BigInt.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.scala_math_BigInt.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.scala_math_BigInt.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.scala_math_BigInt.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.scala_math_BigInt.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.scala_math_BigInt.prototype.toChar__ = (function() {
  return ScalaJS.bC(this.toChar__C())
});
ScalaJS.c.scala_math_BigInt.prototype.toByteArray__ = (function() {
  return this.toByteArray__AB()
});
ScalaJS.c.scala_math_BigInt.prototype.toString__I__ = (function(radix) {
  return this.toString__I__T(radix)
});
ScalaJS.c.scala_math_BigInt.prototype.to__Lscala_math_BigInt__Lscala_math_BigInt__ = (function(end, step) {
  return this.to__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Inclusive(end, step)
});
ScalaJS.c.scala_math_BigInt.prototype.until__Lscala_math_BigInt__Lscala_math_BigInt__ = (function(end$2, step$2) {
  return this.until__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_collection_immutable_NumericRange$Exclusive(end$2, step$2)
});
ScalaJS.c.scala_math_BigInt.prototype.charValue__ = (function() {
  return ScalaJS.bC(this.charValue__C())
});
ScalaJS.c.scala_math_BigInt.prototype.isProbablePrime__I__ = (function(certainty) {
  return ScalaJS.bZ(this.isProbablePrime__I__Z(certainty))
});
ScalaJS.c.scala_math_BigInt.prototype.bitCount__ = (function() {
  return ScalaJS.bI(this.bitCount__I())
});
ScalaJS.c.scala_math_BigInt.prototype.bitLength__ = (function() {
  return ScalaJS.bI(this.bitLength__I())
});
ScalaJS.c.scala_math_BigInt.prototype.lowestSetBit__ = (function() {
  return ScalaJS.bI(this.lowestSetBit__I())
});
ScalaJS.c.scala_math_BigInt.prototype.flipBit__I__ = (function(n) {
  return this.flipBit__I__Lscala_math_BigInt(n)
});
ScalaJS.c.scala_math_BigInt.prototype.clearBit__I__ = (function(n$2) {
  return this.clearBit__I__Lscala_math_BigInt(n$2)
});
ScalaJS.c.scala_math_BigInt.prototype.setBit__I__ = (function(n$3) {
  return this.setBit__I__Lscala_math_BigInt(n$3)
});
ScalaJS.c.scala_math_BigInt.prototype.testBit__I__ = (function(n$4) {
  return ScalaJS.bZ(this.testBit__I__Z(n$4))
});
ScalaJS.c.scala_math_BigInt.prototype.unary$und$tilde__ = (function() {
  return this.unary$und$tilde__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt.prototype.$$tilde__ = (function() {
  return this.$$tilde__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt.prototype.signum__ = (function() {
  return ScalaJS.bI(this.signum__I())
});
ScalaJS.c.scala_math_BigInt.prototype.abs__ = (function() {
  return this.abs__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt.prototype.unary$und$minus__ = (function() {
  return this.unary$und$minus__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigInt.prototype.modInverse__Lscala_math_BigInt__ = (function(m) {
  return this.modInverse__Lscala_math_BigInt__Lscala_math_BigInt(m)
});
ScalaJS.c.scala_math_BigInt.prototype.modPow__Lscala_math_BigInt__Lscala_math_BigInt__ = (function(exp, m$2) {
  return this.modPow__Lscala_math_BigInt__Lscala_math_BigInt__Lscala_math_BigInt(exp, m$2)
});
ScalaJS.c.scala_math_BigInt.prototype.pow__I__ = (function(exp$2) {
  return this.pow__I__Lscala_math_BigInt(exp$2)
});
ScalaJS.c.scala_math_BigInt.prototype.max__Lscala_math_BigInt__ = (function(that) {
  return this.max__Lscala_math_BigInt__Lscala_math_BigInt(that)
});
ScalaJS.c.scala_math_BigInt.prototype.min__Lscala_math_BigInt__ = (function(that$2) {
  return this.min__Lscala_math_BigInt__Lscala_math_BigInt(that$2)
});
ScalaJS.c.scala_math_BigInt.prototype.mod__Lscala_math_BigInt__ = (function(that$3) {
  return this.mod__Lscala_math_BigInt__Lscala_math_BigInt(that$3)
});
ScalaJS.c.scala_math_BigInt.prototype.gcd__Lscala_math_BigInt__ = (function(that$4) {
  return this.gcd__Lscala_math_BigInt__Lscala_math_BigInt(that$4)
});
ScalaJS.c.scala_math_BigInt.prototype.$$amp$tilde__Lscala_math_BigInt__ = (function(that$5) {
  return this.$$amp$tilde__Lscala_math_BigInt__Lscala_math_BigInt(that$5)
});
ScalaJS.c.scala_math_BigInt.prototype.$$up__Lscala_math_BigInt__ = (function(that$6) {
  return this.$$up__Lscala_math_BigInt__Lscala_math_BigInt(that$6)
});
ScalaJS.c.scala_math_BigInt.prototype.$$bar__Lscala_math_BigInt__ = (function(that$7) {
  return this.$$bar__Lscala_math_BigInt__Lscala_math_BigInt(that$7)
});
ScalaJS.c.scala_math_BigInt.prototype.$$amp__Lscala_math_BigInt__ = (function(that$8) {
  return this.$$amp__Lscala_math_BigInt__Lscala_math_BigInt(that$8)
});
ScalaJS.c.scala_math_BigInt.prototype.$$greater$greater__I__ = (function(n$5) {
  return this.$$greater$greater__I__Lscala_math_BigInt(n$5)
});
ScalaJS.c.scala_math_BigInt.prototype.$$less$less__I__ = (function(n$6) {
  return this.$$less$less__I__Lscala_math_BigInt(n$6)
});
ScalaJS.c.scala_math_BigInt.prototype.$$div$percent__Lscala_math_BigInt__ = (function(that$9) {
  return this.$$div$percent__Lscala_math_BigInt__Lscala_Tuple2(that$9)
});
ScalaJS.c.scala_math_BigInt.prototype.$$percent__Lscala_math_BigInt__ = (function(that$10) {
  return this.$$percent__Lscala_math_BigInt__Lscala_math_BigInt(that$10)
});
ScalaJS.c.scala_math_BigInt.prototype.$$div__Lscala_math_BigInt__ = (function(that$11) {
  return this.$$div__Lscala_math_BigInt__Lscala_math_BigInt(that$11)
});
ScalaJS.c.scala_math_BigInt.prototype.$$times__Lscala_math_BigInt__ = (function(that$12) {
  return this.$$times__Lscala_math_BigInt__Lscala_math_BigInt(that$12)
});
ScalaJS.c.scala_math_BigInt.prototype.$$minus__Lscala_math_BigInt__ = (function(that$13) {
  return this.$$minus__Lscala_math_BigInt__Lscala_math_BigInt(that$13)
});
ScalaJS.c.scala_math_BigInt.prototype.$$plus__Lscala_math_BigInt__ = (function(that$14) {
  return this.$$plus__Lscala_math_BigInt__Lscala_math_BigInt(that$14)
});
ScalaJS.c.scala_math_BigInt.prototype.$$greater__Lscala_math_BigInt__ = (function(that$15) {
  return ScalaJS.bZ(this.$$greater__Lscala_math_BigInt__Z(that$15))
});
ScalaJS.c.scala_math_BigInt.prototype.$$less__Lscala_math_BigInt__ = (function(that$16) {
  return ScalaJS.bZ(this.$$less__Lscala_math_BigInt__Z(that$16))
});
ScalaJS.c.scala_math_BigInt.prototype.$$greater$eq__Lscala_math_BigInt__ = (function(that$17) {
  return ScalaJS.bZ(this.$$greater$eq__Lscala_math_BigInt__Z(that$17))
});
ScalaJS.c.scala_math_BigInt.prototype.$$less$eq__Lscala_math_BigInt__ = (function(that$18) {
  return ScalaJS.bZ(this.$$less$eq__Lscala_math_BigInt__Z(that$18))
});
ScalaJS.c.scala_math_BigInt.prototype.compare__Lscala_math_BigInt__ = (function(that$19) {
  return ScalaJS.bI(this.compare__Lscala_math_BigInt__I(that$19))
});
ScalaJS.c.scala_math_BigInt.prototype.equals__Lscala_math_BigInt__ = (function(that$20) {
  return ScalaJS.bZ(this.equals__Lscala_math_BigInt__Z(that$20))
});
ScalaJS.c.scala_math_BigInt.prototype.isValidDouble__ = (function() {
  return ScalaJS.bZ(this.isValidDouble__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.isValidFloat__ = (function() {
  return ScalaJS.bZ(this.isValidFloat__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.isValidLong__ = (function() {
  return ScalaJS.bZ(this.isValidLong__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.isValidInt__ = (function() {
  return ScalaJS.bZ(this.isValidInt__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.isValidChar__ = (function() {
  return ScalaJS.bZ(this.isValidChar__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.isValidShort__ = (function() {
  return ScalaJS.bZ(this.isValidShort__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.isValidByte__ = (function() {
  return ScalaJS.bZ(this.isValidByte__Z())
});
ScalaJS.c.scala_math_BigInt.prototype.bigInteger__ = (function() {
  return this.bigInteger__Ljava_math_BigInteger()
});
/** @constructor */
ScalaJS.inheritable.scala_math_BigInt = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_BigInt.prototype = ScalaJS.c.scala_math_BigInt.prototype;
ScalaJS.is.scala_math_BigInt = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_BigInt)))
});
ScalaJS.as.scala_math_BigInt = (function(obj) {
  if ((ScalaJS.is.scala_math_BigInt(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.BigInt")
  }
});
ScalaJS.isArrayOf.scala_math_BigInt = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_BigInt)))
});
ScalaJS.asArrayOf.scala_math_BigInt = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_BigInt(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.BigInt;", depth)
  }
});
ScalaJS.data.scala_math_BigInt = new ScalaJS.ClassTypeData({
  scala_math_BigInt: 0
}, false, "scala.math.BigInt", ScalaJS.data.scala_math_ScalaNumber, {
  scala_math_BigInt: 1,
  scala_Serializable: 1,
  scala_math_ScalaNumericConversions: 1,
  scala_math_ScalaNumericAnyConversions: 1,
  scala_math_ScalaNumber: 1,
  java_lang_Number: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_BigInt.prototype.$classData = ScalaJS.data.scala_math_BigInt;
//@ sourceMappingURL=BigInt.js.map
