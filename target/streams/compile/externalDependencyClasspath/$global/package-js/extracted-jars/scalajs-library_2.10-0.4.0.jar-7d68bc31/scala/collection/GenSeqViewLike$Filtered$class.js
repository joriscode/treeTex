ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__index__Lscala_collection_GenSeqViewLike$Filtered__AI = (function($$this) {
  var len = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  var arr = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [$$this.scala$collection$GenSeqViewLike$Filtered$$$outer__Lscala_collection_GenSeqViewLike().length__I()]);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), $$this.scala$collection$GenSeqViewLike$Filtered$$$outer__Lscala_collection_GenSeqViewLike().length__I()).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, len$1, arr$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      if (ScalaJS.uZ(arg$outer.pred__Lscala_Function1().apply__O__O(arg$outer.scala$collection$GenSeqViewLike$Filtered$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O(i)))) {
        arr$1.underlying[len$1.elem$1] = i;
        len$1.elem$1 = (len$1.elem$1 + 1)
      };
      return ScalaJS.bV(undefined)
    })
  })($$this, len, arr)));
  return ScalaJS.asArrayOf.scala_Int(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(arr).take__I__O(len.elem$1), 1)
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__length__Lscala_collection_GenSeqViewLike$Filtered__I = (function($$this) {
  return $$this.index__AI().underlying.length
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__apply__Lscala_collection_GenSeqViewLike$Filtered__I__O = (function($$this, idx) {
  return $$this.scala$collection$GenSeqViewLike$Filtered$$$outer__Lscala_collection_GenSeqViewLike().apply__I__O($$this.index__AI().underlying[idx])
});
ScalaJS.impls.scala_collection_GenSeqViewLike$Filtered$class__$init$__Lscala_collection_GenSeqViewLike$Filtered__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqViewLike$Filtered$class.js.map
