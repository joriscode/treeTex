/** @constructor */
ScalaJS.c.scala_xml_Document = (function() {
  ScalaJS.c.scala_xml_NodeSeq.call(this);
  this.children$5 = null;
  this.docElem$5 = null;
  this.dtd$5 = null;
  this.baseURI$5 = null;
  this.encoding$5 = null;
  this.standAlone$5 = null;
  this.version$5 = null;
  this.allDeclarationsProcessed$5 = false
});
ScalaJS.c.scala_xml_Document.prototype = new ScalaJS.inheritable.scala_xml_NodeSeq();
ScalaJS.c.scala_xml_Document.prototype.constructor = ScalaJS.c.scala_xml_Document;
ScalaJS.c.scala_xml_Document.prototype.children__Lscala_collection_Seq = (function() {
  return this.children$5
});
ScalaJS.c.scala_xml_Document.prototype.children$und$eq__Lscala_collection_Seq__V = (function(x$1) {
  this.children$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.docElem__Lscala_xml_Node = (function() {
  return this.docElem$5
});
ScalaJS.c.scala_xml_Document.prototype.docElem$und$eq__Lscala_xml_Node__V = (function(x$1) {
  this.docElem$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.dtd__Lscala_xml_dtd_DTD = (function() {
  return this.dtd$5
});
ScalaJS.c.scala_xml_Document.prototype.dtd$und$eq__Lscala_xml_dtd_DTD__V = (function(x$1) {
  this.dtd$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.notations__Lscala_collection_Seq = (function() {
  return this.dtd__Lscala_xml_dtd_DTD().notations__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Document.prototype.unparsedEntities__Lscala_collection_Seq = (function() {
  return this.dtd__Lscala_xml_dtd_DTD().unparsedEntities__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Document.prototype.baseURI__T = (function() {
  return this.baseURI$5
});
ScalaJS.c.scala_xml_Document.prototype.baseURI$und$eq__T__V = (function(x$1) {
  this.baseURI$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.encoding__Lscala_Option = (function() {
  return this.encoding$5
});
ScalaJS.c.scala_xml_Document.prototype.encoding$und$eq__Lscala_Option__V = (function(x$1) {
  this.encoding$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.standAlone__Lscala_Option = (function() {
  return this.standAlone$5
});
ScalaJS.c.scala_xml_Document.prototype.standAlone$und$eq__Lscala_Option__V = (function(x$1) {
  this.standAlone$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.version__Lscala_Option = (function() {
  return this.version$5
});
ScalaJS.c.scala_xml_Document.prototype.version$und$eq__Lscala_Option__V = (function(x$1) {
  this.version$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.allDeclarationsProcessed__Z = (function() {
  return this.allDeclarationsProcessed$5
});
ScalaJS.c.scala_xml_Document.prototype.allDeclarationsProcessed$und$eq__Z__V = (function(x$1) {
  this.allDeclarationsProcessed$5 = x$1
});
ScalaJS.c.scala_xml_Document.prototype.theSeq__Lscala_collection_Seq = (function() {
  return this.docElem__Lscala_xml_Node()
});
ScalaJS.c.scala_xml_Document.prototype.canEqual__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_xml_Document(x1)) {
    return true
  };
  return false
});
ScalaJS.c.scala_xml_Document.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_NodeSeq.prototype.init___.call(this);
  this.allDeclarationsProcessed$5 = false;
  return this
});
ScalaJS.c.scala_xml_Document.prototype.allDeclarationsProcessed$und$eq__Z__ = (function(x$1) {
  return ScalaJS.bV(this.allDeclarationsProcessed$und$eq__Z__V(x$1))
});
ScalaJS.c.scala_xml_Document.prototype.allDeclarationsProcessed__ = (function() {
  return ScalaJS.bZ(this.allDeclarationsProcessed__Z())
});
ScalaJS.c.scala_xml_Document.prototype.version$und$eq__Lscala_Option__ = (function(x$1$2) {
  return ScalaJS.bV(this.version$und$eq__Lscala_Option__V(x$1$2))
});
ScalaJS.c.scala_xml_Document.prototype.version__ = (function() {
  return this.version__Lscala_Option()
});
ScalaJS.c.scala_xml_Document.prototype.standAlone$und$eq__Lscala_Option__ = (function(x$1$3) {
  return ScalaJS.bV(this.standAlone$und$eq__Lscala_Option__V(x$1$3))
});
ScalaJS.c.scala_xml_Document.prototype.standAlone__ = (function() {
  return this.standAlone__Lscala_Option()
});
ScalaJS.c.scala_xml_Document.prototype.encoding$und$eq__Lscala_Option__ = (function(x$1$4) {
  return ScalaJS.bV(this.encoding$und$eq__Lscala_Option__V(x$1$4))
});
ScalaJS.c.scala_xml_Document.prototype.encoding__ = (function() {
  return this.encoding__Lscala_Option()
});
ScalaJS.c.scala_xml_Document.prototype.baseURI$und$eq__T__ = (function(x$1$5) {
  return ScalaJS.bV(this.baseURI$und$eq__T__V(x$1$5))
});
ScalaJS.c.scala_xml_Document.prototype.baseURI__ = (function() {
  return this.baseURI__T()
});
ScalaJS.c.scala_xml_Document.prototype.unparsedEntities__ = (function() {
  return this.unparsedEntities__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Document.prototype.notations__ = (function() {
  return this.notations__Lscala_collection_Seq()
});
ScalaJS.c.scala_xml_Document.prototype.dtd$und$eq__Lscala_xml_dtd_DTD__ = (function(x$1$6) {
  return ScalaJS.bV(this.dtd$und$eq__Lscala_xml_dtd_DTD__V(x$1$6))
});
ScalaJS.c.scala_xml_Document.prototype.dtd__ = (function() {
  return this.dtd__Lscala_xml_dtd_DTD()
});
ScalaJS.c.scala_xml_Document.prototype.docElem$und$eq__Lscala_xml_Node__ = (function(x$1$7) {
  return ScalaJS.bV(this.docElem$und$eq__Lscala_xml_Node__V(x$1$7))
});
ScalaJS.c.scala_xml_Document.prototype.docElem__ = (function() {
  return this.docElem__Lscala_xml_Node()
});
ScalaJS.c.scala_xml_Document.prototype.children$und$eq__Lscala_collection_Seq__ = (function(x$1$8) {
  return ScalaJS.bV(this.children$und$eq__Lscala_collection_Seq__V(x$1$8))
});
ScalaJS.c.scala_xml_Document.prototype.children__ = (function() {
  return this.children__Lscala_collection_Seq()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Document = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Document.prototype = ScalaJS.c.scala_xml_Document.prototype;
ScalaJS.is.scala_xml_Document = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Document)))
});
ScalaJS.as.scala_xml_Document = (function(obj) {
  if ((ScalaJS.is.scala_xml_Document(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Document")
  }
});
ScalaJS.isArrayOf.scala_xml_Document = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Document)))
});
ScalaJS.asArrayOf.scala_xml_Document = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Document(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Document;", depth)
  }
});
ScalaJS.data.scala_xml_Document = new ScalaJS.ClassTypeData({
  scala_xml_Document: 0
}, false, "scala.xml.Document", ScalaJS.data.scala_xml_NodeSeq, {
  scala_xml_Document: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_xml_pull_XMLEvent: 1,
  scala_xml_NodeSeq: 1,
  scala_xml_Equality: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Document.prototype.$classData = ScalaJS.data.scala_xml_Document;
//@ sourceMappingURL=Document.js.map
