ScalaJS.is.scala_parallel_Future = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_parallel_Future)))
});
ScalaJS.as.scala_parallel_Future = (function(obj) {
  if ((ScalaJS.is.scala_parallel_Future(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.parallel.Future")
  }
});
ScalaJS.isArrayOf.scala_parallel_Future = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_parallel_Future)))
});
ScalaJS.asArrayOf.scala_parallel_Future = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_parallel_Future(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.parallel.Future;", depth)
  }
});
ScalaJS.data.scala_parallel_Future = new ScalaJS.ClassTypeData({
  scala_parallel_Future: 0
}, true, "scala.parallel.Future", undefined, {
  scala_parallel_Future: 1,
  scala_Function0: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Future.js.map
