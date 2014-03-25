ScalaJS.is.scala_Function1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Function1)))
});
ScalaJS.as.scala_Function1 = (function(obj) {
  if ((ScalaJS.is.scala_Function1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Function1")
  }
});
ScalaJS.isArrayOf.scala_Function1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Function1)))
});
ScalaJS.asArrayOf.scala_Function1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Function1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Function1;", depth)
  }
});
ScalaJS.data.scala_Function1 = new ScalaJS.ClassTypeData({
  scala_Function1: 0
}, true, "scala.Function1", undefined, {
  scala_Function1: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Function1.js.map
