ScalaJS.is.scala_collection_mutable_FlatHashTable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_FlatHashTable)))
});
ScalaJS.as.scala_collection_mutable_FlatHashTable = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_FlatHashTable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.FlatHashTable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_FlatHashTable)))
});
ScalaJS.asArrayOf.scala_collection_mutable_FlatHashTable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_FlatHashTable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.FlatHashTable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_FlatHashTable = new ScalaJS.ClassTypeData({
  scala_collection_mutable_FlatHashTable: 0
}, true, "scala.collection.mutable.FlatHashTable", undefined, {
  scala_collection_mutable_FlatHashTable: 1,
  scala_collection_mutable_FlatHashTable$HashUtils: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=FlatHashTable.js.map
