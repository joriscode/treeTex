ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__isEmpty__Lscala_collection_IndexedSeqOptimized__Z = (function($$this) {
  return ($$this.length__I() === 0)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foreach__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__V = (function($$this, f) {
  var i = 0;
  var len = $$this.length__I();
  while ((i < len)) {
    f.apply__O__O($$this.apply__I__O(i));
    i = (i + 1)
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__forall__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z = (function($$this, p) {
  return ($$this.prefixLength__Lscala_Function1__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$1) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.uZ(p$1.apply__O__O(x$1)))
    })
  })(p))) === $$this.length__I())
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__exists__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z = (function($$this, p) {
  return ($$this.prefixLength__Lscala_Function1__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$2) {
    return (function(x$2) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$2.apply__O__O(x$2))))
    })
  })(p))) !== $$this.length__I())
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__find__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Option = (function($$this, p) {
  var i = $$this.prefixLength__Lscala_Function1__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$3) {
    return (function(x$3) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$3.apply__O__O(x$3))))
    })
  })(p)));
  if ((i < $$this.length__I())) {
    return new ScalaJS.c.scala_Some().init___O($$this.apply__I__O(i))
  } else {
    return ScalaJS.modules.scala_None()
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldl__Lscala_collection_IndexedSeqOptimized__I__I__O__Lscala_Function2__O = (function($$this, start, end, z, op) {
  tailCallLoop: while (true) {
    if ((start === end)) {
      return z
    } else {
      var temp$start = (start + 1);
      var temp$z = op.apply__O__O__O(z, $$this.apply__I__O(start));
      start = temp$start;
      z = temp$z;
      continue tailCallLoop
    }
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldr__Lscala_collection_IndexedSeqOptimized__I__I__O__Lscala_Function2__O = (function($$this, start, end, z, op) {
  tailCallLoop: while (true) {
    if ((start === end)) {
      return z
    } else {
      var temp$end = (end - 1);
      var temp$z = op.apply__O__O__O($$this.apply__I__O((end - 1)), z);
      end = temp$end;
      z = temp$z;
      continue tailCallLoop
    }
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldLeft__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O = (function($$this, z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldl__Lscala_collection_IndexedSeqOptimized__I__I__O__Lscala_Function2__O($$this, 0, $$this.length__I(), z, op)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldRight__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O = (function($$this, z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldr__Lscala_collection_IndexedSeqOptimized__I__I__O__Lscala_Function2__O($$this, 0, $$this.length__I(), z, op)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceLeft__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O = (function($$this, op) {
  if (($$this.length__I() > 0)) {
    return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldl__Lscala_collection_IndexedSeqOptimized__I__I__O__Lscala_Function2__O($$this, 1, $$this.length__I(), $$this.apply__I__O(0), op)
  } else {
    return $$this.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O(op)
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceRight__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O = (function($$this, op) {
  if (($$this.length__I() > 0)) {
    return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldr__Lscala_collection_IndexedSeqOptimized__I__I__O__Lscala_Function2__O($$this, 0, ($$this.length__I() - 1), $$this.apply__I__O(($$this.length__I() - 1)), op)
  } else {
    return $$this.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O(op)
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zip__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function($$this, that, bf) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_IndexedSeq(x1);
    var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
    var i = 0;
    var len = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.length__I()), x2.length__I());
    b.sizeHint__I__V(len);
    while ((i < len)) {
      b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O($$this.apply__I__O(i), x2.apply__I__O(i)));
      i = (i + 1)
    };
    return b.result__O()
  };
  return $$this.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that, bf)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zipWithIndex__Lscala_collection_IndexedSeqOptimized__Lscala_collection_generic_CanBuildFrom__O = (function($$this, bf) {
  var b = bf.apply__O__Lscala_collection_mutable_Builder($$this.repr__O());
  var len = $$this.length__I();
  b.sizeHint__I__V(len);
  var i = 0;
  while ((i < len)) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_Tuple2().init___O__O($$this.apply__I__O(i), ScalaJS.bI(i)));
    i = (i + 1)
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__slice__Lscala_collection_IndexedSeqOptimized__I__I__O = (function($$this, from, until) {
  var lo = ScalaJS.modules.scala_math_package().max__I__I__I(from, 0);
  var hi = ScalaJS.modules.scala_math_package().min__I__I__I(ScalaJS.modules.scala_math_package().max__I__I__I(until, 0), $$this.length__I());
  var elems = ScalaJS.modules.scala_math_package().max__I__I__I((hi - lo), 0);
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__I__V(elems);
  var i = lo;
  while ((i < hi)) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder($$this.apply__I__O(i));
    i = (i + 1)
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__head__Lscala_collection_IndexedSeqOptimized__O = (function($$this) {
  if ($$this.isEmpty__Z()) {
    return $$this.scala$collection$IndexedSeqOptimized$$super$head__O()
  } else {
    return $$this.apply__I__O(0)
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__tail__Lscala_collection_IndexedSeqOptimized__O = (function($$this) {
  if ($$this.isEmpty__Z()) {
    return $$this.scala$collection$IndexedSeqOptimized$$super$tail__O()
  } else {
    return $$this.slice__I__I__O(1, $$this.length__I())
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__last__Lscala_collection_IndexedSeqOptimized__O = (function($$this) {
  if (($$this.length__I() > 0)) {
    return $$this.apply__I__O(($$this.length__I() - 1))
  } else {
    return $$this.scala$collection$IndexedSeqOptimized$$super$last__O()
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__init__Lscala_collection_IndexedSeqOptimized__O = (function($$this) {
  if (($$this.length__I() > 0)) {
    return $$this.slice__I__I__O(0, ($$this.length__I() - 1))
  } else {
    return $$this.scala$collection$IndexedSeqOptimized$$super$init__O()
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__take__Lscala_collection_IndexedSeqOptimized__I__O = (function($$this, n) {
  return $$this.slice__I__I__O(0, n)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__drop__Lscala_collection_IndexedSeqOptimized__I__O = (function($$this, n) {
  return $$this.slice__I__I__O(n, $$this.length__I())
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeRight__Lscala_collection_IndexedSeqOptimized__I__O = (function($$this, n) {
  return $$this.slice__I__I__O(($$this.length__I() - n), $$this.length__I())
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropRight__Lscala_collection_IndexedSeqOptimized__I__O = (function($$this, n) {
  return $$this.slice__I__I__O(0, ($$this.length__I() - n))
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__splitAt__Lscala_collection_IndexedSeqOptimized__I__Lscala_Tuple2 = (function($$this, n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O($$this.take__I__O(n), $$this.drop__I__O(n))
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O = (function($$this, p) {
  return $$this.take__I__O($$this.prefixLength__Lscala_Function1__I(p))
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O = (function($$this, p) {
  return $$this.drop__I__O($$this.prefixLength__Lscala_Function1__I(p))
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__span__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  return $$this.splitAt__I__Lscala_Tuple2($$this.prefixLength__Lscala_Function1__I(p))
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__sameElements__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_IndexedSeq(x1);
    var len = $$this.length__I();
    if ((len === x2.length__I())) {
      var i = 0;
      while (((i < len) && ScalaJS.anyEqEq($$this.apply__I__O(i), x2.apply__I__O(i)))) {
        i = (i + 1)
      };
      return (i === len)
    } else {
      return false
    }
  };
  return $$this.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__copyToArray__Lscala_collection_IndexedSeqOptimized__O__I__I__V = (function($$this, xs, start, len) {
  var i = 0;
  var j = start;
  var end = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.length__I()), len)), (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start));
  while ((i < end)) {
    ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(xs, j, $$this.apply__I__O(i));
    i = (i + 1);
    j = (j + 1)
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lengthCompare__Lscala_collection_IndexedSeqOptimized__I__I = (function($$this, len) {
  return ($$this.length__I() - len)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__segmentLength__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I = (function($$this, p, from) {
  var len = $$this.length__I();
  var i = from;
  while (((i < len) && ScalaJS.uZ(p.apply__O__O($$this.apply__I__O(i))))) {
    i = (i + 1)
  };
  return (i - from)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__negLength__Lscala_collection_IndexedSeqOptimized__I__I = (function($$this, n) {
  if ((n >= $$this.length__I())) {
    return -1
  } else {
    return n
  }
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__indexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I = (function($$this, p, from) {
  var start = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(from), 0);
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__negLength__Lscala_collection_IndexedSeqOptimized__I__I($$this, (start + $$this.segmentLength__Lscala_Function1__I__I(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$4) {
    return (function(x$4) {
      return ScalaJS.bZ((!ScalaJS.uZ(p$4.apply__O__O(x$4))))
    })
  })(p)), start)))
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lastIndexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I = (function($$this, p, end) {
  var i = end;
  while (((i >= 0) && (!ScalaJS.uZ(p.apply__O__O($$this.apply__I__O(i)))))) {
    i = (i - 1)
  };
  return i
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverse__Lscala_collection_IndexedSeqOptimized__O = (function($$this) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__I__V($$this.length__I());
  var i = $$this.length__I();
  while ((0 < i)) {
    i = (i - 1);
    b.$$plus$eq__O__Lscala_collection_mutable_Builder($$this.apply__I__O(i))
  };
  return b.result__O()
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverseIterator__Lscala_collection_IndexedSeqOptimized__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_IndexedSeqOptimized$$anon$1().init___Lscala_collection_IndexedSeqOptimized($$this)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__startsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__I__Z = (function($$this, that, offset) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_IndexedSeq(x1);
    var i = offset;
    var j = 0;
    var thisLen = $$this.length__I();
    var thatLen = x2.length__I();
    while ((((i < thisLen) && (j < thatLen)) && ScalaJS.anyEqEq($$this.apply__I__O(i), x2.apply__I__O(j)))) {
      i = (i + 1);
      j = (j + 1)
    };
    return (j === thatLen)
  };
  var i$2 = offset;
  var thisLen$2 = $$this.length__I();
  var thatElems = that.iterator__Lscala_collection_Iterator();
  while (((i$2 < thisLen$2) && thatElems.hasNext__Z())) {
    if ((!ScalaJS.anyEqEq($$this.apply__I__O(i$2), thatElems.next__O()))) {
      return false
    };
    i$2 = (i$2 + 1)
  };
  return (!thatElems.hasNext__Z())
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__endsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_IndexedSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_IndexedSeq(x1);
    var i = ($$this.length__I() - 1);
    var j = (x2.length__I() - 1);
    if ((j <= i)) {
      while ((j >= 0)) {
        if ((!ScalaJS.anyEqEq($$this.apply__I__O(i), x2.apply__I__O(j)))) {
          return false
        };
        i = (i - 1);
        j = (j - 1)
      };
      return true
    } else {
      return false
    }
  };
  return $$this.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z(that)
});
ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__$init$__Lscala_collection_IndexedSeqOptimized__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=IndexedSeqOptimized$class.js.map
