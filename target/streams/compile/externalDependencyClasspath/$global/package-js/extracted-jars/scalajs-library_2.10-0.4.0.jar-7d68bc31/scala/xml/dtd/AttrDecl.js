/** @constructor */
ScalaJS.c.scala_xml_dtd_AttrDecl = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.name$1 = null;
  this.tpe$1 = null;
  this.default$1 = null
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_AttrDecl;
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.tpe__T = (function() {
  return this.tpe$1
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.$default__Lscala_xml_dtd_DefaultDecl = (function() {
  return this.default$1
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(sb) {
      arg$outer.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      return ScalaJS.bV(undefined)
    })
  })(this)))
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  sb.append__T__Lscala_collection_mutable_StringBuilder("  ").append__T__Lscala_collection_mutable_StringBuilder(this.name__T()).append__C__Lscala_collection_mutable_StringBuilder(32).append__T__Lscala_collection_mutable_StringBuilder(this.tpe__T()).append__C__Lscala_collection_mutable_StringBuilder(32);
  return this.$default__Lscala_xml_dtd_DefaultDecl().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.copy__T__T__Lscala_xml_dtd_DefaultDecl__Lscala_xml_dtd_AttrDecl = (function(name, tpe, default$2) {
  return new ScalaJS.c.scala_xml_dtd_AttrDecl().init___T__T__Lscala_xml_dtd_DefaultDecl(name, tpe, default$2)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.copy$default$2__T = (function() {
  return this.tpe__T()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.copy$default$3__Lscala_xml_dtd_DefaultDecl = (function() {
  return this.$default__Lscala_xml_dtd_DefaultDecl()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productPrefix__T = (function() {
  return "AttrDecl"
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    case 1:
      {
        return this.tpe__T();
        break
      };
    case 2:
      {
        return this.$default__Lscala_xml_dtd_DefaultDecl();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_AttrDecl(x$1)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_AttrDecl(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var AttrDecl$1 = ScalaJS.as.scala_xml_dtd_AttrDecl(x$1);
      return (((ScalaJS.anyRefEqEq(this.name__T(), AttrDecl$1.name__T()) && ScalaJS.anyRefEqEq(this.tpe__T(), AttrDecl$1.tpe__T())) && ScalaJS.anyRefEqEq(this.$default__Lscala_xml_dtd_DefaultDecl(), AttrDecl$1.$default__Lscala_xml_dtd_DefaultDecl())) && AttrDecl$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.init___T__T__Lscala_xml_dtd_DefaultDecl = (function(name, tpe, default$2) {
  this.name$1 = name;
  this.tpe$1 = tpe;
  this.default$1 = default$2;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.copy__T__T__Lscala_xml_dtd_DefaultDecl__ = (function(name, tpe, default$2) {
  return this.copy__T__T__Lscala_xml_dtd_DefaultDecl__Lscala_xml_dtd_AttrDecl(name, tpe, default$2)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.$default__ = (function() {
  return this.$default__Lscala_xml_dtd_DefaultDecl()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.tpe__ = (function() {
  return this.tpe__T()
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_AttrDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_AttrDecl.prototype = ScalaJS.c.scala_xml_dtd_AttrDecl.prototype;
ScalaJS.is.scala_xml_dtd_AttrDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_AttrDecl)))
});
ScalaJS.as.scala_xml_dtd_AttrDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_AttrDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.AttrDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_AttrDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_AttrDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_AttrDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_AttrDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.AttrDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_AttrDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_AttrDecl: 0
}, false, "scala.xml.dtd.AttrDecl", ScalaJS.data.java_lang_Object, {
  scala_xml_dtd_AttrDecl: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_AttrDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_AttrDecl;
//@ sourceMappingURL=AttrDecl.js.map
