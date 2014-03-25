ScalaJS.is.scala_PartialFunction = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_PartialFunction)))
});
ScalaJS.as.scala_PartialFunction = (function(obj) {
  if ((ScalaJS.is.scala_PartialFunction(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.PartialFunction")
  }
});
ScalaJS.isArrayOf.scala_PartialFunction = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_PartialFunction)))
});
ScalaJS.asArrayOf.scala_PartialFunction = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_PartialFunction(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.PartialFunction;", depth)
  }
});
ScalaJS.data.scala_PartialFunction = new ScalaJS.ClassTypeData({
  scala_PartialFunction: 0
}, true, "scala.PartialFunction", undefined, {
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=PartialFunction.js.map
