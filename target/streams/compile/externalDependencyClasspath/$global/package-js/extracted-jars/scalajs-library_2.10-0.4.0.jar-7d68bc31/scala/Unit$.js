/** @constructor */
ScalaJS.c.scala_Unit$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Unit$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Unit$.prototype.constructor = ScalaJS.c.scala_Unit$;
ScalaJS.c.scala_Unit$.prototype.box__Lscala_runtime_BoxedUnit__Lscala_runtime_BoxedUnit = (function(x) {
  return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
});
ScalaJS.c.scala_Unit$.prototype.unbox__O__V = (function(x) {
  /*<skip>*/
});
ScalaJS.c.scala_Unit$.prototype.toString__T = (function() {
  return "object scala.Unit"
});
ScalaJS.c.scala_Unit$.prototype.unbox__O__ = (function(x) {
  return ScalaJS.bV(this.unbox__O__V(x))
});
ScalaJS.c.scala_Unit$.prototype.box__Lscala_runtime_BoxedUnit__ = (function(x$2) {
  return this.box__Lscala_runtime_BoxedUnit__Lscala_runtime_BoxedUnit(x$2)
});
/** @constructor */
ScalaJS.inheritable.scala_Unit$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Unit$.prototype = ScalaJS.c.scala_Unit$.prototype;
ScalaJS.is.scala_Unit$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Unit$)))
});
ScalaJS.as.scala_Unit$ = (function(obj) {
  if ((ScalaJS.is.scala_Unit$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Unit")
  }
});
ScalaJS.isArrayOf.scala_Unit$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Unit$)))
});
ScalaJS.asArrayOf.scala_Unit$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Unit$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Unit;", depth)
  }
});
ScalaJS.data.scala_Unit$ = new ScalaJS.ClassTypeData({
  scala_Unit$: 0
}, false, "scala.Unit$", ScalaJS.data.java_lang_Object, {
  scala_Unit$: 1,
  scala_AnyValCompanion: 1,
  scala_Specializable: 1,
  scala_SpecializableCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Unit$.prototype.$classData = ScalaJS.data.scala_Unit$;
ScalaJS.moduleInstances.scala_Unit = undefined;
ScalaJS.modules.scala_Unit = (function() {
  if ((!ScalaJS.moduleInstances.scala_Unit)) {
    ScalaJS.moduleInstances.scala_Unit = new ScalaJS.c.scala_Unit$().init___()
  };
  return ScalaJS.moduleInstances.scala_Unit
});
//@ sourceMappingURL=Unit$.js.map
