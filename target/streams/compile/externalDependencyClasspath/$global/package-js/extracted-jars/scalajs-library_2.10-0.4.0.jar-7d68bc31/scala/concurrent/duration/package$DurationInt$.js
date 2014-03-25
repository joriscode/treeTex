/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$DurationInt$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$DurationInt$;
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.durationIn$extension__I__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function($$this, unit$2) {
  return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long($$this), unit$2)
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.hashCode$extension__I__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bI($$this))
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.equals$extension__I__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_duration_package$DurationInt(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var DurationInt$1 = ScalaJS.as.scala_concurrent_duration_package$DurationInt(x$1).n__I();
    return ($$this === DurationInt$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.equals$extension__I__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__I__O__Z($$this, x$1))
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.hashCode$extension__I__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__I__I($$this$2))
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.durationIn$extension__I__Ljava_util_concurrent_TimeUnit__ = (function($$this$3, unit) {
  return this.durationIn$extension__I__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration($$this$3, unit)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$DurationInt$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$DurationInt$.prototype = ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype;
ScalaJS.is.scala_concurrent_duration_package$DurationInt$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$DurationInt$)))
});
ScalaJS.as.scala_concurrent_duration_package$DurationInt$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$DurationInt$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package$DurationInt")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$DurationInt$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$DurationInt$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$DurationInt$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$DurationInt$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package$DurationInt;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$DurationInt$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$DurationInt$: 0
}, false, "scala.concurrent.duration.package$DurationInt$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$DurationInt$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$DurationInt$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$DurationInt$;
ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationInt = undefined;
ScalaJS.modules.scala_concurrent_duration_package$DurationInt = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationInt)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationInt = new ScalaJS.c.scala_concurrent_duration_package$DurationInt$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationInt
});
//@ sourceMappingURL=package$DurationInt$.js.map
