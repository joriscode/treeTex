ScalaJS.is.scala_concurrent_ThreadPoolRunner = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_ThreadPoolRunner)))
});
ScalaJS.as.scala_concurrent_ThreadPoolRunner = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_ThreadPoolRunner(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.ThreadPoolRunner")
  }
});
ScalaJS.isArrayOf.scala_concurrent_ThreadPoolRunner = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_ThreadPoolRunner)))
});
ScalaJS.asArrayOf.scala_concurrent_ThreadPoolRunner = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_ThreadPoolRunner(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.ThreadPoolRunner;", depth)
  }
});
ScalaJS.data.scala_concurrent_ThreadPoolRunner = new ScalaJS.ClassTypeData({
  scala_concurrent_ThreadPoolRunner: 0
}, true, "scala.concurrent.ThreadPoolRunner", undefined, {
  scala_concurrent_ThreadPoolRunner: 1,
  scala_concurrent_FutureTaskRunner: 1,
  scala_concurrent_TaskRunner: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ThreadPoolRunner.js.map
