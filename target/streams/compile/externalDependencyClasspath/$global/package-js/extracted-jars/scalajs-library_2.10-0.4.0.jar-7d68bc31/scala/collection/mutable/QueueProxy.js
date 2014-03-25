ScalaJS.is.scala_collection_mutable_QueueProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_QueueProxy)))
});
ScalaJS.as.scala_collection_mutable_QueueProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_QueueProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.QueueProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_QueueProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_QueueProxy)))
});
ScalaJS.asArrayOf.scala_collection_mutable_QueueProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_QueueProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.QueueProxy;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_QueueProxy = new ScalaJS.ClassTypeData({
  scala_collection_mutable_QueueProxy: 0
}, true, "scala.collection.mutable.QueueProxy", undefined, {
  scala_collection_mutable_QueueProxy: 1,
  scala_Proxy: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=QueueProxy.js.map
