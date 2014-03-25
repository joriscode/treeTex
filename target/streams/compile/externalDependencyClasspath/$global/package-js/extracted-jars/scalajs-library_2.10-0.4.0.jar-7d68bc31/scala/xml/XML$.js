/** @constructor */
ScalaJS.c.scala_xml_XML$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.xml$1 = null;
  this.xmlns$1 = null;
  this.namespace$1 = null;
  this.preserve$1 = null;
  this.space$1 = null;
  this.lang$1 = null;
  this.encoding$1 = null
});
ScalaJS.c.scala_xml_XML$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_XML$.prototype.constructor = ScalaJS.c.scala_xml_XML$;
ScalaJS.c.scala_xml_XML$.prototype.adapter__Lscala_xml_parsing_FactoryAdapter = (function() {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__adapter__Lscala_xml_factory_XMLLoader__Lscala_xml_parsing_FactoryAdapter(this)
});
ScalaJS.c.scala_xml_XML$.prototype.parser__Ljavax_xml_parsers_SAXParser = (function() {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__parser__Lscala_xml_factory_XMLLoader__Ljavax_xml_parsers_SAXParser(this)
});
ScalaJS.c.scala_xml_XML$.prototype.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node = (function(source, parser) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadXML__Lscala_xml_factory_XMLLoader__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(this, source, parser)
});
ScalaJS.c.scala_xml_XML$.prototype.loadFile__Ljava_io_File__Lscala_xml_Node = (function(file) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__Ljava_io_File__Lscala_xml_Node(this, file)
});
ScalaJS.c.scala_xml_XML$.prototype.loadFile__Ljava_io_FileDescriptor__Lscala_xml_Node = (function(fd) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__Ljava_io_FileDescriptor__Lscala_xml_Node(this, fd)
});
ScalaJS.c.scala_xml_XML$.prototype.loadFile__T__Lscala_xml_Node = (function(name) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node(this, name)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Ljava_io_InputStream__Lscala_xml_Node = (function(is) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_io_InputStream__Lscala_xml_Node(this, is)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Ljava_io_Reader__Lscala_xml_Node = (function(reader) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_io_Reader__Lscala_xml_Node(this, reader)
});
ScalaJS.c.scala_xml_XML$.prototype.load__T__Lscala_xml_Node = (function(sysID) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node(this, sysID)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Lorg_xml_sax_InputSource__Lscala_xml_Node = (function(source) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Lorg_xml_sax_InputSource__Lscala_xml_Node(this, source)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Ljava_net_URL__Lscala_xml_Node = (function(url) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_net_URL__Lscala_xml_Node(this, url)
});
ScalaJS.c.scala_xml_XML$.prototype.loadString__T__Lscala_xml_Node = (function(string) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadString__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node(this, string)
});
ScalaJS.c.scala_xml_XML$.prototype.xml__T = (function() {
  return this.xml$1
});
ScalaJS.c.scala_xml_XML$.prototype.xmlns__T = (function() {
  return this.xmlns$1
});
ScalaJS.c.scala_xml_XML$.prototype.namespace__T = (function() {
  return this.namespace$1
});
ScalaJS.c.scala_xml_XML$.prototype.preserve__T = (function() {
  return this.preserve$1
});
ScalaJS.c.scala_xml_XML$.prototype.space__T = (function() {
  return this.space$1
});
ScalaJS.c.scala_xml_XML$.prototype.lang__T = (function() {
  return this.lang$1
});
ScalaJS.c.scala_xml_XML$.prototype.encoding__T = (function() {
  return this.encoding$1
});
ScalaJS.c.scala_xml_XML$.prototype.withSAXParser__Ljavax_xml_parsers_SAXParser__Lscala_xml_factory_XMLLoader = (function(p) {
  return new ScalaJS.c.scala_xml_XML$$anon$1().init___Ljavax_xml_parsers_SAXParser(p)
});
ScalaJS.c.scala_xml_XML$.prototype.save__T__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__V = (function(filename, node, enc, xmlDecl, doctype) {
  var fos = new ScalaJS.c.java_io_FileOutputStream().init___T(filename);
  var w = ScalaJS.modules.java_nio_channels_Channels().newWriter__Ljava_nio_channels_WritableByteChannel__T__Ljava_io_Writer(fos.getChannel__Ljava_nio_channels_FileChannel(), enc);
  ScalaJS.modules.scala_util_control_Exception().ultimately__Lscala_Function0__Lscala_util_control_Exception$Catch(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(w$1) {
    return (function() {
      w$1.close__V();
      return ScalaJS.bV(undefined)
    })
  })(w))).apply__Lscala_Function0__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(node$1, enc$1, xmlDecl$1, doctype$1, w$1) {
    return (function() {
      ScalaJS.modules.scala_xml_XML().write__Ljava_io_Writer__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__Lscala_Enumeration$Value__V(w$1, node$1, enc$1, xmlDecl$1, doctype$1, ScalaJS.modules.scala_xml_XML().write$default$6__Lscala_Enumeration$Value());
      return ScalaJS.bV(undefined)
    })
  })(node, enc, xmlDecl, doctype, w)))
});
ScalaJS.c.scala_xml_XML$.prototype.save$default$3__T = (function() {
  return this.encoding__T()
});
ScalaJS.c.scala_xml_XML$.prototype.save$default$4__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_XML$.prototype.save$default$5__Lscala_xml_dtd_DocType = (function() {
  return null
});
ScalaJS.c.scala_xml_XML$.prototype.write__Ljava_io_Writer__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__Lscala_Enumeration$Value__V = (function(w, node, enc, xmlDecl, doctype, minimizeTags) {
  if (xmlDecl) {
    w.write__T__V((("<?xml version='1.0' encoding='" + enc) + "'?>\n"))
  };
  if ((doctype !== null)) {
    w.write__T__V((("" + doctype.toString__T()) + "\n"))
  };
  var jsx$3 = w;
  var x$1 = node;
  var x$2 = minimizeTags;
  var x$3 = ScalaJS.modules.scala_xml_Utility().serialize$default$2__Lscala_xml_NamespaceBinding();
  var x$4 = ScalaJS.modules.scala_xml_Utility().serialize$default$3__Lscala_collection_mutable_StringBuilder();
  var x$5 = ScalaJS.modules.scala_xml_Utility().serialize$default$4__Z();
  var x$6 = ScalaJS.modules.scala_xml_Utility().serialize$default$5__Z();
  var x$7 = ScalaJS.modules.scala_xml_Utility().serialize$default$6__Z();
  var jsx$2 = ScalaJS.modules.scala_xml_Utility().serialize__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Lscala_Enumeration$Value__Lscala_collection_mutable_StringBuilder(x$1, x$3, x$4, x$5, x$6, x$7, x$2);
  var jsx$1 = jsx$2.toString__T();
  jsx$3.write__T__V(jsx$1)
});
ScalaJS.c.scala_xml_XML$.prototype.write$default$6__Lscala_Enumeration$Value = (function() {
  return ScalaJS.modules.scala_xml_MinimizeMode().Default__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_xml_XML$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_XML = this;
  ScalaJS.impls.scala_xml_factory_XMLLoader$class__$init$__Lscala_xml_factory_XMLLoader__V(this);
  this.xml$1 = "xml";
  this.xmlns$1 = "xmlns";
  this.namespace$1 = "http://www.w3.org/XML/1998/namespace";
  this.preserve$1 = "preserve";
  this.space$1 = "space";
  this.lang$1 = "lang";
  this.encoding$1 = "ISO-8859-1";
  return this
});
ScalaJS.c.scala_xml_XML$.prototype.loadString__T__ = (function(string) {
  return this.loadString__T__Lscala_xml_Node(string)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Ljava_net_URL__ = (function(url) {
  return this.load__Ljava_net_URL__Lscala_xml_Node(url)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Lorg_xml_sax_InputSource__ = (function(source) {
  return this.load__Lorg_xml_sax_InputSource__Lscala_xml_Node(source)
});
ScalaJS.c.scala_xml_XML$.prototype.load__T__ = (function(sysID) {
  return this.load__T__Lscala_xml_Node(sysID)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Ljava_io_Reader__ = (function(reader) {
  return this.load__Ljava_io_Reader__Lscala_xml_Node(reader)
});
ScalaJS.c.scala_xml_XML$.prototype.load__Ljava_io_InputStream__ = (function(is) {
  return this.load__Ljava_io_InputStream__Lscala_xml_Node(is)
});
ScalaJS.c.scala_xml_XML$.prototype.loadFile__T__ = (function(name) {
  return this.loadFile__T__Lscala_xml_Node(name)
});
ScalaJS.c.scala_xml_XML$.prototype.loadFile__Ljava_io_FileDescriptor__ = (function(fd) {
  return this.loadFile__Ljava_io_FileDescriptor__Lscala_xml_Node(fd)
});
ScalaJS.c.scala_xml_XML$.prototype.loadFile__Ljava_io_File__ = (function(file) {
  return this.loadFile__Ljava_io_File__Lscala_xml_Node(file)
});
ScalaJS.c.scala_xml_XML$.prototype.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__ = (function(source$2, parser) {
  return this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(source$2, parser)
});
ScalaJS.c.scala_xml_XML$.prototype.parser__ = (function() {
  return this.parser__Ljavax_xml_parsers_SAXParser()
});
ScalaJS.c.scala_xml_XML$.prototype.adapter__ = (function() {
  return this.adapter__Lscala_xml_parsing_FactoryAdapter()
});
ScalaJS.c.scala_xml_XML$.prototype.write__Ljava_io_Writer__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__Lscala_Enumeration$Value__ = (function(w, node, enc, xmlDecl, doctype, minimizeTags) {
  return ScalaJS.bV(this.write__Ljava_io_Writer__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__Lscala_Enumeration$Value__V(w, node, enc, xmlDecl, doctype, minimizeTags))
});
ScalaJS.c.scala_xml_XML$.prototype.save__T__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__ = (function(filename, node$2, enc$2, xmlDecl$2, doctype$2) {
  return ScalaJS.bV(this.save__T__Lscala_xml_Node__T__Z__Lscala_xml_dtd_DocType__V(filename, node$2, enc$2, xmlDecl$2, doctype$2))
});
ScalaJS.c.scala_xml_XML$.prototype.withSAXParser__Ljavax_xml_parsers_SAXParser__ = (function(p) {
  return this.withSAXParser__Ljavax_xml_parsers_SAXParser__Lscala_xml_factory_XMLLoader(p)
});
ScalaJS.c.scala_xml_XML$.prototype.encoding__ = (function() {
  return this.encoding__T()
});
ScalaJS.c.scala_xml_XML$.prototype.lang__ = (function() {
  return this.lang__T()
});
ScalaJS.c.scala_xml_XML$.prototype.space__ = (function() {
  return this.space__T()
});
ScalaJS.c.scala_xml_XML$.prototype.preserve__ = (function() {
  return this.preserve__T()
});
ScalaJS.c.scala_xml_XML$.prototype.namespace__ = (function() {
  return this.namespace__T()
});
ScalaJS.c.scala_xml_XML$.prototype.xmlns__ = (function() {
  return this.xmlns__T()
});
ScalaJS.c.scala_xml_XML$.prototype.xml__ = (function() {
  return this.xml__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_XML$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_XML$.prototype = ScalaJS.c.scala_xml_XML$.prototype;
ScalaJS.is.scala_xml_XML$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_XML$)))
});
ScalaJS.as.scala_xml_XML$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_XML$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.XML")
  }
});
ScalaJS.isArrayOf.scala_xml_XML$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_XML$)))
});
ScalaJS.asArrayOf.scala_xml_XML$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_XML$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.XML;", depth)
  }
});
ScalaJS.data.scala_xml_XML$ = new ScalaJS.ClassTypeData({
  scala_xml_XML$: 0
}, false, "scala.xml.XML$", ScalaJS.data.java_lang_Object, {
  scala_xml_XML$: 1,
  scala_xml_factory_XMLLoader: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_XML$.prototype.$classData = ScalaJS.data.scala_xml_XML$;
ScalaJS.moduleInstances.scala_xml_XML = undefined;
ScalaJS.modules.scala_xml_XML = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_XML)) {
    ScalaJS.moduleInstances.scala_xml_XML = new ScalaJS.c.scala_xml_XML$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_XML
});
//@ sourceMappingURL=XML$.js.map
