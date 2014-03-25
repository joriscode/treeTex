/** @constructor */
ScalaJS.c.scala_xml_parsing_XhtmlParser$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_parsing_XhtmlParser$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_parsing_XhtmlParser$.prototype.constructor = ScalaJS.c.scala_xml_parsing_XhtmlParser$;
ScalaJS.c.scala_xml_parsing_XhtmlParser$.prototype.apply__Lscala_io_Source__Lscala_xml_NodeSeq = (function(source) {
  return ScalaJS.as.scala_xml_parsing_MarkupParser(new ScalaJS.c.scala_xml_parsing_XhtmlParser().init___Lscala_io_Source(source).initialize__Lscala_xml_parsing_MarkupHandler()).document__Lscala_xml_Document()
});
ScalaJS.c.scala_xml_parsing_XhtmlParser$.prototype.apply__Lscala_io_Source__ = (function(source) {
  return this.apply__Lscala_io_Source__Lscala_xml_NodeSeq(source)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_XhtmlParser$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_XhtmlParser$.prototype = ScalaJS.c.scala_xml_parsing_XhtmlParser$.prototype;
ScalaJS.is.scala_xml_parsing_XhtmlParser$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_XhtmlParser$)))
});
ScalaJS.as.scala_xml_parsing_XhtmlParser$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_XhtmlParser$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.XhtmlParser")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_XhtmlParser$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_XhtmlParser$)))
});
ScalaJS.asArrayOf.scala_xml_parsing_XhtmlParser$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_XhtmlParser$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.XhtmlParser;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_XhtmlParser$ = new ScalaJS.ClassTypeData({
  scala_xml_parsing_XhtmlParser$: 0
}, false, "scala.xml.parsing.XhtmlParser$", ScalaJS.data.java_lang_Object, {
  scala_xml_parsing_XhtmlParser$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_XhtmlParser$.prototype.$classData = ScalaJS.data.scala_xml_parsing_XhtmlParser$;
ScalaJS.moduleInstances.scala_xml_parsing_XhtmlParser = undefined;
ScalaJS.modules.scala_xml_parsing_XhtmlParser = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_parsing_XhtmlParser)) {
    ScalaJS.moduleInstances.scala_xml_parsing_XhtmlParser = new ScalaJS.c.scala_xml_parsing_XhtmlParser$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_parsing_XhtmlParser
});
//@ sourceMappingURL=XhtmlParser$.js.map
