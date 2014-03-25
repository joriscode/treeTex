ScalaJS.impls.scala_collection_SortedSetLike$class__keySet__Lscala_collection_SortedSetLike__Lscala_collection_SortedSet = (function($$this) {
  return ScalaJS.as.scala_collection_SortedSet($$this.repr__O())
});
ScalaJS.impls.scala_collection_SortedSetLike$class__firstKey__Lscala_collection_SortedSetLike__O = (function($$this) {
  return $$this.head__O()
});
ScalaJS.impls.scala_collection_SortedSetLike$class__lastKey__Lscala_collection_SortedSetLike__O = (function($$this) {
  return $$this.last__O()
});
ScalaJS.impls.scala_collection_SortedSetLike$class__from__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet = (function($$this, from) {
  return $$this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet(new ScalaJS.c.scala_Some().init___O(from), ScalaJS.modules.scala_None())
});
ScalaJS.impls.scala_collection_SortedSetLike$class__until__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet = (function($$this, until) {
  return $$this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet(ScalaJS.modules.scala_None(), new ScalaJS.c.scala_Some().init___O(until))
});
ScalaJS.impls.scala_collection_SortedSetLike$class__range__Lscala_collection_SortedSetLike__O__O__Lscala_collection_SortedSet = (function($$this, from, until) {
  return $$this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet(new ScalaJS.c.scala_Some().init___O(from), new ScalaJS.c.scala_Some().init___O(until))
});
ScalaJS.impls.scala_collection_SortedSetLike$class__subsetOf__Lscala_collection_SortedSetLike__Lscala_collection_GenSet__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_SortedSet(x1)) {
    var x2 = ScalaJS.as.scala_collection_SortedSet(x1);
    if (ScalaJS.anyRefEqEq(x2.ordering__Lscala_math_Ordering(), $$this.ordering__Lscala_math_Ordering())) {
      return x2.hasAll__Lscala_collection_Iterator__Z($$this.iterator__Lscala_collection_Iterator())
    }
  };
  return $$this.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z(x1)
});
ScalaJS.impls.scala_collection_SortedSetLike$class__$init$__Lscala_collection_SortedSetLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SortedSetLike$class.js.map
