ScalaJS.impls.scala_collection_TraversableViewLike$class__newBuilder__Lscala_collection_TraversableViewLike__Lscala_collection_mutable_Builder = (function($$this) {
  throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T(ScalaJS.modules.scala_runtime_StringAdd().$$plus$extension__O__T__T(ScalaJS.modules.scala_Predef().any2stringadd__O__O($$this), ".newBuilder"))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__viewIdentifier__Lscala_collection_TraversableViewLike__T = (function($$this) {
  return ""
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__viewIdString__Lscala_collection_TraversableViewLike__T = (function($$this) {
  return ""
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__stringPrefix__Lscala_collection_TraversableViewLike__T = (function($$this) {
  return "TraversableView"
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__force__Lscala_collection_TraversableViewLike__Lscala_collection_generic_CanBuildFrom__O = (function($$this, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.underlying__O());
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this);
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__$plus$plus__Lscala_collection_TraversableViewLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function($$this, xs, bf) {
  return $$this.newAppended__Lscala_collection_GenTraversable__Lscala_collection_TraversableViewLike$Transformed(xs.seq__Lscala_collection_TraversableOnce().toTraversable__Lscala_collection_Traversable())
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__map__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  return $$this.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(f)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__collect__Lscala_collection_TraversableViewLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function($$this, pf, bf) {
  return $$this.filter__Lscala_Function1__Lscala_collection_TraversableView(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pf$1) {
    return (function(x) {
      return ScalaJS.bZ(pf$1.isDefinedAt__O__Z(x))
    })
  })(pf))).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(pf, bf)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__flatMap__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  return $$this.newFlatMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(f)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__flatten__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function($$this, asTraversable) {
  return $$this.newFlatMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(asTraversable)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView = (function($$this, xs) {
  return xs
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newForced__Lscala_collection_TraversableViewLike__Lscala_Function0__Lscala_collection_TraversableViewLike$Transformed = (function($$this, xs) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$1().init___Lscala_collection_TraversableViewLike__Lscala_Function0($$this, xs)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newAppended__Lscala_collection_TraversableViewLike__Lscala_collection_GenTraversable__Lscala_collection_TraversableViewLike$Transformed = (function($$this, that) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$2().init___Lscala_collection_TraversableViewLike__Lscala_collection_GenTraversable($$this, that)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newMapped__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function($$this, f) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$3().init___Lscala_collection_TraversableViewLike__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newFlatMapped__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function($$this, f) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$4().init___Lscala_collection_TraversableViewLike__Lscala_Function1($$this, f)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newFiltered__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function($$this, p) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$5().init___Lscala_collection_TraversableViewLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newSliced__Lscala_collection_TraversableViewLike__Lscala_collection_generic_SliceInterval__Lscala_collection_TraversableViewLike$Transformed = (function($$this, _endpoints) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$6().init___Lscala_collection_TraversableViewLike__Lscala_collection_generic_SliceInterval($$this, _endpoints)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newDroppedWhile__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function($$this, p) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$7().init___Lscala_collection_TraversableViewLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newTakenWhile__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed = (function($$this, p) {
  return new ScalaJS.c.scala_collection_TraversableViewLike$$anon$8().init___Lscala_collection_TraversableViewLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newTaken__Lscala_collection_TraversableViewLike__I__Lscala_collection_TraversableViewLike$Transformed = (function($$this, n) {
  return $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_TraversableViewLike$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(0, n))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__newDropped__Lscala_collection_TraversableViewLike__I__Lscala_collection_TraversableViewLike$Transformed = (function($$this, n) {
  return $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_TraversableViewLike$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(n, 2147483647))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__filter__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView = (function($$this, p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newFiltered__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__withFilter__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView = (function($$this, p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newFiltered__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__partition__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newFiltered__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p)), ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newFiltered__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$4) {
    return (function(x$1) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$4.apply__O__O(x$1))))
    })
  })(p)))))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__init__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableView = (function($$this) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_TraversableViewLike$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(0, ($$this.size__I() - 1))))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__drop__Lscala_collection_TraversableViewLike__I__Lscala_collection_TraversableView = (function($$this, n) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newDropped__I__Lscala_collection_TraversableViewLike$Transformed(n))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__take__Lscala_collection_TraversableViewLike__I__Lscala_collection_TraversableView = (function($$this, n) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newTaken__I__Lscala_collection_TraversableViewLike$Transformed(n))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__slice__Lscala_collection_TraversableViewLike__I__I__Lscala_collection_TraversableView = (function($$this, from, until) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newSliced__Lscala_collection_generic_SliceInterval__Lscala_collection_TraversableViewLike$Transformed(ScalaJS.modules.scala_collection_generic_SliceInterval().apply__I__I__Lscala_collection_generic_SliceInterval(from, until)))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__dropWhile__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView = (function($$this, p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newDroppedWhile__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__takeWhile__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_TraversableView = (function($$this, p) {
  return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newTakenWhile__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__span__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newTakenWhile__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p)), ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newDroppedWhile__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(p)))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__splitAt__Lscala_collection_TraversableViewLike__I__Lscala_Tuple2 = (function($$this, n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newTaken__I__Lscala_collection_TraversableViewLike$Transformed(n)), ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView($$this, $$this.newDropped__I__Lscala_collection_TraversableViewLike$Transformed(n)))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__scanLeft__Lscala_collection_TraversableViewLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, z, op, bf) {
  return $$this.newForced__Lscala_Function0__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, z$1, op$1) {
    return (function() {
      return ScalaJS.as.scala_collection_Seq(arg$outer.thisSeq__Lscala_collection_Seq().scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$1, op$1, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    })
  })($$this, z, op)))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__scanRight__Lscala_collection_TraversableViewLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, z, op, bf) {
  return $$this.newForced__Lscala_Function0__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, z$2, op$2) {
    return (function() {
      return ScalaJS.as.scala_collection_Seq(arg$outer.thisSeq__Lscala_collection_Seq().scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$2, op$2, ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
    })
  })($$this, z, op)))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__groupBy__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_collection_immutable_Map = (function($$this, f) {
  return $$this.thisSeq__Lscala_collection_Seq().groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f).mapValues__Lscala_Function1__Lscala_collection_immutable_Map(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(xs) {
      return ScalaJS.impls.scala_collection_TraversableViewLike$class__scala$collection$TraversableViewLike$$asThis__Lscala_collection_TraversableViewLike__Lscala_collection_TraversableViewLike$Transformed__Lscala_collection_TraversableView(arg$outer, arg$outer.newForced__Lscala_Function0__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_collection_TraversableViewLike$$anonfun$groupBy$1$$anonfun$apply$1().init___Lscala_collection_TraversableViewLike$$anonfun$groupBy$1__Lscala_collection_Seq(this, xs)))
    })
  })($$this)))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__unzip__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple2 = (function($$this, asPair) {
  return new ScalaJS.c.scala_Tuple2().init___O__O($$this.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(asPair$1) {
    return (function(x) {
      return ScalaJS.as.scala_Tuple2(asPair$1.apply__O__O(x)).$$und1__O()
    })
  })(asPair))), $$this.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(asPair$1) {
    return (function(x) {
      return ScalaJS.as.scala_Tuple2(asPair$1.apply__O__O(x)).$$und2__O()
    })
  })(asPair))))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__unzip3__Lscala_collection_TraversableViewLike__Lscala_Function1__Lscala_Tuple3 = (function($$this, asTriple) {
  return new ScalaJS.c.scala_Tuple3().init___O__O__O($$this.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(asTriple$1) {
    return (function(x) {
      return ScalaJS.as.scala_Tuple3(asTriple$1.apply__O__O(x)).$$und1__O()
    })
  })(asTriple))), $$this.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(asTriple$1) {
    return (function(x) {
      return ScalaJS.as.scala_Tuple3(asTriple$1.apply__O__O(x)).$$und2__O()
    })
  })(asTriple))), $$this.newMapped__Lscala_Function1__Lscala_collection_TraversableViewLike$Transformed(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(asTriple$1) {
    return (function(x) {
      return ScalaJS.as.scala_Tuple3(asTriple$1.apply__O__O(x)).$$und3__O()
    })
  })(asTriple))))
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__toString__Lscala_collection_TraversableViewLike__T = (function($$this) {
  return $$this.viewToString__T()
});
ScalaJS.impls.scala_collection_TraversableViewLike$class__$init$__Lscala_collection_TraversableViewLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=TraversableViewLike$class.js.map
