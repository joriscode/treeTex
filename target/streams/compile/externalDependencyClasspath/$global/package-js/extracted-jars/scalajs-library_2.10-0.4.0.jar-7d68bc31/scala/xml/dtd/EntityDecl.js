/** @constructor */
ScalaJS.c.scala_xml_dtd_EntityDecl = (function() {
  ScalaJS.c.scala_xml_dtd_MarkupDecl.call(this)
});
ScalaJS.c.scala_xml_dtd_EntityDecl.prototype = new ScalaJS.inheritable.scala_xml_dtd_MarkupDecl();
ScalaJS.c.scala_xml_dtd_EntityDecl.prototype.constructor = ScalaJS.c.scala_xml_dtd_EntityDecl;
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_EntityDecl = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_EntityDecl.prototype = ScalaJS.c.scala_xml_dtd_EntityDecl.prototype;
ScalaJS.is.scala_xml_dtd_EntityDecl = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_EntityDecl)))
});
ScalaJS.as.scala_xml_dtd_EntityDecl = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_EntityDecl(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.EntityDecl")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_EntityDecl = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_EntityDecl)))
});
ScalaJS.asArrayOf.scala_xml_dtd_EntityDecl = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_EntityDecl(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.EntityDecl;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_EntityDecl = new ScalaJS.ClassTypeData({
  scala_xml_dtd_EntityDecl: 0
}, false, "scala.xml.dtd.EntityDecl", ScalaJS.data.scala_xml_dtd_MarkupDecl, {
  scala_xml_dtd_EntityDecl: 1,
  scala_xml_dtd_MarkupDecl: 1,
  scala_xml_dtd_Decl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_EntityDecl.prototype.$classData = ScalaJS.data.scala_xml_dtd_EntityDecl;
//@ sourceMappingURL=EntityDecl.js.map
