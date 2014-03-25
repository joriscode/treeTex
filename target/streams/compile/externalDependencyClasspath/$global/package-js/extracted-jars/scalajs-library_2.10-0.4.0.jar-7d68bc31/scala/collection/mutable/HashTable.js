ScalaJS.is.scala_collection_mutable_HashTable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_HashTable)))
});
ScalaJS.as.scala_collection_mutable_HashTable = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_HashTable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.HashTable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_HashTable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_HashTable)))
});
ScalaJS.asArrayOf.scala_collection_mutable_HashTable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_HashTable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.HashTable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_HashTable = new ScalaJS.ClassTypeData({
  scala_collection_mutable_HashTable: 0
}, true, "scala.collection.mutable.HashTable", undefined, {
  scala_collection_mutable_HashTable: 1,
  scala_collection_mutable_HashTable$HashUtils: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=HashTable.js.map
