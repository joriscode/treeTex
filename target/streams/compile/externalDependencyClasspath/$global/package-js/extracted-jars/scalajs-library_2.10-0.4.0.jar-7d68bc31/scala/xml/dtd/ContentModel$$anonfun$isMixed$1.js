/** @constructor */
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = (function() {
  ScalaJS.c.scala_runtime_AbstractPartialFunction$mcZL$sp.call(this)
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype = new ScalaJS.inheritable.scala_runtime_AbstractPartialFunction$mcZL$sp();
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.constructor = ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1;
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.applyOrElse__Lscala_xml_dtd_ContentModel__Lscala_Function1__O = (function(x1, default$2) {
  var x1$2 = x1;
  if (ScalaJS.is.scala_xml_dtd_MIXED(x1$2)) {
    return ScalaJS.bZ(true)
  };
  return default$2.apply__O__O(x1)
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.isDefinedAt__Lscala_xml_dtd_ContentModel__Z = (function(x1) {
  var x1$2 = x1;
  if (ScalaJS.is.scala_xml_dtd_MIXED(x1$2)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__Lscala_xml_dtd_ContentModel__Z(ScalaJS.as.scala_xml_dtd_ContentModel(x))
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return this.applyOrElse__Lscala_xml_dtd_ContentModel__Lscala_Function1__O(ScalaJS.as.scala_xml_dtd_ContentModel(x), default$2)
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.isDefinedAt__Lscala_xml_dtd_ContentModel__ = (function(x1) {
  return ScalaJS.bZ(this.isDefinedAt__Lscala_xml_dtd_ContentModel__Z(x1))
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.applyOrElse__Lscala_xml_dtd_ContentModel__Lscala_Function1__ = (function(x1$2, default$2) {
  return this.applyOrElse__Lscala_xml_dtd_ContentModel__Lscala_Function1__O(x1$2, default$2)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype = ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype;
ScalaJS.is.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ContentModel$$anonfun$isMixed$1)))
});
ScalaJS.as.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ContentModel$$anonfun$isMixed$1(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ContentModel$$anonfun$isMixed$1")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ContentModel$$anonfun$isMixed$1)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ContentModel$$anonfun$isMixed$1(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ContentModel$$anonfun$isMixed$1;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ContentModel$$anonfun$isMixed$1 = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ContentModel$$anonfun$isMixed$1: 0
}, false, "scala.xml.dtd.ContentModel$$anonfun$isMixed$1", ScalaJS.data.scala_runtime_AbstractPartialFunction$mcZL$sp, {
  scala_xml_dtd_ContentModel$$anonfun$isMixed$1: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_runtime_AbstractPartialFunction$mcZL$sp: 1,
  scala_runtime_AbstractPartialFunction: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ContentModel$$anonfun$isMixed$1.prototype.$classData = ScalaJS.data.scala_xml_dtd_ContentModel$$anonfun$isMixed$1;
//@ sourceMappingURL=ContentModel$$anonfun$isMixed$1.js.map
