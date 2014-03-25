ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__newBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder = (function($$this) {
  return $$this.companion__Lscala_collection_generic_GenericCompanion().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__genericBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder = (function($$this) {
  return $$this.companion__Lscala_collection_generic_GenericCompanion().newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__sequential__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_TraversableOnce = (function($$this) {
  return ScalaJS.as.scala_collection_GenTraversableOnce($$this).seq__Lscala_collection_TraversableOnce()
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple2 = (function($$this, asPair) {
  var b1 = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  var b2 = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__sequential__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_TraversableOnce($$this).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b1$1, b2$1, asPair$1) {
    return (function(xy) {
      var x1 = ScalaJS.as.scala_Tuple2(asPair$1.apply__O__O(xy));
      matchEnd3: {
        if ((x1 !== null)) {
          var x = x1.$$und1__O();
          var y = x1.$$und2__O();
          var x$1 = new ScalaJS.c.scala_Tuple2().init___O__O(x, y);
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      var x$2 = x$1.$$und1__O();
      var y$2 = x$1.$$und2__O();
      b1$1.$$plus$eq__O__Lscala_collection_mutable_Builder(x$2);
      return b2$1.$$plus$eq__O__Lscala_collection_mutable_Builder(y$2)
    })
  })(b1, b2, asPair)));
  return new ScalaJS.c.scala_Tuple2().init___O__O(b1.result__O(), b2.result__O())
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip3__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple3 = (function($$this, asTriple) {
  var b1 = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  var b2 = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  var b3 = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__sequential__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_TraversableOnce($$this).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b1$2, b2$2, b3$1, asTriple$1) {
    return (function(xyz) {
      var x1 = ScalaJS.as.scala_Tuple3(asTriple$1.apply__O__O(xyz));
      matchEnd3: {
        if ((x1 !== null)) {
          var x = x1.$$und1__O();
          var y = x1.$$und2__O();
          var z = x1.$$und3__O();
          var x$2 = new ScalaJS.c.scala_Tuple3().init___O__O__O(x, y, z);
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      var x$3 = x$2.$$und1__O();
      var y$2 = x$2.$$und2__O();
      var z$2 = x$2.$$und3__O();
      b1$2.$$plus$eq__O__Lscala_collection_mutable_Builder(x$3);
      b2$2.$$plus$eq__O__Lscala_collection_mutable_Builder(y$2);
      return b3$1.$$plus$eq__O__Lscala_collection_mutable_Builder(z$2)
    })
  })(b1, b2, b3, asTriple)));
  return new ScalaJS.c.scala_Tuple3().init___O__O__O(b1.result__O(), b2.result__O(), b3.result__O())
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__flatten__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable = (function($$this, asTraversable) {
  var b = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__sequential__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_TraversableOnce($$this).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, asTraversable$1) {
    return (function(xs) {
      return ScalaJS.as.scala_collection_mutable_Builder(b$1.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_GenTraversableOnce(asTraversable$1.apply__O__O(xs)).seq__Lscala_collection_TraversableOnce()))
    })
  })(b, asTraversable)));
  return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__transpose__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable = (function($$this, asTraversable) {
  if ($$this.isEmpty__Z()) {
    return ScalaJS.as.scala_collection_GenTraversable($$this.genericBuilder__Lscala_collection_mutable_Builder().result__O())
  };
  var headSize = ScalaJS.as.scala_collection_GenTraversableOnce(asTraversable.apply__O__O($$this.head__O())).size__I();
  var bs = ScalaJS.as.scala_collection_IndexedSeq(ScalaJS.modules.scala_collection_IndexedSeq().fill__I__Lscala_Function0__Lscala_collection_GenTraversable(headSize, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
    return (function() {
      return arg$outer.genericBuilder__Lscala_collection_mutable_Builder()
    })
  })($$this))));
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__sequential__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_TraversableOnce($$this).foreach__Lscala_Function1__V(new ScalaJS.c.scala_collection_generic_GenericTraversableTemplate$$anonfun$transpose$1().init___Lscala_collection_generic_GenericTraversableTemplate__I__Lscala_collection_IndexedSeq__Lscala_Function1($$this, headSize, bs, asTraversable));
  var bb = $$this.genericBuilder__Lscala_collection_mutable_Builder();
  bs.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(bb$1) {
    return (function(b) {
      return bb$1.$$plus$eq__O__Lscala_collection_mutable_Builder(b.result__O())
    })
  })(bb)));
  return ScalaJS.as.scala_collection_GenTraversable(bb.result__O())
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__fail$1__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Nothing = (function($$this) {
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("transpose requires all collections have the same size")
});
ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__$init$__Lscala_collection_generic_GenericTraversableTemplate__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=GenericTraversableTemplate$class.js.map
