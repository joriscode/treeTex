ScalaJS.is.scala_Proxy = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Proxy)))
});
ScalaJS.as.scala_Proxy = (function(obj) {
  if ((ScalaJS.is.scala_Proxy(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Proxy")
  }
});
ScalaJS.isArrayOf.scala_Proxy = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Proxy)))
});
ScalaJS.asArrayOf.scala_Proxy = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Proxy(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Proxy;", depth)
  }
});
ScalaJS.data.scala_Proxy = new ScalaJS.ClassTypeData({
  scala_Proxy: 0
}, true, "scala.Proxy", undefined, {
  scala_Proxy: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Proxy.js.map
