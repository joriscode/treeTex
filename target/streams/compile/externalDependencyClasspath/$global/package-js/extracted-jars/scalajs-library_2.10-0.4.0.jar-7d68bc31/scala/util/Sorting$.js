/** @constructor */
ScalaJS.c.scala_util_Sorting$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_util_Sorting$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_util_Sorting$.prototype.constructor = ScalaJS.c.scala_util_Sorting$;
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__AD__V = (function(a) {
  this.sort1__p1__AD__I__I__V(a, 0, a.underlying.length)
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__O__Lscala_math_Ordering__V = (function(a, evidence$1) {
  this.sort1__p1__O__I__I__Lscala_math_Ordering__V(a, 0, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a), evidence$1)
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__AI__V = (function(a) {
  this.sort1__p1__AI__I__I__V(a, 0, a.underlying.length)
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__AF__V = (function(a) {
  this.sort1__p1__AF__I__I__V(a, 0, a.underlying.length)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__O__Lscala_reflect_ClassTag__Lscala_math_Ordering__V = (function(a, evidence$2, evidence$3) {
  var jsx$4 = a;
  var jsx$3 = (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a) - 1);
  var jsx$2 = evidence$2.newArray__I__O(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a));
  var eta$0$1 = ScalaJS.modules.scala_math_Ordering().apply__Lscala_math_Ordering__Lscala_math_Ordering(evidence$3);
  var jsx$1 = new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(eta$0$1$1) {
    return (function(x, y) {
      return ScalaJS.bZ(eta$0$1$1.lt__O__O__Z(x, y))
    })
  })(eta$0$1));
  this.stableSort__p1__O__I__I__O__Lscala_Function2__Lscala_reflect_ClassTag__V(jsx$4, 0, jsx$3, jsx$2, jsx$1, evidence$2)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__O__Lscala_Function2__Lscala_reflect_ClassTag__V = (function(a, f, evidence$4) {
  this.stableSort__p1__O__I__I__O__Lscala_Function2__Lscala_reflect_ClassTag__V(a, 0, (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a) - 1), evidence$4.newArray__I__O(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(a)), f, evidence$4)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__Lscala_collection_Seq__Lscala_Function2__Lscala_reflect_ClassTag__O = (function(a, f, evidence$5) {
  var ret = a.toArray__Lscala_reflect_ClassTag__O(evidence$5);
  this.stableSort__O__Lscala_Function2__Lscala_reflect_ClassTag__V(ret, f, evidence$5);
  return ret
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_math_Ordering__O = (function(a, evidence$6, evidence$7) {
  var jsx$6 = a;
  var eta$0$2 = ScalaJS.modules.scala_math_Ordering().apply__Lscala_math_Ordering__Lscala_math_Ordering(evidence$7);
  var jsx$5 = new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(eta$0$2$1) {
    return (function(x, y) {
      return ScalaJS.bZ(eta$0$2$1.lt__O__O__Z(x, y))
    })
  })(eta$0$2));
  return this.stableSort__Lscala_collection_Seq__Lscala_Function2__Lscala_reflect_ClassTag__O(jsx$6, jsx$5, evidence$6)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__Lscala_collection_Seq__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_math_Ordering__O = (function(a, f, evidence$8, evidence$9) {
  return this.stableSort__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_math_Ordering__O(a, ScalaJS.as.scala_reflect_ClassTag(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$8)), ScalaJS.modules.scala_math_Ordering().apply__Lscala_math_Ordering__Lscala_math_Ordering(evidence$9).on__Lscala_Function1__Lscala_math_Ordering(f))
});
ScalaJS.c.scala_util_Sorting$.prototype.sort1__p1__O__I__I__Lscala_math_Ordering__V = (function(x, off, len, evidence$10) {
  var ord = ScalaJS.modules.scala_math_Ordering().apply__Lscala_math_Ordering__Lscala_math_Ordering(evidence$10);
  this.sort2$1__p1__I__I__O__Lscala_math_Ordering__V(off, len, x, ord)
});
ScalaJS.c.scala_util_Sorting$.prototype.sort1__p1__AI__I__I__V = (function(x, off, len) {
  this.sort2$2__p1__I__I__AI__V(off, len, x)
});
ScalaJS.c.scala_util_Sorting$.prototype.sort1__p1__AD__I__I__V = (function(x, off, len) {
  this.sort2$3__p1__I__I__AD__V(off, len, x)
});
ScalaJS.c.scala_util_Sorting$.prototype.sort1__p1__AF__I__I__V = (function(x, off, len) {
  this.sort2$4__p1__I__I__AF__V(off, len, x)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__p1__O__I__I__O__Lscala_Function2__Lscala_reflect_ClassTag__V = (function(a, lo, hi, scratch, f, evidence$11) {
  if ((lo < hi)) {
    var mid = (((lo + hi) / 2) | 0);
    this.stableSort__p1__O__I__I__O__Lscala_Function2__Lscala_reflect_ClassTag__V(a, lo, mid, scratch, f, evidence$11);
    this.stableSort__p1__O__I__I__O__Lscala_Function2__Lscala_reflect_ClassTag__V(a, (mid + 1), hi, scratch, f, evidence$11);
    var k = lo;
    var t_lo = lo;
    var t_hi = (mid + 1);
    while ((k <= hi)) {
      if (((t_lo <= mid) && ((t_hi > hi) || (!ScalaJS.uZ(f.apply__O__O__O(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(a, t_hi), ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(a, t_lo))))))) {
        ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(scratch, k, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(a, t_lo));
        t_lo = (t_lo + 1)
      } else {
        ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(scratch, k, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(a, t_hi));
        t_hi = (t_hi + 1)
      };
      k = (k + 1)
    };
    k = lo;
    while ((k <= hi)) {
      ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(a, k, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(scratch, k));
      k = (k + 1)
    }
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.swap$1__p1__I__I__O__V = (function(a, b, x$4) {
  var t = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, a);
  ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(x$4, a, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, b));
  ScalaJS.modules.scala_runtime_ScalaRunTime().array$undupdate__O__I__O__V(x$4, b, t)
});
ScalaJS.c.scala_util_Sorting$.prototype.vecswap$1__p1__I__I__I__O__V = (function(_a, _b, n, x$4) {
  var a = _a;
  var b = _b;
  var i = 0;
  while ((i < n)) {
    this.swap$1__p1__I__I__O__V(a, b, x$4);
    i = (i + 1);
    a = (a + 1);
    b = (b + 1)
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.med3$1__p1__I__I__I__O__Lscala_math_Ordering__I = (function(a, b, c, x$4, ord$1) {
  if (ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, a)).$$less__O__Z(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, b))) {
    if (ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, b)).$$less__O__Z(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, c))) {
      return b
    } else {
      if (ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, a)).$$less__O__Z(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, c))) {
        return c
      } else {
        return a
      }
    }
  } else {
    if (ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, b)).$$greater__O__Z(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, c))) {
      return b
    } else {
      if (ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, a)).$$greater__O__Z(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, c))) {
        return c
      } else {
        return a
      }
    }
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.sort2$1__p1__I__I__O__Lscala_math_Ordering__V = (function(off, len, x$4, ord$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((len < 7)) {
      var i = off;
      while ((i < (len + off))) {
        var j = i;
        while (((j > off) && ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, (j - 1))).$$greater__O__Z(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, j)))) {
          _$this.swap$1__p1__I__I__O__V(j, (j - 1), x$4);
          j = (j - 1)
        };
        i = (i + 1)
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      var m = (off + (len >> 1));
      if ((len > 7)) {
        var l = off;
        var n = ((off + len) - 1);
        if ((len > 40)) {
          var s = ((len / 8) | 0);
          l = _$this.med3$1__p1__I__I__I__O__Lscala_math_Ordering__I(l, (l + s), (l + (2 * s)), x$4, ord$1);
          m = _$this.med3$1__p1__I__I__I__O__Lscala_math_Ordering__I((m - s), m, (m + s), x$4, ord$1);
          n = _$this.med3$1__p1__I__I__I__O__Lscala_math_Ordering__I((n - (2 * s)), (n - s), n, x$4, ord$1)
        };
        m = _$this.med3$1__p1__I__I__I__O__Lscala_math_Ordering__I(l, m, n, x$4, ord$1)
      };
      var v = ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, m);
      var a = off;
      var b = a;
      var c = ((off + len) - 1);
      var d = c;
      var done = false;
      while ((!done)) {
        while (((b <= c) && ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, b)).$$less$eq__O__Z(v))) {
          if (ScalaJS.anyEqEq(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, b), v)) {
            _$this.swap$1__p1__I__I__O__V(a, b, x$4);
            a = (a + 1)
          };
          b = (b + 1)
        };
        while (((c >= b) && ord$1.mkOrderingOps__O__Lscala_math_Ordering$Ops(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, c)).$$greater$eq__O__Z(v))) {
          if (ScalaJS.anyEqEq(ScalaJS.modules.scala_runtime_ScalaRunTime().array$undapply__O__I__O(x$4, c), v)) {
            _$this.swap$1__p1__I__I__O__V(c, d, x$4);
            d = (d - 1)
          };
          c = (c - 1)
        };
        if ((b > c)) {
          done = true
        } else {
          _$this.swap$1__p1__I__I__O__V(b, c, x$4);
          c = (c - 1);
          b = (b + 1)
        }
      };
      var n$2 = (off + len);
      var s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((a - off), (b - a));
      _$this.vecswap$1__p1__I__I__I__O__V(off, (b - s$2), s$2, x$4);
      s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((d - c), ((n$2 - d) - 1));
      _$this.vecswap$1__p1__I__I__I__O__V(b, (n$2 - s$2), s$2, x$4);
      s$2 = (b - a);
      if ((s$2 > 1)) {
        _$this.sort2$1__p1__I__I__O__Lscala_math_Ordering__V(off, s$2, x$4, ord$1)
      };
      s$2 = (d - c);
      if ((s$2 > 1)) {
        var temp$off = (n$2 - s$2);
        var temp$len = s$2;
        off = temp$off;
        len = temp$len;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    };
    return undefined
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.swap$2__p1__I__I__AI__V = (function(a, b, x$3) {
  var t = x$3.underlying[a];
  x$3.underlying[a] = x$3.underlying[b];
  x$3.underlying[b] = t
});
ScalaJS.c.scala_util_Sorting$.prototype.vecswap$2__p1__I__I__I__AI__V = (function(_a, _b, n, x$3) {
  var a = _a;
  var b = _b;
  var i = 0;
  while ((i < n)) {
    this.swap$2__p1__I__I__AI__V(a, b, x$3);
    i = (i + 1);
    a = (a + 1);
    b = (b + 1)
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.med3$2__p1__I__I__I__AI__I = (function(a, b, c, x$3) {
  if ((x$3.underlying[a] < x$3.underlying[b])) {
    if ((x$3.underlying[b] < x$3.underlying[c])) {
      return b
    } else {
      if ((x$3.underlying[a] < x$3.underlying[c])) {
        return c
      } else {
        return a
      }
    }
  } else {
    if ((x$3.underlying[b] > x$3.underlying[c])) {
      return b
    } else {
      if ((x$3.underlying[a] > x$3.underlying[c])) {
        return c
      } else {
        return a
      }
    }
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.sort2$2__p1__I__I__AI__V = (function(off, len, x$3) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((len < 7)) {
      var i = off;
      while ((i < (len + off))) {
        var j = i;
        while (((j > off) && (x$3.underlying[(j - 1)] > x$3.underlying[j]))) {
          _$this.swap$2__p1__I__I__AI__V(j, (j - 1), x$3);
          j = (j - 1)
        };
        i = (i + 1)
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      var m = (off + (len >> 1));
      if ((len > 7)) {
        var l = off;
        var n = ((off + len) - 1);
        if ((len > 40)) {
          var s = ((len / 8) | 0);
          l = _$this.med3$2__p1__I__I__I__AI__I(l, (l + s), (l + (2 * s)), x$3);
          m = _$this.med3$2__p1__I__I__I__AI__I((m - s), m, (m + s), x$3);
          n = _$this.med3$2__p1__I__I__I__AI__I((n - (2 * s)), (n - s), n, x$3)
        };
        m = _$this.med3$2__p1__I__I__I__AI__I(l, m, n, x$3)
      };
      var v = x$3.underlying[m];
      var a = off;
      var b = a;
      var c = ((off + len) - 1);
      var d = c;
      var done = false;
      while ((!done)) {
        while (((b <= c) && (x$3.underlying[b] <= v))) {
          if ((x$3.underlying[b] === v)) {
            _$this.swap$2__p1__I__I__AI__V(a, b, x$3);
            a = (a + 1)
          };
          b = (b + 1)
        };
        while (((c >= b) && (x$3.underlying[c] >= v))) {
          if ((x$3.underlying[c] === v)) {
            _$this.swap$2__p1__I__I__AI__V(c, d, x$3);
            d = (d - 1)
          };
          c = (c - 1)
        };
        if ((b > c)) {
          done = true
        } else {
          _$this.swap$2__p1__I__I__AI__V(b, c, x$3);
          c = (c - 1);
          b = (b + 1)
        }
      };
      var n$2 = (off + len);
      var s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((a - off), (b - a));
      _$this.vecswap$2__p1__I__I__I__AI__V(off, (b - s$2), s$2, x$3);
      s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((d - c), ((n$2 - d) - 1));
      _$this.vecswap$2__p1__I__I__I__AI__V(b, (n$2 - s$2), s$2, x$3);
      s$2 = (b - a);
      if ((s$2 > 1)) {
        _$this.sort2$2__p1__I__I__AI__V(off, s$2, x$3)
      };
      s$2 = (d - c);
      if ((s$2 > 1)) {
        var temp$off = (n$2 - s$2);
        var temp$len = s$2;
        off = temp$off;
        len = temp$len;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    };
    return undefined
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.swap$3__p1__I__I__AD__V = (function(a, b, x$2) {
  var t = x$2.underlying[a];
  x$2.underlying[a] = x$2.underlying[b];
  x$2.underlying[b] = t
});
ScalaJS.c.scala_util_Sorting$.prototype.vecswap$3__p1__I__I__I__AD__V = (function(_a, _b, n, x$2) {
  var a = _a;
  var b = _b;
  var i = 0;
  while ((i < n)) {
    this.swap$3__p1__I__I__AD__V(a, b, x$2);
    i = (i + 1);
    a = (a + 1);
    b = (b + 1)
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.med3$3__p1__I__I__I__AD__I = (function(a, b, c, x$2) {
  var ab = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[a])).compare__O__I(ScalaJS.bD(x$2.underlying[b]));
  var bc = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[b])).compare__O__I(ScalaJS.bD(x$2.underlying[c]));
  var ac = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[a])).compare__O__I(ScalaJS.bD(x$2.underlying[c]));
  if ((ab < 0)) {
    if ((bc < 0)) {
      return b
    } else {
      if ((ac < 0)) {
        return c
      } else {
        return a
      }
    }
  } else {
    if ((bc > 0)) {
      return b
    } else {
      if ((ac > 0)) {
        return c
      } else {
        return a
      }
    }
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.sort2$3__p1__I__I__AD__V = (function(off, len, x$2) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((len < 7)) {
      var i = off;
      while ((i < (len + off))) {
        var j = i;
        while (((j > off) && (new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[(j - 1)])).compare__O__I(ScalaJS.bD(x$2.underlying[j])) > 0))) {
          _$this.swap$3__p1__I__I__AD__V(j, (j - 1), x$2);
          j = (j - 1)
        };
        i = (i + 1)
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      var m = (off + (len >> 1));
      if ((len > 7)) {
        var l = off;
        var n = ((off + len) - 1);
        if ((len > 40)) {
          var s = ((len / 8) | 0);
          l = _$this.med3$3__p1__I__I__I__AD__I(l, (l + s), (l + (2 * s)), x$2);
          m = _$this.med3$3__p1__I__I__I__AD__I((m - s), m, (m + s), x$2);
          n = _$this.med3$3__p1__I__I__I__AD__I((n - (2 * s)), (n - s), n, x$2)
        };
        m = _$this.med3$3__p1__I__I__I__AD__I(l, m, n, x$2)
      };
      var v = x$2.underlying[m];
      var a = off;
      var b = a;
      var c = ((off + len) - 1);
      var d = c;
      var done = false;
      while ((!done)) {
        var bv = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[b])).compare__O__I(ScalaJS.bD(v));
        while (((b <= c) && (bv <= 0))) {
          if ((bv === 0)) {
            _$this.swap$3__p1__I__I__AD__V(a, b, x$2);
            a = (a + 1)
          };
          b = (b + 1);
          if ((b <= c)) {
            bv = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[b])).compare__O__I(ScalaJS.bD(v))
          }
        };
        var cv = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[c])).compare__O__I(ScalaJS.bD(v));
        while (((c >= b) && (cv >= 0))) {
          if ((cv === 0)) {
            _$this.swap$3__p1__I__I__AD__V(c, d, x$2);
            d = (d - 1)
          };
          c = (c - 1);
          if ((c >= b)) {
            cv = new ScalaJS.c.scala_runtime_RichDouble().init___D(ScalaJS.modules.scala_Predef().doubleWrapper__D__D(x$2.underlying[c])).compare__O__I(ScalaJS.bD(v))
          }
        };
        if ((b > c)) {
          done = true
        } else {
          _$this.swap$3__p1__I__I__AD__V(b, c, x$2);
          c = (c - 1);
          b = (b + 1)
        }
      };
      var n$2 = (off + len);
      var s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((a - off), (b - a));
      _$this.vecswap$3__p1__I__I__I__AD__V(off, (b - s$2), s$2, x$2);
      s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((d - c), ((n$2 - d) - 1));
      _$this.vecswap$3__p1__I__I__I__AD__V(b, (n$2 - s$2), s$2, x$2);
      s$2 = (b - a);
      if ((s$2 > 1)) {
        _$this.sort2$3__p1__I__I__AD__V(off, s$2, x$2)
      };
      s$2 = (d - c);
      if ((s$2 > 1)) {
        var temp$off = (n$2 - s$2);
        var temp$len = s$2;
        off = temp$off;
        len = temp$len;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    };
    return undefined
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.swap$4__p1__I__I__AF__V = (function(a, b, x$1) {
  var t = x$1.underlying[a];
  x$1.underlying[a] = x$1.underlying[b];
  x$1.underlying[b] = t
});
ScalaJS.c.scala_util_Sorting$.prototype.vecswap$4__p1__I__I__I__AF__V = (function(_a, _b, n, x$1) {
  var a = _a;
  var b = _b;
  var i = 0;
  while ((i < n)) {
    this.swap$4__p1__I__I__AF__V(a, b, x$1);
    i = (i + 1);
    a = (a + 1);
    b = (b + 1)
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.med3$4__p1__I__I__I__AF__I = (function(a, b, c, x$1) {
  var ab = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[a])).compare__O__I(ScalaJS.bF(x$1.underlying[b]));
  var bc = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[b])).compare__O__I(ScalaJS.bF(x$1.underlying[c]));
  var ac = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[a])).compare__O__I(ScalaJS.bF(x$1.underlying[c]));
  if ((ab < 0)) {
    if ((bc < 0)) {
      return b
    } else {
      if ((ac < 0)) {
        return c
      } else {
        return a
      }
    }
  } else {
    if ((bc > 0)) {
      return b
    } else {
      if ((ac > 0)) {
        return c
      } else {
        return a
      }
    }
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.sort2$4__p1__I__I__AF__V = (function(off, len, x$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((len < 7)) {
      var i = off;
      while ((i < (len + off))) {
        var j = i;
        while (((j > off) && (new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[(j - 1)])).compare__O__I(ScalaJS.bF(x$1.underlying[j])) > 0))) {
          _$this.swap$4__p1__I__I__AF__V(j, (j - 1), x$1);
          j = (j - 1)
        };
        i = (i + 1)
      };
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      var m = (off + (len >> 1));
      if ((len > 7)) {
        var l = off;
        var n = ((off + len) - 1);
        if ((len > 40)) {
          var s = ((len / 8) | 0);
          l = _$this.med3$4__p1__I__I__I__AF__I(l, (l + s), (l + (2 * s)), x$1);
          m = _$this.med3$4__p1__I__I__I__AF__I((m - s), m, (m + s), x$1);
          n = _$this.med3$4__p1__I__I__I__AF__I((n - (2 * s)), (n - s), n, x$1)
        };
        m = _$this.med3$4__p1__I__I__I__AF__I(l, m, n, x$1)
      };
      var v = x$1.underlying[m];
      var a = off;
      var b = a;
      var c = ((off + len) - 1);
      var d = c;
      var done = false;
      while ((!done)) {
        var bv = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[b])).compare__O__I(ScalaJS.bF(v));
        while (((b <= c) && (bv <= 0))) {
          if ((bv === 0)) {
            _$this.swap$4__p1__I__I__AF__V(a, b, x$1);
            a = (a + 1)
          };
          b = (b + 1);
          if ((b <= c)) {
            bv = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[b])).compare__O__I(ScalaJS.bF(v))
          }
        };
        var cv = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[c])).compare__O__I(ScalaJS.bF(v));
        while (((c >= b) && (cv >= 0))) {
          if ((cv === 0)) {
            _$this.swap$4__p1__I__I__AF__V(c, d, x$1);
            d = (d - 1)
          };
          c = (c - 1);
          if ((c >= b)) {
            cv = new ScalaJS.c.scala_runtime_RichFloat().init___F(ScalaJS.modules.scala_Predef().floatWrapper__F__F(x$1.underlying[c])).compare__O__I(ScalaJS.bF(v))
          }
        };
        if ((b > c)) {
          done = true
        } else {
          _$this.swap$4__p1__I__I__AF__V(b, c, x$1);
          c = (c - 1);
          b = (b + 1)
        }
      };
      var n$2 = (off + len);
      var s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((a - off), (b - a));
      _$this.vecswap$4__p1__I__I__I__AF__V(off, (b - s$2), s$2, x$1);
      s$2 = ScalaJS.modules.scala_math_package().min__I__I__I((d - c), ((n$2 - d) - 1));
      _$this.vecswap$4__p1__I__I__I__AF__V(b, (n$2 - s$2), s$2, x$1);
      s$2 = (b - a);
      if ((s$2 > 1)) {
        _$this.sort2$4__p1__I__I__AF__V(off, s$2, x$1)
      };
      s$2 = (d - c);
      if ((s$2 > 1)) {
        var temp$off = (n$2 - s$2);
        var temp$len = s$2;
        off = temp$off;
        len = temp$len;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    };
    return undefined
  }
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__Lscala_collection_Seq__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_math_Ordering__ = (function(a, f, evidence$8, evidence$9) {
  return this.stableSort__Lscala_collection_Seq__Lscala_Function1__Lscala_reflect_ClassTag__Lscala_math_Ordering__O(a, f, evidence$8, evidence$9)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_math_Ordering__ = (function(a$2, evidence$6, evidence$7) {
  return this.stableSort__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_math_Ordering__O(a$2, evidence$6, evidence$7)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__Lscala_collection_Seq__Lscala_Function2__Lscala_reflect_ClassTag__ = (function(a$3, f$2, evidence$5) {
  return this.stableSort__Lscala_collection_Seq__Lscala_Function2__Lscala_reflect_ClassTag__O(a$3, f$2, evidence$5)
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__O__Lscala_Function2__Lscala_reflect_ClassTag__ = (function(a$4, f$3, evidence$4) {
  return ScalaJS.bV(this.stableSort__O__Lscala_Function2__Lscala_reflect_ClassTag__V(a$4, f$3, evidence$4))
});
ScalaJS.c.scala_util_Sorting$.prototype.stableSort__O__Lscala_reflect_ClassTag__Lscala_math_Ordering__ = (function(a$5, evidence$2, evidence$3) {
  return ScalaJS.bV(this.stableSort__O__Lscala_reflect_ClassTag__Lscala_math_Ordering__V(a$5, evidence$2, evidence$3))
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__AF__ = (function(a$6) {
  return ScalaJS.bV(this.quickSort__AF__V(a$6))
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__AI__ = (function(a$7) {
  return ScalaJS.bV(this.quickSort__AI__V(a$7))
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__O__Lscala_math_Ordering__ = (function(a$8, evidence$1) {
  return ScalaJS.bV(this.quickSort__O__Lscala_math_Ordering__V(a$8, evidence$1))
});
ScalaJS.c.scala_util_Sorting$.prototype.quickSort__AD__ = (function(a$9) {
  return ScalaJS.bV(this.quickSort__AD__V(a$9))
});
/** @constructor */
ScalaJS.inheritable.scala_util_Sorting$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_util_Sorting$.prototype = ScalaJS.c.scala_util_Sorting$.prototype;
ScalaJS.is.scala_util_Sorting$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_util_Sorting$)))
});
ScalaJS.as.scala_util_Sorting$ = (function(obj) {
  if ((ScalaJS.is.scala_util_Sorting$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.util.Sorting")
  }
});
ScalaJS.isArrayOf.scala_util_Sorting$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_util_Sorting$)))
});
ScalaJS.asArrayOf.scala_util_Sorting$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_util_Sorting$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.util.Sorting;", depth)
  }
});
ScalaJS.data.scala_util_Sorting$ = new ScalaJS.ClassTypeData({
  scala_util_Sorting$: 0
}, false, "scala.util.Sorting$", ScalaJS.data.java_lang_Object, {
  scala_util_Sorting$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_util_Sorting$.prototype.$classData = ScalaJS.data.scala_util_Sorting$;
ScalaJS.moduleInstances.scala_util_Sorting = undefined;
ScalaJS.modules.scala_util_Sorting = (function() {
  if ((!ScalaJS.moduleInstances.scala_util_Sorting)) {
    ScalaJS.moduleInstances.scala_util_Sorting = new ScalaJS.c.scala_util_Sorting$().init___()
  };
  return ScalaJS.moduleInstances.scala_util_Sorting
});
//@ sourceMappingURL=Sorting$.js.map
