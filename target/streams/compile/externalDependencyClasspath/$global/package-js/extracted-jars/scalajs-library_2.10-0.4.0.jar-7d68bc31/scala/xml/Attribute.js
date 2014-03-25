ScalaJS.is.scala_xml_Attribute = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Attribute)))
});
ScalaJS.as.scala_xml_Attribute = (function(obj) {
  if ((ScalaJS.is.scala_xml_Attribute(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Attribute")
  }
});
ScalaJS.isArrayOf.scala_xml_Attribute = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Attribute)))
});
ScalaJS.asArrayOf.scala_xml_Attribute = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Attribute(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Attribute;", depth)
  }
});
ScalaJS.data.scala_xml_Attribute = new ScalaJS.ClassTypeData({
  scala_xml_Attribute: 0
}, true, "scala.xml.Attribute", undefined, {
  scala_xml_Attribute: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=Attribute.js.map
