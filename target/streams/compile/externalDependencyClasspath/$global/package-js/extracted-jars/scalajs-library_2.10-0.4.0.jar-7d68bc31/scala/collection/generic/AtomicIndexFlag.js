ScalaJS.is.scala_collection_generic_AtomicIndexFlag = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_AtomicIndexFlag)))
});
ScalaJS.as.scala_collection_generic_AtomicIndexFlag = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_AtomicIndexFlag(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.AtomicIndexFlag")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_AtomicIndexFlag = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_AtomicIndexFlag)))
});
ScalaJS.asArrayOf.scala_collection_generic_AtomicIndexFlag = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_AtomicIndexFlag(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.AtomicIndexFlag;", depth)
  }
});
ScalaJS.data.scala_collection_generic_AtomicIndexFlag = new ScalaJS.ClassTypeData({
  scala_collection_generic_AtomicIndexFlag: 0
}, true, "scala.collection.generic.AtomicIndexFlag", undefined, {
  scala_collection_generic_AtomicIndexFlag: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=AtomicIndexFlag.js.map
