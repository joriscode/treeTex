ScalaJS.is.java_io_Closeable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_io_Closeable)))
});
ScalaJS.as.java_io_Closeable = (function(obj) {
  if ((ScalaJS.is.java_io_Closeable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.Closeable")
  }
});
ScalaJS.isArrayOf.java_io_Closeable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_Closeable)))
});
ScalaJS.asArrayOf.java_io_Closeable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_Closeable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.Closeable;", depth)
  }
});
ScalaJS.data.java_io_Closeable = new ScalaJS.ClassTypeData({
  java_io_Closeable: 0
}, true, "java.io.Closeable", undefined, {
  java_io_Closeable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Closeable.js.map
