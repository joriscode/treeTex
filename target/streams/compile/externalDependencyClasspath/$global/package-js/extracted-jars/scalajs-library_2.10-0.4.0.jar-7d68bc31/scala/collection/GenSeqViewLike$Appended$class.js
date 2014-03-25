ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__restSeq__Lscala_collection_GenSeqViewLike$Appended__Lscala_collection_GenSeq = (function($$this) {
  return $$this.rest__Lscala_collection_GenTraversable().toSeq__Lscala_collection_GenSeq()
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__length__Lscala_collection_GenSeqViewLike$Appended__I = (function($$this) {
  return ($$this.scala$collection$GenSeqViewLike$Appended$$$outer__Lscala_collection_GenSeqViewLike().length__I() + $$this.restSeq__Lscala_collection_GenSeq().length__I())
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__apply__Lscala_collection_GenSeqViewLike$Appended__I__O = (function($$this, idx) {
  if ((idx < $$this.scala$collection$GenSeqViewLike$Appended$$$outer__Lscala_collection_GenSeqViewLike().length__I())) {
    return $$this.scala$collection$GenSeqViewLike$Appended$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(idx)
  } else {
    return $$this.restSeq__Lscala_collection_GenSeq().apply__I__O((idx - $$this.scala$collection$GenSeqViewLike$Appended$$$outer__Lscala_collection_GenSeqViewLike().length__I()))
  }
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Appended$class__$init$__Lscala_collection_GenSeqViewLike$Appended__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$Appended$class.js.map
