/** @constructor */
ScalaJS.c.scala_xml_dtd_NotationDecl = (function() {
  ScalaJS.c.scala_xml_dtd_MarkupDecl.call(this);
  this.name$3 = null;
  this.extID$3 = null
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_MarkupDecl();
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_NotationDecl;
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.name__T = (function() {
  return this.name$3
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.extID__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID$3
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  sb.append__T__Lscala_collection_mutable_StringBuilder("<!NOTATION ").append__T__Lscala_collection_mutable_StringBuilder(this.name__T()).append__C__Lscala_collection_mutable_StringBuilder(32);
  return this.extID__Lscala_xml_dtd_ExternalID().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.copy__T__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_NotationDecl = (function(name, extID) {
  return new ScalaJS.c.scala_xml_dtd_NotationDecl().init___T__Lscala_xml_dtd_ExternalID(name, extID)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.copy$default$2__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productPrefix__T = (function() {
  return "NotationDecl"
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.extID__Lscala_xml_dtd_ExternalID();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_NotationDecl(x$1)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_NotationDecl(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var NotationDecl$1 = ScalaJS.as.scala_xml_dtd_NotationDecl(x$1);
      return ((ScalaJS.anyRefEqEq(this.name__T(), NotationDecl$1.name__T()) && ScalaJS.anyRefEqEq(this.extID__Lscala_xml_dtd_ExternalID(), NotationDecl$1.extID__Lscala_xml_dtd_ExternalID())) && NotationDecl$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.init___T__Lscala_xml_dtd_ExternalID = (function(name, extID) {
  this.name$3 = name;
  this.extID$3 = extID;
  ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.copy__T__Lscala_xml_dtd_ExternalID__ = (function(name, extID) {
  return this.copy__T__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_NotationDecl(name, extID)
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.extID__ = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_NotationDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_NotationDecl.prototype = ScalaJS.c.scala_xml_dtd_NotationDecl.prototype;
ScalaJS.is.scala_xml_dtd_NotationDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_NotationDecl)))
});
ScalaJS.as.scala_xml_dtd_NotationDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_NotationDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.NotationDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_NotationDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_NotationDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_NotationDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_NotationDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.NotationDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_NotationDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_NotationDecl: 0
}, false, "scala.xml.dtd.NotationDecl", ScalaJS.data.scala_xml_dtd_MarkupDecl, {
  scala_xml_dtd_NotationDecl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_NotationDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_NotationDecl;
//@ sourceMappingURL=NotationDecl.js.map
