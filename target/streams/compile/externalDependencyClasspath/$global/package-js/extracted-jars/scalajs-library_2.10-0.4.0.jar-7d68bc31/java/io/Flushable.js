ScalaJS.is.java_io_Flushable = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.java_io_Flushable)))
});
ScalaJS.as.java_io_Flushable = (function(obj) {
  if ((ScalaJS.is.java_io_Flushable(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "java.io.Flushable")
  }
});
ScalaJS.isArrayOf.java_io_Flushable = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.java_io_Flushable)))
});
ScalaJS.asArrayOf.java_io_Flushable = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.java_io_Flushable(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Ljava.io.Flushable;", depth)
  }
});
ScalaJS.data.java_io_Flushable = new ScalaJS.ClassTypeData({
  java_io_Flushable: 0
}, true, "java.io.Flushable", undefined, {
  java_io_Flushable: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Flushable.js.map
