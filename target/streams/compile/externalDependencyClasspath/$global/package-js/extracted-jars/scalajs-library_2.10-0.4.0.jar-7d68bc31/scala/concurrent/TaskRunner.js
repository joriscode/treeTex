ScalaJS.is.scala_concurrent_TaskRunner = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_TaskRunner)))
});
ScalaJS.as.scala_concurrent_TaskRunner = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_TaskRunner(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.TaskRunner")
  }
});
ScalaJS.isArrayOf.scala_concurrent_TaskRunner = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_TaskRunner)))
});
ScalaJS.asArrayOf.scala_concurrent_TaskRunner = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_TaskRunner(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.TaskRunner;", depth)
  }
});
ScalaJS.data.scala_concurrent_TaskRunner = new ScalaJS.ClassTypeData({
  scala_concurrent_TaskRunner: 0
}, true, "scala.concurrent.TaskRunner", undefined, {
  scala_concurrent_TaskRunner: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=TaskRunner.js.map
