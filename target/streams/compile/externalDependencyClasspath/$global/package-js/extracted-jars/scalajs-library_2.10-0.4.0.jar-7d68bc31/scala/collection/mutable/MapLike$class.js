ScalaJS.impls.scala_collection_mutable_MapLike$class__newBuilder__Lscala_collection_mutable_MapLike__Lscala_collection_mutable_Builder = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Builder($$this.empty__Lscala_collection_Map())
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__parCombiner__Lscala_collection_mutable_MapLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_mutable_ParMap().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__put__Lscala_collection_mutable_MapLike__O__O__Lscala_Option = (function($$this, key, value) {
  var r = $$this.get__O__Lscala_Option(key);
  $$this.update__O__O__V(key, value);
  return r
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__update__Lscala_collection_mutable_MapLike__O__O__V = (function($$this, key, value) {
  $$this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike(new ScalaJS.c.scala_Tuple2().init___O__O(key, value))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__updated__Lscala_collection_mutable_MapLike__O__O__Lscala_collection_mutable_Map = (function($$this, key, value) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(new ScalaJS.c.scala_Tuple2().init___O__O(key, value))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$plus__Lscala_collection_mutable_MapLike__Lscala_Tuple2__Lscala_collection_mutable_Map = (function($$this, kv) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.clone__Lscala_collection_mutable_Map().$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike(kv))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$plus__Lscala_collection_mutable_MapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map = (function($$this, elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.clone__Lscala_collection_mutable_Map().$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike(elem1).$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike(elem2).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(elems))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$plus$plus__Lscala_collection_mutable_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map = (function($$this, xs) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.clone__Lscala_collection_mutable_Map().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__remove__Lscala_collection_mutable_MapLike__O__Lscala_Option = (function($$this, key) {
  var r = $$this.get__O__Lscala_Option(key);
  $$this.$$minus$eq__O__Lscala_collection_mutable_MapLike(key);
  return r
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$minus__Lscala_collection_mutable_MapLike__O__Lscala_collection_mutable_Map = (function($$this, key) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.clone__Lscala_collection_mutable_Map().$$minus$eq__O__Lscala_collection_mutable_MapLike(key))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__clear__Lscala_collection_mutable_MapLike__V = (function($$this) {
  $$this.keysIterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(key) {
      return arg$outer.$$minus$eq__O__Lscala_collection_mutable_MapLike(key)
    })
  })($$this)))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__getOrElseUpdate__Lscala_collection_mutable_MapLike__O__Lscala_Function0__O = (function($$this, key, op) {
  var x1 = $$this.get__O__Lscala_Option(key);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var v = x2.x__O();
    return v
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    var d = op.apply__O();
    $$this.update__O__O__V(key, d);
    return d
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__transform__Lscala_collection_mutable_MapLike__Lscala_Function2__Lscala_collection_mutable_MapLike = (function($$this, f) {
  $$this.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, f$1) {
    return (function(x0$1) {
      var x1 = x0$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var key = x1.$$und1__O();
          var value = x1.$$und2__O();
          arg$outer.update__O__O__V(key, f$1.apply__O__O__O(key, value));
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })($$this, f)));
  return $$this
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__retain__Lscala_collection_mutable_MapLike__Lscala_Function2__Lscala_collection_mutable_MapLike = (function($$this, p) {
  $$this.seq__Lscala_collection_Map().withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
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
  })())).withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$1) {
    return (function(x$1) {
      var x1 = x$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var k = x1.$$und1__O();
          var v = x1.$$und2__O();
          var jsx$2 = (!ScalaJS.uZ(p$1.apply__O__O__O(k, v)));
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bZ(jsx$2)
    })
  })(p))).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$2) {
      var x1 = x$2;
      if ((x1 !== null)) {
        var k = x1.$$und1__O();
        return arg$outer.$$minus$eq__O__Lscala_collection_mutable_MapLike(k)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })($$this)));
  return $$this
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__clone__Lscala_collection_mutable_MapLike__Lscala_collection_mutable_Map = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Map(ScalaJS.as.scala_collection_generic_Growable($$this.empty__Lscala_collection_Map()).$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_TraversableOnce($$this.repr__O())))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__result__Lscala_collection_mutable_MapLike__Lscala_collection_mutable_Map = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.repr__O())
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$minus__Lscala_collection_mutable_MapLike__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map = (function($$this, elem1, elem2, elems) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.clone__Lscala_collection_mutable_Map().$$minus$eq__O__Lscala_collection_mutable_MapLike(elem1).$$minus$eq__O__Lscala_collection_mutable_MapLike(elem2).$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(elems))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$minus$minus__Lscala_collection_mutable_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map = (function($$this, xs) {
  return ScalaJS.as.scala_collection_mutable_Map($$this.clone__Lscala_collection_mutable_Map().$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(xs.seq__Lscala_collection_TraversableOnce()))
});
ScalaJS.impls.scala_collection_mutable_MapLike$class__$init$__Lscala_collection_mutable_MapLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=MapLike$class.js.map
