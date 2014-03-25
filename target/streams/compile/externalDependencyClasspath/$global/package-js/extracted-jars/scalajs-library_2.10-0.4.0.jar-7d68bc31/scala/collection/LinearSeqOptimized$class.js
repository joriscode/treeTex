ScalaJS.impls.scala_collection_LinearSeqOptimized$class__length__Lscala_collection_LinearSeqOptimized__I = (function($$this) {
  var these = $$this;
  var len = 0;
  while ((!these.isEmpty__Z())) {
    len = (len + 1);
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return len
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__apply__Lscala_collection_LinearSeqOptimized__I__O = (function($$this, n) {
  var rest = $$this.drop__I__Lscala_collection_LinearSeqOptimized(n);
  if (((n < 0) || rest.isEmpty__Z())) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(("" + ScalaJS.bI(n)))
  };
  return rest.head__O()
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foreach__Lscala_collection_LinearSeqOptimized__Lscala_Function1__V = (function($$this, f) {
  var these = $$this;
  while ((!these.isEmpty__Z())) {
    f.apply__O__O(these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  }
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__forall__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z = (function($$this, p) {
  var these = $$this;
  while ((!these.isEmpty__Z())) {
    if ((!ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
      return false
    };
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return true
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__exists__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z = (function($$this, p) {
  var these = $$this;
  while ((!these.isEmpty__Z())) {
    if (ScalaJS.uZ(p.apply__O__O(these.head__O()))) {
      return true
    };
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return false
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__contains__Lscala_collection_LinearSeqOptimized__O__Z = (function($$this, elem) {
  var these = $$this;
  while ((!these.isEmpty__Z())) {
    if (ScalaJS.anyEqEq(these.head__O(), elem)) {
      return true
    };
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return false
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__find__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Option = (function($$this, p) {
  var these = $$this;
  while ((!these.isEmpty__Z())) {
    if (ScalaJS.uZ(p.apply__O__O(these.head__O()))) {
      return new ScalaJS.c.scala_Some().init___O(these.head__O())
    };
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldLeft__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O = (function($$this, z, f) {
  var acc = z;
  var these = $$this;
  while ((!these.isEmpty__Z())) {
    acc = f.apply__O__O__O(acc, these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return acc
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldRight__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O = (function($$this, z, f) {
  if ($$this.isEmpty__Z()) {
    return z
  } else {
    return f.apply__O__O__O($$this.head__O(), ScalaJS.as.scala_collection_LinearSeqOptimized($$this.tail__O()).foldRight__O__Lscala_Function2__O(z, f))
  }
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceLeft__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O = (function($$this, f) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.reduceLeft")
  } else {
    return ScalaJS.as.scala_collection_LinearSeqOptimized($$this.tail__O()).foldLeft__O__Lscala_Function2__O($$this.head__O(), f)
  }
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceRight__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O = (function($$this, op) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("Nil.reduceRight")
  } else {
    if (ScalaJS.as.scala_collection_SeqLike($$this.tail__O()).isEmpty__Z()) {
      return $$this.head__O()
    } else {
      return op.apply__O__O__O($$this.head__O(), ScalaJS.as.scala_collection_LinearSeqOptimized($$this.tail__O()).reduceRight__Lscala_Function2__O(op))
    }
  }
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__last__Lscala_collection_LinearSeqOptimized__O = (function($$this) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_util_NoSuchElementException().init___()
  };
  var these = $$this;
  var nx = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O());
  while ((!nx.isEmpty__Z())) {
    these = nx;
    nx = ScalaJS.as.scala_collection_LinearSeqOptimized(nx.tail__O())
  };
  return these.head__O()
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__take__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized = (function($$this, n) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var i = 0;
  var these = ScalaJS.as.scala_collection_LinearSeqOptimized($$this.repr__O());
  while (((!these.isEmpty__Z()) && (i < n))) {
    i = (i + 1);
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return ScalaJS.as.scala_collection_LinearSeqOptimized(b.result__O())
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__drop__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized = (function($$this, n) {
  var these = ScalaJS.as.scala_collection_LinearSeqOptimized($$this.repr__O());
  var count = n;
  while (((!these.isEmpty__Z()) && (count > 0))) {
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O());
    count = (count - 1)
  };
  return these
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__dropRight__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized = (function($$this, n) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var these = $$this;
  var lead = $$this.drop__I__Lscala_collection_LinearSeqOptimized(n);
  while ((!lead.isEmpty__Z())) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O());
    lead = ScalaJS.as.scala_collection_LinearSeqOptimized(lead.tail__O())
  };
  return ScalaJS.as.scala_collection_LinearSeqOptimized(b.result__O())
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__slice__Lscala_collection_LinearSeqOptimized__I__I__Lscala_collection_LinearSeqOptimized = (function($$this, from, until) {
  var these = ScalaJS.as.scala_collection_LinearSeqOptimized($$this.repr__O());
  var count = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(from), 0);
  if ((until <= count)) {
    return ScalaJS.as.scala_collection_LinearSeqOptimized($$this.newBuilder__Lscala_collection_mutable_Builder().result__O())
  };
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var sliceElems = (until - count);
  while ((these.nonEmpty__Z() && (count > 0))) {
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O());
    count = (count - 1)
  };
  while ((these.nonEmpty__Z() && (sliceElems > 0))) {
    sliceElems = (sliceElems - 1);
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return ScalaJS.as.scala_collection_LinearSeqOptimized(b.result__O())
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__takeWhile__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_collection_LinearSeqOptimized = (function($$this, p) {
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  var these = $$this;
  while (((!these.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return ScalaJS.as.scala_collection_LinearSeqOptimized(b.result__O())
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__span__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Tuple2 = (function($$this, p) {
  var these = ScalaJS.as.scala_collection_LinearSeqOptimized($$this.repr__O());
  var b = $$this.newBuilder__Lscala_collection_mutable_Builder();
  while (((!these.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(these.head__O());
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return new ScalaJS.c.scala_Tuple2().init___O__O(b.result__O(), these)
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__sameElements__Lscala_collection_LinearSeqOptimized__Lscala_collection_GenIterable__Z = (function($$this, that) {
  var x1 = that;
  if (ScalaJS.is.scala_collection_LinearSeq(x1)) {
    var x2 = ScalaJS.as.scala_collection_LinearSeq(x1);
    var these = $$this;
    var those = x2;
    while ((((!these.isEmpty__Z()) && (!those.isEmpty__Z())) && ScalaJS.anyEqEq(these.head__O(), those.head__O()))) {
      these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O());
      those = ScalaJS.as.scala_collection_LinearSeq(those.tail__O())
    };
    return (these.isEmpty__Z() && those.isEmpty__Z())
  };
  return $$this.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that)
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lengthCompare__Lscala_collection_LinearSeqOptimized__I__I = (function($$this, len) {
  if ((len < 0)) {
    return 1
  } else {
    return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__loop$1__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized__I__I($$this, 0, $$this, len)
  }
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__isDefinedAt__Lscala_collection_LinearSeqOptimized__I__Z = (function($$this, x) {
  return ((x >= 0) && ($$this.lengthCompare__I__I(x) > 0))
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__segmentLength__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I = (function($$this, p, from) {
  var i = 0;
  var these = $$this.drop__I__Lscala_collection_LinearSeqOptimized(from);
  while (((!these.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
    i = (i + 1);
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return i
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__indexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I = (function($$this, p, from) {
  var i = from;
  var these = $$this.drop__I__Lscala_collection_LinearSeqOptimized(from);
  while (these.nonEmpty__Z()) {
    if (ScalaJS.uZ(p.apply__O__O(these.head__O()))) {
      return i
    };
    i = (i + 1);
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O())
  };
  return -1
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lastIndexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I = (function($$this, p, end) {
  var i = 0;
  var these = $$this;
  var last = -1;
  while (((!these.isEmpty__Z()) && (i <= end))) {
    if (ScalaJS.uZ(p.apply__O__O(these.head__O()))) {
      last = i
    };
    these = ScalaJS.as.scala_collection_LinearSeqOptimized(these.tail__O());
    i = (i + 1)
  };
  return last
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__loop$1__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized__I__I = (function($$this, i, xs, len$1) {
  tailCallLoop: while (true) {
    if ((i === len$1)) {
      if (xs.isEmpty__Z()) {
        return 0
      } else {
        return 1
      }
    } else {
      if (xs.isEmpty__Z()) {
        return -1
      } else {
        var temp$i = (i + 1);
        var temp$xs = ScalaJS.as.scala_collection_LinearSeqOptimized(xs.tail__O());
        i = temp$i;
        xs = temp$xs;
        continue tailCallLoop
      }
    }
  }
});
ScalaJS.impls.scala_collection_LinearSeqOptimized$class__$init$__Lscala_collection_LinearSeqOptimized__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=LinearSeqOptimized$class.js.map
