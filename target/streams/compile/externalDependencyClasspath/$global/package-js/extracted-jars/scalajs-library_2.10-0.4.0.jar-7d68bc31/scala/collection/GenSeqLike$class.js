ScalaJS.impls.scala_collection_GenSeqLike$class__isDefinedAt__Lscala_collection_GenSeqLike__I__Z = (function($$this, idx) {
  return ((idx >= 0) && (idx < $$this.length__I()))
});
ScalaJS.impls.scala_collection_GenSeqLike$class__prefixLength__Lscala_collection_GenSeqLike__Lscala_Function1__I = (function($$this, p) {
  return $$this.segmentLength__Lscala_Function1__I__I(p, 0)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__indexWhere__Lscala_collection_GenSeqLike__Lscala_Function1__I = (function($$this, p) {
  return $$this.indexWhere__Lscala_Function1__I__I(p, 0)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__indexOf__Lscala_collection_GenSeqLike__O__I = (function($$this, elem) {
  return $$this.indexOf__O__I__I(elem, 0)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__indexOf__Lscala_collection_GenSeqLike__O__I__I = (function($$this, elem, from) {
  return $$this.indexWhere__Lscala_Function1__I__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elem$1) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(elem$1, x$1))
    })
  })(elem)), from)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexOf__Lscala_collection_GenSeqLike__O__I = (function($$this, elem) {
  return $$this.lastIndexWhere__Lscala_Function1__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elem$2) {
    return (function(x$2) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(elem$2, x$2))
    })
  })(elem)))
});
ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexOf__Lscala_collection_GenSeqLike__O__I__I = (function($$this, elem, end) {
  return $$this.lastIndexWhere__Lscala_Function1__I__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elem$3) {
    return (function(x$3) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(elem$3, x$3))
    })
  })(elem)), end)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__lastIndexWhere__Lscala_collection_GenSeqLike__Lscala_Function1__I = (function($$this, p) {
  return $$this.lastIndexWhere__Lscala_Function1__I__I(p, ($$this.length__I() - 1))
});
ScalaJS.impls.scala_collection_GenSeqLike$class__startsWith__Lscala_collection_GenSeqLike__Lscala_collection_GenSeq__Z = (function($$this, that) {
  return $$this.startsWith__Lscala_collection_GenSeq__I__Z(that, 0)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__union__Lscala_collection_GenSeqLike__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  return $$this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that, bf)
});
ScalaJS.impls.scala_collection_GenSeqLike$class__hashCode__Lscala_collection_GenSeqLike__I = (function($$this) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().seqHash__Lscala_collection_Seq__I($$this.seq__Lscala_collection_Seq())
});
ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_GenSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_GenSeq(x1);
    return (x2.canEqual__O__Z($$this) && $$this.sameElements__Lscala_collection_GenIterable__Z(x2))
  };
  return false
});
ScalaJS.impls.scala_collection_GenSeqLike$class__$init$__Lscala_collection_GenSeqLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSeqLike$class.js.map
