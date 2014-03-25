ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__$plus$eq__Lscala_collection_mutable_ObservableBuffer__O__Lscala_collection_mutable_ObservableBuffer = (function($$this, element) {
  $$this.scala$collection$mutable$ObservableBuffer$$super$$plus$eq__O__Lscala_collection_mutable_ObservableBuffer(element);
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$2().init___Lscala_collection_mutable_ObservableBuffer__O($$this, element));
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__$plus$plus$eq__Lscala_collection_mutable_ObservableBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_ObservableBuffer = (function($$this, xs) {
  xs.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      return arg$outer.$$plus$eq__O__Lscala_collection_mutable_ObservableBuffer(x)
    })
  })($$this)));
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__$plus$eq$colon__Lscala_collection_mutable_ObservableBuffer__O__Lscala_collection_mutable_ObservableBuffer = (function($$this, element) {
  $$this.scala$collection$mutable$ObservableBuffer$$super$$plus$eq$colon__O__Lscala_collection_mutable_ObservableBuffer(element);
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$3().init___Lscala_collection_mutable_ObservableBuffer__O($$this, element));
  return $$this
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__update__Lscala_collection_mutable_ObservableBuffer__I__O__V = (function($$this, n, newelement) {
  var oldelement = $$this.apply__I__O(n);
  $$this.scala$collection$mutable$ObservableBuffer$$super$update__I__O__V(n, newelement);
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$4().init___Lscala_collection_mutable_ObservableBuffer__O__I__O($$this, oldelement, n, newelement))
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__remove__Lscala_collection_mutable_ObservableBuffer__I__O = (function($$this, n) {
  var oldelement = $$this.apply__I__O(n);
  $$this.scala$collection$mutable$ObservableBuffer$$super$remove__I__O(n);
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$5().init___Lscala_collection_mutable_ObservableBuffer__O__I($$this, oldelement, n));
  return oldelement
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__clear__Lscala_collection_mutable_ObservableBuffer__V = (function($$this) {
  $$this.scala$collection$mutable$ObservableBuffer$$super$clear__V();
  $$this.publish__O__V(new ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$6().init___Lscala_collection_mutable_ObservableBuffer($$this))
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__insertAll__Lscala_collection_mutable_ObservableBuffer__I__Lscala_collection_Traversable__V = (function($$this, n, elems) {
  $$this.scala$collection$mutable$ObservableBuffer$$super$insertAll__I__Lscala_collection_Traversable__V(n, elems);
  var curr = new ScalaJS.c.scala_runtime_IntRef().init___I((n - 1));
  var msg = ScalaJS.as.scala_collection_script_Script(elems.foldLeft__O__Lscala_Function2__O(new ScalaJS.c.scala_collection_mutable_ObservableBuffer$$anon$1().init___Lscala_collection_mutable_ObservableBuffer($$this), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(curr$1) {
    return (function(x0$1, x1$1) {
      var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(x0$1, x1$1);
      if ((x1 !== null)) {
        var msg = ScalaJS.as.scala_collection_script_Script(x1.$$und1__O());
        var elem = x1.$$und2__O();
        curr$1.elem$1 = (curr$1.elem$1 + 1);
        return ScalaJS.as.scala_collection_script_Script(msg.$$plus$eq__O__Lscala_collection_mutable_ArrayBuffer(new ScalaJS.c.scala_collection_script_Include().init___Lscala_collection_script_Location__O(new ScalaJS.c.scala_collection_script_Index().init___I(curr$1.elem$1), elem)))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(curr))));
  $$this.publish__O__V(msg)
});
ScalaJS.impls.scala_collection_mutable_ObservableBuffer$class__$init$__Lscala_collection_mutable_ObservableBuffer__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=ObservableBuffer$class.js.map
