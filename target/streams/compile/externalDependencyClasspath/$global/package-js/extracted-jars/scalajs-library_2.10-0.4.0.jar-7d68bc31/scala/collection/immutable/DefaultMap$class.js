ScalaJS.impls.scala_collection_immutable_DefaultMap$class__$plus__Lscala_collection_immutable_DefaultMap__Lscala_Tuple2__Lscala_collection_immutable_Map = (function($$this, kv) {
  var b = ScalaJS.modules.scala_collection_immutable_Map().newBuilder__Lscala_collection_mutable_Builder();
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this);
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(kv.$$und1__O(), kv.$$und2__O()));
  return ScalaJS.as.scala_collection_immutable_Map(b.result__O())
});
ScalaJS.impls.scala_collection_immutable_DefaultMap$class__$minus__Lscala_collection_immutable_DefaultMap__O__Lscala_collection_immutable_Map = (function($$this, key) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  $$this.seq__Lscala_collection_immutable_Map().withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(key$1) {
    return (function(kv) {
      return ScalaJS.bZ((!ScalaJS.anyEqEq(kv.$$und1__O(), key$1)))
    })
  })(key))).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1) {
    return (function(kv) {
      return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(kv)
    })
  })(b)));
  return ScalaJS.as.scala_collection_immutable_Map(b.result__O())
});
ScalaJS.impls.scala_collection_immutable_DefaultMap$class__$init$__Lscala_collection_immutable_DefaultMap__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=DefaultMap$class.js.map
