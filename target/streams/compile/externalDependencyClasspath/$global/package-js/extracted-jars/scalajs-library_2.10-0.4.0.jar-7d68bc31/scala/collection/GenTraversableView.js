ScalaJS.is.scala_collection_GenTraversableView = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_GenTraversableView)))
});
ScalaJS.as.scala_collection_GenTraversableView = (function(obj) {
  if ((ScalaJS.is.scala_collection_GenTraversableView(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.GenTraversableView")
  }
});
ScalaJS.isArrayOf.scala_collection_GenTraversableView = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_GenTraversableView)))
});
ScalaJS.asArrayOf.scala_collection_GenTraversableView = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_GenTraversableView(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.GenTraversableView;", depth)
  }
});
ScalaJS.data.scala_collection_GenTraversableView = new ScalaJS.ClassTypeData({
  scala_collection_GenTraversableView: 0
}, true, "scala.collection.GenTraversableView", undefined, {
  scala_collection_GenTraversableView: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_generic_HasNewBuilder: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=GenTraversableView.js.map
