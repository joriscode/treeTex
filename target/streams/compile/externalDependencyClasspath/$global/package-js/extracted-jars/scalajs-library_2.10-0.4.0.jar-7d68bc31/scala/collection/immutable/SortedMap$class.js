ScalaJS.impls.scala_collection_immutable_SortedMap$class__newBuilder__Lscala_collection_immutable_SortedMap__Lscala_collection_mutable_Builder = (function($$this) {
  return ScalaJS.modules.scala_collection_immutable_SortedMap().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder($$this.ordering__Lscala_math_Ordering())
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__empty__Lscala_collection_immutable_SortedMap__Lscala_collection_immutable_SortedMap = (function($$this) {
  return ScalaJS.modules.scala_collection_immutable_SortedMap().empty__Lscala_math_Ordering__Lscala_collection_immutable_SortedMap($$this.ordering__Lscala_math_Ordering())
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__updated__Lscala_collection_immutable_SortedMap__O__O__Lscala_collection_immutable_SortedMap = (function($$this, key, value) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_SortedMap(new ScalaJS.c.scala_Tuple2().init___O__O(key, value))
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__keySet__Lscala_collection_immutable_SortedMap__Lscala_collection_immutable_SortedSet = (function($$this) {
  return new ScalaJS.c.scala_collection_immutable_SortedMap$DefaultKeySortedSet().init___Lscala_collection_immutable_SortedMap($$this)
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__$plus__Lscala_collection_immutable_SortedMap__Lscala_Tuple2__Lscala_collection_immutable_SortedMap = (function($$this, kv) {
  throw new ScalaJS.c.java_lang_AbstractMethodError().init___T("SortedMap.+")
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__$plus__Lscala_collection_immutable_SortedMap__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_SortedMap = (function($$this, elem1, elem2, elems) {
  return $$this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_SortedMap(elem1).$$plus__Lscala_Tuple2__Lscala_collection_immutable_SortedMap(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_SortedMap(elems)
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__$plus$plus__Lscala_collection_immutable_SortedMap__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_SortedMap = (function($$this, xs) {
  var x$1 = ScalaJS.as.scala_collection_immutable_SortedMap($$this.repr__O());
  return ScalaJS.as.scala_collection_immutable_SortedMap(xs.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return x$2.$$plus__Lscala_Tuple2__Lscala_collection_immutable_SortedMap(x$3)
    })
  })())))
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__filterKeys__Lscala_collection_immutable_SortedMap__Lscala_Function1__Lscala_collection_immutable_SortedMap = (function($$this, p) {
  return new ScalaJS.c.scala_collection_immutable_SortedMap$$anon$1().init___Lscala_collection_immutable_SortedMap__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__mapValues__Lscala_collection_immutable_SortedMap__Lscala_Function1__Lscala_collection_immutable_SortedMap = (function($$this, f) {
  return new ScalaJS.c.scala_collection_immutable_SortedMap$$anon$2().init___Lscala_collection_immutable_SortedMap__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_immutable_SortedMap$class__$init$__Lscala_collection_immutable_SortedMap__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SortedMap$class.js.map
