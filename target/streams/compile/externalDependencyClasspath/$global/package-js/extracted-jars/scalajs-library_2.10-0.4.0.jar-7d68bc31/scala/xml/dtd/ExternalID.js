/** @constructor */
ScalaJS.c.scala_xml_dtd_ExternalID = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.constructor = ScalaJS.c.scala_xml_dtd_ExternalID;
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isSpace__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isSpace__Lscala_collection_Seq__Z = (function(cs) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, cs)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isAlpha__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlpha__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isAlphaDigit__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlphaDigit__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isNameChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isNameStart__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameStart__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isName__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isName__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isPubIDChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isPubIDChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isValidIANAEncoding__Lscala_collection_Seq__Z = (function(ianaEncoding) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isValidIANAEncoding__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, ianaEncoding)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.checkSysID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkSysID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.checkPubID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkPubID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.quoted__T__T = (function(s) {
  if (new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(s)).contains__O__Z(ScalaJS.bC(34))) {
    var c = 39
  } else {
    var c = 34
  };
  return (("" + (ScalaJS.bC(c) + s)) + ScalaJS.bC(c))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.toString__T = (function() {
  var quotedSystemLiteral$lzy = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  var quotedPublicLiteral$lzy = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  var bitmap$0 = new ScalaJS.c.scala_runtime_VolatileByteRef().init___B(0);
  if (ScalaJS.anyRefEqEq(this.publicId__T(), null)) {
    return ("SYSTEM " + this.quotedSystemLiteral$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(quotedSystemLiteral$lzy, bitmap$0))
  } else {
    var jsx$2 = ("PUBLIC " + this.quotedPublicLiteral$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(quotedPublicLiteral$lzy, bitmap$0));
    if (ScalaJS.anyRefEqEq(this.systemId__T(), null)) {
      var jsx$1 = ""
    } else {
      var jsx$1 = (" " + this.quotedSystemLiteral$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(quotedSystemLiteral$lzy, bitmap$0))
    };
    return (jsx$2 + jsx$1)
  }
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder(this.toString__T())
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.quotedSystemLiteral$lzycompute$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T = (function(quotedSystemLiteral$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    quotedSystemLiteral$lzy$1.elem$1 = this.quoted__T__T(this.systemId__T());
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.java_lang_String(quotedSystemLiteral$lzy$1.elem$1)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.quotedSystemLiteral$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T = (function(quotedSystemLiteral$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 1) === 0)) {
    return this.quotedSystemLiteral$lzycompute$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(quotedSystemLiteral$lzy$1, bitmap$0$1)
  } else {
    return ScalaJS.as.java_lang_String(quotedSystemLiteral$lzy$1.elem$1)
  }
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.quotedPublicLiteral$lzycompute$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T = (function(quotedPublicLiteral$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 2) === 0)) {
    quotedPublicLiteral$lzy$1.elem$1 = this.quoted__T__T(this.publicId__T());
    bitmap$0$1.elem$1 = (bitmap$0$1.elem$1 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return ScalaJS.as.java_lang_String(quotedPublicLiteral$lzy$1.elem$1)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.quotedPublicLiteral$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T = (function(quotedPublicLiteral$lzy$1, bitmap$0$1) {
  if (((bitmap$0$1.elem$1 & 2) === 0)) {
    return this.quotedPublicLiteral$lzycompute$1__p1__Lscala_runtime_ObjectRef__Lscala_runtime_VolatileByteRef__T(quotedPublicLiteral$lzy$1, bitmap$0$1)
  } else {
    return ScalaJS.as.java_lang_String(quotedPublicLiteral$lzy$1.elem$1)
  }
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_parsing_TokenTests$class__$init$__Lscala_xml_parsing_TokenTests__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.checkPubID__T__ = (function(s) {
  return ScalaJS.bZ(this.checkPubID__T__Z(s))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.checkSysID__T__ = (function(s$2) {
  return ScalaJS.bZ(this.checkSysID__T__Z(s$2))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isValidIANAEncoding__Lscala_collection_Seq__ = (function(ianaEncoding) {
  return ScalaJS.bZ(this.isValidIANAEncoding__Lscala_collection_Seq__Z(ianaEncoding))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isPubIDChar__C__ = (function(ch) {
  return ScalaJS.bZ(this.isPubIDChar__C__Z(ch))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isName__T__ = (function(s$3) {
  return ScalaJS.bZ(this.isName__T__Z(s$3))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isNameStart__C__ = (function(ch$2) {
  return ScalaJS.bZ(this.isNameStart__C__Z(ch$2))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isNameChar__C__ = (function(ch$3) {
  return ScalaJS.bZ(this.isNameChar__C__Z(ch$3))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isAlphaDigit__C__ = (function(c) {
  return ScalaJS.bZ(this.isAlphaDigit__C__Z(c))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isAlpha__C__ = (function(c$2) {
  return ScalaJS.bZ(this.isAlpha__C__Z(c$2))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isSpace__Lscala_collection_Seq__ = (function(cs) {
  return ScalaJS.bZ(this.isSpace__Lscala_collection_Seq__Z(cs))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.isSpace__C__ = (function(ch$4) {
  return ScalaJS.bZ(this.isSpace__C__Z(ch$4))
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.buildString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.quoted__T__ = (function(s$4) {
  return this.quoted__T__T(s$4)
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.publicId__ = (function() {
  return this.publicId__T()
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.systemId__ = (function() {
  return this.systemId__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ExternalID = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ExternalID.prototype = ScalaJS.c.scala_xml_dtd_ExternalID.prototype;
ScalaJS.is.scala_xml_dtd_ExternalID = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ExternalID)))
});
ScalaJS.as.scala_xml_dtd_ExternalID = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ExternalID(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ExternalID")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ExternalID = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ExternalID)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ExternalID = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ExternalID(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ExternalID;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ExternalID = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ExternalID: 0
}, false, "scala.xml.dtd.ExternalID", ScalaJS.data.java_lang_Object, {
  scala_xml_dtd_ExternalID: 1,
  scala_xml_parsing_TokenTests: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ExternalID.prototype.$classData = ScalaJS.data.scala_xml_dtd_ExternalID;
//@ sourceMappingURL=ExternalID.js.map
