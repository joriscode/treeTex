ScalaJS.impls.scala_math_Numeric$class__zero__Lscala_math_Numeric__O = (function($$this) {
  return $$this.fromInt__I__O(0)
});
ScalaJS.impls.scala_math_Numeric$class__one__Lscala_math_Numeric__O = (function($$this) {
  return $$this.fromInt__I__O(1)
});
ScalaJS.impls.scala_math_Numeric$class__abs__Lscala_math_Numeric__O__O = (function($$this, x) {
  if ($$this.lt__O__O__Z(x, $$this.zero__O())) {
    return $$this.negate__O__O(x)
  } else {
    return x
  }
});
ScalaJS.impls.scala_math_Numeric$class__signum__Lscala_math_Numeric__O__I = (function($$this, x) {
  if ($$this.lt__O__O__Z(x, $$this.zero__O())) {
    return -1
  } else {
    if ($$this.gt__O__O__Z(x, $$this.zero__O())) {
      return 1
    } else {
      return 0
    }
  }
});
ScalaJS.impls.scala_math_Numeric$class__mkNumericOps__Lscala_math_Numeric__O__Lscala_math_Numeric$Ops = (function($$this, lhs) {
  return new ScalaJS.c.scala_math_Numeric$Ops().init___Lscala_math_Numeric__O($$this, lhs)
});
ScalaJS.impls.scala_math_Numeric$class__$init$__Lscala_math_Numeric__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Numeric$class.js.map
