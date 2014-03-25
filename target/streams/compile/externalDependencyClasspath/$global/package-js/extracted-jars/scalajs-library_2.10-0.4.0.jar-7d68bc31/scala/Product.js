ScalaJS.is.scala_Product = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Product)))
});
ScalaJS.as.scala_Product = (function(obj) {
  if ((ScalaJS.is.scala_Product(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Product")
  }
});
ScalaJS.isArrayOf.scala_Product = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Product)))
});
ScalaJS.asArrayOf.scala_Product = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Product(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Product;", depth)
  }
});
ScalaJS.data.scala_Product = new ScalaJS.ClassTypeData({
  scala_Product: 0
}, true, "scala.Product", undefined, {
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Product.js.map
