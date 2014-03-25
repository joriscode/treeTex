/** @constructor */
ScalaJS.c.scala_xml_transform_RewriteRule = (function() {
  ScalaJS.c.scala_xml_transform_BasicTransformer.call(this);
  this.name$2 = null
});
ScalaJS.c.scala_xml_transform_RewriteRule.prototype = new ScalaJS.inheritable.scala_xml_transform_BasicTransformer();
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.constructor = ScalaJS.c.scala_xml_transform_RewriteRule;
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.name__T = (function() {
  return this.name$2
});
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.transform__Lscala_collection_Seq__Lscala_collection_Seq = (function(ns) {
  return ScalaJS.c.scala_xml_transform_BasicTransformer.prototype.transform__Lscala_collection_Seq__Lscala_collection_Seq.call(this, ns)
});
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.transform__Lscala_xml_Node__Lscala_collection_Seq = (function(n) {
  return n
});
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_transform_BasicTransformer.prototype.init___.call(this);
  this.name$2 = this.toString__T();
  return this
});
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.name__ = (function() {
  return this.name__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_transform_RewriteRule = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_transform_RewriteRule.prototype = ScalaJS.c.scala_xml_transform_RewriteRule.prototype;
ScalaJS.is.scala_xml_transform_RewriteRule = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_transform_RewriteRule)))
});
ScalaJS.as.scala_xml_transform_RewriteRule = (function(obj) {
  if ((ScalaJS.is.scala_xml_transform_RewriteRule(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.transform.RewriteRule")
  }
});
ScalaJS.isArrayOf.scala_xml_transform_RewriteRule = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_transform_RewriteRule)))
});
ScalaJS.asArrayOf.scala_xml_transform_RewriteRule = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_transform_RewriteRule(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.transform.RewriteRule;", depth)
  }
});
ScalaJS.data.scala_xml_transform_RewriteRule = new ScalaJS.ClassTypeData({
  scala_xml_transform_RewriteRule: 0
}, false, "scala.xml.transform.RewriteRule", ScalaJS.data.scala_xml_transform_BasicTransformer, {
  scala_xml_transform_RewriteRule: 1,
  scala_xml_transform_BasicTransformer: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_transform_RewriteRule.prototype.$classData = ScalaJS.data.scala_xml_transform_RewriteRule;
//@ sourceMappingURL=RewriteRule.js.map
