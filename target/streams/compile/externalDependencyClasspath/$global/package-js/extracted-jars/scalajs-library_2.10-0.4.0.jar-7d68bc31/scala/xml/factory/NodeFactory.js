ScalaJS.is.scala_xml_factory_NodeFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_factory_NodeFactory)))
});
ScalaJS.as.scala_xml_factory_NodeFactory = (function(obj) {
  if ((ScalaJS.is.scala_xml_factory_NodeFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.factory.NodeFactory")
  }
});
ScalaJS.isArrayOf.scala_xml_factory_NodeFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_factory_NodeFactory)))
});
ScalaJS.asArrayOf.scala_xml_factory_NodeFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_factory_NodeFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.factory.NodeFactory;", depth)
  }
});
ScalaJS.data.scala_xml_factory_NodeFactory = new ScalaJS.ClassTypeData({
  scala_xml_factory_NodeFactory: 0
}, true, "scala.xml.factory.NodeFactory", undefined, {
  scala_xml_factory_NodeFactory: 1,
  java_lang_Object: 1
});
//@ sourceMappingURL=NodeFactory.js.map
