ScalaJS.impls.scala_collection_SortedMap$Default$class__$plus__Lscala_collection_SortedMap$Default__Lscala_Tuple2__Lscala_collection_SortedMap = (function($$this, kv) {
  var b = ScalaJS.modules.scala_collection_SortedMap().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder($$this.ordering__Lscala_math_Ordering());
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this);
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(kv.$$und1__O(), kv.$$und2__O()));
  return ScalaJS.as.scala_collection_SortedMap(b.result__O())
});
ScalaJS.impls.scala_collection_SortedMap$Default$class__$minus__Lscala_collection_SortedMap$Default__O__Lscala_collection_SortedMap = (function($$this, key) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  $$this.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(key$1) {
    return (function(kv) {
      return ScalaJS.bZ((!ScalaJS.anyEqEq(kv.$$und1__O(), key$1)))
    })
  })(key))).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1) {
    return (function(kv) {
      return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(kv)
    })
  })(b)));
  return ScalaJS.as.scala_collection_SortedMap(b.result__O())
});
ScalaJS.impls.scala_collection_SortedMap$Default$class__$init$__Lscala_collection_SortedMap$Default__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SortedMap$Default$class.js.map
