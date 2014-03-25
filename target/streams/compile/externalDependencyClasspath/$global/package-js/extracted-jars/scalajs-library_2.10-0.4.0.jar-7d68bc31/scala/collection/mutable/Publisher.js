ScalaJS.is.scala_collection_mutable_Publisher = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_Publisher)))
});
ScalaJS.as.scala_collection_mutable_Publisher = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_Publisher(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.Publisher")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_Publisher = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_Publisher)))
});
ScalaJS.asArrayOf.scala_collection_mutable_Publisher = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_Publisher(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.Publisher;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_Publisher = new ScalaJS.ClassTypeData({
  scala_collection_mutable_Publisher: 0
}, true, "scala.collection.mutable.Publisher", undefined, {
  scala_collection_mutable_Publisher: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Publisher.js.map
