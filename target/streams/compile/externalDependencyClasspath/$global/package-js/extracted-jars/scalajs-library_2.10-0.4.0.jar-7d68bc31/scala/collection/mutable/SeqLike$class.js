ScalaJS.impls.scala_collection_mutable_SeqLike$class__parCombiner__Lscala_collection_mutable_SeqLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParSeq().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_mutable_SeqLike$class__transform__Lscala_collection_mutable_SeqLike__Lscala_Function1__Lscala_collection_mutable_SeqLike = (function($$this, f) {
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, i$1, f$1) {
    return (function(el) {
      arg$outer.update__I__O__V(i$1.elem$1, f$1.apply__O__O(el));
      i$1.elem$1 = (i$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })($$this, i, f)));
  return $$this
});
ScalaJS.impls.scala_collection_mutable_SeqLike$class__$init$__Lscala_collection_mutable_SeqLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SeqLike$class.js.map
