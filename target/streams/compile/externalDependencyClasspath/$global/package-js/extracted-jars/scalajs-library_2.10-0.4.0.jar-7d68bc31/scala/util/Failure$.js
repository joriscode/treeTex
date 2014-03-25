/** @constructor */
ScalaJS.c.scala_util_Failure$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Failure$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Failure$.prototype.constructor = ScalaJS.c.scala_util_Failure$;
ScalaJS.c.scala_util_Failure$.prototype.toString__T = (function() {
  return "Failure"
});
ScalaJS.c.scala_util_Failure$.prototype.apply__Ljava_lang_Throwable__Lscala_util_Failure = (function(exception) {
  return new ScalaJS.c.scala_util_Failure().init___Ljava_lang_Throwable(exception)
});
ScalaJS.c.scala_util_Failure$.prototype.unapply__Lscala_util_Failure__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.exception__Ljava_lang_Throwable())
  }
});
ScalaJS.c.scala_util_Failure$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_Failure()
});
ScalaJS.c.scala_util_Failure$.prototype.unapply__Lscala_util_Failure__ = (function(x$0) {
  return this.unapply__Lscala_util_Failure__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_Failure$.prototype.apply__Ljava_lang_Throwable__ = (function(exception) {
  return this.apply__Ljava_lang_Throwable__Lscala_util_Failure(exception)
});
/** @constructor */
ScalaJS.inheritable.scala_util_Failure$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Failure$.prototype = ScalaJS.c.scala_util_Failure$.prototype;
ScalaJS.is.scala_util_Failure$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Failure$)))
});
ScalaJS.as.scala_util_Failure$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Failure$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Failure")
  }
});
ScalaJS.isArrayOf.scala_util_Failure$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Failure$)))
});
ScalaJS.asArrayOf.scala_util_Failure$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Failure$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Failure;", depth)
  }
});
ScalaJS.data.scala_util_Failure$ = new ScalaJS.ClassTypeData({
  scala_util_Failure$: 0
}, false, "scala.util.Failure$", ScalaJS.data.java_lang_Object, {
  scala_util_Failure$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Failure$.prototype.$classData = ScalaJS.data.scala_util_Failure$;
ScalaJS.moduleInstances.scala_util_Failure = undefined;
ScalaJS.modules.scala_util_Failure = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Failure)) {
    ScalaJS.moduleInstances.scala_util_Failure = new ScalaJS.c.scala_util_Failure$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Failure
});
//@ sourceMappingURL=Failure$.js.map
