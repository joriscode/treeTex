ScalaJS.impls.scala_PartialFunction$class__orElse__Lscala_PartialFunction__Lscala_PartialFunction__Lscala_PartialFunction = (function($$this, that) {
  return new ScalaJS.c.scala_PartialFunction$OrElse().init___Lscala_PartialFunction__Lscala_PartialFunction($$this, that)
});
ScalaJS.impls.scala_PartialFunction$class__andThen__Lscala_PartialFunction__Lscala_Function1__Lscala_PartialFunction = (function($$this, k) {
  return new ScalaJS.c.scala_PartialFunction$AndThen().init___Lscala_PartialFunction__Lscala_Function1($$this, k)
});
ScalaJS.impls.scala_PartialFunction$class__lift__Lscala_PartialFunction__Lscala_Function1 = (function($$this) {
  return new ScalaJS.c.scala_PartialFunction$Lifted().init___Lscala_PartialFunction($$this)
});
ScalaJS.impls.scala_PartialFunction$class__applyOrElse__Lscala_PartialFunction__O__Lscala_Function1__O = (function($$this, x, default$2) {
  if ($$this.isDefinedAt__O__Z(x)) {
    return $$this.apply__O__O(x)
  } else {
    return default$2.apply__O__O(x)
  }
});
ScalaJS.impls.scala_PartialFunction$class__runWith__Lscala_PartialFunction__Lscala_Function1__Lscala_Function1 = (function($$this, action) {
  return new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, action$1) {
    return (function(x) {
      var z = arg$outer.applyOrElse__O__Lscala_Function1__O(x, ScalaJS.modules.scala_PartialFunction().scala$PartialFunction$$checkFallback__Lscala_PartialFunction());
      if ((!ScalaJS.modules.scala_PartialFunction().scala$PartialFunction$$fallbackOccurred__O__Z(z))) {
        action$1.apply__O__O(z);
        var jsx$1 = true
      } else {
        var jsx$1 = false
      };
      return ScalaJS.bZ(jsx$1)
    })
  })($$this, action))
});
ScalaJS.impls.scala_PartialFunction$class__$init$__Lscala_PartialFunction__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=PartialFunction$class.js.map
