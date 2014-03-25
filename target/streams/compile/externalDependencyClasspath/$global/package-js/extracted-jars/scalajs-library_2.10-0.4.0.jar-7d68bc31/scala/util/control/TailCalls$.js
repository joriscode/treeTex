/** @constructor */
ScalaJS.c.scala_util_control_TailCalls$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_control_TailCalls$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_TailCalls$.prototype.constructor = ScalaJS.c.scala_util_control_TailCalls$;
ScalaJS.c.scala_util_control_TailCalls$.prototype.tailcall__Lscala_Function0__Lscala_util_control_TailCalls$TailRec = (function(rest) {
  return new ScalaJS.c.scala_util_control_TailCalls$Call().init___Lscala_Function0(rest)
});
ScalaJS.c.scala_util_control_TailCalls$.prototype.done__O__Lscala_util_control_TailCalls$TailRec = (function(result) {
  return new ScalaJS.c.scala_util_control_TailCalls$Done().init___O(result)
});
ScalaJS.c.scala_util_control_TailCalls$.prototype.done__O__ = (function(result) {
  return this.done__O__Lscala_util_control_TailCalls$TailRec(result)
});
ScalaJS.c.scala_util_control_TailCalls$.prototype.tailcall__Lscala_Function0__ = (function(rest) {
  return this.tailcall__Lscala_Function0__Lscala_util_control_TailCalls$TailRec(rest)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_TailCalls$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_TailCalls$.prototype = ScalaJS.c.scala_util_control_TailCalls$.prototype;
ScalaJS.is.scala_util_control_TailCalls$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_TailCalls$)))
});
ScalaJS.as.scala_util_control_TailCalls$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_TailCalls$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.TailCalls")
  }
});
ScalaJS.isArrayOf.scala_util_control_TailCalls$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_TailCalls$)))
});
ScalaJS.asArrayOf.scala_util_control_TailCalls$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_TailCalls$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.TailCalls;", depth)
  }
});
ScalaJS.data.scala_util_control_TailCalls$ = new ScalaJS.ClassTypeData({
  scala_util_control_TailCalls$: 0
}, false, "scala.util.control.TailCalls$", ScalaJS.data.java_lang_Object, {
  scala_util_control_TailCalls$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_TailCalls$.prototype.$classData = ScalaJS.data.scala_util_control_TailCalls$;
ScalaJS.moduleInstances.scala_util_control_TailCalls = undefined;
ScalaJS.modules.scala_util_control_TailCalls = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_TailCalls)) {
    ScalaJS.moduleInstances.scala_util_control_TailCalls = new ScalaJS.c.scala_util_control_TailCalls$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_TailCalls
});
//@ sourceMappingURL=TailCalls$.js.map
