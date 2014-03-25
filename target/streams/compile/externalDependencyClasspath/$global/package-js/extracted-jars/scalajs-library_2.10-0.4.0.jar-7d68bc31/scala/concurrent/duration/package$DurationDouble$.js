/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$DurationDouble$;
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.durationIn$extension__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function($$this, unit$2) {
  var x1 = ScalaJS.modules.scala_concurrent_duration_Duration().apply__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_Duration($$this, unit$2);
  if (ScalaJS.is.scala_concurrent_duration_FiniteDuration(x1)) {
    var x2 = ScalaJS.as.scala_concurrent_duration_FiniteDuration(x1);
    return x2
  };
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T(("Duration DSL not applicable to " + ScalaJS.bD($$this)))
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.hashCode$extension__D__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bD($$this))
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.equals$extension__D__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_duration_package$DurationDouble(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var DurationDouble$1 = ScalaJS.as.scala_concurrent_duration_package$DurationDouble(x$1).d__D();
    return ($$this === DurationDouble$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.equals$extension__D__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__D__O__Z($$this, x$1))
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.hashCode$extension__D__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__D__I($$this$2))
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.durationIn$extension__D__Ljava_util_concurrent_TimeUnit__ = (function($$this$3, unit) {
  return this.durationIn$extension__D__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration($$this$3, unit)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$DurationDouble$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$DurationDouble$.prototype = ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype;
ScalaJS.is.scala_concurrent_duration_package$DurationDouble$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$DurationDouble$)))
});
ScalaJS.as.scala_concurrent_duration_package$DurationDouble$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$DurationDouble$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package$DurationDouble")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$DurationDouble$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$DurationDouble$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$DurationDouble$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$DurationDouble$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package$DurationDouble;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$DurationDouble$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$DurationDouble$: 0
}, false, "scala.concurrent.duration.package$DurationDouble$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$DurationDouble$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$DurationDouble$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$DurationDouble$;
ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationDouble = undefined;
ScalaJS.modules.scala_concurrent_duration_package$DurationDouble = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationDouble)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationDouble = new ScalaJS.c.scala_concurrent_duration_package$DurationDouble$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationDouble
});
//@ sourceMappingURL=package$DurationDouble$.js.map
