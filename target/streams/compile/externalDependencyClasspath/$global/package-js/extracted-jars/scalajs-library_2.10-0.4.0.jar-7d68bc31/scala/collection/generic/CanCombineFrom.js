ScalaJS.is.scala_collection_generic_CanCombineFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_CanCombineFrom)))
});
ScalaJS.as.scala_collection_generic_CanCombineFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_CanCombineFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.CanCombineFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_CanCombineFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_CanCombineFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_CanCombineFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_CanCombineFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.CanCombineFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_CanCombineFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_CanCombineFrom: 0
}, true, "scala.collection.generic.CanCombineFrom", undefined, {
  scala_collection_generic_CanCombineFrom: 1,
  scala_collection_Parallel: 1,
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=CanCombineFrom.js.map
