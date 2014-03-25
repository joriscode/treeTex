/** @constructor */
ScalaJS.c.scala_xml_dtd_ExtDef = (function() {
  ScalaJS.c.scala_xml_dtd_EntityDef.call(this);
  this.extID$2 = null
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype = new ScalaJS.inheritable.scala_xml_dtd_EntityDef();
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.constructor = ScalaJS.c.scala_xml_dtd_ExtDef;
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.extID__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID$2
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return this.extID__Lscala_xml_dtd_ExternalID().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.copy__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_ExtDef = (function(extID) {
  return new ScalaJS.c.scala_xml_dtd_ExtDef().init___Lscala_xml_dtd_ExternalID(extID)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.copy$default$1__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productPrefix__T = (function() {
  return "ExtDef"
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.extID__Lscala_xml_dtd_ExternalID();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_ExtDef(x$1)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_ExtDef(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ExtDef$1 = ScalaJS.as.scala_xml_dtd_ExtDef(x$1);
      return (ScalaJS.anyRefEqEq(this.extID__Lscala_xml_dtd_ExternalID(), ExtDef$1.extID__Lscala_xml_dtd_ExternalID()) && ExtDef$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.init___Lscala_xml_dtd_ExternalID = (function(extID) {
  this.extID$2 = extID;
  ScalaJS.c.scala_xml_dtd_EntityDef.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.copy__Lscala_xml_dtd_ExternalID__ = (function(extID) {
  return this.copy__Lscala_xml_dtd_ExternalID__Lscala_xml_dtd_ExtDef(extID)
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.extID__ = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ExtDef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ExtDef.prototype = ScalaJS.c.scala_xml_dtd_ExtDef.prototype;
ScalaJS.is.scala_xml_dtd_ExtDef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ExtDef)))
});
ScalaJS.as.scala_xml_dtd_ExtDef = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ExtDef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ExtDef")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ExtDef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ExtDef)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ExtDef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ExtDef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ExtDef;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ExtDef = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ExtDef: 0
}, false, "scala.xml.dtd.ExtDef", ScalaJS.data.scala_xml_dtd_EntityDef, {
  scala_xml_dtd_ExtDef: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_EntityDef: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ExtDef.prototype.$classData = ScalaJS.data.scala_xml_dtd_ExtDef;
//@ sourceMappingURL=ExtDef.js.map
