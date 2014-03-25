/** @constructor */
ScalaJS.c.scala_concurrent_duration_package$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.DAYS$1 = null;
  this.HOURS$1 = null;
  this.MICROSECONDS$1 = null;
  this.MILLISECONDS$1 = null;
  this.MINUTES$1 = null;
  this.NANOSECONDS$1 = null;
  this.SECONDS$1 = null
});
ScalaJS.c.scala_concurrent_duration_package$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_package$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_package$;
ScalaJS.c.scala_concurrent_duration_package$.prototype.DAYS__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().DAYS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.HOURS__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().HOURS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.MICROSECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().MICROSECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.MILLISECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().MILLISECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.MINUTES__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().MINUTES__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.NANOSECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().NANOSECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.SECONDS__Ljava_util_concurrent_TimeUnit = (function() {
  return ScalaJS.modules.java_util_concurrent_TimeUnit().SECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.pairIntToDuration__Lscala_Tuple2__Lscala_concurrent_duration_Duration = (function(p) {
  return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(p.$$und1$mcI$sp__I()), ScalaJS.as.java_util_concurrent_TimeUnit(p.$$und2__O()))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.pairLongToDuration__Lscala_Tuple2__Lscala_concurrent_duration_FiniteDuration = (function(p) {
  return ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(p.$$und1$mcJ$sp__J(), ScalaJS.as.java_util_concurrent_TimeUnit(p.$$und2__O()))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.durationToPair__Lscala_concurrent_duration_Duration__Lscala_Tuple2 = (function(d) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bJ(d.length__J()), d.unit__Ljava_util_concurrent_TimeUnit())
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DurationInt__I__I = (function(n) {
  return n
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DurationLong__J__J = (function(n) {
  return n
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DurationDouble__D__D = (function(d) {
  return d
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.IntMult__I__I = (function(i) {
  return i
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.LongMult__J__J = (function(i) {
  return i
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DoubleMult__D__D = (function(f) {
  return f
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DoubleMult__D__ = (function(f) {
  return new ScalaJS.c.scala_concurrent_duration_package$DoubleMult().init___D(this.DoubleMult__D__D(f))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.LongMult__J__ = (function(i) {
  return new ScalaJS.c.scala_concurrent_duration_package$LongMult().init___J(this.LongMult__J__J(i))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.IntMult__I__ = (function(i$2) {
  return new ScalaJS.c.scala_concurrent_duration_package$IntMult().init___I(this.IntMult__I__I(i$2))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DurationDouble__D__ = (function(d) {
  return new ScalaJS.c.scala_concurrent_duration_package$DurationDouble().init___D(this.DurationDouble__D__D(d))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DurationLong__J__ = (function(n) {
  return new ScalaJS.c.scala_concurrent_duration_package$DurationLong().init___J(this.DurationLong__J__J(n))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DurationInt__I__ = (function(n$2) {
  return new ScalaJS.c.scala_concurrent_duration_package$DurationInt().init___I(this.DurationInt__I__I(n$2))
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.durationToPair__Lscala_concurrent_duration_Duration__ = (function(d$2) {
  return this.durationToPair__Lscala_concurrent_duration_Duration__Lscala_Tuple2(d$2)
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.pairLongToDuration__Lscala_Tuple2__ = (function(p) {
  return this.pairLongToDuration__Lscala_Tuple2__Lscala_concurrent_duration_FiniteDuration(p)
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.pairIntToDuration__Lscala_Tuple2__ = (function(p$2) {
  return this.pairIntToDuration__Lscala_Tuple2__Lscala_concurrent_duration_Duration(p$2)
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.SECONDS__ = (function() {
  return this.SECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.NANOSECONDS__ = (function() {
  return this.NANOSECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.MINUTES__ = (function() {
  return this.MINUTES__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.MILLISECONDS__ = (function() {
  return this.MILLISECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.MICROSECONDS__ = (function() {
  return this.MICROSECONDS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.HOURS__ = (function() {
  return this.HOURS__Ljava_util_concurrent_TimeUnit()
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.DAYS__ = (function() {
  return this.DAYS__Ljava_util_concurrent_TimeUnit()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_package$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_package$.prototype = ScalaJS.c.scala_concurrent_duration_package$.prototype;
ScalaJS.is.scala_concurrent_duration_package$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_package$)))
});
ScalaJS.as.scala_concurrent_duration_package$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_package$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.package")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_package$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_package$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_package$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_package$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.package;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_package$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_package$: 0
}, false, "scala.concurrent.duration.package$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_package$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_package$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_package$;
ScalaJS.moduleInstances.scala_concurrent_duration_package = undefined;
ScalaJS.modules.scala_concurrent_duration_package = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_package)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_package = new ScalaJS.c.scala_concurrent_duration_package$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_package
});
//@ sourceMappingURL=package$.js.map
