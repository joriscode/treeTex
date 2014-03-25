ScalaJS.is.scala_collection_concurrent_KVNode = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_KVNode)))
});
ScalaJS.as.scala_collection_concurrent_KVNode = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_KVNode(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.KVNode")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_KVNode = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_KVNode)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_KVNode = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_KVNode(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.KVNode;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_KVNode = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_KVNode: 0
}, true, "scala.collection.concurrent.KVNode", undefined, {
  scala_collection_concurrent_KVNode: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=KVNode.js.map
