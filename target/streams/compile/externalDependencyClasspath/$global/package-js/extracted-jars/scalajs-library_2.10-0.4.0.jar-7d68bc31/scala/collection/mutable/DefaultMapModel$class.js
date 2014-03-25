ScalaJS.impls.scala_collection_mutable_DefaultMapModel$class__get__Lscala_collection_mutable_DefaultMapModel__O__Lscala_Option = (function($$this, key) {
  var e = $$this.findEntry__O__Lscala_collection_mutable_DefaultEntry(key);
  if (ScalaJS.anyRefEqEq(e, null)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(e.value__O())
  }
});
ScalaJS.impls.scala_collection_mutable_DefaultMapModel$class__put__Lscala_collection_mutable_DefaultMapModel__O__O__Lscala_Option = (function($$this, key, value) {
  var e = $$this.findEntry__O__Lscala_collection_mutable_DefaultEntry(key);
  if (ScalaJS.anyRefEqEq(e, null)) {
    $$this.addEntry__Lscala_collection_mutable_DefaultEntry__V(new ScalaJS.c.scala_collection_mutable_DefaultEntry().init___O__O(key, value));
    return ScalaJS.modules.scala_None()
  } else {
    var v = e.value__O();
    e.value$und$eq__O__V(value);
    return new ScalaJS.c.scala_Some().init___O(v)
  }
});
ScalaJS.impls.scala_collection_mutable_DefaultMapModel$class__$plus$eq__Lscala_collection_mutable_DefaultMapModel__Lscala_Tuple2__Lscala_collection_mutable_DefaultMapModel = (function($$this, kv) {
  $$this.put__O__O__Lscala_Option(kv.$$und1__O(), kv.$$und2__O());
  return $$this
});
ScalaJS.impls.scala_collection_mutable_DefaultMapModel$class__iterator__Lscala_collection_mutable_DefaultMapModel__Lscala_collection_Iterator = (function($$this) {
  return $$this.entries__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(e) {
      return new ScalaJS.c.scala_Tuple2().init___O__O(e.key__O(), e.value__O())
    })
  })()))
});
ScalaJS.impls.scala_collection_mutable_DefaultMapModel$class__$init$__Lscala_collection_mutable_DefaultMapModel__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=DefaultMapModel$class.js.map
