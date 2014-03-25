ScalaJS.is.scala_collection_mutable_Undoable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Undoable)))
});
ScalaJS.as.scala_collection_mutable_Undoable = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Undoable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Undoable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Undoable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Undoable)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Undoable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Undoable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Undoable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Undoable = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Undoable: 0
}, true, "scala.collection.mutable.Undoable", undefined, {
  scala_collection_mutable_Undoable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Undoable.js.map
