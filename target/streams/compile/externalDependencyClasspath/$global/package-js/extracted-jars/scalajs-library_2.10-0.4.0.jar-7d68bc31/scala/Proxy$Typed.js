ScalaJS.is.scala_Proxy$Typed = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Proxy$Typed)))
});
ScalaJS.as.scala_Proxy$Typed = (function(obj) {
  if ((ScalaJS.is.scala_Proxy$Typed(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Proxy$Typed")
  }
});
ScalaJS.isArrayOf.scala_Proxy$Typed = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Proxy$Typed)))
});
ScalaJS.asArrayOf.scala_Proxy$Typed = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Proxy$Typed(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Proxy$Typed;", depth)
  }
});
ScalaJS.data.scala_Proxy$Typed = new ScalaJS.ClassTypeData({
  scala_Proxy$Typed: 0
}, true, "scala.Proxy$Typed", undefined, {
  scala_Proxy$Typed: 1,
  scala_Proxy: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Proxy$Typed.js.map
