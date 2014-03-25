ScalaJS.is.scala_collection_generic_IsTraversableLike = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_IsTraversableLike)))
});
ScalaJS.as.scala_collection_generic_IsTraversableLike = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_IsTraversableLike(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.IsTraversableLike")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_IsTraversableLike = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_IsTraversableLike)))
});
ScalaJS.asArrayOf.scala_collection_generic_IsTraversableLike = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_IsTraversableLike(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.IsTraversableLike;", depth)
  }
});
ScalaJS.data.scala_collection_generic_IsTraversableLike = new ScalaJS.ClassTypeData({
  scala_collection_generic_IsTraversableLike: 0
}, true, "scala.collection.generic.IsTraversableLike", undefined, {
  scala_collection_generic_IsTraversableLike: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=IsTraversableLike.js.map
