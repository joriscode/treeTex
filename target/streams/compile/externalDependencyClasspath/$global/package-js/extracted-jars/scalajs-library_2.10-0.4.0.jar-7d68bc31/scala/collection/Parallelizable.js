ScalaJS.is.scala_collection_Parallelizable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_Parallelizable)))
});
ScalaJS.as.scala_collection_Parallelizable = (function(obj) {
  if ((ScalaJS.is.scala_collection_Parallelizable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.Parallelizable")
  }
});
ScalaJS.isArrayOf.scala_collection_Parallelizable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_Parallelizable)))
});
ScalaJS.asArrayOf.scala_collection_Parallelizable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_Parallelizable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.Parallelizable;", depth)
  }
});
ScalaJS.data.scala_collection_Parallelizable = new ScalaJS.ClassTypeData({
  scala_collection_Parallelizable: 0
}, true, "scala.collection.Parallelizable", undefined, {
  scala_collection_Parallelizable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Parallelizable.js.map
