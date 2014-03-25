/** @constructor */
ScalaJS.c.java_lang_Float$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.TYPE$1 = null;
  this.POSITIVE$undINFINITY$1 = 0.0;
  this.NEGATIVE$undINFINITY$1 = 0.0;
  this.NaN$1 = 0.0;
  this.MAX$undVALUE$1 = 0.0;
  this.MIN$undNORMAL$1 = 0.0;
  this.MIN$undVALUE$1 = 0.0;
  this.MAX$undEXPONENT$1 = 0;
  this.MIN$undEXPONENT$1 = 0;
  this.SIZE$1 = 0
});
ScalaJS.c.java_lang_Float$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.java_lang_Float$.prototype.constructor = ScalaJS.c.java_lang_Float$;
ScalaJS.c.java_lang_Float$.prototype.TYPE__Ljava_lang_Class = (function() {
  return this.TYPE$1
});
ScalaJS.c.java_lang_Float$.prototype.POSITIVE$undINFINITY__F = (function() {
  return this.POSITIVE$undINFINITY$1
});
ScalaJS.c.java_lang_Float$.prototype.NEGATIVE$undINFINITY__F = (function() {
  return this.NEGATIVE$undINFINITY$1
});
ScalaJS.c.java_lang_Float$.prototype.NaN__F = (function() {
  return this.NaN$1
});
ScalaJS.c.java_lang_Float$.prototype.MAX$undVALUE__F = (function() {
  return this.MAX$undVALUE$1
});
ScalaJS.c.java_lang_Float$.prototype.MIN$undNORMAL__F = (function() {
  return this.MIN$undNORMAL$1
});
ScalaJS.c.java_lang_Float$.prototype.MIN$undVALUE__F = (function() {
  return this.MIN$undVALUE$1
});
ScalaJS.c.java_lang_Float$.prototype.MAX$undEXPONENT__I = (function() {
  return this.MAX$undEXPONENT$1
});
ScalaJS.c.java_lang_Float$.prototype.MIN$undEXPONENT__I = (function() {
  return this.MIN$undEXPONENT$1
});
ScalaJS.c.java_lang_Float$.prototype.SIZE__I = (function() {
  return this.SIZE$1
});
ScalaJS.c.java_lang_Float$.prototype.valueOf__F__Ljava_lang_Float = (function(floatValue) {
  return new ScalaJS.c.java_lang_Float().init___F(floatValue)
});
ScalaJS.c.java_lang_Float$.prototype.parseFloat__T__F = (function(s) {
  var res = ScalaJS.g["parseFloat"](s);
  if (((!ScalaJS.anyRefEqEq(s, "NaN")) && ScalaJS.g["isNaN"](res))) {
    throw new ScalaJS.c.java_lang_NumberFormatException().init___T(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["For input string: \"", "\""]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [s]))))
  } else {
    return res
  }
});
ScalaJS.c.java_lang_Float$.prototype.toString__F__T = (function(f) {
  return this.valueOf__F__Ljava_lang_Float(f).toString__T()
});
ScalaJS.c.java_lang_Float$.prototype.compare__F__F__I = (function(a, b) {
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
ScalaJS.c.java_lang_Float$.prototype.isNaN__F__Z = (function(v) {
  return ScalaJS.g["isNaN"](v)
});
ScalaJS.c.java_lang_Float$.prototype.isInfinite__F__Z = (function(v) {
  return ((!ScalaJS.g["isFinite"](v)) && (!ScalaJS.g["isNaN"](v)))
});
ScalaJS.c.java_lang_Float$.prototype.intBitsToFloat__I__F = (function(bits) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Float$.prototype.floatToIntBits__F__I = (function(value) {
  return ScalaJS.modules.scala_sys_package().error__T__Lscala_Nothing("unimplemented")
});
ScalaJS.c.java_lang_Float$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.java_lang_Float = this;
  this.TYPE$1 = ScalaJS.data.scala_Float.getClassOf();
  this.POSITIVE$undINFINITY$1 = ScalaJS.g["Number"]["POSITIVE_INFINITY"];
  this.NEGATIVE$undINFINITY$1 = ScalaJS.g["Number"]["NEGATIVE_INFINITY"];
  this.NaN$1 = ScalaJS.g["Number"]["NaN"];
  this.MAX$undVALUE$1 = ScalaJS.g["Number"]["MAX_VALUE"];
  this.MIN$undNORMAL$1 = 0.0;
  this.MIN$undVALUE$1 = ScalaJS.g["Number"]["MIN_VALUE"];
  this.MAX$undEXPONENT$1 = 127;
  this.MIN$undEXPONENT$1 = -126;
  this.SIZE$1 = 32;
  return this
});
ScalaJS.c.java_lang_Float$.prototype.floatToIntBits__F__ = (function(value) {
  return ScalaJS.bI(this.floatToIntBits__F__I(value))
});
ScalaJS.c.java_lang_Float$.prototype.intBitsToFloat__I__ = (function(bits) {
  return ScalaJS.bF(this.intBitsToFloat__I__F(bits))
});
ScalaJS.c.java_lang_Float$.prototype.isInfinite__F__ = (function(v) {
  return ScalaJS.bZ(this.isInfinite__F__Z(v))
});
ScalaJS.c.java_lang_Float$.prototype.isNaN__F__ = (function(v$2) {
  return ScalaJS.bZ(this.isNaN__F__Z(v$2))
});
ScalaJS.c.java_lang_Float$.prototype.compare__F__F__ = (function(a, b) {
  return ScalaJS.bI(this.compare__F__F__I(a, b))
});
ScalaJS.c.java_lang_Float$.prototype.toString__F__ = (function(f) {
  return this.toString__F__T(f)
});
ScalaJS.c.java_lang_Float$.prototype.parseFloat__T__ = (function(s) {
  return ScalaJS.bF(this.parseFloat__T__F(s))
});
ScalaJS.c.java_lang_Float$.prototype.valueOf__F__ = (function(floatValue) {
  return this.valueOf__F__Ljava_lang_Float(floatValue)
});
ScalaJS.c.java_lang_Float$.prototype.SIZE__ = (function() {
  return ScalaJS.bI(this.SIZE__I())
});
ScalaJS.c.java_lang_Float$.prototype.MIN$undEXPONENT__ = (function() {
  return ScalaJS.bI(this.MIN$undEXPONENT__I())
});
ScalaJS.c.java_lang_Float$.prototype.MAX$undEXPONENT__ = (function() {
  return ScalaJS.bI(this.MAX$undEXPONENT__I())
});
ScalaJS.c.java_lang_Float$.prototype.MIN$undVALUE__ = (function() {
  return ScalaJS.bF(this.MIN$undVALUE__F())
});
ScalaJS.c.java_lang_Float$.prototype.MIN$undNORMAL__ = (function() {
  return ScalaJS.bF(this.MIN$undNORMAL__F())
});
ScalaJS.c.java_lang_Float$.prototype.MAX$undVALUE__ = (function() {
  return ScalaJS.bF(this.MAX$undVALUE__F())
});
ScalaJS.c.java_lang_Float$.prototype.NaN__ = (function() {
  return ScalaJS.bF(this.NaN__F())
});
ScalaJS.c.java_lang_Float$.prototype.NEGATIVE$undINFINITY__ = (function() {
  return ScalaJS.bF(this.NEGATIVE$undINFINITY__F())
});
ScalaJS.c.java_lang_Float$.prototype.POSITIVE$undINFINITY__ = (function() {
  return ScalaJS.bF(this.POSITIVE$undINFINITY__F())
});
ScalaJS.c.java_lang_Float$.prototype.TYPE__ = (function() {
  return this.TYPE__Ljava_lang_Class()
});
/** @constructor */
ScalaJS.inheritable.java_lang_Float$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_lang_Float$.prototype = ScalaJS.c.java_lang_Float$.prototype;
ScalaJS.is.java_lang_Float$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Float$)))
});
ScalaJS.as.java_lang_Float$ = (function(obj) {
  if ((ScalaJS.is.java_lang_Float$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Float")
  }
});
ScalaJS.isArrayOf.java_lang_Float$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Float$)))
});
ScalaJS.asArrayOf.java_lang_Float$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Float$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Float;", depth)
  }
});
ScalaJS.data.java_lang_Float$ = new ScalaJS.ClassTypeData({
  java_lang_Float$: 0
}, false, "java.lang.Float$", ScalaJS.data.java_lang_Object, {
  java_lang_Float$: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_lang_Float$.prototype.$classData = ScalaJS.data.java_lang_Float$;
ScalaJS.moduleInstances.java_lang_Float = undefined;
ScalaJS.modules.java_lang_Float = (function() {
  if ((!ScalaJS.moduleInstances.java_lang_Float)) {
    ScalaJS.moduleInstances.java_lang_Float = new ScalaJS.c.java_lang_Float$().init___()
  };
  return ScalaJS.moduleInstances.java_lang_Float
});
//@ sourceMappingURL=Float$.js.map
