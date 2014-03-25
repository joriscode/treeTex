/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5 = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.call(this)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype = new ScalaJS.inheritable.java_util_concurrent_TimeUnit();
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5;
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.convert__J__Ljava_util_concurrent_TimeUnit__J = (function(a, u) {
  return u.toMinutes__J__J(a)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toNanos__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(481280, 14305, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2727923, 36, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toMicros__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1279744, 14, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1625680, 36650, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toMillis__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60000, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2485264, 3095955, 8))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toSeconds__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2236962, 559240, 8738))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toMinutes__J__J = (function(a) {
  return a
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toHours__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.toDays__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1440, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.init___ = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.prototype.init___I__T.call(this, 4, "MINUTES");
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$5 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$5.prototype = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit$$anon$5 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit$$anon$5)))
});
ScalaJS.as.java_util_concurrent_TimeUnit$$anon$5 = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit$$anon$5(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit$$anon$5")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$5 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit$$anon$5)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit$$anon$5 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$5(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit$$anon$5;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit$$anon$5 = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit$$anon$5: 0
}, false, "java.util.concurrent.TimeUnit$$anon$5", ScalaJS.data.java_util_concurrent_TimeUnit, {
  java_util_concurrent_TimeUnit$$anon$5: 1,
  java_util_concurrent_TimeUnit: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$5.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit$$anon$5;
//@ sourceMappingURL=TimeUnit$$anon$5.js.map
