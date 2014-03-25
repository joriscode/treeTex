/** @constructor */
ScalaJS.c.scala_util_control_Exception$Catch$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_control_Exception$Catch$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_control_Exception$Catch$.prototype.constructor = ScalaJS.c.scala_util_control_Exception$Catch$;
ScalaJS.c.scala_util_control_Exception$Catch$.prototype.$$lessinit$greater$default$2__Lscala_Option = (function() {
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_util_control_Exception$Catch$.prototype.$$lessinit$greater$default$3__Lscala_Function1 = (function() {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.bZ(ScalaJS.modules.scala_util_control_Exception().shouldRethrow__Ljava_lang_Throwable__Z(x))
    })
  })())
});
/** @constructor */
ScalaJS.inheritable.scala_util_control_Exception$Catch$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_control_Exception$Catch$.prototype = ScalaJS.c.scala_util_control_Exception$Catch$.prototype;
ScalaJS.is.scala_util_control_Exception$Catch$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_Exception$Catch$)))
});
ScalaJS.as.scala_util_control_Exception$Catch$ = (function(obj) {
  if ((ScalaJS.is.scala_util_control_Exception$Catch$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.Exception$Catch")
  }
});
ScalaJS.isArrayOf.scala_util_control_Exception$Catch$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_Exception$Catch$)))
});
ScalaJS.asArrayOf.scala_util_control_Exception$Catch$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_Exception$Catch$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.Exception$Catch;", depth)
  }
});
ScalaJS.data.scala_util_control_Exception$Catch$ = new ScalaJS.ClassTypeData({
  scala_util_control_Exception$Catch$: 0
}, false, "scala.util.control.Exception$Catch$", ScalaJS.data.java_lang_Object, {
  scala_util_control_Exception$Catch$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_control_Exception$Catch$.prototype.$classData = ScalaJS.data.scala_util_control_Exception$Catch$;
ScalaJS.moduleInstances.scala_util_control_Exception$Catch = undefined;
ScalaJS.modules.scala_util_control_Exception$Catch = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_control_Exception$Catch)) {
    ScalaJS.moduleInstances.scala_util_control_Exception$Catch = new ScalaJS.c.scala_util_control_Exception$Catch$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_control_Exception$Catch
});
//@ sourceMappingURL=Exception$Catch$.js.map
