ScalaJS.is.scala_collection_convert_DecorateAsJava = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_DecorateAsJava)))
});
ScalaJS.as.scala_collection_convert_DecorateAsJava = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_DecorateAsJava(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.DecorateAsJava")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_DecorateAsJava = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_DecorateAsJava)))
});
ScalaJS.asArrayOf.scala_collection_convert_DecorateAsJava = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_DecorateAsJava(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.DecorateAsJava;", depth)
  }
});
ScalaJS.data.scala_collection_convert_DecorateAsJava = new ScalaJS.ClassTypeData({
  scala_collection_convert_DecorateAsJava: 0
}, true, "scala.collection.convert.DecorateAsJava", undefined, {
  scala_collection_convert_DecorateAsJava: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=DecorateAsJava.js.map
