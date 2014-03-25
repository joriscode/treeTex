/** @constructor */
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser = (function() {
  ScalaJS.c.scala_xml_parsing_MarkupHandler.call(this);
  this.input$2 = null;
  this.preserveWS$2 = false;
  this.level$2 = 0;
  this.ignoreWritten$2 = false;
  this.$$outer$f = null;
  this.curInput$2 = null;
  this.scala$xml$parsing$MarkupParser$$handle$2 = null;
  this.inpStack$2 = null;
  this.pos$2 = 0;
  this.extIndex$2 = 0;
  this.tmppos$2 = 0;
  this.nextChNeeded$2 = false;
  this.reachedEof$2 = false;
  this.lastChRead$2 = 0;
  this.cbuf$2 = null;
  this.dtd$2 = null;
  this.doc$2 = null
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype = new ScalaJS.inheritable.scala_xml_parsing_MarkupHandler();
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.constructor = ScalaJS.c.scala_xml_pull_XMLEventReader$Parser;
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.externalSource__T__Lscala_io_Source = (function(systemId) {
  return ScalaJS.impls.scala_xml_parsing_ExternalSources$class__externalSource__Lscala_xml_parsing_MarkupHandler__T__Lscala_io_Source(this, systemId)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.curInput__Lscala_io_Source = (function() {
  return this.curInput$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.curInput$und$eq__Lscala_io_Source__V = (function(x$1) {
  this.curInput$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler = (function() {
  return this.scala$xml$parsing$MarkupParser$$handle$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.inpStack__Lscala_collection_immutable_List = (function() {
  return this.inpStack$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.inpStack$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.inpStack$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pos__I = (function() {
  return this.pos$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pos$und$eq__I__V = (function(x$1) {
  this.pos$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.extIndex__I = (function() {
  return this.extIndex$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.extIndex$und$eq__I__V = (function(x$1) {
  this.extIndex$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos__I = (function() {
  return this.tmppos$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos$und$eq__I__V = (function(x$1) {
  this.tmppos$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.nextChNeeded__Z = (function() {
  return this.nextChNeeded$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.nextChNeeded$und$eq__Z__V = (function(x$1) {
  this.nextChNeeded$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reachedEof__Z = (function() {
  return this.reachedEof$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reachedEof$und$eq__Z__V = (function(x$1) {
  this.reachedEof$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.lastChRead__C = (function() {
  return this.lastChRead$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.lastChRead$und$eq__C__V = (function(x$1) {
  this.lastChRead$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.cbuf__Lscala_collection_mutable_StringBuilder = (function() {
  return this.cbuf$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.dtd__Lscala_xml_dtd_DTD = (function() {
  return this.dtd$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.dtd$und$eq__Lscala_xml_dtd_DTD__V = (function(x$1) {
  this.dtd$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.doc__Lscala_xml_Document = (function() {
  return this.doc$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.doc$und$eq__Lscala_xml_Document__V = (function(x$1) {
  this.doc$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$parsing$MarkupParser$$undsetter$und$scala$xml$parsing$MarkupParser$$handle$und$eq__Lscala_xml_parsing_MarkupHandler__V = (function(x$1) {
  this.scala$xml$parsing$MarkupParser$$handle$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$parsing$MarkupParser$$undsetter$und$cbuf$und$eq__Lscala_collection_mutable_StringBuilder__V = (function(x$1) {
  this.cbuf$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.truncatedError__T__Lscala_Nothing = (function(msg) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__truncatedError__Lscala_xml_parsing_MarkupHandler__T__Lscala_Nothing(this, msg)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.errorNoEnd__T__Lscala_Nothing = (function(tag) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__errorNoEnd__Lscala_xml_parsing_MarkupHandler__T__Lscala_Nothing(this, tag)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xHandleError__C__T__V = (function(that, msg) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xHandleError__Lscala_xml_parsing_MarkupHandler__C__T__V(this, that, msg)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.lookahead__Lscala_collection_BufferedIterator = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__lookahead__Lscala_xml_parsing_MarkupHandler__Lscala_collection_BufferedIterator(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.ch__C = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__ch__Lscala_xml_parsing_MarkupHandler__C(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.eof__Z = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__eof__Lscala_xml_parsing_MarkupHandler__Z(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xmlProcInstr__Lscala_xml_MetaData = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xmlProcInstr__Lscala_xml_parsing_MarkupHandler__Lscala_xml_MetaData(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.prolog__Lscala_Tuple3 = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__prolog__Lscala_xml_parsing_MarkupHandler__Lscala_Tuple3(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.textDecl__Lscala_Tuple2 = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__textDecl__Lscala_xml_parsing_MarkupHandler__Lscala_Tuple2(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.document__Lscala_xml_Document = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__document__Lscala_xml_parsing_MarkupHandler__Lscala_xml_Document(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.putChar__C__Lscala_collection_mutable_StringBuilder = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__putChar__Lscala_xml_parsing_MarkupHandler__C__Lscala_collection_mutable_StringBuilder(this, c)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.initialize__Lscala_xml_parsing_MarkupHandler = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__initialize__Lscala_xml_parsing_MarkupHandler__Lscala_xml_parsing_MarkupHandler(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.ch$undreturning$undnextch__C = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__ch$undreturning$undnextch__Lscala_xml_parsing_MarkupHandler__C(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkAttributes__T__Lscala_xml_NamespaceBinding__Lscala_Tuple2 = (function(name, pscope) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__mkAttributes__Lscala_xml_parsing_MarkupHandler__T__Lscala_xml_NamespaceBinding__Lscala_Tuple2(this, name, pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkProcInstr__I__T__T__Lscala_xml_NodeSeq = (function(position, name, text) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__mkProcInstr__Lscala_xml_parsing_MarkupHandler__I__T__T__Lscala_xml_NodeSeq(this, position, name, text)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.nextch__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__nextch__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xAttributes__Lscala_xml_NamespaceBinding__Lscala_Tuple2 = (function(pscope) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xAttributes__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_Tuple2(this, pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xEntityValue__T = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xEntityValue__Lscala_xml_parsing_MarkupHandler__T(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharData__Lscala_xml_NodeSeq = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xCharData__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NodeSeq(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xComment__Lscala_xml_NodeSeq = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__xComment__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NodeSeq(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.appendText__I__Lscala_xml_NodeBuffer__T__V = (function(pos, ts, txt) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__appendText__Lscala_xml_parsing_MarkupHandler__I__Lscala_xml_NodeBuffer__T__V(this, pos, ts, txt)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.content1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__V = (function(pscope, ts) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__content1__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__V(this, pscope, ts)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.content__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq = (function(pscope) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__content__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(this, pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.externalID__Lscala_xml_dtd_ExternalID = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__externalID__Lscala_xml_parsing_MarkupHandler__Lscala_xml_dtd_ExternalID(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.parseDTD__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__parseDTD__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.element__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq = (function(pscope) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__element__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(this, pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.element1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq = (function(pscope) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__element1__Lscala_xml_parsing_MarkupHandler__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(this, pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.systemLiteral__T = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__systemLiteral__Lscala_xml_parsing_MarkupHandler__T(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pubidLiteral__T = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__pubidLiteral__Lscala_xml_parsing_MarkupHandler__T(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.extSubset__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__extSubset__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.markupDecl1__O = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParser$class__markupDecl1__Lscala_xml_parsing_MarkupHandler__O(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.markupDecl__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__markupDecl__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.intSubset__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__intSubset__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.elementDecl__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__elementDecl__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.attrDecl__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__attrDecl__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.entityDecl__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__entityDecl__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.notationDecl__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__notationDecl__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reportSyntaxError__I__T__V = (function(pos, str) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__reportSyntaxError__Lscala_xml_parsing_MarkupHandler__I__T__V(this, pos, str)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reportSyntaxError__T__V = (function(str) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__reportSyntaxError__Lscala_xml_parsing_MarkupHandler__T__V(this, str)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reportValidationError__I__T__V = (function(pos, str) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__reportValidationError__Lscala_xml_parsing_MarkupHandler__I__T__V(this, pos, str)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.push__T__V = (function(entityName) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__push__Lscala_xml_parsing_MarkupHandler__T__V(this, entityName)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pushExternal__T__V = (function(systemId) {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__pushExternal__Lscala_xml_parsing_MarkupHandler__T__V(this, systemId)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pop__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__pop__Lscala_xml_parsing_MarkupHandler__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.unreachable__Lscala_Nothing = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__unreachable__Lscala_xml_parsing_MarkupParserCommon__Lscala_Nothing(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xTag__O__Lscala_Tuple2 = (function(pscope) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xTag__Lscala_xml_parsing_MarkupParserCommon__O__Lscala_Tuple2(this, pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xProcInstr__O = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xProcInstr__Lscala_xml_parsing_MarkupParserCommon__O(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xAttributeValue__C__T = (function(endCh) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xAttributeValue__Lscala_xml_parsing_MarkupParserCommon__C__T(this, endCh)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xAttributeValue__T = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xAttributeValue__Lscala_xml_parsing_MarkupParserCommon__T(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xEndTag__T__V = (function(startName) {
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xEndTag__Lscala_xml_parsing_MarkupParserCommon__T__V(this, startName)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xName__T = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xName__Lscala_xml_parsing_MarkupParserCommon__T(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharRef__Lscala_Function0__Lscala_Function0__T = (function(ch, nextch) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xCharRef__Lscala_xml_parsing_MarkupParserCommon__Lscala_Function0__Lscala_Function0__T(this, ch, nextch)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharRef__Lscala_collection_Iterator__T = (function(it) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xCharRef__Lscala_xml_parsing_MarkupParserCommon__Lscala_collection_Iterator__T(this, it)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharRef__T = (function() {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xCharRef__Lscala_xml_parsing_MarkupParserCommon__T(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.errorAndResult__T__O__O = (function(msg, x) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__errorAndResult__Lscala_xml_parsing_MarkupParserCommon__T__O__O(this, msg, x)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xToken__C__V = (function(that) {
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xToken__Lscala_xml_parsing_MarkupParserCommon__C__V(this, that)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xToken__Lscala_collection_Seq__V = (function(that) {
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xToken__Lscala_xml_parsing_MarkupParserCommon__Lscala_collection_Seq__V(this, that)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xEQ__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xEQ__Lscala_xml_parsing_MarkupParserCommon__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xSpaceOpt__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xSpaceOpt__Lscala_xml_parsing_MarkupParserCommon__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xSpace__V = (function() {
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xSpace__Lscala_xml_parsing_MarkupParserCommon__V(this)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.returning__O__Lscala_Function1__O = (function(x, f) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__returning__Lscala_xml_parsing_MarkupParserCommon__O__Lscala_Function1__O(this, x, f)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.saving__O__Lscala_Function1__Lscala_Function0__O = (function(getter, setter, body) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__saving__Lscala_xml_parsing_MarkupParserCommon__O__Lscala_Function1__Lscala_Function0__O(this, getter, setter, body)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xTakeUntil__Lscala_Function2__Lscala_Function0__T__O = (function(handler, positioner, until) {
  return ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__xTakeUntil__Lscala_xml_parsing_MarkupParserCommon__Lscala_Function2__Lscala_Function0__T__O(this, handler, positioner, until)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isSpace__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isSpace__Lscala_collection_Seq__Z = (function(cs) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isSpace__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, cs)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isAlpha__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlpha__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isAlphaDigit__C__Z = (function(c) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isAlphaDigit__Lscala_xml_parsing_TokenTests__C__Z(this, c)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isNameChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isNameStart__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isNameStart__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isName__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isName__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isPubIDChar__C__Z = (function(ch) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isPubIDChar__Lscala_xml_parsing_TokenTests__C__Z(this, ch)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isValidIANAEncoding__Lscala_collection_Seq__Z = (function(ianaEncoding) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__isValidIANAEncoding__Lscala_xml_parsing_TokenTests__Lscala_collection_Seq__Z(this, ianaEncoding)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.checkSysID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkSysID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.checkPubID__T__Z = (function(s) {
  return ScalaJS.impls.scala_xml_parsing_TokenTests$class__checkPubID__Lscala_xml_parsing_TokenTests__T__Z(this, s)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.input__Lscala_io_Source = (function() {
  return this.input$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.preserveWS__Z = (function() {
  return this.preserveWS$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.level__p2__I = (function() {
  return this.level$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.level$und$eq__p2__I__V = (function(x$1) {
  this.level$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq = (function(es) {
  es.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      arg$outer.scala$xml$pull$XMLEventReader$Parser$$$outer__Lscala_xml_pull_XMLEventReader().produce__O__V(x);
      return ScalaJS.bV(undefined)
    })
  })(this)));
  return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V = (function(pos, pre, label, attrs, scope) {
  this.level$und$eq__p2__I__V((this.level__p2__I() + 1));
  this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [new ScalaJS.c.scala_xml_pull_EvElemStart().init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding(pre, label, attrs, scope)]), 1)))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.elemEnd__I__T__T__V = (function(pos, pre, label) {
  this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [new ScalaJS.c.scala_xml_pull_EvElemEnd().init___T__T(pre, label)]), 1)));
  this.level$und$eq__p2__I__V((this.level__p2__I() - 1))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.ignoreWritten__p2__Z = (function() {
  return this.ignoreWritten$2
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.ignoreWritten$und$eq__p2__Z__V = (function(x$1) {
  this.ignoreWritten$2 = x$1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__Lscala_xml_NodeSeq = (function(pos, pre, label, attrs, pscope, empty, nodes) {
  if (((this.level__p2__I() === 1) && (!this.ignoreWritten__p2__Z()))) {
    this.ignoreWritten$und$eq__p2__Z__V(true);
    return new ScalaJS.c.scala_xml_Elem().init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq(null, "ignore", ScalaJS.modules.scala_xml_Null(), ScalaJS.modules.scala_Predef().$$scope__Lscala_xml_TopScope$(), true, ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_Node.getArrayOf(), []), 1)))
  } else {
    return ScalaJS.modules.scala_xml_NodeSeq().Empty__Lscala_xml_NodeSeq()
  }
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.procInstr__I__T__T__Lscala_xml_NodeSeq = (function(pos, target, txt) {
  return this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [new ScalaJS.c.scala_xml_pull_EvProcInstr().init___T__T(target, txt)]), 1)))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.comment__I__T__Lscala_xml_NodeSeq = (function(pos, txt) {
  return this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [new ScalaJS.c.scala_xml_pull_EvComment().init___T(txt)]), 1)))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.entityRef__I__T__Lscala_xml_NodeSeq = (function(pos, n) {
  return this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [new ScalaJS.c.scala_xml_pull_EvEntityRef().init___T(n)]), 1)))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.text__I__T__Lscala_xml_NodeSeq = (function(pos, txt) {
  return this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [new ScalaJS.c.scala_xml_pull_EvText().init___T(txt)]), 1)))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.run__V = (function() {
  this.curInput$und$eq__Lscala_io_Source__V(this.input__Lscala_io_Source());
  this.scala$xml$pull$XMLEventReader$Parser$$$outer__Lscala_xml_pull_XMLEventReader().interruptibly__Lscala_Function0__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return ScalaJS.as.scala_xml_parsing_MarkupParser(arg$outer.initialize__Lscala_xml_parsing_MarkupHandler()).document__Lscala_xml_Document()
    })
  })(this)));
  this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_pull_XMLEvent.getArrayOf(), [this.scala$xml$pull$XMLEventReader$Parser$$$outer__Lscala_xml_pull_XMLEventReader().POISON__Lscala_xml_pull_XMLEventReader$POISON$()]), 1)))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$pull$XMLEventReader$Parser$$$outer__Lscala_xml_pull_XMLEventReader = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkProcInstr__O__T__T__O = (function(position, name, text) {
  return this.mkProcInstr__I__T__T__Lscala_xml_NodeSeq(ScalaJS.uI(position), name, text)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkAttributes__T__O__O = (function(name, pscope) {
  return this.mkAttributes__T__Lscala_xml_NamespaceBinding__Lscala_Tuple2(name, ScalaJS.as.scala_xml_NamespaceBinding(pscope))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos$und$eq__O__V = (function(x$1) {
  this.tmppos$und$eq__I__V(ScalaJS.uI(x$1))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos__O = (function() {
  return ScalaJS.bI(this.tmppos__I())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.init___Lscala_xml_pull_XMLEventReader__Lscala_io_Source = (function($$outer, input) {
  this.input$2 = input;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_parsing_TokenTests$class__$init$__Lscala_xml_parsing_TokenTests__V(this);
  ScalaJS.impls.scala_xml_parsing_MarkupParserCommon$class__$init$__Lscala_xml_parsing_MarkupParserCommon__V(this);
  ScalaJS.impls.scala_xml_parsing_MarkupParser$class__$init$__Lscala_xml_parsing_MarkupHandler__V(this);
  ScalaJS.impls.scala_xml_parsing_ExternalSources$class__$init$__Lscala_xml_parsing_MarkupHandler__V(this);
  this.preserveWS$2 = $$outer.preserveWS__Z();
  this.level$2 = 0;
  this.ignoreWritten$2 = false;
  return this
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.checkPubID__T__ = (function(s) {
  return ScalaJS.bZ(this.checkPubID__T__Z(s))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.checkSysID__T__ = (function(s$2) {
  return ScalaJS.bZ(this.checkSysID__T__Z(s$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isValidIANAEncoding__Lscala_collection_Seq__ = (function(ianaEncoding) {
  return ScalaJS.bZ(this.isValidIANAEncoding__Lscala_collection_Seq__Z(ianaEncoding))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isPubIDChar__C__ = (function(ch) {
  return ScalaJS.bZ(this.isPubIDChar__C__Z(ch))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isName__T__ = (function(s$3) {
  return ScalaJS.bZ(this.isName__T__Z(s$3))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isNameStart__C__ = (function(ch$2) {
  return ScalaJS.bZ(this.isNameStart__C__Z(ch$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isNameChar__C__ = (function(ch$3) {
  return ScalaJS.bZ(this.isNameChar__C__Z(ch$3))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isAlphaDigit__C__ = (function(c) {
  return ScalaJS.bZ(this.isAlphaDigit__C__Z(c))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isAlpha__C__ = (function(c$2) {
  return ScalaJS.bZ(this.isAlpha__C__Z(c$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isSpace__Lscala_collection_Seq__ = (function(cs) {
  return ScalaJS.bZ(this.isSpace__Lscala_collection_Seq__Z(cs))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.isSpace__C__ = (function(ch$4) {
  return ScalaJS.bZ(this.isSpace__C__Z(ch$4))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xTakeUntil__Lscala_Function2__Lscala_Function0__T__ = (function(handler, positioner, until) {
  return this.xTakeUntil__Lscala_Function2__Lscala_Function0__T__O(handler, positioner, until)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.saving__O__Lscala_Function1__Lscala_Function0__ = (function(getter, setter, body) {
  return this.saving__O__Lscala_Function1__Lscala_Function0__O(getter, setter, body)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.returning__O__Lscala_Function1__ = (function(x, f) {
  return this.returning__O__Lscala_Function1__O(x, f)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xSpace__ = (function() {
  return ScalaJS.bV(this.xSpace__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xSpaceOpt__ = (function() {
  return ScalaJS.bV(this.xSpaceOpt__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xEQ__ = (function() {
  return ScalaJS.bV(this.xEQ__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xToken__Lscala_collection_Seq__ = (function(that) {
  return ScalaJS.bV(this.xToken__Lscala_collection_Seq__V(that))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xToken__C__ = (function(that$2) {
  return ScalaJS.bV(this.xToken__C__V(that$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.errorAndResult__T__O__ = (function(msg, x$2) {
  return this.errorAndResult__T__O__O(msg, x$2)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharRef__ = (function() {
  return this.xCharRef__T()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharRef__Lscala_collection_Iterator__ = (function(it) {
  return this.xCharRef__Lscala_collection_Iterator__T(it)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharRef__Lscala_Function0__Lscala_Function0__ = (function(ch$5, nextch) {
  return this.xCharRef__Lscala_Function0__Lscala_Function0__T(ch$5, nextch)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xName__ = (function() {
  return this.xName__T()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xEndTag__T__ = (function(startName) {
  return ScalaJS.bV(this.xEndTag__T__V(startName))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xAttributeValue__ = (function() {
  return this.xAttributeValue__T()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xAttributeValue__C__ = (function(endCh) {
  return this.xAttributeValue__C__T(endCh)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xProcInstr__ = (function() {
  return this.xProcInstr__O()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xTag__O__ = (function(pscope) {
  return this.xTag__O__Lscala_Tuple2(pscope)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.unreachable__ = (function() {
  return this.unreachable__Lscala_Nothing()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pop__ = (function() {
  return ScalaJS.bV(this.pop__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pushExternal__T__ = (function(systemId) {
  return ScalaJS.bV(this.pushExternal__T__V(systemId))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.push__T__ = (function(entityName) {
  return ScalaJS.bV(this.push__T__V(entityName))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reportValidationError__I__T__ = (function(pos, str) {
  return ScalaJS.bV(this.reportValidationError__I__T__V(pos, str))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reportSyntaxError__T__ = (function(str$2) {
  return ScalaJS.bV(this.reportSyntaxError__T__V(str$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.notationDecl__ = (function() {
  return ScalaJS.bV(this.notationDecl__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.entityDecl__ = (function() {
  return ScalaJS.bV(this.entityDecl__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.attrDecl__ = (function() {
  return ScalaJS.bV(this.attrDecl__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.elementDecl__ = (function() {
  return ScalaJS.bV(this.elementDecl__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.intSubset__ = (function() {
  return ScalaJS.bV(this.intSubset__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.markupDecl__ = (function() {
  return ScalaJS.bV(this.markupDecl__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.markupDecl1__ = (function() {
  return this.markupDecl1__O()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.extSubset__ = (function() {
  return ScalaJS.bV(this.extSubset__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pubidLiteral__ = (function() {
  return this.pubidLiteral__T()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.systemLiteral__ = (function() {
  return this.systemLiteral__T()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.element1__Lscala_xml_NamespaceBinding__ = (function(pscope$2) {
  return this.element1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(pscope$2)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.element__Lscala_xml_NamespaceBinding__ = (function(pscope$3) {
  return this.element__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(pscope$3)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.parseDTD__ = (function() {
  return ScalaJS.bV(this.parseDTD__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.externalID__ = (function() {
  return this.externalID__Lscala_xml_dtd_ExternalID()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.content__Lscala_xml_NamespaceBinding__ = (function(pscope$4) {
  return this.content__Lscala_xml_NamespaceBinding__Lscala_xml_NodeSeq(pscope$4)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.content1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__ = (function(pscope$5, ts) {
  return ScalaJS.bV(this.content1__Lscala_xml_NamespaceBinding__Lscala_xml_NodeBuffer__V(pscope$5, ts))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.appendText__I__Lscala_xml_NodeBuffer__T__ = (function(pos$2, ts$2, txt) {
  return ScalaJS.bV(this.appendText__I__Lscala_xml_NodeBuffer__T__V(pos$2, ts$2, txt))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xComment__ = (function() {
  return this.xComment__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xCharData__ = (function() {
  return this.xCharData__Lscala_xml_NodeSeq()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xEntityValue__ = (function() {
  return this.xEntityValue__T()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xAttributes__Lscala_xml_NamespaceBinding__ = (function(pscope$6) {
  return this.xAttributes__Lscala_xml_NamespaceBinding__Lscala_Tuple2(pscope$6)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.nextch__ = (function() {
  return ScalaJS.bV(this.nextch__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkProcInstr__I__T__T__ = (function(position, name, text) {
  return this.mkProcInstr__I__T__T__Lscala_xml_NodeSeq(position, name, text)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkAttributes__T__Lscala_xml_NamespaceBinding__ = (function(name$2, pscope$7) {
  return this.mkAttributes__T__Lscala_xml_NamespaceBinding__Lscala_Tuple2(name$2, pscope$7)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.ch$undreturning$undnextch__ = (function() {
  return ScalaJS.bC(this.ch$undreturning$undnextch__C())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.initialize__ = (function() {
  return this.initialize__Lscala_xml_parsing_MarkupHandler()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.putChar__C__ = (function(c$3) {
  return this.putChar__C__Lscala_collection_mutable_StringBuilder(c$3)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.document__ = (function() {
  return this.document__Lscala_xml_Document()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.textDecl__ = (function() {
  return this.textDecl__Lscala_Tuple2()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.prolog__ = (function() {
  return this.prolog__Lscala_Tuple3()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xmlProcInstr__ = (function() {
  return this.xmlProcInstr__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.eof__ = (function() {
  return ScalaJS.bZ(this.eof__Z())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.ch__ = (function() {
  return ScalaJS.bC(this.ch__C())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.lookahead__ = (function() {
  return this.lookahead__Lscala_collection_BufferedIterator()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.xHandleError__C__T__ = (function(that$3, msg$2) {
  return ScalaJS.bV(this.xHandleError__C__T__V(that$3, msg$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.errorNoEnd__T__ = (function(tag) {
  return this.errorNoEnd__T__Lscala_Nothing(tag)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.truncatedError__T__ = (function(msg$3) {
  return this.truncatedError__T__Lscala_Nothing(msg$3)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$parsing$MarkupParser$$undsetter$und$cbuf$und$eq__Lscala_collection_mutable_StringBuilder__ = (function(x$1) {
  return ScalaJS.bV(this.scala$xml$parsing$MarkupParser$$undsetter$und$cbuf$und$eq__Lscala_collection_mutable_StringBuilder__V(x$1))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$parsing$MarkupParser$$undsetter$und$scala$xml$parsing$MarkupParser$$handle$und$eq__Lscala_xml_parsing_MarkupHandler__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$xml$parsing$MarkupParser$$undsetter$und$scala$xml$parsing$MarkupParser$$handle$und$eq__Lscala_xml_parsing_MarkupHandler__V(x$1$2))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.doc$und$eq__Lscala_xml_Document__ = (function(x$1$3) {
  return ScalaJS.bV(this.doc$und$eq__Lscala_xml_Document__V(x$1$3))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.doc__ = (function() {
  return this.doc__Lscala_xml_Document()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.dtd$und$eq__Lscala_xml_dtd_DTD__ = (function(x$1$4) {
  return ScalaJS.bV(this.dtd$und$eq__Lscala_xml_dtd_DTD__V(x$1$4))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.dtd__ = (function() {
  return this.dtd__Lscala_xml_dtd_DTD()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.cbuf__ = (function() {
  return this.cbuf__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.lastChRead$und$eq__C__ = (function(x$1$5) {
  return ScalaJS.bV(this.lastChRead$und$eq__C__V(x$1$5))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.lastChRead__ = (function() {
  return ScalaJS.bC(this.lastChRead__C())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reachedEof$und$eq__Z__ = (function(x$1$6) {
  return ScalaJS.bV(this.reachedEof$und$eq__Z__V(x$1$6))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.reachedEof__ = (function() {
  return ScalaJS.bZ(this.reachedEof__Z())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.nextChNeeded$und$eq__Z__ = (function(x$1$7) {
  return ScalaJS.bV(this.nextChNeeded$und$eq__Z__V(x$1$7))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.nextChNeeded__ = (function() {
  return ScalaJS.bZ(this.nextChNeeded__Z())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos$und$eq__I__ = (function(x$1$8) {
  return ScalaJS.bV(this.tmppos$und$eq__I__V(x$1$8))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos__ = (function() {
  return ScalaJS.bI(this.tmppos__I())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.extIndex$und$eq__I__ = (function(x$1$9) {
  return ScalaJS.bV(this.extIndex$und$eq__I__V(x$1$9))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.extIndex__ = (function() {
  return ScalaJS.bI(this.extIndex__I())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pos$und$eq__I__ = (function(x$1$10) {
  return ScalaJS.bV(this.pos$und$eq__I__V(x$1$10))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.pos__ = (function() {
  return ScalaJS.bI(this.pos__I())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.inpStack$und$eq__Lscala_collection_immutable_List__ = (function(x$1$11) {
  return ScalaJS.bV(this.inpStack$und$eq__Lscala_collection_immutable_List__V(x$1$11))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.inpStack__ = (function() {
  return this.inpStack__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$parsing$MarkupParser$$handle__ = (function() {
  return this.scala$xml$parsing$MarkupParser$$handle__Lscala_xml_parsing_MarkupHandler()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.curInput$und$eq__Lscala_io_Source__ = (function(x$1$12) {
  return ScalaJS.bV(this.curInput$und$eq__Lscala_io_Source__V(x$1$12))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.curInput__ = (function() {
  return this.curInput__Lscala_io_Source()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.externalSource__T__ = (function(systemId$2) {
  return this.externalSource__T__Lscala_io_Source(systemId$2)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.scala$xml$pull$XMLEventReader$Parser$$$outer__ = (function() {
  return this.scala$xml$pull$XMLEventReader$Parser$$$outer__Lscala_xml_pull_XMLEventReader()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.run__ = (function() {
  return ScalaJS.bV(this.run__V())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.setEvent__Lscala_collection_Seq__ = (function(es) {
  return this.setEvent__Lscala_collection_Seq__Lscala_xml_NodeSeq(es)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.preserveWS__ = (function() {
  return ScalaJS.bZ(this.preserveWS__Z())
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.input__ = (function() {
  return this.input__Lscala_io_Source()
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.tmppos$und$eq__O__ = (function(x$1$13) {
  return ScalaJS.bV(this.tmppos$und$eq__O__V(x$1$13))
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkProcInstr__O__T__T__ = (function(position$2, name$3, text$2) {
  return this.mkProcInstr__O__T__T__O(position$2, name$3, text$2)
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.mkAttributes__T__O__ = (function(name$4, pscope$8) {
  return this.mkAttributes__T__O__O(name$4, pscope$8)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_XMLEventReader$Parser = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_XMLEventReader$Parser.prototype = ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype;
ScalaJS.is.scala_xml_pull_XMLEventReader$Parser = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_XMLEventReader$Parser)))
});
ScalaJS.as.scala_xml_pull_XMLEventReader$Parser = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_XMLEventReader$Parser(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.XMLEventReader$Parser")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_XMLEventReader$Parser = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_XMLEventReader$Parser)))
});
ScalaJS.asArrayOf.scala_xml_pull_XMLEventReader$Parser = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_XMLEventReader$Parser(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.XMLEventReader$Parser;", depth)
  }
});
ScalaJS.data.scala_xml_pull_XMLEventReader$Parser = new ScalaJS.ClassTypeData({
  scala_xml_pull_XMLEventReader$Parser: 0
}, false, "scala.xml.pull.XMLEventReader$Parser", ScalaJS.data.scala_xml_parsing_MarkupHandler, {
  scala_xml_pull_XMLEventReader$Parser: 1,
  java_lang_Runnable: 1,
  scala_xml_parsing_ExternalSources: 1,
  scala_xml_parsing_MarkupParser: 1,
  scala_xml_parsing_MarkupParserCommon: 1,
  scala_xml_parsing_TokenTests: 1,
  scala_xml_parsing_MarkupHandler: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_XMLEventReader$Parser.prototype.$classData = ScalaJS.data.scala_xml_pull_XMLEventReader$Parser;
//@ sourceMappingURL=XMLEventReader$Parser.js.map
