ScalaJS.impls.scala_collection_mutable_ObservableMap$class__$plus$eq__Lscala_collection_mutable_ObservableMap__Lscala_Tuple2__Lscala_collection_mutable_ObservableMap = (function($$this, kv) {
  var x1 = kv;
  matchEnd3: {
    if ((x1 !== null)) {
      var key = x1.$$und1__O();
      var value = x1.$$und2__O();
      var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(key, value);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var key$2 = x$1.$$und1__O();
  var value$2 = x$1.$$und2__O();
  var x1$2 = $$this.get__O__Lscala_Option(key$2);
  matchEnd5: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1$2)) {
      $$this.scala$collection$mutable$ObservableMap$$super$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ObservableMap(kv);
      $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$1().init___Lscala_collection_mutable_ObservableMap__O__O($$this, key$2, value$2));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    if (ScalaJS.is.scala_Some(x1$2)) {
      var x2 = ScalaJS.as.scala_Some(x1$2);
      var old = x2.x__O();
      $$this.scala$collection$mutable$ObservableMap$$super$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_ObservableMap(kv);
      $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$2().init___Lscala_collection_mutable_ObservableMap__O__O__O($$this, key$2, value$2, old));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1$2)
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableMap$class__$minus$eq__Lscala_collection_mutable_ObservableMap__O__Lscala_collection_mutable_ObservableMap = (function($$this, key) {
  var x1 = $$this.get__O__Lscala_Option(key);
  matchEnd5: {
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var old = x2.x__O();
      $$this.scala$collection$mutable$ObservableMap$$super$$minus$eq__O__Lscala_collection_mutable_ObservableMap(key);
      $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$3().init___Lscala_collection_mutable_ObservableMap__O__O($$this, old, key));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd5
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableMap$class__clear__Lscala_collection_mutable_ObservableMap__V = (function($$this) {
  $$this.scala$collection$mutable$ObservableMap$$super$clear__V();
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableMap$$anon$4().init___Lscala_collection_mutable_ObservableMap($$this))
});
ScalaJS.impls.scala_collection_mutable_ObservableMap$class__$init$__Lscala_collection_mutable_ObservableMap__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ObservableMap$class.js.map
