/** @constructor */
ScalaJS.c.scala_Char$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinValue$1 = 0;
  this.MaxValue$1 = 0
});
ScalaJS.c.scala_Char$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Char$.prototype.constructor = ScalaJS.c.scala_Char$;
ScalaJS.c.scala_Char$.prototype.MinValue__C = (function() {
  return 0
});
ScalaJS.c.scala_Char$.prototype.MaxValue__C = (function() {
  return 65535
});
ScalaJS.c.scala_Char$.prototype.box__C__Ljava_lang_Character = (function(x) {
  return ScalaJS.modules.java_lang_Character().valueOf__C__Ljava_lang_Character(x)
});
ScalaJS.c.scala_Char$.prototype.unbox__O__C = (function(x) {
  return ScalaJS.as.java_lang_Character(x).charValue__C()
});
ScalaJS.c.scala_Char$.prototype.toString__T = (function() {
  return "object scala.Char"
});
ScalaJS.c.scala_Char$.prototype.char2int__C__I = (function(x) {
  return x
});
ScalaJS.c.scala_Char$.prototype.char2long__C__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromChar__C__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Char$.prototype.char2float__C__F = (function(x) {
  return x
});
ScalaJS.c.scala_Char$.prototype.char2double__C__D = (function(x) {
  return x
});
ScalaJS.c.scala_Char$.prototype.char2double__C__ = (function(x) {
  return ScalaJS.bD(this.char2double__C__D(x))
});
ScalaJS.c.scala_Char$.prototype.char2float__C__ = (function(x$2) {
  return ScalaJS.bF(this.char2float__C__F(x$2))
});
ScalaJS.c.scala_Char$.prototype.char2long__C__ = (function(x$3) {
  return ScalaJS.bJ(this.char2long__C__J(x$3))
});
ScalaJS.c.scala_Char$.prototype.char2int__C__ = (function(x$4) {
  return ScalaJS.bI(this.char2int__C__I(x$4))
});
ScalaJS.c.scala_Char$.prototype.unbox__O__ = (function(x$5) {
  return ScalaJS.bC(this.unbox__O__C(x$5))
});
ScalaJS.c.scala_Char$.prototype.box__C__ = (function(x$6) {
  return this.box__C__Ljava_lang_Character(x$6)
});
ScalaJS.c.scala_Char$.prototype.MaxValue__ = (function() {
  return ScalaJS.bC(this.MaxValue__C())
});
ScalaJS.c.scala_Char$.prototype.MinValue__ = (function() {
  return ScalaJS.bC(this.MinValue__C())
});
/** @constructor */
ScalaJS.inheritable.scala_Char$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Char$.prototype = ScalaJS.c.scala_Char$.prototype;
ScalaJS.is.scala_Char$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Char$)))
});
ScalaJS.as.scala_Char$ = (function(obj) {
  if ((ScalaJS.is.scala_Char$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Char")
  }
});
ScalaJS.isArrayOf.scala_Char$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Char$)))
});
ScalaJS.asArrayOf.scala_Char$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Char$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Char;", depth)
  }
});
ScalaJS.data.scala_Char$ = new ScalaJS.ClassTypeData({
  scala_Char$: 0
}, false, "scala.Char$", ScalaJS.data.java_lang_Object, {
  scala_Char$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Char$.prototype.$classData = ScalaJS.data.scala_Char$;
ScalaJS.moduleInstances.scala_Char = undefined;
ScalaJS.modules.scala_Char = (function() {
  if ((!ScalaJS.moduleInstances.scala_Char)) {
    ScalaJS.moduleInstances.scala_Char = new ScalaJS.c.scala_Char$().init___()
  };
  return ScalaJS.moduleInstances.scala_Char
});
//@ sourceMappingURL=Char$.js.map
