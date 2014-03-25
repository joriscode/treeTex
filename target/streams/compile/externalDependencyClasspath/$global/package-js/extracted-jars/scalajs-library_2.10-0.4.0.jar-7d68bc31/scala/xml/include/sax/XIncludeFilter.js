/** @constructor */
ScalaJS.c.scala_xml_include_sax_XIncludeFilter = (function() {
  ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.call(this);
  this.XINCLUDE$undNAMESPACE$2 = null;
  this.bases$2 = null;
  this.locators$2 = null;
  this.level$2 = 0;
  this.depth$2 = 0;
  this.atRoot$2 = false
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype = new ScalaJS.inheritable.org_xml_sax_helpers_XMLFilterImpl();
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.constructor = ScalaJS.c.scala_xml_include_sax_XIncludeFilter;
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.XINCLUDE$undNAMESPACE__T = (function() {
  return "http://www.w3.org/2001/XInclude"
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.bases__p2__Ljava_util_Stack = (function() {
  return this.bases$2
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.locators__p2__Ljava_util_Stack = (function() {
  return this.locators$2
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.setDocumentLocator__Lorg_xml_sax_Locator__V = (function(locator) {
  this.locators__p2__Ljava_util_Stack().push__O__O(locator);
  var base = locator.getSystemId__T();
  try {
    this.bases__p2__Ljava_util_Stack().push__O__O(new ScalaJS.c.java_net_URL().init___T(base))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_net_MalformedURLException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T(("Unrecognized SYSTEM ID: " + base))
    } else {
      throw $jsexc$
    }
  };
  ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.setDocumentLocator__Lorg_xml_sax_Locator__V.call(this, locator)
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.level__p2__I = (function() {
  return this.level$2
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.level$und$eq__p2__I__V = (function(x$1) {
  this.level$2 = x$1
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.insideIncludeElement__Z = (function() {
  return (this.level__p2__I() !== 0)
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.startElement__T__T__T__Lorg_xml_sax_Attributes__V = (function(uri, localName, qName, atts1) {
  var atts = atts1;
  if ((this.level__p2__I() === 0)) {
    var base = atts.getValue__T__T__T("http://www.w3.org/XML/1998/namespace", "base");
    var parentBase = ScalaJS.as.java_net_URL(this.bases__p2__Ljava_util_Stack().peek__O());
    var currentBase = parentBase;
    if ((!ScalaJS.anyRefEqEq(base, null))) {
      try {
        currentBase = new ScalaJS.c.java_net_URL().init___Ljava_net_URL__T(parentBase, base)
      } catch ($jsexc$) {
        if (ScalaJS.is.java_net_MalformedURLException($jsexc$)) {
          var e = $jsexc$;
          throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception(("Malformed base URL: " + currentBase), e)
        } else {
          throw $jsexc$
        }
      }
    };
    this.bases__p2__Ljava_util_Stack().push__O__O(currentBase);
    if ((ScalaJS.objectEquals(uri, "http://www.w3.org/2001/XInclude") && ScalaJS.objectEquals(localName, "include"))) {
      var href = atts.getValue__T__T("href");
      if (ScalaJS.anyRefEqEq(href, null)) {
        throw new ScalaJS.c.org_xml_sax_SAXException().init___T("Missing href attribute")
      };
      var parse = atts.getValue__T__T("parse");
      if (ScalaJS.anyRefEqEq(parse, null)) {
        parse = "xml"
      };
      if (ScalaJS.objectEquals(parse, "text")) {
        var encoding = atts.getValue__T__T("encoding");
        this.includeTextDocument__p2__T__T__V(href, encoding)
      } else {
        if (ScalaJS.objectEquals(parse, "xml")) {
          this.includeXMLDocument__p2__T__V(href)
        } else {
          throw new ScalaJS.c.org_xml_sax_SAXException().init___T(("Illegal value for parse attribute: " + parse))
        }
      };
      this.level$und$eq__p2__I__V((this.level__p2__I() + 1))
    } else {
      if (this.atRoot__p2__Z()) {
        var attsImpl = new ScalaJS.c.org_xml_sax_helpers_AttributesImpl().init___Lorg_xml_sax_Attributes(atts);
        attsImpl.addAttribute__T__T__T__T__T__V("http://www.w3.org/XML/1998/namespace", "base", "xml:base", "CDATA", currentBase.toExternalForm__T());
        atts = attsImpl;
        this.atRoot$und$eq__p2__Z__V(false)
      };
      ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.startElement__T__T__T__Lorg_xml_sax_Attributes__V.call(this, uri, localName, qName, atts)
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.endElement__T__T__T__V = (function(uri, localName, qName) {
  if ((ScalaJS.objectEquals(uri, "http://www.w3.org/2001/XInclude") && ScalaJS.objectEquals(localName, "include"))) {
    this.level$und$eq__p2__I__V((this.level__p2__I() - 1))
  } else {
    if ((this.level__p2__I() === 0)) {
      this.bases__p2__Ljava_util_Stack().pop__O();
      ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.endElement__T__T__T__V.call(this, uri, localName, qName)
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.depth__p2__I = (function() {
  return this.depth$2
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.depth$und$eq__p2__I__V = (function(x$1) {
  this.depth$2 = x$1
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.startDocument__V = (function() {
  this.level$und$eq__p2__I__V(0);
  if ((this.depth__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.startDocument__V.call(this)
  };
  this.depth$und$eq__p2__I__V((this.depth__p2__I() + 1))
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.endDocument__V = (function() {
  this.locators__p2__Ljava_util_Stack().pop__O();
  this.bases__p2__Ljava_util_Stack().pop__O();
  this.depth$und$eq__p2__I__V((this.depth__p2__I() - 1));
  if ((this.depth__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.endDocument__V.call(this)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.startPrefixMapping__T__T__V = (function(prefix, uri) {
  if ((this.level__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.startPrefixMapping__T__T__V.call(this, prefix, uri)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.endPrefixMapping__T__V = (function(prefix) {
  if ((this.level__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.endPrefixMapping__T__V.call(this, prefix)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.characters__AC__I__I__V = (function(ch, start, length) {
  if ((this.level__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.characters__AC__I__I__V.call(this, ch, start, length)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.ignorableWhitespace__AC__I__I__V = (function(ch, start, length) {
  if ((this.level__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.ignorableWhitespace__AC__I__I__V.call(this, ch, start, length)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.processingInstruction__T__T__V = (function(target, data) {
  if ((this.level__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.processingInstruction__T__T__V.call(this, target, data)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.skippedEntity__T__V = (function(name) {
  if ((this.level__p2__I() === 0)) {
    ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.skippedEntity__T__V.call(this, name)
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.getLocation__p2__T = (function() {
  var locationString = "";
  var locator = ScalaJS.as.org_xml_sax_Locator(this.locators__p2__Ljava_util_Stack().peek__O());
  var publicID = "";
  var systemID = "";
  var column = -1;
  var line = -1;
  if ((!ScalaJS.anyRefEqEq(locator, null))) {
    publicID = locator.getPublicId__T();
    systemID = locator.getSystemId__T();
    line = locator.getLineNumber__I();
    column = locator.getColumnNumber__I()
  };
  locationString = (((((((" in document included from " + publicID) + " at ") + systemID) + " at line ") + ScalaJS.bI(line)) + ", column ") + ScalaJS.bI(column));
  return locationString
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.includeTextDocument__p2__T__T__V = (function(url, encoding1) {
  var encoding = encoding1;
  if ((ScalaJS.anyRefEqEq(encoding, null) || ScalaJS.objectEquals(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__trim__Lscala_scalajs_runtime_RuntimeString__T(encoding), ""))) {
    encoding = "UTF-8"
  };
  var source = null;
  try {
    var base = ScalaJS.as.java_net_URL(this.bases__p2__Ljava_util_Stack().peek__O());
    source = new ScalaJS.c.java_net_URL().init___Ljava_net_URL__T(base, url)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_net_MalformedURLException($jsexc$)) {
      var e = $jsexc$;
      var ex = new ScalaJS.c.scala_xml_include_UnavailableResourceException().init___T((("Unresolvable URL " + url) + this.getLocation__p2__T()));
      ex.setRootCause__Ljava_lang_Throwable__V(e);
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception((("Unresolvable URL " + url) + this.getLocation__p2__T()), ex)
    } else {
      throw $jsexc$
    }
  };
  try {
    var uc = source.openConnection__Ljava_net_URLConnection();
    var in$2 = new ScalaJS.c.java_io_BufferedInputStream().init___Ljava_io_InputStream(uc.getInputStream__Ljava_io_InputStream());
    var encodingFromHeader = uc.getContentEncoding__T();
    var contentType = uc.getContentType__T();
    if ((!ScalaJS.anyRefEqEq(encodingFromHeader, null))) {
      encoding = encodingFromHeader
    } else {
      if ((!ScalaJS.anyRefEqEq(contentType, null))) {
        contentType = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__toLowerCase__Lscala_scalajs_runtime_RuntimeString__T(contentType);
        if ((((ScalaJS.objectEquals(contentType, "text/xml") || ScalaJS.objectEquals(contentType, "application/xml")) || (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(contentType, "text/") && ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(contentType, "+xml"))) || (ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__startsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(contentType, "application/") && ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__endsWith__Lscala_scalajs_runtime_RuntimeString__T__Z(contentType, "+xml")))) {
          encoding = ScalaJS.modules.scala_xml_include_sax_EncodingHeuristics().readEncodingFromStream__Ljava_io_InputStream__T(in$2)
        }
      }
    };
    var reader = new ScalaJS.c.java_io_InputStreamReader().init___Ljava_io_InputStream__T(in$2, encoding);
    var c = ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [1024]);
    var charsRead = 0;
    do {
      charsRead = reader.read__AC__I__I__I(c, 0, 1024);
      if ((charsRead > 0)) {
        this.characters__AC__I__I__V(c, 0, charsRead)
      }
    } while ((charsRead !== -1))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_UnsupportedEncodingException($jsexc$)) {
      var e$3 = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception((("Unsupported encoding: " + encoding) + this.getLocation__p2__T()), e$3)
    } else {
      if (ScalaJS.is.java_io_IOException($jsexc$)) {
        var e$2 = $jsexc$;
        throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception((("Document not found: " + source.toExternalForm__T()) + this.getLocation__p2__T()), e$2)
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.atRoot__p2__Z = (function() {
  return this.atRoot$2
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.atRoot$und$eq__p2__Z__V = (function(x$1) {
  this.atRoot$2 = x$1
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.includeXMLDocument__p2__T__V = (function(url) {
  try {
    var source = new ScalaJS.c.java_net_URL().init___Ljava_net_URL__T(ScalaJS.as.java_net_URL(this.bases__p2__Ljava_util_Stack().peek__O()), url)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_net_MalformedURLException($jsexc$)) {
      var e = $jsexc$;
      var ex = new ScalaJS.c.scala_xml_include_UnavailableResourceException().init___T((("Unresolvable URL " + url) + this.getLocation__p2__T()));
      ex.setRootCause__Ljava_lang_Throwable__V(e);
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception((("Unresolvable URL " + url) + this.getLocation__p2__T()), ex)
    } else {
      throw $jsexc$
    }
  };
  try {
    try {
      var parser = ScalaJS.modules.org_xml_sax_helpers_XMLReaderFactory().createXMLReader__Lorg_xml_sax_XMLReader()
    } catch ($jsexc$) {
      if (ScalaJS.is.org_xml_sax_SAXException($jsexc$)) {
        var e$2 = $jsexc$;
        try {
          var parser = ScalaJS.modules.org_xml_sax_helpers_XMLReaderFactory().createXMLReader__T__Lorg_xml_sax_XMLReader(ScalaJS.modules.scala_xml_package().XercesClassName__T())
        } catch ($jsexc$) {
          if (ScalaJS.is.org_xml_sax_SAXException($jsexc$)) {
            return ScalaJS.modules.java_lang_System().err__Ljava_io_PrintStream().println__T__V("Could not find an XML parser")
          } else {
            throw $jsexc$
          }
        }
      } else {
        throw $jsexc$
      }
    };
    parser.setContentHandler__Lorg_xml_sax_ContentHandler__V(this);
    var resolver = this.getEntityResolver__Lorg_xml_sax_EntityResolver();
    if ((!ScalaJS.anyRefEqEq(resolver, null))) {
      parser.setEntityResolver__Lorg_xml_sax_EntityResolver__V(resolver)
    };
    var previousLevel = this.level__p2__I();
    this.level$und$eq__p2__I__V(0);
    if (this.bases__p2__Ljava_util_Stack().contains__O__Z(source)) {
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Circular XInclude Reference", new ScalaJS.c.scala_xml_include_CircularIncludeException().init___T((("Circular XInclude Reference to " + source) + this.getLocation__p2__T())))
    };
    this.bases__p2__Ljava_util_Stack().push__O__O(source);
    this.atRoot$und$eq__p2__Z__V(true);
    parser.parse__T__V(source.toExternalForm__T());
    this.level$und$eq__p2__I__V(previousLevel);
    this.bases__p2__Ljava_util_Stack().pop__O()
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e$3 = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception((("Document not found: " + source.toExternalForm__T()) + this.getLocation__p2__T()), e$3)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.init___ = (function() {
  ScalaJS.c.org_xml_sax_helpers_XMLFilterImpl.prototype.init___.call(this);
  this.bases$2 = new ScalaJS.c.java_util_Stack().init___();
  this.locators$2 = new ScalaJS.c.java_util_Stack().init___();
  this.level$2 = 0;
  this.depth$2 = 0;
  this.atRoot$2 = false;
  return this
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.insideIncludeElement__ = (function() {
  return ScalaJS.bZ(this.insideIncludeElement__Z())
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.XINCLUDE$undNAMESPACE__ = (function() {
  return this.XINCLUDE$undNAMESPACE__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_include_sax_XIncludeFilter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_include_sax_XIncludeFilter.prototype = ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype;
ScalaJS.is.scala_xml_include_sax_XIncludeFilter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_include_sax_XIncludeFilter)))
});
ScalaJS.as.scala_xml_include_sax_XIncludeFilter = (function(obj) {
  if ((ScalaJS.is.scala_xml_include_sax_XIncludeFilter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.include.sax.XIncludeFilter")
  }
});
ScalaJS.isArrayOf.scala_xml_include_sax_XIncludeFilter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_include_sax_XIncludeFilter)))
});
ScalaJS.asArrayOf.scala_xml_include_sax_XIncludeFilter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_include_sax_XIncludeFilter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.include.sax.XIncludeFilter;", depth)
  }
});
ScalaJS.data.scala_xml_include_sax_XIncludeFilter = new ScalaJS.ClassTypeData({
  scala_xml_include_sax_XIncludeFilter: 0
}, false, "scala.xml.include.sax.XIncludeFilter", ScalaJS.data.org_xml_sax_helpers_XMLFilterImpl, {
  scala_xml_include_sax_XIncludeFilter: 1,
  org_xml_sax_helpers_XMLFilterImpl: 1,
  org_xml_sax_ErrorHandler: 1,
  org_xml_sax_ContentHandler: 1,
  org_xml_sax_DTDHandler: 1,
  org_xml_sax_EntityResolver: 1,
  org_xml_sax_XMLFilter: 1,
  org_xml_sax_XMLReader: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_include_sax_XIncludeFilter.prototype.$classData = ScalaJS.data.scala_xml_include_sax_XIncludeFilter;
//@ sourceMappingURL=XIncludeFilter.js.map
