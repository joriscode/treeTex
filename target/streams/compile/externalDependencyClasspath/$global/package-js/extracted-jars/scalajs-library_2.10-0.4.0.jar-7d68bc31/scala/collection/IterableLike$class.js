ScalaJS.impls.scala_collection_IterableLike$class__thisCollection__Lscala_collection_IterableLike__Lscala_collection_Iterable = (function($$this) {
  return ScalaJS.as.scala_collection_Iterable($$this)
});
ScalaJS.impls.scala_collection_IterableLike$class__toCollection__Lscala_collection_IterableLike__O__Lscala_collection_Iterable = (function($$this, repr) {
  return ScalaJS.as.scala_collection_Iterable(repr)
});
ScalaJS.impls.scala_collection_IterableLike$class__foreach__Lscala_collection_IterableLike__Lscala_Function1__V = (function($$this, f) {
  $$this.iterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(f)
});
ScalaJS.impls.scala_collection_IterableLike$class__forall__Lscala_collection_IterableLike__Lscala_Function1__Z = (function($$this, p) {
  return $$this.iterator__Lscala_collection_Iterator().forall__Lscala_Function1__Z(p)
});
ScalaJS.impls.scala_collection_IterableLike$class__exists__Lscala_collection_IterableLike__Lscala_Function1__Z = (function($$this, p) {
  return $$this.iterator__Lscala_collection_Iterator().exists__Lscala_Function1__Z(p)
});
ScalaJS.impls.scala_collection_IterableLike$class__find__Lscala_collection_IterableLike__Lscala_Function1__Lscala_Option = (function($$this, p) {
  return $$this.iterator__Lscala_collection_Iterator().find__Lscala_Function1__Lscala_Option(p)
});
ScalaJS.impls.scala_collection_IterableLike$class__isEmpty__Lscala_collection_IterableLike__Z = (function($$this) {
  return (!$$this.iterator__Lscala_collection_Iterator().hasNext__Z())
});
ScalaJS.impls.scala_collection_IterableLike$class__foldRight__Lscala_collection_IterableLike__O__Lscala_Function2__O = (function($$this, z, op) {
  return $$this.iterator__Lscala_collection_Iterator().foldRight__O__Lscala_Function2__O(z, op)
});
ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O = (function($$this, op) {
  return $$this.iterator__Lscala_collection_Iterator().reduceRight__Lscala_Function2__O(op)
});
ScalaJS.impls.scala_collection_IterableLike$class__toIterable__Lscala_collection_IterableLike__Lscala_collection_Iterable = (function($$this) {
  return $$this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.impls.scala_collection_IterableLike$class__toIterator__Lscala_collection_IterableLike__Lscala_collection_Iterator = (function($$this) {
  return $$this.iterator__Lscala_collection_Iterator()
});
ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O = (function($$this) {
  return $$this.iterator__Lscala_collection_Iterator().next__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__slice__Lscala_collection_IterableLike__I__I__O = (function($$this, from, until) {
  var lo = ScalaJS.modules.scala_math_package().max__I__I__I(from, 0);
  var elems = (until - lo);
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  if ((elems <= 0)) {
    return b.result__O()
  } else {
    b.sizeHintBounded__I__Lscala_collection_TraversableLike__V(elems, $$this);
    var i = 0;
    var it = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(lo);
    while (((i < elems) && it.hasNext__Z())) {
      b.$$plus$eq__O__Lscala_collection_mutable_Builder(it.next__O());
      i = (i + 1)
    };
    return b.result__O()
  }
});
ScalaJS.impls.scala_collection_IterableLike$class__take__Lscala_collection_IterableLike__I__O = (function($$this, n) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  if ((n <= 0)) {
    return b.result__O()
  } else {
    b.sizeHintBounded__I__Lscala_collection_TraversableLike__V(n, $$this);
    var i = 0;
    var it = $$this.iterator__Lscala_collection_Iterator();
    while (((i < n) && it.hasNext__Z())) {
      b.$$plus$eq__O__Lscala_collection_mutable_Builder(it.next__O());
      i = (i + 1)
    };
    return b.result__O()
  }
});
ScalaJS.impls.scala_collection_IterableLike$class__drop__Lscala_collection_IterableLike__I__O = (function($$this, n) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var lo = ScalaJS.modules.scala_math_package().max__I__I__I(0, n);
  b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, (-lo));
  var i = 0;
  var it = $$this.iterator__Lscala_collection_Iterator();
  while (((i < n) && it.hasNext__Z())) {
    it.next__O();
    i = (i + 1)
  };
  return ScalaJS.as.scala_collection_mutable_Builder(b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(it)).result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__takeWhile__Lscala_collection_IterableLike__Lscala_Function1__O = (function($$this, p) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var it = $$this.iterator__Lscala_collection_Iterator();
  while (it.hasNext__Z()) {
    var x = it.next__O();
    if ((!ScalaJS.uZ(p.apply__O__O(x)))) {
      return b.result__O()
    };
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__grouped__Lscala_collection_IterableLike__I__Lscala_collection_Iterator = (function($$this, size) {
  return $$this.iterator__Lscala_collection_Iterator().grouped__I__Lscala_collection_Iterator$GroupedIterator(size).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(xs) {
      var b = arg$outer.newBuilder__Lscala_collection_mutable_Builder();
      b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs);
      return b.result__O()
    })
  })($$this)))
});
ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__Lscala_collection_Iterator = (function($$this, size) {
  return $$this.sliding__I__I__Lscala_collection_Iterator(size, 1)
});
ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__I__Lscala_collection_Iterator = (function($$this, size, step) {
  return $$this.iterator__Lscala_collection_Iterator().sliding__I__I__Lscala_collection_Iterator$GroupedIterator(size, step).map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(xs) {
      var b = arg$outer.newBuilder__Lscala_collection_mutable_Builder();
      b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs);
      return b.result__O()
    })
  })($$this)))
});
ScalaJS.impls.scala_collection_IterableLike$class__takeRight__Lscala_collection_IterableLike__I__O = (function($$this, n) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHintBounded__I__Lscala_collection_TraversableLike__V(n, $$this);
  var lead = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(n);
  var go = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(false);
  $$this.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, lead$1, go$1) {
    return (function(x) {
      if (lead$1.hasNext__Z()) {
        lead$1.next__O()
      } else {
        go$1.elem$1 = true;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      };
      if (go$1.elem$1) {
        return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(b, lead, go)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__dropRight__Lscala_collection_IterableLike__I__O = (function($$this, n) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  if ((n >= 0)) {
    b.sizeHint__Lscala_collection_TraversableLike__I__V($$this, (-n))
  };
  var lead = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(n);
  var it = $$this.iterator__Lscala_collection_Iterator();
  while (lead.hasNext__Z()) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(it.next__O());
    lead.next__O()
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__copyToArray__Lscala_collection_IterableLike__O__I__I__V = (function($$this, xs, start, len) {
  var i = start;
  var end = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I((start + len)), ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs));
  var it = $$this.iterator__Lscala_collection_Iterator();
  while (((i < end) && it.hasNext__Z())) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(xs, i, it.next__O());
    i = (i + 1)
  }
});
ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  var these = $$this.iterator__Lscala_collection_Iterator();
  var those = that.iterator__Lscala_collection_Iterator();
  while ((these.hasNext__Z() && those.hasNext__Z())) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(these.next__O(), those.next__O()))
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__zipAll__Lscala_collection_IterableLike__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, thisElem, thatElem, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  var these = $$this.iterator__Lscala_collection_Iterator();
  var those = that.iterator__Lscala_collection_Iterator();
  while ((these.hasNext__Z() && those.hasNext__Z())) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(these.next__O(), those.next__O()))
  };
  while (these.hasNext__Z()) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(these.next__O(), thatElem))
  };
  while (those.hasNext__Z()) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(thisElem, those.next__O()))
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__zipWithIndex__Lscala_collection_IterableLike__Lscala_collection_generic_CanBuildFrom__O = (function($$this, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$2, i$1) {
    return (function(x) {
      b$2.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O(x, ScalaJS.bI(i$1.elem$1)));
      i$1.elem$1 = (i$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(b, i)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z = (function($$this, that) {
  var these = $$this.iterator__Lscala_collection_Iterator();
  var those = that.iterator__Lscala_collection_Iterator();
  while ((these.hasNext__Z() && those.hasNext__Z())) {
    if ((!ScalaJS.anyEqEq(these.next__O(), those.next__O()))) {
      return false
    }
  };
  return ((!these.hasNext__Z()) && (!those.hasNext__Z()))
});
ScalaJS.impls.scala_collection_IterableLike$class__toStream__Lscala_collection_IterableLike__Lscala_collection_immutable_Stream = (function($$this) {
  return $$this.iterator__Lscala_collection_Iterator().toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.impls.scala_collection_IterableLike$class__canEqual__Lscala_collection_IterableLike__O__Z = (function($$this, that) {
  return true
});
ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__Lscala_collection_IterableView = (function($$this) {
  return new ScalaJS.c.scala_collection_IterableLike$$anon$1().init___Lscala_collection_IterableLike($$this)
});
ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__I__I__Lscala_collection_IterableView = (function($$this, from, until) {
  return ScalaJS.as.scala_collection_IterableView($$this.view__Lscala_collection_IterableView().slice__I__I__Lscala_collection_TraversableView(from, until))
});
ScalaJS.impls.scala_collection_IterableLike$class__$init$__Lscala_collection_IterableLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=IterableLike$class.js.map
