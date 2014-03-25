/** @constructor */
ScalaJS.c.scala_xml_parsing_FactoryAdapter = (function() {
  ScalaJS.c.org_xml_sax_helpers_DefaultHandler.call(this);
  this.rootElem$2 = null;
  this.buffer$2 = null;
  this.attribStack$2 = null;
  this.hStack$2 = null;
  this.tagStack$2 = null;
  this.scopeStack$2 = null;
  this.curTag$2 = null;
  this.capture$2 = false;
  this.normalizeWhitespace$2 = false
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype = new ScalaJS.inheritable.org_xml_sax_helpers_DefaultHandler();
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.constructor = ScalaJS.c.scala_xml_parsing_FactoryAdapter;
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.adapter__Lscala_xml_parsing_FactoryAdapter = (function() {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__adapter__Lscala_xml_factory_XMLLoader__Lscala_xml_parsing_FactoryAdapter(this)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.parser__Ljavax_xml_parsers_SAXParser = (function() {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__parser__Lscala_xml_factory_XMLLoader__Ljavax_xml_parsers_SAXParser(this)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node = (function(source, parser) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadXML__Lscala_xml_factory_XMLLoader__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(this, source, parser)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadFile__Ljava_io_File__Lscala_xml_Node = (function(file) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__Ljava_io_File__Lscala_xml_Node(this, file)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadFile__Ljava_io_FileDescriptor__Lscala_xml_Node = (function(fd) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__Ljava_io_FileDescriptor__Lscala_xml_Node(this, fd)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadFile__T__Lscala_xml_Node = (function(name) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadFile__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node(this, name)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Ljava_io_InputStream__Lscala_xml_Node = (function(is) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_io_InputStream__Lscala_xml_Node(this, is)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Ljava_io_Reader__Lscala_xml_Node = (function(reader) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_io_Reader__Lscala_xml_Node(this, reader)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__T__Lscala_xml_Node = (function(sysID) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node(this, sysID)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Lorg_xml_sax_InputSource__Lscala_xml_Node = (function(source) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Lorg_xml_sax_InputSource__Lscala_xml_Node(this, source)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Ljava_net_URL__Lscala_xml_Node = (function(url) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__load__Lscala_xml_factory_XMLLoader__Ljava_net_URL__Lscala_xml_Node(this, url)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadString__T__Lscala_xml_Node = (function(string) {
  return ScalaJS.impls.scala_xml_factory_XMLLoader$class__loadString__Lscala_xml_factory_XMLLoader__T__Lscala_xml_Node(this, string)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.rootElem__Lscala_xml_Node = (function() {
  return this.rootElem$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.rootElem$und$eq__Lscala_xml_Node__V = (function(x$1) {
  this.rootElem$2 = x$1
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.buffer__Lscala_collection_mutable_StringBuilder = (function() {
  return this.buffer$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.attribStack__Lscala_collection_mutable_Stack = (function() {
  return this.attribStack$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.hStack__Lscala_collection_mutable_Stack = (function() {
  return this.hStack$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.tagStack__Lscala_collection_mutable_Stack = (function() {
  return this.tagStack$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.scopeStack__Lscala_collection_mutable_Stack = (function() {
  return this.scopeStack$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.scopeStack$und$eq__Lscala_collection_mutable_Stack__V = (function(x$1) {
  this.scopeStack$2 = x$1
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.curTag__T = (function() {
  return this.curTag$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.curTag$und$eq__T__V = (function(x$1) {
  this.curTag$2 = x$1
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.capture__Z = (function() {
  return this.capture$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.capture$und$eq__Z__V = (function(x$1) {
  this.capture$2 = x$1
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.normalizeWhitespace__Z = (function() {
  return this.normalizeWhitespace$2
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.characters__AC__I__I__V = (function(ch, offset, length) {
  if ((!this.capture__Z())) {
    return undefined
  } else {
    if ((!this.normalizeWhitespace__Z())) {
      this.buffer__Lscala_collection_mutable_StringBuilder().appendAll__AC__I__I__Lscala_collection_mutable_StringBuilder(ch, offset, length)
    } else {
      var it = ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.scala_Char(ScalaJS.modules.scala_Predef().charArrayOps__AC__Lscala_collection_mutable_ArrayOps(ch).slice__I__I__O(offset, (offset + length)), 1)).iterator__Lscala_collection_Iterator();
      while (it.hasNext__Z()) {
        var c = ScalaJS.uC(it.next__O());
        var isSpace = ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(c));
        var jsx$2 = this.buffer__Lscala_collection_mutable_StringBuilder();
        if (isSpace) {
          var jsx$1 = 32
        } else {
          var jsx$1 = c
        };
        jsx$2.append__C__Lscala_collection_mutable_StringBuilder(jsx$1);
        if (isSpace) {
          it = it.dropWhile__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
            return (function(x$1) {
              x$1 = ScalaJS.uC(x$1);
              return ScalaJS.bZ(ScalaJS.modules.scala_runtime_RichChar().isWhitespace$extension__C__Z(ScalaJS.modules.scala_Predef().charWrapper__C__C(x$1)))
            })
          })()))
        }
      }
    }
  }
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.scala$xml$parsing$FactoryAdapter$$splitName__T__Lscala_Tuple2 = (function(s) {
  var idx = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(s, 58);
  if ((idx < 0)) {
    return new ScalaJS.c.scala_Tuple2().init___O__O(null, s)
  } else {
    return new ScalaJS.c.scala_Tuple2().init___O__O(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).take__I__O(idx), new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).drop__I__O((idx + 1)))
  }
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.startElement__T__T__T__Lorg_xml_sax_Attributes__V = (function(uri, _localName, qname, attributes) {
  this.captureText__V();
  this.tagStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(this.curTag__T());
  this.curTag$und$eq__T__V(qname);
  var localName = ScalaJS.as.java_lang_String(this.scala$xml$parsing$FactoryAdapter$$splitName__T__Lscala_Tuple2(qname).$$und2__O());
  this.capture$und$eq__Z__V(this.nodeContainsText__T__Z(localName));
  this.hStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(null);
  var m = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_xml_Null());
  if (this.scopeStack__Lscala_collection_mutable_Stack().isEmpty__Z()) {
    var scpe = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_xml_TopScope())
  } else {
    var scpe = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.as.scala_xml_NamespaceBinding(this.scopeStack__Lscala_collection_mutable_Stack().top__O()))
  };
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), attributes.getLength__I()).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_xml_parsing_FactoryAdapter$$anonfun$startElement$1().init___Lscala_xml_parsing_FactoryAdapter__Lorg_xml_sax_Attributes__Lscala_runtime_ObjectRef__Lscala_runtime_ObjectRef(this, attributes, m, scpe));
  this.scopeStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(ScalaJS.as.scala_xml_NamespaceBinding(scpe.elem$1));
  this.attribStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(ScalaJS.as.scala_xml_MetaData(m.elem$1))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.captureText__V = (function() {
  if ((this.capture__Z() && (this.buffer__Lscala_collection_mutable_StringBuilder().length__I() > 0))) {
    this.hStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(this.createText__T__Lscala_xml_Text(this.buffer__Lscala_collection_mutable_StringBuilder().toString__T()))
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  this.buffer__Lscala_collection_mutable_StringBuilder().clear__V()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.endElement__T__T__T__V = (function(uri, _localName, qname) {
  this.captureText__V();
  var metaData = ScalaJS.as.scala_xml_MetaData(this.attribStack__Lscala_collection_mutable_Stack().pop__O());
  var v = ScalaJS.modules.scala_collection_Iterator().continually__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.as.scala_xml_Node(arg$outer.hStack__Lscala_collection_mutable_Stack().pop__O())
    })
  })(this))).takeWhile__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$3) {
      return ScalaJS.bZ((!ScalaJS.anyRefEqEq(x$3, null)))
    })
  })())).toList__Lscala_collection_immutable_List().reverse__Lscala_collection_immutable_List();
  var x1 = this.scala$xml$parsing$FactoryAdapter$$splitName__T__Lscala_Tuple2(qname);
  matchEnd3: {
    if ((x1 !== null)) {
      var pre = ScalaJS.as.java_lang_String(x1.$$und1__O());
      var localName = ScalaJS.as.java_lang_String(x1.$$und2__O());
      var x$4 = new ScalaJS.c.scala_Tuple2().init___O__O(pre, localName);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var pre$2 = ScalaJS.as.java_lang_String(x$4.$$und1__O());
  var localName$2 = ScalaJS.as.java_lang_String(x$4.$$und2__O());
  var scp = ScalaJS.as.scala_xml_NamespaceBinding(this.scopeStack__Lscala_collection_mutable_Stack().pop__O());
  this.rootElem$und$eq__Lscala_xml_Node__V(this.createNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_immutable_List__Lscala_xml_Node(pre$2, localName$2, metaData, scp, v));
  this.hStack__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(this.rootElem__Lscala_xml_Node());
  this.curTag$und$eq__T__V(ScalaJS.as.java_lang_String(this.tagStack__Lscala_collection_mutable_Stack().pop__O()));
  this.capture$und$eq__Z__V(((!ScalaJS.anyRefEqEq(this.curTag__T(), null)) && this.nodeContainsText__T__Z(this.curTag__T())))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.processingInstruction__T__T__V = (function(target, data) {
  this.hStack__Lscala_collection_mutable_Stack().pushAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Stack(this.createProcInstr__T__T__Lscala_collection_Seq(target, data))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.init___ = (function() {
  ScalaJS.c.org_xml_sax_helpers_DefaultHandler.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_factory_XMLLoader$class__$init$__Lscala_xml_factory_XMLLoader__V(this);
  this.rootElem$2 = null;
  this.buffer$2 = new ScalaJS.c.scala_collection_mutable_StringBuilder().init___();
  this.attribStack$2 = new ScalaJS.c.scala_collection_mutable_Stack().init___();
  this.hStack$2 = new ScalaJS.c.scala_collection_mutable_Stack().init___();
  this.tagStack$2 = new ScalaJS.c.scala_collection_mutable_Stack().init___();
  this.scopeStack$2 = new ScalaJS.c.scala_collection_mutable_Stack().init___();
  this.curTag$2 = null;
  this.capture$2 = false;
  this.normalizeWhitespace$2 = false;
  return this
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadString__T__ = (function(string) {
  return this.loadString__T__Lscala_xml_Node(string)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Ljava_net_URL__ = (function(url) {
  return this.load__Ljava_net_URL__Lscala_xml_Node(url)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Lorg_xml_sax_InputSource__ = (function(source) {
  return this.load__Lorg_xml_sax_InputSource__Lscala_xml_Node(source)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__T__ = (function(sysID) {
  return this.load__T__Lscala_xml_Node(sysID)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Ljava_io_Reader__ = (function(reader) {
  return this.load__Ljava_io_Reader__Lscala_xml_Node(reader)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.load__Ljava_io_InputStream__ = (function(is) {
  return this.load__Ljava_io_InputStream__Lscala_xml_Node(is)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadFile__T__ = (function(name) {
  return this.loadFile__T__Lscala_xml_Node(name)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadFile__Ljava_io_FileDescriptor__ = (function(fd) {
  return this.loadFile__Ljava_io_FileDescriptor__Lscala_xml_Node(fd)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadFile__Ljava_io_File__ = (function(file) {
  return this.loadFile__Ljava_io_File__Lscala_xml_Node(file)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__ = (function(source$2, parser) {
  return this.loadXML__Lorg_xml_sax_InputSource__Ljavax_xml_parsers_SAXParser__Lscala_xml_Node(source$2, parser)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.parser__ = (function() {
  return this.parser__Ljavax_xml_parsers_SAXParser()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.adapter__ = (function() {
  return this.adapter__Lscala_xml_parsing_FactoryAdapter()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.captureText__ = (function() {
  return ScalaJS.bV(this.captureText__V())
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.scala$xml$parsing$FactoryAdapter$$splitName__T__ = (function(s) {
  return this.scala$xml$parsing$FactoryAdapter$$splitName__T__Lscala_Tuple2(s)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.normalizeWhitespace__ = (function() {
  return ScalaJS.bZ(this.normalizeWhitespace__Z())
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.capture$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.capture$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.capture__ = (function() {
  return ScalaJS.bZ(this.capture__Z())
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.curTag$und$eq__T__ = (function(x$1$2) {
  return ScalaJS.bV(this.curTag$und$eq__T__V(x$1$2))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.curTag__ = (function() {
  return this.curTag__T()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.scopeStack$und$eq__Lscala_collection_mutable_Stack__ = (function(x$1$3) {
  return ScalaJS.bV(this.scopeStack$und$eq__Lscala_collection_mutable_Stack__V(x$1$3))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.scopeStack__ = (function() {
  return this.scopeStack__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.tagStack__ = (function() {
  return this.tagStack__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.hStack__ = (function() {
  return this.hStack__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.attribStack__ = (function() {
  return this.attribStack__Lscala_collection_mutable_Stack()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.buffer__ = (function() {
  return this.buffer__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.rootElem$und$eq__Lscala_xml_Node__ = (function(x$1$4) {
  return ScalaJS.bV(this.rootElem$und$eq__Lscala_xml_Node__V(x$1$4))
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.rootElem__ = (function() {
  return this.rootElem__Lscala_xml_Node()
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.createProcInstr__T__T__ = (function(target, data) {
  return this.createProcInstr__T__T__Lscala_collection_Seq(target, data)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.createText__T__ = (function(text) {
  return this.createText__T__Lscala_xml_Text(text)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.createNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_immutable_List__ = (function(pre, elemName, attribs, scope, chIter) {
  return this.createNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_immutable_List__Lscala_xml_Node(pre, elemName, attribs, scope, chIter)
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.nodeContainsText__T__ = (function(localName) {
  return ScalaJS.bZ(this.nodeContainsText__T__Z(localName))
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_FactoryAdapter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_FactoryAdapter.prototype = ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype;
ScalaJS.is.scala_xml_parsing_FactoryAdapter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_FactoryAdapter)))
});
ScalaJS.as.scala_xml_parsing_FactoryAdapter = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_FactoryAdapter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.FactoryAdapter")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_FactoryAdapter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_FactoryAdapter)))
});
ScalaJS.asArrayOf.scala_xml_parsing_FactoryAdapter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_FactoryAdapter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.FactoryAdapter;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_FactoryAdapter = new ScalaJS.ClassTypeData({
  scala_xml_parsing_FactoryAdapter: 0
}, false, "scala.xml.parsing.FactoryAdapter", ScalaJS.data.org_xml_sax_helpers_DefaultHandler, {
  scala_xml_parsing_FactoryAdapter: 1,
  scala_xml_factory_XMLLoader: 1,
  org_xml_sax_helpers_DefaultHandler: 1,
  org_xml_sax_ErrorHandler: 1,
  org_xml_sax_ContentHandler: 1,
  org_xml_sax_DTDHandler: 1,
  org_xml_sax_EntityResolver: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.$classData = ScalaJS.data.scala_xml_parsing_FactoryAdapter;
//@ sourceMappingURL=FactoryAdapter.js.map
