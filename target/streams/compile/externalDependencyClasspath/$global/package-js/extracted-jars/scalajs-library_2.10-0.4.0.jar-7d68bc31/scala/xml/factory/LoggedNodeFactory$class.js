ScalaJS.impls.scala_xml_factory_LoggedNodeFactory$class__makeNode__Lscala_xml_factory_LoggedNodeFactory__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function($$this, pre, label, attrSeq, scope, children) {
  if ($$this.logNode__Z()) {
    $$this.log__T__V((("[makeNode for " + label) + "]"))
  };
  var hash = ScalaJS.modules.scala_xml_Utility().hashCode__T__T__I__I__Lscala_collection_Seq__I(pre, label, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(attrSeq), ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(scope), children);
  if (((!$$this.cache__Lscala_collection_mutable_HashMap().get__O__Lscala_Option(ScalaJS.bI(hash)).isEmpty__Z()) && ($$this.logCompressLevel__I() >= 1))) {
    $$this.log__T__V("[cache hit !]")
  };
  return $$this.scala$xml$factory$LoggedNodeFactory$$super$makeNode__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(pre, label, attrSeq, scope, children)
});
ScalaJS.impls.scala_xml_factory_LoggedNodeFactory$class__makeText__Lscala_xml_factory_LoggedNodeFactory__T__Lscala_xml_Text = (function($$this, s) {
  if ($$this.logText__Z()) {
    $$this.log__T__V((("[makeText:\"" + s) + "\"]"))
  };
  return $$this.scala$xml$factory$LoggedNodeFactory$$super$makeText__T__Lscala_xml_Text(s)
});
ScalaJS.impls.scala_xml_factory_LoggedNodeFactory$class__makeComment__Lscala_xml_factory_LoggedNodeFactory__T__Lscala_collection_Seq = (function($$this, s) {
  if ($$this.logComment__Z()) {
    $$this.log__T__V((("[makeComment:\"" + s) + "\"]"))
  };
  return $$this.scala$xml$factory$LoggedNodeFactory$$super$makeComment__T__Lscala_collection_Seq(s)
});
ScalaJS.impls.scala_xml_factory_LoggedNodeFactory$class__makeProcInstr__Lscala_xml_factory_LoggedNodeFactory__T__T__Lscala_collection_Seq = (function($$this, t, s) {
  if ($$this.logProcInstr__Z()) {
    $$this.log__T__V((((("[makeProcInstr:\"" + t) + " ") + s) + "\"]"))
  };
  return $$this.scala$xml$factory$LoggedNodeFactory$$super$makeProcInstr__T__T__Lscala_collection_Seq(t, s)
});
ScalaJS.impls.scala_xml_factory_LoggedNodeFactory$class__$init$__Lscala_xml_factory_LoggedNodeFactory__V = (function($$this) {
  $$this.scala$xml$factory$LoggedNodeFactory$$undsetter$und$logNode$und$eq__Z__V(true);
  $$this.scala$xml$factory$LoggedNodeFactory$$undsetter$und$logText$und$eq__Z__V(false);
  $$this.scala$xml$factory$LoggedNodeFactory$$undsetter$und$logComment$und$eq__Z__V(false);
  $$this.scala$xml$factory$LoggedNodeFactory$$undsetter$und$logProcInstr$und$eq__Z__V(false);
  $$this.scala$xml$factory$LoggedNodeFactory$$undsetter$und$logCompressLevel$und$eq__I__V(1)
});
//@ sourceMappingURL=LoggedNodeFactory$class.js.map
