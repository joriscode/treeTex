ScalaJS.is.java_lang_Cloneable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_lang_Cloneable)))
});
ScalaJS.as.java_lang_Cloneable = (function(obj) {
  if ((ScalaJS.is.java_lang_Cloneable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.Cloneable")
  }
});
ScalaJS.isArrayOf.java_lang_Cloneable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_Cloneable)))
});
ScalaJS.asArrayOf.java_lang_Cloneable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_Cloneable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.Cloneable;", depth)
  }
});
ScalaJS.data.java_lang_Cloneable = new ScalaJS.ClassTypeData({
  java_lang_Cloneable: 0
}, true, "java.lang.Cloneable", undefined, {
  java_lang_Cloneable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Cloneable.js.map
