ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function($$this) {
  return ScalaJS.as.scala_collection_LinearSeq($$this)
});
ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function($$this, repr) {
  return ScalaJS.as.scala_collection_LinearSeq(repr)
});
ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I = (function($$this) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().seqHash__Lscala_collection_Seq__I($$this.seq__Lscala_collection_LinearSeq())
});
ScalaJS.impls.scala_collection_LinearSeqLike$class__iterator__Lscala_collection_LinearSeqLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_LinearSeqLike$$anon$1().init___Lscala_collection_LinearSeqLike($$this)
});
ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z = (function($$this, that, p) {
  tailCallLoop: while (true) {
    if ($$this.isEmpty__Z()) {
      return that.isEmpty__Z()
    } else {
      if ((that.nonEmpty__Z() && ScalaJS.uZ(p.apply__O__O__O($$this.head__O(), that.head__O())))) {
        var temp$$$this = ScalaJS.as.scala_collection_LinearSeqLike($$this.tail__O());
        var temp$that = ScalaJS.as.scala_collection_GenSeq(that.tail__O());
        $$this = temp$$$this;
        that = temp$that;
        continue tailCallLoop
      } else {
        return false
      }
    }
  }
});
ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=LinearSeqLike$class.js.map
