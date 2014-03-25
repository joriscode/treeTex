ScalaJS.is.scala_math_Numeric$DoubleAsIfIntegral = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$DoubleAsIfIntegral)))
});
ScalaJS.as.scala_math_Numeric$DoubleAsIfIntegral = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$DoubleAsIfIntegral(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric$DoubleAsIfIntegral")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$DoubleAsIfIntegral = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$DoubleAsIfIntegral)))
});
ScalaJS.asArrayOf.scala_math_Numeric$DoubleAsIfIntegral = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$DoubleAsIfIntegral(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric$DoubleAsIfIntegral;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$DoubleAsIfIntegral = new ScalaJS.ClassTypeData({
  scala_math_Numeric$DoubleAsIfIntegral: 0
}, true, "scala.math.Numeric$DoubleAsIfIntegral", undefined, {
  scala_math_Numeric$DoubleAsIfIntegral: 1,
  scala_math_Integral: 1,
  scala_math_Numeric$DoubleIsConflicted: 1,
  scala_math_Numeric: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Numeric$DoubleAsIfIntegral.js.map
