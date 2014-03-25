/** @constructor */
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1 = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.call(this)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype = new ScalaJS.inheritable.java_util_concurrent_TimeUnit();
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.constructor = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1;
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.convert__J__Ljava_util_concurrent_TimeUnit__J = (function(a$2, u) {
  return u.toNanos__J__J(a$2)
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toNanos__J__J = (function(a) {
  return a
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toMicros__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toMillis__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1000000, 0, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toSeconds__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1755648, 238, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toMinutes__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(481280, 14305, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toHours__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(3710976, 858306, 0))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.toDays__J__J = (function(a) {
  return a.$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(983040, 3822149, 4))
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.init___ = (function() {
  ScalaJS.c.java_util_concurrent_TimeUnit.prototype.init___I__T.call(this, 0, "NANOSECONDS");
  return this
});
/** @constructor */
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.java_util_concurrent_TimeUnit$$anon$1.prototype = ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype;
ScalaJS.is.java_util_concurrent_TimeUnit$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_concurrent_TimeUnit$$anon$1)))
});
ScalaJS.as.java_util_concurrent_TimeUnit$$anon$1 = (function(obj) {
  if ((ScalaJS.is.java_util_concurrent_TimeUnit$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.concurrent.TimeUnit$$anon$1")
  }
});
ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_concurrent_TimeUnit$$anon$1)))
});
ScalaJS.asArrayOf.java_util_concurrent_TimeUnit$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_concurrent_TimeUnit$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit$$anon$1;", depth)
  }
});
ScalaJS.data.java_util_concurrent_TimeUnit$$anon$1 = new ScalaJS.ClassTypeData({
  java_util_concurrent_TimeUnit$$anon$1: 0
}, false, "java.util.concurrent.TimeUnit$$anon$1", ScalaJS.data.java_util_concurrent_TimeUnit, {
  java_util_concurrent_TimeUnit$$anon$1: 1,
  java_util_concurrent_TimeUnit: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.java_util_concurrent_TimeUnit$$anon$1.prototype.$classData = ScalaJS.data.java_util_concurrent_TimeUnit$$anon$1;
//@ sourceMappingURL=TimeUnit$$anon$1.js.map
