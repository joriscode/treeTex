ScalaJS.is.scala_collection_ViewMkString = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_ViewMkString)))
});
ScalaJS.as.scala_collection_ViewMkString = (function(obj) {
  if ((ScalaJS.is.scala_collection_ViewMkString(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.ViewMkString")
  }
});
ScalaJS.isArrayOf.scala_collection_ViewMkString = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_ViewMkString)))
});
ScalaJS.asArrayOf.scala_collection_ViewMkString = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_ViewMkString(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.ViewMkString;", depth)
  }
});
ScalaJS.data.scala_collection_ViewMkString = new ScalaJS.ClassTypeData({
  scala_collection_ViewMkString: 0
}, true, "scala.collection.ViewMkString", undefined, {
  scala_collection_ViewMkString: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ViewMkString.js.map
