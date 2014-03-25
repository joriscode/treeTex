/** @constructor */
ScalaJS.c.scala_xml_dtd_ElemDecl = (function() {
  ScalaJS.c.scala_xml_dtd_MarkupDecl.call(this);
  this.name$3 = null;
  this.contentModel$3 = null
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_MarkupDecl();
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_ElemDecl;
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.name__T = (function() {
  return this.name$3
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.contentModel__Lscala_xml_dtd_ContentModel = (function() {
  return this.contentModel$3
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  sb.append__T__Lscala_collection_mutable_StringBuilder("<!ELEMENT ").append__T__Lscala_collection_mutable_StringBuilder(this.name__T()).append__C__Lscala_collection_mutable_StringBuilder(32);
  ScalaJS.modules.scala_xml_dtd_ContentModel().buildString__Lscala_xml_dtd_ContentModel__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this.contentModel__Lscala_xml_dtd_ContentModel(), sb);
  return sb.append__C__Lscala_collection_mutable_StringBuilder(62)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.copy__T__Lscala_xml_dtd_ContentModel__Lscala_xml_dtd_ElemDecl = (function(name, contentModel) {
  return new ScalaJS.c.scala_xml_dtd_ElemDecl().init___T__Lscala_xml_dtd_ContentModel(name, contentModel)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.copy$default$2__Lscala_xml_dtd_ContentModel = (function() {
  return this.contentModel__Lscala_xml_dtd_ContentModel()
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productPrefix__T = (function() {
  return "ElemDecl"
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.contentModel__Lscala_xml_dtd_ContentModel();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_ElemDecl(x$1)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_ElemDecl(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ElemDecl$1 = ScalaJS.as.scala_xml_dtd_ElemDecl(x$1);
      return ((ScalaJS.anyRefEqEq(this.name__T(), ElemDecl$1.name__T()) && ScalaJS.anyRefEqEq(this.contentModel__Lscala_xml_dtd_ContentModel(), ElemDecl$1.contentModel__Lscala_xml_dtd_ContentModel())) && ElemDecl$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.init___T__Lscala_xml_dtd_ContentModel = (function(name, contentModel) {
  this.name$3 = name;
  this.contentModel$3 = contentModel;
  ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.copy__T__Lscala_xml_dtd_ContentModel__ = (function(name, contentModel) {
  return this.copy__T__Lscala_xml_dtd_ContentModel__Lscala_xml_dtd_ElemDecl(name, contentModel)
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.contentModel__ = (function() {
  return this.contentModel__Lscala_xml_dtd_ContentModel()
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ElemDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ElemDecl.prototype = ScalaJS.c.scala_xml_dtd_ElemDecl.prototype;
ScalaJS.is.scala_xml_dtd_ElemDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ElemDecl)))
});
ScalaJS.as.scala_xml_dtd_ElemDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ElemDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ElemDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ElemDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ElemDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ElemDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ElemDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ElemDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ElemDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ElemDecl: 0
}, false, "scala.xml.dtd.ElemDecl", ScalaJS.data.scala_xml_dtd_MarkupDecl, {
  scala_xml_dtd_ElemDecl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ElemDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_ElemDecl;
//@ sourceMappingURL=ElemDecl.js.map
