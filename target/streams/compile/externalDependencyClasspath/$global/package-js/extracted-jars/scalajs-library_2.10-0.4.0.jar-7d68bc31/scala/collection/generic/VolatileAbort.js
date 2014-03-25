ScalaJS.is.scala_collection_generic_VolatileAbort = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_VolatileAbort)))
});
ScalaJS.as.scala_collection_generic_VolatileAbort = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_VolatileAbort(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.VolatileAbort")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_VolatileAbort = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_VolatileAbort)))
});
ScalaJS.asArrayOf.scala_collection_generic_VolatileAbort = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_VolatileAbort(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.VolatileAbort;", depth)
  }
});
ScalaJS.data.scala_collection_generic_VolatileAbort = new ScalaJS.ClassTypeData({
  scala_collection_generic_VolatileAbort: 0
}, true, "scala.collection.generic.VolatileAbort", undefined, {
  scala_collection_generic_VolatileAbort: 1,
  scala_collection_generic_Signalling: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=VolatileAbort.js.map
