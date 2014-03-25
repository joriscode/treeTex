/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3 = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.call(this)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype = new ScalaJS.inheritable.java_util_concurrent_TimeUnit();
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3;
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.convert__J__Ljava_util_concurrent_TimeUnit__J = (function(a, u) {
  return u.toMillis__J__J(a)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toNanos__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1071862, 2199023, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toMicros__J__J = (function(a) {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().x__J__J__J__J(a, ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0), ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2315255, 1207959, 524))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toMillis__J__J = (function(a) {
  return a
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toSeconds__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toMinutes__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(60000, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toHours__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3600000, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.toDays__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(2513920, 20, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.init___ = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.prototype.init___I__T.call(this, 2, "MILLISECONDS");
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$3 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$3.prototype = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit$$anon$3 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit$$anon$3)))
});
ScalaJS.as.java_util_concurrent_TimeUnit$$anon$3 = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit$$anon$3(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit$$anon$3")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$3 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit$$anon$3)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit$$anon$3 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$3(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit$$anon$3;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit$$anon$3 = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit$$anon$3: 0
}, false, "java.util.concurrent.TimeUnit$$anon$3", ScalaJS.data.java_util_concurrent_TimeUnit, {
  java_util_concurrent_TimeUnit$$anon$3: 1,
  java_util_concurrent_TimeUnit: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$3.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit$$anon$3;
//@ sourceMappingURL=TimeUnit$$anon$3.js.map
