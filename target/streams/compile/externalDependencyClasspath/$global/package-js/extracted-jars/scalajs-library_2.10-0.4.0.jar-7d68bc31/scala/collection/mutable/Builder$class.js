ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V = (function($$this, size$4) {
  /*<skip>*/
});
ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V = (function($$this, coll) {
  if (ScalaJS.is.scala_collection_IndexedSeqLike(coll)) {
    $$this.sizeHint__I__V(coll.size__I())
  }
});
ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V = (function($$this, coll, delta) {
  if (ScalaJS.is.scala_collection_IndexedSeqLike(coll)) {
    $$this.sizeHint__I__V((coll.size__I() + delta))
  }
});
ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V = (function($$this, size, boundingColl) {
  if (ScalaJS.is.scala_collection_IndexedSeqLike(boundingColl)) {
    $$this.sizeHint__I__V(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(size), boundingColl.size__I()))
  }
});
ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder = (function($$this, f) {
  return new ScalaJS.c.scala_collection_mutable_Builder$$anon$1().init___Lscala_collection_mutable_Builder__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Builder$class.js.map
