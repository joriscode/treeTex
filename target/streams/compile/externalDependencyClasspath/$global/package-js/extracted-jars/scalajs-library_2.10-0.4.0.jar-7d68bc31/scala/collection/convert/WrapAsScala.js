ScalaJS.is.scala_collection_convert_WrapAsScala = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_WrapAsScala)))
});
ScalaJS.as.scala_collection_convert_WrapAsScala = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_WrapAsScala(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.WrapAsScala")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_WrapAsScala = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_WrapAsScala)))
});
ScalaJS.asArrayOf.scala_collection_convert_WrapAsScala = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_WrapAsScala(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.WrapAsScala;", depth)
  }
});
ScalaJS.data.scala_collection_convert_WrapAsScala = new ScalaJS.ClassTypeData({
  scala_collection_convert_WrapAsScala: 0
}, true, "scala.collection.convert.WrapAsScala", undefined, {
  scala_collection_convert_WrapAsScala: 1,
  scala_collection_convert_LowPriorityWrapAsScala: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=WrapAsScala.js.map
