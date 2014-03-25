/** @constructor */
ScalaJS.c.scala_concurrent_duration_DurationConversions$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_DurationConversions$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_DurationConversions$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_DurationConversions$;
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_DurationConversions$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_DurationConversions$.prototype = ScalaJS.c.scala_concurrent_duration_DurationConversions$.prototype;
ScalaJS.is.scala_concurrent_duration_DurationConversions$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_DurationConversions$)))
});
ScalaJS.as.scala_concurrent_duration_DurationConversions$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_DurationConversions$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.DurationConversions")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_DurationConversions$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_DurationConversions$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_DurationConversions$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_DurationConversions$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.DurationConversions;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_DurationConversions$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_DurationConversions$: 0
}, false, "scala.concurrent.duration.DurationConversions$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_DurationConversions$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_DurationConversions$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_DurationConversions$;
ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions = undefined;
ScalaJS.modules.scala_concurrent_duration_DurationConversions = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions = new ScalaJS.c.scala_concurrent_duration_DurationConversions$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_DurationConversions
});
//@ sourceMappingURL=DurationConversions$.js.map
