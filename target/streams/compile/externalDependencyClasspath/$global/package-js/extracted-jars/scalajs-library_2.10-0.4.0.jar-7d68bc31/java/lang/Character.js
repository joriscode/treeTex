/** @constructor */
ScalaJS.c.java_lang_Character = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.value$1 = 0
});
ScalaJS.c.java_lang_Character.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Character.prototype.constructor = ScalaJS.c.java_lang_Character;
ScalaJS.c.java_lang_Character.prototype.charValue__C = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.equals__O__Z = (function(that) {
  return (ScalaJS.is.java_lang_Character(that) && (this.value$1 === ScalaJS.as.java_lang_Character(that).charValue__C()))
});
ScalaJS.c.java_lang_Character.prototype.toString__T = (function() {
  return ScalaJS.g["String"]["fromCharCode"](this.value$1)
});
ScalaJS.c.java_lang_Character.prototype.hashCode__I = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.toByte__B = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.toShort__S = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.toChar__C = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.toInt__I = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.toLong__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1)
});
ScalaJS.c.java_lang_Character.prototype.toFloat__F = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.toDouble__D = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.unary$und$tilde__I = (function() {
  return (~this.value$1)
});
ScalaJS.c.java_lang_Character.prototype.unary$und$plus__I = (function() {
  return this.value$1
});
ScalaJS.c.java_lang_Character.prototype.unary$und$minus__I = (function() {
  return (-this.value$1)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__T__T = (function(x) {
  return (ScalaJS.bC(this.value$1) + x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$less__I__I = (function(x) {
  return (this.value$1 << x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$less__J__I = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$less$less__I__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater$greater__I__I = (function(x) {
  return (this.value$1 >>> x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater$greater__J__I = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$greater$greater$greater__I__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater__I__I = (function(x) {
  return (this.value$1 >> x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater__J__I = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$greater$greater__I__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__B__Z = (function(x) {
  return (this.value$1 === x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__S__Z = (function(x) {
  return (this.value$1 === x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__C__Z = (function(x) {
  return (this.value$1 === x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__I__Z = (function(x) {
  return (this.value$1 === x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__J__Z = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).equals__O__Z(x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__F__Z = (function(x) {
  return (this.value$1 === x)
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__D__Z = (function(x) {
  return (this.value$1 === x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__B__Z = (function(x) {
  return (this.value$1 !== x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__S__Z = (function(x) {
  return (this.value$1 !== x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__C__Z = (function(x) {
  return (this.value$1 !== x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__I__Z = (function(x) {
  return (this.value$1 !== x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__J__Z = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).notEquals__O__Z(x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__F__Z = (function(x) {
  return (this.value$1 !== x)
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__D__Z = (function(x) {
  return (this.value$1 !== x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__B__Z = (function(x) {
  return (this.value$1 < x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__S__Z = (function(x) {
  return (this.value$1 < x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__C__Z = (function(x) {
  return (this.value$1 < x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__I__Z = (function(x) {
  return (this.value$1 < x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__J__Z = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$less__Lscala_scalajs_runtime_Long__Z(x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__F__Z = (function(x) {
  return (this.value$1 < x)
});
ScalaJS.c.java_lang_Character.prototype.$$less__D__Z = (function(x) {
  return (this.value$1 < x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__B__Z = (function(x) {
  return (this.value$1 <= x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__S__Z = (function(x) {
  return (this.value$1 <= x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__C__Z = (function(x) {
  return (this.value$1 <= x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__I__Z = (function(x) {
  return (this.value$1 <= x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__J__Z = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$less$eq__Lscala_scalajs_runtime_Long__Z(x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__F__Z = (function(x) {
  return (this.value$1 <= x)
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__D__Z = (function(x) {
  return (this.value$1 <= x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__B__Z = (function(x) {
  return (this.value$1 > x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__S__Z = (function(x) {
  return (this.value$1 > x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__C__Z = (function(x) {
  return (this.value$1 > x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__I__Z = (function(x) {
  return (this.value$1 > x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__J__Z = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$greater__Lscala_scalajs_runtime_Long__Z(x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__F__Z = (function(x) {
  return (this.value$1 > x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater__D__Z = (function(x) {
  return (this.value$1 > x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__B__Z = (function(x) {
  return (this.value$1 >= x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__S__Z = (function(x) {
  return (this.value$1 >= x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__C__Z = (function(x) {
  return (this.value$1 >= x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__I__Z = (function(x) {
  return (this.value$1 >= x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__J__Z = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$greater$eq__Lscala_scalajs_runtime_Long__Z(x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__F__Z = (function(x) {
  return (this.value$1 >= x)
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__D__Z = (function(x) {
  return (this.value$1 >= x)
});
ScalaJS.c.java_lang_Character.prototype.$$bar__B__I = (function(x) {
  return (this.value$1 | x)
});
ScalaJS.c.java_lang_Character.prototype.$$bar__S__I = (function(x) {
  return (this.value$1 | x)
});
ScalaJS.c.java_lang_Character.prototype.$$bar__C__I = (function(x) {
  return (this.value$1 | x)
});
ScalaJS.c.java_lang_Character.prototype.$$bar__I__I = (function(x) {
  return (this.value$1 | x)
});
ScalaJS.c.java_lang_Character.prototype.$$bar__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$amp__B__I = (function(x) {
  return (this.value$1 & x)
});
ScalaJS.c.java_lang_Character.prototype.$$amp__S__I = (function(x) {
  return (this.value$1 & x)
});
ScalaJS.c.java_lang_Character.prototype.$$amp__C__I = (function(x) {
  return (this.value$1 & x)
});
ScalaJS.c.java_lang_Character.prototype.$$amp__I__I = (function(x) {
  return (this.value$1 & x)
});
ScalaJS.c.java_lang_Character.prototype.$$amp__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$up__B__I = (function(x) {
  return (this.value$1 ^ x)
});
ScalaJS.c.java_lang_Character.prototype.$$up__S__I = (function(x) {
  return (this.value$1 ^ x)
});
ScalaJS.c.java_lang_Character.prototype.$$up__C__I = (function(x) {
  return (this.value$1 ^ x)
});
ScalaJS.c.java_lang_Character.prototype.$$up__I__I = (function(x) {
  return (this.value$1 ^ x)
});
ScalaJS.c.java_lang_Character.prototype.$$up__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__B__I = (function(x) {
  return (this.value$1 + x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__S__I = (function(x) {
  return (this.value$1 + x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__C__I = (function(x) {
  return (this.value$1 + x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__I__I = (function(x) {
  return (this.value$1 + x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__F__F = (function(x) {
  return (this.value$1 + x)
});
ScalaJS.c.java_lang_Character.prototype.$$plus__D__D = (function(x) {
  return (this.value$1 + x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__B__I = (function(x) {
  return (this.value$1 - x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__S__I = (function(x) {
  return (this.value$1 - x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__C__I = (function(x) {
  return (this.value$1 - x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__I__I = (function(x) {
  return (this.value$1 - x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__F__F = (function(x) {
  return (this.value$1 - x)
});
ScalaJS.c.java_lang_Character.prototype.$$minus__D__D = (function(x) {
  return (this.value$1 - x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__B__I = (function(x) {
  return (this.value$1 * x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__S__I = (function(x) {
  return (this.value$1 * x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__C__I = (function(x) {
  return (this.value$1 * x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__I__I = (function(x) {
  return (this.value$1 * x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__F__F = (function(x) {
  return (this.value$1 * x)
});
ScalaJS.c.java_lang_Character.prototype.$$times__D__D = (function(x) {
  return (this.value$1 * x)
});
ScalaJS.c.java_lang_Character.prototype.$$div__B__I = (function(x) {
  return ((this.value$1 / x) | 0)
});
ScalaJS.c.java_lang_Character.prototype.$$div__S__I = (function(x) {
  return ((this.value$1 / x) | 0)
});
ScalaJS.c.java_lang_Character.prototype.$$div__C__I = (function(x) {
  return ((this.value$1 / x) | 0)
});
ScalaJS.c.java_lang_Character.prototype.$$div__I__I = (function(x) {
  return ((this.value$1 / x) | 0)
});
ScalaJS.c.java_lang_Character.prototype.$$div__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$div__F__F = (function(x) {
  return (this.value$1 / x)
});
ScalaJS.c.java_lang_Character.prototype.$$div__D__D = (function(x) {
  return (this.value$1 / x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__B__I = (function(x) {
  return (this.value$1 % x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__S__I = (function(x) {
  return (this.value$1 % x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__C__I = (function(x) {
  return (this.value$1 % x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__I__I = (function(x) {
  return (this.value$1 % x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__J__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(this.value$1).$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__F__F = (function(x) {
  return (this.value$1 % x)
});
ScalaJS.c.java_lang_Character.prototype.$$percent__D__D = (function(x) {
  return (this.value$1 % x)
});
ScalaJS.c.java_lang_Character.prototype.init___C = (function(value) {
  this.value$1 = value;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  return this
});
ScalaJS.c.java_lang_Character.prototype.$$percent__D__ = (function(x) {
  return ScalaJS.bD(this.$$percent__D__D(x))
});
ScalaJS.c.java_lang_Character.prototype.$$percent__F__ = (function(x$2) {
  return ScalaJS.bF(this.$$percent__F__F(x$2))
});
ScalaJS.c.java_lang_Character.prototype.$$percent__J__ = (function(x$3) {
  return ScalaJS.bJ(this.$$percent__J__J(x$3))
});
ScalaJS.c.java_lang_Character.prototype.$$percent__I__ = (function(x$4) {
  return ScalaJS.bI(this.$$percent__I__I(x$4))
});
ScalaJS.c.java_lang_Character.prototype.$$percent__C__ = (function(x$5) {
  return ScalaJS.bI(this.$$percent__C__I(x$5))
});
ScalaJS.c.java_lang_Character.prototype.$$percent__S__ = (function(x$6) {
  return ScalaJS.bI(this.$$percent__S__I(x$6))
});
ScalaJS.c.java_lang_Character.prototype.$$percent__B__ = (function(x$7) {
  return ScalaJS.bI(this.$$percent__B__I(x$7))
});
ScalaJS.c.java_lang_Character.prototype.$$div__D__ = (function(x$8) {
  return ScalaJS.bD(this.$$div__D__D(x$8))
});
ScalaJS.c.java_lang_Character.prototype.$$div__F__ = (function(x$9) {
  return ScalaJS.bF(this.$$div__F__F(x$9))
});
ScalaJS.c.java_lang_Character.prototype.$$div__J__ = (function(x$10) {
  return ScalaJS.bJ(this.$$div__J__J(x$10))
});
ScalaJS.c.java_lang_Character.prototype.$$div__I__ = (function(x$11) {
  return ScalaJS.bI(this.$$div__I__I(x$11))
});
ScalaJS.c.java_lang_Character.prototype.$$div__C__ = (function(x$12) {
  return ScalaJS.bI(this.$$div__C__I(x$12))
});
ScalaJS.c.java_lang_Character.prototype.$$div__S__ = (function(x$13) {
  return ScalaJS.bI(this.$$div__S__I(x$13))
});
ScalaJS.c.java_lang_Character.prototype.$$div__B__ = (function(x$14) {
  return ScalaJS.bI(this.$$div__B__I(x$14))
});
ScalaJS.c.java_lang_Character.prototype.$$times__D__ = (function(x$15) {
  return ScalaJS.bD(this.$$times__D__D(x$15))
});
ScalaJS.c.java_lang_Character.prototype.$$times__F__ = (function(x$16) {
  return ScalaJS.bF(this.$$times__F__F(x$16))
});
ScalaJS.c.java_lang_Character.prototype.$$times__J__ = (function(x$17) {
  return ScalaJS.bJ(this.$$times__J__J(x$17))
});
ScalaJS.c.java_lang_Character.prototype.$$times__I__ = (function(x$18) {
  return ScalaJS.bI(this.$$times__I__I(x$18))
});
ScalaJS.c.java_lang_Character.prototype.$$times__C__ = (function(x$19) {
  return ScalaJS.bI(this.$$times__C__I(x$19))
});
ScalaJS.c.java_lang_Character.prototype.$$times__S__ = (function(x$20) {
  return ScalaJS.bI(this.$$times__S__I(x$20))
});
ScalaJS.c.java_lang_Character.prototype.$$times__B__ = (function(x$21) {
  return ScalaJS.bI(this.$$times__B__I(x$21))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__D__ = (function(x$22) {
  return ScalaJS.bD(this.$$minus__D__D(x$22))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__F__ = (function(x$23) {
  return ScalaJS.bF(this.$$minus__F__F(x$23))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__J__ = (function(x$24) {
  return ScalaJS.bJ(this.$$minus__J__J(x$24))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__I__ = (function(x$25) {
  return ScalaJS.bI(this.$$minus__I__I(x$25))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__C__ = (function(x$26) {
  return ScalaJS.bI(this.$$minus__C__I(x$26))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__S__ = (function(x$27) {
  return ScalaJS.bI(this.$$minus__S__I(x$27))
});
ScalaJS.c.java_lang_Character.prototype.$$minus__B__ = (function(x$28) {
  return ScalaJS.bI(this.$$minus__B__I(x$28))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__D__ = (function(x$29) {
  return ScalaJS.bD(this.$$plus__D__D(x$29))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__F__ = (function(x$30) {
  return ScalaJS.bF(this.$$plus__F__F(x$30))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__J__ = (function(x$31) {
  return ScalaJS.bJ(this.$$plus__J__J(x$31))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__I__ = (function(x$32) {
  return ScalaJS.bI(this.$$plus__I__I(x$32))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__C__ = (function(x$33) {
  return ScalaJS.bI(this.$$plus__C__I(x$33))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__S__ = (function(x$34) {
  return ScalaJS.bI(this.$$plus__S__I(x$34))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__B__ = (function(x$35) {
  return ScalaJS.bI(this.$$plus__B__I(x$35))
});
ScalaJS.c.java_lang_Character.prototype.$$up__J__ = (function(x$36) {
  return ScalaJS.bJ(this.$$up__J__J(x$36))
});
ScalaJS.c.java_lang_Character.prototype.$$up__I__ = (function(x$37) {
  return ScalaJS.bI(this.$$up__I__I(x$37))
});
ScalaJS.c.java_lang_Character.prototype.$$up__C__ = (function(x$38) {
  return ScalaJS.bI(this.$$up__C__I(x$38))
});
ScalaJS.c.java_lang_Character.prototype.$$up__S__ = (function(x$39) {
  return ScalaJS.bI(this.$$up__S__I(x$39))
});
ScalaJS.c.java_lang_Character.prototype.$$up__B__ = (function(x$40) {
  return ScalaJS.bI(this.$$up__B__I(x$40))
});
ScalaJS.c.java_lang_Character.prototype.$$amp__J__ = (function(x$41) {
  return ScalaJS.bJ(this.$$amp__J__J(x$41))
});
ScalaJS.c.java_lang_Character.prototype.$$amp__I__ = (function(x$42) {
  return ScalaJS.bI(this.$$amp__I__I(x$42))
});
ScalaJS.c.java_lang_Character.prototype.$$amp__C__ = (function(x$43) {
  return ScalaJS.bI(this.$$amp__C__I(x$43))
});
ScalaJS.c.java_lang_Character.prototype.$$amp__S__ = (function(x$44) {
  return ScalaJS.bI(this.$$amp__S__I(x$44))
});
ScalaJS.c.java_lang_Character.prototype.$$amp__B__ = (function(x$45) {
  return ScalaJS.bI(this.$$amp__B__I(x$45))
});
ScalaJS.c.java_lang_Character.prototype.$$bar__J__ = (function(x$46) {
  return ScalaJS.bJ(this.$$bar__J__J(x$46))
});
ScalaJS.c.java_lang_Character.prototype.$$bar__I__ = (function(x$47) {
  return ScalaJS.bI(this.$$bar__I__I(x$47))
});
ScalaJS.c.java_lang_Character.prototype.$$bar__C__ = (function(x$48) {
  return ScalaJS.bI(this.$$bar__C__I(x$48))
});
ScalaJS.c.java_lang_Character.prototype.$$bar__S__ = (function(x$49) {
  return ScalaJS.bI(this.$$bar__S__I(x$49))
});
ScalaJS.c.java_lang_Character.prototype.$$bar__B__ = (function(x$50) {
  return ScalaJS.bI(this.$$bar__B__I(x$50))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__D__ = (function(x$51) {
  return ScalaJS.bZ(this.$$greater$eq__D__Z(x$51))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__F__ = (function(x$52) {
  return ScalaJS.bZ(this.$$greater$eq__F__Z(x$52))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__J__ = (function(x$53) {
  return ScalaJS.bZ(this.$$greater$eq__J__Z(x$53))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__I__ = (function(x$54) {
  return ScalaJS.bZ(this.$$greater$eq__I__Z(x$54))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__C__ = (function(x$55) {
  return ScalaJS.bZ(this.$$greater$eq__C__Z(x$55))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__S__ = (function(x$56) {
  return ScalaJS.bZ(this.$$greater$eq__S__Z(x$56))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$eq__B__ = (function(x$57) {
  return ScalaJS.bZ(this.$$greater$eq__B__Z(x$57))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__D__ = (function(x$58) {
  return ScalaJS.bZ(this.$$greater__D__Z(x$58))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__F__ = (function(x$59) {
  return ScalaJS.bZ(this.$$greater__F__Z(x$59))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__J__ = (function(x$60) {
  return ScalaJS.bZ(this.$$greater__J__Z(x$60))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__I__ = (function(x$61) {
  return ScalaJS.bZ(this.$$greater__I__Z(x$61))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__C__ = (function(x$62) {
  return ScalaJS.bZ(this.$$greater__C__Z(x$62))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__S__ = (function(x$63) {
  return ScalaJS.bZ(this.$$greater__S__Z(x$63))
});
ScalaJS.c.java_lang_Character.prototype.$$greater__B__ = (function(x$64) {
  return ScalaJS.bZ(this.$$greater__B__Z(x$64))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__D__ = (function(x$65) {
  return ScalaJS.bZ(this.$$less$eq__D__Z(x$65))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__F__ = (function(x$66) {
  return ScalaJS.bZ(this.$$less$eq__F__Z(x$66))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__J__ = (function(x$67) {
  return ScalaJS.bZ(this.$$less$eq__J__Z(x$67))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__I__ = (function(x$68) {
  return ScalaJS.bZ(this.$$less$eq__I__Z(x$68))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__C__ = (function(x$69) {
  return ScalaJS.bZ(this.$$less$eq__C__Z(x$69))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__S__ = (function(x$70) {
  return ScalaJS.bZ(this.$$less$eq__S__Z(x$70))
});
ScalaJS.c.java_lang_Character.prototype.$$less$eq__B__ = (function(x$71) {
  return ScalaJS.bZ(this.$$less$eq__B__Z(x$71))
});
ScalaJS.c.java_lang_Character.prototype.$$less__D__ = (function(x$72) {
  return ScalaJS.bZ(this.$$less__D__Z(x$72))
});
ScalaJS.c.java_lang_Character.prototype.$$less__F__ = (function(x$73) {
  return ScalaJS.bZ(this.$$less__F__Z(x$73))
});
ScalaJS.c.java_lang_Character.prototype.$$less__J__ = (function(x$74) {
  return ScalaJS.bZ(this.$$less__J__Z(x$74))
});
ScalaJS.c.java_lang_Character.prototype.$$less__I__ = (function(x$75) {
  return ScalaJS.bZ(this.$$less__I__Z(x$75))
});
ScalaJS.c.java_lang_Character.prototype.$$less__C__ = (function(x$76) {
  return ScalaJS.bZ(this.$$less__C__Z(x$76))
});
ScalaJS.c.java_lang_Character.prototype.$$less__S__ = (function(x$77) {
  return ScalaJS.bZ(this.$$less__S__Z(x$77))
});
ScalaJS.c.java_lang_Character.prototype.$$less__B__ = (function(x$78) {
  return ScalaJS.bZ(this.$$less__B__Z(x$78))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__D__ = (function(x$79) {
  return ScalaJS.bZ(this.$$bang$eq__D__Z(x$79))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__F__ = (function(x$80) {
  return ScalaJS.bZ(this.$$bang$eq__F__Z(x$80))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__J__ = (function(x$81) {
  return ScalaJS.bZ(this.$$bang$eq__J__Z(x$81))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__I__ = (function(x$82) {
  return ScalaJS.bZ(this.$$bang$eq__I__Z(x$82))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__C__ = (function(x$83) {
  return ScalaJS.bZ(this.$$bang$eq__C__Z(x$83))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__S__ = (function(x$84) {
  return ScalaJS.bZ(this.$$bang$eq__S__Z(x$84))
});
ScalaJS.c.java_lang_Character.prototype.$$bang$eq__B__ = (function(x$85) {
  return ScalaJS.bZ(this.$$bang$eq__B__Z(x$85))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__D__ = (function(x$86) {
  return ScalaJS.bZ(this.$$eq$eq__D__Z(x$86))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__F__ = (function(x$87) {
  return ScalaJS.bZ(this.$$eq$eq__F__Z(x$87))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__J__ = (function(x$88) {
  return ScalaJS.bZ(this.$$eq$eq__J__Z(x$88))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__I__ = (function(x$89) {
  return ScalaJS.bZ(this.$$eq$eq__I__Z(x$89))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__C__ = (function(x$90) {
  return ScalaJS.bZ(this.$$eq$eq__C__Z(x$90))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__S__ = (function(x$91) {
  return ScalaJS.bZ(this.$$eq$eq__S__Z(x$91))
});
ScalaJS.c.java_lang_Character.prototype.$$eq$eq__B__ = (function(x$92) {
  return ScalaJS.bZ(this.$$eq$eq__B__Z(x$92))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater__J__ = (function(x$93) {
  return ScalaJS.bI(this.$$greater$greater__J__I(x$93))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater__I__ = (function(x$94) {
  return ScalaJS.bI(this.$$greater$greater__I__I(x$94))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater$greater__J__ = (function(x$95) {
  return ScalaJS.bI(this.$$greater$greater$greater__J__I(x$95))
});
ScalaJS.c.java_lang_Character.prototype.$$greater$greater$greater__I__ = (function(x$96) {
  return ScalaJS.bI(this.$$greater$greater$greater__I__I(x$96))
});
ScalaJS.c.java_lang_Character.prototype.$$less$less__J__ = (function(x$97) {
  return ScalaJS.bI(this.$$less$less__J__I(x$97))
});
ScalaJS.c.java_lang_Character.prototype.$$less$less__I__ = (function(x$98) {
  return ScalaJS.bI(this.$$less$less__I__I(x$98))
});
ScalaJS.c.java_lang_Character.prototype.$$plus__T__ = (function(x$99) {
  return this.$$plus__T__T(x$99)
});
ScalaJS.c.java_lang_Character.prototype.unary$und$minus__ = (function() {
  return ScalaJS.bI(this.unary$und$minus__I())
});
ScalaJS.c.java_lang_Character.prototype.unary$und$plus__ = (function() {
  return ScalaJS.bI(this.unary$und$plus__I())
});
ScalaJS.c.java_lang_Character.prototype.unary$und$tilde__ = (function() {
  return ScalaJS.bI(this.unary$und$tilde__I())
});
ScalaJS.c.java_lang_Character.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.java_lang_Character.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.java_lang_Character.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.java_lang_Character.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.java_lang_Character.prototype.toChar__ = (function() {
  return ScalaJS.bC(this.toChar__C())
});
ScalaJS.c.java_lang_Character.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.java_lang_Character.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.java_lang_Character.prototype.charValue__ = (function() {
  return ScalaJS.bC(this.charValue__C())
});
/** @constructor */
ScalaJS.inheritable.java_lang_Character = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Character.prototype = ScalaJS.c.java_lang_Character.prototype;
ScalaJS.is.java_lang_Character = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Character)))
});
ScalaJS.as.java_lang_Character = (function(obj) {
  if ((ScalaJS.is.java_lang_Character(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Character")
  }
});
ScalaJS.isArrayOf.java_lang_Character = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Character)))
});
ScalaJS.asArrayOf.java_lang_Character = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Character(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Character;", depth)
  }
});
ScalaJS.data.java_lang_Character = new ScalaJS.ClassTypeData({
  java_lang_Character: 0
}, false, "java.lang.Character", ScalaJS.data.java_lang_Object, {
  java_lang_Character: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Character.prototype.$classData = ScalaJS.data.java_lang_Character;
//@ sourceMappingURL=Character.js.map
