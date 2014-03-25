ScalaJS.is.scala_collection_immutable_VectorPointer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_VectorPointer)))
});
ScalaJS.as.scala_collection_immutable_VectorPointer = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_VectorPointer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.VectorPointer")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_VectorPointer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_VectorPointer)))
});
ScalaJS.asArrayOf.scala_collection_immutable_VectorPointer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_VectorPointer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.VectorPointer;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_VectorPointer = new ScalaJS.ClassTypeData({
  scala_collection_immutable_VectorPointer: 0
}, true, "scala.collection.immutable.VectorPointer", undefined, {
  scala_collection_immutable_VectorPointer: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=VectorPointer.js.map
