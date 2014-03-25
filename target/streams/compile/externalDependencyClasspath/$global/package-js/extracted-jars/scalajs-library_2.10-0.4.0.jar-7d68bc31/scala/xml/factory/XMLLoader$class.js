ScalaJS.impls.scala_xml_factory_XMLLoader$class__adapter__Lscala_xml_factory_XMLLoader__Lscala_xml_parsing_FactoryAdapter = (function($$this) {
  return new ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter().init___()
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__parser__Lscala_xml_factory_XMLLoader__Ljavax_xml_parsers_SAXParser = (function($$this) {
  var f = ScalaJS.modules.javax_xml_parsers_SAXParserFactory().newInstance__Ljavax_xml_parsers_SAXParserFactory();
  f.setNamespaceAware__Z__V(false);
  return f.newSAXParser__Ljavax_xml_parsers_SAXParser()
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadXML__Lscala_xml_factory_XMLLoader__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node = (function($$this, source, parser) {
  var newAdapter = $$this.adapter__Lscala_xml_parsing_FactoryAdapter();
  newAdapter.scopeStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(ScalaJS.modules.scala_xml_TopScope());
  parser.parse__Lorg_xml_sax_InputSource__Lorg_xml_sax_helpers_DefaultHandler__V(source, newAdapter);
  newAdapter.scopeStack__Lscala_collection_mutable_Stack().pop__O();
  return newAdapter.rootElem__Lscala_xml_Node()
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__Ljava_io_File__Lscala_xml_Node = (function($$this, file) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromFile__Ljava_io_File__Lorg_xml_sax_InputSource(file), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__Ljava_io_FileDescriptor__Lscala_xml_Node = (function($$this, fd) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromFile__Ljava_io_FileDescriptor__Lorg_xml_sax_InputSource(fd), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node = (function($$this, name) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromFile__T__Lorg_xml_sax_InputSource(name), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_io_InputStream__Lscala_xml_Node = (function($$this, is) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromInputStream__Ljava_io_InputStream__Lorg_xml_sax_InputSource(is), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_io_Reader__Lscala_xml_Node = (function($$this, reader) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromReader__Ljava_io_Reader__Lorg_xml_sax_InputSource(reader), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node = (function($$this, sysID) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromSysId__T__Lorg_xml_sax_InputSource(sysID), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Lorg_xml_sax_InputSource__Lscala_xml_Node = (function($$this, source) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(source, $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_net_URL__Lscala_xml_Node = (function($$this, url) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromInputStream__Ljava_io_InputStream__Lorg_xml_sax_InputSource(url.openStream__Ljava_io_InputStream()), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadString__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node = (function($$this, string) {
  return $$this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(ScalaJS.modules.scala_xml_Source().fromString__T__Lorg_xml_sax_InputSource(string), $$this.parser__Ljavax_xml_parsers_SAXParser())
});
ScalaJS.impls.scala_xml_factory_XMLLoader$class__$init$__Lscala_xml_factory_XMLLoader__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=XMLLoader$class.js.map
