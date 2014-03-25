ScalaJS.is.scala_xml_Equality = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Equality)))
});
ScalaJS.as.scala_xml_Equality = (function(obj) {
  if ((ScalaJS.is.scala_xml_Equality(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Equality")
  }
});
ScalaJS.isArrayOf.scala_xml_Equality = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Equality)))
});
ScalaJS.asArrayOf.scala_xml_Equality = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Equality(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Equality;", depth)
  }
});
ScalaJS.data.scala_xml_Equality = new ScalaJS.ClassTypeData({
  scala_xml_Equality: 0
}, true, "scala.xml.Equality", undefined, {
  scala_xml_Equality: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Equality.js.map
