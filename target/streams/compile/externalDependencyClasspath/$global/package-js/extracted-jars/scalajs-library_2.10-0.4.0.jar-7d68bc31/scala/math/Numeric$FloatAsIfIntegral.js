ScalaJS.is.scala_math_Numeric$FloatAsIfIntegral = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$FloatAsIfIntegral)))
});
ScalaJS.as.scala_math_Numeric$FloatAsIfIntegral = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$FloatAsIfIntegral(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric$FloatAsIfIntegral")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$FloatAsIfIntegral = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$FloatAsIfIntegral)))
});
ScalaJS.asArrayOf.scala_math_Numeric$FloatAsIfIntegral = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$FloatAsIfIntegral(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric$FloatAsIfIntegral;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$FloatAsIfIntegral = new ScalaJS.ClassTypeData({
  scala_math_Numeric$FloatAsIfIntegral: 0
}, true, "scala.math.Numeric$FloatAsIfIntegral", undefined, {
  scala_math_Numeric$FloatAsIfIntegral: 1,
  scala_math_Integral: 1,
  scala_math_Numeric$FloatIsConflicted: 1,
  scala_math_Numeric: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Numeric$FloatAsIfIntegral.js.map
