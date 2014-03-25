/** @constructor */
ScalaJS.c.scala_collection_immutable_NumericRange = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.start$4 = null;
  this.end$4 = null;
  this.step$4 = null;
  this.isInclusive$4 = false;
  this.num$4 = null;
  this.numRangeElements$4 = 0;
  this.last$4 = null;
  this.hashCode$4 = 0;
  this.bitmap$0$4 = 0
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.constructor = ScalaJS.c.scala_collection_immutable_NumericRange;
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.numRangeElements$lzycompute__p4__I = (function() {
  if (((this.bitmap$0$4 & 1) === 0)) {
    this.numRangeElements$4 = ScalaJS.modules.scala_collection_immutable_NumericRange().count__O__O__O__Z__Lscala_math_Integral__I(this.start__O(), this.end__O(), this.step__O(), this.isInclusive__Z(), this.num$4);
    this.bitmap$0$4 = (this.bitmap$0$4 | 1)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.numRangeElements$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.last$lzycompute__p4__O = (function() {
  if (((this.bitmap$0$4 & 2) === 0)) {
    if ((this.length__I() === 0)) {
      var jsx$1 = ScalaJS.modules.scala_collection_immutable_Nil().last__O()
    } else {
      var jsx$1 = this.locationAfterN__p4__I__O((this.length__I() - 1))
    };
    this.last$4 = jsx$1;
    this.bitmap$0$4 = (this.bitmap$0$4 | 2)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.last$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.hashCode$lzycompute__p4__I = (function() {
  if (((this.bitmap$0$4 & 4) === 0)) {
    this.hashCode$4 = ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this);
    this.bitmap$0$4 = (this.bitmap$0$4 | 4)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.hashCode$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__companion__Lscala_collection_immutable_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__toIndexedSeq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__seq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__toSeq__Lscala_collection_immutable_Seq__Lscala_collection_immutable_Seq(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Seq$class__parCombiner__Lscala_collection_immutable_Seq__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.start__O = (function() {
  return this.start$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.end__O = (function() {
  return this.end$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.step__O = (function() {
  return this.step$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.isInclusive__Z = (function() {
  return this.isInclusive$4
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.numRangeElements__p4__I = (function() {
  if (((this.bitmap$0$4 & 1) === 0)) {
    return this.numRangeElements$lzycompute__p4__I()
  } else {
    return this.numRangeElements$4
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.length__I = (function() {
  return this.numRangeElements__p4__I()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.isEmpty__Z = (function() {
  return (this.length__I() === 0)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.last__O = (function() {
  if (((this.bitmap$0$4 & 2) === 0)) {
    return this.last$lzycompute__p4__O()
  } else {
    return this.last$4
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.by__O__Lscala_collection_immutable_NumericRange = (function(newStep) {
  return this.copy__O__O__O__Lscala_collection_immutable_NumericRange(this.start__O(), this.end__O(), newStep)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.foreach__Lscala_Function1__V = (function(f) {
  var count = 0;
  var current = this.start__O();
  while ((count < this.length__I())) {
    f.apply__O__O(current);
    current = this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(current).$$plus__O__O(this.step__O());
    count = (count + 1)
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.skipCount__p4__Lscala_Function1__I = (function(p) {
  var current = this.start__O();
  var counted = 0;
  while (((counted < this.length__I()) && ScalaJS.uZ(p.apply__O__O(current)))) {
    counted = (counted + 1);
    current = this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(current).$$plus__O__O(this.step__O())
  };
  return counted
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.isWithinBoundaries__p4__O__Z = (function(elem) {
  return ((!this.isEmpty__Z()) && (((this.num$4.mkOrderingOps__O__Lscala_math_Ordering$Ops(this.step__O()).$$greater__O__Z(this.num$4.zero__O()) && this.num$4.mkOrderingOps__O__Lscala_math_Ordering$Ops(this.start__O()).$$less$eq__O__Z(elem)) && this.num$4.mkOrderingOps__O__Lscala_math_Ordering$Ops(elem).$$less$eq__O__Z(this.last__O())) || ((this.num$4.mkOrderingOps__O__Lscala_math_Ordering$Ops(this.step__O()).$$less__O__Z(this.num$4.zero__O()) && this.num$4.mkOrderingOps__O__Lscala_math_Ordering$Ops(this.last__O()).$$less$eq__O__Z(elem)) && this.num$4.mkOrderingOps__O__Lscala_math_Ordering$Ops(elem).$$less$eq__O__Z(this.start__O()))))
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.locationAfterN__p4__I__O = (function(n) {
  return this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(this.start__O()).$$plus__O__O(this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(this.step__O()).$$times__O__O(this.num$4.fromInt__I__O(n)))
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.newEmptyRange__p4__O__Lscala_collection_immutable_NumericRange$Exclusive = (function(value) {
  return ScalaJS.modules.scala_collection_immutable_NumericRange().apply__O__O__O__Lscala_math_Integral__Lscala_collection_immutable_NumericRange$Exclusive(value, value, this.step__O(), this.num$4)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.take__I__Lscala_collection_immutable_NumericRange = (function(n) {
  if (((n <= 0) || (this.length__I() === 0))) {
    return this.newEmptyRange__p4__O__Lscala_collection_immutable_NumericRange$Exclusive(this.start__O())
  } else {
    if ((n >= this.length__I())) {
      return this
    } else {
      return new ScalaJS.c.scala_collection_immutable_NumericRange$Inclusive().init___O__O__O__Lscala_math_Integral(this.start__O(), this.locationAfterN__p4__I__O((n - 1)), this.step__O(), this.num$4)
    }
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.drop__I__Lscala_collection_immutable_NumericRange = (function(n) {
  if (((n <= 0) || (this.length__I() === 0))) {
    return this
  } else {
    if ((n >= this.length__I())) {
      return this.newEmptyRange__p4__O__Lscala_collection_immutable_NumericRange$Exclusive(this.end__O())
    } else {
      return this.copy__O__O__O__Lscala_collection_immutable_NumericRange(this.locationAfterN__p4__I__O(n), this.end__O(), this.step__O())
    }
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.apply__I__O = (function(idx) {
  if (((idx < 0) || (idx >= this.length__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  } else {
    return this.locationAfterN__p4__I__O(idx)
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.min__Lscala_math_Ordering__O = (function(ord) {
  if ((ord === ScalaJS.modules.scala_collection_immutable_NumericRange().defaultOrdering__Lscala_collection_immutable_Map().apply__O__O(this.num$4))) {
    if ((this.num$4.signum__O__I(this.step__O()) > 0)) {
      return this.start__O()
    } else {
      return this.last__O()
    }
  } else {
    return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, ord)
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.max__Lscala_math_Ordering__O = (function(ord) {
  if ((ord === ScalaJS.modules.scala_collection_immutable_NumericRange().defaultOrdering__Lscala_collection_immutable_Map().apply__O__O(this.num$4))) {
    if ((this.num$4.signum__O__I(this.step__O()) > 0)) {
      return this.last__O()
    } else {
      return this.start__O()
    }
  } else {
    return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, ord)
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.mapRange__Lscala_Function1__Lscala_math_Integral__Lscala_collection_immutable_NumericRange = (function(fm, unum) {
  var self = this;
  return new ScalaJS.c.scala_collection_immutable_NumericRange$$anon$1().init___Lscala_collection_immutable_NumericRange__Lscala_Function1__Lscala_math_Integral__Lscala_collection_immutable_NumericRange(this, fm, unum, self)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.containsTyped__O__Z = (function(x) {
  return (this.isWithinBoundaries__p4__O__Z(x) && ScalaJS.anyEqEq(this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(x).$$minus__O__O(this.start__O())).$$percent__O__O(this.step__O()), this.num$4.zero__O()))
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.contains__O__Z = (function(x) {
  try {
    return this.containsTyped__O__Z(x)
  } catch ($jsexc$) {
    if (ScalaJS.is.java_lang_ClassCastException($jsexc$)) {
      return false
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  if (this.isEmpty__Z()) {
    return this.num$4.fromInt__I__O(0)
  } else {
    if ((this.numRangeElements__p4__I() === 1)) {
      return this.head__O()
    } else {
      return this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(this.num$4.fromInt__I__O(this.numRangeElements__p4__I())).$$times__O__O(this.num$4.mkNumericOps__O__Lscala_math_Integral$IntegralOps(this.head__O()).$$plus__O__O(this.last__O()))).$$div__O__O(this.num$4.fromInt__I__O(2))
    }
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.hashCode__I = (function() {
  if (((this.bitmap$0$4 & 4) === 0)) {
    return this.hashCode$lzycompute__p4__I()
  } else {
    return this.hashCode$4
  }
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_collection_immutable_NumericRange(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_NumericRange(x1);
    return ((x2.canEqual__O__Z(this) && (this.length__I() === x2.length__I())) && ((this.length__I() === 0) || (ScalaJS.anyEqEq(this.start__O(), x2.start__O()) && ScalaJS.anyEqEq(this.last__O(), x2.last__O()))))
  };
  return ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z(this, other)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toString__T = (function() {
  if ((this.length__I() > ScalaJS.modules.scala_collection_immutable_Range().MAX$undPRINT__I())) {
    var endStr = ", ... )"
  } else {
    var endStr = ")"
  };
  return this.take__I__Lscala_collection_immutable_NumericRange(ScalaJS.modules.scala_collection_immutable_Range().MAX$undPRINT__I()).mkString__T__T__T__T("NumericRange(", ", ", endStr)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Seq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.apply__O__O = (function(v1) {
  return this.apply__I__O(ScalaJS.uI(v1))
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_NumericRange(n)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_NumericRange(n)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.init___O__O__O__Z__Lscala_math_Integral = (function(start, end, step, isInclusive, num) {
  this.start$4 = start;
  this.end$4 = end;
  this.step$4 = step;
  this.isInclusive$4 = isInclusive;
  this.num$4 = num;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__$init$__Lscala_collection_immutable_IndexedSeq__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.containsTyped__O__ = (function(x) {
  return ScalaJS.bZ(this.containsTyped__O__Z(x))
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.mapRange__Lscala_Function1__Lscala_math_Integral__ = (function(fm, unum) {
  return this.mapRange__Lscala_Function1__Lscala_math_Integral__Lscala_collection_immutable_NumericRange(fm, unum)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.by__O__ = (function(newStep) {
  return this.by__O__Lscala_collection_immutable_NumericRange(newStep)
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.isInclusive__ = (function() {
  return ScalaJS.bZ(this.isInclusive__Z())
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.step__ = (function() {
  return this.step__O()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.end__ = (function() {
  return this.end__O()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.start__ = (function() {
  return this.start__O()
});
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.copy__O__O__O__ = (function(start, end, step) {
  return this.copy__O__O__O__Lscala_collection_immutable_NumericRange(start, end, step)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_NumericRange = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_NumericRange.prototype = ScalaJS.c.scala_collection_immutable_NumericRange.prototype;
ScalaJS.is.scala_collection_immutable_NumericRange = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_NumericRange)))
});
ScalaJS.as.scala_collection_immutable_NumericRange = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_NumericRange(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.NumericRange")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_NumericRange = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_NumericRange)))
});
ScalaJS.asArrayOf.scala_collection_immutable_NumericRange = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_NumericRange(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.NumericRange;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_NumericRange = new ScalaJS.ClassTypeData({
  scala_collection_immutable_NumericRange: 0
}, false, "scala.collection.immutable.NumericRange", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_NumericRange: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_IndexedSeq: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
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
ScalaJS.c.scala_collection_immutable_NumericRange.prototype.$classData = ScalaJS.data.scala_collection_immutable_NumericRange;
//@ sourceMappingURL=NumericRange.js.map
