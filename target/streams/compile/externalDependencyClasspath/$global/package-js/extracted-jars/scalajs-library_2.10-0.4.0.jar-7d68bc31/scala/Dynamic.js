ScalaJS.is.scala_Dynamic = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Dynamic)))
});
ScalaJS.as.scala_Dynamic = (function(obj) {
  if ((ScalaJS.is.scala_Dynamic(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Dynamic")
  }
});
ScalaJS.isArrayOf.scala_Dynamic = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Dynamic)))
});
ScalaJS.asArrayOf.scala_Dynamic = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Dynamic(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Dynamic;", depth)
  }
});
ScalaJS.data.scala_Dynamic = new ScalaJS.ClassTypeData({
  scala_Dynamic: 0
}, true, "scala.Dynamic", undefined, {
  scala_Dynamic: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Dynamic.js.map
