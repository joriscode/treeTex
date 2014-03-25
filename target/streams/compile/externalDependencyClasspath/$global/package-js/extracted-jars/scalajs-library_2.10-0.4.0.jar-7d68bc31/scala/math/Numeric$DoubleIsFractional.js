ScalaJS.is.scala_math_Numeric$DoubleIsFractional = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$DoubleIsFractional)))
});
ScalaJS.as.scala_math_Numeric$DoubleIsFractional = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$DoubleIsFractional(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric$DoubleIsFractional")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$DoubleIsFractional = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$DoubleIsFractional)))
});
ScalaJS.asArrayOf.scala_math_Numeric$DoubleIsFractional = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$DoubleIsFractional(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric$DoubleIsFractional;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$DoubleIsFractional = new ScalaJS.ClassTypeData({
  scala_math_Numeric$DoubleIsFractional: 0
}, true, "scala.math.Numeric$DoubleIsFractional", undefined, {
  scala_math_Numeric$DoubleIsFractional: 1,
  scala_math_Fractional: 1,
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
//@ sourceMappingURL=Numeric$DoubleIsFractional.js.map
