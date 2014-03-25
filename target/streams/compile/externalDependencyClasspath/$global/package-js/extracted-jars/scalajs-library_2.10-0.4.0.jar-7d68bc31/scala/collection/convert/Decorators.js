ScalaJS.is.scala_collection_convert_Decorators = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_Decorators)))
});
ScalaJS.as.scala_collection_convert_Decorators = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_Decorators(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.Decorators")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_Decorators = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_Decorators)))
});
ScalaJS.asArrayOf.scala_collection_convert_Decorators = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_Decorators(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.Decorators;", depth)
  }
});
ScalaJS.data.scala_collection_convert_Decorators = new ScalaJS.ClassTypeData({
  scala_collection_convert_Decorators: 0
}, true, "scala.collection.convert.Decorators", undefined, {
  scala_collection_convert_Decorators: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Decorators.js.map
