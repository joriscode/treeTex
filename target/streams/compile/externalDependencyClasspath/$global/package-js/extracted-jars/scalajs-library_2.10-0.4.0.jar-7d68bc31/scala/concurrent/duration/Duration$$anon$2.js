/** @constructor */
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2 = (function() {
  ScalaJS.c.scala_concurrent_duration_Duration$Infinite.call(this)
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype = new ScalaJS.inheritable.scala_concurrent_duration_Duration$Infinite();
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Duration$$anon$2;
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.toString__T = (function() {
  return "Duration.Inf"
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.compare__Lscala_concurrent_duration_Duration__I = (function(other) {
  var x1 = other;
  if ((x1 === ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite())) {
    return -1
  };
  if ((x1 === this)) {
    return 0
  };
  return 1
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.unary$und$minus__Lscala_concurrent_duration_Duration = (function() {
  return ScalaJS.modules.scala_concurrent_duration_Duration().MinusInf__Lscala_concurrent_duration_Duration$Infinite()
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.toUnit__Ljava_util_concurrent_TimeUnit__D = (function(unit) {
  return Infinity
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.compare__O__I = (function(that) {
  return this.compare__Lscala_concurrent_duration_Duration__I(ScalaJS.as.scala_concurrent_duration_Duration(that))
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.compare__Lscala_concurrent_duration_Duration__ = (function(other) {
  return ScalaJS.bI(this.compare__Lscala_concurrent_duration_Duration__I(other))
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Duration$$anon$2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Duration$$anon$2.prototype = ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype;
ScalaJS.is.scala_concurrent_duration_Duration$$anon$2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Duration$$anon$2)))
});
ScalaJS.as.scala_concurrent_duration_Duration$$anon$2 = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Duration$$anon$2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Duration$$anon$2")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Duration$$anon$2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Duration$$anon$2)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Duration$$anon$2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Duration$$anon$2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Duration$$anon$2;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Duration$$anon$2 = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Duration$$anon$2: 0
}, false, "scala.concurrent.duration.Duration$$anon$2", ScalaJS.data.scala_concurrent_duration_Duration$Infinite, {
  scala_concurrent_duration_Duration$$anon$2: 1,
  scala_concurrent_duration_Duration$Infinite: 1,
  scala_concurrent_duration_Duration: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Duration$$anon$2.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Duration$$anon$2;
//@ sourceMappingURL=Duration$$anon$2.js.map
