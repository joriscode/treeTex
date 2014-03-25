ScalaJS.is.scala_collection_convert_Wrappers = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Wrappers)))
});
ScalaJS.as.scala_collection_convert_Wrappers = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Wrappers(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Wrappers")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Wrappers = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Wrappers)))
});
ScalaJS.asArrayOf.scala_collection_convert_Wrappers = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Wrappers(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Wrappers;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Wrappers = new ScalaJS.ClassTypeData({
  scala_collection_convert_Wrappers: 0
}, true, "scala.collection.convert.Wrappers", undefined, {
  scala_collection_convert_Wrappers: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Wrappers.js.map
