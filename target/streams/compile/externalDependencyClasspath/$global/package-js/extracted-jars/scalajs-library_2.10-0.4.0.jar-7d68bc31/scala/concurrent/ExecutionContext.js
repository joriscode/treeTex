ScalaJS.is.scala_concurrent_ExecutionContext = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ExecutionContext)))
});
ScalaJS.as.scala_concurrent_ExecutionContext = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ExecutionContext(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ExecutionContext")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ExecutionContext = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ExecutionContext)))
});
ScalaJS.asArrayOf.scala_concurrent_ExecutionContext = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ExecutionContext(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ExecutionContext;", depth)
  }
});
ScalaJS.data.scala_concurrent_ExecutionContext = new ScalaJS.ClassTypeData({
  scala_concurrent_ExecutionContext: 0
}, true, "scala.concurrent.ExecutionContext", undefined, {
  scala_concurrent_ExecutionContext: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ExecutionContext.js.map
