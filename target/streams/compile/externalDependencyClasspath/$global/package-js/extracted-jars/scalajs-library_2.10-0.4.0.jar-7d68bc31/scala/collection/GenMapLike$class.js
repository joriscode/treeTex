ScalaJS.impls.scala_collection_GenMapLike$class__hashCode__Lscala_collection_GenMapLike__I = (function($$this) {
  return ScalaJS.modules.scala_util_hashing_MurmurHash3().mapHash__Lscala_collection_Map__I($$this.seq__Lscala_collection_Map())
});
ScalaJS.impls.scala_collection_GenMapLike$class__equals__Lscala_collection_GenMapLike__O__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_GenMap(x1)) {
    var x2 = ScalaJS.as.scala_collection_GenMap(x1);
    return (($$this === x2) || ((x2.canEqual__O__Z($$this) && ($$this.size__I() === x2.size__I())) && ScalaJS.impls.scala_collection_GenMapLike$class__liftedTree1$1__Lscala_collection_GenMapLike__Lscala_collection_GenMap__Z($$this, x2)))
  };
  return false
});
ScalaJS.impls.scala_collection_GenMapLike$class__liftedTree1$1__Lscala_collection_GenMapLike__Lscala_collection_GenMap__Z = (function($$this, x2$1) {
  try {
    return $$this.forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(x2$1) {
      return (function(x0$1) {
        var x1 = x0$1;
        matchEnd3: {
          if ((x1 !== null)) {
            var k = x1.$$und1__O();
            var v = x1.$$und2__O();
            var x1$2 = x2$1.get__O__Lscala_Option(k);
            if (ScalaJS.is.scala_Some(x1$2)) {
              var x3 = ScalaJS.as.scala_Some(x1$2);
              var p2 = x3.x__O();
              if (ScalaJS.anyEqEq(v, p2)) {
                var jsx$1 = true;
                break matchEnd3
              }
            };
            var jsx$1 = false;
            break matchEnd3
          };
          throw new ScalaJS.c.scala_MatchError().init___O(x1)
        };
        return ScalaJS.bZ(jsx$1)
      })
    })(x2$1)))
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      var ex = $jsexc$;
      ScalaJS.modules.scala_Predef().println__O__V("class cast ");
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.impls.scala_collection_GenMapLike$class__$init$__Lscala_collection_GenMapLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenMapLike$class.js.map
