/** @constructor */
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl = (function() {
  ScalaJS.c.scala_xml_dtd_EntityDecl.call(this);
  this.name$4 = null;
  this.extID$4 = null;
  this.notation$4 = null
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_EntityDecl();
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl;
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.name__T = (function() {
  return this.name$4
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.extID__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID$4
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.notation__T = (function() {
  return this.notation$4
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  sb.append__T__Lscala_collection_mutable_StringBuilder("<!ENTITY ").append__T__Lscala_collection_mutable_StringBuilder(this.name__T()).append__C__Lscala_collection_mutable_StringBuilder(32);
  return this.extID__Lscala_xml_dtd_ExternalID().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb).append__T__Lscala_collection_mutable_StringBuilder(" NDATA ").append__T__Lscala_collection_mutable_StringBuilder(this.notation__T()).append__C__Lscala_collection_mutable_StringBuilder(62)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.copy__T__Lscala_xml_dtd_ExternalID__T__Lscala_xml_dtd_UnparsedEntityDecl = (function(name, extID, notation) {
  return new ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl().init___T__Lscala_xml_dtd_ExternalID__T(name, extID, notation)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.copy$default$2__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.copy$default$3__T = (function() {
  return this.notation__T()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productPrefix__T = (function() {
  return "UnparsedEntityDecl"
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productElement__I__O = (function(x$1) {
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
    case 2:
      {
        return this.notation__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_UnparsedEntityDecl(x$1)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_UnparsedEntityDecl(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var UnparsedEntityDecl$1 = ScalaJS.as.scala_xml_dtd_UnparsedEntityDecl(x$1);
      return (((ScalaJS.anyRefEqEq(this.name__T(), UnparsedEntityDecl$1.name__T()) && ScalaJS.anyRefEqEq(this.extID__Lscala_xml_dtd_ExternalID(), UnparsedEntityDecl$1.extID__Lscala_xml_dtd_ExternalID())) && ScalaJS.anyRefEqEq(this.notation__T(), UnparsedEntityDecl$1.notation__T())) && UnparsedEntityDecl$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.init___T__Lscala_xml_dtd_ExternalID__T = (function(name, extID, notation) {
  this.name$4 = name;
  this.extID$4 = extID;
  this.notation$4 = notation;
  ScalaJS.c.scala_xml_dtd_EntityDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.copy__T__Lscala_xml_dtd_ExternalID__T__ = (function(name, extID, notation) {
  return this.copy__T__Lscala_xml_dtd_ExternalID__T__Lscala_xml_dtd_UnparsedEntityDecl(name, extID, notation)
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.notation__ = (function() {
  return this.notation__T()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.extID__ = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_UnparsedEntityDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_UnparsedEntityDecl.prototype = ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype;
ScalaJS.is.scala_xml_dtd_UnparsedEntityDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_UnparsedEntityDecl)))
});
ScalaJS.as.scala_xml_dtd_UnparsedEntityDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_UnparsedEntityDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.UnparsedEntityDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_UnparsedEntityDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_UnparsedEntityDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_UnparsedEntityDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_UnparsedEntityDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.UnparsedEntityDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_UnparsedEntityDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_UnparsedEntityDecl: 0
}, false, "scala.xml.dtd.UnparsedEntityDecl", ScalaJS.data.scala_xml_dtd_EntityDecl, {
  scala_xml_dtd_UnparsedEntityDecl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_EntityDecl: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_UnparsedEntityDecl;
//@ sourceMappingURL=UnparsedEntityDecl.js.map
