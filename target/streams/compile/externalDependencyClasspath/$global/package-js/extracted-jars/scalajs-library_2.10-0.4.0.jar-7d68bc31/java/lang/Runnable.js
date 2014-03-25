ScalaJS.is.java_lang_Runnable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Runnable)))
});
ScalaJS.as.java_lang_Runnable = (function(obj) {
  if ((ScalaJS.is.java_lang_Runnable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Runnable")
  }
});
ScalaJS.isArrayOf.java_lang_Runnable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Runnable)))
});
ScalaJS.asArrayOf.java_lang_Runnable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Runnable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Runnable;", depth)
  }
});
ScalaJS.data.java_lang_Runnable = new ScalaJS.ClassTypeData({
  java_lang_Runnable: 0
}, true, "java.lang.Runnable", undefined, {
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Runnable.js.map
