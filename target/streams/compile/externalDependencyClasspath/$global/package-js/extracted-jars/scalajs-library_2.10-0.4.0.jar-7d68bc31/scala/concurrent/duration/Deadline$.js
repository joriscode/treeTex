/** @constructor */
ScalaJS.c.scala_concurrent_duration_Deadline$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.constructor = ScalaJS.c.scala_concurrent_duration_Deadline$;
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.now__Lscala_concurrent_duration_Deadline = (function() {
  return new ScalaJS.c.scala_concurrent_duration_Deadline().init___Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.scala_concurrent_duration_Duration().apply__J__Ljava_util_concurrent_TimeUnit__Lscala_concurrent_duration_FiniteDuration(ScalaJS.modules.java_lang_System().nanoTime__J(), ScalaJS.modules.java_util_concurrent_TimeUnit().NANOSECONDS__Ljava_util_concurrent_TimeUnit()))
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.apply__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline = (function(time) {
  return new ScalaJS.c.scala_concurrent_duration_Deadline().init___Lscala_concurrent_duration_FiniteDuration(time)
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.unapply__Lscala_concurrent_duration_Deadline__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.time__Lscala_concurrent_duration_FiniteDuration())
  }
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_concurrent_duration_Deadline()
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.unapply__Lscala_concurrent_duration_Deadline__ = (function(x$0) {
  return this.unapply__Lscala_concurrent_duration_Deadline__Lscala_Option(x$0)
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.apply__Lscala_concurrent_duration_FiniteDuration__ = (function(time) {
  return this.apply__Lscala_concurrent_duration_FiniteDuration__Lscala_concurrent_duration_Deadline(time)
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.now__ = (function() {
  return this.now__Lscala_concurrent_duration_Deadline()
});
/** @constructor */
ScalaJS.inheritable.scala_concurrent_duration_Deadline$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_concurrent_duration_Deadline$.prototype = ScalaJS.c.scala_concurrent_duration_Deadline$.prototype;
ScalaJS.is.scala_concurrent_duration_Deadline$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_duration_Deadline$)))
});
ScalaJS.as.scala_concurrent_duration_Deadline$ = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_duration_Deadline$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.duration.Deadline")
  }
});
ScalaJS.isArrayOf.scala_concurrent_duration_Deadline$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_duration_Deadline$)))
});
ScalaJS.asArrayOf.scala_concurrent_duration_Deadline$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_duration_Deadline$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.duration.Deadline;", depth)
  }
});
ScalaJS.data.scala_concurrent_duration_Deadline$ = new ScalaJS.ClassTypeData({
  scala_concurrent_duration_Deadline$: 0
}, false, "scala.concurrent.duration.Deadline$", ScalaJS.data.java_lang_Object, {
  scala_concurrent_duration_Deadline$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_concurrent_duration_Deadline$.prototype.$classData = ScalaJS.data.scala_concurrent_duration_Deadline$;
ScalaJS.moduleInstances.scala_concurrent_duration_Deadline = undefined;
ScalaJS.modules.scala_concurrent_duration_Deadline = (function() {
  if ((!ScalaJS.moduleInstances.scala_concurrent_duration_Deadline)) {
    ScalaJS.moduleInstances.scala_concurrent_duration_Deadline = new ScalaJS.c.scala_concurrent_duration_Deadline$().init___()
  };
  return ScalaJS.moduleInstances.scala_concurrent_duration_Deadline
});
//@ sourceMappingURL=Deadline$.js.map
