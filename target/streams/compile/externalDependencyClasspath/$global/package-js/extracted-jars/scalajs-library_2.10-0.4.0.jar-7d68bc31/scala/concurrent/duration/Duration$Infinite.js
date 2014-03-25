/** @constructor */
ScalaJS.c.scala_concurrent_duration_Duration$Infinite = (function() {
  ScalaJS.c.scala_concurrent_duration_Duration.call(this)
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype = new ScalaJS.inheritable.scala_concurrent_duration_Duration();
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Duration$Infinite;
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.$$plus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other$8) {
  var x1 = other$8;
  if ((x1 === ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite())) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
  };
  if (ScalaJS.is.scala_concurrent_duration_Duration$Infinite(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_Duration$Infinite(x1);
    if ((x2 !== this)) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
    }
  };
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.$$minus__Lscala_concurrent_duration_Duration__Lscala_concurrent_duration_Duration = (function(other) {
  var x1 = other;
  if ((x1 === ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite())) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
  };
  if (ScalaJS.is.scala_concurrent_duration_Duration$Infinite(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_Duration$Infinite(x1);
    if ((x2 === this)) {
      return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
    }
  };
  return this
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.$$times__D__Lscala_concurrent_duration_Duration = (function(factor) {
  if (((factor === 0.0) || ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(factor).isNaN__Z())) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
  } else {
    if ((factor < 0.0)) {
      return this.unary$und$minus__Lscala_concurrent_duration_Duration()
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.$$div__D__Lscala_concurrent_duration_Duration = (function(divisor) {
  if ((ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(divisor).isNaN__Z() || ScalaJS.modules.scala_Predef().double2Double__D__Ljava_lang_Double(divisor).isInfinite__Z())) {
    return ScalaJS.modules.scala_concurrent_duration_Duration().Undefined__Lscala_concurrent_duration_Duration$Infinite()
  } else {
    if ((new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(divisor)).compare__O__I(ScalaJS.bD(0.0)) < 0)) {
      return this.unary$und$minus__Lscala_concurrent_duration_Duration()
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.$$div__Lscala_concurrent_duration_Duration__D = (function(divisor) {
  var x1 = divisor;
  if (ScalaJS.is.scala_concurrent_duration_Duration$Infinite(x1)) {
    return NaN
  };
  if ((this.$$greater__O__Z(ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration()) ^ divisor.$$greater$eq__O__Z(ScalaJS.modules.scala_concurrent_duration_Duration().Zero__Lscala_concurrent_duration_FiniteDuration()))) {
    var jsx$1 = -1
  } else {
    var jsx$1 = 1
  };
  return (Infinity * jsx$1)
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.isFinite__Z = (function() {
  return false
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.fail__p2__T__Lscala_Nothing = (function(what) {
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(new ScalaJS.c.scala_StringContext().init___Lscala_collection_Seq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["", " not allowed on infinite Durations"]), 1))).s__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [what]))))
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.length__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("length")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.unit__Ljava_util_concurrent_TimeUnit = (function() {
  return this.fail__p2__T__Lscala_Nothing("unit")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toNanos__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toNanos")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toMicros__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toMicros")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toMillis__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toMillis")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toSeconds__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toSeconds")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toMinutes__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toMinutes")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toHours__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toHours")
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.toDays__J = (function() {
  return this.fail__p2__T__Lscala_Nothing("toDays")
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Duration$Infinite = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Duration$Infinite.prototype = ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype;
ScalaJS.is.scala_concurrent_duration_Duration$Infinite = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Duration$Infinite)))
});
ScalaJS.as.scala_concurrent_duration_Duration$Infinite = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Duration$Infinite(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Duration$Infinite")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Duration$Infinite = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Duration$Infinite)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Duration$Infinite = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Duration$Infinite(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Duration$Infinite;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Duration$Infinite = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Duration$Infinite: 0
}, false, "scala.concurrent.duration.Duration$Infinite", ScalaJS.data.scala_concurrent_duration_Duration, {
  scala_concurrent_duration_Duration$Infinite: 1,
  scala_concurrent_duration_Duration: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Duration$Infinite.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Duration$Infinite;
//@ sourceMappingURL=Duration$Infinite.js.map
