ScalaJS.impls.scala_math_PartialOrdering$class__gteq__Lscala_math_PartialOrdering__O__O__Z = (function($$this, x, y) {
  return $$this.lteq__O__O__Z(y, x)
});
ScalaJS.impls.scala_math_PartialOrdering$class__lt__Lscala_math_PartialOrdering__O__O__Z = (function($$this, x, y) {
  return ($$this.lteq__O__O__Z(x, y) && (!$$this.equiv__O__O__Z(x, y)))
});
ScalaJS.impls.scala_math_PartialOrdering$class__gt__Lscala_math_PartialOrdering__O__O__Z = (function($$this, x, y) {
  return ($$this.gteq__O__O__Z(x, y) && (!$$this.equiv__O__O__Z(x, y)))
});
ScalaJS.impls.scala_math_PartialOrdering$class__equiv__Lscala_math_PartialOrdering__O__O__Z = (function($$this, x, y) {
  return ($$this.lteq__O__O__Z(x, y) && $$this.lteq__O__O__Z(y, x))
});
ScalaJS.impls.scala_math_PartialOrdering$class__reverse__Lscala_math_PartialOrdering__Lscala_math_PartialOrdering = (function($$this) {
  return new ScalaJS.c.scala_math_PartialOrdering$$anon$1().init___Lscala_math_PartialOrdering($$this)
});
ScalaJS.impls.scala_math_PartialOrdering$class__$init$__Lscala_math_PartialOrdering__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=PartialOrdering$class.js.map
