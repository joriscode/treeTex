ScalaJS.is.scala_math_Ordering = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_math_Ordering)))
});
ScalaJS.as.scala_math_Ordering = (function(obj) {
  if ((ScalaJS.is.scala_math_Ordering(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.math.Ordering")
  }
});
ScalaJS.isArrayOf.scala_math_Ordering = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_math_Ordering)))
});
ScalaJS.asArrayOf.scala_math_Ordering = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_math_Ordering(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.math.Ordering;", depth)
  }
});
ScalaJS.data.scala_math_Ordering = new ScalaJS.ClassTypeData({
  scala_math_Ordering: 0
}, true, "scala.math.Ordering", undefined, {
  scala_math_Ordering: 1,
  scala_math_PartialOrdering: 1,
  scala_math_Equiv: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_util_Comparator: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Ordering.js.map
