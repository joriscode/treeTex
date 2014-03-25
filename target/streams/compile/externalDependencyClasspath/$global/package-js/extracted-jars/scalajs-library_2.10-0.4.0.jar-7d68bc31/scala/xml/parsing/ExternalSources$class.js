ScalaJS.impls.scala_xml_parsing_ExternalSources$class__externalSource__Lscala_xml_parsing_MarkupHandler__T__Lscala_io_Source = (function($$this, systemId) {
  if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(systemId, "http:")) {
    return ScalaJS.modules.scala_io_Source().fromURL__Ljava_net_URL__Lscala_io_Codec__Lscala_io_BufferedSource(new ScalaJS.c.java_net_URL().init___T(systemId), ScalaJS.modules.scala_io_Codec().fallbackSystemCodec__Lscala_io_Codec())
  };
  var x1 = ScalaJS.as.scala_xml_parsing_MarkupParser($$this).input__Lscala_io_Source().descr__T();
  matchEnd3: {
    if (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(x1, "file:")) {
      var fileStr = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x1)).drop__I__O(5));
      break matchEnd3
    };
    var fileStr = ScalaJS.as.java_lang_String(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(x1)).take__I__O((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__T__I(x1, ScalaJS.modules.java_io_File().separator__T()) + 1)));
    break matchEnd3
  };
  return ScalaJS.modules.scala_io_Source().fromFile__T__Lscala_io_Codec__Lscala_io_BufferedSource((("" + fileStr) + systemId), ScalaJS.modules.scala_io_Codec().fallbackSystemCodec__Lscala_io_Codec())
});
ScalaJS.impls.scala_xml_parsing_ExternalSources$class__$init$__Lscala_xml_parsing_MarkupHandler__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ExternalSources$class.js.map
