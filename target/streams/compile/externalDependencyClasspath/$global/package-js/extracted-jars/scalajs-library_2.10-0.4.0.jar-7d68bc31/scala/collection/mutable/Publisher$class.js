ScalaJS.impls.scala_collection_mutable_Publisher$class__subscribe__Lscala_collection_mutable_Publisher__Lscala_collection_mutable_Subscriber__V = (function($$this, sub) {
  $$this.subscribe__Lscala_collection_mutable_Subscriber__Lscala_Function1__V(sub, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(event) {
      return ScalaJS.bZ(true)
    })
  })()))
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__subscribe__Lscala_collection_mutable_Publisher__Lscala_collection_mutable_Subscriber__Lscala_Function1__V = (function($$this, sub, filter) {
  ScalaJS.as.scala_collection_mutable_MultiMap($$this.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap()).addBinding__O__O__Lscala_collection_mutable_MultiMap(sub, filter)
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__suspendSubscription__Lscala_collection_mutable_Publisher__Lscala_collection_mutable_Subscriber__V = (function($$this, sub) {
  $$this.scala$collection$mutable$Publisher$$suspended__Lscala_collection_mutable_HashSet().$$plus$eq__O__Lscala_collection_mutable_HashSet(sub)
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__activateSubscription__Lscala_collection_mutable_Publisher__Lscala_collection_mutable_Subscriber__V = (function($$this, sub) {
  $$this.scala$collection$mutable$Publisher$$suspended__Lscala_collection_mutable_HashSet().$$minus$eq__O__Lscala_collection_mutable_HashSet(sub)
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__removeSubscription__Lscala_collection_mutable_Publisher__Lscala_collection_mutable_Subscriber__V = (function($$this, sub) {
  $$this.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap().$$minus$eq__O__Lscala_collection_mutable_HashMap(sub)
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__removeSubscriptions__Lscala_collection_mutable_Publisher__V = (function($$this) {
  $$this.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap().clear__V()
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__publish__Lscala_collection_mutable_Publisher__O__V = (function($$this, event) {
  $$this.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap().keys__Lscala_collection_Iterable().foreach__Lscala_Function1__V(new ScalaJS.c.scala_collection_mutable_Publisher$$anonfun$publish$1().init___Lscala_collection_mutable_Publisher__O($$this, event))
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__equals__Lscala_collection_mutable_Publisher__O__Z = (function($$this, obj) {
  var x1 = obj;
  if (ScalaJS.is.scala_collection_mutable_Publisher(x1)) {
    var x2 = ScalaJS.as.scala_collection_mutable_Publisher(x1);
    return (ScalaJS.anyRefEqEq($$this.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap(), x2.scala$collection$mutable$Publisher$$filters__Lscala_collection_mutable_HashMap()) && ScalaJS.anyRefEqEq($$this.scala$collection$mutable$Publisher$$suspended__Lscala_collection_mutable_HashSet(), x2.scala$collection$mutable$Publisher$$suspended__Lscala_collection_mutable_HashSet()))
  };
  return false
});
ScalaJS.impls.scala_collection_mutable_Publisher$class__$init$__Lscala_collection_mutable_Publisher__V = (function($$this) {
  $$this.scala$collection$mutable$Publisher$$undsetter$und$self$und$eq__Lscala_collection_mutable_Publisher__V($$this);
  $$this.scala$collection$mutable$Publisher$$undsetter$und$scala$collection$mutable$Publisher$$filters$und$eq__Lscala_collection_mutable_HashMap__V(new ScalaJS.c.scala_collection_mutable_Publisher$$anon$1().init___Lscala_collection_mutable_Publisher($$this));
  $$this.scala$collection$mutable$Publisher$$undsetter$und$scala$collection$mutable$Publisher$$suspended$und$eq__Lscala_collection_mutable_HashSet__V(new ScalaJS.c.scala_collection_mutable_HashSet().init___())
});
//@ sourceMappingURL=Publisher$class.js.map
