ScalaJS.is.java_lang_Comparable = (function(obj) {
  return (!(!(((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Comparable) || (typeof(obj) === "string"))))
});
ScalaJS.as.java_lang_Comparable = (function(obj) {
  if ((ScalaJS.is.java_lang_Comparable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Comparable")
  }
});
ScalaJS.isArrayOf.java_lang_Comparable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Comparable)))
});
ScalaJS.asArrayOf.java_lang_Comparable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Comparable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Comparable;", depth)
  }
});
ScalaJS.data.java_lang_Comparable = new ScalaJS.ClassTypeData({
  java_lang_Comparable: 0
}, true, "java.lang.Comparable", undefined, {
  java_lang_Comparable: 1,
  java_lang_Object: 1
}, ScalaJS.is.java_lang_Comparable);
//@ sourceMappingURL=Comparable.js.map
