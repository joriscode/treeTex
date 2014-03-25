ScalaJS.impls.scala_collection_SetLike$class__newBuilder__Lscala_collection_SetLike__Lscala_collection_mutable_Builder = (function($$this) {
  return new ScalaJS.c.scala_collection_mutable_SetBuilder().init___Lscala_collection_Set($$this.empty__Lscala_collection_Set())
});
ScalaJS.impls.scala_collection_SetLike$class__parCombiner__Lscala_collection_SetLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_ParSet().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_SetLike$class__toSeq__Lscala_collection_SetLike__Lscala_collection_Seq = (function($$this) {
  return $$this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.impls.scala_collection_SetLike$class__toBuffer__Lscala_collection_SetLike__Lscala_collection_mutable_Buffer = (function($$this) {
  var result = new ScalaJS.c.scala_collection_mutable_ArrayBuffer().init___I($$this.size__I());
  $$this.copyToBuffer__Lscala_collection_mutable_Buffer__V(result);
  return result
});
ScalaJS.impls.scala_collection_SetLike$class__map__Lscala_collection_SetLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  return $$this.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f, bf)
});
ScalaJS.impls.scala_collection_SetLike$class__$plus__Lscala_collection_SetLike__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function($$this, elem1, elem2, elems) {
  return $$this.$$plus__O__Lscala_collection_Set(elem1).$$plus__O__Lscala_collection_Set(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(elems)
});
ScalaJS.impls.scala_collection_SetLike$class__$plus$plus__Lscala_collection_SetLike__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function($$this, elems) {
  var x$1 = ScalaJS.as.scala_collection_Set($$this.repr__O());
  return ScalaJS.as.scala_collection_Set(elems.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return x$2.$$plus__O__Lscala_collection_Set(x$3)
    })
  })())))
});
ScalaJS.impls.scala_collection_SetLike$class__isEmpty__Lscala_collection_SetLike__Z = (function($$this) {
  return ($$this.size__I() === 0)
});
ScalaJS.impls.scala_collection_SetLike$class__union__Lscala_collection_SetLike__Lscala_collection_GenSet__Lscala_collection_Set = (function($$this, that) {
  return $$this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(that)
});
ScalaJS.impls.scala_collection_SetLike$class__diff__Lscala_collection_SetLike__Lscala_collection_GenSet__Lscala_collection_Set = (function($$this, that) {
  return ScalaJS.as.scala_collection_Set($$this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(that))
});
ScalaJS.impls.scala_collection_SetLike$class__subsets__Lscala_collection_SetLike__I__Lscala_collection_Iterator = (function($$this, len) {
  if (((len < 0) || (len > $$this.size__I()))) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  } else {
    return new ScalaJS.c.scala_collection_SetLike$SubsetsItr().init___Lscala_collection_SetLike__Lscala_collection_IndexedSeq__I($$this, $$this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq(), len)
  }
});
ScalaJS.impls.scala_collection_SetLike$class__subsets__Lscala_collection_SetLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_SetLike$$anon$1().init___Lscala_collection_SetLike($$this)
});
ScalaJS.impls.scala_collection_SetLike$class__stringPrefix__Lscala_collection_SetLike__T = (function($$this) {
  return "Set"
});
ScalaJS.impls.scala_collection_SetLike$class__toString__Lscala_collection_SetLike__T = (function($$this) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toString__Lscala_collection_TraversableLike__T($$this)
});
ScalaJS.impls.scala_collection_SetLike$class__$init$__Lscala_collection_SetLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SetLike$class.js.map
