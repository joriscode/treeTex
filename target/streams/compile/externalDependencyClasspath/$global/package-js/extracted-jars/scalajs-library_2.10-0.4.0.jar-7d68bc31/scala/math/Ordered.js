ScalaJS.is.scala_math_Ordered = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordered)))
});
ScalaJS.as.scala_math_Ordered = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordered(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordered")
  }
});
ScalaJS.isArrayOf.scala_math_Ordered = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordered)))
});
ScalaJS.asArrayOf.scala_math_Ordered = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordered(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordered;", depth)
  }
});
ScalaJS.data.scala_math_Ordered = new ScalaJS.ClassTypeData({
  scala_math_Ordered: 0
}, true, "scala.math.Ordered", undefined, {
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Ordered.js.map
