/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_immutable_Stream$.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream$;
ScalaJS.c.scala_collection_immutable_Stream$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_collection_immutable_Stream$StreamCanBuildFrom().init___()
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_immutable_Stream$StreamBuilder().init___()
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.empty__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.apply__Lscala_collection_Seq__Lscala_collection_immutable_Stream = (function(xs) {
  return xs.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.consWrapper__Lscala_Function0__Lscala_collection_immutable_Stream$ConsWrapper = (function(stream) {
  return new ScalaJS.c.scala_collection_immutable_Stream$ConsWrapper().init___Lscala_Function0(stream)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.iterate__O__Lscala_Function1__Lscala_collection_immutable_Stream = (function(start, f) {
  return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(start, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(start$2, f$6) {
    return (function() {
      return ScalaJS.modules.scala_collection_immutable_Stream().iterate__O__Lscala_Function1__Lscala_collection_immutable_Stream(f$6.apply__O__O(start$2), f$6)
    })
  })(start, f)))
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.iterate__O__I__Lscala_Function1__Lscala_collection_immutable_Stream = (function(start, len, f) {
  return this.iterate__O__Lscala_Function1__Lscala_collection_immutable_Stream(start, f).take__I__Lscala_collection_immutable_Stream(len)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.from__I__I__Lscala_collection_immutable_Stream = (function(start, step) {
  return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(ScalaJS.bI(start), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(start$1, step$1) {
    return (function() {
      return ScalaJS.modules.scala_collection_immutable_Stream().from__I__I__Lscala_collection_immutable_Stream((start$1 + step$1), step$1)
    })
  })(start, step)))
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.from__I__Lscala_collection_immutable_Stream = (function(start) {
  return this.from__I__I__Lscala_collection_immutable_Stream(start, 1)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.continually__Lscala_Function0__Lscala_collection_immutable_Stream = (function(elem) {
  return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(elem.apply__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(elem$3) {
    return (function() {
      return ScalaJS.modules.scala_collection_immutable_Stream().continually__Lscala_Function0__Lscala_collection_immutable_Stream(elem$3)
    })
  })(elem)))
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.fill__I__Lscala_Function0__Lscala_collection_immutable_Stream = (function(n, elem) {
  if ((n <= 0)) {
    return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(elem.apply__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(n$2, elem$2) {
      return (function() {
        return ScalaJS.modules.scala_collection_immutable_Stream().fill__I__Lscala_Function0__Lscala_collection_immutable_Stream((n$2 - 1), elem$2)
      })
    })(n, elem)))
  }
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.tabulate__I__Lscala_Function1__Lscala_collection_immutable_Stream = (function(n, f) {
  return this.scala$collection$immutable$Stream$$loop$6__I__I__Lscala_Function1__Lscala_collection_immutable_Stream(0, n, f)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.range__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_Stream = (function(start, end, step, evidence$1) {
  var num = ScalaJS.as.scala_math_Integral(ScalaJS.modules.scala_Predef().implicitly__O__O(evidence$1));
  if (num.mkOrderingOps__O__Lscala_math_Ordering$Ops(step).$$less__O__Z(num.zero__O())) {
    var jsx$1 = num.mkOrderingOps__O__Lscala_math_Ordering$Ops(start).$$less$eq__O__Z(end)
  } else {
    var jsx$1 = num.mkOrderingOps__O__Lscala_math_Ordering$Ops(end).$$less$eq__O__Z(start)
  };
  if (jsx$1) {
    return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(start, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(start$3, end$2, step$2, evidence$1$1, num$1) {
      return (function() {
        return ScalaJS.modules.scala_collection_immutable_Stream().range__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_Stream(num$1.mkNumericOps__O__Lscala_math_Integral$IntegralOps(start$3).$$plus__O__O(step$2), end$2, step$2, evidence$1$1)
      })
    })(start, end, step, evidence$1, num)))
  }
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.filteredTail__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream$Cons = (function(stream, p) {
  return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(stream.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(stream$2, p$1) {
    return (function() {
      return ScalaJS.as.scala_collection_immutable_Stream(stream$2.tail__O()).filter__Lscala_Function1__Lscala_collection_immutable_Stream(p$1)
    })
  })(stream, p)))
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.collectedTail__Lscala_collection_immutable_Stream__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__Lscala_collection_immutable_Stream$Cons = (function(stream, pf, bf) {
  return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(pf.apply__O__O(stream.head__O()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(stream$1, pf$1, bf$1) {
    return (function() {
      return ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(stream$1.tail__O()).collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(pf$1, bf$1))
    })
  })(stream, pf, bf)))
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.range__O__O__O__Lscala_math_Integral__Lscala_collection_GenTraversable = (function(start, end, step, evidence$2) {
  return this.range__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_Stream(start, end, step, evidence$2)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.tabulate__I__Lscala_Function1__Lscala_collection_GenTraversable = (function(n, f) {
  return this.tabulate__I__Lscala_Function1__Lscala_collection_immutable_Stream(n, f)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.fill__I__Lscala_Function0__Lscala_collection_GenTraversable = (function(n, elem) {
  return this.fill__I__Lscala_Function0__Lscala_collection_immutable_Stream(n, elem)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.iterate__O__I__Lscala_Function1__Lscala_collection_GenTraversable = (function(start, len, f) {
  return this.iterate__O__I__Lscala_Function1__Lscala_collection_immutable_Stream(start, len, f)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.apply__Lscala_collection_Seq__Lscala_collection_GenTraversable = (function(elems) {
  return this.apply__Lscala_collection_Seq__Lscala_collection_immutable_Stream(elems)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.empty__Lscala_collection_GenTraversable = (function() {
  return this.empty__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.scala$collection$immutable$Stream$$loop$6__I__I__Lscala_Function1__Lscala_collection_immutable_Stream = (function(i, n$3, f$7) {
  if ((i >= n$3)) {
    return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(f$7.apply__O__O(ScalaJS.bI(i)), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(n$3, f$7, i$1) {
      return (function() {
        return ScalaJS.modules.scala_collection_immutable_Stream().scala$collection$immutable$Stream$$loop$6__I__I__Lscala_Function1__Lscala_collection_immutable_Stream((i$1 + 1), n$3, f$7)
      })
    })(n$3, f$7, i)))
  }
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.scala$collection$immutable$Stream$$loop$6__I__I__Lscala_Function1__ = (function(i, n$3, f$7) {
  return this.scala$collection$immutable$Stream$$loop$6__I__I__Lscala_Function1__Lscala_collection_immutable_Stream(i, n$3, f$7)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.collectedTail__Lscala_collection_immutable_Stream__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__ = (function(stream, pf, bf) {
  return this.collectedTail__Lscala_collection_immutable_Stream__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__Lscala_collection_immutable_Stream$Cons(stream, pf, bf)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.filteredTail__Lscala_collection_immutable_Stream__Lscala_Function1__ = (function(stream$2, p) {
  return this.filteredTail__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream$Cons(stream$2, p)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.continually__Lscala_Function0__ = (function(elem) {
  return this.continually__Lscala_Function0__Lscala_collection_immutable_Stream(elem)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.from__I__ = (function(start) {
  return this.from__I__Lscala_collection_immutable_Stream(start)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.from__I__I__ = (function(start$2, step) {
  return this.from__I__I__Lscala_collection_immutable_Stream(start$2, step)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.iterate__O__Lscala_Function1__ = (function(start$3, f) {
  return this.iterate__O__Lscala_Function1__Lscala_collection_immutable_Stream(start$3, f)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.consWrapper__Lscala_Function0__ = (function(stream$3) {
  return this.consWrapper__Lscala_Function0__Lscala_collection_immutable_Stream$ConsWrapper(stream$3)
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream$.prototype = ScalaJS.c.scala_collection_immutable_Stream$.prototype;
ScalaJS.is.scala_collection_immutable_Stream$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream$)))
});
ScalaJS.as.scala_collection_immutable_Stream$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream$: 0
}, false, "scala.collection.immutable.Stream$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_immutable_Stream$: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream$.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream$;
ScalaJS.moduleInstances.scala_collection_immutable_Stream = undefined;
ScalaJS.modules.scala_collection_immutable_Stream = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_Stream)) {
    ScalaJS.moduleInstances.scala_collection_immutable_Stream = new ScalaJS.c.scala_collection_immutable_Stream$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_Stream
});
//@ sourceMappingURL=Stream$.js.map
