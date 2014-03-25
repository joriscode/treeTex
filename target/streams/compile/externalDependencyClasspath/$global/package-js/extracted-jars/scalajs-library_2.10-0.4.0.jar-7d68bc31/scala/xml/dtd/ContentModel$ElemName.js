/** @constructor */
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName = (function() {
  ScalaJS.c.scala_util_regexp_WordExp$Label.call(this);
  this.name$2 = null
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype = new ScalaJS.inheritable.scala_util_regexp_WordExp$Label();
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.constructor = ScalaJS.c.scala_xml_dtd_ContentModel$ElemName;
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.name__T = (function() {
  return this.name$2
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.toString__T = (function() {
  return new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("ElemName(\"%s\")")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.name__T()])))
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.copy__T__Lscala_xml_dtd_ContentModel$ElemName = (function(name) {
  return new ScalaJS.c.scala_xml_dtd_ContentModel$ElemName().init___T(name)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.copy$default$1__T = (function() {
  return this.name__T()
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productPrefix__T = (function() {
  return "ElemName"
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.name__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_ContentModel$ElemName(x$1)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_ContentModel$ElemName(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ElemName$1 = ScalaJS.as.scala_xml_dtd_ContentModel$ElemName(x$1);
      return (ScalaJS.anyRefEqEq(this.name__T(), ElemName$1.name__T()) && ElemName$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.init___T = (function(name) {
  this.name$2 = name;
  ScalaJS.c.scala_util_regexp_WordExp$Label.prototype.init___Lscala_util_regexp_WordExp.call(this, ScalaJS.modules.scala_xml_dtd_ContentModel());
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.copy__T__ = (function(name) {
  return this.copy__T__Lscala_xml_dtd_ContentModel$ElemName(name)
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ContentModel$ElemName = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ContentModel$ElemName.prototype = ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype;
ScalaJS.is.scala_xml_dtd_ContentModel$ElemName = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ContentModel$ElemName)))
});
ScalaJS.as.scala_xml_dtd_ContentModel$ElemName = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ContentModel$ElemName(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ContentModel$ElemName")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$ElemName = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ContentModel$ElemName)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ContentModel$ElemName = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$ElemName(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ContentModel$ElemName;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ContentModel$ElemName = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ContentModel$ElemName: 0
}, false, "scala.xml.dtd.ContentModel$ElemName", ScalaJS.data.scala_util_regexp_WordExp$Label, {
  scala_xml_dtd_ContentModel$ElemName: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_util_regexp_WordExp$Label: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ContentModel$ElemName.prototype.$classData = ScalaJS.data.scala_xml_dtd_ContentModel$ElemName;
//@ sourceMappingURL=ContentModel$ElemName.js.map
