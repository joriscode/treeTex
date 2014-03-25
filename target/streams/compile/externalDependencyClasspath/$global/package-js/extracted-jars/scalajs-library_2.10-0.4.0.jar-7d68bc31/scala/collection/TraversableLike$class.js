ScalaJS.impls.scala_collection_TraversableLike$class__repr__Lscala_collection_TraversableLike__O = (function($$this) {
  return $$this
});
ScalaJS.impls.scala_collection_TraversableLike$class__isTraversableAgain__Lscala_collection_TraversableLike__Z = (function($$this) {
  return true
});
ScalaJS.impls.scala_collection_TraversableLike$class__thisCollection__Lscala_collection_TraversableLike__Lscala_collection_Traversable = (function($$this) {
  return ScalaJS.as.scala_collection_Traversable($$this)
});
ScalaJS.impls.scala_collection_TraversableLike$class__toCollection__Lscala_collection_TraversableLike__O__Lscala_collection_Traversable = (function($$this, repr) {
  return ScalaJS.as.scala_collection_Traversable(repr)
});
ScalaJS.impls.scala_collection_TraversableLike$class__parCombiner__Lscala_collection_TraversableLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_ParIterable().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_TraversableLike$class__isEmpty__Lscala_collection_TraversableLike__Z = (function($$this) {
  var result = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$isEmpty$1().init___Lscala_collection_TraversableLike__Lscala_runtime_BooleanRef($$this, result));
  return result.elem$1
});
ScalaJS.impls.scala_collection_TraversableLike$class__hasDefiniteSize__Lscala_collection_TraversableLike__Z = (function($$this) {
  return true
});
ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  if (ScalaJS.is.scala_collection_IndexedSeqLike(that)) {
    b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, that.seq__Lscala_collection_TraversableOnce().size__I())
  };
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Traversable());
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(that.seq__Lscala_collection_TraversableOnce());
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  if (ScalaJS.is.scala_collection_IndexedSeqLike(that)) {
    b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, that.size__I())
  };
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(that);
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Traversable());
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  return that.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O($$this.seq__Lscala_collection_TraversableOnce(), ScalaJS.modules.scala_collection_package().breakOut__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom(bf))
});
ScalaJS.impls.scala_collection_TraversableLike$class__map__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  var b = ScalaJS.impls.scala_collection_TraversableLike$class__builder$1__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__Lscala_collection_mutable_Builder($$this, bf);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, f$4) {
    return (function(x) {
      return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(f$4.apply__O__O(x))
    })
  })(b, f)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__flatMap__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  var b = ScalaJS.impls.scala_collection_TraversableLike$class__builder$2__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__Lscala_collection_mutable_Builder($$this, bf);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$2, f$5) {
    return (function(x) {
      return ScalaJS.as.scala_collection_mutable_Builder(b$2.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_GenTraversableOnce(f$5.apply__O__O(x)).seq__Lscala_collection_TraversableOnce()))
    })
  })(b, f)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__filter__Lscala_collection_TraversableLike__Lscala_Function1__O = (function($$this, p) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$3, p$1) {
    return (function(x) {
      if (ScalaJS.uZ(p$1.apply__O__O(x))) {
        return b$3.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(b, p)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__filterNot__Lscala_collection_TraversableLike__Lscala_Function1__O = (function($$this, p) {
  return $$this.filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$2) {
    return (function(x$1) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$2.apply__O__O(x$1))))
    })
  })(p)))
});
ScalaJS.impls.scala_collection_TraversableLike$class__collect__Lscala_collection_TraversableLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function($$this, pf, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$4, pf$1) {
    return (function(x) {
      if (pf$1.isDefinedAt__O__Z(x)) {
        return b$4.$$plus$eq__O__Lscala_collection_mutable_Builder(pf$1.apply__O__O(x))
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(b, pf)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__partition__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  var l = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var r = $$this.newBuilder__Lscala_collection_mutable_Builder();
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(l$1, r$1, p$3) {
    return (function(x) {
      if (ScalaJS.uZ(p$3.apply__O__O(x))) {
        var jsx$1 = l$1
      } else {
        var jsx$1 = r$1
      };
      return jsx$1.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
    })
  })(l, r, p)));
  return new ScalaJS.c.scala_Tuple2().init___O__O(l.result__O(), r.result__O())
});
ScalaJS.impls.scala_collection_TraversableLike$class__groupBy__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_immutable_Map = (function($$this, f) {
  var m = ScalaJS.modules.scala_collection_mutable_Map().empty__Lscala_collection_mutable_Map();
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$groupBy$1().init___Lscala_collection_TraversableLike__Lscala_collection_mutable_Map__Lscala_Function1($$this, m, f));
  var b = ScalaJS.modules.scala_collection_immutable_Map().newBuilder__Lscala_collection_mutable_Builder();
  m.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$2 = true;
          break matchEnd3
        };
        var jsx$2 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$2)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$5) {
    return (function(x$2) {
      var x1 = x$2;
      if ((x1 !== null)) {
        var k = x1.$$und1__O();
        var v = ScalaJS.as.scala_collection_mutable_Builder(x1.$$und2__O());
        return b$5.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(k, v.result__O()))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })(b)));
  return ScalaJS.as.scala_collection_immutable_Map(b.result__O())
});
ScalaJS.impls.scala_collection_TraversableLike$class__forall__Lscala_collection_TraversableLike__Lscala_Function1__Z = (function($$this, p) {
  var result = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$forall$1().init___Lscala_collection_TraversableLike__Lscala_runtime_BooleanRef__Lscala_Function1($$this, result, p));
  return result.elem$1
});
ScalaJS.impls.scala_collection_TraversableLike$class__exists__Lscala_collection_TraversableLike__Lscala_Function1__Z = (function($$this, p) {
  var result = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$exists$1().init___Lscala_collection_TraversableLike__Lscala_runtime_BooleanRef__Lscala_Function1($$this, result, p));
  return result.elem$1
});
ScalaJS.impls.scala_collection_TraversableLike$class__find__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Option = (function($$this, p) {
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_None());
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$find$1().init___Lscala_collection_TraversableLike__Lscala_runtime_ObjectRef__Lscala_Function1($$this, result, p));
  return ScalaJS.as.scala_Option(result.elem$1)
});
ScalaJS.impls.scala_collection_TraversableLike$class__scan__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, z, op, cbf) {
  return $$this.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z, op, cbf)
});
ScalaJS.impls.scala_collection_TraversableLike$class__scanLeft__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, z, op, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, 1);
  var acc = new ScalaJS.c.scala_runtime_ObjectRef().init___O(z);
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(acc.elem$1);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$6, acc$1, op$1) {
    return (function(x) {
      acc$1.elem$1 = op$1.apply__O__O__O(acc$1.elem$1, x);
      return b$6.$$plus$eq__O__Lscala_collection_mutable_Builder(acc$1.elem$1)
    })
  })(b, acc, op)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__scanRight__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function($$this, z, op, bf) {
  var scanned = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [z]))));
  var acc = new ScalaJS.c.scala_runtime_ObjectRef().init___O(z);
  $$this.reversed__Lscala_collection_immutable_List().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(scanned$1, acc$2, op$2) {
    return (function(x) {
      acc$2.elem$1 = op$2.apply__O__O__O(x, acc$2.elem$1);
      scanned$1.elem$1 = ScalaJS.as.scala_collection_immutable_List(scanned$1.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(acc$2.elem$1);
      return ScalaJS.bV(undefined)
    })
  })(scanned, acc, op)));
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  ScalaJS.as.scala_collection_immutable_List(scanned.elem$1).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$7) {
    return (function(elem) {
      return b$7.$$plus$eq__O__Lscala_collection_mutable_Builder(elem)
    })
  })(b)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__head__Lscala_collection_TraversableLike__O = (function($$this) {
  var temp1 = new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      throw new ScalaJS.c.java_util_NoSuchElementException().init___()
    })
  })());
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(temp1);
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$head$1().init___Lscala_collection_TraversableLike__Lscala_runtime_ObjectRef($$this, result));
  return ScalaJS.as.scala_Function0(result.elem$1).apply__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__headOption__Lscala_collection_TraversableLike__Lscala_Option = (function($$this) {
  if ($$this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O($$this.head__O())
  }
});
ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O = (function($$this) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.tail")
  };
  return $$this.drop__I__O(1)
});
ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O = (function($$this) {
  var lst = new ScalaJS.c.scala_runtime_ObjectRef().init___O($$this.head__O());
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(lst$1) {
    return (function(x) {
      lst$1.elem$1 = x;
      return ScalaJS.bV(undefined)
    })
  })(lst)));
  return lst.elem$1
});
ScalaJS.impls.scala_collection_TraversableLike$class__lastOption__Lscala_collection_TraversableLike__Lscala_Option = (function($$this) {
  if ($$this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O($$this.last__O())
  }
});
ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O = (function($$this) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.init")
  };
  var lst = new ScalaJS.c.scala_runtime_ObjectRef().init___O($$this.head__O());
  var follow = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, -1);
  $$this.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(lst$2, follow$1, b$8) {
    return (function(x) {
      if (follow$1.elem$1) {
        b$8.$$plus$eq__O__Lscala_collection_mutable_Builder(lst$2.elem$1)
      } else {
        follow$1.elem$1 = true;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      lst$2.elem$1 = x;
      return ScalaJS.bV(undefined)
    })
  })(lst, follow, b)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__take__Lscala_collection_TraversableLike__I__O = (function($$this, n) {
  return $$this.slice__I__I__O(0, n)
});
ScalaJS.impls.scala_collection_TraversableLike$class__drop__Lscala_collection_TraversableLike__I__O = (function($$this, n) {
  if ((n <= 0)) {
    var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
    b.sizeHint__Lscala_collection_TraversableLike__V($$this);
    return ScalaJS.as.scala_collection_mutable_Builder(b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Traversable())).result__O()
  } else {
    return $$this.sliceWithKnownDelta__I__I__I__O(n, 2147483647, (-n))
  }
});
ScalaJS.impls.scala_collection_TraversableLike$class__slice__Lscala_collection_TraversableLike__I__I__O = (function($$this, from, until) {
  return $$this.sliceWithKnownBound__I__I__O(ScalaJS.modules.scala_math_package().max__I__I__I(from, 0), until)
});
ScalaJS.impls.scala_collection_TraversableLike$class__scala$collection$TraversableLike$$sliceInternal__Lscala_collection_TraversableLike__I__I__Lscala_collection_mutable_Builder__O = (function($$this, from, until, b) {
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$scala$collection$TraversableLike$$sliceInternal$1().init___Lscala_collection_TraversableLike__I__I__Lscala_collection_mutable_Builder__Lscala_runtime_IntRef($$this, from, until, b, i));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownDelta__Lscala_collection_TraversableLike__I__I__I__O = (function($$this, from, until, delta) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  if ((until <= from)) {
    return b.result__O()
  } else {
    b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, delta);
    return ScalaJS.impls.scala_collection_TraversableLike$class__scala$collection$TraversableLike$$sliceInternal__Lscala_collection_TraversableLike__I__I__Lscala_collection_mutable_Builder__O($$this, from, until, b)
  }
});
ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownBound__Lscala_collection_TraversableLike__I__I__O = (function($$this, from, until) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  if ((until <= from)) {
    return b.result__O()
  } else {
    b.sizeHintBounded__I__Lscala_collection_TraversableLike__V((until - from), $$this);
    return ScalaJS.impls.scala_collection_TraversableLike$class__scala$collection$TraversableLike$$sliceInternal__Lscala_collection_TraversableLike__I__I__Lscala_collection_mutable_Builder__O($$this, from, until, b)
  }
});
ScalaJS.impls.scala_collection_TraversableLike$class__takeWhile__Lscala_collection_TraversableLike__Lscala_Function1__O = (function($$this, p) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$takeWhile$1().init___Lscala_collection_TraversableLike__Lscala_collection_mutable_Builder__Lscala_Function1($$this, b, p));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__dropWhile__Lscala_collection_TraversableLike__Lscala_Function1__O = (function($$this, p) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var go = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$11, go$1, p$8) {
    return (function(x) {
      if (((!go$1.elem$1) && (!ScalaJS.uZ(p$8.apply__O__O(x))))) {
        go$1.elem$1 = true
      };
      if (go$1.elem$1) {
        return b$11.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(b, go, p)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__span__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  var l = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var r = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var toLeft = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(l$2, r$2, toLeft$1, p$9) {
    return (function(x) {
      toLeft$1.elem$1 = (toLeft$1.elem$1 && ScalaJS.uZ(p$9.apply__O__O(x)));
      if (toLeft$1.elem$1) {
        var jsx$3 = l$2
      } else {
        var jsx$3 = r$2
      };
      return jsx$3.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
    })
  })(l, r, toLeft, p)));
  return new ScalaJS.c.scala_Tuple2().init___O__O(l.result__O(), r.result__O())
});
ScalaJS.impls.scala_collection_TraversableLike$class__splitAt__Lscala_collection_TraversableLike__I__Lscala_Tuple2 = (function($$this, n) {
  var l = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var r = $$this.newBuilder__Lscala_collection_mutable_Builder();
  l.sizeHintBounded__I__Lscala_collection_TraversableLike__V(n, $$this);
  if ((n >= 0)) {
    r.sizeHint__Lscala_collection_TraversableLike__I__V($$this, (-n))
  };
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(l$3, r$3, i$2, n$1) {
    return (function(x) {
      if ((i$2.elem$1 < n$1)) {
        var jsx$4 = l$3
      } else {
        var jsx$4 = r$3
      };
      jsx$4.$$plus$eq__O__Lscala_collection_mutable_Builder(x);
      i$2.elem$1 = (i$2.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(l, r, i, n)));
  return new ScalaJS.c.scala_Tuple2().init___O__O(l.result__O(), r.result__O())
});
ScalaJS.impls.scala_collection_TraversableLike$class__tails__Lscala_collection_TraversableLike__Lscala_collection_Iterator = (function($$this) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__iterateUntilEmpty__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_Iterator($$this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$3) {
      return ScalaJS.as.scala_collection_Traversable(x$3.tail__O())
    })
  })()))
});
ScalaJS.impls.scala_collection_TraversableLike$class__inits__Lscala_collection_TraversableLike__Lscala_collection_Iterator = (function($$this) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__iterateUntilEmpty__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_Iterator($$this, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$4) {
      return ScalaJS.as.scala_collection_Traversable(x$4.init__O())
    })
  })()))
});
ScalaJS.impls.scala_collection_TraversableLike$class__copyToArray__Lscala_collection_TraversableLike__O__I__I__V = (function($$this, xs, start, len) {
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(start);
  var end = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((start + len)), ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs));
  ScalaJS.modules.scala_collection_Traversable().breaks__Lscala_util_control_Breaks().breakable__Lscala_Function0__V(new ScalaJS.c.scala_collection_TraversableLike$$anonfun$copyToArray$1().init___Lscala_collection_TraversableLike__Lscala_runtime_IntRef__I__O($$this, i, end, xs))
});
ScalaJS.impls.scala_collection_TraversableLike$class__toTraversable__Lscala_collection_TraversableLike__Lscala_collection_Traversable = (function($$this) {
  return $$this.thisCollection__Lscala_collection_Traversable()
});
ScalaJS.impls.scala_collection_TraversableLike$class__toIterator__Lscala_collection_TraversableLike__Lscala_collection_Iterator = (function($$this) {
  return $$this.toStream__Lscala_collection_immutable_Stream().iterator__Lscala_collection_Iterator()
});
ScalaJS.impls.scala_collection_TraversableLike$class__toStream__Lscala_collection_TraversableLike__Lscala_collection_immutable_Stream = (function($$this) {
  return $$this.toBuffer__Lscala_collection_mutable_Buffer().toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.impls.scala_collection_TraversableLike$class__to__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__O = (function($$this, cbf) {
  var b = cbf.apply__Lscala_collection_mutable_Builder();
  b.sizeHint__Lscala_collection_TraversableLike__V($$this);
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Traversable());
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableLike$class__toString__Lscala_collection_TraversableLike__T = (function($$this) {
  return $$this.mkString__T__T__T__T((("" + $$this.stringPrefix__T()) + "("), ", ", ")")
});
ScalaJS.impls.scala_collection_TraversableLike$class__stringPrefix__Lscala_collection_TraversableLike__T = (function($$this) {
  var string = ScalaJS.objectGetClass($$this.repr__O()).getName__T();
  var idx1 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__lastIndexOf__Lscala_scalajs_runtime_RuntimeString__I__I(string, 46);
  if ((idx1 !== -1)) {
    string = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__T(string, (idx1 + 1))
  };
  var idx2 = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__indexOf__Lscala_scalajs_runtime_RuntimeString__I__I(string, 36);
  if ((idx2 !== -1)) {
    string = ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T(string, 0, idx2)
  };
  return string
});
ScalaJS.impls.scala_collection_TraversableLike$class__view__Lscala_collection_TraversableLike__Lscala_collection_TraversableView = (function($$this) {
  return new ScalaJS.c.scala_collection_TraversableLike$$anon$1().init___Lscala_collection_TraversableLike($$this)
});
ScalaJS.impls.scala_collection_TraversableLike$class__view__Lscala_collection_TraversableLike__I__I__Lscala_collection_TraversableView = (function($$this, from, until) {
  return $$this.view__Lscala_collection_TraversableView().slice__I__I__Lscala_collection_TraversableView(from, until)
});
ScalaJS.impls.scala_collection_TraversableLike$class__withFilter__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function($$this, p) {
  return new ScalaJS.c.scala_collection_TraversableLike$WithFilter().init___Lscala_collection_TraversableLike__Lscala_Function1($$this, p)
});
ScalaJS.impls.scala_collection_TraversableLike$class__iterateUntilEmpty__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_Iterator = (function($$this, f) {
  var it = ScalaJS.modules.scala_collection_Iterator().iterate__O__Lscala_Function1__Lscala_collection_Iterator($$this.thisCollection__Lscala_collection_Traversable(), f).takeWhile__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.bZ((!x.isEmpty__Z()))
    })
  })()));
  return it.$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_immutable_Nil$.getArrayOf(), [ScalaJS.modules.scala_collection_immutable_Nil()]), 1)))
    })
  })())).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      return ScalaJS.as.scala_collection_mutable_Builder(arg$outer.newBuilder__Lscala_collection_mutable_Builder().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(x)).result__O()
    })
  })($$this)))
});
ScalaJS.impls.scala_collection_TraversableLike$class__builder$1__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__Lscala_collection_mutable_Builder = (function($$this, bf$1) {
  var b = bf$1.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  b.sizeHint__Lscala_collection_TraversableLike__V($$this);
  return b
});
ScalaJS.impls.scala_collection_TraversableLike$class__builder$2__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__Lscala_collection_mutable_Builder = (function($$this, bf$2) {
  return bf$2.apply__O__Lscala_collection_mutable_Builder($$this.repr__O())
});
ScalaJS.impls.scala_collection_TraversableLike$class__$init$__Lscala_collection_TraversableLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=TraversableLike$class.js.map
