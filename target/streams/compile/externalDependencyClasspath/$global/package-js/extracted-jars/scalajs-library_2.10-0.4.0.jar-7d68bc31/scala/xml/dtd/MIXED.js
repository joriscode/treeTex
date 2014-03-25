/** @constructor */
ScalaJS.c.scala_xml_dtd_MIXED = (function() {
  ScalaJS.c.scala_xml_dtd_DFAContentModel.call(this);
  this.r$3 = null
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype = new ScalaJS.inheritable.scala_xml_dtd_DFAContentModel();
ScalaJS.c.scala_xml_dtd_MIXED.prototype.constructor = ScalaJS.c.scala_xml_dtd_MIXED;
ScalaJS.c.scala_xml_dtd_MIXED.prototype.r__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r$3
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  var x1 = this.r__Lscala_util_regexp_Base$RegExp();
  matchEnd5: {
    if (ScalaJS.is.scala_util_regexp_Base$Alt(x1)) {
      var x2 = ScalaJS.as.scala_util_regexp_Base$Alt(x1);
      var o8 = ScalaJS.modules.scala_xml_dtd_ContentModel().Alt__Lscala_util_regexp_Base$Alt$().unapplySeq__Lscala_util_regexp_Base$Alt__Lscala_Some(x2);
      if ((!o8.isEmpty__Z())) {
        var rs = ScalaJS.as.scala_collection_Seq(o8.get__O());
        var newAlt = ScalaJS.modules.scala_xml_dtd_ContentModel().Alt__Lscala_util_regexp_Base$Alt$().apply__Lscala_collection_Seq__Lscala_util_regexp_Base$Alt(ScalaJS.as.scala_collection_Seq(rs.drop__I__O(1)));
        break matchEnd5
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  sb.append__T__Lscala_collection_mutable_StringBuilder("(#PCDATA|");
  ScalaJS.modules.scala_xml_dtd_ContentModel().buildString__Lscala_util_regexp_Base$RegExp__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(newAlt, sb);
  return sb.append__T__Lscala_collection_mutable_StringBuilder(")*")
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.copy__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_MIXED = (function(r) {
  return new ScalaJS.c.scala_xml_dtd_MIXED().init___Lscala_util_regexp_Base$RegExp(r)
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.copy$default$1__Lscala_util_regexp_Base$RegExp = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productPrefix__T = (function() {
  return "MIXED"
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productElement__I__O = (function(x$1) {
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
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_MIXED(x$1)
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_MIXED(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var MIXED$1 = ScalaJS.as.scala_xml_dtd_MIXED(x$1);
      return (ScalaJS.anyRefEqEq(this.r__Lscala_util_regexp_Base$RegExp(), MIXED$1.r__Lscala_util_regexp_Base$RegExp()) && MIXED$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.init___Lscala_util_regexp_Base$RegExp = (function(r) {
  this.r$3 = r;
  ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.copy__Lscala_util_regexp_Base$RegExp__ = (function(r) {
  return this.copy__Lscala_util_regexp_Base$RegExp__Lscala_xml_dtd_MIXED(r)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_MIXED = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_MIXED.prototype = ScalaJS.c.scala_xml_dtd_MIXED.prototype;
ScalaJS.is.scala_xml_dtd_MIXED = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_MIXED)))
});
ScalaJS.as.scala_xml_dtd_MIXED = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_MIXED(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.MIXED")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_MIXED = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_MIXED)))
});
ScalaJS.asArrayOf.scala_xml_dtd_MIXED = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_MIXED(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.MIXED;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_MIXED = new ScalaJS.ClassTypeData({
  scala_xml_dtd_MIXED: 0
}, false, "scala.xml.dtd.MIXED", ScalaJS.data.scala_xml_dtd_DFAContentModel, {
  scala_xml_dtd_MIXED: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_DFAContentModel: 1,
  scala_xml_dtd_ContentModel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_MIXED.prototype.$classData = ScalaJS.data.scala_xml_dtd_MIXED;
//@ sourceMappingURL=MIXED.js.map
