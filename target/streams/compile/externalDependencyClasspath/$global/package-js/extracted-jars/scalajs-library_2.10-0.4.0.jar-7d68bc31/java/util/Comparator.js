ScalaJS.is.java_util_Comparator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Comparator)))
});
ScalaJS.as.java_util_Comparator = (function(obj) {
  if ((ScalaJS.is.java_util_Comparator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Comparator")
  }
});
ScalaJS.isArrayOf.java_util_Comparator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Comparator)))
});
ScalaJS.asArrayOf.java_util_Comparator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Comparator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Comparator;", depth)
  }
});
ScalaJS.data.java_util_Comparator = new ScalaJS.ClassTypeData({
  java_util_Comparator: 0
}, true, "java.util.Comparator", undefined, {
  java_util_Comparator: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Comparator.js.map
