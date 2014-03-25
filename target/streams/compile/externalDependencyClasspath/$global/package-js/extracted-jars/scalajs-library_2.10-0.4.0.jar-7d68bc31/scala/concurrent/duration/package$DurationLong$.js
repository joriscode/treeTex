/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$DurationLong$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$DurationLong$;
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.durationIn$extension__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration = (function($$this, unit$2) {
  return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration($$this, unit$2)
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.hashCode$extension__J__I = (function($$this) {
  return ScalaJS.objectHashCode(ScalaJS.bJ($$this))
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.equals$extension__J__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_concurrent_duration_package$DurationLong(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    var DurationLong$1 = ScalaJS.as.scala_concurrent_duration_package$DurationLong(x$1).n__J();
    return $$this.equals__O__Z(DurationLong$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.equals$extension__J__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__J__O__Z($$this, x$1))
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.hashCode$extension__J__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__J__I($$this$2))
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.durationIn$extension__J__Ljava_util_concurrent_TimeUnit__ = (function($$this$3, unit) {
  return this.durationIn$extension__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration($$this$3, unit)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$DurationLong$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$DurationLong$.prototype = ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype;
ScalaJS.is.scala_concurrent_duration_package$DurationLong$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$DurationLong$)))
});
ScalaJS.as.scala_concurrent_duration_package$DurationLong$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$DurationLong$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package$DurationLong")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$DurationLong$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$DurationLong$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$DurationLong$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$DurationLong$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package$DurationLong;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$DurationLong$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$DurationLong$: 0
}, false, "scala.concurrent.duration.package$DurationLong$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$DurationLong$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$DurationLong$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$DurationLong$;
ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationLong = undefined;
ScalaJS.modules.scala_concurrent_duration_package$DurationLong = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationLong)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationLong = new ScalaJS.c.scala_concurrent_duration_package$DurationLong$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package$DurationLong
});
//@ sourceMappingURL=package$DurationLong$.js.map
