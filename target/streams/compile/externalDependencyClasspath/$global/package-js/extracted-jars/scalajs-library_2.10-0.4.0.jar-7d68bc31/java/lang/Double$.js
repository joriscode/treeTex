/** @constructor */
ScalaJS.c.java_lang_Double$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.POSITIVE$undINFINITY$1 = 0.0;
  this.NEGATIVE$undINFINITY$1 = 0.0;
  this.NaN$1 = 0.0;
  this.MAX$undVALUE$1 = null;
  this.MIN$undNORMAL$1 = 0.0;
  this.MIN$undVALUE$1 = null;
  this.MAX$undEXPONENT$1 = 0;
  this.MIN$undEXPONENT$1 = 0;
  this.SIZE$1 = 0
});
ScalaJS.c.java_lang_Double$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Double$.prototype.constructor = ScalaJS.c.java_lang_Double$;
ScalaJS.c.java_lang_Double$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Double$.prototype.POSITIVE$undINFINITY__D = (function() {
  return this.POSITIVE$undINFINITY$1
});
ScalaJS.c.java_lang_Double$.prototype.NEGATIVE$undINFINITY__D = (function() {
  return this.NEGATIVE$undINFINITY$1
});
ScalaJS.c.java_lang_Double$.prototype.NaN__D = (function() {
  return this.NaN$1
});
ScalaJS.c.java_lang_Double$.prototype.MAX$undVALUE__Lscala_scalajs_js_Number = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Double$.prototype.MIN$undNORMAL__D = (function() {
  return this.MIN$undNORMAL$1
});
ScalaJS.c.java_lang_Double$.prototype.MIN$undVALUE__Lscala_scalajs_js_Number = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Double$.prototype.MAX$undEXPONENT__I = (function() {
  return this.MAX$undEXPONENT$1
});
ScalaJS.c.java_lang_Double$.prototype.MIN$undEXPONENT__I = (function() {
  return this.MIN$undEXPONENT$1
});
ScalaJS.c.java_lang_Double$.prototype.SIZE__I = (function() {
  return this.SIZE$1
});
ScalaJS.c.java_lang_Double$.prototype.valueOf__D__Ljava_lang_Double = (function(doubleValue) {
  return new ScalaJS.c.java_lang_Double().init___D(doubleValue)
});
ScalaJS.c.java_lang_Double$.prototype.parseDouble__T__D = (function(s) {
  return ScalaJS.modules.java_lang_Float().parseFloat__T__F(s)
});
ScalaJS.c.java_lang_Double$.prototype.toString__D__T = (function(d) {
  return ScalaJS.modules.java_lang_Float().valueOf__F__Ljava_lang_Float(d).toString__T()
});
ScalaJS.c.java_lang_Double$.prototype.compare__D__D__I = (function(a, b) {
  if ((a === b)) {
    return 0
  } else {
    if ((a < b)) {
      return -1
    } else {
      return 1
    }
  }
});
ScalaJS.c.java_lang_Double$.prototype.isNaN__D__Z = (function(v) {
  return ScalaJS.g["isNaN"](v)
});
ScalaJS.c.java_lang_Double$.prototype.isInfinite__D__Z = (function(v) {
  return ((!ScalaJS.g["isFinite"](v)) && (!ScalaJS.g["isNaN"](v)))
});
ScalaJS.c.java_lang_Double$.prototype.longBitsToDouble__J__D = (function(bits) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Double$.prototype.doubleToLongBits__D__J = (function(value) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Double$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Double = this;
  this.TYPE$1 = ScalaJS.data.scala_Double.getClassOf();
  this.POSITIVE$undINFINITY$1 = ScalaJS.g["Number"]["POSITIVE_INFINITY"];
  this.NEGATIVE$undINFINITY$1 = ScalaJS.g["Number"]["NEGATIVE_INFINITY"];
  this.NaN$1 = ScalaJS.g["Number"]["NaN"];
  this.MAX$undVALUE$1 = ScalaJS.g["Number"]["MAX_VALUE"];
  this.MIN$undNORMAL$1 = 0.0;
  this.MIN$undVALUE$1 = ScalaJS.g["Number"]["MIN_VALUE"];
  this.MAX$undEXPONENT$1 = 1023;
  this.MIN$undEXPONENT$1 = -1022;
  this.SIZE$1 = 64;
  return this
});
ScalaJS.c.java_lang_Double$.prototype.doubleToLongBits__D__ = (function(value) {
  return ScalaJS.bJ(this.doubleToLongBits__D__J(value))
});
ScalaJS.c.java_lang_Double$.prototype.longBitsToDouble__J__ = (function(bits) {
  return ScalaJS.bD(this.longBitsToDouble__J__D(bits))
});
ScalaJS.c.java_lang_Double$.prototype.isInfinite__D__ = (function(v) {
  return ScalaJS.bZ(this.isInfinite__D__Z(v))
});
ScalaJS.c.java_lang_Double$.prototype.isNaN__D__ = (function(v$2) {
  return ScalaJS.bZ(this.isNaN__D__Z(v$2))
});
ScalaJS.c.java_lang_Double$.prototype.compare__D__D__ = (function(a, b) {
  return ScalaJS.bI(this.compare__D__D__I(a, b))
});
ScalaJS.c.java_lang_Double$.prototype.toString__D__ = (function(d) {
  return this.toString__D__T(d)
});
ScalaJS.c.java_lang_Double$.prototype.parseDouble__T__ = (function(s) {
  return ScalaJS.bD(this.parseDouble__T__D(s))
});
ScalaJS.c.java_lang_Double$.prototype.valueOf__D__ = (function(doubleValue) {
  return this.valueOf__D__Ljava_lang_Double(doubleValue)
});
ScalaJS.c.java_lang_Double$.prototype.SIZE__ = (function() {
  return ScalaJS.bI(this.SIZE__I())
});
ScalaJS.c.java_lang_Double$.prototype.MIN$undEXPONENT__ = (function() {
  return ScalaJS.bI(this.MIN$undEXPONENT__I())
});
ScalaJS.c.java_lang_Double$.prototype.MAX$undEXPONENT__ = (function() {
  return ScalaJS.bI(this.MAX$undEXPONENT__I())
});
ScalaJS.c.java_lang_Double$.prototype.MIN$undVALUE__ = (function() {
  return this.MIN$undVALUE__Lscala_scalajs_js_Number()
});
ScalaJS.c.java_lang_Double$.prototype.MIN$undNORMAL__ = (function() {
  return ScalaJS.bD(this.MIN$undNORMAL__D())
});
ScalaJS.c.java_lang_Double$.prototype.MAX$undVALUE__ = (function() {
  return this.MAX$undVALUE__Lscala_scalajs_js_Number()
});
ScalaJS.c.java_lang_Double$.prototype.NaN__ = (function() {
  return ScalaJS.bD(this.NaN__D())
});
ScalaJS.c.java_lang_Double$.prototype.NEGATIVE$undINFINITY__ = (function() {
  return ScalaJS.bD(this.NEGATIVE$undINFINITY__D())
});
ScalaJS.c.java_lang_Double$.prototype.POSITIVE$undINFINITY__ = (function() {
  return ScalaJS.bD(this.POSITIVE$undINFINITY__D())
});
ScalaJS.c.java_lang_Double$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Double$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Double$.prototype = ScalaJS.c.java_lang_Double$.prototype;
ScalaJS.is.java_lang_Double$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Double$)))
});
ScalaJS.as.java_lang_Double$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Double$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Double")
  }
});
ScalaJS.isArrayOf.java_lang_Double$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Double$)))
});
ScalaJS.asArrayOf.java_lang_Double$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Double$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Double;", depth)
  }
});
ScalaJS.data.java_lang_Double$ = new ScalaJS.ClassTypeData({
  java_lang_Double$: 0
}, false, "java.lang.Double$", ScalaJS.data.java_lang_Object, {
  java_lang_Double$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Double$.prototype.$classData = ScalaJS.data.java_lang_Double$;
ScalaJS.moduleInstances.java_lang_Double = undefined;
ScalaJS.modules.java_lang_Double = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Double)) {
    ScalaJS.moduleInstances.java_lang_Double = new ScalaJS.c.java_lang_Double$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Double
});
//@ sourceMappingURL=Double$.js.map
