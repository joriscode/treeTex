ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__zero__Lscala_collection_generic_BitOperations$Long__J__J__Z = (function($$this, i, mask) {
  return i.$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(mask).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__mask__Lscala_collection_generic_BitOperations$Long__J__J__J = (function($$this, i, mask) {
  return i.$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long($$this.complement__J__J(mask.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1))).$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(mask))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__hasMatch__Lscala_collection_generic_BitOperations$Long__J__J__J__Z = (function($$this, key, prefix, m) {
  return $$this.mask__J__J__J(key, m).equals__O__Z(prefix)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__unsignedCompare__Lscala_collection_generic_BitOperations$Long__J__J__Z = (function($$this, i, j) {
  return ((i.$$less__Lscala_scalajs_runtime_Long__Z(j) ^ i.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))) ^ j.$$less__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__shorter__Lscala_collection_generic_BitOperations$Long__J__J__Z = (function($$this, m1, m2) {
  return $$this.unsignedCompare__J__J__Z(m2, m1)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__complement__Lscala_collection_generic_BitOperations$Long__J__J = (function($$this, i) {
  return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 1048575).$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i)
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bits__Lscala_collection_generic_BitOperations$Long__J__Lscala_collection_immutable_IndexedSeq = (function($$this, num) {
  return ScalaJS.as.scala_collection_immutable_IndexedSeq(new ScalaJS.c.scala_runtime_RichLong().init___J(ScalaJS.modules.scala_Predef().longWrapper__J__J(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(63, 0, 0))).to__O__Lscala_collection_immutable_NumericRange$Inclusive(ScalaJS.bJ(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0))).by__O__Lscala_collection_immutable_NumericRange(ScalaJS.bJ(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(4194303, 4194303, 1048575))).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(num$2) {
    return (function(i) {
      i = ScalaJS.uJ(i);
      return ScalaJS.bZ(num$2.$$greater$greater$greater__I__Lscala_scalajs_runtime_Long(i).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0)).notEquals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)))
    })
  })(num)), ScalaJS.modules.scala_collection_immutable_IndexedSeq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bitString__Lscala_collection_generic_BitOperations$Long__J__T__T = (function($$this, num, sep) {
  return ScalaJS.as.scala_collection_TraversableOnce($$this.bits__J__Lscala_collection_immutable_IndexedSeq(num).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
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
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__bitString$default$2__Lscala_collection_generic_BitOperations$Long__T = (function($$this) {
  return ""
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__highestOneBit__Lscala_collection_generic_BitOperations$Long__J__J = (function($$this, j) {
  var i = j;
  i = i.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)));
  i = i.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(2)));
  i = i.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(4)));
  i = i.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(8)));
  i = i.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(16)));
  i = i.$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(32)));
  return i.$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(i.$$greater$greater$greater__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)))
});
ScalaJS.impls.scala_collection_generic_BitOperations$Long$class__$init$__Lscala_collection_generic_BitOperations$Long__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=BitOperations$Long$class.js.map
