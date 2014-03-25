ScalaJS.impls.scala_collection_SortedMapLike$class__firstKey__Lscala_collection_SortedMapLike__O = (function($$this) {
  return ScalaJS.as.scala_Tuple2($$this.head__O()).$$und1__O()
});
ScalaJS.impls.scala_collection_SortedMapLike$class__lastKey__Lscala_collection_SortedMapLike__O = (function($$this) {
  return ScalaJS.as.scala_Tuple2($$this.last__O()).$$und1__O()
});
ScalaJS.impls.scala_collection_SortedMapLike$class__keySet__Lscala_collection_SortedMapLike__Lscala_collection_SortedSet = (function($$this) {
  return new ScalaJS.c.scala_collection_SortedMapLike$DefaultKeySortedSet().init___Lscala_collection_SortedMapLike($$this)
});
ScalaJS.impls.scala_collection_SortedMapLike$class__updated__Lscala_collection_SortedMapLike__O__O__Lscala_collection_SortedMap = (function($$this, key, value) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_SortedMap(new ScalaJS.c.scala_Tuple2().init___O__O(key, value))
});
ScalaJS.impls.scala_collection_SortedMapLike$class__$plus__Lscala_collection_SortedMapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_SortedMap = (function($$this, elem1, elem2, elems) {
  var m = new ScalaJS.c.scala_runtime_ObjectRef().init___O($$this.$$plus__Lscala_Tuple2__Lscala_collection_SortedMap(elem1).$$plus__Lscala_Tuple2__Lscala_collection_SortedMap(elem2));
  elems.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(m$1) {
    return (function(e) {
      m$1.elem$1 = ScalaJS.as.scala_collection_SortedMap(m$1.elem$1).$$plus__Lscala_Tuple2__Lscala_collection_SortedMap(e);
      return ScalaJS.bV(undefined)
    })
  })(m)));
  return ScalaJS.as.scala_collection_SortedMap(m.elem$1)
});
ScalaJS.impls.scala_collection_SortedMapLike$class__filterKeys__Lscala_collection_SortedMapLike__Lscala_Function1__Lscala_collection_SortedMap = (function($$this, p) {
  return new ScalaJS.c.scala_collection_SortedMapLike$$anon$1().init___Lscala_collection_SortedMapLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_SortedMapLike$class__mapValues__Lscala_collection_SortedMapLike__Lscala_Function1__Lscala_collection_SortedMap = (function($$this, f) {
  return new ScalaJS.c.scala_collection_SortedMapLike$$anon$2().init___Lscala_collection_SortedMapLike__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_SortedMapLike$class__$plus$plus__Lscala_collection_SortedMapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_SortedMap = (function($$this, xs) {
  var x$1 = ScalaJS.as.scala_collection_SortedMap($$this.repr__O());
  return ScalaJS.as.scala_collection_SortedMap(xs.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return x$2.$$plus__Lscala_Tuple2__Lscala_collection_SortedMap(x$3)
    })
  })())))
});
ScalaJS.impls.scala_collection_SortedMapLike$class__$init$__Lscala_collection_SortedMapLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SortedMapLike$class.js.map
