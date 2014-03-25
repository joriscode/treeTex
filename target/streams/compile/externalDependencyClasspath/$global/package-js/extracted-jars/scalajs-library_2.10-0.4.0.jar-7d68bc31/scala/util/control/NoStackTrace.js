ScalaJS.is.scala_util_control_NoStackTrace = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_control_NoStackTrace)))
});
ScalaJS.as.scala_util_control_NoStackTrace = (function(obj) {
  if ((ScalaJS.is.scala_util_control_NoStackTrace(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.control.NoStackTrace")
  }
});
ScalaJS.isArrayOf.scala_util_control_NoStackTrace = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_control_NoStackTrace)))
});
ScalaJS.asArrayOf.scala_util_control_NoStackTrace = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_control_NoStackTrace(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.control.NoStackTrace;", depth)
  }
});
ScalaJS.data.scala_util_control_NoStackTrace = new ScalaJS.ClassTypeData({
  scala_util_control_NoStackTrace: 0
}, true, "scala.util.control.NoStackTrace", undefined, {
  scala_util_control_NoStackTrace: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=NoStackTrace.js.map
