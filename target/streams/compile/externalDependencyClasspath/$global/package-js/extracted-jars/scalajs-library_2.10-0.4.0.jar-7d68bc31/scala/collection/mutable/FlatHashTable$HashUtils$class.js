ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__sizeMapBucketBitSize__Lscala_collection_mutable_FlatHashTable$HashUtils__I = (function($$this) {
  return 5
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__sizeMapBucketSize__Lscala_collection_mutable_FlatHashTable$HashUtils__I = (function($$this) {
  return (1 << $$this.sizeMapBucketBitSize__I())
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__elemHashCode__Lscala_collection_mutable_FlatHashTable$HashUtils__O__I = (function($$this, elem) {
  if (ScalaJS.anyRefEqEq(elem, null)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("Flat hash tables cannot contain null elements.")
  } else {
    return ScalaJS.objectHashCode(elem)
  }
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__improve__Lscala_collection_mutable_FlatHashTable$HashUtils__I__I__I = (function($$this, hcode, seed) {
  var improved = ScalaJS.modules.scala_util_hashing_package().byteswap32__I__I(hcode);
  var rotation = (seed % 32);
  var rotated = ((improved >>> rotation) | (improved << (32 - rotation)));
  return rotated
});
ScalaJS.impls.scala_collection_mutable_FlatHashTable$HashUtils$class__$init$__Lscala_collection_mutable_FlatHashTable$HashUtils__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=FlatHashTable$HashUtils$class.js.map
