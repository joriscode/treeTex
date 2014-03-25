/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6 = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.call(this)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype = new ScalaJS.inheritable.java_util_concurrent_TimeUnit();
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6;
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.convert__J__Ljava_util_concurrent_TimeUnit__J = (function(a, u) {
  return u.toHours__J__J(a)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toNanos__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3710976, 858306, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2562047, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toMicros__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1287168, 858, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3522348, 610, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toMillis__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3600000, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3326959, 610839, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toSeconds__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3600, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(876143, 2665713, 145))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toMinutes__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2236962, 559240, 8738))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toHours__J__J = (function(a) {
  return a
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.toDays__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(24, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.init___ = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.prototype.init___I__T.call(this, 5, "HOURS");
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$6 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$6.prototype = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit$$anon$6 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit$$anon$6)))
});
ScalaJS.as.java_util_concurrent_TimeUnit$$anon$6 = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit$$anon$6(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit$$anon$6")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$6 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit$$anon$6)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit$$anon$6 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$6(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit$$anon$6;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit$$anon$6 = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit$$anon$6: 0
}, false, "java.util.concurrent.TimeUnit$$anon$6", ScalaJS.data.java_util_concurrent_TimeUnit, {
  java_util_concurrent_TimeUnit$$anon$6: 1,
  java_util_concurrent_TimeUnit: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$6.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit$$anon$6;
//@ sourceMappingURL=TimeUnit$$anon$6.js.map
