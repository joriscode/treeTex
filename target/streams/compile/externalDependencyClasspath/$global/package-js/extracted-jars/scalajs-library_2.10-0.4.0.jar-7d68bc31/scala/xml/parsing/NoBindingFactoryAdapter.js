/** @constructor */
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter = (function() {
  ScalaJS.c.scala_xml_parsing_FactoryAdapter.call(this);
  this.ignoreComments$3 = false;
  this.ignoreProcInstr$3 = false;
  this.cache$3 = null
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype = new ScalaJS.inheritable.scala_xml_parsing_FactoryAdapter();
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.constructor = ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter;
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.ignoreComments__Z = (function() {
  return this.ignoreComments$3
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.ignoreProcInstr__Z = (function() {
  return this.ignoreProcInstr$3
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.cache__Lscala_collection_mutable_HashMap = (function() {
  return this.cache$3
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.scala$xml$factory$NodeFactory$$undsetter$und$ignoreComments$und$eq__Z__V = (function(x$1) {
  this.ignoreComments$3 = x$1
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.scala$xml$factory$NodeFactory$$undsetter$und$ignoreProcInstr$und$eq__Z__V = (function(x$1) {
  this.ignoreProcInstr$3 = x$1
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.scala$xml$factory$NodeFactory$$undsetter$und$cache$und$eq__Lscala_collection_mutable_HashMap__V = (function(x$1) {
  this.cache$3 = x$1
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.construct__I__Lscala_collection_immutable_List__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function(hash, old, pre, name, attrSeq, scope, children) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__construct__Lscala_xml_factory_NodeFactory__I__Lscala_collection_immutable_List__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(this, hash, old, pre, name, attrSeq, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.eqElements__Lscala_collection_Seq__Lscala_collection_Seq__Z = (function(ch1, ch2) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__eqElements__Lscala_xml_factory_NodeFactory__Lscala_collection_Seq__Lscala_collection_Seq__Z(this, ch1, ch2)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.nodeEquals__Lscala_xml_Node__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Z = (function(n, pre, name, attrSeq, scope, children) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__nodeEquals__Lscala_xml_factory_NodeFactory__Lscala_xml_Node__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Z(this, n, pre, name, attrSeq, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function(pre, name, attrSeq, scope, children) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeNode__Lscala_xml_factory_NodeFactory__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(this, pre, name, attrSeq, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeText__T__Lscala_xml_Text = (function(s) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeText__Lscala_xml_factory_NodeFactory__T__Lscala_xml_Text(this, s)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeComment__T__Lscala_collection_Seq = (function(s) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeComment__Lscala_xml_factory_NodeFactory__T__Lscala_collection_Seq(this, s)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeProcInstr__T__T__Lscala_collection_Seq = (function(t, s) {
  return ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeProcInstr__Lscala_xml_factory_NodeFactory__T__T__Lscala_collection_Seq(this, t, s)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.nodeContainsText__T__Z = (function(label) {
  return true
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.create__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem = (function(pre, label, attrs, scope, children) {
  return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre, label, attrs, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.createNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_immutable_List__Lscala_xml_Elem = (function(pre, label, attrs, scope, children) {
  return ScalaJS.modules.scala_xml_Elem().apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre, label, attrs, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.createText__T__Lscala_xml_Text = (function(text) {
  return ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(text)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.createProcInstr__T__T__Lscala_collection_Seq = (function(target, data) {
  return this.makeProcInstr__T__T__Lscala_collection_Seq(target, data)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.createNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_immutable_List__Lscala_xml_Node = (function(pre, elemName, attribs, scope, chIter) {
  return this.createNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_immutable_List__Lscala_xml_Elem(pre, elemName, attribs, scope, chIter)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.create__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function(pre, name, attrs, scope, children) {
  return this.create__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre, name, attrs, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_parsing_FactoryAdapter.prototype.init___.call(this);
  ScalaJS.impls.scala_xml_factory_NodeFactory$class__$init$__Lscala_xml_factory_NodeFactory__V(this);
  return this
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeProcInstr__T__T__ = (function(t, s) {
  return this.makeProcInstr__T__T__Lscala_collection_Seq(t, s)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeComment__T__ = (function(s$2) {
  return this.makeComment__T__Lscala_collection_Seq(s$2)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeText__T__ = (function(s$3) {
  return this.makeText__T__Lscala_xml_Text(s$3)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.makeNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__ = (function(pre, name, attrSeq, scope, children) {
  return this.makeNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(pre, name, attrSeq, scope, children)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.nodeEquals__Lscala_xml_Node__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__ = (function(n, pre$2, name$2, attrSeq$2, scope$2, children$2) {
  return ScalaJS.bZ(this.nodeEquals__Lscala_xml_Node__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Z(n, pre$2, name$2, attrSeq$2, scope$2, children$2))
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.eqElements__Lscala_collection_Seq__Lscala_collection_Seq__ = (function(ch1, ch2) {
  return ScalaJS.bZ(this.eqElements__Lscala_collection_Seq__Lscala_collection_Seq__Z(ch1, ch2))
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.construct__I__Lscala_collection_immutable_List__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__ = (function(hash, old, pre$3, name$3, attrSeq$3, scope$3, children$3) {
  return this.construct__I__Lscala_collection_immutable_List__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(hash, old, pre$3, name$3, attrSeq$3, scope$3, children$3)
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.scala$xml$factory$NodeFactory$$undsetter$und$cache$und$eq__Lscala_collection_mutable_HashMap__ = (function(x$1) {
  return ScalaJS.bV(this.scala$xml$factory$NodeFactory$$undsetter$und$cache$und$eq__Lscala_collection_mutable_HashMap__V(x$1))
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.scala$xml$factory$NodeFactory$$undsetter$und$ignoreProcInstr$und$eq__Z__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$xml$factory$NodeFactory$$undsetter$und$ignoreProcInstr$und$eq__Z__V(x$1$2))
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.scala$xml$factory$NodeFactory$$undsetter$und$ignoreComments$und$eq__Z__ = (function(x$1$3) {
  return ScalaJS.bV(this.scala$xml$factory$NodeFactory$$undsetter$und$ignoreComments$und$eq__Z__V(x$1$3))
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.cache__ = (function() {
  return this.cache__Lscala_collection_mutable_HashMap()
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.ignoreProcInstr__ = (function() {
  return ScalaJS.bZ(this.ignoreProcInstr__Z())
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.ignoreComments__ = (function() {
  return ScalaJS.bZ(this.ignoreComments__Z())
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.create__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__ = (function(pre$4, label, attrs, scope$4, children$4) {
  return this.create__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(pre$4, label, attrs, scope$4, children$4)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_NoBindingFactoryAdapter = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_NoBindingFactoryAdapter.prototype = ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype;
ScalaJS.is.scala_xml_parsing_NoBindingFactoryAdapter = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_NoBindingFactoryAdapter)))
});
ScalaJS.as.scala_xml_parsing_NoBindingFactoryAdapter = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_NoBindingFactoryAdapter(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.NoBindingFactoryAdapter")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_NoBindingFactoryAdapter = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_NoBindingFactoryAdapter)))
});
ScalaJS.asArrayOf.scala_xml_parsing_NoBindingFactoryAdapter = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_NoBindingFactoryAdapter(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.NoBindingFactoryAdapter;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_NoBindingFactoryAdapter = new ScalaJS.ClassTypeData({
  scala_xml_parsing_NoBindingFactoryAdapter: 0
}, false, "scala.xml.parsing.NoBindingFactoryAdapter", ScalaJS.data.scala_xml_parsing_FactoryAdapter, {
  scala_xml_parsing_NoBindingFactoryAdapter: 1,
  scala_xml_factory_NodeFactory: 1,
  scala_xml_parsing_FactoryAdapter: 1,
  scala_xml_factory_XMLLoader: 1,
  org_xml_sax_helpers_DefaultHandler: 1,
  org_xml_sax_ErrorHandler: 1,
  org_xml_sax_ContentHandler: 1,
  org_xml_sax_DTDHandler: 1,
  org_xml_sax_EntityResolver: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_NoBindingFactoryAdapter.prototype.$classData = ScalaJS.data.scala_xml_parsing_NoBindingFactoryAdapter;
//@ sourceMappingURL=NoBindingFactoryAdapter.js.map
