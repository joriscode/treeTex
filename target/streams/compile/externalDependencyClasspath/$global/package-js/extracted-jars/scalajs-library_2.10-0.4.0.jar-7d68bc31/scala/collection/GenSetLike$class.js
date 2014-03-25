ScalaJS.impls.scala_collection_GenSetLike$class__apply__Lscala_collection_GenSetLike__O__Z = (function($$this, elem) {
  return $$this.contains__O__Z(elem)
});
ScalaJS.impls.scala_collection_GenSetLike$class__intersect__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O = (function($$this, that) {
  return $$this.filter__Lscala_Function1__O(that)
});
ScalaJS.impls.scala_collection_GenSetLike$class__$amp__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O = (function($$this, that) {
  return $$this.intersect__Lscala_collection_GenSet__O(that)
});
ScalaJS.impls.scala_collection_GenSetLike$class__$bar__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O = (function($$this, that) {
  return $$this.union__Lscala_collection_GenSet__O(that)
});
ScalaJS.impls.scala_collection_GenSetLike$class__$amp$tilde__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O = (function($$this, that) {
  return $$this.diff__Lscala_collection_GenSet__O(that)
});
ScalaJS.impls.scala_collection_GenSetLike$class__subsetOf__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z = (function($$this, that) {
  return $$this.forall__Lscala_Function1__Z(that)
});
ScalaJS.impls.scala_collection_GenSetLike$class__equals__Lscala_collection_GenSetLike__O__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_GenSet(x1)) {
    var x2 = ScalaJS.as.scala_collection_GenSet(x1);
    return (($$this === x2) || ((x2.canEqual__O__Z($$this) && ($$this.size__I() === x2.size__I())) && ScalaJS.impls.scala_collection_GenSetLike$class__liftedTree1$1__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z($$this, x2)))
  };
  return false
});
ScalaJS.impls.scala_collection_GenSetLike$class__hashCode__Lscala_collection_GenSetLike__I = (function($$this) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().setHash__Lscala_collection_Set__I($$this.seq__Lscala_collection_Set())
});
ScalaJS.impls.scala_collection_GenSetLike$class__liftedTree1$1__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z = (function($$this, x2$1) {
  try {
    return $$this.subsetOf__Lscala_collection_GenSet__Z(x2$1)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.impls.scala_collection_GenSetLike$class__$init$__Lscala_collection_GenSetLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenSetLike$class.js.map
