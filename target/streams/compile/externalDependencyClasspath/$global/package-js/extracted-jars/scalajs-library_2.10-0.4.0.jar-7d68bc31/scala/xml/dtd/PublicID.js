/** @constructor */
ScalaJS.c.scala_xml_dtd_PublicID = (function() {
  ScalaJS.c.scala_xml_dtd_ExternalID.call(this);
  this.publicId$2 = null;
  this.systemId$2 = null
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype = new ScalaJS.inheritable.scala_xml_dtd_ExternalID();
ScalaJS.c.scala_xml_dtd_PublicID.prototype.constructor = ScalaJS.c.scala_xml_dtd_PublicID;
ScalaJS.c.scala_xml_dtd_PublicID.prototype.publicId__T = (function() {
  return this.publicId$2
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.systemId__T = (function() {
  return this.systemId$2
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.label__T = (function() {
  return "#PI"
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.attribute__Lscala_xml_MetaData = (function() {
  return ScalaJS.modules.scala_xml_Node().NoAttributes__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.child__Lscala_collection_immutable_Nil$ = (function() {
  return ScalaJS.modules.scala_collection_immutable_Nil()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.copy__T__T__Lscala_xml_dtd_PublicID = (function(publicId, systemId) {
  return new ScalaJS.c.scala_xml_dtd_PublicID().init___T__T(publicId, systemId)
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.copy$default$1__T = (function() {
  return this.publicId__T()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.copy$default$2__T = (function() {
  return this.systemId__T()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productPrefix__T = (function() {
  return "PublicID"
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.publicId__T();
        break
      };
    case 1:
      {
        return this.systemId__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_PublicID(x$1)
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_PublicID(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var PublicID$1 = ScalaJS.as.scala_xml_dtd_PublicID(x$1);
      return ((ScalaJS.anyRefEqEq(this.publicId__T(), PublicID$1.publicId__T()) && ScalaJS.anyRefEqEq(this.systemId__T(), PublicID$1.systemId__T())) && PublicID$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.init___T__T = (function(publicId, systemId) {
  this.publicId$2 = publicId;
  this.systemId$2 = systemId;
  ScalaJS.c.scala_xml_dtd_ExternalID.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  if ((!this.checkPubID__T__Z(publicId))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("publicId must consist of PubidChars")
  };
  if (((!ScalaJS.anyRefEqEq(systemId, null)) && (!this.checkSysID__T__Z(systemId)))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("can't use both \" and ' in systemId")
  };
  return this
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.copy__T__T__ = (function(publicId, systemId) {
  return this.copy__T__T__Lscala_xml_dtd_PublicID(publicId, systemId)
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.child__ = (function() {
  return this.child__Lscala_collection_immutable_Nil$()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.attribute__ = (function() {
  return this.attribute__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.label__ = (function() {
  return this.label__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_PublicID = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_PublicID.prototype = ScalaJS.c.scala_xml_dtd_PublicID.prototype;
ScalaJS.is.scala_xml_dtd_PublicID = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_PublicID)))
});
ScalaJS.as.scala_xml_dtd_PublicID = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_PublicID(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.PublicID")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_PublicID = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_PublicID)))
});
ScalaJS.asArrayOf.scala_xml_dtd_PublicID = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_PublicID(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.PublicID;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_PublicID = new ScalaJS.ClassTypeData({
  scala_xml_dtd_PublicID: 0
}, false, "scala.xml.dtd.PublicID", ScalaJS.data.scala_xml_dtd_ExternalID, {
  scala_xml_dtd_PublicID: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_ExternalID: 1,
  scala_xml_parsing_TokenTests: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_PublicID.prototype.$classData = ScalaJS.data.scala_xml_dtd_PublicID;
//@ sourceMappingURL=PublicID.js.map
