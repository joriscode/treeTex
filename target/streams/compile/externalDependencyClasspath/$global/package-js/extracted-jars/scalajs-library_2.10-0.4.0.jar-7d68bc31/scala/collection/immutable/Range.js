/** @constructor */
ScalaJS.c.scala_collection_immutable_Range = (function() {
  ScalaJS.c.scala_collection_AbstractSeq.call(this);
  this.start$4 = 0;
  this.end$4 = 0;
  this.step$4 = 0;
  this.isEmpty$4 = false;
  this.numRangeElements$4 = 0;
  this.lastElement$4 = 0;
  this.terminalElement$4 = 0
});
ScalaJS.c.scala_collection_immutable_Range.prototype = new ScalaJS.inheritable.scala_collection_AbstractSeq();
ScalaJS.c.scala_collection_immutable_Range.prototype.constructor = ScalaJS.c.scala_collection_immutable_Range;
ScalaJS.c.scala_collection_immutable_Range.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_CustomParallelizable$class__parCombiner__Lscala_collection_CustomParallelizable__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__companion__Lscala_collection_immutable_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__toIndexedSeq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__seq__Lscala_collection_immutable_IndexedSeq__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__thisCollection__Lscala_collection_IndexedSeqLike__Lscala_collection_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toCollection__Lscala_collection_IndexedSeqLike__O__Lscala_collection_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.start__I = (function() {
  return this.start$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.end__I = (function() {
  return this.end$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.step__I = (function() {
  return this.step$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.par__Lscala_collection_parallel_immutable_ParRange = (function() {
  return new ScalaJS.c.scala_collection_parallel_immutable_ParRange().init___Lscala_collection_immutable_Range(this)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.gap__p4__J = (function() {
  return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.end__I()).$$minus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.start__I()))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.isExact__p4__Z = (function() {
  return this.gap__p4__J().$$percent__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.step__I())).equals__O__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(0))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.hasStub__p4__Z = (function() {
  return (this.isInclusive__Z() || (!this.isExact__p4__Z()))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.longLength__p4__J = (function() {
  var jsx$4 = this.gap__p4__J().$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.step__I()));
  var jsx$3 = ScalaJS.modules.scala_scalajs_runtime_Long();
  if (this.hasStub__p4__Z()) {
    var jsx$2 = 1
  } else {
    var jsx$2 = 0
  };
  var jsx$1 = jsx$3.fromInt__I__Lscala_scalajs_runtime_Long(jsx$2);
  return jsx$4.$$plus__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(jsx$1)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.isEmpty__Z = (function() {
  return this.isEmpty$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.numRangeElements__I = (function() {
  return this.numRangeElements$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.lastElement__I = (function() {
  return this.lastElement$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.terminalElement__I = (function() {
  return this.terminalElement$4
});
ScalaJS.c.scala_collection_immutable_Range.prototype.last__I = (function() {
  if (this.isEmpty__Z()) {
    return ScalaJS.uI(ScalaJS.modules.scala_collection_immutable_Nil().last__O())
  } else {
    return this.lastElement__I()
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.min__Lscala_math_Ordering__I = (function(ord) {
  if ((ord === ScalaJS.modules.scala_math_Ordering$Int())) {
    if ((this.step__I() > 0)) {
      return this.start__I()
    } else {
      return this.last__I()
    }
  } else {
    return ScalaJS.uI(ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, ord))
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.max__Lscala_math_Ordering__I = (function(ord) {
  if ((ord === ScalaJS.modules.scala_math_Ordering$Int())) {
    if ((this.step__I() > 0)) {
      return this.last__I()
    } else {
      return this.start__I()
    }
  } else {
    return ScalaJS.uI(ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, ord))
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.copy__I__I__I__Lscala_collection_immutable_Range = (function(start, end, step) {
  return new ScalaJS.c.scala_collection_immutable_Range().init___I__I__I(start, end, step)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.by__I__Lscala_collection_immutable_Range = (function(step) {
  return this.copy__I__I__I__Lscala_collection_immutable_Range(this.start__I(), this.end__I(), step)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.isInclusive__Z = (function() {
  return false
});
ScalaJS.c.scala_collection_immutable_Range.prototype.size__I = (function() {
  return this.length__I()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.length__I = (function() {
  if ((this.numRangeElements__I() < 0)) {
    return this.fail__p4__Lscala_Nothing()
  } else {
    return this.numRangeElements__I()
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.description__p4__T = (function() {
  var jsx$12 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%d %s %d by %s"));
  var jsx$11 = ScalaJS.modules.scala_Predef();
  var jsx$10 = ScalaJS.data.java_lang_Object.getArrayOf();
  var jsx$9 = ScalaJS.bI(this.start__I());
  if (this.isInclusive__Z()) {
    var jsx$8 = "to"
  } else {
    var jsx$8 = "until"
  };
  var jsx$7 = [jsx$9, jsx$8, ScalaJS.bI(this.end__I()), ScalaJS.bI(this.step__I())];
  var jsx$6 = ScalaJS.makeNativeArrayWrapper(jsx$10, jsx$7);
  var jsx$5 = jsx$11.genericWrapArray__O__Lscala_collection_mutable_WrappedArray(jsx$6);
  return jsx$12.format__Lscala_collection_Seq__T(jsx$5)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.fail__p4__Lscala_Nothing = (function() {
  throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T((("" + this.description__p4__T()) + ": seqs cannot contain more than Int.MaxValue elements."))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__V = (function() {
  if ((this.numRangeElements__I() < 0)) {
    this.fail__p4__Lscala_Nothing()
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.validateRangeBoundaries__Lscala_Function1__Z = (function(f) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  if (((this.start__I() !== -2147483648) || (this.end__I() !== -2147483648))) {
    return true
  } else {
    var count = 0;
    var num = this.start__I();
    while ((count < this.numRangeElements__I())) {
      f.apply__O__O(ScalaJS.bI(num));
      count = (count + 1);
      num = (num + this.step__I())
    };
    return false
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.apply__I__I = (function(idx) {
  return this.apply$mcII$sp__I__I(idx)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.foreach__Lscala_Function1__V = (function(f) {
  if (this.validateRangeBoundaries__Lscala_Function1__Z(f)) {
    var i = this.start__I();
    var terminal = this.terminalElement__I();
    var step = this.step__I();
    while ((i !== terminal)) {
      f.apply__O__O(ScalaJS.bI(i));
      i = (i + step)
    }
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.take__I__Lscala_collection_immutable_Range = (function(n) {
  if (((n <= 0) || this.isEmpty__Z())) {
    return this.newEmptyRange__p4__I__Lscala_collection_immutable_Range(this.start__I())
  } else {
    if ((n >= this.numRangeElements__I())) {
      return this
    } else {
      return new ScalaJS.c.scala_collection_immutable_Range$Inclusive().init___I__I__I(this.start__I(), this.locationAfterN__p4__I__I((n - 1)), this.step__I())
    }
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.drop__I__Lscala_collection_immutable_Range = (function(n) {
  if (((n <= 0) || this.isEmpty__Z())) {
    return this
  } else {
    if ((n >= this.numRangeElements__I())) {
      return this.newEmptyRange__p4__I__Lscala_collection_immutable_Range(this.end__I())
    } else {
      return this.copy__I__I__I__Lscala_collection_immutable_Range(this.locationAfterN__p4__I__I(n), this.end__I(), this.step__I())
    }
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.init__Lscala_collection_immutable_Range = (function() {
  if (this.isEmpty__Z()) {
    ScalaJS.modules.scala_collection_immutable_Nil().init__O()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return this.dropRight__I__Lscala_collection_immutable_Range(1)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.tail__Lscala_collection_immutable_Range = (function() {
  if (this.isEmpty__Z()) {
    ScalaJS.modules.scala_collection_immutable_Nil().tail__Lscala_collection_immutable_List()
  } else {
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
  };
  return this.drop__I__Lscala_collection_immutable_Range(1)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.skipCount__p4__Lscala_Function1__I = (function(p) {
  var current = this.start__I();
  var counted = 0;
  while (((counted < this.numRangeElements__I()) && p.apply$mcZI$sp__I__Z(current))) {
    counted = (counted + 1);
    current = (current + this.step__I())
  };
  return counted
});
ScalaJS.c.scala_collection_immutable_Range.prototype.isWithinBoundaries__p4__I__Z = (function(elem) {
  return ((!this.isEmpty__Z()) && ((((this.step__I() > 0) && (this.start__I() <= elem)) && (elem <= this.last__I())) || (((this.step__I() < 0) && (this.last__I() <= elem)) && (elem <= this.start__I()))))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.locationAfterN__p4__I__I = (function(n) {
  return (this.start__I() + (this.step__I() * n))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.newEmptyRange__p4__I__Lscala_collection_immutable_Range = (function(value) {
  return new ScalaJS.c.scala_collection_immutable_Range().init___I__I__I(value, value, this.step__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.takeWhile__Lscala_Function1__Lscala_collection_immutable_Range = (function(p) {
  return this.take__I__Lscala_collection_immutable_Range(this.skipCount__p4__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.dropWhile__Lscala_Function1__Lscala_collection_immutable_Range = (function(p) {
  return this.drop__I__Lscala_collection_immutable_Range(this.skipCount__p4__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return this.splitAt__I__Lscala_Tuple2(this.skipCount__p4__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.take__I__Lscala_collection_immutable_Range(n), this.drop__I__Lscala_collection_immutable_Range(n))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.takeRight__I__Lscala_collection_immutable_Range = (function(n) {
  return this.drop__I__Lscala_collection_immutable_Range((this.numRangeElements__I() - n))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.dropRight__I__Lscala_collection_immutable_Range = (function(n) {
  return this.take__I__Lscala_collection_immutable_Range((this.numRangeElements__I() - n))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.reverse__Lscala_collection_immutable_Range = (function() {
  if (this.isEmpty__Z()) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_Range$Inclusive().init___I__I__I(this.last__I(), this.start__I(), (-this.step__I()))
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.inclusive__Lscala_collection_immutable_Range = (function() {
  if (this.isInclusive__Z()) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_Range$Inclusive().init___I__I__I(this.start__I(), this.end__I(), this.step__I())
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.contains__I__Z = (function(x) {
  return (this.isWithinBoundaries__p4__I__Z(x) && (((x - this.start__I()) % this.step__I()) === 0))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.sum__Lscala_math_Numeric__I = (function(num) {
  if (this.isEmpty__Z()) {
    return 0
  } else {
    if ((this.numRangeElements__I() === 1)) {
      return ScalaJS.uI(this.head__O())
    } else {
      return ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(this.numRangeElements__I()).$$times__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long((ScalaJS.uI(this.head__O()) + this.last__I()))).$$div__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(2)).toInt__I()
    }
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toIterable__Lscala_collection_immutable_Range = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toSeq__Lscala_collection_immutable_Range = (function() {
  return this
});
ScalaJS.c.scala_collection_immutable_Range.prototype.equals__O__Z = (function(other) {
  var x1 = other;
  if (ScalaJS.is.scala_collection_immutable_Range(x1)) {
    var x2 = ScalaJS.as.scala_collection_immutable_Range(x1);
    return ((x2.canEqual__O__Z(this) && (this.length__I() === x2.length__I())) && (this.isEmpty__Z() || ((this.start__I() === x2.start__I()) && (this.last__I() === x2.last__I()))))
  };
  return ScalaJS.impls.scala_collection_GenSeqLike$class__equals__Lscala_collection_GenSeqLike__O__Z(this, other)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toString__T = (function() {
  if ((this.numRangeElements__I() > ScalaJS.modules.scala_collection_immutable_Range().MAX$undPRINT__I())) {
    var endStr = ", ... )"
  } else {
    var endStr = ")"
  };
  return this.take__I__Lscala_collection_immutable_Range(ScalaJS.modules.scala_collection_immutable_Range().MAX$undPRINT__I()).mkString__T__T__T__T("Range(", ", ", endStr)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.foreach$mVc$sp__Lscala_Function1__V = (function(f) {
  if (this.validateRangeBoundaries__Lscala_Function1__Z(f)) {
    var i = this.start__I();
    var terminal = this.terminalElement__I();
    var step = this.step__I();
    while ((i !== terminal)) {
      f.apply$mcVI$sp__I__V(i);
      i = (i + step)
    }
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.apply$mcII$sp__I__I = (function(idx) {
  this.scala$collection$immutable$Range$$validateMaxLength__V();
  if (((idx < 0) || (idx >= this.numRangeElements__I()))) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  } else {
    return (this.start__I() + (this.step__I() * idx))
  }
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_SeqView(from, until)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_SeqView()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__O__Lscala_collection_IndexedSeq(repr)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_immutable_Seq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toSeq__Lscala_collection_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toSeq__Lscala_collection_immutable_Seq = (function() {
  return this.toSeq__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return this.toIterable__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.bI(this.sum__Lscala_math_Numeric__I(num))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.reverse__O = (function() {
  return this.reverse__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_immutable_Range(n)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__Lscala_collection_immutable_Range(n)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_Range(p)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_Range(p)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.init__O = (function() {
  return this.init__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_Range(n)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_Range(n)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bI(this.apply__I__I(ScalaJS.uI(v1)))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.apply__I__O = (function(idx) {
  return ScalaJS.bI(this.apply__I__I(idx))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.bI(this.max__Lscala_math_Ordering__I(cmp))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.bI(this.min__Lscala_math_Ordering__I(cmp))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.last__O = (function() {
  return ScalaJS.bI(this.last__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.par__Lscala_collection_Parallel = (function() {
  return this.par__Lscala_collection_parallel_immutable_ParRange()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.init___I__I__I = (function(start, end, step) {
  this.start$4 = start;
  this.end$4 = end;
  this.step$4 = step;
  ScalaJS.c.scala_collection_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Seq$class__$init$__Lscala_collection_immutable_Seq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_immutable_IndexedSeq$class__$init$__Lscala_collection_immutable_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_CustomParallelizable$class__$init$__Lscala_collection_CustomParallelizable__V(this);
  this.isEmpty$4 = ((((start > end) && (step > 0)) || ((start < end) && (step < 0))) || ((start === end) && (!this.isInclusive__Z())));
  if ((step === 0)) {
    throw new ScalaJS.c.java_lang_IllegalArgumentException().init___T("step cannot be 0.")
  } else {
    if (this.isEmpty__Z()) {
      var jsx$13 = 0
    } else {
      var len = this.longLength__p4__J();
      if (len.$$greater__Lscala_scalajs_runtime_Long__Z(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(2147483647))) {
        var jsx$13 = -1
      } else {
        var jsx$13 = len.toInt__I()
      }
    }
  };
  this.numRangeElements$4 = jsx$13;
  this.lastElement$4 = (start + ((this.numRangeElements__I() - 1) * step));
  this.terminalElement$4 = (start + (this.numRangeElements__I() * step));
  return this
});
ScalaJS.c.scala_collection_immutable_Range.prototype.contains__I__ = (function(x) {
  return ScalaJS.bZ(this.contains__I__Z(x))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.inclusive__ = (function() {
  return this.inclusive__Lscala_collection_immutable_Range()
});
ScalaJS.c.scala_collection_immutable_Range.prototype.foreach$mVc$sp__Lscala_Function1__ = (function(f) {
  return ScalaJS.bV(this.foreach$mVc$sp__Lscala_Function1__V(f))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.validateRangeBoundaries__Lscala_Function1__ = (function(f$2) {
  return ScalaJS.bZ(this.validateRangeBoundaries__Lscala_Function1__Z(f$2))
});
ScalaJS.c.scala_collection_immutable_Range.prototype.scala$collection$immutable$Range$$validateMaxLength__ = (function() {
  return ScalaJS.bV(this.scala$collection$immutable$Range$$validateMaxLength__V())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.isInclusive__ = (function() {
  return ScalaJS.bZ(this.isInclusive__Z())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.by__I__ = (function(step) {
  return this.by__I__Lscala_collection_immutable_Range(step)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.copy__I__I__I__ = (function(start, end, step$2) {
  return this.copy__I__I__I__Lscala_collection_immutable_Range(start, end, step$2)
});
ScalaJS.c.scala_collection_immutable_Range.prototype.terminalElement__ = (function() {
  return ScalaJS.bI(this.terminalElement__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.lastElement__ = (function() {
  return ScalaJS.bI(this.lastElement__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.numRangeElements__ = (function() {
  return ScalaJS.bI(this.numRangeElements__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.step__ = (function() {
  return ScalaJS.bI(this.step__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.end__ = (function() {
  return ScalaJS.bI(this.end__I())
});
ScalaJS.c.scala_collection_immutable_Range.prototype.start__ = (function() {
  return ScalaJS.bI(this.start__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Range = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Range.prototype = ScalaJS.c.scala_collection_immutable_Range.prototype;
ScalaJS.is.scala_collection_immutable_Range = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Range)))
});
ScalaJS.as.scala_collection_immutable_Range = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Range(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Range")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Range = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Range)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Range = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Range(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Range;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Range = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Range: 0
}, false, "scala.collection.immutable.Range", ScalaJS.data.scala_collection_AbstractSeq, {
  scala_collection_immutable_Range: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_CustomParallelizable: 1,
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
ScalaJS.c.scala_collection_immutable_Range.prototype.$classData = ScalaJS.data.scala_collection_immutable_Range;
//@ sourceMappingURL=Range.js.map
