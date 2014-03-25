/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4 = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.call(this)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype = new ScalaJS.inheritable.java_util_concurrent_TimeUnit();
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4;
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.convert__J__Ljava_util_concurrent_TimeUnit__J = (function(a, u) {
  return u.toSeconds__J__J(a)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toNanos__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1755648, 238, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(97540, 2199, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toMicros__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1071862, 2199023, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toMillis__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2315255, 1207959, 524))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toSeconds__J__J = (function(a) {
  return a
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toMinutes__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toHours__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3600, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.toDays__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(86400, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.init___ = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.prototype.init___I__T.call(this, 3, "SECONDS");
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$4 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$4.prototype = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit$$anon$4 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit$$anon$4)))
});
ScalaJS.as.java_util_concurrent_TimeUnit$$anon$4 = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit$$anon$4(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit$$anon$4")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$4 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit$$anon$4)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit$$anon$4 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$4(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit$$anon$4;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit$$anon$4 = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit$$anon$4: 0
}, false, "java.util.concurrent.TimeUnit$$anon$4", ScalaJS.data.java_util_concurrent_TimeUnit, {
  java_util_concurrent_TimeUnit$$anon$4: 1,
  java_util_concurrent_TimeUnit: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$4.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit$$anon$4;
//@ sourceMappingURL=TimeUnit$$anon$4.js.map
