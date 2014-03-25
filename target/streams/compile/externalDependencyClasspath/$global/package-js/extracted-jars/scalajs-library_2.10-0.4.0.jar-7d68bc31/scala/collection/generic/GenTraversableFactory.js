/** @constructor */
ScalaJS.c.scala_collection_generic_GenTraversableFactory = (function() {
  ScalaJS.c.scala_collection_generic_GenericCompanion.call(this);
  this.ReusableCBF$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype = new ScalaJS.inheritable.scala_collection_generic_GenericCompanion();
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.constructor = ScalaJS.c.scala_collection_generic_GenTraversableFactory;
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.ReusableCBF$lzycompute__p2__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  if ((!this.bitmap$0$2)) {
    this.ReusableCBF$2 = new ScalaJS.c.scala_collection_generic_GenTraversableFactory$ReusableCBF().init___Lscala_collection_generic_GenTraversableFactory(this);
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.ReusableCBF$2
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom = (function() {
  if ((!this.bitmap$0$2)) {
    return this.ReusableCBF$lzycompute__p2__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
  } else {
    return this.ReusableCBF$2
  }
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.concat__Lscala_collection_Seq__Lscala_collection_GenTraversable = (function(xss) {
  var b = this.newBuilder__Lscala_collection_mutable_Builder();
  if (xss.forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.is.scala_collection_IndexedSeq(x$1))
    })
  })()))) {
    b.sizeHint__I__V(ScalaJS.uI(ScalaJS.as.scala_collection_TraversableOnce(xss.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
      return (function(x$2) {
        return ScalaJS.bI(x$2.size__I())
      })
    })()), ScalaJS.modules.scala_collection_Seq().canBuildFrom__Lscala_collection_generic_CanBuildFrom())).sum__Lscala_math_Numeric__O(ScalaJS.modules.scala_math_Numeric$IntIsIntegral())))
  };
  xss.seq__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1) {
    return (function(xs) {
      return ScalaJS.as.scala_collection_mutable_Builder(b$1.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs))
    })
  })(b)));
  return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__Lscala_Function0__Lscala_collection_GenTraversable = (function(n, elem) {
  var b = this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__I__V(n);
  var i = 0;
  while ((i < n)) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(elem.apply__O());
    i = (i + 1)
  };
  return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__Lscala_Function0__Lscala_collection_GenTraversable = (function(n1, n2, elem) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n2$4, elem$4) {
    return (function(x$3) {
      x$3 = ScalaJS.uI(x$3);
      return arg$outer.fill__I__Lscala_Function0__Lscala_collection_GenTraversable(n2$4, elem$4)
    })
  })(this, n2, elem)))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable = (function(n1, n2, n3, elem) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n2$3, n3$3, elem$3) {
    return (function(x$4) {
      x$4 = ScalaJS.uI(x$4);
      return arg$outer.fill__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n2$3, n3$3, elem$3)
    })
  })(this, n2, n3, elem)))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable = (function(n1, n2, n3, n4, elem) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n2$2, n3$2, n4$2, elem$2) {
    return (function(x$5) {
      x$5 = ScalaJS.uI(x$5);
      return arg$outer.fill__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n2$2, n3$2, n4$2, elem$2)
    })
  })(this, n2, n3, n4, elem)))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable = (function(n1, n2, n3, n4, n5, elem) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, n2$1, n3$1, n4$1, n5$1, elem$1) {
    return (function(x$6) {
      x$6 = ScalaJS.uI(x$6);
      return arg$outer.fill__I__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n2$1, n3$1, n4$1, n5$1, elem$1)
    })
  })(this, n2, n3, n4, n5, elem)))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable = (function(n, f) {
  var b = this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__I__V(n);
  var i = 0;
  while ((i < n)) {
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(f.apply__O__O(ScalaJS.bI(i)));
    i = (i + 1)
  };
  return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__Lscala_Function2__Lscala_collection_GenTraversable = (function(n1, n2, f) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$1().init___Lscala_collection_generic_GenTraversableFactory__I__Lscala_Function2(this, n2, f))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__I__Lscala_Function3__Lscala_collection_GenTraversable = (function(n1, n2, n3, f) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$2().init___Lscala_collection_generic_GenTraversableFactory__I__I__Lscala_Function3(this, n2, n3, f))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__I__I__Lscala_Function4__Lscala_collection_GenTraversable = (function(n1, n2, n3, n4, f) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$3().init___Lscala_collection_generic_GenTraversableFactory__I__I__I__Lscala_Function4(this, n2, n3, n4, f))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__I__I__I__Lscala_Function5__Lscala_collection_GenTraversable = (function(n1, n2, n3, n4, n5, f) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n1, new ScalaJS.c.scala_collection_generic_GenTraversableFactory$$anonfun$tabulate$4().init___Lscala_collection_generic_GenTraversableFactory__I__I__I__I__Lscala_Function5(this, n2, n3, n4, n5, f))
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.range__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable = (function(start, end, evidence$1) {
  return this.range__O__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable(start, end, ScalaJS.as.scala_math_Numeric(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1)).one__O(), evidence$1)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.range__O__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable = (function(start, end, step, evidence$2) {
  var num = ScalaJS.as.scala_math_Integral(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$2));
  if (ScalaJS.anyEqEq(step, num.zero__O())) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("zero step")
  };
  var b = this.newBuilder__Lscala_collection_mutable_Builder();
  b.sizeHint__I__V(ScalaJS.modules.scala_collection_immutable_NumericRange().count__O__O__O__Z__Lscala_math_Integral__I(start, end, step, false, evidence$2));
  var i = start;
  while (true) {
    if (num.mkOrderingOps__O__Lscala_math_Ordering$Ops(step).$$less__O__Z(num.zero__O())) {
      var jsx$1 = num.mkOrderingOps__O__Lscala_math_Ordering$Ops(end).$$less__O__Z(i)
    } else {
      var jsx$1 = num.mkOrderingOps__O__Lscala_math_Ordering$Ops(i).$$less__O__Z(end)
    };
    if (jsx$1) {
      b.$$plus$eq__O__Lscala_collection_mutable_Builder(i);
      i = num.mkNumericOps__O__Lscala_math_Integral$IntegralOps(i).$$plus__O__O(step)
    } else {
      break
    }
  };
  return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.iterate__O__I__Lscala_Function1__Lscala_collection_GenTraversable = (function(start, len, f) {
  var b = this.newBuilder__Lscala_collection_mutable_Builder();
  if ((len > 0)) {
    b.sizeHint__I__V(len);
    var acc = start;
    var i = 1;
    b.$$plus$eq__O__Lscala_collection_mutable_Builder(acc);
    while ((i < len)) {
      acc = f.apply__O__O(acc);
      i = (i + 1);
      b.$$plus$eq__O__Lscala_collection_mutable_Builder(acc)
    }
  };
  return ScalaJS.as.scala_collection_GenTraversable(b.result__O())
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.iterate__O__I__Lscala_Function1__ = (function(start, len, f) {
  return this.iterate__O__I__Lscala_Function1__Lscala_collection_GenTraversable(start, len, f)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.range__O__O__O__Lscala_math_Integral__ = (function(start$2, end, step, evidence$2) {
  return this.range__O__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable(start$2, end, step, evidence$2)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.range__O__O__Lscala_math_Integral__ = (function(start$3, end$2, evidence$1) {
  return this.range__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable(start$3, end$2, evidence$1)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__I__I__I__Lscala_Function5__ = (function(n1, n2, n3, n4, n5, f$2) {
  return this.tabulate__I__I__I__I__I__Lscala_Function5__Lscala_collection_GenTraversable(n1, n2, n3, n4, n5, f$2)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__I__I__Lscala_Function4__ = (function(n1$2, n2$2, n3$2, n4$2, f$3) {
  return this.tabulate__I__I__I__I__Lscala_Function4__Lscala_collection_GenTraversable(n1$2, n2$2, n3$2, n4$2, f$3)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__I__Lscala_Function3__ = (function(n1$3, n2$3, n3$3, f$4) {
  return this.tabulate__I__I__I__Lscala_Function3__Lscala_collection_GenTraversable(n1$3, n2$3, n3$3, f$4)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__I__Lscala_Function2__ = (function(n1$4, n2$4, f$5) {
  return this.tabulate__I__I__Lscala_Function2__Lscala_collection_GenTraversable(n1$4, n2$4, f$5)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.tabulate__I__Lscala_Function1__ = (function(n, f$6) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable(n, f$6)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__I__I__I__Lscala_Function0__ = (function(n1$5, n2$5, n3$4, n4$3, n5$2, elem) {
  return this.fill__I__I__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n1$5, n2$5, n3$4, n4$3, n5$2, elem)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__I__I__Lscala_Function0__ = (function(n1$6, n2$6, n3$5, n4$4, elem$2) {
  return this.fill__I__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n1$6, n2$6, n3$5, n4$4, elem$2)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__I__Lscala_Function0__ = (function(n1$7, n2$7, n3$6, elem$3) {
  return this.fill__I__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n1$7, n2$7, n3$6, elem$3)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__I__Lscala_Function0__ = (function(n1$8, n2$8, elem$4) {
  return this.fill__I__I__Lscala_Function0__Lscala_collection_GenTraversable(n1$8, n2$8, elem$4)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.fill__I__Lscala_Function0__ = (function(n$2, elem$5) {
  return this.fill__I__Lscala_Function0__Lscala_collection_GenTraversable(n$2, elem$5)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.concat__Lscala_collection_Seq__ = (function(xss) {
  return this.concat__Lscala_collection_Seq__Lscala_collection_GenTraversable(xss)
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.ReusableCBF__ = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_generic_GenTraversableFactory.prototype = ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype;
ScalaJS.is.scala_collection_generic_GenTraversableFactory = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_generic_GenTraversableFactory)))
});
ScalaJS.as.scala_collection_generic_GenTraversableFactory = (function(obj) {
  if ((ScalaJS.is.scala_collection_generic_GenTraversableFactory(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.generic.GenTraversableFactory")
  }
});
ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_generic_GenTraversableFactory)))
});
ScalaJS.asArrayOf.scala_collection_generic_GenTraversableFactory = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_generic_GenTraversableFactory(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.generic.GenTraversableFactory;", depth)
  }
});
ScalaJS.data.scala_collection_generic_GenTraversableFactory = new ScalaJS.ClassTypeData({
  scala_collection_generic_GenTraversableFactory: 0
}, false, "scala.collection.generic.GenTraversableFactory", ScalaJS.data.scala_collection_generic_GenericCompanion, {
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_generic_GenTraversableFactory.prototype.$classData = ScalaJS.data.scala_collection_generic_GenTraversableFactory;
//@ sourceMappingURL=GenTraversableFactory.js.map
