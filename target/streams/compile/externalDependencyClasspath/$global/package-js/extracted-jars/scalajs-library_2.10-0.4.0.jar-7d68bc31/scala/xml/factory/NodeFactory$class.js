ScalaJS.impls.scala_xml_factory_NodeFactory$class__construct__Lscala_xml_factory_NodeFactory__I__Lscala_collection_immutable_List__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function($$this, hash, old, pre, name, attrSeq, scope, children) {
  var el = $$this.create__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(pre, name, attrSeq, scope, children);
  var jsx$3 = $$this.cache__Lscala_collection_mutable_HashMap();
  var jsx$2 = ScalaJS.bI(hash);
  var x$1 = el;
  var jsx$1 = old.$$colon$colon__O__Lscala_collection_immutable_List(x$1);
  jsx$3.update__O__O__V(jsx$2, jsx$1);
  return el
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__eqElements__Lscala_xml_factory_NodeFactory__Lscala_collection_Seq__Lscala_collection_Seq__Z = (function($$this, ch1, ch2) {
  return ScalaJS.as.scala_collection_IterableLike(ch1.view__Lscala_collection_SeqView().zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(ch2.view__Lscala_collection_SeqView(), null, null, ScalaJS.modules.scala_collection_SeqView().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var x = ScalaJS.as.scala_xml_Node(x1.$$und1__O());
          var y = ScalaJS.as.scala_xml_Node(x1.$$und2__O());
          var jsx$4 = (x === y);
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bZ(jsx$4)
    })
  })()))
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__nodeEquals__Lscala_xml_factory_NodeFactory__Lscala_xml_Node__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Z = (function($$this, n, pre, name, attrSeq, scope, children) {
  return (((ScalaJS.anyRefEqEq(n.prefix__T(), pre) && ScalaJS.anyRefEqEq(n.label__T(), name)) && ScalaJS.anyRefEqEq(n.attributes__Lscala_xml_MetaData(), attrSeq)) && $$this.eqElements__Lscala_collection_Seq__Lscala_collection_Seq__Z(n.child__Lscala_collection_Seq(), children))
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeNode__Lscala_xml_factory_NodeFactory__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function($$this, pre, name, attrSeq, scope, children) {
  var hash = ScalaJS.modules.scala_xml_Utility().hashCode__T__T__I__I__Lscala_collection_Seq__I(pre, name, ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(attrSeq), ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(scope), children);
  var x1 = $$this.cache__Lscala_collection_mutable_HashMap().get__O__Lscala_Option(ScalaJS.bI(hash));
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var list = ScalaJS.as.scala_collection_immutable_List(x2.x__O());
    var x1$2 = list.find__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, pre$1, name$1, attrSeq$1, scope$1, children$1) {
      return (function(x$2) {
        return ScalaJS.bZ(arg$outer.nodeEquals__Lscala_xml_Node__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Z(x$2, pre$1, name$1, attrSeq$1, scope$1, children$1))
      })
    })($$this, pre, name, attrSeq, scope, children)));
    if (ScalaJS.is.scala_Some(x1$2)) {
      var x2$2 = ScalaJS.as.scala_Some(x1$2);
      var x = ScalaJS.as.scala_xml_Node(x2$2.x__O());
      return x
    };
    return ScalaJS.impls.scala_xml_factory_NodeFactory$class__cons$1__Lscala_xml_factory_NodeFactory__Lscala_collection_immutable_List__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node($$this, list, hash, pre, name, attrSeq, scope, children)
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return ScalaJS.impls.scala_xml_factory_NodeFactory$class__cons$1__Lscala_xml_factory_NodeFactory__Lscala_collection_immutable_List__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node($$this, ScalaJS.modules.scala_collection_immutable_Nil(), hash, pre, name, attrSeq, scope, children)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeText__Lscala_xml_factory_NodeFactory__T__Lscala_xml_Text = (function($$this, s) {
  return ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(s)
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeComment__Lscala_xml_factory_NodeFactory__T__Lscala_collection_Seq = (function($$this, s) {
  if ($$this.ignoreComments__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Nil()
  } else {
    return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_Comment.getArrayOf(), [new ScalaJS.c.scala_xml_Comment().init___T(s)]), 1)))
  }
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__makeProcInstr__Lscala_xml_factory_NodeFactory__T__T__Lscala_collection_Seq = (function($$this, t, s) {
  if ($$this.ignoreProcInstr__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Nil()
  } else {
    return ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_xml_ProcInstr.getArrayOf(), [new ScalaJS.c.scala_xml_ProcInstr().init___T__T(t, s)]), 1)))
  }
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__cons$1__Lscala_xml_factory_NodeFactory__Lscala_collection_immutable_List__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node = (function($$this, old, hash$1, pre$1, name$1, attrSeq$1, scope$1, children$1) {
  return $$this.construct__I__Lscala_collection_immutable_List__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Node(hash$1, old, pre$1, name$1, attrSeq$1, scope$1, children$1)
});
ScalaJS.impls.scala_xml_factory_NodeFactory$class__$init$__Lscala_xml_factory_NodeFactory__V = (function($$this) {
  $$this.scala$xml$factory$NodeFactory$$undsetter$und$ignoreComments$und$eq__Z__V(false);
  $$this.scala$xml$factory$NodeFactory$$undsetter$und$ignoreProcInstr$und$eq__Z__V(false);
  $$this.scala$xml$factory$NodeFactory$$undsetter$und$cache$und$eq__Lscala_collection_mutable_HashMap__V(new ScalaJS.c.scala_collection_mutable_HashMap().init___())
});
//@ sourceMappingURL=NodeFactory$class.js.map
