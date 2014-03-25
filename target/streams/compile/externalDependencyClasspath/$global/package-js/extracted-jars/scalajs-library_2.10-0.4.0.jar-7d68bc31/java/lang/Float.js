/** @constructor */
ScalaJS.c.java_lang_Float = (function() {
  ScalaJS.c.java_lang_Number.call(this);
  this.value$2 = 0.0
});
ScalaJS.c.java_lang_Float.prototype = new ScalaJS.inheritable.java_lang_Number();
ScalaJS.c.java_lang_Float.prototype.constructor = ScalaJS.c.java_lang_Float;
ScalaJS.c.java_lang_Float.prototype.value__p2__F = (function() {
  return this.value$2
});
ScalaJS.c.java_lang_Float.prototype.byteValue__B = (function() {
  return (this.value__p2__F() | 0)
});
ScalaJS.c.java_lang_Float.prototype.shortValue__S = (function() {
  return (this.value__p2__F() | 0)
});
ScalaJS.c.java_lang_Float.prototype.intValue__I = (function() {
  return (this.value__p2__F() | 0)
});
ScalaJS.c.java_lang_Float.prototype.longValue__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromFloat__F__Lscala_scalajs_runtime_Long(this.value__p2__F())
});
ScalaJS.c.java_lang_Float.prototype.floatValue__F = (function() {
  return this.value__p2__F()
});
ScalaJS.c.java_lang_Float.prototype.doubleValue__D = (function() {
  return this.value__p2__F()
});
ScalaJS.c.java_lang_Float.prototype.equals__O__Z = (function(that0) {
  if (ScalaJS.is.java_lang_Float(that0)) {
    var that = ScalaJS.as.java_lang_Float(that0);
    return ((this.isNaN__Z() && that.isNaN__Z()) || ((this.value__p2__F() === that.value__p2__F()) && ((this.value__p2__F() !== 0) || ((1 / this.value__p2__F()) === (1 / that.value__p2__F())))))
  } else {
    return false
  }
});
ScalaJS.c.java_lang_Float.prototype.toString__T = (function() {
  if (((this.value__p2__F() === 0) && ((1 / this.value__p2__F()) < 0))) {
    return "-0.0"
  } else {
    var s = ScalaJS.objectToString(this.value__p2__F());
    if (((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I(s, ".") < 0) && (!ScalaJS.g["isNaN"](this.value__p2__F())))) {
      return (("" + s) + ".0")
    } else {
      return s
    }
  }
});
ScalaJS.c.java_lang_Float.prototype.isNaN__Z = (function() {
  return ScalaJS.modules.java_lang_Float().isNaN__F__Z(this.value__p2__F())
});
ScalaJS.c.java_lang_Float.prototype.toByte__B = (function() {
  return (this.value__p2__F() | 0)
});
ScalaJS.c.java_lang_Float.prototype.toShort__S = (function() {
  return (this.value__p2__F() | 0)
});
ScalaJS.c.java_lang_Float.prototype.toChar__C = (function() {
  return (this.value__p2__F() & 65535)
});
ScalaJS.c.java_lang_Float.prototype.toInt__I = (function() {
  return (this.value__p2__F() | 0)
});
ScalaJS.c.java_lang_Float.prototype.toLong__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromFloat__F__Lscala_scalajs_runtime_Long(this.value__p2__F())
});
ScalaJS.c.java_lang_Float.prototype.toFloat__F = (function() {
  return this.value__p2__F()
});
ScalaJS.c.java_lang_Float.prototype.toDouble__D = (function() {
  return this.value__p2__F()
});
ScalaJS.c.java_lang_Float.prototype.unary$und$plus__F = (function() {
  return this.value__p2__F()
});
ScalaJS.c.java_lang_Float.prototype.unary$und$minus__F = (function() {
  return (-this.value__p2__F())
});
ScalaJS.c.java_lang_Float.prototype.$$plus__T__T = (function(x) {
  return (ScalaJS.bF(this.value__p2__F()) + x)
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__B__Z = (function(x) {
  return (this.value__p2__F() === x)
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__S__Z = (function(x) {
  return (this.value__p2__F() === x)
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__C__Z = (function(x) {
  return (this.value__p2__F() === x)
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__I__Z = (function(x) {
  return (this.value__p2__F() === x)
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__J__Z = (function(x) {
  return (this.value__p2__F() === x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__F__Z = (function(x) {
  return (this.value__p2__F() === x)
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__D__Z = (function(x) {
  return (this.value__p2__F() === x)
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__B__Z = (function(x) {
  return (this.value__p2__F() !== x)
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__S__Z = (function(x) {
  return (this.value__p2__F() !== x)
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__C__Z = (function(x) {
  return (this.value__p2__F() !== x)
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__I__Z = (function(x) {
  return (this.value__p2__F() !== x)
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__J__Z = (function(x) {
  return (this.value__p2__F() !== x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__F__Z = (function(x) {
  return (this.value__p2__F() !== x)
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__D__Z = (function(x) {
  return (this.value__p2__F() !== x)
});
ScalaJS.c.java_lang_Float.prototype.$$less__B__Z = (function(x) {
  return (this.value__p2__F() < x)
});
ScalaJS.c.java_lang_Float.prototype.$$less__S__Z = (function(x) {
  return (this.value__p2__F() < x)
});
ScalaJS.c.java_lang_Float.prototype.$$less__C__Z = (function(x) {
  return (this.value__p2__F() < x)
});
ScalaJS.c.java_lang_Float.prototype.$$less__I__Z = (function(x) {
  return (this.value__p2__F() < x)
});
ScalaJS.c.java_lang_Float.prototype.$$less__J__Z = (function(x) {
  return (this.value__p2__F() < x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$less__F__Z = (function(x) {
  return (this.value__p2__F() < x)
});
ScalaJS.c.java_lang_Float.prototype.$$less__D__Z = (function(x) {
  return (this.value__p2__F() < x)
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__B__Z = (function(x) {
  return (this.value__p2__F() <= x)
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__S__Z = (function(x) {
  return (this.value__p2__F() <= x)
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__C__Z = (function(x) {
  return (this.value__p2__F() <= x)
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__I__Z = (function(x) {
  return (this.value__p2__F() <= x)
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__J__Z = (function(x) {
  return (this.value__p2__F() <= x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__F__Z = (function(x) {
  return (this.value__p2__F() <= x)
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__D__Z = (function(x) {
  return (this.value__p2__F() <= x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater__B__Z = (function(x) {
  return (this.value__p2__F() > x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater__S__Z = (function(x) {
  return (this.value__p2__F() > x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater__C__Z = (function(x) {
  return (this.value__p2__F() > x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater__I__Z = (function(x) {
  return (this.value__p2__F() > x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater__J__Z = (function(x) {
  return (this.value__p2__F() > x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$greater__F__Z = (function(x) {
  return (this.value__p2__F() > x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater__D__Z = (function(x) {
  return (this.value__p2__F() > x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__B__Z = (function(x) {
  return (this.value__p2__F() >= x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__S__Z = (function(x) {
  return (this.value__p2__F() >= x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__C__Z = (function(x) {
  return (this.value__p2__F() >= x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__I__Z = (function(x) {
  return (this.value__p2__F() >= x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__J__Z = (function(x) {
  return (this.value__p2__F() >= x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__F__Z = (function(x) {
  return (this.value__p2__F() >= x)
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__D__Z = (function(x) {
  return (this.value__p2__F() >= x)
});
ScalaJS.c.java_lang_Float.prototype.$$plus__B__F = (function(x) {
  return (this.value__p2__F() + x)
});
ScalaJS.c.java_lang_Float.prototype.$$plus__S__F = (function(x) {
  return (this.value__p2__F() + x)
});
ScalaJS.c.java_lang_Float.prototype.$$plus__C__F = (function(x) {
  return (this.value__p2__F() + x)
});
ScalaJS.c.java_lang_Float.prototype.$$plus__I__F = (function(x) {
  return (this.value__p2__F() + x)
});
ScalaJS.c.java_lang_Float.prototype.$$plus__J__F = (function(x) {
  return (this.value__p2__F() + x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$plus__F__F = (function(x) {
  return (this.value__p2__F() + x)
});
ScalaJS.c.java_lang_Float.prototype.$$plus__D__D = (function(x) {
  return (this.value__p2__F() + x)
});
ScalaJS.c.java_lang_Float.prototype.$$minus__B__F = (function(x) {
  return (this.value__p2__F() - x)
});
ScalaJS.c.java_lang_Float.prototype.$$minus__S__F = (function(x) {
  return (this.value__p2__F() - x)
});
ScalaJS.c.java_lang_Float.prototype.$$minus__C__F = (function(x) {
  return (this.value__p2__F() - x)
});
ScalaJS.c.java_lang_Float.prototype.$$minus__I__F = (function(x) {
  return (this.value__p2__F() - x)
});
ScalaJS.c.java_lang_Float.prototype.$$minus__J__F = (function(x) {
  return (this.value__p2__F() - x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$minus__F__F = (function(x) {
  return (this.value__p2__F() - x)
});
ScalaJS.c.java_lang_Float.prototype.$$minus__D__D = (function(x) {
  return (this.value__p2__F() - x)
});
ScalaJS.c.java_lang_Float.prototype.$$times__B__F = (function(x) {
  return (this.value__p2__F() * x)
});
ScalaJS.c.java_lang_Float.prototype.$$times__S__F = (function(x) {
  return (this.value__p2__F() * x)
});
ScalaJS.c.java_lang_Float.prototype.$$times__C__F = (function(x) {
  return (this.value__p2__F() * x)
});
ScalaJS.c.java_lang_Float.prototype.$$times__I__F = (function(x) {
  return (this.value__p2__F() * x)
});
ScalaJS.c.java_lang_Float.prototype.$$times__J__F = (function(x) {
  return (this.value__p2__F() * x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$times__F__F = (function(x) {
  return (this.value__p2__F() * x)
});
ScalaJS.c.java_lang_Float.prototype.$$times__D__D = (function(x) {
  return (this.value__p2__F() * x)
});
ScalaJS.c.java_lang_Float.prototype.$$div__B__F = (function(x) {
  return (this.value__p2__F() / x)
});
ScalaJS.c.java_lang_Float.prototype.$$div__S__F = (function(x) {
  return (this.value__p2__F() / x)
});
ScalaJS.c.java_lang_Float.prototype.$$div__C__F = (function(x) {
  return (this.value__p2__F() / x)
});
ScalaJS.c.java_lang_Float.prototype.$$div__I__F = (function(x) {
  return (this.value__p2__F() / x)
});
ScalaJS.c.java_lang_Float.prototype.$$div__J__F = (function(x) {
  return (this.value__p2__F() / x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$div__F__F = (function(x) {
  return (this.value__p2__F() / x)
});
ScalaJS.c.java_lang_Float.prototype.$$div__D__D = (function(x) {
  return (this.value__p2__F() / x)
});
ScalaJS.c.java_lang_Float.prototype.$$percent__B__F = (function(x) {
  return (this.value__p2__F() % x)
});
ScalaJS.c.java_lang_Float.prototype.$$percent__S__F = (function(x) {
  return (this.value__p2__F() % x)
});
ScalaJS.c.java_lang_Float.prototype.$$percent__C__F = (function(x) {
  return (this.value__p2__F() % x)
});
ScalaJS.c.java_lang_Float.prototype.$$percent__I__F = (function(x) {
  return (this.value__p2__F() % x)
});
ScalaJS.c.java_lang_Float.prototype.$$percent__J__F = (function(x) {
  return (this.value__p2__F() % x.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.$$percent__F__F = (function(x) {
  return (this.value__p2__F() % x)
});
ScalaJS.c.java_lang_Float.prototype.$$percent__D__D = (function(x) {
  return (this.value__p2__F() % x)
});
ScalaJS.c.java_lang_Float.prototype.init___F = (function(value) {
  this.value$2 = value;
  ScalaJS.c.java_lang_Number.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_Float.prototype.$$percent__D__ = (function(x) {
  return ScalaJS.bD(this.$$percent__D__D(x))
});
ScalaJS.c.java_lang_Float.prototype.$$percent__F__ = (function(x$2) {
  return ScalaJS.bF(this.$$percent__F__F(x$2))
});
ScalaJS.c.java_lang_Float.prototype.$$percent__J__ = (function(x$3) {
  return ScalaJS.bF(this.$$percent__J__F(x$3))
});
ScalaJS.c.java_lang_Float.prototype.$$percent__I__ = (function(x$4) {
  return ScalaJS.bF(this.$$percent__I__F(x$4))
});
ScalaJS.c.java_lang_Float.prototype.$$percent__C__ = (function(x$5) {
  return ScalaJS.bF(this.$$percent__C__F(x$5))
});
ScalaJS.c.java_lang_Float.prototype.$$percent__S__ = (function(x$6) {
  return ScalaJS.bF(this.$$percent__S__F(x$6))
});
ScalaJS.c.java_lang_Float.prototype.$$percent__B__ = (function(x$7) {
  return ScalaJS.bF(this.$$percent__B__F(x$7))
});
ScalaJS.c.java_lang_Float.prototype.$$div__D__ = (function(x$8) {
  return ScalaJS.bD(this.$$div__D__D(x$8))
});
ScalaJS.c.java_lang_Float.prototype.$$div__F__ = (function(x$9) {
  return ScalaJS.bF(this.$$div__F__F(x$9))
});
ScalaJS.c.java_lang_Float.prototype.$$div__J__ = (function(x$10) {
  return ScalaJS.bF(this.$$div__J__F(x$10))
});
ScalaJS.c.java_lang_Float.prototype.$$div__I__ = (function(x$11) {
  return ScalaJS.bF(this.$$div__I__F(x$11))
});
ScalaJS.c.java_lang_Float.prototype.$$div__C__ = (function(x$12) {
  return ScalaJS.bF(this.$$div__C__F(x$12))
});
ScalaJS.c.java_lang_Float.prototype.$$div__S__ = (function(x$13) {
  return ScalaJS.bF(this.$$div__S__F(x$13))
});
ScalaJS.c.java_lang_Float.prototype.$$div__B__ = (function(x$14) {
  return ScalaJS.bF(this.$$div__B__F(x$14))
});
ScalaJS.c.java_lang_Float.prototype.$$times__D__ = (function(x$15) {
  return ScalaJS.bD(this.$$times__D__D(x$15))
});
ScalaJS.c.java_lang_Float.prototype.$$times__F__ = (function(x$16) {
  return ScalaJS.bF(this.$$times__F__F(x$16))
});
ScalaJS.c.java_lang_Float.prototype.$$times__J__ = (function(x$17) {
  return ScalaJS.bF(this.$$times__J__F(x$17))
});
ScalaJS.c.java_lang_Float.prototype.$$times__I__ = (function(x$18) {
  return ScalaJS.bF(this.$$times__I__F(x$18))
});
ScalaJS.c.java_lang_Float.prototype.$$times__C__ = (function(x$19) {
  return ScalaJS.bF(this.$$times__C__F(x$19))
});
ScalaJS.c.java_lang_Float.prototype.$$times__S__ = (function(x$20) {
  return ScalaJS.bF(this.$$times__S__F(x$20))
});
ScalaJS.c.java_lang_Float.prototype.$$times__B__ = (function(x$21) {
  return ScalaJS.bF(this.$$times__B__F(x$21))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__D__ = (function(x$22) {
  return ScalaJS.bD(this.$$minus__D__D(x$22))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__F__ = (function(x$23) {
  return ScalaJS.bF(this.$$minus__F__F(x$23))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__J__ = (function(x$24) {
  return ScalaJS.bF(this.$$minus__J__F(x$24))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__I__ = (function(x$25) {
  return ScalaJS.bF(this.$$minus__I__F(x$25))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__C__ = (function(x$26) {
  return ScalaJS.bF(this.$$minus__C__F(x$26))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__S__ = (function(x$27) {
  return ScalaJS.bF(this.$$minus__S__F(x$27))
});
ScalaJS.c.java_lang_Float.prototype.$$minus__B__ = (function(x$28) {
  return ScalaJS.bF(this.$$minus__B__F(x$28))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__D__ = (function(x$29) {
  return ScalaJS.bD(this.$$plus__D__D(x$29))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__F__ = (function(x$30) {
  return ScalaJS.bF(this.$$plus__F__F(x$30))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__J__ = (function(x$31) {
  return ScalaJS.bF(this.$$plus__J__F(x$31))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__I__ = (function(x$32) {
  return ScalaJS.bF(this.$$plus__I__F(x$32))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__C__ = (function(x$33) {
  return ScalaJS.bF(this.$$plus__C__F(x$33))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__S__ = (function(x$34) {
  return ScalaJS.bF(this.$$plus__S__F(x$34))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__B__ = (function(x$35) {
  return ScalaJS.bF(this.$$plus__B__F(x$35))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__D__ = (function(x$36) {
  return ScalaJS.bZ(this.$$greater$eq__D__Z(x$36))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__F__ = (function(x$37) {
  return ScalaJS.bZ(this.$$greater$eq__F__Z(x$37))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__J__ = (function(x$38) {
  return ScalaJS.bZ(this.$$greater$eq__J__Z(x$38))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__I__ = (function(x$39) {
  return ScalaJS.bZ(this.$$greater$eq__I__Z(x$39))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__C__ = (function(x$40) {
  return ScalaJS.bZ(this.$$greater$eq__C__Z(x$40))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__S__ = (function(x$41) {
  return ScalaJS.bZ(this.$$greater$eq__S__Z(x$41))
});
ScalaJS.c.java_lang_Float.prototype.$$greater$eq__B__ = (function(x$42) {
  return ScalaJS.bZ(this.$$greater$eq__B__Z(x$42))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__D__ = (function(x$43) {
  return ScalaJS.bZ(this.$$greater__D__Z(x$43))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__F__ = (function(x$44) {
  return ScalaJS.bZ(this.$$greater__F__Z(x$44))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__J__ = (function(x$45) {
  return ScalaJS.bZ(this.$$greater__J__Z(x$45))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__I__ = (function(x$46) {
  return ScalaJS.bZ(this.$$greater__I__Z(x$46))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__C__ = (function(x$47) {
  return ScalaJS.bZ(this.$$greater__C__Z(x$47))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__S__ = (function(x$48) {
  return ScalaJS.bZ(this.$$greater__S__Z(x$48))
});
ScalaJS.c.java_lang_Float.prototype.$$greater__B__ = (function(x$49) {
  return ScalaJS.bZ(this.$$greater__B__Z(x$49))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__D__ = (function(x$50) {
  return ScalaJS.bZ(this.$$less$eq__D__Z(x$50))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__F__ = (function(x$51) {
  return ScalaJS.bZ(this.$$less$eq__F__Z(x$51))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__J__ = (function(x$52) {
  return ScalaJS.bZ(this.$$less$eq__J__Z(x$52))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__I__ = (function(x$53) {
  return ScalaJS.bZ(this.$$less$eq__I__Z(x$53))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__C__ = (function(x$54) {
  return ScalaJS.bZ(this.$$less$eq__C__Z(x$54))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__S__ = (function(x$55) {
  return ScalaJS.bZ(this.$$less$eq__S__Z(x$55))
});
ScalaJS.c.java_lang_Float.prototype.$$less$eq__B__ = (function(x$56) {
  return ScalaJS.bZ(this.$$less$eq__B__Z(x$56))
});
ScalaJS.c.java_lang_Float.prototype.$$less__D__ = (function(x$57) {
  return ScalaJS.bZ(this.$$less__D__Z(x$57))
});
ScalaJS.c.java_lang_Float.prototype.$$less__F__ = (function(x$58) {
  return ScalaJS.bZ(this.$$less__F__Z(x$58))
});
ScalaJS.c.java_lang_Float.prototype.$$less__J__ = (function(x$59) {
  return ScalaJS.bZ(this.$$less__J__Z(x$59))
});
ScalaJS.c.java_lang_Float.prototype.$$less__I__ = (function(x$60) {
  return ScalaJS.bZ(this.$$less__I__Z(x$60))
});
ScalaJS.c.java_lang_Float.prototype.$$less__C__ = (function(x$61) {
  return ScalaJS.bZ(this.$$less__C__Z(x$61))
});
ScalaJS.c.java_lang_Float.prototype.$$less__S__ = (function(x$62) {
  return ScalaJS.bZ(this.$$less__S__Z(x$62))
});
ScalaJS.c.java_lang_Float.prototype.$$less__B__ = (function(x$63) {
  return ScalaJS.bZ(this.$$less__B__Z(x$63))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__D__ = (function(x$64) {
  return ScalaJS.bZ(this.$$bang$eq__D__Z(x$64))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__F__ = (function(x$65) {
  return ScalaJS.bZ(this.$$bang$eq__F__Z(x$65))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__J__ = (function(x$66) {
  return ScalaJS.bZ(this.$$bang$eq__J__Z(x$66))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__I__ = (function(x$67) {
  return ScalaJS.bZ(this.$$bang$eq__I__Z(x$67))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__C__ = (function(x$68) {
  return ScalaJS.bZ(this.$$bang$eq__C__Z(x$68))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__S__ = (function(x$69) {
  return ScalaJS.bZ(this.$$bang$eq__S__Z(x$69))
});
ScalaJS.c.java_lang_Float.prototype.$$bang$eq__B__ = (function(x$70) {
  return ScalaJS.bZ(this.$$bang$eq__B__Z(x$70))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__D__ = (function(x$71) {
  return ScalaJS.bZ(this.$$eq$eq__D__Z(x$71))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__F__ = (function(x$72) {
  return ScalaJS.bZ(this.$$eq$eq__F__Z(x$72))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__J__ = (function(x$73) {
  return ScalaJS.bZ(this.$$eq$eq__J__Z(x$73))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__I__ = (function(x$74) {
  return ScalaJS.bZ(this.$$eq$eq__I__Z(x$74))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__C__ = (function(x$75) {
  return ScalaJS.bZ(this.$$eq$eq__C__Z(x$75))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__S__ = (function(x$76) {
  return ScalaJS.bZ(this.$$eq$eq__S__Z(x$76))
});
ScalaJS.c.java_lang_Float.prototype.$$eq$eq__B__ = (function(x$77) {
  return ScalaJS.bZ(this.$$eq$eq__B__Z(x$77))
});
ScalaJS.c.java_lang_Float.prototype.$$plus__T__ = (function(x$78) {
  return this.$$plus__T__T(x$78)
});
ScalaJS.c.java_lang_Float.prototype.unary$und$minus__ = (function() {
  return ScalaJS.bF(this.unary$und$minus__F())
});
ScalaJS.c.java_lang_Float.prototype.unary$und$plus__ = (function() {
  return ScalaJS.bF(this.unary$und$plus__F())
});
ScalaJS.c.java_lang_Float.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.java_lang_Float.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.java_lang_Float.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.java_lang_Float.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.java_lang_Float.prototype.toChar__ = (function() {
  return ScalaJS.bC(this.toChar__C())
});
ScalaJS.c.java_lang_Float.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.java_lang_Float.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.java_lang_Float.prototype.isNaN__ = (function() {
  return ScalaJS.bZ(this.isNaN__Z())
});
/** @constructor */
ScalaJS.inheritable.java_lang_Float = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Float.prototype = ScalaJS.c.java_lang_Float.prototype;
ScalaJS.is.java_lang_Float = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Float)))
});
ScalaJS.as.java_lang_Float = (function(obj) {
  if ((ScalaJS.is.java_lang_Float(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Float")
  }
});
ScalaJS.isArrayOf.java_lang_Float = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Float)))
});
ScalaJS.asArrayOf.java_lang_Float = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Float(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Float;", depth)
  }
});
ScalaJS.data.java_lang_Float = new ScalaJS.ClassTypeData({
  java_lang_Float: 0
}, false, "java.lang.Float", ScalaJS.data.java_lang_Number, {
  java_lang_Float: 1,
  java_lang_Number: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Float.prototype.$classData = ScalaJS.data.java_lang_Float;
//@ sourceMappingURL=Float.js.map
