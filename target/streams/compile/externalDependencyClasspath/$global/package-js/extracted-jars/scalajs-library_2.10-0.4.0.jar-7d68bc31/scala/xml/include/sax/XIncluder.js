/** @constructor */
ScalaJS.c.scala_xml_include_sax_XIncluder = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.encoding$1 = null;
  this.out$1 = null;
  this.inDTD$1 = false;
  this.entities$1 = null;
  this.filter$1 = null
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.constructor = ScalaJS.c.scala_xml_include_sax_XIncluder;
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.out__Ljava_io_OutputStreamWriter = (function() {
  return this.out$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.out$und$eq__Ljava_io_OutputStreamWriter__V = (function(x$1) {
  this.out$1 = x$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.setDocumentLocator__Lorg_xml_sax_Locator__V = (function(locator) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startDocument__V = (function() {
  try {
    this.out__Ljava_io_OutputStreamWriter().write__T__V((("<?xml version='1.0' encoding='" + this.encoding$1) + "'?>\r\n"))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endDocument__V = (function() {
  try {
    this.out__Ljava_io_OutputStreamWriter().flush__V()
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Flush failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startPrefixMapping__T__T__V = (function(prefix, uri) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endPrefixMapping__T__V = (function(prefix) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startElement__T__T__T__Lorg_xml_sax_Attributes__V = (function(namespaceURI, localName, qualifiedName, atts) {
  try {
    this.out__Ljava_io_OutputStreamWriter().write__T__V(("<" + qualifiedName));
    var i = 0;
    while ((i < atts.getLength__I())) {
      this.out__Ljava_io_OutputStreamWriter().write__T__V(" ");
      this.out__Ljava_io_OutputStreamWriter().write__T__V(atts.getQName__I__T(i));
      this.out__Ljava_io_OutputStreamWriter().write__T__V("='");
      var value = atts.getValue__I__T(i);
      this.out__Ljava_io_OutputStreamWriter().write__T__V(ScalaJS.modules.scala_xml_Utility().escape__T__T(value));
      this.out__Ljava_io_OutputStreamWriter().write__T__V("'");
      i = (i + 1)
    };
    this.out__Ljava_io_OutputStreamWriter().write__T__V(">")
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endElement__T__T__T__V = (function(namespaceURI, localName, qualifiedName) {
  try {
    this.out__Ljava_io_OutputStreamWriter().write__T__V((("</" + qualifiedName) + ">"))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.characters__AC__I__I__V = (function(ch, start, length) {
  try {
    var i = 0;
    while ((i < length)) {
      var c = ch.underlying[(start + i)];
      if ((c === 38)) {
        this.out__Ljava_io_OutputStreamWriter().write__T__V("&amp;")
      } else {
        if ((c === 60)) {
          this.out__Ljava_io_OutputStreamWriter().write__T__V("&lt;")
        } else {
          if ((c === 62)) {
            this.out__Ljava_io_OutputStreamWriter().write__T__V("&gt;")
          } else {
            this.out__Ljava_io_OutputStreamWriter().write__I__V(c)
          }
        }
      };
      i = (i + 1)
    }
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.ignorableWhitespace__AC__I__I__V = (function(ch, start, length) {
  this.characters__AC__I__I__V(ch, start, length)
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.processingInstruction__T__T__V = (function(target, data) {
  try {
    this.out__Ljava_io_OutputStreamWriter().write__T__V((((("<?" + target) + " ") + data) + "?>"))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.skippedEntity__T__V = (function(name) {
  try {
    this.out__Ljava_io_OutputStreamWriter().write__T__V((("&" + name) + ";"))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_io_IOException($jsexc$)) {
      var e = $jsexc$;
      throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.inDTD__p1__Z = (function() {
  return this.inDTD$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.inDTD$und$eq__p1__Z__V = (function(x$1) {
  this.inDTD$1 = x$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.entities__p1__Lscala_collection_mutable_Stack = (function() {
  return this.entities$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startDTD__T__T__T__V = (function(name, publicID, systemID) {
  this.inDTD$und$eq__p1__Z__V(true);
  if (this.entities__p1__Lscala_collection_mutable_Stack().isEmpty__Z()) {
    var id = "";
    if ((!ScalaJS.anyRefEqEq(publicID, null))) {
      id = ((((" PUBLIC \"" + publicID) + "\" \"") + systemID) + ScalaJS.bC(34))
    } else {
      if ((!ScalaJS.anyRefEqEq(systemID, null))) {
        id = ((" SYSTEM \"" + systemID) + ScalaJS.bC(34))
      }
    };
    try {
      this.out__Ljava_io_OutputStreamWriter().write__T__V(((("<!DOCTYPE " + name) + id) + ">\r\n"))
    } catch ($jsexc$) {
      if (ScalaJS.is.java_io_IOException($jsexc$)) {
        var e = $jsexc$;
        throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Error while writing DOCTYPE", e)
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endDTD__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startEntity__T__V = (function(name) {
  this.entities__p1__Lscala_collection_mutable_Stack().push__O__Lscala_collection_mutable_Stack(name)
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endEntity__T__V = (function(name) {
  this.entities__p1__Lscala_collection_mutable_Stack().pop__O()
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startCDATA__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endCDATA__V = (function() {
  /*<skip>*/
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.filter__p1__Lscala_xml_include_sax_XIncludeFilter = (function() {
  return this.filter$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.filter$und$eq__p1__Lscala_xml_include_sax_XIncludeFilter__V = (function(x$1) {
  this.filter$1 = x$1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.setFilter__Lscala_xml_include_sax_XIncludeFilter__V = (function(filter) {
  this.filter$und$eq__p1__Lscala_xml_include_sax_XIncludeFilter__V(filter)
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.comment__AC__I__I__V = (function(ch, start, length) {
  if (((!this.inDTD__p1__Z()) && (!this.filter__p1__Lscala_xml_include_sax_XIncludeFilter().insideIncludeElement__Z()))) {
    try {
      this.out__Ljava_io_OutputStreamWriter().write__T__V("<!--");
      this.out__Ljava_io_OutputStreamWriter().write__AC__I__I__V(ch, start, length);
      this.out__Ljava_io_OutputStreamWriter().write__T__V("-->")
    } catch ($jsexc$) {
      if (ScalaJS.is.java_io_IOException($jsexc$)) {
        var e = $jsexc$;
        throw new ScalaJS.c.org_xml_sax_SAXException().init___T__Ljava_lang_Exception("Write failed", e)
      } else {
        throw $jsexc$
      }
    }
  }
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.init___Ljava_io_OutputStream__T = (function(outs, encoding) {
  this.encoding$1 = encoding;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.out$1 = new ScalaJS.c.java_io_OutputStreamWriter().init___Ljava_io_OutputStream__T(outs, encoding);
  this.inDTD$1 = false;
  this.entities$1 = new ScalaJS.c.scala_collection_mutable_Stack().init___();
  this.filter$1 = null;
  return this
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.comment__AC__I__I__ = (function(ch, start, length) {
  return ScalaJS.bV(this.comment__AC__I__I__V(ch, start, length))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.setFilter__Lscala_xml_include_sax_XIncludeFilter__ = (function(filter) {
  return ScalaJS.bV(this.setFilter__Lscala_xml_include_sax_XIncludeFilter__V(filter))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endCDATA__ = (function() {
  return ScalaJS.bV(this.endCDATA__V())
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startCDATA__ = (function() {
  return ScalaJS.bV(this.startCDATA__V())
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endEntity__T__ = (function(name) {
  return ScalaJS.bV(this.endEntity__T__V(name))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startEntity__T__ = (function(name$2) {
  return ScalaJS.bV(this.startEntity__T__V(name$2))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endDTD__ = (function() {
  return ScalaJS.bV(this.endDTD__V())
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startDTD__T__T__T__ = (function(name$3, publicID, systemID) {
  return ScalaJS.bV(this.startDTD__T__T__T__V(name$3, publicID, systemID))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.skippedEntity__T__ = (function(name$4) {
  return ScalaJS.bV(this.skippedEntity__T__V(name$4))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.processingInstruction__T__T__ = (function(target, data) {
  return ScalaJS.bV(this.processingInstruction__T__T__V(target, data))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.ignorableWhitespace__AC__I__I__ = (function(ch$2, start$2, length$2) {
  return ScalaJS.bV(this.ignorableWhitespace__AC__I__I__V(ch$2, start$2, length$2))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.characters__AC__I__I__ = (function(ch$3, start$3, length$3) {
  return ScalaJS.bV(this.characters__AC__I__I__V(ch$3, start$3, length$3))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endElement__T__T__T__ = (function(namespaceURI, localName, qualifiedName) {
  return ScalaJS.bV(this.endElement__T__T__T__V(namespaceURI, localName, qualifiedName))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startElement__T__T__T__Lorg_xml_sax_Attributes__ = (function(namespaceURI$2, localName$2, qualifiedName$2, atts) {
  return ScalaJS.bV(this.startElement__T__T__T__Lorg_xml_sax_Attributes__V(namespaceURI$2, localName$2, qualifiedName$2, atts))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endPrefixMapping__T__ = (function(prefix) {
  return ScalaJS.bV(this.endPrefixMapping__T__V(prefix))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startPrefixMapping__T__T__ = (function(prefix$2, uri) {
  return ScalaJS.bV(this.startPrefixMapping__T__T__V(prefix$2, uri))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.endDocument__ = (function() {
  return ScalaJS.bV(this.endDocument__V())
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.startDocument__ = (function() {
  return ScalaJS.bV(this.startDocument__V())
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.setDocumentLocator__Lorg_xml_sax_Locator__ = (function(locator) {
  return ScalaJS.bV(this.setDocumentLocator__Lorg_xml_sax_Locator__V(locator))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.out$und$eq__Ljava_io_OutputStreamWriter__ = (function(x$1) {
  return ScalaJS.bV(this.out$und$eq__Ljava_io_OutputStreamWriter__V(x$1))
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.out__ = (function() {
  return this.out__Ljava_io_OutputStreamWriter()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_include_sax_XIncluder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_include_sax_XIncluder.prototype = ScalaJS.c.scala_xml_include_sax_XIncluder.prototype;
ScalaJS.is.scala_xml_include_sax_XIncluder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_include_sax_XIncluder)))
});
ScalaJS.as.scala_xml_include_sax_XIncluder = (function(obj) {
  if ((ScalaJS.is.scala_xml_include_sax_XIncluder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.include.sax.XIncluder")
  }
});
ScalaJS.isArrayOf.scala_xml_include_sax_XIncluder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_include_sax_XIncluder)))
});
ScalaJS.asArrayOf.scala_xml_include_sax_XIncluder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_include_sax_XIncluder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.include.sax.XIncluder;", depth)
  }
});
ScalaJS.data.scala_xml_include_sax_XIncluder = new ScalaJS.ClassTypeData({
  scala_xml_include_sax_XIncluder: 0
}, false, "scala.xml.include.sax.XIncluder", ScalaJS.data.java_lang_Object, {
  scala_xml_include_sax_XIncluder: 1,
  org_xml_sax_ext_LexicalHandler: 1,
  org_xml_sax_ContentHandler: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_include_sax_XIncluder.prototype.$classData = ScalaJS.data.scala_xml_include_sax_XIncluder;
//@ sourceMappingURL=XIncluder.js.map
