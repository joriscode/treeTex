ScalaJS.impls.scala_collection_TraversableViewLike$Transformed$class__headOption__Lscala_collection_TraversableViewLike$Transformed__Lscala_Option = (function($$this) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(nonLocalReturnKey1$1) {
      return (function(x) {
        throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey1$1, new ScalaJS.c.scala_Some().init___O(x))
      })
    })(nonLocalReturnKey1)));
    return ScalaJS.modules.scala_None()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        return ScalaJS.as.scala_Option(ex.value__O())
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.impls.scala_collection_TraversableViewLike$Transformed$class__lastOption__Lscala_collection_TraversableViewLike$Transformed__Lscala_Option = (function($$this) {
  var empty = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(null);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(empty$1, result$1) {
    return (function(x) {
      empty$1.elem$1 = false;
      result$1.elem$1 = x;
      return ScalaJS.bV(undefined)
    })
  })(empty, result)));
  if (empty.elem$1) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(result.elem$1)
  }
});
ScalaJS.impls.scala_collection_TraversableViewLike$Transformed$class__stringPrefix__Lscala_collection_TraversableViewLike$Transformed__T = (function($$this) {
  return $$this.scala$collection$TraversableViewLike$Transformed$$$outer__Lscala_collection_TraversableViewLike().stringPrefix__T()
});
ScalaJS.impls.scala_collection_TraversableViewLike$Transformed$class__toString__Lscala_collection_TraversableViewLike$Transformed__T = (function($$this) {
  return $$this.viewToString__T()
});
ScalaJS.impls.scala_collection_TraversableViewLike$Transformed$class__$init$__Lscala_collection_TraversableViewLike$Transformed__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=TraversableViewLike$Transformed$class.js.map
