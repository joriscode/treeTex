ScalaJS.is.scala_collection_CustomParallelizable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_CustomParallelizable)))
});
ScalaJS.as.scala_collection_CustomParallelizable = (function(obj) {
  if ((ScalaJS.is.scala_collection_CustomParallelizable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.CustomParallelizable")
  }
});
ScalaJS.isArrayOf.scala_collection_CustomParallelizable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_CustomParallelizable)))
});
ScalaJS.asArrayOf.scala_collection_CustomParallelizable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_CustomParallelizable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.CustomParallelizable;", depth)
  }
});
ScalaJS.data.scala_collection_CustomParallelizable = new ScalaJS.ClassTypeData({
  scala_collection_CustomParallelizable: 0
}, true, "scala.collection.CustomParallelizable", undefined, {
  scala_collection_CustomParallelizable: 1,
  scala_collection_Parallelizable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=CustomParallelizable.js.map
