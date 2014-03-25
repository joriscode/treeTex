/** @constructor */
ScalaJS.c.scala_math_BigDecimal = (function() {
  ScalaJS.c.scala_math_ScalaNumber.call(this);
  this.bigDecimal$3 = null;
  this.mc$3 = null
});
ScalaJS.c.scala_math_BigDecimal.prototype = new ScalaJS.inheritable.scala_math_ScalaNumber();
ScalaJS.c.scala_math_BigDecimal.prototype.constructor = ScalaJS.c.scala_math_BigDecimal;
ScalaJS.c.scala_math_BigDecimal.prototype.toChar__C = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toChar__Lscala_math_ScalaNumericAnyConversions__C(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toByte__B = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toByte__Lscala_math_ScalaNumericAnyConversions__B(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toShort__S = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toShort__Lscala_math_ScalaNumericAnyConversions__S(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toInt__I = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toInt__Lscala_math_ScalaNumericAnyConversions__I(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toLong__J = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toLong__Lscala_math_ScalaNumericAnyConversions__J(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toFloat__F = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toFloat__Lscala_math_ScalaNumericAnyConversions__F(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toDouble__D = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__toDouble__Lscala_math_ScalaNumericAnyConversions__D(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.unifiedPrimitiveHashcode__I = (function() {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__unifiedPrimitiveHashcode__Lscala_math_ScalaNumericAnyConversions__I(this)
});
ScalaJS.c.scala_math_BigDecimal.prototype.unifiedPrimitiveEquals__O__Z = (function(x) {
  return ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__unifiedPrimitiveEquals__Lscala_math_ScalaNumericAnyConversions__O__Z(this, x)
});
ScalaJS.c.scala_math_BigDecimal.prototype.bigDecimal__Ljava_math_BigDecimal = (function() {
  return this.bigDecimal$3
});
ScalaJS.c.scala_math_BigDecimal.prototype.mc__Ljava_math_MathContext = (function() {
  return this.mc$3
});
ScalaJS.c.scala_math_BigDecimal.prototype.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal = (function(x) {
  return new ScalaJS.c.scala_math_BigDecimal().init___Ljava_math_BigDecimal__Ljava_math_MathContext(x, this.mc__Ljava_math_MathContext())
});
ScalaJS.c.scala_math_BigDecimal.prototype.hashCode__I = (function() {
  if (this.isWhole__Z()) {
    return this.unifiedPrimitiveHashcode__I()
  } else {
    return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__D__I(this.doubleValue__D())
  }
});
ScalaJS.c.scala_math_BigDecimal.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if (ScalaJS.is.scala_math_BigDecimal(x1)) {
    var x2 = ScalaJS.as.scala_math_BigDecimal(x1);
    return this.equals__Lscala_math_BigDecimal__Z(x2)
  };
  if (ScalaJS.is.scala_math_BigInt(x1)) {
    var x3 = ScalaJS.as.scala_math_BigInt(x1);
    return this.toBigIntExact__Lscala_Option().exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(x3$1) {
      return (function(x$1) {
        return ScalaJS.bZ(x3$1.equals__Lscala_math_BigInt__Z(x$1))
      })
    })(x3)))
  };
  if (ScalaJS.is.java_lang_Double(x1)) {
    var x4 = ScalaJS.uD(x1);
    return (this.isValidDouble__Z() && (this.toDouble__D() === x4))
  };
  if (ScalaJS.is.java_lang_Float(x1)) {
    var x5 = ScalaJS.uF(x1);
    return (this.isValidFloat__Z() && (this.toFloat__F() === x5))
  };
  return (this.isValidLong__Z() && this.unifiedPrimitiveEquals__O__Z(that))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidByte__Z = (function() {
  return this.noArithmeticException__p3__Lscala_Function0__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      arg$outer.toByteExact__B();
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidShort__Z = (function() {
  return this.noArithmeticException__p3__Lscala_Function0__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      arg$outer.toShortExact__S();
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidChar__Z = (function() {
  return ((this.isValidInt__Z() && (this.toIntExact__I() >= 0)) && (this.toIntExact__I() <= 65535))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidInt__Z = (function() {
  return this.noArithmeticException__p3__Lscala_Function0__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      arg$outer.toIntExact__I();
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidLong__Z = (function() {
  return this.noArithmeticException__p3__Lscala_Function0__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      arg$outer.toLongExact__J();
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidFloat__Z = (function() {
  var f = this.toFloat__F();
  return ((!ScalaJS.modules.scala_runtime_RichFloat().isInfinity$extension__F__Z(ScalaJS.modules.scala_Predef().floatWrapper__F__F(f))) && (this.bigDecimal__Ljava_math_BigDecimal().compareTo__Ljava_math_BigDecimal__I(new ScalaJS.c.java_math_BigDecimal().init___D(f)) === 0))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidDouble__Z = (function() {
  var d = this.toDouble__D();
  return ((!ScalaJS.modules.scala_runtime_RichDouble().isInfinity$extension__D__Z(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(d))) && (this.bigDecimal__Ljava_math_BigDecimal().compareTo__Ljava_math_BigDecimal__I(new ScalaJS.c.java_math_BigDecimal().init___D(d)) === 0))
});
ScalaJS.c.scala_math_BigDecimal.prototype.noArithmeticException__p3__Lscala_Function0__Z = (function(body) {
  try {
    body.apply$mcV$sp__V();
    return true
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ArithmeticException($jsexc$)) {
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_math_BigDecimal.prototype.isWhole__Z = (function() {
  return ScalaJS.anyEqEq(this.remainder__Lscala_math_BigDecimal__Lscala_math_BigDecimal(ScalaJS.modules.scala_math_BigDecimal().int2bigDecimal__I__Lscala_math_BigDecimal(1)), ScalaJS.modules.scala_math_BigDecimal().apply__I__Lscala_math_BigDecimal(0))
});
ScalaJS.c.scala_math_BigDecimal.prototype.underlying__Ljava_math_BigDecimal = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal.prototype.equals__Lscala_math_BigDecimal__Z = (function(that) {
  return (this.compare__Lscala_math_BigDecimal__I(that) === 0)
});
ScalaJS.c.scala_math_BigDecimal.prototype.compare__Lscala_math_BigDecimal__I = (function(that) {
  return this.bigDecimal__Ljava_math_BigDecimal().compareTo__Ljava_math_BigDecimal__I(that.bigDecimal__Ljava_math_BigDecimal())
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$less$eq__Lscala_math_BigDecimal__Z = (function(that) {
  return (this.compare__Lscala_math_BigDecimal__I(that) <= 0)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$greater$eq__Lscala_math_BigDecimal__Z = (function(that) {
  return (this.compare__Lscala_math_BigDecimal__I(that) >= 0)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$less__Lscala_math_BigDecimal__Z = (function(that) {
  return (this.compare__Lscala_math_BigDecimal__I(that) < 0)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$greater__Lscala_math_BigDecimal__Z = (function(that) {
  return (this.compare__Lscala_math_BigDecimal__I(that) > 0)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$plus__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().add__Ljava_math_BigDecimal__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$minus__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().subtract__Ljava_math_BigDecimal__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$times__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().multiply__Ljava_math_BigDecimal__Ljava_math_MathContext__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal(), this.mc__Ljava_math_MathContext()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$div__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().divide__Ljava_math_BigDecimal__Ljava_math_MathContext__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal(), this.mc__Ljava_math_MathContext()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$div$percent__Lscala_math_BigDecimal__Lscala_Tuple2 = (function(that) {
  var x1 = this.bigDecimal__Ljava_math_BigDecimal().divideAndRemainder__Ljava_math_BigDecimal__ALjava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal());
  var o7 = ScalaJS.modules.scala_Array().unapplySeq__O__Lscala_Option(x1);
  if ((!o7.isEmpty__Z())) {
    if (((!ScalaJS.anyRefEqEq(o7.get__O(), null)) && (ScalaJS.as.scala_collection_SeqLike(o7.get__O()).lengthCompare__I__I(2) === 0))) {
      var q = ScalaJS.as.java_math_BigDecimal(ScalaJS.as.scala_collection_SeqLike(o7.get__O()).apply__I__O(0));
      var r = ScalaJS.as.java_math_BigDecimal(ScalaJS.as.scala_collection_SeqLike(o7.get__O()).apply__I__O(1));
      return new ScalaJS.c.scala_Tuple2().init___O__O(this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(q), this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(r))
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_math_BigDecimal.prototype.quot__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().divideToIntegralValue__Ljava_math_BigDecimal__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.min__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().min__Ljava_math_BigDecimal__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.max__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().max__Ljava_math_BigDecimal__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.remainder__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().remainder__Ljava_math_BigDecimal__Ljava_math_BigDecimal(that.bigDecimal__Ljava_math_BigDecimal()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$percent__Lscala_math_BigDecimal__Lscala_math_BigDecimal = (function(that) {
  return this.remainder__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that)
});
ScalaJS.c.scala_math_BigDecimal.prototype.pow__I__Lscala_math_BigDecimal = (function(n) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().pow__I__Ljava_math_MathContext__Ljava_math_BigDecimal(n, this.mc__Ljava_math_MathContext()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.unary$und$minus__Lscala_math_BigDecimal = (function() {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().negate__Ljava_math_BigDecimal())
});
ScalaJS.c.scala_math_BigDecimal.prototype.abs__Lscala_math_BigDecimal = (function() {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().abs__Ljava_math_BigDecimal())
});
ScalaJS.c.scala_math_BigDecimal.prototype.signum__I = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().signum__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.precision__I = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().precision__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.round__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(mc) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().round__Ljava_math_MathContext__Ljava_math_BigDecimal(mc))
});
ScalaJS.c.scala_math_BigDecimal.prototype.scale__I = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().scale__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.ulp__Lscala_math_BigDecimal = (function() {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().ulp__Ljava_math_BigDecimal())
});
ScalaJS.c.scala_math_BigDecimal.prototype.apply__Ljava_math_MathContext__Lscala_math_BigDecimal = (function(mc) {
  return ScalaJS.modules.scala_math_BigDecimal().apply__T__Ljava_math_MathContext__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().toString__T(), mc)
});
ScalaJS.c.scala_math_BigDecimal.prototype.setScale__I__Lscala_math_BigDecimal = (function(scale) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().setScale__I__Ljava_math_BigDecimal(scale))
});
ScalaJS.c.scala_math_BigDecimal.prototype.setScale__I__Lscala_Enumeration$Value__Lscala_math_BigDecimal = (function(scale, mode) {
  return this.bigdec2BigDecimal__p3__Ljava_math_BigDecimal__Lscala_math_BigDecimal(this.bigDecimal__Ljava_math_BigDecimal().setScale__I__I__Ljava_math_BigDecimal(scale, mode.id__I()))
});
ScalaJS.c.scala_math_BigDecimal.prototype.byteValue__B = (function() {
  return this.intValue__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.shortValue__S = (function() {
  return this.intValue__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.charValue__C = (function() {
  return (this.intValue__I() & 65535)
});
ScalaJS.c.scala_math_BigDecimal.prototype.intValue__I = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().intValue__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.longValue__J = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().longValue__J()
});
ScalaJS.c.scala_math_BigDecimal.prototype.floatValue__F = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().floatValue__F()
});
ScalaJS.c.scala_math_BigDecimal.prototype.doubleValue__D = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().doubleValue__D()
});
ScalaJS.c.scala_math_BigDecimal.prototype.toByteExact__B = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().byteValueExact__B()
});
ScalaJS.c.scala_math_BigDecimal.prototype.toShortExact__S = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().shortValueExact__S()
});
ScalaJS.c.scala_math_BigDecimal.prototype.toIntExact__I = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().intValueExact__I()
});
ScalaJS.c.scala_math_BigDecimal.prototype.toLongExact__J = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().longValueExact__J()
});
ScalaJS.c.scala_math_BigDecimal.prototype.until__Lscala_math_BigDecimal__Lscala_collection_immutable_Range$Partial = (function(end) {
  return new ScalaJS.c.scala_collection_immutable_Range$Partial().init___Lscala_Function1(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, end$1) {
    return (function(x$2) {
      return arg$outer.until__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive(end$1, x$2)
    })
  })(this, end)))
});
ScalaJS.c.scala_math_BigDecimal.prototype.until__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive = (function(end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range$BigDecimal().apply__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive(this, end, step)
});
ScalaJS.c.scala_math_BigDecimal.prototype.to__Lscala_math_BigDecimal__Lscala_collection_immutable_Range$Partial = (function(end) {
  return new ScalaJS.c.scala_collection_immutable_Range$Partial().init___Lscala_Function1(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, end$2) {
    return (function(x$3) {
      return arg$outer.to__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive(end$2, x$3)
    })
  })(this, end)))
});
ScalaJS.c.scala_math_BigDecimal.prototype.to__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive = (function(end, step) {
  return ScalaJS.modules.scala_collection_immutable_Range$BigDecimal().inclusive__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive(this, end, step)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toBigInt__Lscala_math_BigInt = (function() {
  return new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigDecimal__Ljava_math_BigDecimal().toBigInteger__Ljava_math_BigInteger())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toBigIntExact__Lscala_Option = (function() {
  try {
    return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_math_BigInt().init___Ljava_math_BigInteger(this.bigDecimal__Ljava_math_BigDecimal().toBigIntegerExact__Ljava_math_BigInteger()))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ArithmeticException($jsexc$)) {
      return ScalaJS.modules.scala_None()
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_math_BigDecimal.prototype.toString__T = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal().toString__T()
});
ScalaJS.c.scala_math_BigDecimal.prototype.underlying__O = (function() {
  return this.underlying__Ljava_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal.prototype.init___Ljava_math_BigDecimal__Ljava_math_MathContext = (function(bigDecimal, mc) {
  this.bigDecimal$3 = bigDecimal;
  this.mc$3 = mc;
  ScalaJS.c.scala_math_ScalaNumber.prototype.init___.call(this);
  ScalaJS.impls.scala_math_ScalaNumericAnyConversions$class__$init$__Lscala_math_ScalaNumericAnyConversions__V(this);
  return this
});
ScalaJS.c.scala_math_BigDecimal.prototype.init___Ljava_math_BigDecimal = (function(bigDecimal) {
  ScalaJS.c.scala_math_BigDecimal.prototype.init___Ljava_math_BigDecimal__Ljava_math_MathContext.call(this, bigDecimal, ScalaJS.modules.scala_math_BigDecimal().defaultMathContext__Ljava_math_MathContext());
  return this
});
ScalaJS.c.scala_math_BigDecimal.prototype.unifiedPrimitiveEquals__O__ = (function(x) {
  return ScalaJS.bZ(this.unifiedPrimitiveEquals__O__Z(x))
});
ScalaJS.c.scala_math_BigDecimal.prototype.unifiedPrimitiveHashcode__ = (function() {
  return ScalaJS.bI(this.unifiedPrimitiveHashcode__I())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toChar__ = (function() {
  return ScalaJS.bC(this.toChar__C())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toBigIntExact__ = (function() {
  return this.toBigIntExact__Lscala_Option()
});
ScalaJS.c.scala_math_BigDecimal.prototype.toBigInt__ = (function() {
  return this.toBigInt__Lscala_math_BigInt()
});
ScalaJS.c.scala_math_BigDecimal.prototype.to__Lscala_math_BigDecimal__Lscala_math_BigDecimal__ = (function(end, step) {
  return this.to__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Inclusive(end, step)
});
ScalaJS.c.scala_math_BigDecimal.prototype.to__Lscala_math_BigDecimal__ = (function(end$2) {
  return this.to__Lscala_math_BigDecimal__Lscala_collection_immutable_Range$Partial(end$2)
});
ScalaJS.c.scala_math_BigDecimal.prototype.until__Lscala_math_BigDecimal__Lscala_math_BigDecimal__ = (function(end$3, step$2) {
  return this.until__Lscala_math_BigDecimal__Lscala_math_BigDecimal__Lscala_collection_immutable_NumericRange$Exclusive(end$3, step$2)
});
ScalaJS.c.scala_math_BigDecimal.prototype.until__Lscala_math_BigDecimal__ = (function(end$4) {
  return this.until__Lscala_math_BigDecimal__Lscala_collection_immutable_Range$Partial(end$4)
});
ScalaJS.c.scala_math_BigDecimal.prototype.toLongExact__ = (function() {
  return ScalaJS.bJ(this.toLongExact__J())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toIntExact__ = (function() {
  return ScalaJS.bI(this.toIntExact__I())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toShortExact__ = (function() {
  return ScalaJS.bS(this.toShortExact__S())
});
ScalaJS.c.scala_math_BigDecimal.prototype.toByteExact__ = (function() {
  return ScalaJS.bB(this.toByteExact__B())
});
ScalaJS.c.scala_math_BigDecimal.prototype.charValue__ = (function() {
  return ScalaJS.bC(this.charValue__C())
});
ScalaJS.c.scala_math_BigDecimal.prototype.setScale__I__Lscala_Enumeration$Value__ = (function(scale, mode) {
  return this.setScale__I__Lscala_Enumeration$Value__Lscala_math_BigDecimal(scale, mode)
});
ScalaJS.c.scala_math_BigDecimal.prototype.setScale__I__ = (function(scale$2) {
  return this.setScale__I__Lscala_math_BigDecimal(scale$2)
});
ScalaJS.c.scala_math_BigDecimal.prototype.apply__Ljava_math_MathContext__ = (function(mc) {
  return this.apply__Ljava_math_MathContext__Lscala_math_BigDecimal(mc)
});
ScalaJS.c.scala_math_BigDecimal.prototype.ulp__ = (function() {
  return this.ulp__Lscala_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal.prototype.scale__ = (function() {
  return ScalaJS.bI(this.scale__I())
});
ScalaJS.c.scala_math_BigDecimal.prototype.round__Ljava_math_MathContext__ = (function(mc$2) {
  return this.round__Ljava_math_MathContext__Lscala_math_BigDecimal(mc$2)
});
ScalaJS.c.scala_math_BigDecimal.prototype.precision__ = (function() {
  return ScalaJS.bI(this.precision__I())
});
ScalaJS.c.scala_math_BigDecimal.prototype.signum__ = (function() {
  return ScalaJS.bI(this.signum__I())
});
ScalaJS.c.scala_math_BigDecimal.prototype.abs__ = (function() {
  return this.abs__Lscala_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal.prototype.unary$und$minus__ = (function() {
  return this.unary$und$minus__Lscala_math_BigDecimal()
});
ScalaJS.c.scala_math_BigDecimal.prototype.pow__I__ = (function(n) {
  return this.pow__I__Lscala_math_BigDecimal(n)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$percent__Lscala_math_BigDecimal__ = (function(that) {
  return this.$$percent__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that)
});
ScalaJS.c.scala_math_BigDecimal.prototype.remainder__Lscala_math_BigDecimal__ = (function(that$2) {
  return this.remainder__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$2)
});
ScalaJS.c.scala_math_BigDecimal.prototype.max__Lscala_math_BigDecimal__ = (function(that$3) {
  return this.max__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$3)
});
ScalaJS.c.scala_math_BigDecimal.prototype.min__Lscala_math_BigDecimal__ = (function(that$4) {
  return this.min__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$4)
});
ScalaJS.c.scala_math_BigDecimal.prototype.quot__Lscala_math_BigDecimal__ = (function(that$5) {
  return this.quot__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$5)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$div$percent__Lscala_math_BigDecimal__ = (function(that$6) {
  return this.$$div$percent__Lscala_math_BigDecimal__Lscala_Tuple2(that$6)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$div__Lscala_math_BigDecimal__ = (function(that$7) {
  return this.$$div__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$7)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$times__Lscala_math_BigDecimal__ = (function(that$8) {
  return this.$$times__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$8)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$minus__Lscala_math_BigDecimal__ = (function(that$9) {
  return this.$$minus__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$9)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$plus__Lscala_math_BigDecimal__ = (function(that$10) {
  return this.$$plus__Lscala_math_BigDecimal__Lscala_math_BigDecimal(that$10)
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$greater__Lscala_math_BigDecimal__ = (function(that$11) {
  return ScalaJS.bZ(this.$$greater__Lscala_math_BigDecimal__Z(that$11))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$less__Lscala_math_BigDecimal__ = (function(that$12) {
  return ScalaJS.bZ(this.$$less__Lscala_math_BigDecimal__Z(that$12))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$greater$eq__Lscala_math_BigDecimal__ = (function(that$13) {
  return ScalaJS.bZ(this.$$greater$eq__Lscala_math_BigDecimal__Z(that$13))
});
ScalaJS.c.scala_math_BigDecimal.prototype.$$less$eq__Lscala_math_BigDecimal__ = (function(that$14) {
  return ScalaJS.bZ(this.$$less$eq__Lscala_math_BigDecimal__Z(that$14))
});
ScalaJS.c.scala_math_BigDecimal.prototype.compare__Lscala_math_BigDecimal__ = (function(that$15) {
  return ScalaJS.bI(this.compare__Lscala_math_BigDecimal__I(that$15))
});
ScalaJS.c.scala_math_BigDecimal.prototype.equals__Lscala_math_BigDecimal__ = (function(that$16) {
  return ScalaJS.bZ(this.equals__Lscala_math_BigDecimal__Z(that$16))
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidDouble__ = (function() {
  return ScalaJS.bZ(this.isValidDouble__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidFloat__ = (function() {
  return ScalaJS.bZ(this.isValidFloat__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidLong__ = (function() {
  return ScalaJS.bZ(this.isValidLong__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidInt__ = (function() {
  return ScalaJS.bZ(this.isValidInt__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidChar__ = (function() {
  return ScalaJS.bZ(this.isValidChar__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidShort__ = (function() {
  return ScalaJS.bZ(this.isValidShort__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.isValidByte__ = (function() {
  return ScalaJS.bZ(this.isValidByte__Z())
});
ScalaJS.c.scala_math_BigDecimal.prototype.mc__ = (function() {
  return this.mc__Ljava_math_MathContext()
});
ScalaJS.c.scala_math_BigDecimal.prototype.bigDecimal__ = (function() {
  return this.bigDecimal__Ljava_math_BigDecimal()
});
/** @constructor */
ScalaJS.inheritable.scala_math_BigDecimal = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_math_BigDecimal.prototype = ScalaJS.c.scala_math_BigDecimal.prototype;
ScalaJS.is.scala_math_BigDecimal = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_BigDecimal)))
});
ScalaJS.as.scala_math_BigDecimal = (function(obj) {
  if ((ScalaJS.is.scala_math_BigDecimal(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.BigDecimal")
  }
});
ScalaJS.isArrayOf.scala_math_BigDecimal = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_BigDecimal)))
});
ScalaJS.asArrayOf.scala_math_BigDecimal = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_BigDecimal(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.BigDecimal;", depth)
  }
});
ScalaJS.data.scala_math_BigDecimal = new ScalaJS.ClassTypeData({
  scala_math_BigDecimal: 0
}, false, "scala.math.BigDecimal", ScalaJS.data.scala_math_ScalaNumber, {
  scala_math_BigDecimal: 1,
  scala_Serializable: 1,
  scala_math_ScalaNumericConversions: 1,
  scala_math_ScalaNumericAnyConversions: 1,
  scala_math_ScalaNumber: 1,
  java_lang_Number: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_math_BigDecimal.prototype.$classData = ScalaJS.data.scala_math_BigDecimal;
//@ sourceMappingURL=BigDecimal.js.map
