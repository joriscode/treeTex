ScalaJS.impls.scala_math_Ordering$class__tryCompare__Lscala_math_Ordering__O__O__Lscala_Some = (function($$this, x, y) {
  return new ScalaJS.c.scala_Some().init___O(ScalaJS.bI($$this.compare__O__O__I(x, y)))
});
ScalaJS.impls.scala_math_Ordering$class__lteq__Lscala_math_Ordering__O__O__Z = (function($$this, x, y) {
  return ($$this.compare__O__O__I(x, y) <= 0)
});
ScalaJS.impls.scala_math_Ordering$class__gteq__Lscala_math_Ordering__O__O__Z = (function($$this, x, y) {
  return ($$this.compare__O__O__I(x, y) >= 0)
});
ScalaJS.impls.scala_math_Ordering$class__lt__Lscala_math_Ordering__O__O__Z = (function($$this, x, y) {
  return ($$this.compare__O__O__I(x, y) < 0)
});
ScalaJS.impls.scala_math_Ordering$class__gt__Lscala_math_Ordering__O__O__Z = (function($$this, x, y) {
  return ($$this.compare__O__O__I(x, y) > 0)
});
ScalaJS.impls.scala_math_Ordering$class__equiv__Lscala_math_Ordering__O__O__Z = (function($$this, x, y) {
  return ($$this.compare__O__O__I(x, y) === 0)
});
ScalaJS.impls.scala_math_Ordering$class__max__Lscala_math_Ordering__O__O__O = (function($$this, x, y) {
  if ($$this.gteq__O__O__Z(x, y)) {
    return x
  } else {
    return y
  }
});
ScalaJS.impls.scala_math_Ordering$class__min__Lscala_math_Ordering__O__O__O = (function($$this, x, y) {
  if ($$this.lteq__O__O__Z(x, y)) {
    return x
  } else {
    return y
  }
});
ScalaJS.impls.scala_math_Ordering$class__reverse__Lscala_math_Ordering__Lscala_math_Ordering = (function($$this) {
  return new ScalaJS.c.scala_math_Ordering$$anon$4().init___Lscala_math_Ordering($$this)
});
ScalaJS.impls.scala_math_Ordering$class__on__Lscala_math_Ordering__Lscala_Function1__Lscala_math_Ordering = (function($$this, f) {
  return new ScalaJS.c.scala_math_Ordering$$anon$5().init___Lscala_math_Ordering__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_math_Ordering$class__mkOrderingOps__Lscala_math_Ordering__O__Lscala_math_Ordering$Ops = (function($$this, lhs) {
  return new ScalaJS.c.scala_math_Ordering$Ops().init___Lscala_math_Ordering__O($$this, lhs)
});
ScalaJS.impls.scala_math_Ordering$class__$init$__Lscala_math_Ordering__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Ordering$class.js.map
