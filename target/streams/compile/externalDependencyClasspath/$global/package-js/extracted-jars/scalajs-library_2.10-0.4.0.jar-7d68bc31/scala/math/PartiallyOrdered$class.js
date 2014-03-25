ScalaJS.impls.scala_math_PartiallyOrdered$class__$less__Lscala_math_PartiallyOrdered__O__Lscala_Function1__Z = (function($$this, that, evidence$2) {
  var x1 = $$this.tryCompareTo__O__Lscala_Function1__Lscala_Option(that, evidence$2);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var x$46 = ScalaJS.uI(x2.x__O());
    if ((x$46 < 0)) {
      return true
    }
  };
  return false
});
ScalaJS.impls.scala_math_PartiallyOrdered$class__$greater__Lscala_math_PartiallyOrdered__O__Lscala_Function1__Z = (function($$this, that, evidence$3) {
  var x1 = $$this.tryCompareTo__O__Lscala_Function1__Lscala_Option(that, evidence$3);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var x = ScalaJS.uI(x2.x__O());
    if ((x > 0)) {
      return true
    }
  };
  return false
});
ScalaJS.impls.scala_math_PartiallyOrdered$class__$less$eq__Lscala_math_PartiallyOrdered__O__Lscala_Function1__Z = (function($$this, that, evidence$4) {
  var x1 = $$this.tryCompareTo__O__Lscala_Function1__Lscala_Option(that, evidence$4);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var x = ScalaJS.uI(x2.x__O());
    if ((x <= 0)) {
      return true
    }
  };
  return false
});
ScalaJS.impls.scala_math_PartiallyOrdered$class__$greater$eq__Lscala_math_PartiallyOrdered__O__Lscala_Function1__Z = (function($$this, that, evidence$5) {
  var x1 = $$this.tryCompareTo__O__Lscala_Function1__Lscala_Option(that, evidence$5);
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var x = ScalaJS.uI(x2.x__O());
    if ((x >= 0)) {
      return true
    }
  };
  return false
});
ScalaJS.impls.scala_math_PartiallyOrdered$class__$init$__Lscala_math_PartiallyOrdered__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=PartiallyOrdered$class.js.map
