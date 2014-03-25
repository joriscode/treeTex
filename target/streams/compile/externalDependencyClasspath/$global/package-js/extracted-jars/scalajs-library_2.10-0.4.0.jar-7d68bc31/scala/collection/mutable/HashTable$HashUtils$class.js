ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketBitSize__Lscala_collection_mutable_HashTable$HashUtils__I = (function($$this) {
  return 5
});
ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__sizeMapBucketSize__Lscala_collection_mutable_HashTable$HashUtils__I = (function($$this) {
  return (1 << $$this.sizeMapBucketBitSize__I())
});
ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__elemHashCode__Lscala_collection_mutable_HashTable$HashUtils__O__I = (function($$this, key) {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().hash__O__I(key)
});
ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__improve__Lscala_collection_mutable_HashTable$HashUtils__I__I__I = (function($$this, hcode, seed) {
  var i = ScalaJS.modules.scala_util_hashing_package().byteswap32__I__I(hcode);
  var rotation = (seed % 32);
  var rotated = ((i >>> rotation) | (i << (32 - rotation)));
  return rotated
});
ScalaJS.impls.scala_collection_mutable_HashTable$HashUtils$class__$init$__Lscala_collection_mutable_HashTable$HashUtils__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=HashTable$HashUtils$class.js.map
