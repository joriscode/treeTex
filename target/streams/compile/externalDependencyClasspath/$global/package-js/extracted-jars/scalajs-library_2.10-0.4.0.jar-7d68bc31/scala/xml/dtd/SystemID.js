/** @constructor */
ScalaJS.c.scala_xml_dtd_SystemID = (function() {
  ScalaJS.c.scala_xml_dtd_ExternalID.call(this);
  this.systemId$2 = null;
  this.publicId$2 = null
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype = new ScalaJS.inheritable.scala_xml_dtd_ExternalID();
ScalaJS.c.scala_xml_dtd_SystemID.prototype.constructor = ScalaJS.c.scala_xml_dtd_SystemID;
ScalaJS.c.scala_xml_dtd_SystemID.prototype.systemId__T = (function() {
  return this.systemId$2
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.publicId__Lscala_Null = (function() {
  return this.publicId$2
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.copy__T__Lscala_xml_dtd_SystemID = (function(systemId) {
  return new ScalaJS.c.scala_xml_dtd_SystemID().init___T(systemId)
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.copy$default$1__T = (function() {
  return this.systemId__T()
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productPrefix__T = (function() {
  return "SystemID"
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.systemId__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_SystemID(x$1)
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_SystemID(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var SystemID$1 = ScalaJS.as.scala_xml_dtd_SystemID(x$1);
      return (ScalaJS.anyRefEqEq(this.systemId__T(), SystemID$1.systemId__T()) && SystemID$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.publicId__T = (function() {
  return this.publicId__Lscala_Null()
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.init___T = (function(systemId) {
  this.systemId$2 = systemId;
  ScalaJS.c.scala_xml_dtd_ExternalID.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.publicId$2 = null;
  if ((!this.checkSysID__T__Z(systemId))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("can't use both \" and ' in systemId")
  };
  return this
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.copy__T__ = (function(systemId) {
  return this.copy__T__Lscala_xml_dtd_SystemID(systemId)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_SystemID = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_SystemID.prototype = ScalaJS.c.scala_xml_dtd_SystemID.prototype;
ScalaJS.is.scala_xml_dtd_SystemID = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_SystemID)))
});
ScalaJS.as.scala_xml_dtd_SystemID = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_SystemID(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.SystemID")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_SystemID = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_SystemID)))
});
ScalaJS.asArrayOf.scala_xml_dtd_SystemID = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_SystemID(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.SystemID;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_SystemID = new ScalaJS.ClassTypeData({
  scala_xml_dtd_SystemID: 0
}, false, "scala.xml.dtd.SystemID", ScalaJS.data.scala_xml_dtd_ExternalID, {
  scala_xml_dtd_SystemID: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_ExternalID: 1,
  scala_xml_parsing_TokenTests: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_SystemID.prototype.$classData = ScalaJS.data.scala_xml_dtd_SystemID;
//@ sourceMappingURL=SystemID.js.map
