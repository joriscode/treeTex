ScalaJS.is.scala_collection_Parallel = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Parallel)))
});
ScalaJS.as.scala_collection_Parallel = (function(obj) {
  if ((ScalaJS.is.scala_collection_Parallel(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Parallel")
  }
});
ScalaJS.isArrayOf.scala_collection_Parallel = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Parallel)))
});
ScalaJS.asArrayOf.scala_collection_Parallel = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Parallel(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Parallel;", depth)
  }
});
ScalaJS.data.scala_collection_Parallel = new ScalaJS.ClassTypeData({
  scala_collection_Parallel: 0
}, true, "scala.collection.Parallel", undefined, {
  scala_collection_Parallel: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Parallel.js.map
