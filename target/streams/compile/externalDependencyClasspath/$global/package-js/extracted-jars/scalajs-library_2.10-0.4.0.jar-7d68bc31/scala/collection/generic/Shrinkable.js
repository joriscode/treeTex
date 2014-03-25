ScalaJS.is.scala_collection_generic_Shrinkable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_Shrinkable)))
});
ScalaJS.as.scala_collection_generic_Shrinkable = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_Shrinkable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.Shrinkable")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_Shrinkable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_Shrinkable)))
});
ScalaJS.asArrayOf.scala_collection_generic_Shrinkable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_Shrinkable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.Shrinkable;", depth)
  }
});
ScalaJS.data.scala_collection_generic_Shrinkable = new ScalaJS.ClassTypeData({
  scala_collection_generic_Shrinkable: 0
}, true, "scala.collection.generic.Shrinkable", undefined, {
  scala_collection_generic_Shrinkable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Shrinkable.js.map
