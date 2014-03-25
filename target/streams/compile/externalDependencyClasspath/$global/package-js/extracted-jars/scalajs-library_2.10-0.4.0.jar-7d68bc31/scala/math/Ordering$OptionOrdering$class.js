ScalaJS.impls.scala_math_Ordering$OptionOrdering$class__compare__Lscala_math_Ordering$OptionOrdering__Lscala_Option__Lscala_Option__I = (function($$this, x, y) {
  var x1 = new ScalaJS.c.scala_Tuple2().init___O__O(x, y);
  if ((x1 !== null)) {
    var p2 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var p3 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p2)) {
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p3)) {
        return 0
      }
    }
  };
  if ((x1 !== null)) {
    var p4 = ScalaJS.as.scala_Option(x1.$$und1__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p4)) {
      return -1
    }
  };
  if ((x1 !== null)) {
    var p7 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), p7)) {
      return 1
    }
  };
  if ((x1 !== null)) {
    var p8 = ScalaJS.as.scala_Option(x1.$$und1__O());
    var p9 = ScalaJS.as.scala_Option(x1.$$und2__O());
    if (ScalaJS.is.scala_Some(p8)) {
      var x10 = ScalaJS.as.scala_Some(p8);
      var x$2 = x10.x__O();
      if (ScalaJS.is.scala_Some(p9)) {
        var x11 = ScalaJS.as.scala_Some(p9);
        var y$2 = x11.x__O();
        return $$this.optionOrdering__Lscala_math_Ordering().compare__O__O__I(x$2, y$2)
      }
    }
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.impls.scala_math_Ordering$OptionOrdering$class__$init$__Lscala_math_Ordering$OptionOrdering__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=Ordering$OptionOrdering$class.js.map
