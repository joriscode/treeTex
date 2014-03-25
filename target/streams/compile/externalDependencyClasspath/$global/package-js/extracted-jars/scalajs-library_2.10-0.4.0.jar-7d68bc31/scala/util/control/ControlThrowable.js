ScalaJS.is.scala_util_control_ControlThrowable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_ControlThrowable)))
});
ScalaJS.as.scala_util_control_ControlThrowable = (function(obj) {
  if ((ScalaJS.is.scala_util_control_ControlThrowable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.ControlThrowable")
  }
});
ScalaJS.isArrayOf.scala_util_control_ControlThrowable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_ControlThrowable)))
});
ScalaJS.asArrayOf.scala_util_control_ControlThrowable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_ControlThrowable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.ControlThrowable;", depth)
  }
});
ScalaJS.data.scala_util_control_ControlThrowable = new ScalaJS.ClassTypeData({
  scala_util_control_ControlThrowable: 0
}, true, "scala.util.control.ControlThrowable", undefined, {
  scala_util_control_ControlThrowable: 1,
  scala_util_control_NoStackTrace: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ControlThrowable.js.map
