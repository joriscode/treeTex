ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__iterator__Lscala_collection_GenSeqViewLike$Reversed__Lscala_collection_Iterator = (function($$this) {
  return ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__createReversedIterator__Lscala_collection_GenSeqViewLike$Reversed__Lscala_collection_Iterator($$this)
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__length__Lscala_collection_GenSeqViewLike$Reversed__I = (function($$this) {
  return $$this.scala$collection$GenSeqViewLike$Reversed$$$outer__Lscala_collection_GenSeqViewLike().length__I()
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__apply__Lscala_collection_GenSeqViewLike$Reversed__I__O = (function($$this, idx) {
  return $$this.scala$collection$GenSeqViewLike$Reversed$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O((($$this.length__I() - 1) - idx))
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__viewIdentifier__Lscala_collection_GenSeqViewLike$Reversed__T = (function($$this) {
  return "R"
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__createReversedIterator__Lscala_collection_GenSeqViewLike$Reversed__Lscala_collection_Iterator = (function($$this) {
  var lst = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_Nil());
  $$this.scala$collection$GenSeqViewLike$Reversed$$$outer__Lscala_collection_GenSeqViewLike().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(lst$1) {
    return (function(elem) {
      lst$1.elem$1 = ScalaJS.as.scala_collection_immutable_List(lst$1.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(elem);
      return ScalaJS.bV(undefined)
    })
  })(lst)));
  return ScalaJS.as.scala_collection_immutable_List(lst.elem$1).iterator__Lscala_collection_Iterator()
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Reversed$class__$init$__Lscala_collection_GenSeqViewLike$Reversed__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$Reversed$class.js.map
