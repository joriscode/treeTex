/** @constructor */
ScalaJS.c.scala_xml_parsing_ConstructingParser$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype.constructor = ScalaJS.c.scala_xml_parsing_ConstructingParser$;
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype.fromFile__Ljava_io_File__Z__Lscala_xml_parsing_ConstructingParser = (function(inp, preserveWS) {
  return ScalaJS.as.scala_xml_parsing_ConstructingParser(new ScalaJS.c.scala_xml_parsing_ConstructingParser().init___Lscala_io_Source__Z(ScalaJS.modules.scala_io_Source().fromFile__Ljava_io_File__Lscala_io_Codec__Lscala_io_BufferedSource(inp, ScalaJS.modules.scala_io_Codec().fallbackSystemCodec__Lscala_io_Codec()), preserveWS).initialize__Lscala_xml_parsing_MarkupHandler())
});
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype.fromSource__Lscala_io_Source__Z__Lscala_xml_parsing_ConstructingParser = (function(inp, preserveWS) {
  return ScalaJS.as.scala_xml_parsing_ConstructingParser(new ScalaJS.c.scala_xml_parsing_ConstructingParser().init___Lscala_io_Source__Z(inp, preserveWS).initialize__Lscala_xml_parsing_MarkupHandler())
});
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype.fromSource__Lscala_io_Source__Z__ = (function(inp, preserveWS) {
  return this.fromSource__Lscala_io_Source__Z__Lscala_xml_parsing_ConstructingParser(inp, preserveWS)
});
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype.fromFile__Ljava_io_File__Z__ = (function(inp$2, preserveWS$2) {
  return this.fromFile__Ljava_io_File__Z__Lscala_xml_parsing_ConstructingParser(inp$2, preserveWS$2)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_ConstructingParser$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_ConstructingParser$.prototype = ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype;
ScalaJS.is.scala_xml_parsing_ConstructingParser$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_ConstructingParser$)))
});
ScalaJS.as.scala_xml_parsing_ConstructingParser$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_ConstructingParser$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.ConstructingParser")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_ConstructingParser$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_ConstructingParser$)))
});
ScalaJS.asArrayOf.scala_xml_parsing_ConstructingParser$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_ConstructingParser$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.ConstructingParser;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_ConstructingParser$ = new ScalaJS.ClassTypeData({
  scala_xml_parsing_ConstructingParser$: 0
}, false, "scala.xml.parsing.ConstructingParser$", ScalaJS.data.java_lang_Object, {
  scala_xml_parsing_ConstructingParser$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_ConstructingParser$.prototype.$classData = ScalaJS.data.scala_xml_parsing_ConstructingParser$;
ScalaJS.moduleInstances.scala_xml_parsing_ConstructingParser = undefined;
ScalaJS.modules.scala_xml_parsing_ConstructingParser = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_parsing_ConstructingParser)) {
    ScalaJS.moduleInstances.scala_xml_parsing_ConstructingParser = new ScalaJS.c.scala_xml_parsing_ConstructingParser$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_parsing_ConstructingParser
});
//@ sourceMappingURL=ConstructingParser$.js.map
