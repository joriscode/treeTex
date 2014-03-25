ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List = (function($$this) {
  var elems = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_Nil());
  $$this.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(elems$1) {
    return (function(x$1) {
      elems$1.elem$1 = ScalaJS.as.scala_collection_immutable_List(elems$1.elem$1).$$colon$colon__O__Lscala_collection_immutable_List(x$1);
      return ScalaJS.bV(undefined)
    })
  })(elems)));
  return ScalaJS.as.scala_collection_immutable_List(elems.elem$1)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__size__Lscala_collection_TraversableOnce__I = (function($$this) {
  var result = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(result$1) {
    return (function(x) {
      result$1.elem$1 = (result$1.elem$1 + 1);
      return ScalaJS.bV(undefined)
    })
  })(result)));
  return result.elem$1
});
ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z = (function($$this) {
  return (!$$this.isEmpty__Z())
});
ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I = (function($$this, p) {
  var cnt = new ScalaJS.c.scala_runtime_IntRef().init___I(0);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(cnt$1, p$1) {
    return (function(x) {
      if (ScalaJS.uZ(p$1.apply__O__O(x))) {
        cnt$1.elem$1 = (cnt$1.elem$1 + 1)
      };
      return ScalaJS.bV(undefined)
    })
  })(cnt, p)));
  return cnt.elem$1
});
ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option = (function($$this, pf) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    $$this.toIterator__Lscala_collection_Iterator().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(nonLocalReturnKey1$1, pf$1) {
      return (function(x) {
        if (pf$1.isDefinedAt__O__Z(x)) {
          throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey1$1, new ScalaJS.c.scala_Some().init___O(pf$1.apply__O__O(x)))
        };
        return ScalaJS.bV(undefined)
      })
    })(nonLocalReturnKey1, pf)));
    return ScalaJS.modules.scala_None()
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        return ScalaJS.as.scala_Option(ex.value__O())
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O = (function($$this, z, op) {
  return $$this.foldLeft__O__Lscala_Function2__O(z, op)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O = (function($$this, z, op) {
  return $$this.foldRight__O__Lscala_Function2__O(z, op)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O = (function($$this, z, op) {
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(z);
  $$this.seq__Lscala_collection_TraversableOnce().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(result$2, op$1) {
    return (function(x) {
      result$2.elem$1 = op$1.apply__O__O__O(result$2.elem$1, x);
      return ScalaJS.bV(undefined)
    })
  })(result, op)));
  return result.elem$1
});
ScalaJS.impls.scala_collection_TraversableOnce$class__foldRight__Lscala_collection_TraversableOnce__O__Lscala_Function2__O = (function($$this, z, op) {
  return $$this.reversed__Lscala_collection_immutable_List().foldLeft__O__Lscala_Function2__O(z, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(op$2) {
    return (function(x, y) {
      return op$2.apply__O__O__O(y, x)
    })
  })(op)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O = (function($$this, op) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.reduceLeft")
  };
  var first = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  var acc = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.bI(0));
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(first$1, acc$1, op$3) {
    return (function(x) {
      if (first$1.elem$1) {
        acc$1.elem$1 = x;
        first$1.elem$1 = false
      } else {
        acc$1.elem$1 = op$3.apply__O__O__O(acc$1.elem$1, x)
      };
      return ScalaJS.bV(undefined)
    })
  })(first, acc, op)));
  return acc.elem$1
});
ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRight__Lscala_collection_TraversableOnce__Lscala_Function2__O = (function($$this, op) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.reduceRight")
  };
  return $$this.reversed__Lscala_collection_immutable_List().reduceLeft__Lscala_Function2__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(op$4) {
    return (function(x, y) {
      return op$4.apply__O__O__O(y, x)
    })
  })(op)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option = (function($$this, op) {
  if ($$this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O($$this.reduceLeft__Lscala_Function2__O(op))
  }
});
ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option = (function($$this, op) {
  if ($$this.isEmpty__Z()) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O($$this.reduceRight__Lscala_Function2__O(op))
  }
});
ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O = (function($$this, op) {
  return $$this.reduceLeft__Lscala_Function2__O(op)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option = (function($$this, op) {
  return $$this.reduceLeftOption__Lscala_Function2__Lscala_Option(op)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O = (function($$this, z, op) {
  return $$this.foldLeft__O__Lscala_Function2__O(z, op)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O = (function($$this, z, seqop, combop) {
  return $$this.foldLeft__O__Lscala_Function2__O(z, seqop)
});
ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O = (function($$this, num) {
  return $$this.foldLeft__O__Lscala_Function2__O(num.zero__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(num$1) {
    return (function(x, y) {
      return num$1.plus__O__O__O(x, y)
    })
  })(num)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O = (function($$this, num) {
  return $$this.foldLeft__O__Lscala_Function2__O(num.one__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(num$2) {
    return (function(x, y) {
      return num$2.times__O__O__O(x, y)
    })
  })(num)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O = (function($$this, cmp) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.min")
  };
  return $$this.reduceLeft__Lscala_Function2__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(cmp$1) {
    return (function(x, y) {
      if (cmp$1.lteq__O__O__Z(x, y)) {
        return x
      } else {
        return y
      }
    })
  })(cmp)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O = (function($$this, cmp) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.max")
  };
  return $$this.reduceLeft__Lscala_Function2__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(cmp$2) {
    return (function(x, y) {
      if (cmp$2.gteq__O__O__Z(x, y)) {
        return x
      } else {
        return y
      }
    })
  })(cmp)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O = (function($$this, f, cmp) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.maxBy")
  };
  return $$this.reduceLeft__Lscala_Function2__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$1, cmp$3) {
    return (function(x, y) {
      if (cmp$3.gteq__O__O__Z(f$1.apply__O__O(x), f$1.apply__O__O(y))) {
        return x
      } else {
        return y
      }
    })
  })(f, cmp)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O = (function($$this, f, cmp) {
  if ($$this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.minBy")
  };
  return $$this.reduceLeft__Lscala_Function2__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function(f$2, cmp$4) {
    return (function(x, y) {
      if (cmp$4.lteq__O__O__Z(f$2.apply__O__O(x), f$2.apply__O__O(y))) {
        return x
      } else {
        return y
      }
    })
  })(f, cmp)))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V = (function($$this, dest) {
  dest.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.seq__Lscala_collection_TraversableOnce())
});
ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V = (function($$this, xs, start) {
  $$this.copyToArray__O__I__I__V(xs, start, (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V = (function($$this, xs) {
  $$this.copyToArray__O__I__I__V(xs, 0, ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O = (function($$this, evidence$1) {
  if ($$this.isTraversableAgain__Z()) {
    var result = evidence$1.newArray__I__O($$this.size__I());
    $$this.copyToArray__O__I__V(result, 0);
    return result
  } else {
    return $$this.toBuffer__Lscala_collection_mutable_Buffer().toArray__Lscala_reflect_ClassTag__O(evidence$1)
  }
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List = (function($$this) {
  return ScalaJS.as.scala_collection_immutable_List($$this.to__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_List().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toIterable__Lscala_collection_TraversableOnce__Lscala_collection_Iterable = (function($$this) {
  return $$this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toSeq__Lscala_collection_TraversableOnce__Lscala_collection_Seq = (function($$this) {
  return $$this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq = (function($$this) {
  return ScalaJS.as.scala_collection_immutable_IndexedSeq($$this.to__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_Predef().fallbackStringCanBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer = (function($$this) {
  return ScalaJS.as.scala_collection_mutable_Buffer($$this.to__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_mutable_ArrayBuffer().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toSet__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Set = (function($$this) {
  return ScalaJS.as.scala_collection_immutable_Set($$this.to__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_Set().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector = (function($$this) {
  return ScalaJS.as.scala_collection_immutable_Vector($$this.to__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_Vector().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
});
ScalaJS.impls.scala_collection_TraversableOnce$class__to__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function($$this, cbf) {
  var b = cbf.apply__Lscala_collection_mutable_Builder();
  b.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable($$this.seq__Lscala_collection_TraversableOnce());
  return b.result__O()
});
ScalaJS.impls.scala_collection_TraversableOnce$class__toMap__Lscala_collection_TraversableOnce__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function($$this, ev) {
  var b = ScalaJS.modules.scala_collection_immutable_Map().newBuilder__Lscala_collection_mutable_Builder();
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(b$1, ev$1) {
    return (function(x) {
      return b$1.$$plus$eq__O__Lscala_collection_mutable_Builder(ev$1.apply__O__O(x))
    })
  })(b, ev)));
  return ScalaJS.as.scala_collection_immutable_Map(b.result__O())
});
ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T = (function($$this, start, sep, end) {
  return $$this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(new ScalaJS.c.scala_collection_mutable_StringBuilder().init___(), start, sep, end).toString__T()
});
ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T = (function($$this, sep) {
  return $$this.mkString__T__T__T__T("", sep, "")
});
ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T = (function($$this) {
  return $$this.mkString__T__T("")
});
ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function($$this, b, start, sep, end) {
  var first = new ScalaJS.c.scala_runtime_BooleanRef().init___Z(true);
  b.append__T__Lscala_collection_mutable_StringBuilder(start);
  $$this.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(first$2, b$2, sep$1) {
    return (function(x) {
      if (first$2.elem$1) {
        b$2.append__O__Lscala_collection_mutable_StringBuilder(x);
        first$2.elem$1 = false;
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        b$2.append__T__Lscala_collection_mutable_StringBuilder(sep$1);
        return b$2.append__O__Lscala_collection_mutable_StringBuilder(x)
      }
    })
  })(first, b, sep)));
  b.append__T__Lscala_collection_mutable_StringBuilder(end);
  return b
});
ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function($$this, b, sep) {
  return $$this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b, "", sep, "")
});
ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function($$this, b) {
  return $$this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b, "")
});
ScalaJS.impls.scala_collection_TraversableOnce$class__$init$__Lscala_collection_TraversableOnce__V = (function($$this) {
  /*<skip>*/
});
//@ sourceMappingURL=TraversableOnce$class.js.map
