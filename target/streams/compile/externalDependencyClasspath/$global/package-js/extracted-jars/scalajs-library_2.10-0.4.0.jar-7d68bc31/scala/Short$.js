/** @constructor */
ScalaJS.c.scala_Short$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinValue$1 = 0;
  this.MaxValue$1 = 0
});
ScalaJS.c.scala_Short$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Short$.prototype.constructor = ScalaJS.c.scala_Short$;
ScalaJS.c.scala_Short$.prototype.MinValue__S = (function() {
  return -32768
});
ScalaJS.c.scala_Short$.prototype.MaxValue__S = (function() {
  return 32767
});
ScalaJS.c.scala_Short$.prototype.box__S__Ljava_lang_Short = (function(x) {
  return ScalaJS.modules.java_lang_Short().valueOf__S__Ljava_lang_Short(x)
});
ScalaJS.c.scala_Short$.prototype.unbox__O__S = (function(x) {
  return ScalaJS.as.java_lang_Short(x).shortValue__S()
});
ScalaJS.c.scala_Short$.prototype.toString__T = (function() {
  return "object scala.Short"
});
ScalaJS.c.scala_Short$.prototype.short2int__S__I = (function(x) {
  return x
});
ScalaJS.c.scala_Short$.prototype.short2long__S__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromShort__S__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Short$.prototype.short2float__S__F = (function(x) {
  return x
});
ScalaJS.c.scala_Short$.prototype.short2double__S__D = (function(x) {
  return x
});
ScalaJS.c.scala_Short$.prototype.short2double__S__ = (function(x) {
  return ScalaJS.bD(this.short2double__S__D(x))
});
ScalaJS.c.scala_Short$.prototype.short2float__S__ = (function(x$2) {
  return ScalaJS.bF(this.short2float__S__F(x$2))
});
ScalaJS.c.scala_Short$.prototype.short2long__S__ = (function(x$3) {
  return ScalaJS.bJ(this.short2long__S__J(x$3))
});
ScalaJS.c.scala_Short$.prototype.short2int__S__ = (function(x$4) {
  return ScalaJS.bI(this.short2int__S__I(x$4))
});
ScalaJS.c.scala_Short$.prototype.unbox__O__ = (function(x$5) {
  return ScalaJS.bS(this.unbox__O__S(x$5))
});
ScalaJS.c.scala_Short$.prototype.box__S__ = (function(x$6) {
  return this.box__S__Ljava_lang_Short(x$6)
});
ScalaJS.c.scala_Short$.prototype.MaxValue__ = (function() {
  return ScalaJS.bS(this.MaxValue__S())
});
ScalaJS.c.scala_Short$.prototype.MinValue__ = (function() {
  return ScalaJS.bS(this.MinValue__S())
});
/** @constructor */
ScalaJS.inheritable.scala_Short$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Short$.prototype = ScalaJS.c.scala_Short$.prototype;
ScalaJS.is.scala_Short$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Short$)))
});
ScalaJS.as.scala_Short$ = (function(obj) {
  if ((ScalaJS.is.scala_Short$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Short")
  }
});
ScalaJS.isArrayOf.scala_Short$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Short$)))
});
ScalaJS.asArrayOf.scala_Short$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Short$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Short;", depth)
  }
});
ScalaJS.data.scala_Short$ = new ScalaJS.ClassTypeData({
  scala_Short$: 0
}, false, "scala.Short$", ScalaJS.data.java_lang_Object, {
  scala_Short$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Short$.prototype.$classData = ScalaJS.data.scala_Short$;
ScalaJS.moduleInstances.scala_Short = undefined;
ScalaJS.modules.scala_Short = (function() {
  if ((!ScalaJS.moduleInstances.scala_Short)) {
    ScalaJS.moduleInstances.scala_Short = new ScalaJS.c.scala_Short$().init___()
  };
  return ScalaJS.moduleInstances.scala_Short
});
//@ sourceMappingURL=Short$.js.map
