ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__from__Lscala_collection_GenTraversableViewLike$Sliced__I = (function($$this) {
  return $$this.endpoints__Lscala_collection_generic_SliceInterval().from__I()
});
ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__until__Lscala_collection_GenTraversableViewLike$Sliced__I = (function($$this) {
  return $$this.endpoints__Lscala_collection_generic_SliceInterval().until__I()
});
ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__foreach__Lscala_collection_GenTraversableViewLike$Sliced__Lscala_Function1__V = (function($$this, f) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    var index = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
    $$this.scala$collection$GenTraversableViewLike$Sliced$$$outer__Lscala_collection_GenTraversableViewLike().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, index$1, nonLocalReturnKey1$1, f$1) {
      return (function(x) {
        if ((arg$outer.from__I() <= index$1.elem$1)) {
          if ((arg$outer.until__I() <= index$1.elem$1)) {
            throw new ScalaJS.c.scala_runtime_NonLocalReturnControl$mcV$sp().init___O__Lscala_runtime_BoxedUnit(nonLocalReturnKey1$1, ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit())
          };
          f$1.apply__O__O(x)
        } else {
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
        };
        index$1.elem$1 = (index$1.elem$1 + 1);
        return ScalaJS.bV(undefined)
      })
    })($$this, index, nonLocalReturnKey1, f)))
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        ex.value$mcV$sp__V()
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__viewIdentifier__Lscala_collection_GenTraversableViewLike$Sliced__T = (function($$this) {
  return "S"
});
ScalaJS.impls.scala_collection_GenTraversableViewLike$Sliced$class__$init$__Lscala_collection_GenTraversableViewLike$Sliced__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenTraversableViewLike$Sliced$class.js.map
