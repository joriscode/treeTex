ScalaJS.is.scala_collection_mutable_AVLTree = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_AVLTree)))
});
ScalaJS.as.scala_collection_mutable_AVLTree = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_AVLTree(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.AVLTree")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_AVLTree = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_AVLTree)))
});
ScalaJS.asArrayOf.scala_collection_mutable_AVLTree = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_AVLTree(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.AVLTree;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_AVLTree = new ScalaJS.ClassTypeData({
  scala_collection_mutable_AVLTree: 0
}, true, "scala.collection.mutable.AVLTree", undefined, {
  scala_collection_mutable_AVLTree: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=AVLTree.js.map
