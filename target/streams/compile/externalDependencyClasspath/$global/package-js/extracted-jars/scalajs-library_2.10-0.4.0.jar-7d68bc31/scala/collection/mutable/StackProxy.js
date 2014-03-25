ScalaJS.is.scala_collection_mutable_StackProxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_StackProxy)))
});
ScalaJS.as.scala_collection_mutable_StackProxy = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_StackProxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.StackProxy")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_StackProxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_StackProxy)))
});
ScalaJS.asArrayOf.scala_collection_mutable_StackProxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_StackProxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.StackProxy;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_StackProxy = new ScalaJS.ClassTypeData({
  scala_collection_mutable_StackProxy: 0
}, true, "scala.collection.mutable.StackProxy", undefined, {
  scala_collection_mutable_StackProxy: 1,
  scala_Proxy: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=StackProxy.js.map
