ScalaJS.is.scala_collection_GenSeq = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenSeq)))
});
ScalaJS.as.scala_collection_GenSeq = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenSeq(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenSeq")
  }
});
ScalaJS.isArrayOf.scala_collection_GenSeq = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenSeq)))
});
ScalaJS.asArrayOf.scala_collection_GenSeq = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenSeq(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenSeq;", depth)
  }
});
ScalaJS.data.scala_collection_GenSeq = new ScalaJS.ClassTypeData({
  scala_collection_GenSeq: 0
}, true, "scala.collection.GenSeq", undefined, {
  scala_collection_GenSeq: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenSeqLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenSeq.js.map
