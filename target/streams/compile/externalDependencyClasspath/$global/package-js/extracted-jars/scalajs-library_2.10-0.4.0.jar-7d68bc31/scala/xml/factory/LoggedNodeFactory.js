ScalaJS.is.scala_xml_factory_LoggedNodeFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_factory_LoggedNodeFactory)))
});
ScalaJS.as.scala_xml_factory_LoggedNodeFactory = (function(obj) {
  if ((ScalaJS.is.scala_xml_factory_LoggedNodeFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.factory.LoggedNodeFactory")
  }
});
ScalaJS.isArrayOf.scala_xml_factory_LoggedNodeFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_factory_LoggedNodeFactory)))
});
ScalaJS.asArrayOf.scala_xml_factory_LoggedNodeFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_factory_LoggedNodeFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.factory.LoggedNodeFactory;", depth)
  }
});
ScalaJS.data.scala_xml_factory_LoggedNodeFactory = new ScalaJS.ClassTypeData({
  scala_xml_factory_LoggedNodeFactory: 0
}, true, "scala.xml.factory.LoggedNodeFactory", undefined, {
  scala_xml_factory_LoggedNodeFactory: 1,
  scala_util_logging_Logged: 1,
  scala_xml_factory_NodeFactory: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=LoggedNodeFactory.js.map
