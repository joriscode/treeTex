ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Sliced$class__length__Lscala_collection_mutable_IndexedSeqView$Sliced__I = (function($$this) {
  return $$this.endpoints__Lscala_collection_generic_SliceInterval().width__I()
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Sliced$class__update__Lscala_collection_mutable_IndexedSeqView$Sliced__I__O__V = (function($$this, idx, elem) {
  if (((idx + $$this.from__I()) < $$this.until__I())) {
    $$this.scala$collection$mutable$IndexedSeqView$Sliced$$$outer__Lscala_collection_mutable_IndexedSeqView().update__I__O__V((idx + $$this.from__I()), elem)
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  }
});
ScalaJS.impls.scala_collection_mutable_IndexedSeqView$Sliced$class__$init$__Lscala_collection_mutable_IndexedSeqView$Sliced__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=IndexedSeqView$Sliced$class.js.map
