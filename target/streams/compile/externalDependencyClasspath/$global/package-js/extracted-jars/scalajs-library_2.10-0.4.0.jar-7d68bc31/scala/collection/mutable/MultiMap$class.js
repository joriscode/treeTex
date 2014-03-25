ScalaJS.impls.scala_collection_mutable_MultiMap$class__makeSet__Lscala_collection_mutable_MultiMap__Lscala_collection_mutable_Set = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_HashSet().init___()
});
ScalaJS.impls.scala_collection_mutable_MultiMap$class__addBinding__Lscala_collection_mutable_MultiMap__O__O__Lscala_collection_mutable_MultiMap = (function($$this, key, value) {
  var x1 = $$this.get__O__Lscala_Option(key);
  matchEnd5: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      var set = $$this.makeSet__Lscala_collection_mutable_Set();
      set.$$plus$eq__O__Lscala_collection_mutable_SetLike(value);
      $$this.update__O__O__V(key, set);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var set$2 = ScalaJS.as.scala_collection_mutable_Set(x2.x__O());
      set$2.$$plus$eq__O__Lscala_collection_mutable_SetLike(value);
      break matchEnd5
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_MultiMap$class__removeBinding__Lscala_collection_mutable_MultiMap__O__O__Lscala_collection_mutable_MultiMap = (function($$this, key, value) {
  var x1 = $$this.get__O__Lscala_Option(key);
  matchEnd5: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var set = ScalaJS.as.scala_collection_mutable_Set(x2.x__O());
      set.$$minus$eq__O__Lscala_collection_mutable_SetLike(value);
      if (set.isEmpty__Z()) {
        $$this.$$minus$eq__O__Lscala_collection_mutable_MapLike(key);
        break matchEnd5
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd5
      }
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_MultiMap$class__entryExists__Lscala_collection_mutable_MultiMap__O__Lscala_Function1__Z = (function($$this, key, p) {
  var x1 = $$this.get__O__Lscala_Option(key);
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return false
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var set = ScalaJS.as.scala_collection_mutable_Set(x2.x__O());
    return set.exists__Lscala_Function1__Z(p)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_collection_mutable_MultiMap$class__$init$__Lscala_collection_mutable_MultiMap__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=MultiMap$class.js.map
