/** @constructor */
ScalaJS.c.scala_Long$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinValue$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.MaxValue$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_Long$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Long$.prototype.constructor = ScalaJS.c.scala_Long$;
ScalaJS.c.scala_Long$.prototype.MinValue__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 524288)
});
ScalaJS.c.scala_Long$.prototype.MaxValue__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)
});
ScalaJS.c.scala_Long$.prototype.box__J__Ljava_lang_Long = (function(x) {
  return ScalaJS.modules.java_lang_Long().valueOf__J__Ljava_lang_Long(x)
});
ScalaJS.c.scala_Long$.prototype.unbox__O__J = (function(x) {
  return ScalaJS.as.java_lang_Long(x).longValue__J()
});
ScalaJS.c.scala_Long$.prototype.toString__T = (function() {
  return "object scala.Long"
});
ScalaJS.c.scala_Long$.prototype.long2float__J__F = (function(x) {
  return x.toFloat__F()
});
ScalaJS.c.scala_Long$.prototype.long2double__J__D = (function(x) {
  return x.toDouble__D()
});
ScalaJS.c.scala_Long$.prototype.long2double__J__ = (function(x) {
  return ScalaJS.bD(this.long2double__J__D(x))
});
ScalaJS.c.scala_Long$.prototype.long2float__J__ = (function(x$2) {
  return ScalaJS.bF(this.long2float__J__F(x$2))
});
ScalaJS.c.scala_Long$.prototype.unbox__O__ = (function(x$3) {
  return ScalaJS.bJ(this.unbox__O__J(x$3))
});
ScalaJS.c.scala_Long$.prototype.box__J__ = (function(x$4) {
  return this.box__J__Ljava_lang_Long(x$4)
});
ScalaJS.c.scala_Long$.prototype.MaxValue__ = (function() {
  return ScalaJS.bJ(this.MaxValue__J())
});
ScalaJS.c.scala_Long$.prototype.MinValue__ = (function() {
  return ScalaJS.bJ(this.MinValue__J())
});
/** @constructor */
ScalaJS.inheritable.scala_Long$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Long$.prototype = ScalaJS.c.scala_Long$.prototype;
ScalaJS.is.scala_Long$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Long$)))
});
ScalaJS.as.scala_Long$ = (function(obj) {
  if ((ScalaJS.is.scala_Long$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Long")
  }
});
ScalaJS.isArrayOf.scala_Long$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Long$)))
});
ScalaJS.asArrayOf.scala_Long$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Long$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Long;", depth)
  }
});
ScalaJS.data.scala_Long$ = new ScalaJS.ClassTypeData({
  scala_Long$: 0
}, false, "scala.Long$", ScalaJS.data.java_lang_Object, {
  scala_Long$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Long$.prototype.$classData = ScalaJS.data.scala_Long$;
ScalaJS.moduleInstances.scala_Long = undefined;
ScalaJS.modules.scala_Long = (function() {
  if ((!ScalaJS.moduleInstances.scala_Long)) {
    ScalaJS.moduleInstances.scala_Long = new ScalaJS.c.scala_Long$().init___()
  };
  return ScalaJS.moduleInstances.scala_Long
});
//@ sourceMappingURL=Long$.js.map
