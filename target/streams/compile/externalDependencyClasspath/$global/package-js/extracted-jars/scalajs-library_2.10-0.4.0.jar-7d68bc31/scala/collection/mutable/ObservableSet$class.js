ScalaJS.impls.scala_collection_mutable_ObservableSet$class__$plus$eq__Lscala_collection_mutable_ObservableSet__O__Lscala_collection_mutable_ObservableSet = (function($$this, elem) {
  if ((!$$this.contains__O__Z(elem))) {
    $$this.scala$collection$mutable$ObservableSet$$super$$plus$eq__O__Lscala_collection_mutable_ObservableSet(elem);
    $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$1().init___Lscala_collection_mutable_ObservableSet__O($$this, elem))
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableSet$class__$minus$eq__Lscala_collection_mutable_ObservableSet__O__Lscala_collection_mutable_ObservableSet = (function($$this, elem) {
  if ($$this.contains__O__Z(elem)) {
    $$this.scala$collection$mutable$ObservableSet$$super$$minus$eq__O__Lscala_collection_mutable_ObservableSet(elem);
    $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$2().init___Lscala_collection_mutable_ObservableSet__O($$this, elem))
  };
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableSet$class__clear__Lscala_collection_mutable_ObservableSet__V = (function($$this) {
  $$this.scala$collection$mutable$ObservableSet$$super$clear__V();
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableSet$$anon$3().init___Lscala_collection_mutable_ObservableSet($$this))
});
ScalaJS.impls.scala_collection_mutable_ObservableSet$class__$init$__Lscala_collection_mutable_ObservableSet__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ObservableSet$class.js.map
