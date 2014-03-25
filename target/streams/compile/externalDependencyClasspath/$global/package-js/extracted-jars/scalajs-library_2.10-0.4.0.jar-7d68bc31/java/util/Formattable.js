ScalaJS.is.java_util_Formattable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_util_Formattable)))
});
ScalaJS.as.java_util_Formattable = (function(obj) {
  if ((ScalaJS.is.java_util_Formattable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.util.Formattable")
  }
});
ScalaJS.isArrayOf.java_util_Formattable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_util_Formattable)))
});
ScalaJS.asArrayOf.java_util_Formattable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_util_Formattable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.util.Formattable;", depth)
  }
});
ScalaJS.data.java_util_Formattable = new ScalaJS.ClassTypeData({
  java_util_Formattable: 0
}, true, "java.util.Formattable", undefined, {
  java_util_Formattable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Formattable.js.map
