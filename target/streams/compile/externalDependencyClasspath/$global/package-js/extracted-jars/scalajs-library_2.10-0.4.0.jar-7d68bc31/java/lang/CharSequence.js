ScalaJS.is.java_lang_CharSequence = (function(obj) {
  return (!(!(((obj && obj.$classData) && obj.$classData.ancestors.java_lang_CharSequence) || (typeof(obj) === "string"))))
});
ScalaJS.as.java_lang_CharSequence = (function(obj) {
  if ((ScalaJS.is.java_lang_CharSequence(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.lang.CharSequence")
  }
});
ScalaJS.isArrayOf.java_lang_CharSequence = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_lang_CharSequence)))
});
ScalaJS.asArrayOf.java_lang_CharSequence = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_lang_CharSequence(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.lang.CharSequence;", depth)
  }
});
ScalaJS.data.java_lang_CharSequence = new ScalaJS.ClassTypeData({
  java_lang_CharSequence: 0
}, true, "java.lang.CharSequence", undefined, {
  java_lang_CharSequence: 1,
  java_lang_Object: 1
}, ScalaJS.is.java_lang_CharSequence);
//@ sourceMappingURL=CharSequence.js.map
