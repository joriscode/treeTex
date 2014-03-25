ScalaJS.is.scala_concurrent_Future = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Future)))
});
ScalaJS.as.scala_concurrent_Future = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Future(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Future")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Future = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Future)))
});
ScalaJS.asArrayOf.scala_concurrent_Future = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Future(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Future;", depth)
  }
});
ScalaJS.data.scala_concurrent_Future = new ScalaJS.ClassTypeData({
  scala_concurrent_Future: 0
}, true, "scala.concurrent.Future", undefined, {
  scala_concurrent_Future: 1,
  scala_concurrent_Awaitable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Future.js.map
