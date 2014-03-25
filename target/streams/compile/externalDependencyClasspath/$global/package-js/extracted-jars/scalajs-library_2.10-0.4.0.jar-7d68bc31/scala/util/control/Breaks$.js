/** @constructor */
ScalaJS.c.scala_util_control_Breaks$ = (function() {
  ScalaJS.c.scala_util_control_Breaks.call(this)
});
ScalaJS.c.scala_util_control_Breaks$.prototype = new ScalaJS.inheritable.scala_util_control_Breaks();
ScalaJS.c.scala_util_control_Breaks$.prototype.constructor = ScalaJS.c.scala_util_control_Breaks$;
/** @constructor */
ScalaJS.inheritable.scala_util_control_Breaks$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Breaks$.prototype = ScalaJS.c.scala_util_control_Breaks$.prototype;
ScalaJS.is.scala_util_control_Breaks$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Breaks$)))
});
ScalaJS.as.scala_util_control_Breaks$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Breaks$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Breaks")
  }
});
ScalaJS.isArrayOf.scala_util_control_Breaks$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Breaks$)))
});
ScalaJS.asArrayOf.scala_util_control_Breaks$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Breaks$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Breaks;", depth)
  }
});
ScalaJS.data.scala_util_control_Breaks$ = new ScalaJS.ClassTypeData({
  scala_util_control_Breaks$: 0
}, false, "scala.util.control.Breaks$", ScalaJS.data.scala_util_control_Breaks, {
  scala_util_control_Breaks$: 1,
  scala_util_control_Breaks: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Breaks$.prototype.$classData = ScalaJS.data.scala_util_control_Breaks$;
ScalaJS.moduleInstances.scala_util_control_Breaks = undefined;
ScalaJS.modules.scala_util_control_Breaks = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_Breaks)) {
    ScalaJS.moduleInstances.scala_util_control_Breaks = new ScalaJS.c.scala_util_control_Breaks$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_Breaks
});
//@ sourceMappingURL=Breaks$.js.map
