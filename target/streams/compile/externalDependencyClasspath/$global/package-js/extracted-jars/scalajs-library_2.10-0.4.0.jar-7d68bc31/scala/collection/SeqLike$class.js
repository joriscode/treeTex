ScalaJS.impls.scala_collection_SeqLike$class__thisCollection__Lscala_collection_SeqLike__Lscala_collection_Seq = (function($$this) {
  return ScalaJS.as.scala_collection_Seq($$this)
});
ScalaJS.impls.scala_collection_SeqLike$class__toCollection__Lscala_collection_SeqLike__O__Lscala_collection_Seq = (function($$this, repr) {
  return ScalaJS.as.scala_collection_Seq(repr)
});
ScalaJS.impls.scala_collection_SeqLike$class__parCombiner__Lscala_collection_SeqLike__Lscala_collection_parallel_Combiner = (function($$this) {
  return ScalaJS.modules.scala_collection_parallel_ParSeq().newCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.impls.scala_collection_SeqLike$class__lengthCompare__Lscala_collection_SeqLike__I__I = (function($$this, len) {
  if ((len < 0)) {
    return 1
  } else {
    var i = 0;
    var it = $$this.iterator__Lscala_collection_Iterator();
    while (it.hasNext__Z()) {
      if ((i === len)) {
        if (it.hasNext__Z()) {
          return 1
        } else {
          return 0
        }
      };
      it.next__O();
      i = (i + 1)
    };
    return (i - len)
  }
});
ScalaJS.impls.scala_collection_SeqLike$class__isEmpty__Lscala_collection_SeqLike__Z = (function($$this) {
  return ($$this.lengthCompare__I__I(0) === 0)
});
ScalaJS.impls.scala_collection_SeqLike$class__size__Lscala_collection_SeqLike__I = (function($$this) {
  return $$this.length__I()
});
ScalaJS.impls.scala_collection_SeqLike$class__segmentLength__Lscala_collection_SeqLike__Lscala_Function1__I__I = (function($$this, p, from) {
  var i = 0;
  var it = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(from);
  while ((it.hasNext__Z() && ScalaJS.uZ(p.apply__O__O(it.next__O())))) {
    i = (i + 1)
  };
  return i
});
ScalaJS.impls.scala_collection_SeqLike$class__indexWhere__Lscala_collection_SeqLike__Lscala_Function1__I__I = (function($$this, p, from) {
  var i = from;
  var it = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(from);
  while (it.hasNext__Z()) {
    if (ScalaJS.uZ(p.apply__O__O(it.next__O()))) {
      return i
    } else {
      i = (i + 1)
    }
  };
  return -1
});
ScalaJS.impls.scala_collection_SeqLike$class__lastIndexWhere__Lscala_collection_SeqLike__Lscala_Function1__I__I = (function($$this, p, end) {
  var i = ($$this.length__I() - 1);
  var it = $$this.reverseIterator__Lscala_collection_Iterator();
  while (true) {
    if (it.hasNext__Z()) {
      var elem = it.next__O();
      var jsx$1 = ((i > end) || (!ScalaJS.uZ(p.apply__O__O(elem))))
    } else {
      var jsx$1 = false
    };
    if (jsx$1) {
      i = (i - 1)
    } else {
      break
    }
  };
  return i
});
ScalaJS.impls.scala_collection_SeqLike$class__permutations__Lscala_collection_SeqLike__Lscala_collection_Iterator = (function($$this) {
  if ($$this.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [$$this.repr__O()])))
  } else {
    return new ScalaJS.c.scala_collection_SeqLike$PermutationsItr().init___Lscala_collection_SeqLike($$this)
  }
});
ScalaJS.impls.scala_collection_SeqLike$class__combinations__Lscala_collection_SeqLike__I__Lscala_collection_Iterator = (function($$this, n) {
  if (((n < 0) || (n > $$this.size__I()))) {
    return ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator()
  } else {
    return new ScalaJS.c.scala_collection_SeqLike$CombinationsItr().init___Lscala_collection_SeqLike__I($$this, n)
  }
});
ScalaJS.impls.scala_collection_SeqLike$class__reverse__Lscala_collection_SeqLike__O = (function($$this) {
  var xs = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_Nil());
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(xs$1) {
    return (function(x) {
      var jsx$3 = xs$1;
      var x$10 = x;
      var jsx$2 = ScalaJS.as.scala_collection_immutable_List(xs$1.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(x$10);
      jsx$3.elem$1 = jsx$2;
      return ScalaJS.bV(undefined)
    })
  })(xs)));
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__Lscala_collection_TraversableLike__V($$this);
  ScalaJS.as.scala_collection_immutable_List(xs.elem$1).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1) {
    return (function(x) {
      return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
    })
  })(b)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__reverseMap__Lscala_collection_SeqLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function($$this, f, bf) {
  var xs = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_Nil());
  $$this.seq__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(xs$2) {
    return (function(x) {
      var jsx$5 = xs$2;
      var x$11 = x;
      var jsx$4 = ScalaJS.as.scala_collection_immutable_List(xs$2.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(x$11);
      jsx$5.elem$1 = jsx$4;
      return ScalaJS.bV(undefined)
    })
  })(xs)));
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  ScalaJS.as.scala_collection_immutable_List(xs.elem$1).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$2, f$1) {
    return (function(x) {
      return b$2.$$plus$eq__O__Lscala_collection_mutable_Builder(f$1.apply__O__O(x))
    })
  })(b, f)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__reverseIterator__Lscala_collection_SeqLike__Lscala_collection_Iterator = (function($$this) {
  return $$this.toCollection__O__Lscala_collection_Seq($$this.reverse__O()).iterator__Lscala_collection_Iterator()
});
ScalaJS.impls.scala_collection_SeqLike$class__startsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__Z = (function($$this, that, offset) {
  var i = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(offset);
  var j = that.iterator__Lscala_collection_Iterator();
  while ((j.hasNext__Z() && i.hasNext__Z())) {
    if ((!ScalaJS.anyEqEq(i.next__O(), j.next__O()))) {
      return false
    }
  };
  return (!j.hasNext__Z())
});
ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z = (function($$this, that) {
  var i = $$this.iterator__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator(($$this.length__I() - that.length__I()));
  var j = that.iterator__Lscala_collection_Iterator();
  while ((i.hasNext__Z() && j.hasNext__Z())) {
    if ((!ScalaJS.anyEqEq(i.next__O(), j.next__O()))) {
      return false
    }
  };
  return (!j.hasNext__Z())
});
ScalaJS.impls.scala_collection_SeqLike$class__indexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I = (function($$this, that) {
  return $$this.indexOfSlice__Lscala_collection_GenSeq__I__I(that, 0)
});
ScalaJS.impls.scala_collection_SeqLike$class__indexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__I = (function($$this, that, from) {
  if (($$this.hasDefiniteSize__Z() && that.hasDefiniteSize__Z())) {
    var l = $$this.length__I();
    var tl = that.length__I();
    var clippedFrom = ScalaJS.modules.scala_math_package().max__I__I__I(0, from);
    if ((from > l)) {
      return -1
    } else {
      if ((tl < 1)) {
        return clippedFrom
      } else {
        if ((l < tl)) {
          return -1
        } else {
          return ScalaJS.modules.scala_collection_SeqLike().scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__I($$this.thisCollection__Lscala_collection_Seq(), clippedFrom, l, that.seq__Lscala_collection_Seq(), 0, tl, true)
        }
      }
    }
  } else {
    var i = from;
    var s = ScalaJS.as.scala_collection_Seq($$this.thisCollection__Lscala_collection_Seq().drop__I__O(i));
    while ((!s.isEmpty__Z())) {
      if (s.startsWith__Lscala_collection_GenSeq__Z(that)) {
        return i
      };
      i = (i + 1);
      s = ScalaJS.as.scala_collection_Seq(s.tail__O())
    };
    return -1
  }
});
ScalaJS.impls.scala_collection_SeqLike$class__lastIndexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I = (function($$this, that) {
  return $$this.lastIndexOfSlice__Lscala_collection_GenSeq__I__I(that, $$this.length__I())
});
ScalaJS.impls.scala_collection_SeqLike$class__lastIndexOfSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__I__I = (function($$this, that, end) {
  var l = $$this.length__I();
  var tl = that.length__I();
  var clippedL = ScalaJS.modules.scala_math_package().min__I__I__I((l - tl), end);
  if ((end < 0)) {
    return -1
  } else {
    if ((tl < 1)) {
      return clippedL
    } else {
      if ((l < tl)) {
        return -1
      } else {
        return ScalaJS.modules.scala_collection_SeqLike().scala$collection$SeqLike$$kmpSearch__Lscala_collection_Seq__I__I__Lscala_collection_Seq__I__I__Z__I($$this.thisCollection__Lscala_collection_Seq(), 0, (clippedL + tl), that.seq__Lscala_collection_Seq(), 0, tl, false)
      }
    }
  }
});
ScalaJS.impls.scala_collection_SeqLike$class__containsSlice__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z = (function($$this, that) {
  return ($$this.indexOfSlice__Lscala_collection_GenSeq__I(that) !== -1)
});
ScalaJS.impls.scala_collection_SeqLike$class__contains__Lscala_collection_SeqLike__O__Z = (function($$this, elem) {
  return $$this.exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elem$1) {
    return (function(x$12) {
      return ScalaJS.bZ(ScalaJS.anyEqEq(x$12, elem$1))
    })
  })(elem)))
});
ScalaJS.impls.scala_collection_SeqLike$class__union__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  return $$this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that, bf)
});
ScalaJS.impls.scala_collection_SeqLike$class__diff__Lscala_collection_SeqLike__Lscala_collection_GenSeq__O = (function($$this, that) {
  var occ = ScalaJS.impls.scala_collection_SeqLike$class__occCounts__Lscala_collection_SeqLike__Lscala_collection_Seq__Lscala_collection_mutable_Map($$this, that.seq__Lscala_collection_Seq());
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(occ$1, b$3) {
    return (function(x) {
      if ((ScalaJS.uI(occ$1.apply__O__O(x)) === 0)) {
        return b$3.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
      } else {
        occ$1.update__O__O__V(x, ScalaJS.bI((ScalaJS.uI(occ$1.apply__O__O(x)) - 1)));
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(occ, b)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__intersect__Lscala_collection_SeqLike__Lscala_collection_GenSeq__O = (function($$this, that) {
  var occ = ScalaJS.impls.scala_collection_SeqLike$class__occCounts__Lscala_collection_SeqLike__Lscala_collection_Seq__Lscala_collection_mutable_Map($$this, that.seq__Lscala_collection_Seq());
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(occ$2, b$4) {
    return (function(x) {
      if ((ScalaJS.uI(occ$2.apply__O__O(x)) > 0)) {
        b$4.$$plus$eq__O__Lscala_collection_mutable_Builder(x);
        occ$2.update__O__O__V(x, ScalaJS.bI((ScalaJS.uI(occ$2.apply__O__O(x)) - 1)))
      };
      return ScalaJS.bV(undefined)
    })
  })(occ, b)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__occCounts__Lscala_collection_SeqLike__Lscala_collection_Seq__Lscala_collection_mutable_Map = (function($$this, sq) {
  var occ = new ScalaJS.c.scala_collection_SeqLike$$anon$1().init___Lscala_collection_SeqLike($$this);
  sq.seq__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(occ$3) {
    return (function(y) {
      occ$3.update__O__O__V(y, ScalaJS.bI((ScalaJS.uI(occ$3.apply__O__O(y)) + 1)));
      return ScalaJS.bV(undefined)
    })
  })(occ)));
  return occ
});
ScalaJS.impls.scala_collection_SeqLike$class__distinct__Lscala_collection_SeqLike__O = (function($$this) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var seen = ScalaJS.as.scala_collection_mutable_HashSet(ScalaJS.modules.scala_collection_mutable_HashSet().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()));
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$5, seen$1) {
    return (function(x) {
      if ((!seen$1.apply__O__Z(x))) {
        b$5.$$plus$eq__O__Lscala_collection_mutable_Builder(x);
        return seen$1.$$plus$eq__O__Lscala_collection_mutable_HashSet(x)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(b, seen)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__patch__Lscala_collection_SeqLike__I__Lscala_collection_GenSeq__I__Lscala_collection_generic_CanBuildFrom__O = (function($$this, from, patch, replaced, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  var x1 = $$this.splitAt__I__Lscala_Tuple2(from);
  matchEnd3: {
    if ((x1 !== null)) {
      var prefix = x1.$$und1__O();
      var rest = x1.$$und2__O();
      var x$13 = new ScalaJS.c.scala_Tuple2().init___O__O(prefix, rest);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var prefix$2 = x$13.$$und1__O();
  var rest$2 = x$13.$$und2__O();
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.toCollection__O__Lscala_collection_Seq(prefix$2));
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(patch.seq__Lscala_collection_Seq());
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.toCollection__O__Lscala_collection_Seq(rest$2).view__Lscala_collection_SeqView().drop__I__Lscala_collection_IterableView(replaced));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__updated__Lscala_collection_SeqLike__I__O__Lscala_collection_generic_CanBuildFrom__O = (function($$this, index, elem, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  var x1 = $$this.splitAt__I__Lscala_Tuple2(index);
  matchEnd3: {
    if ((x1 !== null)) {
      var prefix = x1.$$und1__O();
      var rest = x1.$$und2__O();
      var x$14 = new ScalaJS.c.scala_Tuple2().init___O__O(prefix, rest);
      break matchEnd3
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  var prefix$2 = x$14.$$und1__O();
  var rest$2 = x$14.$$und2__O();
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.toCollection__O__Lscala_collection_Seq(prefix$2));
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(elem);
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(ScalaJS.as.scala_collection_TraversableOnce($$this.toCollection__O__Lscala_collection_Seq(rest$2).view__Lscala_collection_SeqView().tail__O()));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__$plus$colon__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O = (function($$this, elem, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(elem);
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Seq());
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__$colon$plus__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O = (function($$this, elem, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Seq());
  b.$$plus$eq__O__Lscala_collection_mutable_Builder(elem);
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__padTo__Lscala_collection_SeqLike__I__O__Lscala_collection_generic_CanBuildFrom__O = (function($$this, len, elem, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  b.sizeHint__I__V(ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.length__I()), len));
  var diff = (len - $$this.length__I());
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.thisCollection__Lscala_collection_Seq());
  while ((diff > 0)) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(elem);
    diff = (diff - 1)
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__corresponds__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z = (function($$this, that, p) {
  var i = $$this.iterator__Lscala_collection_Iterator();
  var j = that.iterator__Lscala_collection_Iterator();
  while ((i.hasNext__Z() && j.hasNext__Z())) {
    if ((!ScalaJS.uZ(p.apply__O__O__O(i.next__O(), j.next__O())))) {
      return false
    }
  };
  return ((!i.hasNext__Z()) && (!j.hasNext__Z()))
});
ScalaJS.impls.scala_collection_SeqLike$class__sortWith__Lscala_collection_SeqLike__Lscala_Function2__O = (function($$this, lt) {
  return $$this.sorted__Lscala_math_Ordering__O(ScalaJS.modules.scala_math_Ordering().fromLessThan__Lscala_Function2__Lscala_math_Ordering(lt))
});
ScalaJS.impls.scala_collection_SeqLike$class__sortBy__Lscala_collection_SeqLike__Lscala_Function1__Lscala_math_Ordering__O = (function($$this, f, ord) {
  return $$this.sorted__Lscala_math_Ordering__O(ord.on__Lscala_Function1__Lscala_math_Ordering(f))
});
ScalaJS.impls.scala_collection_SeqLike$class__sorted__Lscala_collection_SeqLike__Lscala_math_Ordering__O = (function($$this, ord) {
  var len = $$this.length__I();
  var arr = new ScalaJS.c.scala_collection_mutable_ArraySeq().init___I(len);
  var i = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  $$this.seq__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arr$1, i$1) {
    return (function(x) {
      arr$1.update__I__O__V(i$1.elem$1, x);
      i$1.elem$1 = (i$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(arr, i)));
  ScalaJS.modules.java_util_Arrays().sort__AO__Ljava_util_Comparator__V(arr.array__AO(), ord);
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__I__V(len);
  arr.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$6) {
    return (function(x) {
      return b$6.$$plus$eq__O__Lscala_collection_mutable_Builder(x)
    })
  })(b)));
  return b.result__O()
});
ScalaJS.impls.scala_collection_SeqLike$class__toSeq__Lscala_collection_SeqLike__Lscala_collection_Seq = (function($$this) {
  return $$this.thisCollection__Lscala_collection_Seq()
});
ScalaJS.impls.scala_collection_SeqLike$class__indices__Lscala_collection_SeqLike__Lscala_collection_immutable_Range = (function($$this) {
  return ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), $$this.length__I())
});
ScalaJS.impls.scala_collection_SeqLike$class__view__Lscala_collection_SeqLike__Lscala_collection_SeqView = (function($$this) {
  return new ScalaJS.c.scala_collection_SeqLike$$anon$2().init___Lscala_collection_SeqLike($$this)
});
ScalaJS.impls.scala_collection_SeqLike$class__view__Lscala_collection_SeqLike__I__I__Lscala_collection_SeqView = (function($$this, from, until) {
  return ScalaJS.as.scala_collection_SeqView($$this.view__Lscala_collection_SeqView().slice__I__I__Lscala_collection_TraversableView(from, until))
});
ScalaJS.impls.scala_collection_SeqLike$class__toString__Lscala_collection_SeqLike__T = (function($$this) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toString__Lscala_collection_TraversableLike__T($$this)
});
ScalaJS.impls.scala_collection_SeqLike$class__$init$__Lscala_collection_SeqLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=SeqLike$class.js.map
