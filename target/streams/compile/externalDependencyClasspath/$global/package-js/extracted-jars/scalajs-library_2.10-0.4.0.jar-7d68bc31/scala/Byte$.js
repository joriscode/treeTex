/** @constructor */
ScalaJS.c.scala_Byte$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.MinValue$1 = 0;
  this.MaxValue$1 = 0
});
ScalaJS.c.scala_Byte$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Byte$.prototype.constructor = ScalaJS.c.scala_Byte$;
ScalaJS.c.scala_Byte$.prototype.MinValue__B = (function() {
  return -128
});
ScalaJS.c.scala_Byte$.prototype.MaxValue__B = (function() {
  return 127
});
ScalaJS.c.scala_Byte$.prototype.box__B__Ljava_lang_Byte = (function(x) {
  return ScalaJS.modules.java_lang_Byte().valueOf__B__Ljava_lang_Byte(x)
});
ScalaJS.c.scala_Byte$.prototype.unbox__O__B = (function(x) {
  return ScalaJS.as.java_lang_Byte(x).byteValue__B()
});
ScalaJS.c.scala_Byte$.prototype.toString__T = (function() {
  return "object scala.Byte"
});
ScalaJS.c.scala_Byte$.prototype.byte2short__B__S = (function(x) {
  return x
});
ScalaJS.c.scala_Byte$.prototype.byte2int__B__I = (function(x) {
  return x
});
ScalaJS.c.scala_Byte$.prototype.byte2long__B__J = (function(x) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromByte__B__Lscala_scalajs_runtime_Long(x)
});
ScalaJS.c.scala_Byte$.prototype.byte2float__B__F = (function(x) {
  return x
});
ScalaJS.c.scala_Byte$.prototype.byte2double__B__D = (function(x) {
  return x
});
ScalaJS.c.scala_Byte$.prototype.byte2double__B__ = (function(x) {
  return ScalaJS.bD(this.byte2double__B__D(x))
});
ScalaJS.c.scala_Byte$.prototype.byte2float__B__ = (function(x$2) {
  return ScalaJS.bF(this.byte2float__B__F(x$2))
});
ScalaJS.c.scala_Byte$.prototype.byte2long__B__ = (function(x$3) {
  return ScalaJS.bJ(this.byte2long__B__J(x$3))
});
ScalaJS.c.scala_Byte$.prototype.byte2int__B__ = (function(x$4) {
  return ScalaJS.bI(this.byte2int__B__I(x$4))
});
ScalaJS.c.scala_Byte$.prototype.byte2short__B__ = (function(x$5) {
  return ScalaJS.bS(this.byte2short__B__S(x$5))
});
ScalaJS.c.scala_Byte$.prototype.unbox__O__ = (function(x$6) {
  return ScalaJS.bB(this.unbox__O__B(x$6))
});
ScalaJS.c.scala_Byte$.prototype.box__B__ = (function(x$7) {
  return this.box__B__Ljava_lang_Byte(x$7)
});
ScalaJS.c.scala_Byte$.prototype.MaxValue__ = (function() {
  return ScalaJS.bB(this.MaxValue__B())
});
ScalaJS.c.scala_Byte$.prototype.MinValue__ = (function() {
  return ScalaJS.bB(this.MinValue__B())
});
/** @constructor */
ScalaJS.inheritable.scala_Byte$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Byte$.prototype = ScalaJS.c.scala_Byte$.prototype;
ScalaJS.is.scala_Byte$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Byte$)))
});
ScalaJS.as.scala_Byte$ = (function(obj) {
  if ((ScalaJS.is.scala_Byte$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Byte")
  }
});
ScalaJS.isArrayOf.scala_Byte$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Byte$)))
});
ScalaJS.asArrayOf.scala_Byte$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Byte$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Byte;", depth)
  }
});
ScalaJS.data.scala_Byte$ = new ScalaJS.ClassTypeData({
  scala_Byte$: 0
}, false, "scala.Byte$", ScalaJS.data.java_lang_Object, {
  scala_Byte$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Byte$.prototype.$classData = ScalaJS.data.scala_Byte$;
ScalaJS.moduleInstances.scala_Byte = undefined;
ScalaJS.modules.scala_Byte = (function() {
  if ((!ScalaJS.moduleInstances.scala_Byte)) {
    ScalaJS.moduleInstances.scala_Byte = new ScalaJS.c.scala_Byte$().init___()
  };
  return ScalaJS.moduleInstances.scala_Byte
});
//@ sourceMappingURL=Byte$.js.map
