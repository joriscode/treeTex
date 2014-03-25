ScalaJS.is.scala_collection_TraversableView = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_TraversableView)))
});
ScalaJS.as.scala_collection_TraversableView = (function(obj) {
  if ((ScalaJS.is.scala_collection_TraversableView(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.TraversableView")
  }
});
ScalaJS.isArrayOf.scala_collection_TraversableView = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_TraversableView)))
});
ScalaJS.asArrayOf.scala_collection_TraversableView = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_TraversableView(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.TraversableView;", depth)
  }
});
ScalaJS.data.scala_collection_TraversableView = new ScalaJS.ClassTypeData({
  scala_collection_TraversableView: 0
}, true, "scala.collection.TraversableView", undefined, {
  scala_collection_TraversableView: 1,
  scala_collection_GenTraversableView: 1,
  scala_collection_TraversableViewLike: 1,
  scala_collection_GenTraversableViewLike: 1,
  scala_collection_ViewMkString: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=TraversableView.js.map
