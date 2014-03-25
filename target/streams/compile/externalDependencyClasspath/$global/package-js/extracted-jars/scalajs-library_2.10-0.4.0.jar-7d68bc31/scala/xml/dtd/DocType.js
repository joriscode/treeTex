/** @constructor */
ScalaJS.c.scala_xml_dtd_DocType = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.name$1 = null;
  this.extID$1 = null;
  this.intSubset$1 = null
});
ScalaJS.c.scala_xml_dtd_DocType.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_dtd_DocType.prototype.constructor = ScalaJS.c.scala_xml_dtd_DocType;
ScalaJS.c.scala_xml_dtd_DocType.prototype.name__T = (function() {
  return this.name$1
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.extID__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID$1
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.intSubset__Lscala_collection_Seq = (function() {
  return this.intSubset$1
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.toString__T = (function() {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("<!DOCTYPE %s %s%s>")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.name__T(), this.extID__Lscala_xml_dtd_ExternalID().toString__T(), this.intString$1__p1__T()])))
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.copy__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__Lscala_xml_dtd_DocType = (function(name, extID, intSubset) {
  return new ScalaJS.c.scala_xml_dtd_DocType().init___T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq(name, extID, intSubset)
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.copy$default$2__Lscala_xml_dtd_ExternalID = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.copy$default$3__Lscala_collection_Seq = (function() {
  return this.intSubset__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productPrefix__T = (function() {
  return "DocType"
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productArity__I = (function() {
  return 3
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productElement__I__O = (function(x$1) {
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
        return this.intSubset__Lscala_collection_Seq();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_DocType(x$1)
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_DocType(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var DocType$1 = ScalaJS.as.scala_xml_dtd_DocType(x$1);
      return (((ScalaJS.anyRefEqEq(this.name__T(), DocType$1.name__T()) && ScalaJS.anyRefEqEq(this.extID__Lscala_xml_dtd_ExternalID(), DocType$1.extID__Lscala_xml_dtd_ExternalID())) && ScalaJS.anyRefEqEq(this.intSubset__Lscala_collection_Seq(), DocType$1.intSubset__Lscala_collection_Seq())) && DocType$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.intString$1__p1__T = (function() {
  if (this.intSubset__Lscala_collection_Seq().isEmpty__Z()) {
    return ""
  } else {
    return this.intSubset__Lscala_collection_Seq().mkString__T__T__T__T("[", "", "]")
  }
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.init___T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq = (function(name, extID, intSubset) {
  this.name$1 = name;
  this.extID$1 = extID;
  this.intSubset$1 = intSubset;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  if ((!ScalaJS.modules.scala_xml_Utility().isName__T__Z(name))) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("" + name) + " must be an XML Name"))
  };
  return this
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.copy__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__ = (function(name, extID, intSubset) {
  return this.copy__T__Lscala_xml_dtd_ExternalID__Lscala_collection_Seq__Lscala_xml_dtd_DocType(name, extID, intSubset)
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.intSubset__ = (function() {
  return this.intSubset__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.extID__ = (function() {
  return this.extID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_DocType = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_DocType.prototype = ScalaJS.c.scala_xml_dtd_DocType.prototype;
ScalaJS.is.scala_xml_dtd_DocType = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_DocType)))
});
ScalaJS.as.scala_xml_dtd_DocType = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_DocType(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.DocType")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_DocType = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_DocType)))
});
ScalaJS.asArrayOf.scala_xml_dtd_DocType = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_DocType(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.DocType;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_DocType = new ScalaJS.ClassTypeData({
  scala_xml_dtd_DocType: 0
}, false, "scala.xml.dtd.DocType", ScalaJS.data.java_lang_Object, {
  scala_xml_dtd_DocType: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_DocType.prototype.$classData = ScalaJS.data.scala_xml_dtd_DocType;
//@ sourceMappingURL=DocType.js.map
