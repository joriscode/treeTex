/** @constructor */
ScalaJS.c.scala_Int$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinValue$1 = 0;
  this.MaxValue$1 = 0
});
ScalaJS.c.scala_Int$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Int$.prototype.constructor = ScalaJS.c.scala_Int$;
ScalaJS.c.scala_Int$.prototype.MinValue__I = (function() {
  return -2147483648
});
ScalaJS.c.scala_Int$.prototype.MaxValue__I = (function() {
  return 2147483647
});
ScalaJS.c.scala_Int$.prototype.box__I__Ljava_lang_Integer = (function(x) {
  return ScalaJS.modules.java_lang_Integer().valueOf__I__Ljava_lang_Integer(x)
});
ScalaJS.c.scala_Int$.prototype.unbox__O__I = (function(x) {
  return ScalaJS.as.java_lang_Integer(x).intValue__I()
});
ScalaJS.c.scala_Int$.prototype.toString__T = (function() {
  return "object scala.Int"
});
ScalaJS.c.scala_Int$.prototype.int2long__I__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Int$.prototype.int2float__I__F = (function(x) {
  return x
});
ScalaJS.c.scala_Int$.prototype.int2double__I__D = (function(x) {
  return x
});
ScalaJS.c.scala_Int$.prototype.int2double__I__ = (function(x) {
  return ScalaJS.bD(this.int2double__I__D(x))
});
ScalaJS.c.scala_Int$.prototype.int2float__I__ = (function(x$2) {
  return ScalaJS.bF(this.int2float__I__F(x$2))
});
ScalaJS.c.scala_Int$.prototype.int2long__I__ = (function(x$3) {
  return ScalaJS.bJ(this.int2long__I__J(x$3))
});
ScalaJS.c.scala_Int$.prototype.unbox__O__ = (function(x$4) {
  return ScalaJS.bI(this.unbox__O__I(x$4))
});
ScalaJS.c.scala_Int$.prototype.box__I__ = (function(x$5) {
  return this.box__I__Ljava_lang_Integer(x$5)
});
ScalaJS.c.scala_Int$.prototype.MaxValue__ = (function() {
  return ScalaJS.bI(this.MaxValue__I())
});
ScalaJS.c.scala_Int$.prototype.MinValue__ = (function() {
  return ScalaJS.bI(this.MinValue__I())
});
/** @constructor */
ScalaJS.inheritable.scala_Int$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Int$.prototype = ScalaJS.c.scala_Int$.prototype;
ScalaJS.is.scala_Int$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Int$)))
});
ScalaJS.as.scala_Int$ = (function(obj) {
  if ((ScalaJS.is.scala_Int$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Int")
  }
});
ScalaJS.isArrayOf.scala_Int$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Int$)))
});
ScalaJS.asArrayOf.scala_Int$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Int$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Int;", depth)
  }
});
ScalaJS.data.scala_Int$ = new ScalaJS.ClassTypeData({
  scala_Int$: 0
}, false, "scala.Int$", ScalaJS.data.java_lang_Object, {
  scala_Int$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Int$.prototype.$classData = ScalaJS.data.scala_Int$;
ScalaJS.moduleInstances.scala_Int = undefined;
ScalaJS.modules.scala_Int = (function() {
  if ((!ScalaJS.moduleInstances.scala_Int)) {
    ScalaJS.moduleInstances.scala_Int = new ScalaJS.c.scala_Int$().init___()
  };
  return ScalaJS.moduleInstances.scala_Int
});
//@ sourceMappingURL=Int$.js.map
