ScalaJS.is.scala_collection_generic_DelegatedSignalling = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_DelegatedSignalling)))
});
ScalaJS.as.scala_collection_generic_DelegatedSignalling = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_DelegatedSignalling(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.DelegatedSignalling")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_DelegatedSignalling = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_DelegatedSignalling)))
});
ScalaJS.asArrayOf.scala_collection_generic_DelegatedSignalling = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_DelegatedSignalling(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.DelegatedSignalling;", depth)
  }
});
ScalaJS.data.scala_collection_generic_DelegatedSignalling = new ScalaJS.ClassTypeData({
  scala_collection_generic_DelegatedSignalling: 0
}, true, "scala.collection.generic.DelegatedSignalling", undefined, {
  scala_collection_generic_DelegatedSignalling: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=DelegatedSignalling.js.map
