/** @constructor */
ScalaJS.c.scala_Boolean$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Boolean$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Boolean$.prototype.constructor = ScalaJS.c.scala_Boolean$;
ScalaJS.c.scala_Boolean$.prototype.box__Z__Ljava_lang_Boolean = (function(x) {
  return ScalaJS.modules.java_lang_Boolean().valueOf__Z__Ljava_lang_Boolean(x)
});
ScalaJS.c.scala_Boolean$.prototype.unbox__O__Z = (function(x) {
  return ScalaJS.as.java_lang_Boolean(x).booleanValue__Z()
});
ScalaJS.c.scala_Boolean$.prototype.toString__T = (function() {
  return "object scala.Boolean"
});
ScalaJS.c.scala_Boolean$.prototype.unbox__O__ = (function(x) {
  return ScalaJS.bZ(this.unbox__O__Z(x))
});
ScalaJS.c.scala_Boolean$.prototype.box__Z__ = (function(x$2) {
  return this.box__Z__Ljava_lang_Boolean(x$2)
});
/** @constructor */
ScalaJS.inheritable.scala_Boolean$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Boolean$.prototype = ScalaJS.c.scala_Boolean$.prototype;
ScalaJS.is.scala_Boolean$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Boolean$)))
});
ScalaJS.as.scala_Boolean$ = (function(obj) {
  if ((ScalaJS.is.scala_Boolean$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Boolean")
  }
});
ScalaJS.isArrayOf.scala_Boolean$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Boolean$)))
});
ScalaJS.asArrayOf.scala_Boolean$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Boolean$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Boolean;", depth)
  }
});
ScalaJS.data.scala_Boolean$ = new ScalaJS.ClassTypeData({
  scala_Boolean$: 0
}, false, "scala.Boolean$", ScalaJS.data.java_lang_Object, {
  scala_Boolean$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Boolean$.prototype.$classData = ScalaJS.data.scala_Boolean$;
ScalaJS.moduleInstances.scala_Boolean = undefined;
ScalaJS.modules.scala_Boolean = (function() {
  if ((!ScalaJS.moduleInstances.scala_Boolean)) {
    ScalaJS.moduleInstances.scala_Boolean = new ScalaJS.c.scala_Boolean$().init___()
  };
  return ScalaJS.moduleInstances.scala_Boolean
});
//@ sourceMappingURL=Boolean$.js.map
