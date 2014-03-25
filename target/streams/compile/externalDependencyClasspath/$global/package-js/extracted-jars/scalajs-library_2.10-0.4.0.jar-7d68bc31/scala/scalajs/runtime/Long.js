/** @constructor */
ScalaJS.c.scala_scalajs_runtime_Long = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.l$1 = 0;
  this.m$1 = 0;
  this.h$1 = 0
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_runtime_Long.prototype.constructor = ScalaJS.c.scala_scalajs_runtime_Long;
ScalaJS.c.scala_scalajs_runtime_Long.prototype.l__I = (function() {
  return this.l$1
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.m__I = (function() {
  return this.m$1
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.h__I = (function() {
  return this.h$1
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toByte__B = (function() {
  return this.toInt__I()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toShort__S = (function() {
  return this.toInt__I()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toChar__C = (function() {
  return (this.toInt__I() & 65535)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toInt__I = (function() {
  return (this.l__I() | (this.m__I() << 22))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toLong__Lscala_scalajs_runtime_Long = (function() {
  return this
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toFloat__F = (function() {
  return this.toDouble__D()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toDouble__D = (function() {
  if (this.isMinValue__p1__Z()) {
    return -9.223372036854776E18
  } else {
    if (this.scala$scalajs$runtime$Long$$isNegative__Z()) {
      return (-this.unary$und$minus__Lscala_scalajs_runtime_Long().toDouble__D())
    } else {
      return ((this.l__I() + (this.m__I() * 4194304.0)) + (this.h__I() * 1.7592186044416E13))
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.unary$und$tilde__Lscala_scalajs_runtime_Long = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long((~this.l__I()), (~this.m__I()), (~this.h__I()))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.unary$und$plus__Lscala_scalajs_runtime_Long = (function() {
  return this
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.unary$und$minus__Lscala_scalajs_runtime_Long = (function() {
  var neg0 = (((~this.l__I()) + 1) & 4194303);
  var jsx$3 = (~this.m__I());
  if ((neg0 === 0)) {
    var jsx$2 = 1
  } else {
    var jsx$2 = 0
  };
  var jsx$1 = (jsx$3 + jsx$2);
  var neg1 = (jsx$1 & 4194303);
  var jsx$6 = (~this.h__I());
  if (((neg0 === 0) && (neg1 === 0))) {
    var jsx$5 = 1
  } else {
    var jsx$5 = 0
  };
  var jsx$4 = (jsx$6 + jsx$5);
  var neg2 = (jsx$4 & 1048575);
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(neg0, neg1, neg2)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$plus__T__T = (function(y) {
  return (("" + this.toString__T()) + y)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$less$less__I__Lscala_scalajs_runtime_Long = (function(n_in) {
  var n = (n_in & 63);
  if ((n < 22)) {
    var remBits = (22 - n);
    return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long((this.l__I() << n), ((this.m__I() << n) | (this.l__I() >> remBits)), ((this.h__I() << n) | (this.m__I() >> remBits)))
  } else {
    if ((n < 44)) {
      var shfBits = (n - 22);
      var remBits$2 = (44 - n);
      return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(0, (this.l__I() << shfBits), ((this.m__I() << shfBits) | (this.l__I() >> remBits$2)))
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(0, 0, (this.l__I() << (n - 44)))
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater$greater$greater__I__Lscala_scalajs_runtime_Long = (function(n_in) {
  ScalaJS.modules.scala_Predef().assert__Z__V((this.h__I() === (this.h__I() & 1048575)));
  var n = (n_in & 63);
  if ((n < 22)) {
    var remBits = (22 - n);
    return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(((this.l__I() >> n) | (this.m__I() << remBits)), ((this.m__I() >> n) | (this.h__I() << remBits)), (this.h__I() >>> n))
  } else {
    if ((n < 44)) {
      var shfBits = (n - 22);
      var remBits$2 = (44 - n);
      return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(((this.m__I() >> shfBits) | (this.h__I() << remBits$2)), (this.h__I() >>> shfBits), 0)
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long((this.h__I() >>> (n - 44)), 0, 0)
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater$greater__I__Lscala_scalajs_runtime_Long = (function(n_in) {
  var n = (n_in & 63);
  var negative = ((this.h__I() & 524288) !== 0);
  if (negative) {
    var xh = (this.h__I() | (~1048575))
  } else {
    var xh = this.h__I()
  };
  if ((n < 22)) {
    var remBits = (22 - n);
    return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(((this.l__I() >> n) | (this.m__I() << remBits)), ((this.m__I() >> n) | (xh << remBits)), (xh >> n))
  } else {
    if ((n < 44)) {
      var shfBits = (n - 22);
      var remBits$2 = (44 - n);
      var jsx$10 = ScalaJS.modules.scala_scalajs_runtime_Long();
      var jsx$9 = ((this.m__I() >> shfBits) | (xh << remBits$2));
      var jsx$8 = (xh >> shfBits);
      if (negative) {
        var jsx$7 = 1048575
      } else {
        var jsx$7 = 0
      };
      return jsx$10.masked__I__I__I__Lscala_scalajs_runtime_Long(jsx$9, jsx$8, jsx$7)
    } else {
      var jsx$14 = ScalaJS.modules.scala_scalajs_runtime_Long();
      var jsx$13 = (xh >> (n - 44));
      if (negative) {
        var jsx$12 = 4194303
      } else {
        var jsx$12 = 0
      };
      if (negative) {
        var jsx$11 = 1048575
      } else {
        var jsx$11 = 0
      };
      return jsx$14.masked__I__I__I__Lscala_scalajs_runtime_Long(jsx$13, jsx$12, jsx$11)
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.equals__O__Z = (function(that) {
  var x1 = that;
  if (ScalaJS.is.scala_scalajs_runtime_Long(x1)) {
    var x2 = ScalaJS.as.scala_scalajs_runtime_Long(x1);
    return (((this.l__I() === x2.l__I()) && (this.m__I() === x2.m__I())) && (this.h__I() === x2.h__I()))
  };
  return false
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.notEquals__O__Z = (function(that) {
  return (!this.equals__O__Z(that))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$less__Lscala_scalajs_runtime_Long__Z = (function(y) {
  return (!this.$$greater$eq__Lscala_scalajs_runtime_Long__Z(y))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$less$eq__Lscala_scalajs_runtime_Long__Z = (function(y) {
  return (!this.$$greater__Lscala_scalajs_runtime_Long__Z(y))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater__Lscala_scalajs_runtime_Long__Z = (function(y) {
  var signx = this.sign__p1__I();
  var signy = y.sign__p1__I();
  if ((signx === 0)) {
    return ((((signy !== 0) || (this.h__I() > y.h__I())) || ((this.h__I() === y.h__I()) && (this.m__I() > y.m__I()))) || (((this.h__I() === y.h__I()) && (this.m__I() === y.m__I())) && (this.l__I() > y.l__I())))
  } else {
    return (!((((signy === 0) || (this.h__I() < y.h__I())) || ((this.h__I() === y.h__I()) && (this.m__I() < y.m__I()))) || (((this.h__I() === y.h__I()) && (this.m__I() === y.m__I())) && (this.l__I() <= y.l__I()))))
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater$eq__Lscala_scalajs_runtime_Long__Z = (function(y) {
  return (ScalaJS.anyRefEqEq(this, y) || this.$$greater__Lscala_scalajs_runtime_Long__Z(y))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long((this.l__I() | y.l__I()), (this.m__I() | y.m__I()), (this.h__I() | y.h__I()))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long((this.l__I() & y.l__I()), (this.m__I() & y.m__I()), (this.h__I() & y.h__I()))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long((this.l__I() ^ y.l__I()), (this.m__I() ^ y.m__I()), (this.h__I() ^ y.h__I()))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  var sum0 = (this.l__I() + y.l__I());
  var sum1 = ((this.m__I() + y.m__I()) + (sum0 >> 22));
  var sum2 = ((this.h__I() + y.h__I()) + (sum1 >> 22));
  return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(sum0, sum1, sum2)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  return this.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y.unary$und$minus__Lscala_scalajs_runtime_Long())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  var x1 = this.chunk13$1__p1__Lscala_scalajs_runtime_Long__Lscala_Tuple5(this);
  matchEnd3: {
    if ((x1 !== null)) {
      var a0 = ScalaJS.uI(x1.$$und1__O());
      var a1 = ScalaJS.uI(x1.$$und2__O());
      var a2 = ScalaJS.uI(x1.$$und3__O());
      var a3 = ScalaJS.uI(x1.$$und4__O());
      var a4 = ScalaJS.uI(x1.$$und5__O());
      var x$1 = new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(ScalaJS.bI(a0), ScalaJS.bI(a1), ScalaJS.bI(a2), ScalaJS.bI(a3), ScalaJS.bI(a4));
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var a0$2 = ScalaJS.uI(x$1.$$und1__O());
  var a1$2 = ScalaJS.uI(x$1.$$und2__O());
  var a2$2 = ScalaJS.uI(x$1.$$und3__O());
  var a3$2 = ScalaJS.uI(x$1.$$und4__O());
  var a4$2 = ScalaJS.uI(x$1.$$und5__O());
  var x1$2 = this.chunk13$1__p1__Lscala_scalajs_runtime_Long__Lscala_Tuple5(y);
  matchEnd3$2: {
    if ((x1$2 !== null)) {
      var b0 = ScalaJS.uI(x1$2.$$und1__O());
      var b1 = ScalaJS.uI(x1$2.$$und2__O());
      var b2 = ScalaJS.uI(x1$2.$$und3__O());
      var b3 = ScalaJS.uI(x1$2.$$und4__O());
      var b4 = ScalaJS.uI(x1$2.$$und5__O());
      var x$2 = new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(ScalaJS.bI(b0), ScalaJS.bI(b1), ScalaJS.bI(b2), ScalaJS.bI(b3), ScalaJS.bI(b4));
      break matchEnd3$2
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  var b0$2 = ScalaJS.uI(x$2.$$und1__O());
  var b1$2 = ScalaJS.uI(x$2.$$und2__O());
  var b2$2 = ScalaJS.uI(x$2.$$und3__O());
  var b3$2 = ScalaJS.uI(x$2.$$und4__O());
  var b4$2 = ScalaJS.uI(x$2.$$und5__O());
  var p0 = (a0$2 * b0$2);
  var p1 = (a1$2 * b0$2);
  var p2 = (a2$2 * b0$2);
  var p3 = (a3$2 * b0$2);
  var p4 = (a4$2 * b0$2);
  if ((b1$2 !== 0)) {
    p1 = (p1 + (a0$2 * b1$2));
    p2 = (p2 + (a1$2 * b1$2));
    p3 = (p3 + (a2$2 * b1$2));
    p4 = (p4 + (a3$2 * b1$2))
  };
  if ((b2$2 !== 0)) {
    p2 = (p2 + (a0$2 * b2$2));
    p3 = (p3 + (a1$2 * b2$2));
    p4 = (p4 + (a2$2 * b2$2))
  };
  if ((b3$2 !== 0)) {
    p3 = (p3 + (a0$2 * b3$2));
    p4 = (p4 + (a1$2 * b3$2))
  };
  if ((b4$2 !== 0)) {
    p4 = (p4 + (a0$2 * b4$2))
  };
  var c00 = (p0 & 4194303);
  var c01 = ((p1 & 511) << 13);
  var c0 = (c00 + c01);
  var c10 = (p0 >> 22);
  var c11 = (p1 >> 9);
  var c12 = ((p2 & 262143) << 4);
  var c13 = ((p3 & 31) << 17);
  var c1 = (((c10 + c11) + c12) + c13);
  var c22 = (p2 >> 18);
  var c23 = (p3 >> 5);
  var c24 = ((p4 & 4095) << 8);
  var c2 = ((c22 + c23) + c24);
  var c1n = (c1 + (c0 >> 22));
  return ScalaJS.modules.scala_scalajs_runtime_Long().masked__I__I__I__Lscala_scalajs_runtime_Long(c0, c1n, (c2 + (c1n >> 22)))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  return ScalaJS.as.scala_scalajs_runtime_Long(this.divMod__p1__Lscala_scalajs_runtime_Long__Lscala_scalajs_js_Array(y)[0])
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long = (function(y) {
  return ScalaJS.as.scala_scalajs_runtime_Long(this.divMod__p1__Lscala_scalajs_runtime_Long__Lscala_scalajs_js_Array(y)[1])
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toBinaryString__T = (function() {
  return ((this.padBinary22$1__p1__I__Lscala_scalajs_js_String(this.h__I()) + this.padBinary22$1__p1__I__Lscala_scalajs_js_String(this.m__I())) + this.padBinary22$1__p1__I__Lscala_scalajs_js_String(this.l__I()))["substring"](2)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toHexString__T = (function() {
  var mp = (this.m__I() >> 2);
  var lp = (this.l__I() | ((this.m__I() & 3) << 22));
  var arg$1 = this.h__I();
  var arg$2 = mp;
  var arg$3 = lp;
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%05x%05x%06x")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(arg$1), ScalaJS.bI(arg$2), ScalaJS.bI(arg$3)])))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toOctalString__T = (function() {
  var lp = (this.l__I() & 2097151);
  var mp = (((this.m__I() & 1048575) << 1) | (this.l__I() >> 21));
  var hp = ((this.h__I() << 2) | (this.m__I() >> 20));
  var arg$4 = hp;
  var arg$5 = mp;
  var arg$6 = lp;
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%08o%07o%07o")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.bI(arg$4), ScalaJS.bI(arg$5), ScalaJS.bI(arg$6)])))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toString__T = (function() {
  if (this.scala$scalajs$runtime$Long$$isZero__Z()) {
    return "0"
  } else {
    if (this.isMinValue__p1__Z()) {
      return "-9223372036854775808"
    } else {
      if (this.scala$scalajs$runtime$Long$$isNegative__Z()) {
        return ("-" + this.unary$und$minus__Lscala_scalajs_runtime_Long().toString__T())
      } else {
        var tenPowL = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1755648, 238, 0);
        return this.toString0$1__p1__Lscala_scalajs_runtime_Long__T__Lscala_scalajs_runtime_Long__T(this, "", tenPowL)
      }
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.bitCount__I = (function() {
  return ((ScalaJS.modules.java_lang_Integer().bitCount__I__I(this.l__I()) + ScalaJS.modules.java_lang_Integer().bitCount__I__I(this.m__I())) + ScalaJS.modules.java_lang_Integer().bitCount__I__I(this.h__I()))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.sign__p1__I = (function() {
  return (this.h__I() >> 19)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.scala$scalajs$runtime$Long$$isZero__Z = (function() {
  return (((this.l__I() === 0) && (this.m__I() === 0)) && (this.h__I() === 0))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.isMinValue__p1__Z = (function() {
  return ScalaJS.anyRefEqEq(this, ScalaJS.modules.scala_scalajs_runtime_Long().MinValue__Lscala_scalajs_runtime_Long())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.scala$scalajs$runtime$Long$$isNegative__Z = (function() {
  return (this.sign__p1__I() !== 0)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.abs__p1__Lscala_scalajs_runtime_Long = (function() {
  if ((this.sign__p1__I() === 1)) {
    return this.unary$und$minus__Lscala_scalajs_runtime_Long()
  } else {
    return this
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.numberOfLeadingZeros__I = (function() {
  if (((this.h__I() === 0) && (this.m__I() === 0))) {
    return ((ScalaJS.modules.java_lang_Integer().numberOfLeadingZeros__I__I(this.l__I()) - 10) + 42)
  } else {
    if ((this.h__I() === 0)) {
      return ((ScalaJS.modules.java_lang_Integer().numberOfLeadingZeros__I__I(this.m__I()) - 10) + 20)
    } else {
      return (ScalaJS.modules.java_lang_Integer().numberOfLeadingZeros__I__I(this.h__I()) - 12)
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.powerOfTwo__p1__I = (function() {
  if (((((this.h__I() === 0) && (this.m__I() === 0)) && (this.l__I() !== 0)) && ((this.l__I() & (this.l__I() - 1)) === 0))) {
    return ScalaJS.modules.java_lang_Integer().numberOfTrailingZeros__I__I(this.l__I())
  } else {
    if (((((this.h__I() === 0) && (this.m__I() !== 0)) && (this.l__I() === 0)) && ((this.m__I() & (this.m__I() - 1)) === 0))) {
      return (ScalaJS.modules.java_lang_Integer().numberOfTrailingZeros__I__I(this.m__I()) + 22)
    } else {
      if (((((this.h__I() !== 0) && (this.m__I() === 0)) && (this.l__I() === 0)) && ((this.h__I() & (this.h__I() - 1)) === 0))) {
        return (ScalaJS.modules.java_lang_Integer().numberOfTrailingZeros__I__I(this.h__I()) + 44)
      } else {
        return -1
      }
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.scala$scalajs$runtime$Long$$setBit__I__Lscala_scalajs_runtime_Long = (function(bit) {
  if ((bit < 22)) {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long((this.l__I() | (1 << bit)), this.m__I(), this.h__I())
  } else {
    if ((bit < 44)) {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(this.l__I(), (this.m__I() | (1 << (bit - 22))), this.h__I())
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(this.l__I(), this.m__I(), (this.h__I() | (1 << (bit - 44))))
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.divMod__p1__Lscala_scalajs_runtime_Long__Lscala_scalajs_js_Array = (function(y) {
  if (y.scala$scalajs$runtime$Long$$isZero__Z()) {
    throw new ScalaJS.c.java_lang_ArithmeticException().init___T("/ by zero")
  } else {
    if (this.scala$scalajs$runtime$Long$$isZero__Z()) {
      return [ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long(), ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()]
    } else {
      if (y.isMinValue__p1__Z()) {
        if (this.isMinValue__p1__Z()) {
          return [ScalaJS.modules.scala_scalajs_runtime_Long().one__Lscala_scalajs_runtime_Long(), ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()]
        } else {
          return [ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long(), this]
        }
      } else {
        var xNegative = this.scala$scalajs$runtime$Long$$isNegative__Z();
        var yNegative = y.scala$scalajs$runtime$Long$$isNegative__Z();
        var xMinValue = this.isMinValue__p1__Z();
        var absX = this.abs__p1__Lscala_scalajs_runtime_Long();
        var absY = y.abs__p1__Lscala_scalajs_runtime_Long();
        var pow = y.powerOfTwo__p1__I();
        if ((pow >= 0)) {
          if (xMinValue) {
            var z = this.$$greater$greater__I__Lscala_scalajs_runtime_Long(pow);
            if (yNegative) {
              var jsx$15 = z.unary$und$minus__Lscala_scalajs_runtime_Long()
            } else {
              var jsx$15 = z
            };
            return [jsx$15, ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()]
          } else {
            var absZ = absX.$$greater$greater__I__Lscala_scalajs_runtime_Long(pow);
            if ((xNegative ^ yNegative)) {
              var z$2 = absZ.unary$und$minus__Lscala_scalajs_runtime_Long()
            } else {
              var z$2 = absZ
            };
            var remAbs = absX.maskRight__p1__I__Lscala_scalajs_runtime_Long(pow);
            if (xNegative) {
              var rem = remAbs.unary$und$minus__Lscala_scalajs_runtime_Long()
            } else {
              var rem = remAbs
            };
            return [z$2, rem]
          }
        } else {
          if (xMinValue) {
            return ScalaJS.modules.scala_scalajs_runtime_Long().scala$scalajs$runtime$Long$$divModHelper__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Z__Z__Z__Lscala_scalajs_js_Array(ScalaJS.modules.scala_scalajs_runtime_Long().MaxValue__Lscala_scalajs_runtime_Long(), absY, xNegative, yNegative, true)
          } else {
            if (absX.$$less__Lscala_scalajs_runtime_Long__Z(absY)) {
              return [ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long(), this]
            } else {
              return ScalaJS.modules.scala_scalajs_runtime_Long().scala$scalajs$runtime$Long$$divModHelper__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long__Z__Z__Z__Lscala_scalajs_js_Array(absX, absY, xNegative, yNegative, false)
            }
          }
        }
      }
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.maskRight__p1__I__Lscala_scalajs_runtime_Long = (function(bits) {
  if ((bits <= 22)) {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long((this.l__I() & ((1 << bits) - 1)), 0, 0)
  } else {
    if ((bits <= 44)) {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(this.l__I(), (this.m__I() & ((1 << (bits - 22)) - 1)), 0)
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(this.l__I(), this.m__I(), (this.h__I() & ((1 << (bits - 44)) - 1)))
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.chunk13$1__p1__Lscala_scalajs_runtime_Long__Lscala_Tuple5 = (function(v) {
  return new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(ScalaJS.bI((v.l__I() & 8191)), ScalaJS.bI(((v.l__I() >> 13) | ((v.m__I() & 15) << 9))), ScalaJS.bI(((v.m__I() >> 4) & 8191)), ScalaJS.bI(((v.m__I() >> 17) | ((v.h__I() & 255) << 5))), ScalaJS.bI(((v.h__I() & 1048320) >> 8)))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.padBinary22$1__p1__I__Lscala_scalajs_js_String = (function(i) {
  var zeros = "0000000000000000000000";
  var s = i["toString"](2);
  return (zeros["substring"](s["length"]) + s)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toString0$1__p1__Lscala_scalajs_runtime_Long__T__Lscala_scalajs_runtime_Long__T = (function(v, acc, tenPowL$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (v.scala$scalajs$runtime$Long$$isZero__Z()) {
      return acc
    } else {
      var quotRem = v.divMod__p1__Lscala_scalajs_runtime_Long__Lscala_scalajs_js_Array(tenPowL$1);
      var quot = ScalaJS.as.scala_scalajs_runtime_Long(quotRem[0]);
      var rem = ScalaJS.as.scala_scalajs_runtime_Long(quotRem[1]);
      var digits = ScalaJS.objectToString(ScalaJS.bI(rem.toInt__I()));
      if (quot.scala$scalajs$runtime$Long$$isZero__Z()) {
        var zeroPrefix = ""
      } else {
        var zeroPrefix = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T("000000000", ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(digits))
      };
      var temp$v = quot;
      var temp$acc = ((("" + zeroPrefix) + digits) + acc);
      v = temp$v;
      acc = temp$acc;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.init___I__I__I = (function(l, m, h) {
  this.l$1 = l;
  this.m$1 = m;
  this.h$1 = h;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.scala$scalajs$runtime$Long$$setBit__I__ = (function(bit) {
  return this.scala$scalajs$runtime$Long$$setBit__I__Lscala_scalajs_runtime_Long(bit)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.numberOfLeadingZeros__ = (function() {
  return ScalaJS.bI(this.numberOfLeadingZeros__I())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.scala$scalajs$runtime$Long$$isNegative__ = (function() {
  return ScalaJS.bZ(this.scala$scalajs$runtime$Long$$isNegative__Z())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.scala$scalajs$runtime$Long$$isZero__ = (function() {
  return ScalaJS.bZ(this.scala$scalajs$runtime$Long$$isZero__Z())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.bitCount__ = (function() {
  return ScalaJS.bI(this.bitCount__I())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toOctalString__ = (function() {
  return this.toOctalString__T()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toHexString__ = (function() {
  return this.toHexString__T()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toBinaryString__ = (function() {
  return this.toBinaryString__T()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$percent__Lscala_scalajs_runtime_Long__ = (function(y) {
  return this.$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$div__Lscala_scalajs_runtime_Long__ = (function(y$2) {
  return this.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$2)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$times__Lscala_scalajs_runtime_Long__ = (function(y$3) {
  return this.$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$3)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$minus__Lscala_scalajs_runtime_Long__ = (function(y$4) {
  return this.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$4)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$plus__Lscala_scalajs_runtime_Long__ = (function(y$5) {
  return this.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$5)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$up__Lscala_scalajs_runtime_Long__ = (function(y$6) {
  return this.$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$6)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$amp__Lscala_scalajs_runtime_Long__ = (function(y$7) {
  return this.$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$7)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$bar__Lscala_scalajs_runtime_Long__ = (function(y$8) {
  return this.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(y$8)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater$eq__Lscala_scalajs_runtime_Long__ = (function(y$9) {
  return ScalaJS.bZ(this.$$greater$eq__Lscala_scalajs_runtime_Long__Z(y$9))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater__Lscala_scalajs_runtime_Long__ = (function(y$10) {
  return ScalaJS.bZ(this.$$greater__Lscala_scalajs_runtime_Long__Z(y$10))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$less$eq__Lscala_scalajs_runtime_Long__ = (function(y$11) {
  return ScalaJS.bZ(this.$$less$eq__Lscala_scalajs_runtime_Long__Z(y$11))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$less__Lscala_scalajs_runtime_Long__ = (function(y$12) {
  return ScalaJS.bZ(this.$$less__Lscala_scalajs_runtime_Long__Z(y$12))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.notEquals__O__ = (function(that) {
  return ScalaJS.bZ(this.notEquals__O__Z(that))
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater$greater__I__ = (function(n_in) {
  return this.$$greater$greater__I__Lscala_scalajs_runtime_Long(n_in)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$greater$greater$greater__I__ = (function(n_in$2) {
  return this.$$greater$greater$greater__I__Lscala_scalajs_runtime_Long(n_in$2)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$less$less__I__ = (function(n_in$3) {
  return this.$$less$less__I__Lscala_scalajs_runtime_Long(n_in$3)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$$plus__T__ = (function(y$13) {
  return this.$$plus__T__T(y$13)
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.unary$und$minus__ = (function() {
  return this.unary$und$minus__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.unary$und$plus__ = (function() {
  return this.unary$und$plus__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.unary$und$tilde__ = (function() {
  return this.unary$und$tilde__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toLong__ = (function() {
  return this.toLong__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toChar__ = (function() {
  return ScalaJS.bC(this.toChar__C())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.h__ = (function() {
  return ScalaJS.bI(this.h__I())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.m__ = (function() {
  return ScalaJS.bI(this.m__I())
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.l__ = (function() {
  return ScalaJS.bI(this.l__I())
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_runtime_Long = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_runtime_Long.prototype = ScalaJS.c.scala_scalajs_runtime_Long.prototype;
ScalaJS.is.scala_scalajs_runtime_Long = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_runtime_Long)))
});
ScalaJS.as.scala_scalajs_runtime_Long = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_runtime_Long(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.runtime.Long")
  }
});
ScalaJS.isArrayOf.scala_scalajs_runtime_Long = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_runtime_Long)))
});
ScalaJS.asArrayOf.scala_scalajs_runtime_Long = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_runtime_Long(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.runtime.Long;", depth)
  }
});
ScalaJS.data.scala_scalajs_runtime_Long = new ScalaJS.ClassTypeData({
  scala_scalajs_runtime_Long: 0
}, false, "scala.scalajs.runtime.Long", ScalaJS.data.java_lang_Object, {
  scala_scalajs_runtime_Long: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_runtime_Long.prototype.$classData = ScalaJS.data.scala_scalajs_runtime_Long;
//@ sourceMappingURL=Long.js.map
