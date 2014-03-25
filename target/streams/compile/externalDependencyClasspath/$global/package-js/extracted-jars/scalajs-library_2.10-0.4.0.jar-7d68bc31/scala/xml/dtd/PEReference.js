/** @constructor */
ScalaJS.c.scala_xml_dtd_PEReference = (function() {
  ScalaJS.c.scala_xml_dtd_MarkupDecl.call(this);
  this.ent$3 = null
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype = new ScalaJS.inheritable.scala_xml_dtd_MarkupDecl();
ScalaJS.c.scala_xml_dtd_PEReference.prototype.constructor = ScalaJS.c.scala_xml_dtd_PEReference;
ScalaJS.c.scala_xml_dtd_PEReference.prototype.ent__T = (function() {
  return this.ent$3
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__C__Lscala_collection_mutable_StringBuilder(37).append__T__Lscala_collection_mutable_StringBuilder(this.ent__T()).append__C__Lscala_collection_mutable_StringBuilder(59)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.copy__T__Lscala_xml_dtd_PEReference = (function(ent) {
  return new ScalaJS.c.scala_xml_dtd_PEReference().init___T(ent)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.copy$default$1__T = (function() {
  return this.ent__T()
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productPrefix__T = (function() {
  return "PEReference"
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.ent__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_PEReference(x$1)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_PEReference(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var PEReference$1 = ScalaJS.as.scala_xml_dtd_PEReference(x$1);
      return (ScalaJS.anyRefEqEq(this.ent__T(), PEReference$1.ent__T()) && PEReference$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.init___T = (function(ent) {
  this.ent$3 = ent;
  ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  if ((!ScalaJS.modules.scala_xml_Utility().isName__T__Z(ent))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("ent must be an XML Name")
  };
  return this
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.copy__T__ = (function(ent) {
  return this.copy__T__Lscala_xml_dtd_PEReference(ent)
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.ent__ = (function() {
  return this.ent__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_PEReference = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_PEReference.prototype = ScalaJS.c.scala_xml_dtd_PEReference.prototype;
ScalaJS.is.scala_xml_dtd_PEReference = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_PEReference)))
});
ScalaJS.as.scala_xml_dtd_PEReference = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_PEReference(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.PEReference")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_PEReference = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_PEReference)))
});
ScalaJS.asArrayOf.scala_xml_dtd_PEReference = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_PEReference(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.PEReference;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_PEReference = new ScalaJS.ClassTypeData({
  scala_xml_dtd_PEReference: 0
}, false, "scala.xml.dtd.PEReference", ScalaJS.data.scala_xml_dtd_MarkupDecl, {
  scala_xml_dtd_PEReference: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_PEReference.prototype.$classData = ScalaJS.data.scala_xml_dtd_PEReference;
//@ sourceMappingURL=PEReference.js.map
