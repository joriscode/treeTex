ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__scala$collection$GenSeqViewLike$Patched$$plen__Lscala_collection_GenSeqViewLike$Patched__I = (function($$this) {
  return $$this.patch__Lscala_collection_GenSeq().length__I()
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__iterator__Lscala_collection_GenSeqViewLike$Patched__Lscala_collection_Iterator = (function($$this) {
  return $$this.scala$collection$GenSeqViewLike$Patched$$$outer__Lscala_collection_GenSeqViewLike().iterator__Lscala_collection_Iterator().patch__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator($$this.from__I(), $$this.patch__Lscala_collection_GenSeq().iterator__Lscala_collection_Iterator(), $$this.replaced__I())
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__length__Lscala_collection_GenSeqViewLike$Patched__I = (function($$this) {
  return (($$this.scala$collection$GenSeqViewLike$Patched$$$outer__Lscala_collection_GenSeqViewLike().length__I() + $$this.scala$collection$GenSeqViewLike$Patched$$plen__I()) - $$this.replaced__I())
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__apply__Lscala_collection_GenSeqViewLike$Patched__I__O = (function($$this, idx) {
  if ((idx < $$this.from__I())) {
    return $$this.scala$collection$GenSeqViewLike$Patched$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(idx)
  } else {
    if ((idx < ($$this.from__I() + $$this.scala$collection$GenSeqViewLike$Patched$$plen__I()))) {
      return $$this.patch__Lscala_collection_GenSeq().apply__I__O((idx - $$this.from__I()))
    } else {
      return $$this.scala$collection$GenSeqViewLike$Patched$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(((idx - $$this.scala$collection$GenSeqViewLike$Patched$$plen__I()) + $$this.replaced__I()))
    }
  }
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__viewIdentifier__Lscala_collection_GenSeqViewLike$Patched__T = (function($$this) {
  return "P"
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Patched$class__$init$__Lscala_collection_GenSeqViewLike$Patched__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$Patched$class.js.map
