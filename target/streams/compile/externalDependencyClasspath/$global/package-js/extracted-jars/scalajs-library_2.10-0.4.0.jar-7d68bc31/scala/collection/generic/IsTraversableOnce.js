ScalaJS.is.scala_collection_generic_IsTraversableOnce = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IsTraversableOnce)))
});
ScalaJS.as.scala_collection_generic_IsTraversableOnce = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IsTraversableOnce(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IsTraversableOnce")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IsTraversableOnce = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IsTraversableOnce)))
});
ScalaJS.asArrayOf.scala_collection_generic_IsTraversableOnce = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IsTraversableOnce(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IsTraversableOnce;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IsTraversableOnce = new ScalaJS.ClassTypeData({
  scala_collection_generic_IsTraversableOnce: 0
}, true, "scala.collection.generic.IsTraversableOnce", undefined, {
  scala_collection_generic_IsTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=IsTraversableOnce.js.map
