ScalaJS.is.scala_NotNull = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_NotNull)))
});
ScalaJS.as.scala_NotNull = (function(obj) {
  if ((ScalaJS.is.scala_NotNull(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.NotNull")
  }
});
ScalaJS.isArrayOf.scala_NotNull = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_NotNull)))
});
ScalaJS.asArrayOf.scala_NotNull = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_NotNull(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.NotNull;", depth)
  }
});
ScalaJS.data.scala_NotNull = new ScalaJS.ClassTypeData({
  scala_NotNull: 0
}, true, "scala.NotNull", undefined, {
  scala_NotNull: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=NotNull.js.map
