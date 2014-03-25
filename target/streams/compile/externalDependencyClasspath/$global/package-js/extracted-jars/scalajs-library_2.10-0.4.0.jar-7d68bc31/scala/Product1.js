ScalaJS.is.scala_Product1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product1)))
});
ScalaJS.as.scala_Product1 = (function(obj) {
  if ((ScalaJS.is.scala_Product1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product1")
  }
});
ScalaJS.isArrayOf.scala_Product1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product1)))
});
ScalaJS.asArrayOf.scala_Product1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product1;", depth)
  }
});
ScalaJS.data.scala_Product1 = new ScalaJS.ClassTypeData({
  scala_Product1: 0
}, true, "scala.Product1", undefined, {
  scala_Product1: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Product1.js.map
