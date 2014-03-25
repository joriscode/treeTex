/** @constructor */
ScalaJS.c.scala_xml_dtd_ELEMENTS = (function() {
  ScalaJS.c.scala_xml_dtd_DFAContentModel.call(this);
  this.r$3 = null
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype = new ScalaJS.inheritable.scala_xml_dtd_DFAContentModel();
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.constructor = ScalaJS.c.scala_xml_dtd_ELEMENTS;
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.r__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r$3
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return ScalaJS.modules.scala_xml_dtd_ContentModel().buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this.r__Lscala_util_regexp_Base$RegExp(), sb)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.copy__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_ELEMENTS = (function(r) {
  return new ScalaJS.c.scala_xml_dtd_ELEMENTS().init___Lscala_util_regexp_Base$RegExp(r)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.copy$default$1__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productPrefix__T = (function() {
  return "ELEMENTS"
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.r__Lscala_util_regexp_Base$RegExp();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_ELEMENTS(x$1)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_ELEMENTS(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ELEMENTS$1 = ScalaJS.as.scala_xml_dtd_ELEMENTS(x$1);
      return (ScalaJS.anyRefEqEq(this.r__Lscala_util_regexp_Base$RegExp(), ELEMENTS$1.r__Lscala_util_regexp_Base$RegExp()) && ELEMENTS$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.init___Lscala_util_regexp_Base$RegExp = (function(r) {
  this.r$3 = r;
  ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.copy__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.copy__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_ELEMENTS(r)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ELEMENTS = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ELEMENTS.prototype = ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype;
ScalaJS.is.scala_xml_dtd_ELEMENTS = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ELEMENTS)))
});
ScalaJS.as.scala_xml_dtd_ELEMENTS = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ELEMENTS(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ELEMENTS")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ELEMENTS = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ELEMENTS)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ELEMENTS = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ELEMENTS(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ELEMENTS;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ELEMENTS = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ELEMENTS: 0
}, false, "scala.xml.dtd.ELEMENTS", ScalaJS.data.scala_xml_dtd_DFAContentModel, {
  scala_xml_dtd_ELEMENTS: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_DFAContentModel: 1,
  scala_xml_dtd_ContentModel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ELEMENTS.prototype.$classData = ScalaJS.data.scala_xml_dtd_ELEMENTS;
//@ sourceMappingURL=ELEMENTS.js.map
