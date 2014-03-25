ScalaJS.is.scala_collection_generic_Sorted = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_Sorted)))
});
ScalaJS.as.scala_collection_generic_Sorted = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_Sorted(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.Sorted")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_Sorted = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_Sorted)))
});
ScalaJS.asArrayOf.scala_collection_generic_Sorted = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_Sorted(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.Sorted;", depth)
  }
});
ScalaJS.data.scala_collection_generic_Sorted = new ScalaJS.ClassTypeData({
  scala_collection_generic_Sorted: 0
}, true, "scala.collection.generic.Sorted", undefined, {
  scala_collection_generic_Sorted: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Sorted.js.map
