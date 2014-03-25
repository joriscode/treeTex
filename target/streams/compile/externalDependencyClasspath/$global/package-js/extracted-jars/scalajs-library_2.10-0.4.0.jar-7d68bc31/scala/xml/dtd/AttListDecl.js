/** @constructor */
ScalaJS.c.scala_xml_dtd_AttListDecl = (function() {
  ScalaJS.c.scala_xml_dtd_MarkupDecl.call(this);
  this.name$3 = null;
  this.attrs$3 = null
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_MarkupDecl();
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_AttListDecl;
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.name__T = (function() {
  return this.name$3
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.attrs__Lscala_collection_immutable_List = (function() {
  return this.attrs$3
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder("<!ATTLIST ").append__T__Lscala_collection_mutable_StringBuilder(this.name__T()).append__C__Lscala_collection_mutable_StringBuilder(10).append__T__Lscala_collection_mutable_StringBuilder(this.attrs__Lscala_collection_immutable_List().mkString__T__T__T__T("", "\n", ">"))
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.copy__T__Lscala_collection_immutable_List__Lscala_xml_dtd_AttListDecl = (function(name, attrs) {
  return new ScalaJS.c.scala_xml_dtd_AttListDecl().init___T__Lscala_collection_immutable_List(name, attrs)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.copy$default$2__Lscala_collection_immutable_List = (function() {
  return this.attrs__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productPrefix__T = (function() {
  return "AttListDecl"
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.attrs__Lscala_collection_immutable_List();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_AttListDecl(x$1)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_AttListDecl(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var AttListDecl$1 = ScalaJS.as.scala_xml_dtd_AttListDecl(x$1);
      return ((ScalaJS.anyRefEqEq(this.name__T(), AttListDecl$1.name__T()) && ScalaJS.anyRefEqEq(this.attrs__Lscala_collection_immutable_List(), AttListDecl$1.attrs__Lscala_collection_immutable_List())) && AttListDecl$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.init___T__Lscala_collection_immutable_List = (function(name, attrs) {
  this.name$3 = name;
  this.attrs$3 = attrs;
  ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.copy__T__Lscala_collection_immutable_List__ = (function(name, attrs) {
  return this.copy__T__Lscala_collection_immutable_List__Lscala_xml_dtd_AttListDecl(name, attrs)
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.attrs__ = (function() {
  return this.attrs__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_AttListDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_AttListDecl.prototype = ScalaJS.c.scala_xml_dtd_AttListDecl.prototype;
ScalaJS.is.scala_xml_dtd_AttListDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_AttListDecl)))
});
ScalaJS.as.scala_xml_dtd_AttListDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_AttListDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.AttListDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_AttListDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_AttListDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_AttListDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_AttListDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.AttListDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_AttListDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_AttListDecl: 0
}, false, "scala.xml.dtd.AttListDecl", ScalaJS.data.scala_xml_dtd_MarkupDecl, {
  scala_xml_dtd_AttListDecl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_AttListDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_AttListDecl;
//@ sourceMappingURL=AttListDecl.js.map
