ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__length__Lscala_collection_GenSeqViewLike$Sliced__I = (function($$this) {
  return $$this.iterator__Lscala_collection_Iterator().size__I()
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__apply__Lscala_collection_GenSeqViewLike$Sliced__I__O = (function($$this, idx) {
  if (((idx + $$this.from__I()) < $$this.until__I())) {
    return $$this.scala$collection$GenSeqViewLike$Sliced$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O((idx + $$this.from__I()))
  } else {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  }
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__foreach__Lscala_collection_GenSeqViewLike$Sliced__Lscala_Function1__V = (function($$this, f) {
  $$this.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(f)
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__iterator__Lscala_collection_GenSeqViewLike$Sliced__Lscala_collection_Iterator = (function($$this) {
  return $$this.scala$collection$GenSeqViewLike$Sliced$$$outer__Lscala_collection_GenSeqViewLike().iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator($$this.from__I()).take__I__Lscala_collection_Iterator($$this.endpoints__Lscala_collection_generic_SliceInterval().width__I())
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Sliced$class__$init$__Lscala_collection_GenSeqViewLike$Sliced__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$Sliced$class.js.map
