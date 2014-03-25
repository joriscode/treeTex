ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__size__Lscala_collection_convert_Wrappers$JMapWrapperLike__I = (function($$this) {
  return $$this.underlying__Ljava_util_Map().size__I()
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__get__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_Option = (function($$this, k) {
  var v = $$this.underlying__Ljava_util_Map().get__O__O(k);
  if ((!ScalaJS.anyRefEqEq(v, null))) {
    return new ScalaJS.c.scala_Some().init___O(v)
  } else {
    if ($$this.underlying__Ljava_util_Map().containsKey__O__Z(k)) {
      return new ScalaJS.c.scala_Some().init___O(null)
    } else {
      return ScalaJS.modules.scala_None()
    }
  }
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$plus$eq__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_Tuple2__Lscala_collection_convert_Wrappers$JMapWrapperLike = (function($$this, kv) {
  $$this.underlying__Ljava_util_Map().put__O__O__O(kv.$$und1__O(), kv.$$und2__O());
  return $$this
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$minus$eq__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_collection_convert_Wrappers$JMapWrapperLike = (function($$this, key) {
  $$this.underlying__Ljava_util_Map().remove__O__O(key);
  return $$this
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__put__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__O__Lscala_Option = (function($$this, k, v) {
  var r = $$this.underlying__Ljava_util_Map().put__O__O__O(k, v);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(r)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__update__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__O__V = (function($$this, k, v) {
  $$this.underlying__Ljava_util_Map().put__O__O__O(k, v)
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__remove__Lscala_collection_convert_Wrappers$JMapWrapperLike__O__Lscala_Option = (function($$this, k) {
  var r = $$this.underlying__Ljava_util_Map().remove__O__O(k);
  if ((!ScalaJS.anyRefEqEq(r, null))) {
    return new ScalaJS.c.scala_Some().init___O(r)
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__iterator__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_convert_Wrappers$JMapWrapperLike$$anon$2().init___Lscala_collection_convert_Wrappers$JMapWrapperLike($$this)
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__clear__Lscala_collection_convert_Wrappers$JMapWrapperLike__V = (function($$this) {
  $$this.underlying__Ljava_util_Map().clear__V()
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__empty__Lscala_collection_convert_Wrappers$JMapWrapperLike__Lscala_collection_mutable_Map = (function($$this) {
  return null
});
ScalaJS.impls.scala_collection_convert_Wrappers$JMapWrapperLike$class__$init$__Lscala_collection_convert_Wrappers$JMapWrapperLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Wrappers$JMapWrapperLike$class.js.map
