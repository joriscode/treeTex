ScalaJS.is.scala_collection_generic_HasNewBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_HasNewBuilder)))
});
ScalaJS.as.scala_collection_generic_HasNewBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_HasNewBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.HasNewBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_HasNewBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_HasNewBuilder)))
});
ScalaJS.asArrayOf.scala_collection_generic_HasNewBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_HasNewBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.HasNewBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_generic_HasNewBuilder = new ScalaJS.ClassTypeData({
  scala_collection_generic_HasNewBuilder: 0
}, true, "scala.collection.generic.HasNewBuilder", undefined, {
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=HasNewBuilder.js.map
