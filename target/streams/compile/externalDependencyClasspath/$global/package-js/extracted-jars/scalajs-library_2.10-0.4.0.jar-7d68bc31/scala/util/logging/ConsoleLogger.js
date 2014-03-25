ScalaJS.is.scala_util_logging_ConsoleLogger = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_logging_ConsoleLogger)))
});
ScalaJS.as.scala_util_logging_ConsoleLogger = (function(obj) {
  if ((ScalaJS.is.scala_util_logging_ConsoleLogger(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.logging.ConsoleLogger")
  }
});
ScalaJS.isArrayOf.scala_util_logging_ConsoleLogger = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_logging_ConsoleLogger)))
});
ScalaJS.asArrayOf.scala_util_logging_ConsoleLogger = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_logging_ConsoleLogger(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.logging.ConsoleLogger;", depth)
  }
});
ScalaJS.data.scala_util_logging_ConsoleLogger = new ScalaJS.ClassTypeData({
  scala_util_logging_ConsoleLogger: 0
}, true, "scala.util.logging.ConsoleLogger", undefined, {
  scala_util_logging_ConsoleLogger: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ConsoleLogger.js.map
