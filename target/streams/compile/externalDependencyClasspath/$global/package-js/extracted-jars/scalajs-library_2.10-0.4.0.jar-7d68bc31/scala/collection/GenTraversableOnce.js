ScalaJS.is.scala_collection_GenTraversableOnce = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversableOnce)))
});
ScalaJS.as.scala_collection_GenTraversableOnce = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversableOnce(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversableOnce")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversableOnce = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversableOnce)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversableOnce = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversableOnce(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversableOnce;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversableOnce = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversableOnce: 0
}, true, "scala.collection.GenTraversableOnce", undefined, {
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenTraversableOnce.js.map
