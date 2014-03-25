ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I = (function($$this) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().seqHash__Lscala_collection_Seq__I($$this.seq__Lscala_collection_IndexedSeq())
});
ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq = (function($$this) {
  return ScalaJS.as.scala_collection_IndexedSeq($$this)
});
ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq = (function($$this, repr) {
  return ScalaJS.as.scala_collection_IndexedSeq(repr)
});
ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_IndexedSeqLike$Elements().init___Lscala_collection_IndexedSeqLike__I__I($$this, 0, $$this.length__I())
});
ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer = (function($$this) {
  var result = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___I($$this.size__I());
  $$this.copyToBuffer__Lscala_collection_mutable_Buffer__V(result);
  return result
});
ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=IndexedSeqLike$class.js.map
