ScalaJS.is.scala_collection_generic_Clearable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_Clearable)))
});
ScalaJS.as.scala_collection_generic_Clearable = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_Clearable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.Clearable")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_Clearable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_Clearable)))
});
ScalaJS.asArrayOf.scala_collection_generic_Clearable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_Clearable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.Clearable;", depth)
  }
});
ScalaJS.data.scala_collection_generic_Clearable = new ScalaJS.ClassTypeData({
  scala_collection_generic_Clearable: 0
}, true, "scala.collection.generic.Clearable", undefined, {
  scala_collection_generic_Clearable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Clearable.js.map
