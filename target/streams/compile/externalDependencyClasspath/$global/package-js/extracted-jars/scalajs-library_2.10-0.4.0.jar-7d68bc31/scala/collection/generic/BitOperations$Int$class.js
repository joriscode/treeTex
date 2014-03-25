ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__zero__Lscala_collection_generic_BitOperations$Int__I__I__Z = (function($$this, i$5, mask$3) {
  return ((i$5 & mask$3) === 0)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__mask__Lscala_collection_generic_BitOperations$Int__I__I__I = (function($$this, i, mask) {
  return (i & ($$this.complement__I__I((mask - 1)) ^ mask))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__hasMatch__Lscala_collection_generic_BitOperations$Int__I__I__I__Z = (function($$this, key, prefix, m) {
  return ($$this.mask__I__I__I(key, m) === prefix)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__unsignedCompare__Lscala_collection_generic_BitOperations$Int__I__I__Z = (function($$this, i, j) {
  return (((i < j) ^ (i < 0)) ^ (j < 0))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__shorter__Lscala_collection_generic_BitOperations$Int__I__I__Z = (function($$this, m1, m2) {
  return $$this.unsignedCompare__I__I__Z(m2, m1)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__complement__Lscala_collection_generic_BitOperations$Int__I__I = (function($$this, i) {
  return (-1 ^ i)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bits__Lscala_collection_generic_BitOperations$Int__I__Lscala_collection_immutable_IndexedSeq = (function($$this, num) {
  return ScalaJS.as.scala_collection_immutable_IndexedSeq(ScalaJS.modules.scala_runtime_RichInt().to$extension0__I__I__Lscala_collection_immutable_Range$Inclusive(ScalaJS.modules.scala_Predef().intWrapper__I__I(31), 0).by__I__Lscala_collection_immutable_Range(-1).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(num$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      return ScalaJS.bZ((((num$1 >>> i) & 1) !== 0))
    })
  })(num)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString__Lscala_collection_generic_BitOperations$Int__I__T__T = (function($$this, num, sep) {
  return ScalaJS.as.scala_collection_TraversableOnce($$this.bits__I__Lscala_collection_immutable_IndexedSeq(num).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(b) {
      b = ScalaJS.uZ(b);
      if (b) {
        return "1"
      } else {
        return "0"
      }
    })
  })()), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).mkString__T__T(sep)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__bitString$default$2__Lscala_collection_generic_BitOperations$Int__T = (function($$this) {
  return ""
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__highestOneBit__Lscala_collection_generic_BitOperations$Int__I__I = (function($$this, j) {
  var i = j;
  i = (i | (i >> 1));
  i = (i | (i >> 2));
  i = (i | (i >> 4));
  i = (i | (i >> 8));
  i = (i | (i >> 16));
  return (i - (i >>> 1))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Int$class__$init$__Lscala_collection_generic_BitOperations$Int__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=BitOperations$Int$class.js.map
