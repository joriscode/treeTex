ScalaJS.is.scala_math_ScalaNumericConversions = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_ScalaNumericConversions)))
});
ScalaJS.as.scala_math_ScalaNumericConversions = (function(obj) {
  if ((ScalaJS.is.scala_math_ScalaNumericConversions(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.ScalaNumericConversions")
  }
});
ScalaJS.isArrayOf.scala_math_ScalaNumericConversions = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_ScalaNumericConversions)))
});
ScalaJS.asArrayOf.scala_math_ScalaNumericConversions = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_ScalaNumericConversions(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.ScalaNumericConversions;", depth)
  }
});
ScalaJS.data.scala_math_ScalaNumericConversions = new ScalaJS.ClassTypeData({
  scala_math_ScalaNumericConversions: 0
}, true, "scala.math.ScalaNumericConversions", undefined, {
  scala_math_ScalaNumericConversions: 1,
  scala_math_ScalaNumericAnyConversions: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=ScalaNumericConversions.js.map
