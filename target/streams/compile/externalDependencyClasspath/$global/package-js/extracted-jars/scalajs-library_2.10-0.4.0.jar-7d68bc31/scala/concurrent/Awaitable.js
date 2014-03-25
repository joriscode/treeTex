ScalaJS.is.scala_concurrent_Awaitable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Awaitable)))
});
ScalaJS.as.scala_concurrent_Awaitable = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Awaitable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Awaitable")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Awaitable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Awaitable)))
});
ScalaJS.asArrayOf.scala_concurrent_Awaitable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Awaitable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Awaitable;", depth)
  }
});
ScalaJS.data.scala_concurrent_Awaitable = new ScalaJS.ClassTypeData({
  scala_concurrent_Awaitable: 0
}, true, "scala.concurrent.Awaitable", undefined, {
  scala_concurrent_Awaitable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Awaitable.js.map
