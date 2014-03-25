/** @constructor */
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler = (function() {
  ScalaJS.c.scala_xml_parsing_MarkupHandler.call(this)
});
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype = new ScalaJS.inheritable.scala_xml_parsing_MarkupHandler();
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.constructor = ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler;
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__Lscala_xml_NodeSeq = (function(pos$3, pre, label, attrs, scope, empty, args) {
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.procInstr__I__T__T__Lscala_xml_NodeSeq = (function(pos, target, txt) {
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.comment__I__T__Lscala_xml_NodeSeq = (function(pos, comment) {
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.entityRef__I__T__Lscala_xml_NodeSeq = (function(pos, n) {
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.text__I__T__Lscala_xml_NodeSeq = (function(pos, txt) {
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_DefaultMarkupHandler = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_DefaultMarkupHandler.prototype = ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype;
ScalaJS.is.scala_xml_parsing_DefaultMarkupHandler = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_DefaultMarkupHandler)))
});
ScalaJS.as.scala_xml_parsing_DefaultMarkupHandler = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_DefaultMarkupHandler(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.DefaultMarkupHandler")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_DefaultMarkupHandler = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_DefaultMarkupHandler)))
});
ScalaJS.asArrayOf.scala_xml_parsing_DefaultMarkupHandler = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_DefaultMarkupHandler(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.DefaultMarkupHandler;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_DefaultMarkupHandler = new ScalaJS.ClassTypeData({
  scala_xml_parsing_DefaultMarkupHandler: 0
}, false, "scala.xml.parsing.DefaultMarkupHandler", ScalaJS.data.scala_xml_parsing_MarkupHandler, {
  scala_xml_parsing_DefaultMarkupHandler: 1,
  scala_xml_parsing_MarkupHandler: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_DefaultMarkupHandler.prototype.$classData = ScalaJS.data.scala_xml_parsing_DefaultMarkupHandler;
//@ sourceMappingURL=DefaultMarkupHandler.js.map
