/** @constructor */
ScalaJS.c.scala_concurrent_duration_FiniteDuration$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.max$undns$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.max$und\u00b5s$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.max$undms$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.max$unds$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.max$undmin$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.max$undh$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long();
  this.max$undd$1 = ScalaJS.modules.scala_scalajs_runtime_Long().zero__Lscala_scalajs_runtime_Long()
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_FiniteDuration$;
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function(length, unit$2) {
  return new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(length, unit$2)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.apply__J__T__Lscala_concurrent_duration_FiniteDuration = (function(length, unit) {
  return new ScalaJS.c.scala_concurrent_duration_FiniteDuration().init___J__Ljava_util_concurrent_TimeUnit(length, ScalaJS.as.java_util_concurrent_TimeUnit(ScalaJS.modules.scala_concurrent_duration_Duration().timeUnit__Lscala_collection_immutable_Map().apply__O__O(unit)))
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$undns__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 524287)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$und\u00b5s__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2315255, 1207959, 524)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$undms__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1071862, 2199023, 0)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$unds__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(97540, 2199, 0)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$undmin__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2727923, 36, 0)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$undh__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2562047, 0, 0)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.max$undd__p1__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(106751, 0, 0)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_concurrent_duration_FiniteDuration()
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.apply__J__T__ = (function(length, unit) {
  return this.apply__J__T__Lscala_concurrent_duration_FiniteDuration(length, unit)
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.apply__J__Ljava_util_concurrent_TimeUnit__ = (function(length$2, unit$2) {
  return this.apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(length$2, unit$2)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_FiniteDuration$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_FiniteDuration$.prototype = ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype;
ScalaJS.is.scala_concurrent_duration_FiniteDuration$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_FiniteDuration$)))
});
ScalaJS.as.scala_concurrent_duration_FiniteDuration$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_FiniteDuration$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.FiniteDuration")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_FiniteDuration$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_FiniteDuration$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_FiniteDuration$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_FiniteDuration$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.FiniteDuration;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_FiniteDuration$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_FiniteDuration$: 0
}, false, "scala.concurrent.duration.FiniteDuration$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_FiniteDuration$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_FiniteDuration$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_FiniteDuration$;
ScalaJS.moduleInstances.scala_concurrent_duration_FiniteDuration = undefined;
ScalaJS.modules.scala_concurrent_duration_FiniteDuration = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_FiniteDuration)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_FiniteDuration = new ScalaJS.c.scala_concurrent_duration_FiniteDuration$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_FiniteDuration
});
//@ sourceMappingURL=FiniteDuration$.js.map
