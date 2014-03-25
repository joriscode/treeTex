/** @constructor */
ScalaJS.c.scala_util_control_TailCalls$Done$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.constructor = ScalaJS.c.scala_util_control_TailCalls$Done$;
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.toString__T = (function() {
  return "Done"
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.apply__O__Lscala_util_control_TailCalls$Done = (function(result) {
  return new ScalaJS.c.scala_util_control_TailCalls$Done().init___O(result)
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.unapply__Lscala_util_control_TailCalls$Done__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.result__O())
  }
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_control_TailCalls$Done()
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.unapply__Lscala_util_control_TailCalls$Done__ = (function(x$0) {
  return this.unapply__Lscala_util_control_TailCalls$Done__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.apply__O__ = (function(result) {
  return this.apply__O__Lscala_util_control_TailCalls$Done(result)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_TailCalls$Done$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_TailCalls$Done$.prototype = ScalaJS.c.scala_util_control_TailCalls$Done$.prototype;
ScalaJS.is.scala_util_control_TailCalls$Done$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_TailCalls$Done$)))
});
ScalaJS.as.scala_util_control_TailCalls$Done$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_TailCalls$Done$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.TailCalls$Done")
  }
});
ScalaJS.isArrayOf.scala_util_control_TailCalls$Done$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_TailCalls$Done$)))
});
ScalaJS.asArrayOf.scala_util_control_TailCalls$Done$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_TailCalls$Done$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.TailCalls$Done;", depth)
  }
});
ScalaJS.data.scala_util_control_TailCalls$Done$ = new ScalaJS.ClassTypeData({
  scala_util_control_TailCalls$Done$: 0
}, false, "scala.util.control.TailCalls$Done$", ScalaJS.data.java_lang_Object, {
  scala_util_control_TailCalls$Done$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_TailCalls$Done$.prototype.$classData = ScalaJS.data.scala_util_control_TailCalls$Done$;
ScalaJS.moduleInstances.scala_util_control_TailCalls$Done = undefined;
ScalaJS.modules.scala_util_control_TailCalls$Done = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_TailCalls$Done)) {
    ScalaJS.moduleInstances.scala_util_control_TailCalls$Done = new ScalaJS.c.scala_util_control_TailCalls$Done$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_TailCalls$Done
});
//@ sourceMappingURL=TailCalls$Done$.js.map
