ScalaJS.is.scala_concurrent_impl_Promise = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_concurrent_impl_Promise)))
});
ScalaJS.as.scala_concurrent_impl_Promise = (function(obj) {
  if ((ScalaJS.is.scala_concurrent_impl_Promise(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.concurrent.impl.Promise")
  }
});
ScalaJS.isArrayOf.scala_concurrent_impl_Promise = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_concurrent_impl_Promise)))
});
ScalaJS.asArrayOf.scala_concurrent_impl_Promise = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_concurrent_impl_Promise(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.concurrent.impl.Promise;", depth)
  }
});
ScalaJS.data.scala_concurrent_impl_Promise = new ScalaJS.ClassTypeData({
  scala_concurrent_impl_Promise: 0
}, true, "scala.concurrent.impl.Promise", undefined, {
  scala_concurrent_impl_Promise: 1,
  scala_concurrent_Future: 1,
  scala_concurrent_Awaitable: 1,
  scala_concurrent_Promise: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Promise.js.map
