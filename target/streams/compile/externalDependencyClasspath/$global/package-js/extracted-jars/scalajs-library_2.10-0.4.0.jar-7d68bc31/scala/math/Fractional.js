ScalaJS.is.scala_math_Fractional = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Fractional)))
});
ScalaJS.as.scala_math_Fractional = (function(obj) {
  if ((ScalaJS.is.scala_math_Fractional(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Fractional")
  }
});
ScalaJS.isArrayOf.scala_math_Fractional = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Fractional)))
});
ScalaJS.asArrayOf.scala_math_Fractional = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Fractional(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Fractional;", depth)
  }
});
ScalaJS.data.scala_math_Fractional = new ScalaJS.ClassTypeData({
  scala_math_Fractional: 0
}, true, "scala.math.Fractional", undefined, {
  scala_math_Fractional: 1,
  scala_math_Numeric: 1,
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Fractional.js.map
