ScalaJS.is.scala_collection_convert_WrapAsJava = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_convert_WrapAsJava)))
});
ScalaJS.as.scala_collection_convert_WrapAsJava = (function(obj) {
  if ((ScalaJS.is.scala_collection_convert_WrapAsJava(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.convert.WrapAsJava")
  }
});
ScalaJS.isArrayOf.scala_collection_convert_WrapAsJava = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_convert_WrapAsJava)))
});
ScalaJS.asArrayOf.scala_collection_convert_WrapAsJava = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_convert_WrapAsJava(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.convert.WrapAsJava;", depth)
  }
});
ScalaJS.data.scala_collection_convert_WrapAsJava = new ScalaJS.ClassTypeData({
  scala_collection_convert_WrapAsJava: 0
}, true, "scala.collection.convert.WrapAsJava", undefined, {
  scala_collection_convert_WrapAsJava: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=WrapAsJava.js.map
