/** @constructor */
ScalaJS.c.scala_xml_dtd_IntDef = (function() {
  ScalaJS.c.scala_xml_dtd_EntityDef.call(this);
  this.value$2 = null
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype = new ScalaJS.inheritable.scala_xml_dtd_EntityDef();
ScalaJS.c.scala_xml_dtd_IntDef.prototype.constructor = ScalaJS.c.scala_xml_dtd_IntDef;
ScalaJS.c.scala_xml_dtd_IntDef.prototype.value__T = (function() {
  return this.value$2
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.validateValue__p2__V = (function() {
  var tmp = this.value__T();
  var ix = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(tmp, 37);
  while ((ix !== -1)) {
    var iz = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I__I(tmp, 59, ix);
    if (((iz === -1) && (iz === (ix + 1)))) {
      throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("no % allowed in entity value, except for parameter-entity-references")
    } else {
      var n = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(tmp, ix, iz);
      if ((!ScalaJS.modules.scala_xml_Utility().isName__T__Z(n))) {
        throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("internal entity def: \"" + n) + "\" must be an XML Name"))
      };
      tmp = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(tmp, (iz + 1), ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(tmp));
      ix = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(tmp, 37)
    }
  }
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return ScalaJS.modules.scala_xml_Utility().appendQuoted__T__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this.value__T(), sb)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.copy__T__Lscala_xml_dtd_IntDef = (function(value) {
  return new ScalaJS.c.scala_xml_dtd_IntDef().init___T(value)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.copy$default$1__T = (function() {
  return this.value__T()
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productPrefix__T = (function() {
  return "IntDef"
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.value__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_IntDef(x$1)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_IntDef(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var IntDef$1 = ScalaJS.as.scala_xml_dtd_IntDef(x$1);
      return (ScalaJS.anyRefEqEq(this.value__T(), IntDef$1.value__T()) && IntDef$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.init___T = (function(value) {
  this.value$2 = value;
  ScalaJS.c.scala_xml_dtd_EntityDef.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  this.validateValue__p2__V();
  return this
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.copy__T__ = (function(value) {
  return this.copy__T__Lscala_xml_dtd_IntDef(value)
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.value__ = (function() {
  return this.value__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_IntDef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_IntDef.prototype = ScalaJS.c.scala_xml_dtd_IntDef.prototype;
ScalaJS.is.scala_xml_dtd_IntDef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_IntDef)))
});
ScalaJS.as.scala_xml_dtd_IntDef = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_IntDef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.IntDef")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_IntDef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_IntDef)))
});
ScalaJS.asArrayOf.scala_xml_dtd_IntDef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_IntDef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.IntDef;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_IntDef = new ScalaJS.ClassTypeData({
  scala_xml_dtd_IntDef: 0
}, false, "scala.xml.dtd.IntDef", ScalaJS.data.scala_xml_dtd_EntityDef, {
  scala_xml_dtd_IntDef: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_EntityDef: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_IntDef.prototype.$classData = ScalaJS.data.scala_xml_dtd_IntDef;
//@ sourceMappingURL=IntDef.js.map
