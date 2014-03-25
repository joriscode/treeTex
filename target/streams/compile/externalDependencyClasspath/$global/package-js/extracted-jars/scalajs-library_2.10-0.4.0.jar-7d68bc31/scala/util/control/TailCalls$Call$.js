/** @constructor */
ScalaJS.c.scala_util_control_TailCalls$Call$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.constructor = ScalaJS.c.scala_util_control_TailCalls$Call$;
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.toString__T = (function() {
  return "Call"
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.apply__Lscala_Function0__Lscala_util_control_TailCalls$Call = (function(rest) {
  return new ScalaJS.c.scala_util_control_TailCalls$Call().init___Lscala_Function0(rest)
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.unapply__Lscala_util_control_TailCalls$Call__Lscala_Option = (function(x$0) {
  if (ScalaJS.anyRefEqEq(x$0, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(x$0.rest__Lscala_Function0())
  }
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_util_control_TailCalls$Call()
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.unapply__Lscala_util_control_TailCalls$Call__ = (function(x$0) {
  return this.unapply__Lscala_util_control_TailCalls$Call__Lscala_Option(x$0)
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.apply__Lscala_Function0__ = (function(rest) {
  return this.apply__Lscala_Function0__Lscala_util_control_TailCalls$Call(rest)
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_TailCalls$Call$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_TailCalls$Call$.prototype = ScalaJS.c.scala_util_control_TailCalls$Call$.prototype;
ScalaJS.is.scala_util_control_TailCalls$Call$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_TailCalls$Call$)))
});
ScalaJS.as.scala_util_control_TailCalls$Call$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_TailCalls$Call$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.TailCalls$Call")
  }
});
ScalaJS.isArrayOf.scala_util_control_TailCalls$Call$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_TailCalls$Call$)))
});
ScalaJS.asArrayOf.scala_util_control_TailCalls$Call$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_TailCalls$Call$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.TailCalls$Call;", depth)
  }
});
ScalaJS.data.scala_util_control_TailCalls$Call$ = new ScalaJS.ClassTypeData({
  scala_util_control_TailCalls$Call$: 0
}, false, "scala.util.control.TailCalls$Call$", ScalaJS.data.java_lang_Object, {
  scala_util_control_TailCalls$Call$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_TailCalls$Call$.prototype.$classData = ScalaJS.data.scala_util_control_TailCalls$Call$;
ScalaJS.moduleInstances.scala_util_control_TailCalls$Call = undefined;
ScalaJS.modules.scala_util_control_TailCalls$Call = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_TailCalls$Call)) {
    ScalaJS.moduleInstances.scala_util_control_TailCalls$Call = new ScalaJS.c.scala_util_control_TailCalls$Call$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_TailCalls$Call
});
//@ sourceMappingURL=TailCalls$Call$.js.map
