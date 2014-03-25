ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__thatSeq__Lscala_collection_GenSeqViewLike$ZippedAll__Lscala_collection_Seq = (function($$this) {
  return $$this.other__Lscala_collection_GenIterable().seq__Lscala_collection_Iterable().toSeq__Lscala_collection_Seq()
});
ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__length__Lscala_collection_GenSeqViewLike$ZippedAll__I = (function($$this) {
  return ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike().length__I()), $$this.thatSeq__Lscala_collection_Seq().length__I())
});
ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__apply__Lscala_collection_GenSeqViewLike$ZippedAll__I__Lscala_Tuple2 = (function($$this, idx) {
  var jsx$3 = new ScalaJS.c.scala_Tuple2();
  if ((idx < $$this.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike().length__I())) {
    var jsx$2 = $$this.scala$collection$GenSeqViewLike$ZippedAll$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(idx)
  } else {
    var jsx$2 = $$this.thisElem__O()
  };
  if ((idx < $$this.thatSeq__Lscala_collection_Seq().length__I())) {
    var jsx$1 = $$this.thatSeq__Lscala_collection_Seq().apply__I__O(idx)
  } else {
    var jsx$1 = $$this.thatElem__O()
  };
  return jsx$3.init___O__O(jsx$2, jsx$1)
});
ScalaJS.impls.scala_collection_GenSeqViewLike$ZippedAll$class__$init$__Lscala_collection_GenSeqViewLike$ZippedAll__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$ZippedAll$class.js.map
