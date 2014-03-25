ScalaJS.impls.scala_collection_immutable_MapLike$class__parCombiner__Lscala_collection_immutable_MapLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_immutable_ParMap().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__updated__Lscala_collection_immutable_MapLike__O__O__Lscala_collection_immutable_Map = (function($$this, key, value) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(new ScalaJS.c.scala_Tuple2().init___O__O(key, value))
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__$plus__Lscala_collection_immutable_MapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map = (function($$this, elem1, elem2, elems) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(elem1).$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(elems)
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__$plus$plus__Lscala_collection_immutable_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map = (function($$this, xs) {
  var x$1 = ScalaJS.as.scala_collection_immutable_Map($$this.repr__O());
  return ScalaJS.as.scala_collection_immutable_Map(xs.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return x$2.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map(x$3)
    })
  })())))
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__filterKeys__Lscala_collection_immutable_MapLike__Lscala_Function1__Lscala_collection_immutable_Map = (function($$this, p) {
  return new ScalaJS.c.scala_collection_immutable_MapLike$$anon$1().init___Lscala_collection_immutable_MapLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__mapValues__Lscala_collection_immutable_MapLike__Lscala_Function1__Lscala_collection_immutable_Map = (function($$this, f) {
  return new ScalaJS.c.scala_collection_immutable_MapLike$$anon$2().init___Lscala_collection_immutable_MapLike__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__keySet__Lscala_collection_immutable_MapLike__Lscala_collection_immutable_Set = (function($$this) {
  return new ScalaJS.c.scala_collection_immutable_MapLike$ImmutableDefaultKeySet().init___Lscala_collection_immutable_MapLike($$this)
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__transform__Lscala_collection_immutable_MapLike__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  $$this.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$1 = true;
          break matchEnd3
        };
        var jsx$1 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$1)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, f$2) {
    return (function(x$4) {
      var x1 = x$4;
      if ((x1 !== null)) {
        var key = x1.$$und1__O();
        var value = x1.$$und2__O();
        return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(key, f$2.apply__O__O__O(key, value)))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(b, f)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_immutable_MapLike$class__$init$__Lscala_collection_immutable_MapLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=MapLike$class.js.map
