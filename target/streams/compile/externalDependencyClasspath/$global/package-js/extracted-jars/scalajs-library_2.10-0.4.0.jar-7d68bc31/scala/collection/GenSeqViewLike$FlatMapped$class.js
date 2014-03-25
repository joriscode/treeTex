ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__index__Lscala_collection_GenSeqViewLike$FlatMapped__AI = (function($$this) {
  var index = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [($$this.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike().length__I() + 1)]);
  index.underlying[0] = 0;
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), $$this.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike().length__I()).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, index$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      index$1.underlying[(i + 1)] = (index$1.underlying[i] + ScalaJS.as.scala_collection_GenTraversableOnce(arg$outer.mapping__Lscala_Function1().apply__O__O(arg$outer.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(i))).seq__Lscala_collection_TraversableOnce().size__I());
      return ScalaJS.bV(undefined)
    })
  })($$this, index)));
  return index
});
ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__findRow__Lscala_collection_GenSeqViewLike$FlatMapped__I__I__I__I = (function($$this, idx, lo, hi) {
  var mid = (((lo + hi) / 2) | 0);
  if ((idx < $$this.index__AI().underlying[mid])) {
    return $$this.findRow__I__I__I__I(idx, lo, (mid - 1))
  } else {
    if ((idx >= $$this.index__AI().underlying[(mid + 1)])) {
      return $$this.findRow__I__I__I__I(idx, (mid + 1), hi)
    } else {
      return mid
    }
  }
});
ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__length__Lscala_collection_GenSeqViewLike$FlatMapped__I = (function($$this) {
  return $$this.index__AI().underlying[$$this.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike().length__I()]
});
ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__apply__Lscala_collection_GenSeqViewLike$FlatMapped__I__O = (function($$this, idx) {
  var row = $$this.findRow__I__I__I__I(idx, 0, ($$this.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike().length__I() - 1));
  return ScalaJS.as.scala_collection_GenTraversableOnce($$this.mapping__Lscala_Function1().apply__O__O($$this.scala$collection$GenSeqViewLike$FlatMapped$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(row))).seq__Lscala_collection_TraversableOnce().toSeq__Lscala_collection_Seq().apply__I__O((idx - $$this.index__AI().underlying[row]))
});
ScalaJS.impls.scala_collection_GenSeqViewLike$FlatMapped$class__$init$__Lscala_collection_GenSeqViewLike$FlatMapped__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$FlatMapped$class.js.map
