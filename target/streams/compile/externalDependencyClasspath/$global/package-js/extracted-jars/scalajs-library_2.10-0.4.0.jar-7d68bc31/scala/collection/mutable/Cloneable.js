ScalaJS.is.scala_collection_mutable_Cloneable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Cloneable)))
});
ScalaJS.as.scala_collection_mutable_Cloneable = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Cloneable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Cloneable")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Cloneable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Cloneable)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Cloneable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Cloneable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Cloneable;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Cloneable = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Cloneable: 0
}, true, "scala.collection.mutable.Cloneable", undefined, {
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Cloneable.js.map