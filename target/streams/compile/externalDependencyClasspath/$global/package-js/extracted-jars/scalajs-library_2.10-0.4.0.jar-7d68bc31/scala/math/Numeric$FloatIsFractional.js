ScalaJS.is.scala_math_Numeric$FloatIsFractional = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Numeric$FloatIsFractional)))
});
ScalaJS.as.scala_math_Numeric$FloatIsFractional = (function(obj) {
  if ((ScalaJS.is.scala_math_Numeric$FloatIsFractional(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Numeric$FloatIsFractional")
  }
});
ScalaJS.isArrayOf.scala_math_Numeric$FloatIsFractional = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Numeric$FloatIsFractional)))
});
ScalaJS.asArrayOf.scala_math_Numeric$FloatIsFractional = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Numeric$FloatIsFractional(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Numeric$FloatIsFractional;", depth)
  }
});
ScalaJS.data.scala_math_Numeric$FloatIsFractional = new ScalaJS.ClassTypeData({
  scala_math_Numeric$FloatIsFractional: 0
}, true, "scala.math.Numeric$FloatIsFractional", undefined, {
  scala_math_Numeric$FloatIsFractional: 1,
  scala_math_Fractional: 1,
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
//@ sourceMappingURL=Numeric$FloatIsFractional.js.map
