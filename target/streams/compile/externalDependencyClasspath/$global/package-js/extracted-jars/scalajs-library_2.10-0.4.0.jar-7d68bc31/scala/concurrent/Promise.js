ScalaJS.is.scala_concurrent_Promise = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_Promise)))
});
ScalaJS.as.scala_concurrent_Promise = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_Promise(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.Promise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_Promise = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_Promise)))
});
ScalaJS.asArrayOf.scala_concurrent_Promise = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_Promise(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.Promise;", depth)
  }
});
ScalaJS.data.scala_concurrent_Promise = new ScalaJS.ClassTypeData({
  scala_concurrent_Promise: 0
}, true, "scala.concurrent.Promise", undefined, {
  scala_concurrent_Promise: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Promise.js.map
