ScalaJS.is.java_io_Serializable = (function(obj) {
  return (!(!(((obj && obj.$classData) && obj.$classData.ancestors.java_io_Serializable) || (typeof(obj) === "string"))))
});
ScalaJS.as.java_io_Serializable = (function(obj) {
  if ((ScalaJS.is.java_io_Serializable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.Serializable")
  }
});
ScalaJS.isArrayOf.java_io_Serializable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_Serializable)))
});
ScalaJS.asArrayOf.java_io_Serializable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_Serializable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.Serializable;", depth)
  }
});
ScalaJS.data.java_io_Serializable = new ScalaJS.ClassTypeData({
  java_io_Serializable: 0
}, true, "java.io.Serializable", undefined, {
  java_io_Serializable: 1,
  java_lang_Object: 1
}, ScalaJS.is.java_io_Serializable);
//@ sourceMappingURL=Serializable.js.map
