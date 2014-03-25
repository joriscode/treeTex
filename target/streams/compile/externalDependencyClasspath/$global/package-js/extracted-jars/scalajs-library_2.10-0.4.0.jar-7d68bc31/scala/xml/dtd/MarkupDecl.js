/** @constructor */
ScalaJS.c.scala_xml_dtd_MarkupDecl = (function() {
  ScalaJS.c.scala_xml_dtd_Decl.call(this)
});
ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_Decl();
ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_MarkupDecl;
ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.buildString__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_MarkupDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_MarkupDecl.prototype = ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype;
ScalaJS.is.scala_xml_dtd_MarkupDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_MarkupDecl)))
});
ScalaJS.as.scala_xml_dtd_MarkupDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_MarkupDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.MarkupDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_MarkupDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_MarkupDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_MarkupDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_MarkupDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.MarkupDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_MarkupDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_MarkupDecl: 0
}, false, "scala.xml.dtd.MarkupDecl", ScalaJS.data.scala_xml_dtd_Decl, {
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_MarkupDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_MarkupDecl;
//@ sourceMappingURL=MarkupDecl.js.map
