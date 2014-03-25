/** @constructor */
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl = (function() {
  ScalaJS.c.scala_xml_dtd_EntityDecl.call(this);
  this.name$4 = null;
  this.entdef$4 = null
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_EntityDecl();
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_ParameterEntityDecl;
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.name__T = (function() {
  return this.name$4
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.entdef__Lscala_xml_dtd_EntityDef = (function() {
  return this.entdef$4
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  sb.append__T__Lscala_collection_mutable_StringBuilder("<!ENTITY % ").append__T__Lscala_collection_mutable_StringBuilder(this.name__T()).append__C__Lscala_collection_mutable_StringBuilder(32);
  return this.entdef__Lscala_xml_dtd_EntityDef().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb).append__C__Lscala_collection_mutable_StringBuilder(62)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.copy__T__Lscala_xml_dtd_EntityDef__Lscala_xml_dtd_ParameterEntityDecl = (function(name, entdef) {
  return new ScalaJS.c.scala_xml_dtd_ParameterEntityDecl().init___T__Lscala_xml_dtd_EntityDef(name, entdef)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.copy$default$2__Lscala_xml_dtd_EntityDef = (function() {
  return this.entdef__Lscala_xml_dtd_EntityDef()
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productPrefix__T = (function() {
  return "ParameterEntityDecl"
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.entdef__Lscala_xml_dtd_EntityDef();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_ParameterEntityDecl(x$1)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_ParameterEntityDecl(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ParameterEntityDecl$1 = ScalaJS.as.scala_xml_dtd_ParameterEntityDecl(x$1);
      return ((ScalaJS.anyRefEqEq(this.name__T(), ParameterEntityDecl$1.name__T()) && ScalaJS.anyRefEqEq(this.entdef__Lscala_xml_dtd_EntityDef(), ParameterEntityDecl$1.entdef__Lscala_xml_dtd_EntityDef())) && ParameterEntityDecl$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.init___T__Lscala_xml_dtd_EntityDef = (function(name, entdef) {
  this.name$4 = name;
  this.entdef$4 = entdef;
  ScalaJS.c.scala_xml_dtd_EntityDecl.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.copy__T__Lscala_xml_dtd_EntityDef__ = (function(name, entdef) {
  return this.copy__T__Lscala_xml_dtd_EntityDef__Lscala_xml_dtd_ParameterEntityDecl(name, entdef)
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.entdef__ = (function() {
  return this.entdef__Lscala_xml_dtd_EntityDef()
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ParameterEntityDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ParameterEntityDecl.prototype = ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype;
ScalaJS.is.scala_xml_dtd_ParameterEntityDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ParameterEntityDecl)))
});
ScalaJS.as.scala_xml_dtd_ParameterEntityDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ParameterEntityDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ParameterEntityDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ParameterEntityDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ParameterEntityDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ParameterEntityDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ParameterEntityDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ParameterEntityDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ParameterEntityDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ParameterEntityDecl: 0
}, false, "scala.xml.dtd.ParameterEntityDecl", ScalaJS.data.scala_xml_dtd_EntityDecl, {
  scala_xml_dtd_ParameterEntityDecl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_EntityDecl: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ParameterEntityDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_ParameterEntityDecl;
//@ sourceMappingURL=ParameterEntityDecl.js.map
