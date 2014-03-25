ScalaJS.is.java_lang_Appendable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Appendable)))
});
ScalaJS.as.java_lang_Appendable = (function(obj) {
  if ((ScalaJS.is.java_lang_Appendable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Appendable")
  }
});
ScalaJS.isArrayOf.java_lang_Appendable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Appendable)))
});
ScalaJS.asArrayOf.java_lang_Appendable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Appendable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Appendable;", depth)
  }
});
ScalaJS.data.java_lang_Appendable = new ScalaJS.ClassTypeData({
  java_lang_Appendable: 0
}, true, "java.lang.Appendable", undefined, {
  java_lang_Appendable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Appendable.js.map
