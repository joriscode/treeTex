/** @constructor */
ScalaJS.c.scala_collection_immutable_Stream = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_Stream.prototype.constructor = ScalaJS.c.scala_collection_immutable_Stream;
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.apply__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__apply__Lscala_collection_LinearSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__forall__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__exists__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__contains__Lscala_collection_LinearSeqOptimized__O__Z(this, elem)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__find__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.foldRight__O__Lscala_Function2__O = (function(z, f) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__foldRight__Lscala_collection_LinearSeqOptimized__O__Lscala_Function2__O(this, z, f)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__reduceRight__Lscala_collection_LinearSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__last__Lscala_collection_LinearSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.dropRight__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__dropRight__Lscala_collection_LinearSeqOptimized__I__Lscala_collection_LinearSeqOptimized(this, n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__span__Lscala_collection_LinearSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__sameElements__Lscala_collection_LinearSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lengthCompare__Lscala_collection_LinearSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.isDefinedAt__I__Z = (function(x) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__isDefinedAt__Lscala_collection_LinearSeqOptimized__I__Z(this, x)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__segmentLength__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__indexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_LinearSeqOptimized$class__lastIndexWhere__Lscala_collection_LinearSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_immutable_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_LinearSeq$class__seq__Lscala_collection_immutable_LinearSeq__Lscala_collection_immutable_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.thisCollection__Lscala_collection_LinearSeq = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__thisCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__hashCode__Lscala_collection_LinearSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.corresponds__Lscala_collection_GenSeq__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_LinearSeqLike$class__corresponds__Lscala_collection_LinearSeqLike__Lscala_collection_GenSeq__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.modules.scala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.append__Lscala_Function0__Lscala_collection_immutable_Stream = (function(rest) {
  if (this.isEmpty__Z()) {
    return ScalaJS.as.scala_collection_GenTraversableOnce(rest.apply__O()).toStream__Lscala_collection_immutable_Stream()
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, rest$1) {
      return (function() {
        return ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).append__Lscala_Function0__Lscala_collection_immutable_Stream(rest$1)
      })
    })(this, rest)))
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.force__Lscala_collection_immutable_Stream = (function() {
  var these = this;
  while ((!these.isEmpty__Z())) {
    these = ScalaJS.as.scala_collection_immutable_Stream(these.tail__O())
  };
  return this
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.print__V = (function() {
  this.print__T__V(", ")
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.print__T__V = (function(sep) {
  this.loop$1__p4__Lscala_collection_immutable_Stream__T__T__V(this, "", sep)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.length__I = (function() {
  var len = 0;
  var left = this;
  while ((!left.isEmpty__Z())) {
    len = (len + 1);
    left = ScalaJS.as.scala_collection_immutable_Stream(left.tail__O())
  };
  return len
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$asThat__O__O = (function(x) {
  return x
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream = (function(x) {
  return ScalaJS.as.scala_collection_immutable_Stream(x)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z = (function(bf) {
  return ScalaJS.is.scala_collection_immutable_Stream$StreamBuilder(bf.apply__O__Lscala_collection_mutable_Builder(this.repr__O()))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.hasDefiniteSize__Z = (function() {
  return this.loop$2__p4__Lscala_collection_immutable_Stream__Z(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    if (this.isEmpty__Z()) {
      var jsx$1 = that.toStream__Lscala_collection_immutable_Stream()
    } else {
      var jsx$1 = ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, that$1) {
        return (function() {
          return arg$outer.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$1, ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
        })
      })(this, that)))
    };
    return this.scala$collection$immutable$Stream$$asThat__O__O(jsx$1)
  } else {
    return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.$$plus$colon__O__Lscala_collection_generic_CanBuildFrom__O = (function(elem, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    return this.scala$collection$immutable$Stream$$asThat__O__O(ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(elem, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
      return (function() {
        return arg$outer
      })
    })(this))))
  } else {
    return ScalaJS.impls.scala_collection_SeqLike$class__$plus$colon__Lscala_collection_SeqLike__O__Lscala_collection_generic_CanBuildFrom__O(this, elem, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    if (this.isEmpty__Z()) {
      var jsx$2 = ScalaJS.modules.scala_collection_immutable_Stream().apply__Lscala_collection_Seq__Lscala_collection_immutable_Stream(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [z])))
    } else {
      var jsx$2 = ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(z, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, z$1, op$1) {
        return (function() {
          return arg$outer.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(op$1.apply__O__O__O(z$1, arg$outer.head__O()), op$1, ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
        })
      })(this, z, op)))
    };
    return this.scala$collection$immutable$Stream$$asThat__O__O(jsx$2)
  } else {
    return ScalaJS.impls.scala_collection_TraversableLike$class__scanLeft__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    if (this.isEmpty__Z()) {
      var jsx$3 = ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    } else {
      var jsx$3 = ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(f.apply__O__O(this.head__O()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, f$1) {
        return (function() {
          return arg$outer.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$1, ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
        })
      })(this, f)))
    };
    return this.scala$collection$immutable$Stream$$asThat__O__O(jsx$3)
  } else {
    return ScalaJS.impls.scala_collection_TraversableLike$class__map__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function(pf, bf) {
  if ((!this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf))) {
    return ScalaJS.impls.scala_collection_TraversableLike$class__collect__Lscala_collection_TraversableLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(this, pf, bf)
  } else {
    var rest = this;
    while ((rest.nonEmpty__Z() && (!pf.isDefinedAt__O__Z(rest.head__O())))) {
      rest = ScalaJS.as.scala_collection_immutable_Stream(rest.tail__O())
    };
    if (rest.isEmpty__Z()) {
      return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    } else {
      return ScalaJS.modules.scala_collection_immutable_Stream().collectedTail__Lscala_collection_immutable_Stream__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__Lscala_collection_immutable_Stream$Cons(rest, pf, bf)
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    if (this.isEmpty__Z()) {
      var jsx$4 = ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    } else {
      var temp1 = this;
      var nonEmptyPrefix = new ScalaJS.c.scala_runtime_ObjectRef().init___O(temp1);
      var prefix = ScalaJS.as.scala_collection_GenTraversableOnce(f.apply__O__O(ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix.elem$1).head__O())).toStream__Lscala_collection_immutable_Stream();
      while (((!ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix.elem$1).isEmpty__Z()) && prefix.isEmpty__Z())) {
        nonEmptyPrefix.elem$1 = ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix.elem$1).tail__O());
        if ((!ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix.elem$1).isEmpty__Z())) {
          prefix = ScalaJS.as.scala_collection_GenTraversableOnce(f.apply__O__O(ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix.elem$1).head__O())).toStream__Lscala_collection_immutable_Stream()
        }
      };
      if (ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix.elem$1).isEmpty__Z()) {
        var jsx$4 = ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
      } else {
        var jsx$4 = prefix.append__Lscala_Function0__Lscala_collection_immutable_Stream(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, f$2, nonEmptyPrefix$1) {
          return (function() {
            return arg$outer.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(nonEmptyPrefix$1.elem$1).tail__O()).flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$2, ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
          })
        })(this, f, nonEmptyPrefix)))
      }
    };
    return this.scala$collection$immutable$Stream$$asThat__O__O(jsx$4)
  } else {
    return ScalaJS.impls.scala_collection_TraversableLike$class__flatMap__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.filter__Lscala_Function1__Lscala_collection_immutable_Stream = (function(p) {
  var rest = this;
  while (((!rest.isEmpty__Z()) && (!ScalaJS.uZ(p.apply__O__O(rest.head__O()))))) {
    rest = ScalaJS.as.scala_collection_immutable_Stream(rest.tail__O())
  };
  if (rest.nonEmpty__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Stream().filteredTail__Lscala_collection_immutable_Stream__Lscala_Function1__Lscala_collection_immutable_Stream$Cons(rest, p)
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.withFilter__Lscala_Function1__Lscala_collection_immutable_Stream$StreamWithFilter = (function(p) {
  return new ScalaJS.c.scala_collection_immutable_Stream$StreamWithFilter().init___Lscala_collection_immutable_Stream__Lscala_Function1(this, p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.iterator__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_collection_immutable_StreamIterator().init___Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.foreach__Lscala_Function1__V = (function(f) {
  var _$this = this;
  tailCallLoop: while (true) {
    if ((!_$this.isEmpty__Z())) {
      f.apply__O__O(_$this.head__O());
      _$this = ScalaJS.as.scala_collection_immutable_Stream(_$this.tail__O());
      continue tailCallLoop;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (_$this.isEmpty__Z()) {
      return z
    } else {
      var temp$_$this = ScalaJS.as.scala_collection_immutable_Stream(_$this.tail__O());
      var temp$z = op.apply__O__O__O(z, _$this.head__O());
      _$this = temp$_$this;
      z = temp$z;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.reduceLeft__Lscala_Function2__O = (function(f) {
  if (this.isEmpty__Z()) {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("empty.reduceLeft")
  } else {
    var reducedRes = this.head__O();
    var left = ScalaJS.as.scala_collection_immutable_Stream(this.tail__O());
    while ((!left.isEmpty__Z())) {
      reducedRes = f.apply__O__O__O(reducedRes, left.head__O());
      left = ScalaJS.as.scala_collection_immutable_Stream(left.tail__O())
    };
    return reducedRes
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.filter__Lscala_Function1__Lscala_collection_immutable_Stream(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$2) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.uZ(p$2.apply__O__O(x$1)))
    })
  })(p))), this.filterNot__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(p$2) {
    return (function(x$2) {
      return ScalaJS.bZ(ScalaJS.uZ(p$2.apply__O__O(x$2)))
    })
  })(p))))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    if ((this.isEmpty__Z() || that.isEmpty__Z())) {
      var jsx$5 = ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    } else {
      var jsx$5 = ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(new ScalaJS.c.scala_Tuple2().init___O__O(this.head__O(), that.head__O()), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, that$2) {
        return (function() {
          return arg$outer.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.as.scala_collection_GenIterable(that$2.tail__O()), ScalaJS.modules.scala_collection_immutable_Stream().canBuildFrom__Lscala_collection_generic_CanBuildFrom()))
        })
      })(this, that)))
    };
    return this.scala$collection$immutable$Stream$$asThat__O__O(jsx$5)
  } else {
    return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return this.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(ScalaJS.modules.scala_collection_immutable_Stream().from__I__Lscala_collection_immutable_Stream(0), bf)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  b.append__T__Lscala_collection_mutable_StringBuilder(start);
  this.loop$3__p4__T__Lscala_collection_immutable_Stream__Lscala_collection_mutable_StringBuilder__T__T__V("", this, b, sep, end);
  return b
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.mkString__T__T = (function(sep) {
  return this.mkString__T__T__T__T("", sep, "")
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.mkString__T = (function() {
  return this.mkString__T__T("")
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  this.force__Lscala_collection_immutable_Stream();
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, (("" + this.stringPrefix__T()) + "("), ", ", ")")
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.take__I__Lscala_collection_immutable_Stream(n), this.drop__I__Lscala_collection_immutable_Stream(n))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.take__I__Lscala_collection_immutable_Stream = (function(n) {
  if (((n <= 0) || this.isEmpty__Z())) {
    return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
  } else {
    if ((n === 1)) {
      return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
        return (function() {
          return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
        })
      })()))
    } else {
      return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, n$1) {
        return (function() {
          return ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).take__I__Lscala_collection_immutable_Stream((n$1 - 1))
        })
      })(this, n)))
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.drop__I__Lscala_collection_immutable_Stream = (function(n) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (((n <= 0) || _$this.isEmpty__Z())) {
      return _$this
    } else {
      var temp$_$this = ScalaJS.as.scala_collection_immutable_Stream(_$this.tail__O());
      var temp$n = (n - 1);
      _$this = temp$_$this;
      n = temp$n;
      continue tailCallLoop
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.slice__I__I__Lscala_collection_immutable_Stream = (function(from, until) {
  var lo = ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(from), 0);
  if (((until <= lo) || this.isEmpty__Z())) {
    return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
  } else {
    return this.drop__I__Lscala_collection_immutable_Stream(lo).take__I__Lscala_collection_immutable_Stream((until - lo))
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.init__Lscala_collection_immutable_Stream = (function() {
  if (this.isEmpty__Z()) {
    return ScalaJS.as.scala_collection_immutable_Stream(ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O(this))
  } else {
    if (ScalaJS.as.scala_collection_SeqLike(this.tail__O()).isEmpty__Z()) {
      return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
    } else {
      return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer) {
        return (function() {
          return ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).init__Lscala_collection_immutable_Stream()
        })
      })(this)))
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.takeRight__I__Lscala_collection_immutable_Stream = (function(n) {
  var these = this;
  var lead = this.drop__I__Lscala_collection_immutable_Stream(n);
  while ((!lead.isEmpty__Z())) {
    these = ScalaJS.as.scala_collection_immutable_Stream(these.tail__O());
    lead = ScalaJS.as.scala_collection_immutable_Stream(lead.tail__O())
  };
  return these
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.takeWhile__Lscala_Function1__Lscala_collection_immutable_Stream = (function(p) {
  if (((!this.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(this.head__O())))) {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(this.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, p$3) {
      return (function() {
        return ScalaJS.as.scala_collection_immutable_Stream(arg$outer.tail__O()).takeWhile__Lscala_Function1__Lscala_collection_immutable_Stream(p$3)
      })
    })(this, p)))
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$Empty()
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.dropWhile__Lscala_Function1__Lscala_collection_immutable_Stream = (function(p) {
  var these = this;
  while (((!these.isEmpty__Z()) && ScalaJS.uZ(p.apply__O__O(these.head__O())))) {
    these = ScalaJS.as.scala_collection_immutable_Stream(these.tail__O())
  };
  return these
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.distinct__Lscala_collection_immutable_Stream = (function() {
  return this.scala$collection$immutable$Stream$$loop$4__Lscala_collection_immutable_Set__Lscala_collection_immutable_Stream__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Set(ScalaJS.modules.scala_collection_immutable_Set().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil())), this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.padTo__I__O__Lscala_collection_generic_CanBuildFrom__O = (function(len, elem, bf) {
  if (this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf)) {
    return this.scala$collection$immutable$Stream$$asThat__O__O(this.scala$collection$immutable$Stream$$loop$5__I__Lscala_collection_immutable_Stream__O__Lscala_collection_immutable_Stream(len, this, elem))
  } else {
    return ScalaJS.impls.scala_collection_SeqLike$class__padTo__Lscala_collection_SeqLike__I__O__Lscala_collection_generic_CanBuildFrom__O(this, len, elem, bf)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.reverse__Lscala_collection_immutable_Stream = (function() {
  var result = new ScalaJS.c.scala_runtime_ObjectRef().init___O(ScalaJS.modules.scala_collection_immutable_Stream$Empty());
  var these = this;
  while ((!these.isEmpty__Z())) {
    var r = ScalaJS.modules.scala_collection_immutable_Stream().consWrapper__Lscala_Function0__Lscala_collection_immutable_Stream$ConsWrapper(new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(result$1) {
      return (function() {
        return ScalaJS.as.scala_collection_immutable_Stream(result$1.elem$1)
      })
    })(result))).$$hash$colon$colon__O__Lscala_collection_immutable_Stream(these.head__O());
    r.tail__O();
    result.elem$1 = r;
    these = ScalaJS.as.scala_collection_immutable_Stream(these.tail__O())
  };
  return ScalaJS.as.scala_collection_immutable_Stream(result.elem$1)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.flatten__Lscala_Function1__Lscala_collection_immutable_Stream = (function(asTraversable) {
  if (this.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Stream().empty__Lscala_collection_immutable_Stream()
  } else {
    return this.scala$collection$immutable$Stream$$flatten1$1__Lscala_collection_Traversable__Lscala_Function1__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_GenTraversableOnce(asTraversable.apply__O__O(this.head__O())).seq__Lscala_collection_TraversableOnce().toTraversable__Lscala_collection_Traversable(), asTraversable)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.view__Lscala_collection_immutable_StreamView = (function() {
  return new ScalaJS.c.scala_collection_immutable_Stream$$anon$1().init___Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.stringPrefix__T = (function() {
  return "Stream"
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.tail__Lscala_collection_LinearSeqOptimized = (function() {
  return ScalaJS.as.scala_collection_LinearSeqOptimized(this.tail__O())
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.tail__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.as.scala_collection_immutable_Stream(this.tail__O())
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(ScalaJS.as.scala_collection_LinearSeqLike(repr))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.seq__Lscala_collection_LinearSeq = (function() {
  return this.seq__Lscala_collection_immutable_LinearSeq()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_LinearSeqOptimized(n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_immutable_StreamView()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_immutable_StreamView()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.view__Lscala_collection_SeqView = (function() {
  return this.view__Lscala_collection_immutable_StreamView()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.flatten__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return this.flatten__Lscala_Function1__Lscala_collection_immutable_Stream(asTraversable)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.reverse__O = (function() {
  return this.reverse__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.distinct__O = (function() {
  return this.distinct__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_Stream(p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_Stream(p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.takeWhile__Lscala_Function1__Lscala_collection_LinearSeqOptimized = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_Stream(p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__Lscala_collection_immutable_Stream(n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.init__O = (function() {
  return this.init__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_Stream(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.slice__I__I__Lscala_collection_LinearSeqOptimized = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_Stream(from, until)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_Stream(n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.drop__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return this.drop__I__Lscala_collection_immutable_Stream(n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_Stream(n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.take__I__Lscala_collection_LinearSeqOptimized = (function(n) {
  return this.take__I__Lscala_collection_immutable_Stream(n)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return this.withFilter__Lscala_Function1__Lscala_collection_immutable_Stream$StreamWithFilter(p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.filter__Lscala_Function1__O = (function(p) {
  return this.filter__Lscala_Function1__Lscala_collection_immutable_Stream(p)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.loop$1__p4__Lscala_collection_immutable_Stream__T__T__V = (function(these, start, sep$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    ScalaJS.modules.scala_Console().print__O__V(start);
    if (these.isEmpty__Z()) {
      ScalaJS.modules.scala_Console().print__O__V("empty");
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      ScalaJS.modules.scala_Console().print__O__V(these.head__O());
      var temp$these = ScalaJS.as.scala_collection_immutable_Stream(these.tail__O());
      var temp$start = sep$1;
      these = temp$these;
      start = temp$start;
      continue tailCallLoop;
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.loop$2__p4__Lscala_collection_immutable_Stream__Z = (function(s) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (s.isEmpty__Z()) {
      return true
    } else {
      if (s.tailDefined__Z()) {
        s = ScalaJS.as.scala_collection_immutable_Stream(s.tail__O());
        continue tailCallLoop
      } else {
        return false
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.loop$3__p4__T__Lscala_collection_immutable_Stream__Lscala_collection_mutable_StringBuilder__T__T__V = (function(pre, these, b$1, sep$2, end$1) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (these.isEmpty__Z()) {
      b$1.append__T__Lscala_collection_mutable_StringBuilder(end$1);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    } else {
      b$1.append__T__Lscala_collection_mutable_StringBuilder(pre).append__O__Lscala_collection_mutable_StringBuilder(these.head__O());
      if (these.tailDefined__Z()) {
        var temp$pre = sep$2;
        var temp$these = ScalaJS.as.scala_collection_immutable_Stream(these.tail__O());
        pre = temp$pre;
        these = temp$these;
        continue tailCallLoop;
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      } else {
        b$1.append__T__Lscala_collection_mutable_StringBuilder(sep$2).append__T__Lscala_collection_mutable_StringBuilder("?").append__T__Lscala_collection_mutable_StringBuilder(end$1);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    };
    return undefined
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$loop$4__Lscala_collection_immutable_Set__Lscala_collection_immutable_Stream__Lscala_collection_immutable_Stream = (function(seen, rest) {
  var _$this = this;
  tailCallLoop: while (true) {
    if (rest.isEmpty__Z()) {
      return rest
    } else {
      if (seen.apply__O__Z(rest.head__O())) {
        rest = ScalaJS.as.scala_collection_immutable_Stream(rest.tail__O());
        continue tailCallLoop
      } else {
        return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(rest.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, seen$1, rest$2) {
          return (function() {
            return arg$outer.scala$collection$immutable$Stream$$loop$4__Lscala_collection_immutable_Set__Lscala_collection_immutable_Stream__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_immutable_Set(seen$1.$$plus__O__Lscala_collection_Set(rest$2.head__O())), ScalaJS.as.scala_collection_immutable_Stream(rest$2.tail__O()))
          })
        })(_$this, seen, rest)))
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$loop$5__I__Lscala_collection_immutable_Stream__O__Lscala_collection_immutable_Stream = (function(len, these, elem$1) {
  if (these.isEmpty__Z()) {
    return ScalaJS.modules.scala_collection_immutable_Stream().fill__I__Lscala_Function0__Lscala_collection_immutable_Stream(len, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(elem$1) {
      return (function() {
        return elem$1
      })
    })(elem$1)))
  } else {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(these.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, elem$1, len$1, these$1) {
      return (function() {
        return arg$outer.scala$collection$immutable$Stream$$loop$5__I__Lscala_collection_immutable_Stream__O__Lscala_collection_immutable_Stream((len$1 - 1), ScalaJS.as.scala_collection_immutable_Stream(these$1.tail__O()), elem$1)
      })
    })(this, elem$1, len, these)))
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$flatten1$1__Lscala_collection_Traversable__Lscala_Function1__Lscala_collection_immutable_Stream = (function(t, asTraversable$1) {
  if ((!t.isEmpty__Z())) {
    return ScalaJS.modules.scala_collection_immutable_Stream$cons().apply__O__Lscala_Function0__Lscala_collection_immutable_Stream$Cons(t.head__O(), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, asTraversable$1, t$1) {
      return (function() {
        return arg$outer.scala$collection$immutable$Stream$$flatten1$1__Lscala_collection_Traversable__Lscala_Function1__Lscala_collection_immutable_Stream(ScalaJS.as.scala_collection_Traversable(t$1.tail__O()), asTraversable$1)
      })
    })(this, asTraversable$1, t)))
  } else {
    return ScalaJS.as.scala_collection_immutable_Stream(this.tail__O()).flatten__Lscala_Function1__Lscala_collection_immutable_Stream(asTraversable$1)
  }
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqLike$class__$init$__Lscala_collection_LinearSeqLike__V(this);
  ScalaJS.impls.scala_collection_LinearSeq$class__$init$__Lscala_collection_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_LinearSeq$class__$init$__Lscala_collection_immutable_LinearSeq__V(this);
  ScalaJS.impls.scala_collection_LinearSeqOptimized$class__$init$__Lscala_collection_LinearSeqOptimized__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.toCollection__Lscala_collection_LinearSeqLike__ = (function(repr) {
  return this.toCollection__Lscala_collection_LinearSeqLike__Lscala_collection_LinearSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$LinearSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$flatten1$1__Lscala_collection_Traversable__Lscala_Function1__ = (function(t, asTraversable$1) {
  return this.scala$collection$immutable$Stream$$flatten1$1__Lscala_collection_Traversable__Lscala_Function1__Lscala_collection_immutable_Stream(t, asTraversable$1)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$loop$5__I__Lscala_collection_immutable_Stream__O__ = (function(len, these, elem$1) {
  return this.scala$collection$immutable$Stream$$loop$5__I__Lscala_collection_immutable_Stream__O__Lscala_collection_immutable_Stream(len, these, elem$1)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$loop$4__Lscala_collection_immutable_Set__Lscala_collection_immutable_Stream__ = (function(seen, rest) {
  return this.scala$collection$immutable$Stream$$loop$4__Lscala_collection_immutable_Set__Lscala_collection_immutable_Stream__Lscala_collection_immutable_Stream(seen, rest)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__ = (function(bf) {
  return ScalaJS.bZ(this.scala$collection$immutable$Stream$$isStreamBuilder__Lscala_collection_generic_CanBuildFrom__Z(bf))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$asStream__O__ = (function(x) {
  return this.scala$collection$immutable$Stream$$asStream__O__Lscala_collection_immutable_Stream(x)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.scala$collection$immutable$Stream$$asThat__O__ = (function(x$2) {
  return this.scala$collection$immutable$Stream$$asThat__O__O(x$2)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.print__T__ = (function(sep) {
  return ScalaJS.bV(this.print__T__V(sep))
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.print__ = (function() {
  return ScalaJS.bV(this.print__V())
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.force__ = (function() {
  return this.force__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.append__Lscala_Function0__ = (function(rest$2) {
  return this.append__Lscala_Function0__Lscala_collection_immutable_Stream(rest$2)
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.tailDefined__ = (function() {
  return ScalaJS.bZ(this.tailDefined__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Stream = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Stream.prototype = ScalaJS.c.scala_collection_immutable_Stream.prototype;
ScalaJS.is.scala_collection_immutable_Stream = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Stream)))
});
ScalaJS.as.scala_collection_immutable_Stream = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Stream(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Stream")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Stream = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Stream)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Stream = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Stream(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Stream;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Stream = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Stream: 0
}, false, "scala.collection.immutable.Stream", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_Stream: 1,
  scala_collection_LinearSeqOptimized: 1,
  scala_collection_immutable_LinearSeq: 1,
  scala_collection_LinearSeq: 1,
  scala_collection_LinearSeqLike: 1,
  scala_collection_immutable_Seq: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSeq: 1,
  scala_collection_Seq: 1,
  scala_collection_SeqLike: 1,
  scala_collection_GenSeq: 1,
  scala_collection_GenSeqLike: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_AbstractIterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_AbstractTraversable: 1,
  scala_collection_Traversable: 1,
  scala_collection_GenTraversable: 1,
  scala_collection_generic_GenericTraversableTemplate: 1,
  scala_collection_TraversableLike: 1,
  scala_collection_GenTraversableLike: 1,
  scala_collection_Parallelizable: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  scala_collection_generic_FilterMonadic: 1,
  scala_collection_generic_HasNewBuilder: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_Stream.prototype.$classData = ScalaJS.data.scala_collection_immutable_Stream;
//@ sourceMappingURL=Stream.js.map
