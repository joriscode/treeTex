ScalaJS.is.scala_collection_generic_CanBuildFrom = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_CanBuildFrom)))
});
ScalaJS.as.scala_collection_generic_CanBuildFrom = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_CanBuildFrom(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.CanBuildFrom")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_CanBuildFrom = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_CanBuildFrom)))
});
ScalaJS.asArrayOf.scala_collection_generic_CanBuildFrom = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_CanBuildFrom(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.CanBuildFrom;", depth)
  }
});
ScalaJS.data.scala_collection_generic_CanBuildFrom = new ScalaJS.ClassTypeData({
  scala_collection_generic_CanBuildFrom: 0
}, true, "scala.collection.generic.CanBuildFrom", undefined, {
  scala_collection_generic_CanBuildFrom: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=CanBuildFrom.js.map
