/** @constructor */
ScalaJS.c.java_lang_Double = (function() {
  ScalaJS.c.java_lang_Number.call(this);
  this.value$2 = 0.0
});
ScalaJS.c.java_lang_Double.prototype = new ScalaJS.inheritable.java_lang_Number();
ScalaJS.c.java_lang_Double.prototype.constructor = ScalaJS.c.java_lang_Double;
ScalaJS.c.java_lang_Double.prototype.value__p2__D = (function() {
  return this.value$2
});
ScalaJS.c.java_lang_Double.prototype.byteValue__B = (function() {
  return (this.value__p2__D() | 0)
});
ScalaJS.c.java_lang_Double.prototype.shortValue__S = (function() {
  return (this.value__p2__D() | 0)
});
ScalaJS.c.java_lang_Double.prototype.intValue__I = (function() {
  return (this.value__p2__D() | 0)
});
ScalaJS.c.java_lang_Double.prototype.longValue__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(this.value__p2__D())
});
ScalaJS.c.java_lang_Double.prototype.floatValue__F = (function() {
  return this.value__p2__D()
});
ScalaJS.c.java_lang_Double.prototype.doubleValue__D = (function() {
  return this.value__p2__D()
});
ScalaJS.c.java_lang_Double.prototype.equals__O__Z = (function(that0) {
  if (ScalaJS.is.java_lang_Double(that0)) {
    var that = ScalaJS.as.java_lang_Double(that0);
    return ((this.isNaN__Z() && that.isNaN__Z()) || ((this.value__p2__D() === that.value__p2__D()) && ((this.value__p2__D() !== 0) || ((1 / this.value__p2__D()) === (1 / that.value__p2__D())))))
  } else {
    return false
  }
});
ScalaJS.c.java_lang_Double.prototype.toString__T = (function() {
  if (((this.value__p2__D() === 0) && ((1 / this.value__p2__D()) < 0))) {
    return "-0.0"
  } else {
    var s = ScalaJS.objectToString(this.value__p2__D());
    if (((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__T__I(s, ".") < 0) && (!ScalaJS.g["isNaN"](this.value__p2__D())))) {
      return (("" + s) + ".0")
    } else {
      return s
    }
  }
});
ScalaJS.c.java_lang_Double.prototype.isNaN__Z = (function() {
  return ScalaJS.modules.java_lang_Double().isNaN__D__Z(this.value__p2__D())
});
ScalaJS.c.java_lang_Double.prototype.toByte__B = (function() {
  return (this.value__p2__D() | 0)
});
ScalaJS.c.java_lang_Double.prototype.toShort__S = (function() {
  return (this.value__p2__D() | 0)
});
ScalaJS.c.java_lang_Double.prototype.toChar__C = (function() {
  return (this.value__p2__D() & 65535)
});
ScalaJS.c.java_lang_Double.prototype.toInt__I = (function() {
  return (this.value__p2__D() | 0)
});
ScalaJS.c.java_lang_Double.prototype.toLong__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromDouble__D__Lscala_scalajs_runtime_Long(this.value__p2__D())
});
ScalaJS.c.java_lang_Double.prototype.toFloat__F = (function() {
  return this.value__p2__D()
});
ScalaJS.c.java_lang_Double.prototype.toDouble__D = (function() {
  return this.value__p2__D()
});
ScalaJS.c.java_lang_Double.prototype.unary$und$plus__D = (function() {
  return this.value__p2__D()
});
ScalaJS.c.java_lang_Double.prototype.unary$und$minus__D = (function() {
  return (-this.value__p2__D())
});
ScalaJS.c.java_lang_Double.prototype.$$plus__T__T = (function(x) {
  return (ScalaJS.bD(this.value__p2__D()) + x)
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__B__Z = (function(x) {
  return (this.value__p2__D() === x)
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__S__Z = (function(x) {
  return (this.value__p2__D() === x)
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__C__Z = (function(x) {
  return (this.value__p2__D() === x)
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__I__Z = (function(x) {
  return (this.value__p2__D() === x)
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__J__Z = (function(x) {
  return (this.value__p2__D() === x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__F__Z = (function(x) {
  return (this.value__p2__D() === x)
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__D__Z = (function(x) {
  return (this.value__p2__D() === x)
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__B__Z = (function(x) {
  return (this.value__p2__D() !== x)
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__S__Z = (function(x) {
  return (this.value__p2__D() !== x)
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__C__Z = (function(x) {
  return (this.value__p2__D() !== x)
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__I__Z = (function(x) {
  return (this.value__p2__D() !== x)
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__J__Z = (function(x) {
  return (this.value__p2__D() !== x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__F__Z = (function(x) {
  return (this.value__p2__D() !== x)
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__D__Z = (function(x) {
  return (this.value__p2__D() !== x)
});
ScalaJS.c.java_lang_Double.prototype.$$less__B__Z = (function(x) {
  return (this.value__p2__D() < x)
});
ScalaJS.c.java_lang_Double.prototype.$$less__S__Z = (function(x) {
  return (this.value__p2__D() < x)
});
ScalaJS.c.java_lang_Double.prototype.$$less__C__Z = (function(x) {
  return (this.value__p2__D() < x)
});
ScalaJS.c.java_lang_Double.prototype.$$less__I__Z = (function(x) {
  return (this.value__p2__D() < x)
});
ScalaJS.c.java_lang_Double.prototype.$$less__J__Z = (function(x) {
  return (this.value__p2__D() < x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$less__F__Z = (function(x) {
  return (this.value__p2__D() < x)
});
ScalaJS.c.java_lang_Double.prototype.$$less__D__Z = (function(x) {
  return (this.value__p2__D() < x)
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__B__Z = (function(x) {
  return (this.value__p2__D() <= x)
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__S__Z = (function(x) {
  return (this.value__p2__D() <= x)
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__C__Z = (function(x) {
  return (this.value__p2__D() <= x)
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__I__Z = (function(x) {
  return (this.value__p2__D() <= x)
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__J__Z = (function(x) {
  return (this.value__p2__D() <= x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__F__Z = (function(x) {
  return (this.value__p2__D() <= x)
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__D__Z = (function(x) {
  return (this.value__p2__D() <= x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater__B__Z = (function(x) {
  return (this.value__p2__D() > x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater__S__Z = (function(x) {
  return (this.value__p2__D() > x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater__C__Z = (function(x) {
  return (this.value__p2__D() > x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater__I__Z = (function(x) {
  return (this.value__p2__D() > x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater__J__Z = (function(x) {
  return (this.value__p2__D() > x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$greater__F__Z = (function(x) {
  return (this.value__p2__D() > x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater__D__Z = (function(x) {
  return (this.value__p2__D() > x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__B__Z = (function(x) {
  return (this.value__p2__D() >= x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__S__Z = (function(x) {
  return (this.value__p2__D() >= x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__C__Z = (function(x) {
  return (this.value__p2__D() >= x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__I__Z = (function(x) {
  return (this.value__p2__D() >= x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__J__Z = (function(x) {
  return (this.value__p2__D() >= x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__F__Z = (function(x) {
  return (this.value__p2__D() >= x)
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__D__Z = (function(x) {
  return (this.value__p2__D() >= x)
});
ScalaJS.c.java_lang_Double.prototype.$$plus__B__D = (function(x) {
  return (this.value__p2__D() + x)
});
ScalaJS.c.java_lang_Double.prototype.$$plus__S__D = (function(x) {
  return (this.value__p2__D() + x)
});
ScalaJS.c.java_lang_Double.prototype.$$plus__C__D = (function(x) {
  return (this.value__p2__D() + x)
});
ScalaJS.c.java_lang_Double.prototype.$$plus__I__D = (function(x) {
  return (this.value__p2__D() + x)
});
ScalaJS.c.java_lang_Double.prototype.$$plus__J__D = (function(x) {
  return (this.value__p2__D() + x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$plus__F__D = (function(x) {
  return (this.value__p2__D() + x)
});
ScalaJS.c.java_lang_Double.prototype.$$plus__D__D = (function(x) {
  return (this.value__p2__D() + x)
});
ScalaJS.c.java_lang_Double.prototype.$$minus__B__D = (function(x) {
  return (this.value__p2__D() - x)
});
ScalaJS.c.java_lang_Double.prototype.$$minus__S__D = (function(x) {
  return (this.value__p2__D() - x)
});
ScalaJS.c.java_lang_Double.prototype.$$minus__C__D = (function(x) {
  return (this.value__p2__D() - x)
});
ScalaJS.c.java_lang_Double.prototype.$$minus__I__D = (function(x) {
  return (this.value__p2__D() - x)
});
ScalaJS.c.java_lang_Double.prototype.$$minus__J__D = (function(x) {
  return (this.value__p2__D() - x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$minus__F__D = (function(x) {
  return (this.value__p2__D() - x)
});
ScalaJS.c.java_lang_Double.prototype.$$minus__D__D = (function(x) {
  return (this.value__p2__D() - x)
});
ScalaJS.c.java_lang_Double.prototype.$$times__B__D = (function(x) {
  return (this.value__p2__D() * x)
});
ScalaJS.c.java_lang_Double.prototype.$$times__S__D = (function(x) {
  return (this.value__p2__D() * x)
});
ScalaJS.c.java_lang_Double.prototype.$$times__C__D = (function(x) {
  return (this.value__p2__D() * x)
});
ScalaJS.c.java_lang_Double.prototype.$$times__I__D = (function(x) {
  return (this.value__p2__D() * x)
});
ScalaJS.c.java_lang_Double.prototype.$$times__J__D = (function(x) {
  return (this.value__p2__D() * x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$times__F__D = (function(x) {
  return (this.value__p2__D() * x)
});
ScalaJS.c.java_lang_Double.prototype.$$times__D__D = (function(x) {
  return (this.value__p2__D() * x)
});
ScalaJS.c.java_lang_Double.prototype.$$div__B__D = (function(x) {
  return (this.value__p2__D() / x)
});
ScalaJS.c.java_lang_Double.prototype.$$div__S__D = (function(x) {
  return (this.value__p2__D() / x)
});
ScalaJS.c.java_lang_Double.prototype.$$div__C__D = (function(x) {
  return (this.value__p2__D() / x)
});
ScalaJS.c.java_lang_Double.prototype.$$div__I__D = (function(x) {
  return (this.value__p2__D() / x)
});
ScalaJS.c.java_lang_Double.prototype.$$div__J__D = (function(x) {
  return (this.value__p2__D() / x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$div__F__D = (function(x) {
  return (this.value__p2__D() / x)
});
ScalaJS.c.java_lang_Double.prototype.$$div__D__D = (function(x) {
  return (this.value__p2__D() / x)
});
ScalaJS.c.java_lang_Double.prototype.$$percent__B__D = (function(x) {
  return (this.value__p2__D() % x)
});
ScalaJS.c.java_lang_Double.prototype.$$percent__S__D = (function(x) {
  return (this.value__p2__D() % x)
});
ScalaJS.c.java_lang_Double.prototype.$$percent__C__D = (function(x) {
  return (this.value__p2__D() % x)
});
ScalaJS.c.java_lang_Double.prototype.$$percent__I__D = (function(x) {
  return (this.value__p2__D() % x)
});
ScalaJS.c.java_lang_Double.prototype.$$percent__J__D = (function(x) {
  return (this.value__p2__D() % x.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.$$percent__F__D = (function(x) {
  return (this.value__p2__D() % x)
});
ScalaJS.c.java_lang_Double.prototype.$$percent__D__D = (function(x) {
  return (this.value__p2__D() % x)
});
ScalaJS.c.java_lang_Double.prototype.init___D = (function(value) {
  this.value$2 = value;
  ScalaJS.c.java_lang_Number.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_Double.prototype.$$percent__D__ = (function(x) {
  return ScalaJS.bD(this.$$percent__D__D(x))
});
ScalaJS.c.java_lang_Double.prototype.$$percent__F__ = (function(x$2) {
  return ScalaJS.bD(this.$$percent__F__D(x$2))
});
ScalaJS.c.java_lang_Double.prototype.$$percent__J__ = (function(x$3) {
  return ScalaJS.bD(this.$$percent__J__D(x$3))
});
ScalaJS.c.java_lang_Double.prototype.$$percent__I__ = (function(x$4) {
  return ScalaJS.bD(this.$$percent__I__D(x$4))
});
ScalaJS.c.java_lang_Double.prototype.$$percent__C__ = (function(x$5) {
  return ScalaJS.bD(this.$$percent__C__D(x$5))
});
ScalaJS.c.java_lang_Double.prototype.$$percent__S__ = (function(x$6) {
  return ScalaJS.bD(this.$$percent__S__D(x$6))
});
ScalaJS.c.java_lang_Double.prototype.$$percent__B__ = (function(x$7) {
  return ScalaJS.bD(this.$$percent__B__D(x$7))
});
ScalaJS.c.java_lang_Double.prototype.$$div__D__ = (function(x$8) {
  return ScalaJS.bD(this.$$div__D__D(x$8))
});
ScalaJS.c.java_lang_Double.prototype.$$div__F__ = (function(x$9) {
  return ScalaJS.bD(this.$$div__F__D(x$9))
});
ScalaJS.c.java_lang_Double.prototype.$$div__J__ = (function(x$10) {
  return ScalaJS.bD(this.$$div__J__D(x$10))
});
ScalaJS.c.java_lang_Double.prototype.$$div__I__ = (function(x$11) {
  return ScalaJS.bD(this.$$div__I__D(x$11))
});
ScalaJS.c.java_lang_Double.prototype.$$div__C__ = (function(x$12) {
  return ScalaJS.bD(this.$$div__C__D(x$12))
});
ScalaJS.c.java_lang_Double.prototype.$$div__S__ = (function(x$13) {
  return ScalaJS.bD(this.$$div__S__D(x$13))
});
ScalaJS.c.java_lang_Double.prototype.$$div__B__ = (function(x$14) {
  return ScalaJS.bD(this.$$div__B__D(x$14))
});
ScalaJS.c.java_lang_Double.prototype.$$times__D__ = (function(x$15) {
  return ScalaJS.bD(this.$$times__D__D(x$15))
});
ScalaJS.c.java_lang_Double.prototype.$$times__F__ = (function(x$16) {
  return ScalaJS.bD(this.$$times__F__D(x$16))
});
ScalaJS.c.java_lang_Double.prototype.$$times__J__ = (function(x$17) {
  return ScalaJS.bD(this.$$times__J__D(x$17))
});
ScalaJS.c.java_lang_Double.prototype.$$times__I__ = (function(x$18) {
  return ScalaJS.bD(this.$$times__I__D(x$18))
});
ScalaJS.c.java_lang_Double.prototype.$$times__C__ = (function(x$19) {
  return ScalaJS.bD(this.$$times__C__D(x$19))
});
ScalaJS.c.java_lang_Double.prototype.$$times__S__ = (function(x$20) {
  return ScalaJS.bD(this.$$times__S__D(x$20))
});
ScalaJS.c.java_lang_Double.prototype.$$times__B__ = (function(x$21) {
  return ScalaJS.bD(this.$$times__B__D(x$21))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__D__ = (function(x$22) {
  return ScalaJS.bD(this.$$minus__D__D(x$22))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__F__ = (function(x$23) {
  return ScalaJS.bD(this.$$minus__F__D(x$23))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__J__ = (function(x$24) {
  return ScalaJS.bD(this.$$minus__J__D(x$24))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__I__ = (function(x$25) {
  return ScalaJS.bD(this.$$minus__I__D(x$25))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__C__ = (function(x$26) {
  return ScalaJS.bD(this.$$minus__C__D(x$26))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__S__ = (function(x$27) {
  return ScalaJS.bD(this.$$minus__S__D(x$27))
});
ScalaJS.c.java_lang_Double.prototype.$$minus__B__ = (function(x$28) {
  return ScalaJS.bD(this.$$minus__B__D(x$28))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__D__ = (function(x$29) {
  return ScalaJS.bD(this.$$plus__D__D(x$29))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__F__ = (function(x$30) {
  return ScalaJS.bD(this.$$plus__F__D(x$30))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__J__ = (function(x$31) {
  return ScalaJS.bD(this.$$plus__J__D(x$31))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__I__ = (function(x$32) {
  return ScalaJS.bD(this.$$plus__I__D(x$32))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__C__ = (function(x$33) {
  return ScalaJS.bD(this.$$plus__C__D(x$33))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__S__ = (function(x$34) {
  return ScalaJS.bD(this.$$plus__S__D(x$34))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__B__ = (function(x$35) {
  return ScalaJS.bD(this.$$plus__B__D(x$35))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__D__ = (function(x$36) {
  return ScalaJS.bZ(this.$$greater$eq__D__Z(x$36))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__F__ = (function(x$37) {
  return ScalaJS.bZ(this.$$greater$eq__F__Z(x$37))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__J__ = (function(x$38) {
  return ScalaJS.bZ(this.$$greater$eq__J__Z(x$38))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__I__ = (function(x$39) {
  return ScalaJS.bZ(this.$$greater$eq__I__Z(x$39))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__C__ = (function(x$40) {
  return ScalaJS.bZ(this.$$greater$eq__C__Z(x$40))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__S__ = (function(x$41) {
  return ScalaJS.bZ(this.$$greater$eq__S__Z(x$41))
});
ScalaJS.c.java_lang_Double.prototype.$$greater$eq__B__ = (function(x$42) {
  return ScalaJS.bZ(this.$$greater$eq__B__Z(x$42))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__D__ = (function(x$43) {
  return ScalaJS.bZ(this.$$greater__D__Z(x$43))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__F__ = (function(x$44) {
  return ScalaJS.bZ(this.$$greater__F__Z(x$44))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__J__ = (function(x$45) {
  return ScalaJS.bZ(this.$$greater__J__Z(x$45))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__I__ = (function(x$46) {
  return ScalaJS.bZ(this.$$greater__I__Z(x$46))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__C__ = (function(x$47) {
  return ScalaJS.bZ(this.$$greater__C__Z(x$47))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__S__ = (function(x$48) {
  return ScalaJS.bZ(this.$$greater__S__Z(x$48))
});
ScalaJS.c.java_lang_Double.prototype.$$greater__B__ = (function(x$49) {
  return ScalaJS.bZ(this.$$greater__B__Z(x$49))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__D__ = (function(x$50) {
  return ScalaJS.bZ(this.$$less$eq__D__Z(x$50))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__F__ = (function(x$51) {
  return ScalaJS.bZ(this.$$less$eq__F__Z(x$51))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__J__ = (function(x$52) {
  return ScalaJS.bZ(this.$$less$eq__J__Z(x$52))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__I__ = (function(x$53) {
  return ScalaJS.bZ(this.$$less$eq__I__Z(x$53))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__C__ = (function(x$54) {
  return ScalaJS.bZ(this.$$less$eq__C__Z(x$54))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__S__ = (function(x$55) {
  return ScalaJS.bZ(this.$$less$eq__S__Z(x$55))
});
ScalaJS.c.java_lang_Double.prototype.$$less$eq__B__ = (function(x$56) {
  return ScalaJS.bZ(this.$$less$eq__B__Z(x$56))
});
ScalaJS.c.java_lang_Double.prototype.$$less__D__ = (function(x$57) {
  return ScalaJS.bZ(this.$$less__D__Z(x$57))
});
ScalaJS.c.java_lang_Double.prototype.$$less__F__ = (function(x$58) {
  return ScalaJS.bZ(this.$$less__F__Z(x$58))
});
ScalaJS.c.java_lang_Double.prototype.$$less__J__ = (function(x$59) {
  return ScalaJS.bZ(this.$$less__J__Z(x$59))
});
ScalaJS.c.java_lang_Double.prototype.$$less__I__ = (function(x$60) {
  return ScalaJS.bZ(this.$$less__I__Z(x$60))
});
ScalaJS.c.java_lang_Double.prototype.$$less__C__ = (function(x$61) {
  return ScalaJS.bZ(this.$$less__C__Z(x$61))
});
ScalaJS.c.java_lang_Double.prototype.$$less__S__ = (function(x$62) {
  return ScalaJS.bZ(this.$$less__S__Z(x$62))
});
ScalaJS.c.java_lang_Double.prototype.$$less__B__ = (function(x$63) {
  return ScalaJS.bZ(this.$$less__B__Z(x$63))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__D__ = (function(x$64) {
  return ScalaJS.bZ(this.$$bang$eq__D__Z(x$64))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__F__ = (function(x$65) {
  return ScalaJS.bZ(this.$$bang$eq__F__Z(x$65))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__J__ = (function(x$66) {
  return ScalaJS.bZ(this.$$bang$eq__J__Z(x$66))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__I__ = (function(x$67) {
  return ScalaJS.bZ(this.$$bang$eq__I__Z(x$67))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__C__ = (function(x$68) {
  return ScalaJS.bZ(this.$$bang$eq__C__Z(x$68))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__S__ = (function(x$69) {
  return ScalaJS.bZ(this.$$bang$eq__S__Z(x$69))
});
ScalaJS.c.java_lang_Double.prototype.$$bang$eq__B__ = (function(x$70) {
  return ScalaJS.bZ(this.$$bang$eq__B__Z(x$70))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__D__ = (function(x$71) {
  return ScalaJS.bZ(this.$$eq$eq__D__Z(x$71))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__F__ = (function(x$72) {
  return ScalaJS.bZ(this.$$eq$eq__F__Z(x$72))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__J__ = (function(x$73) {
  return ScalaJS.bZ(this.$$eq$eq__J__Z(x$73))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__I__ = (function(x$74) {
  return ScalaJS.bZ(this.$$eq$eq__I__Z(x$74))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__C__ = (function(x$75) {
  return ScalaJS.bZ(this.$$eq$eq__C__Z(x$75))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__S__ = (function(x$76) {
  return ScalaJS.bZ(this.$$eq$eq__S__Z(x$76))
});
ScalaJS.c.java_lang_Double.prototype.$$eq$eq__B__ = (function(x$77) {
  return ScalaJS.bZ(this.$$eq$eq__B__Z(x$77))
});
ScalaJS.c.java_lang_Double.prototype.$$plus__T__ = (function(x$78) {
  return this.$$plus__T__T(x$78)
});
ScalaJS.c.java_lang_Double.prototype.unary$und$minus__ = (function() {
  return ScalaJS.bD(this.unary$und$minus__D())
});
ScalaJS.c.java_lang_Double.prototype.unary$und$plus__ = (function() {
  return ScalaJS.bD(this.unary$und$plus__D())
});
ScalaJS.c.java_lang_Double.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.java_lang_Double.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.java_lang_Double.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.java_lang_Double.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.java_lang_Double.prototype.toChar__ = (function() {
  return ScalaJS.bC(this.toChar__C())
});
ScalaJS.c.java_lang_Double.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.java_lang_Double.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.java_lang_Double.prototype.isNaN__ = (function() {
  return ScalaJS.bZ(this.isNaN__Z())
});
/** @constructor */
ScalaJS.inheritable.java_lang_Double = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Double.prototype = ScalaJS.c.java_lang_Double.prototype;
ScalaJS.is.java_lang_Double = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Double)))
});
ScalaJS.as.java_lang_Double = (function(obj) {
  if ((ScalaJS.is.java_lang_Double(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Double")
  }
});
ScalaJS.isArrayOf.java_lang_Double = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Double)))
});
ScalaJS.asArrayOf.java_lang_Double = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Double(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Double;", depth)
  }
});
ScalaJS.data.java_lang_Double = new ScalaJS.ClassTypeData({
  java_lang_Double: 0
}, false, "java.lang.Double", ScalaJS.data.java_lang_Number, {
  java_lang_Double: 1,
  java_lang_Number: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Double.prototype.$classData = ScalaJS.data.java_lang_Double;
//@ sourceMappingURL=Double.js.map
