ScalaJS.is.scala_Serializable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Serializable)))
});
ScalaJS.as.scala_Serializable = (function(obj) {
  if ((ScalaJS.is.scala_Serializable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Serializable")
  }
});
ScalaJS.isArrayOf.scala_Serializable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Serializable)))
});
ScalaJS.asArrayOf.scala_Serializable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Serializable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Serializable;", depth)
  }
});
ScalaJS.data.scala_Serializable = new ScalaJS.ClassTypeData({
  scala_Serializable: 0
}, true, "scala.Serializable", undefined, {
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Serializable.js.map
