ScalaJS.is.scala_collection_script_Scriptable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Scriptable)))
});
ScalaJS.as.scala_collection_script_Scriptable = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Scriptable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Scriptable")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Scriptable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Scriptable)))
});
ScalaJS.asArrayOf.scala_collection_script_Scriptable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Scriptable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Scriptable;", depth)
  }
});
ScalaJS.data.scala_collection_script_Scriptable = new ScalaJS.ClassTypeData({
  scala_collection_script_Scriptable: 0
}, true, "scala.collection.script.Scriptable", undefined, {
  scala_collection_script_Scriptable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Scriptable.js.map
