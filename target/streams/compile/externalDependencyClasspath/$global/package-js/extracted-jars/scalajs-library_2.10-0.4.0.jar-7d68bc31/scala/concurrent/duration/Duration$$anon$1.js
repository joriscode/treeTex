/** @constructor */
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1 = (function() {
  ScalaJS.c.scala_concurrent_duration_Duration$Infinite.call(this)
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype = new ScalaJS.inheritable.scala_concurrent_duration_Duration$Infinite();
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Duration$$anon$1;
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.toString__T = (function() {
  return "Duration.Undefined"
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.equals__O__Z = (function(other) {
  return false
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.$$plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.$$minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.$$times__D__Lscala_concurrent_duration_Duration = (function(factor) {
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.$$div__D__Lscala_concurrent_duration_Duration = (function(factor) {
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.$$div__Lscala_concurrent_duration_Duration__D = (function(other) {
  return NaN
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.compare__Lscala_concurrent_duration_Duration__I = (function(other) {
  if ((other === this)) {
    return 0
  } else {
    return 1
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.unary$und$minus__Lscala_concurrent_duration_Duration = (function() {
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.toUnit__Ljava_util_concurrent_TimeUnit__D = (function(unit) {
  return NaN
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.compare__O__I = (function(that) {
  return this.compare__Lscala_concurrent_duration_Duration__I(ScalaJS.as.scala_concurrent_duration_Duration(that))
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.compare__Lscala_concurrent_duration_Duration__ = (function(other) {
  return ScalaJS.bI(this.compare__Lscala_concurrent_duration_Duration__I(other))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Duration$$anon$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Duration$$anon$1.prototype = ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype;
ScalaJS.is.scala_concurrent_duration_Duration$$anon$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Duration$$anon$1)))
});
ScalaJS.as.scala_concurrent_duration_Duration$$anon$1 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Duration$$anon$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Duration$$anon$1")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Duration$$anon$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Duration$$anon$1)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Duration$$anon$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Duration$$anon$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Duration$$anon$1;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Duration$$anon$1 = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Duration$$anon$1: 0
}, false, "scala.concurrent.duration.Duration$$anon$1", ScalaJS.data.scala_concurrent_duration_Duration$Infinite, {
  scala_concurrent_duration_Duration$$anon$1: 1,
  scala_concurrent_duration_Duration$Infinite: 1,
  scala_concurrent_duration_Duration: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$1.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Duration$$anon$1;
//@ sourceMappingURL=Duration$$anon$1.js.map
