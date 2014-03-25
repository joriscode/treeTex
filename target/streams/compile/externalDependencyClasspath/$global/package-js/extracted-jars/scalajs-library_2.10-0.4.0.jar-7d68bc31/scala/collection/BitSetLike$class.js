ScalaJS.impls.scala_collection_BitSetLike$class__toBitMask__Lscala_collection_BitSetLike__AJ = (function($$this) {
  var a = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [$$this.nwords__I()]);
  var i = a.underlying.length;
  while ((i > 0)) {
    i = (i - 1);
    a.underlying[i] = $$this.word__I__J(i)
  };
  return a
});
ScalaJS.impls.scala_collection_BitSetLike$class__size__Lscala_collection_BitSetLike__I = (function($$this) {
  var s = 0;
  var i = $$this.nwords__I();
  while ((i > 0)) {
    i = (i - 1);
    s = (s + ScalaJS.modules.java_lang_Long().bitCount__J__I($$this.word__I__J(i)))
  };
  return s
});
ScalaJS.impls.scala_collection_BitSetLike$class__ordering__Lscala_collection_BitSetLike__Lscala_math_Ordering = (function($$this) {
  return ScalaJS.modules.scala_math_Ordering$Int()
});
ScalaJS.impls.scala_collection_BitSetLike$class__rangeImpl__Lscala_collection_BitSetLike__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike = (function($$this, from, until) {
  var a = $$this.toBitMask__AJ();
  var len = a.underlying.length;
  if (from.isDefined__Z()) {
    var f = ScalaJS.uI(from.get__O());
    var pos = 0;
    while (((f >= 64) && (pos < len))) {
      f = (f - 64);
      a.underlying[pos] = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0);
      pos = (pos + 1)
    };
    if (((f > 0) && (pos < len))) {
      var ev$1 = pos;
      a.underlying[ev$1] = a.underlying[ev$1].$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(f)).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)).unary$und$tilde__Lscala_scalajs_runtime_Long())
    }
  };
  if (until.isDefined__Z()) {
    var u = ScalaJS.uI(until.get__O());
    var w = ((u / 64) | 0);
    var b = (u % 64);
    var clearw = (w + 1);
    while ((clearw < len)) {
      a.underlying[clearw] = ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0);
      clearw = (clearw + 1)
    };
    if ((w < len)) {
      a.underlying[w] = a.underlying[w].$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(b)).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(1)))
    }
  };
  return $$this.fromBitMaskNoCopy__AJ__Lscala_collection_BitSetLike(a)
});
ScalaJS.impls.scala_collection_BitSetLike$class__iterator__Lscala_collection_BitSetLike__Lscala_collection_Iterator = (function($$this) {
  return new ScalaJS.c.scala_collection_BitSetLike$$anon$1().init___Lscala_collection_BitSetLike($$this)
});
ScalaJS.impls.scala_collection_BitSetLike$class__foreach__Lscala_collection_BitSetLike__Lscala_Function1__V = (function($$this, f) {
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), $$this.nwords__I()).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_collection_BitSetLike$$anonfun$foreach$1().init___Lscala_collection_BitSetLike__Lscala_Function1($$this, f))
});
ScalaJS.impls.scala_collection_BitSetLike$class__$bar__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function($$this, other) {
  var len = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.nwords__I()), other.nwords__I());
  var words = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [len]);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), len).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, words$1, other$1) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      words$1.underlying[idx] = arg$outer.word__I__J(idx).$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(other$1.word__I__J(idx));
      return ScalaJS.bV(undefined)
    })
  })($$this, words, other)));
  return $$this.fromBitMaskNoCopy__AJ__Lscala_collection_BitSetLike(words)
});
ScalaJS.impls.scala_collection_BitSetLike$class__$amp__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function($$this, other) {
  var len = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.nwords__I()), other.nwords__I());
  var words = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [len]);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), len).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, words$2, other$2) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      words$2.underlying[idx] = arg$outer.word__I__J(idx).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(other$2.word__I__J(idx));
      return ScalaJS.bV(undefined)
    })
  })($$this, words, other)));
  return $$this.fromBitMaskNoCopy__AJ__Lscala_collection_BitSetLike(words)
});
ScalaJS.impls.scala_collection_BitSetLike$class__$amp$tilde__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function($$this, other) {
  var len = $$this.nwords__I();
  var words = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [len]);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), len).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, words$3, other$3) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      words$3.underlying[idx] = arg$outer.word__I__J(idx).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(other$3.word__I__J(idx).unary$und$tilde__Lscala_scalajs_runtime_Long());
      return ScalaJS.bV(undefined)
    })
  })($$this, words, other)));
  return $$this.fromBitMaskNoCopy__AJ__Lscala_collection_BitSetLike(words)
});
ScalaJS.impls.scala_collection_BitSetLike$class__$up__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function($$this, other) {
  var len = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I($$this.nwords__I()), other.nwords__I());
  var words = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [len]);
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), len).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, words$4, other$4) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      words$4.underlying[idx] = arg$outer.word__I__J(idx).$$up__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(other$4.word__I__J(idx));
      return ScalaJS.bV(undefined)
    })
  })($$this, words, other)));
  return $$this.fromBitMaskNoCopy__AJ__Lscala_collection_BitSetLike(words)
});
ScalaJS.impls.scala_collection_BitSetLike$class__contains__Lscala_collection_BitSetLike__I__Z = (function($$this, elem) {
  return ((0 <= elem) && $$this.word__I__J((elem >> ScalaJS.modules.scala_collection_BitSetLike().LogWL__I())).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(elem))).notEquals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)))
});
ScalaJS.impls.scala_collection_BitSetLike$class__subsetOf__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Z = (function($$this, other) {
  return ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), $$this.nwords__I()).forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, other$5) {
    return (function(idx) {
      idx = ScalaJS.uI(idx);
      return ScalaJS.bZ(arg$outer.word__I__J(idx).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(other$5.word__I__J(idx).unary$und$tilde__Lscala_scalajs_runtime_Long()).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)))
    })
  })($$this, other)))
});
ScalaJS.impls.scala_collection_BitSetLike$class__addString__Lscala_collection_BitSetLike__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function($$this, sb, start, sep, end) {
  sb.append__T__Lscala_collection_mutable_StringBuilder(start);
  var pre = new ScalaJS.c.scala_runtime_ObjectRef().init___O("");
  ScalaJS.modules.scala_runtime_RichInt().until$extension0__I__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_Predef().intWrapper__I__I(0), ($$this.nwords__I() * ScalaJS.modules.scala_collection_BitSetLike().scala$collection$BitSetLike$$WordLength__I())).foreach$mVc$sp__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, pre$1, sb$1, sep$1) {
    return (function(i) {
      i = ScalaJS.uI(i);
      if (arg$outer.contains__I__Z(i)) {
        sb$1.append__T__Lscala_collection_mutable_StringBuilder(ScalaJS.as.java_lang_String(pre$1.elem$1)).append__I__Lscala_collection_mutable_StringBuilder(i);
        pre$1.elem$1 = sep$1
      };
      return ScalaJS.bV(undefined)
    })
  })($$this, pre, sb, sep)));
  return sb.append__T__Lscala_collection_mutable_StringBuilder(end)
});
ScalaJS.impls.scala_collection_BitSetLike$class__stringPrefix__Lscala_collection_BitSetLike__T = (function($$this) {
  return "BitSet"
});
ScalaJS.impls.scala_collection_BitSetLike$class__$init$__Lscala_collection_BitSetLike__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=BitSetLike$class.js.map
