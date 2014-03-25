ScalaJS.is.scala_collection_generic_Growable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_Growable)))
});
ScalaJS.as.scala_collection_generic_Growable = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_Growable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.Growable")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_Growable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_Growable)))
});
ScalaJS.asArrayOf.scala_collection_generic_Growable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_Growable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.Growable;", depth)
  }
});
ScalaJS.data.scala_collection_generic_Growable = new ScalaJS.ClassTypeData({
  scala_collection_generic_Growable: 0
}, true, "scala.collection.generic.Growable", undefined, {
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Growable.js.map
