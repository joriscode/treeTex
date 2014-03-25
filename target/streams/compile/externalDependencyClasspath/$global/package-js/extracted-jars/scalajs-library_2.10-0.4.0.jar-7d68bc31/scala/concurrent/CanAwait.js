ScalaJS.is.scala_concurrent_CanAwait = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_CanAwait)))
});
ScalaJS.as.scala_concurrent_CanAwait = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_CanAwait(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.CanAwait")
  }
});
ScalaJS.isArrayOf.scala_concurrent_CanAwait = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_CanAwait)))
});
ScalaJS.asArrayOf.scala_concurrent_CanAwait = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_CanAwait(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.CanAwait;", depth)
  }
});
ScalaJS.data.scala_concurrent_CanAwait = new ScalaJS.ClassTypeData({
  scala_concurrent_CanAwait: 0
}, true, "scala.concurrent.CanAwait", undefined, {
  scala_concurrent_CanAwait: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=CanAwait.js.map
