/** @constructor */
ScalaJS.c.scala_xml_transform_RuleTransformer = (function() {
  ScalaJS.c.scala_xml_transform_BasicTransformer.call(this);
  this.rules$2 = null
});
ScalaJS.c.scala_xml_transform_RuleTransformer.prototype = new ScalaJS.inheritable.scala_xml_transform_BasicTransformer();
ScalaJS.c.scala_xml_transform_RuleTransformer.prototype.constructor = ScalaJS.c.scala_xml_transform_RuleTransformer;
ScalaJS.c.scala_xml_transform_RuleTransformer.prototype.transform__Lscala_xml_Node__Lscala_collection_Seq = (function(n) {
  return ScalaJS.as.scala_collection_Seq(this.rules$2.foldLeft__O__Lscala_Function2__O(ScalaJS.c.scala_xml_transform_BasicTransformer.prototype.transform__Lscala_xml_Node__Lscala_collection_Seq.call(this, n), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(res, rule) {
      return rule.transform__Lscala_collection_Seq__Lscala_collection_Seq(res)
    })
  })())))
});
ScalaJS.c.scala_xml_transform_RuleTransformer.prototype.init___Lscala_collection_Seq = (function(rules) {
  this.rules$2 = rules;
  ScalaJS.c.scala_xml_transform_BasicTransformer.prototype.init___.call(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_xml_transform_RuleTransformer = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_transform_RuleTransformer.prototype = ScalaJS.c.scala_xml_transform_RuleTransformer.prototype;
ScalaJS.is.scala_xml_transform_RuleTransformer = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_transform_RuleTransformer)))
});
ScalaJS.as.scala_xml_transform_RuleTransformer = (function(obj) {
  if ((ScalaJS.is.scala_xml_transform_RuleTransformer(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.transform.RuleTransformer")
  }
});
ScalaJS.isArrayOf.scala_xml_transform_RuleTransformer = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_transform_RuleTransformer)))
});
ScalaJS.asArrayOf.scala_xml_transform_RuleTransformer = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_transform_RuleTransformer(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.transform.RuleTransformer;", depth)
  }
});
ScalaJS.data.scala_xml_transform_RuleTransformer = new ScalaJS.ClassTypeData({
  scala_xml_transform_RuleTransformer: 0
}, false, "scala.xml.transform.RuleTransformer", ScalaJS.data.scala_xml_transform_BasicTransformer, {
  scala_xml_transform_RuleTransformer: 1,
  scala_xml_transform_BasicTransformer: 1,
  scala_Function1: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_transform_RuleTransformer.prototype.$classData = ScalaJS.data.scala_xml_transform_RuleTransformer;
//@ sourceMappingURL=RuleTransformer.js.map
