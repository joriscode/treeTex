/** @constructor */
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$;
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype.convert__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline = (function(d$2) {
  return ScalaJS.modules.scala_concurrent_duration_Deadline().now__Lscala_concurrent_duration_Deadline().$$plus__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(d$2)
});
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype.convert__Lscala_concurrent_duration_FiniteDuration__O = (function(d) {
  return this.convert__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(d)
});
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype.convert__Lscala_concurrent_duration_FiniteDuration__ = (function(d) {
  return this.convert__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(d)
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_DurationConversions$fromNowConvert$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype = ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype;
ScalaJS.is.scala_concurrent_duration_DurationConversions$fromNowConvert$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_DurationConversions$fromNowConvert$)))
});
ScalaJS.as.scala_concurrent_duration_DurationConversions$fromNowConvert$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_DurationConversions$fromNowConvert$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.DurationConversions$fromNowConvert")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_DurationConversions$fromNowConvert$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_DurationConversions$fromNowConvert$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_DurationConversions$fromNowConvert$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_DurationConversions$fromNowConvert$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.DurationConversions$fromNowConvert;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_DurationConversions$fromNowConvert$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_DurationConversions$fromNowConvert$: 0
}, false, "scala.concurrent.duration.DurationConversions$fromNowConvert$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_DurationConversions$fromNowConvert$: 1,
  scala_concurrent_duration_DurationConversions$Classifier: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_DurationConversions$fromNowConvert$;
ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions$fromNowConvert = undefined;
ScalaJS.modules.scala_concurrent_duration_DurationConversions$fromNowConvert = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions$fromNowConvert)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions$fromNowConvert = new ScalaJS.c.scala_concurrent_duration_DurationConversions$fromNowConvert$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions$fromNowConvert
});
//@ sourceMappingURL=DurationConversions$fromNowConvert$.js.map
