ScalaJS.impls.scala_collection_Parallelizable$class__par__Lscala_collection_Parallelizable__Lscala_collection_Parallel = (function($$this) {
  var cb = $$this.parCombiner__Lscala_collection_parallel_Combiner();
  $$this.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(cb$1) {
    return (function(x) {
      return ScalaJS.as.scala_collection_parallel_Combiner(cb$1.$$plus$eq__O__Lscala_collection_mutable_Builder(x))
    })
  })(cb)));
  return ScalaJS.as.scala_collection_Parallel(cb.result__O())
});
ScalaJS.impls.scala_collection_Parallelizable$class__$init$__Lscala_collection_Parallelizable__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Parallelizable$class.js.map
