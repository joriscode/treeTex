ScalaJS.is.scala_collection_mutable_Builder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Builder)))
});
ScalaJS.as.scala_collection_mutable_Builder = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Builder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Builder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Builder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Builder)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Builder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Builder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Builder = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Builder: 0
}, true, "scala.collection.mutable.Builder", undefined, {
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Builder.js.map
