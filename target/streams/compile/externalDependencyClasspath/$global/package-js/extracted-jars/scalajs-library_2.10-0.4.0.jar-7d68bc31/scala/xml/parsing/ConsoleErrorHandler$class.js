ScalaJS.impls.scala_xml_parsing_ConsoleErrorHandler$class__warning__Lscala_xml_parsing_ConsoleErrorHandler__Lorg_xml_sax_SAXParseException__V = (function($$this, ex) {
  /*<skip>*/
});
ScalaJS.impls.scala_xml_parsing_ConsoleErrorHandler$class__error__Lscala_xml_parsing_ConsoleErrorHandler__Lorg_xml_sax_SAXParseException__V = (function($$this, ex) {
  $$this.printError__T__Lorg_xml_sax_SAXParseException__V("Error", ex)
});
ScalaJS.impls.scala_xml_parsing_ConsoleErrorHandler$class__fatalError__Lscala_xml_parsing_ConsoleErrorHandler__Lorg_xml_sax_SAXParseException__V = (function($$this, ex) {
  $$this.printError__T__Lorg_xml_sax_SAXParseException__V("Fatal Error", ex)
});
ScalaJS.impls.scala_xml_parsing_ConsoleErrorHandler$class__printError__Lscala_xml_parsing_ConsoleErrorHandler__T__Lorg_xml_sax_SAXParseException__V = (function($$this, errtype, ex) {
  ScalaJS.modules.scala_Console().withOut__Ljava_io_PrintStream__Lscala_Function0__O(ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(errtype$1, ex$1) {
    return (function() {
      var s = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("[%s]:%d:%d: %s")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [errtype$1, ScalaJS.bI(ex$1.getLineNumber__I()), ScalaJS.bI(ex$1.getColumnNumber__I()), ex$1.getMessage__T()])));
      ScalaJS.modules.scala_Console().println__O__V(s);
      ScalaJS.modules.scala_Console().flush__V();
      return ScalaJS.bV(undefined)
    })
  })(errtype, ex)))
});
ScalaJS.impls.scala_xml_parsing_ConsoleErrorHandler$class__$init$__Lscala_xml_parsing_ConsoleErrorHandler__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ConsoleErrorHandler$class.js.map
