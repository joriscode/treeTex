ScalaJS.is.scala_Equals = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Equals)))
});
ScalaJS.as.scala_Equals = (function(obj) {
  if ((ScalaJS.is.scala_Equals(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Equals")
  }
});
ScalaJS.isArrayOf.scala_Equals = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Equals)))
});
ScalaJS.asArrayOf.scala_Equals = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Equals(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Equals;", depth)
  }
});
ScalaJS.data.scala_Equals = new ScalaJS.ClassTypeData({
  scala_Equals: 0
}, true, "scala.Equals", undefined, {
  scala_Equals: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Equals.js.map
