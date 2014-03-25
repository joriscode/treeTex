/** @constructor */
ScalaJS.c.scala_xml_parsing_ConstructingHandler = (function() {
  ScalaJS.c.scala_xml_parsing_MarkupHandler.call(this)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype = new ScalaJS.inheritable.scala_xml_parsing_MarkupHandler();
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.constructor = ScalaJS.c.scala_xml_parsing_ConstructingHandler;
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__Lscala_xml_NodeSeq = (function(pos, pre, label, attrs, pscope, empty, nodes) {
  return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem(pre, label, attrs, pscope, empty, nodes)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.procInstr__I__T__T__Lscala_xml_ProcInstr = (function(pos, target, txt) {
  return new ScalaJS.c.scala_xml_ProcInstr().init___T__T(target, txt)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.comment__I__T__Lscala_xml_Comment = (function(pos, txt) {
  return new ScalaJS.c.scala_xml_Comment().init___T(txt)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.entityRef__I__T__Lscala_xml_EntityRef = (function(pos, n) {
  return new ScalaJS.c.scala_xml_EntityRef().init___T(n)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.text__I__T__Lscala_xml_Text = (function(pos, txt) {
  return ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(txt)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.text__I__T__Lscala_xml_NodeSeq = (function(pos, txt) {
  return this.text__I__T__Lscala_xml_Text(pos, txt)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.entityRef__I__T__Lscala_xml_NodeSeq = (function(pos, n) {
  return this.entityRef__I__T__Lscala_xml_EntityRef(pos, n)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.comment__I__T__Lscala_xml_NodeSeq = (function(pos, comment) {
  return this.comment__I__T__Lscala_xml_Comment(pos, comment)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.procInstr__I__T__T__Lscala_xml_NodeSeq = (function(pos, target, txt) {
  return this.procInstr__I__T__T__Lscala_xml_ProcInstr(pos, target, txt)
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.preserveWS__ = (function() {
  return ScalaJS.bZ(this.preserveWS__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_ConstructingHandler = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_ConstructingHandler.prototype = ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype;
ScalaJS.is.scala_xml_parsing_ConstructingHandler = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_ConstructingHandler)))
});
ScalaJS.as.scala_xml_parsing_ConstructingHandler = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_ConstructingHandler(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.ConstructingHandler")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_ConstructingHandler = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_ConstructingHandler)))
});
ScalaJS.asArrayOf.scala_xml_parsing_ConstructingHandler = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_ConstructingHandler(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.ConstructingHandler;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_ConstructingHandler = new ScalaJS.ClassTypeData({
  scala_xml_parsing_ConstructingHandler: 0
}, false, "scala.xml.parsing.ConstructingHandler", ScalaJS.data.scala_xml_parsing_MarkupHandler, {
  scala_xml_parsing_ConstructingHandler: 1,
  scala_xml_parsing_MarkupHandler: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_ConstructingHandler.prototype.$classData = ScalaJS.data.scala_xml_parsing_ConstructingHandler;
//@ sourceMappingURL=ConstructingHandler.js.map
