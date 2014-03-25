ScalaJS.is.scala_Product2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product2)))
});
ScalaJS.as.scala_Product2 = (function(obj) {
  if ((ScalaJS.is.scala_Product2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product2")
  }
});
ScalaJS.isArrayOf.scala_Product2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product2)))
});
ScalaJS.asArrayOf.scala_Product2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product2;", depth)
  }
});
ScalaJS.data.scala_Product2 = new ScalaJS.ClassTypeData({
  scala_Product2: 0
}, true, "scala.Product2", undefined, {
  scala_Product2: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Product2.js.map
