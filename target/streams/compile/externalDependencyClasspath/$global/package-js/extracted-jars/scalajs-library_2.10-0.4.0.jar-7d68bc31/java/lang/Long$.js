/** @constructor */
ScalaJS.c.java_lang_Long$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.MIN$undVALUE$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.MAX$undVALUE$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.SIZE$1 = 0
});
ScalaJS.c.java_lang_Long$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Long$.prototype.constructor = ScalaJS.c.java_lang_Long$;
ScalaJS.c.java_lang_Long$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Long$.prototype.MIN$undVALUE__J = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Long$.prototype.MAX$undVALUE__J = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Long$.prototype.SIZE__I = (function() {
  return this.SIZE$1
});
ScalaJS.c.java_lang_Long$.prototype.valueOf__J__Ljava_lang_Long = (function(longValue) {
  return new ScalaJS.c.java_lang_Long().init___J(longValue)
});
ScalaJS.c.java_lang_Long$.prototype.parseLong__T__J = (function(s) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromString__T__Lscala_scalajs_runtime_Long(s)
});
ScalaJS.c.java_lang_Long$.prototype.toString__J__T = (function(l) {
  return l.toString__T()
});
ScalaJS.c.java_lang_Long$.prototype.bitCount__J__I = (function(i) {
  return i.bitCount__I()
});
ScalaJS.c.java_lang_Long$.prototype.reverseBytes__J__J = (function(i) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Long$.prototype.rotateLeft__J__I__J = (function(i, distance) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Long$.prototype.rotateRight__J__I__J = (function(i, distance) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Long$.prototype.signum__J__J = (function(i) {
  if (i.equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
  } else {
    if (i.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))) {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 1048575)
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0)
    }
  }
});
ScalaJS.c.java_lang_Long$.prototype.numberOfLeadingZeros__J__I = (function(l) {
  return l.numberOfLeadingZeros__I()
});
ScalaJS.c.java_lang_Long$.prototype.toBinaryString__J__T = (function(l) {
  return this.dropLZ__p1__Lscala_scalajs_js_String__Lscala_scalajs_js_String(l.toBinaryString__T())
});
ScalaJS.c.java_lang_Long$.prototype.toHexString__J__T = (function(l) {
  return this.dropLZ__p1__Lscala_scalajs_js_String__Lscala_scalajs_js_String(l.toHexString__T())
});
ScalaJS.c.java_lang_Long$.prototype.toOctalString__J__T = (function(l) {
  return this.dropLZ__p1__Lscala_scalajs_js_String__Lscala_scalajs_js_String(l.toOctalString__T())
});
ScalaJS.c.java_lang_Long$.prototype.dropLZ__p1__Lscala_scalajs_js_String__Lscala_scalajs_js_String = (function(s) {
  var i = 0;
  while (("0" === s["charAt"](i))) {
    i = (i + 1)
  };
  return s["substring"](ScalaJS.modules.java_lang_Math().min__D__D__D(i, (s["length"] - 1)))
});
ScalaJS.c.java_lang_Long$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Long = this;
  this.TYPE$1 = ScalaJS.data.scala_Long.getClassOf();
  this.MIN$undVALUE$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288);
  this.MAX$undVALUE$1 = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287);
  this.SIZE$1 = 64;
  return this
});
ScalaJS.c.java_lang_Long$.prototype.toOctalString__J__ = (function(l) {
  return this.toOctalString__J__T(l)
});
ScalaJS.c.java_lang_Long$.prototype.toHexString__J__ = (function(l$2) {
  return this.toHexString__J__T(l$2)
});
ScalaJS.c.java_lang_Long$.prototype.toBinaryString__J__ = (function(l$3) {
  return this.toBinaryString__J__T(l$3)
});
ScalaJS.c.java_lang_Long$.prototype.numberOfLeadingZeros__J__ = (function(l$4) {
  return ScalaJS.bI(this.numberOfLeadingZeros__J__I(l$4))
});
ScalaJS.c.java_lang_Long$.prototype.signum__J__ = (function(i) {
  return ScalaJS.bJ(this.signum__J__J(i))
});
ScalaJS.c.java_lang_Long$.prototype.rotateRight__J__I__ = (function(i$2, distance) {
  return ScalaJS.bJ(this.rotateRight__J__I__J(i$2, distance))
});
ScalaJS.c.java_lang_Long$.prototype.rotateLeft__J__I__ = (function(i$3, distance$2) {
  return ScalaJS.bJ(this.rotateLeft__J__I__J(i$3, distance$2))
});
ScalaJS.c.java_lang_Long$.prototype.reverseBytes__J__ = (function(i$4) {
  return ScalaJS.bJ(this.reverseBytes__J__J(i$4))
});
ScalaJS.c.java_lang_Long$.prototype.bitCount__J__ = (function(i$5) {
  return ScalaJS.bI(this.bitCount__J__I(i$5))
});
ScalaJS.c.java_lang_Long$.prototype.toString__J__ = (function(l$5) {
  return this.toString__J__T(l$5)
});
ScalaJS.c.java_lang_Long$.prototype.parseLong__T__ = (function(s) {
  return ScalaJS.bJ(this.parseLong__T__J(s))
});
ScalaJS.c.java_lang_Long$.prototype.valueOf__J__ = (function(longValue) {
  return this.valueOf__J__Ljava_lang_Long(longValue)
});
ScalaJS.c.java_lang_Long$.prototype.SIZE__ = (function() {
  return ScalaJS.bI(this.SIZE__I())
});
ScalaJS.c.java_lang_Long$.prototype.MAX$undVALUE__ = (function() {
  return ScalaJS.bJ(this.MAX$undVALUE__J())
});
ScalaJS.c.java_lang_Long$.prototype.MIN$undVALUE__ = (function() {
  return ScalaJS.bJ(this.MIN$undVALUE__J())
});
ScalaJS.c.java_lang_Long$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Long$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Long$.prototype = ScalaJS.c.java_lang_Long$.prototype;
ScalaJS.is.java_lang_Long$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Long$)))
});
ScalaJS.as.java_lang_Long$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Long$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Long")
  }
});
ScalaJS.isArrayOf.java_lang_Long$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Long$)))
});
ScalaJS.asArrayOf.java_lang_Long$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Long$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Long;", depth)
  }
});
ScalaJS.data.java_lang_Long$ = new ScalaJS.ClassTypeData({
  java_lang_Long$: 0
}, false, "java.lang.Long$", ScalaJS.data.java_lang_Object, {
  java_lang_Long$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Long$.prototype.$classData = ScalaJS.data.java_lang_Long$;
ScalaJS.moduleInstances.java_lang_Long = undefined;
ScalaJS.modules.java_lang_Long = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Long)) {
    ScalaJS.moduleInstances.java_lang_Long = new ScalaJS.c.java_lang_Long$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Long
});
//@ sourceMappingURL=Long$.js.map
