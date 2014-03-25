ScalaJS.is.scala_collection_convert_DecorateAsScala = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_DecorateAsScala)))
});
ScalaJS.as.scala_collection_convert_DecorateAsScala = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_DecorateAsScala(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.DecorateAsScala")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_DecorateAsScala = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_DecorateAsScala)))
});
ScalaJS.asArrayOf.scala_collection_convert_DecorateAsScala = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_DecorateAsScala(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.DecorateAsScala;", depth)
  }
});
ScalaJS.data.scala_collection_convert_DecorateAsScala = new ScalaJS.ClassTypeData({
  scala_collection_convert_DecorateAsScala: 0
}, true, "scala.collection.convert.DecorateAsScala", undefined, {
  scala_collection_convert_DecorateAsScala: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=DecorateAsScala.js.map
