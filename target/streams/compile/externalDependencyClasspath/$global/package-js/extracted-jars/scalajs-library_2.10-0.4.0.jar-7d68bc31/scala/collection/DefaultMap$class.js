ScalaJS.impls.scala_collection_DefaultMap$class__$plus__Lscala_collection_DefaultMap__Lscala_Tuple2__Lscala_collection_Map = (function($$this, kv) {
  var b = ScalaJS.modules.scala_collection_Map().newBuilder__Lscala_collection_mutable_Builder();
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this);
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(kv.$$und1__O(), kv.$$und2__O()));
  return ScalaJS.as.scala_collection_Map(b.result__O())
});
ScalaJS.impls.scala_collection_DefaultMap$class__$minus__Lscala_collection_DefaultMap__O__Lscala_collection_Map = (function($$this, key) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_TraversableOnce($$this.filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(key$1) {
    return (function(x$1) {
      return ScalaJS.bZ((!ScalaJS.anyEqEq(key$1, x$1.$$und1__O())))
    })
  })(key)))));
  return ScalaJS.as.scala_collection_Map(b.result__O())
});
ScalaJS.impls.scala_collection_DefaultMap$class__$init$__Lscala_collection_DefaultMap__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=DefaultMap$class.js.map
