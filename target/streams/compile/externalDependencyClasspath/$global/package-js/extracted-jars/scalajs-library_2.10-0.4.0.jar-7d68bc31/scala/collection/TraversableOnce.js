ScalaJS.is.scala_collection_TraversableOnce = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableOnce)))
});
ScalaJS.as.scala_collection_TraversableOnce = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableOnce(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableOnce")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableOnce = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableOnce)))
});
ScalaJS.asArrayOf.scala_collection_TraversableOnce = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableOnce(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableOnce;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableOnce = new ScalaJS.ClassTypeData({
  scala_collection_TraversableOnce: 0
}, true, "scala.collection.TraversableOnce", undefined, {
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=TraversableOnce.js.map
