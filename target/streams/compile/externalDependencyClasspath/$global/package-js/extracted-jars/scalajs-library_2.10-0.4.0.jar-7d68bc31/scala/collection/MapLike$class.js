ScalaJS.impls.scala_collection_MapLike$class__newBuilder__Lscala_collection_MapLike__Lscala_collection_mutable_Builder = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_MapBuilder().init___Lscala_collection_GenMap($$this.empty__Lscala_collection_Map())
});
ScalaJS.impls.scala_collection_MapLike$class__isEmpty__Lscala_collection_MapLike__Z = (function($$this) {
  return ($$this.size__I() === 0)
});
ScalaJS.impls.scala_collection_MapLike$class__getOrElse__Lscala_collection_MapLike__O__Lscala_Function0__O = (function($$this, key, default$2) {
  var x1 = $$this.get__O__Lscala_Option(key);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var v = x2.x__O();
    return v
  };
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return default$2.apply__O()
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_collection_MapLike$class__apply__Lscala_collection_MapLike__O__O = (function($$this, key) {
  var x1 = $$this.get__O__Lscala_Option(key);
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return $$this.$default__O__O(key)
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var value = x2.x__O();
    return value
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_collection_MapLike$class__contains__Lscala_collection_MapLike__O__Z = (function($$this, key) {
  return $$this.get__O__Lscala_Option(key).isDefined__Z()
});
ScalaJS.impls.scala_collection_MapLike$class__isDefinedAt__Lscala_collection_MapLike__O__Z = (function($$this, key) {
  return $$this.contains__O__Z(key)
});
ScalaJS.impls.scala_collection_MapLike$class__keySet__Lscala_collection_MapLike__Lscala_collection_Set = (function($$this) {
  return new ScalaJS.c.scala_collection_MapLike$DefaultKeySet().init___Lscala_collection_MapLike($$this)
});
ScalaJS.impls.scala_collection_MapLike$class__keysIterator__Lscala_collection_MapLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_MapLike$$anon$1().init___Lscala_collection_MapLike($$this)
});
ScalaJS.impls.scala_collection_MapLike$class__keys__Lscala_collection_MapLike__Lscala_collection_Iterable = (function($$this) {
  return $$this.keySet__Lscala_collection_Set()
});
ScalaJS.impls.scala_collection_MapLike$class__values__Lscala_collection_MapLike__Lscala_collection_Iterable = (function($$this) {
  return new ScalaJS.c.scala_collection_MapLike$DefaultValuesIterable().init___Lscala_collection_MapLike($$this)
});
ScalaJS.impls.scala_collection_MapLike$class__valuesIterator__Lscala_collection_MapLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_MapLike$$anon$2().init___Lscala_collection_MapLike($$this)
});
ScalaJS.impls.scala_collection_MapLike$class__default__Lscala_collection_MapLike__O__O = (function($$this, key) {
  throw new ScalaJS.c.java_util_NoSuchElementException().init___T(("key not found: " + key))
});
ScalaJS.impls.scala_collection_MapLike$class__filterKeys__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map = (function($$this, p) {
  return new ScalaJS.c.scala_collection_MapLike$FilteredKeys().init___Lscala_collection_MapLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_MapLike$class__mapValues__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map = (function($$this, f) {
  return new ScalaJS.c.scala_collection_MapLike$MappedValues().init___Lscala_collection_MapLike__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_MapLike$class__updated__Lscala_collection_MapLike__O__O__Lscala_collection_Map = (function($$this, key, value) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_Map(new ScalaJS.c.scala_Tuple2().init___O__O(key, value))
});
ScalaJS.impls.scala_collection_MapLike$class__$plus__Lscala_collection_MapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function($$this, kv1, kv2, kvs) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_Map(kv1).$$plus__Lscala_Tuple2__Lscala_collection_Map(kv2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map(kvs)
});
ScalaJS.impls.scala_collection_MapLike$class__$plus$plus__Lscala_collection_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function($$this, xs) {
  var x$3 = ScalaJS.as.scala_collection_Map($$this.repr__O());
  return ScalaJS.as.scala_collection_Map(xs.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$3, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$4, x$5) {
      return x$4.$$plus__Lscala_Tuple2__Lscala_collection_Map(x$5)
    })
  })())))
});
ScalaJS.impls.scala_collection_MapLike$class__filterNot__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map = (function($$this, p) {
  var res = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.as.scala_collection_Map($$this.repr__O()));
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(res$1, p$1) {
    return (function(kv) {
      if (ScalaJS.uZ(p$1.apply__O__O(kv))) {
        res$1.elem$1 = ScalaJS.as.scala_collection_Map(res$1.elem$1).$$minus__O__Lscala_collection_Map(kv.$$und1__O())
      };
      return ScalaJS.bV(undefined)
    })
  })(res, p)));
  return ScalaJS.as.scala_collection_Map(res.elem$1)
});
ScalaJS.impls.scala_collection_MapLike$class__toSeq__Lscala_collection_MapLike__Lscala_collection_Seq = (function($$this) {
  return $$this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.impls.scala_collection_MapLike$class__toBuffer__Lscala_collection_MapLike__Lscala_collection_mutable_Buffer = (function($$this) {
  var result = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___I($$this.size__I());
  $$this.copyToBuffer__Lscala_collection_mutable_Buffer__V(result);
  return result
});
ScalaJS.impls.scala_collection_MapLike$class__parCombiner__Lscala_collection_MapLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_ParMap().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_MapLike$class__addString__Lscala_collection_MapLike__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function($$this, b, start, sep, end) {
  return $$this.iterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      if ((x1 !== null)) {
        var k = x1.$$und1__O();
        var v = x1.$$und2__O();
        return (("" + ScalaJS.modules.scala_runtime_StringAdd().$$plus$extension__O__T__T(ScalaJS.modules.scala_Predef().any2stringadd__O__O(k), " -> ")) + v)
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })())).addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b, start, sep, end)
});
ScalaJS.impls.scala_collection_MapLike$class__stringPrefix__Lscala_collection_MapLike__T = (function($$this) {
  return "Map"
});
ScalaJS.impls.scala_collection_MapLike$class__toString__Lscala_collection_MapLike__T = (function($$this) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toString__Lscala_collection_TraversableLike__T($$this)
});
ScalaJS.impls.scala_collection_MapLike$class__$init$__Lscala_collection_MapLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=MapLike$class.js.map
