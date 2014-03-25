ScalaJS.is.scala_concurrent_FutureTaskRunner = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_FutureTaskRunner)))
});
ScalaJS.as.scala_concurrent_FutureTaskRunner = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_FutureTaskRunner(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.FutureTaskRunner")
  }
});
ScalaJS.isArrayOf.scala_concurrent_FutureTaskRunner = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_FutureTaskRunner)))
});
ScalaJS.asArrayOf.scala_concurrent_FutureTaskRunner = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_FutureTaskRunner(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.FutureTaskRunner;", depth)
  }
});
ScalaJS.data.scala_concurrent_FutureTaskRunner = new ScalaJS.ClassTypeData({
  scala_concurrent_FutureTaskRunner: 0
}, true, "scala.concurrent.FutureTaskRunner", undefined, {
  scala_concurrent_FutureTaskRunner: 1,
  scala_concurrent_TaskRunner: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=FutureTaskRunner.js.map
