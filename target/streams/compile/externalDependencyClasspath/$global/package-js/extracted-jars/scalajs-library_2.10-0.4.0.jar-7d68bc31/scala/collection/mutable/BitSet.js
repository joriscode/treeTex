/** @constructor */
ScalaJS.c.scala_collection_mutable_BitSet = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSet.call(this);
  this.elems$5 = null
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSet();
ScalaJS.c.scala_collection_mutable_BitSet.prototype.constructor = ScalaJS.c.scala_collection_mutable_BitSet;
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toBitMask__AJ = (function() {
  return ScalaJS.impls.scala_collection_BitSetLike$class__toBitMask__Lscala_collection_BitSetLike__AJ(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_BitSetLike$class__size__Lscala_collection_BitSetLike__I(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.ordering__Lscala_math_Ordering = (function() {
  return ScalaJS.impls.scala_collection_BitSetLike$class__ordering__Lscala_collection_BitSetLike__Lscala_math_Ordering(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike = (function(from, until) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__rangeImpl__Lscala_collection_BitSetLike__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike(this, from, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_BitSetLike$class__iterator__Lscala_collection_BitSetLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_BitSetLike$class__foreach__Lscala_collection_BitSetLike__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$bar__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function(other) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__$bar__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike(this, other)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$amp__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function(other) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__$amp__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike(this, other)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$amp$tilde__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function(other) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__$amp$tilde__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike(this, other)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$up__Lscala_collection_BitSet__Lscala_collection_BitSetLike = (function(other) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__$up__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Lscala_collection_BitSetLike(this, other)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.contains__I__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__contains__Lscala_collection_BitSetLike__I__Z(this, elem)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.subsetOf__Lscala_collection_BitSet__Z = (function(other) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__subsetOf__Lscala_collection_BitSetLike__Lscala_collection_BitSet__Z(this, other)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(sb, start, sep, end) {
  return ScalaJS.impls.scala_collection_BitSetLike$class__addString__Lscala_collection_BitSetLike__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, sb, start, sep, end)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.stringPrefix__T = (function() {
  return ScalaJS.impls.scala_collection_BitSetLike$class__stringPrefix__Lscala_collection_BitSetLike__T(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__subsetOf__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.keySet__Lscala_collection_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__keySet__Lscala_collection_SortedSetLike__Lscala_collection_SortedSet(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.firstKey__O = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__firstKey__Lscala_collection_SortedSetLike__O(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.lastKey__O = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__lastKey__Lscala_collection_SortedSetLike__O(this)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.from__O__Lscala_collection_SortedSet = (function(from) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__from__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet(this, from)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.until__O__Lscala_collection_SortedSet = (function(until) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__until__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet(this, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.range__O__O__Lscala_collection_SortedSet = (function(from, until) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__range__Lscala_collection_SortedSetLike__O__O__Lscala_collection_SortedSet(this, from, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__subsetOf__Lscala_collection_SortedSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.compare__O__O__I = (function(k0, k1) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__compare__Lscala_collection_generic_Sorted__O__O__I(this, k0, k1)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.to__O__Lscala_collection_generic_Sorted = (function(to) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__to__Lscala_collection_generic_Sorted__O__Lscala_collection_generic_Sorted(this, to)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.hasAll__Lscala_collection_Iterator__Z = (function(j) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__hasAll__Lscala_collection_generic_Sorted__Lscala_collection_Iterator__Z(this, j)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.elems__AJ = (function() {
  return this.elems$5
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.elems$und$eq__AJ__V = (function(x$1) {
  this.elems$5 = x$1
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_mutable_BitSet = (function() {
  return ScalaJS.modules.scala_collection_mutable_BitSet().empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.nwords__I = (function() {
  return this.elems__AJ().underlying.length
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.word__I__J = (function(idx) {
  if ((idx < this.nwords__I())) {
    return this.elems__AJ().underlying[idx]
  } else {
    return ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(0, 0, 0)
  }
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.updateWord__p5__I__J__V = (function(idx, w) {
  if ((idx >= this.nwords__I())) {
    var newlen = this.nwords__I();
    while ((idx >= newlen)) {
      newlen = (newlen * 2)
    };
    var elems1 = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [newlen]);
    ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__AJ(), 0, elems1, 0, this.nwords__I());
    this.elems$und$eq__AJ__V(elems1)
  };
  this.elems__AJ().underlying[idx] = w
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.fromBitMaskNoCopy__AJ__Lscala_collection_mutable_BitSet = (function(words) {
  return new ScalaJS.c.scala_collection_mutable_BitSet().init___AJ(words)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.add__I__Z = (function(elem) {
  ScalaJS.modules.scala_Predef().require__Z__V((elem >= 0));
  if (this.contains__I__Z(elem)) {
    return false
  } else {
    var idx = (elem >> ScalaJS.modules.scala_collection_BitSetLike().LogWL__I());
    this.updateWord__p5__I__J__V(idx, this.word__I__J(idx).$$bar__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(elem))));
    return true
  }
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.remove__I__Z = (function(elem) {
  ScalaJS.modules.scala_Predef().require__Z__V((elem >= 0));
  if (this.contains__I__Z(elem)) {
    var idx = (elem >> ScalaJS.modules.scala_collection_BitSetLike().LogWL__I());
    this.updateWord__p5__I__J__V(idx, this.word__I__J(idx).$$amp__Lscala_scalajs_runtime_Long__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().apply__I__I__I__Lscala_scalajs_runtime_Long(1, 0, 0).$$less$less__I__Lscala_scalajs_runtime_Long(ScalaJS.modules.scala_scalajs_runtime_Long().fromInt__I__Lscala_scalajs_runtime_Long(elem)).unary$und$tilde__Lscala_scalajs_runtime_Long()));
    return true
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus$eq__I__Lscala_collection_mutable_BitSet = (function(elem) {
  this.add__I__Z(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus$eq__I__Lscala_collection_mutable_BitSet = (function(elem) {
  this.remove__I__Z(elem);
  return this
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.clear__V = (function() {
  this.elems$und$eq__AJ__V(ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [this.elems__AJ().underlying.length]))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toImmutable__Lscala_collection_immutable_BitSet = (function() {
  return ScalaJS.modules.scala_collection_immutable_BitSet().fromBitMaskNoCopy__AJ__Lscala_collection_immutable_BitSet(this.elems__AJ())
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.clone__Lscala_collection_mutable_BitSet = (function() {
  var elems1 = ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [this.elems__AJ().underlying.length]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.elems__AJ(), 0, elems1, 0, this.elems__AJ().underlying.length);
  return new ScalaJS.c.scala_collection_mutable_BitSet().init___AJ(elems1)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.repr__Lscala_collection_generic_Sorted = (function() {
  return ScalaJS.as.scala_collection_generic_Sorted(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(xs)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Set(elems)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Set(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_mutable_Set(elem)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_mutable_Set()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.range__O__O__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.until__O__Lscala_collection_generic_Sorted = (function(until) {
  return this.until__O__Lscala_collection_SortedSet(until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.from__O__Lscala_collection_generic_Sorted = (function(from) {
  return this.from__O__Lscala_collection_SortedSet(from)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.contains__O__Z = (function(elem) {
  return this.contains__I__Z(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike(from, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet = (function(from, until) {
  return ScalaJS.as.scala_collection_SortedSet(this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike(from, until))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.clone__Lscala_collection_mutable_Set = (function() {
  return this.clone__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus$eq__O__Lscala_collection_generic_Shrinkable = (function(elem) {
  return this.$$minus$eq__I__Lscala_collection_mutable_BitSet(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$minus$eq__I__Lscala_collection_mutable_BitSet(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__I__Lscala_collection_mutable_BitSet(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__I__Lscala_collection_mutable_BitSet(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus$eq__O__Lscala_collection_mutable_SetLike = (function(elem) {
  return this.$$plus$eq__I__Lscala_collection_mutable_BitSet(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.remove__O__Z = (function(elem) {
  return this.remove__I__Z(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.add__O__Z = (function(elem) {
  return this.add__I__Z(ScalaJS.uI(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.fromBitMaskNoCopy__AJ__Lscala_collection_BitSetLike = (function(elems) {
  return this.fromBitMaskNoCopy__AJ__Lscala_collection_mutable_BitSet(elems)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_BitSetLike = (function() {
  return this.empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_SortedSet = (function() {
  return this.empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_mutable_SortedSet = (function() {
  return this.empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.empty__Lscala_collection_BitSet = (function() {
  return this.empty__Lscala_collection_mutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.init___AJ = (function(elems) {
  this.elems$5 = elems;
  ScalaJS.c.scala_collection_mutable_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_generic_Sorted$class__$init$__Lscala_collection_generic_Sorted__V(this);
  ScalaJS.impls.scala_collection_SortedSetLike$class__$init$__Lscala_collection_SortedSetLike__V(this);
  ScalaJS.impls.scala_collection_SortedSet$class__$init$__Lscala_collection_SortedSet__V(this);
  ScalaJS.impls.scala_collection_mutable_SortedSet$class__$init$__Lscala_collection_mutable_SortedSet__V(this);
  ScalaJS.impls.scala_collection_BitSetLike$class__$init$__Lscala_collection_BitSetLike__V(this);
  ScalaJS.impls.scala_collection_BitSet$class__$init$__Lscala_collection_BitSet__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.init___I = (function(initSize) {
  ScalaJS.c.scala_collection_mutable_BitSet.prototype.init___AJ.call(this, ScalaJS.newArrayObject(ScalaJS.data.scala_Long.getArrayOf(), [ScalaJS.modules.scala_runtime_RichInt().max$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(((initSize + 63) >> 6)), 1)]));
  return this
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_BitSet.prototype.init___I.call(this, 0);
  return this
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.hasAll__Lscala_collection_Iterator__ = (function(j) {
  return ScalaJS.bZ(this.hasAll__Lscala_collection_Iterator__Z(j))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.to__O__ = (function(to) {
  return this.to__O__Lscala_collection_generic_Sorted(to)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.compare__O__O__ = (function(k0, k1) {
  return ScalaJS.bI(this.compare__O__O__I(k0, k1))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.range__O__O__ = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.until__O__ = (function(until$2) {
  return this.until__O__Lscala_collection_SortedSet(until$2)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.from__O__ = (function(from$2) {
  return this.from__O__Lscala_collection_SortedSet(from$2)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.lastKey__ = (function() {
  return ScalaJS.bI(this.lastKey__O())
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.firstKey__ = (function() {
  return ScalaJS.bI(this.firstKey__O())
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.keySet__ = (function() {
  return this.keySet__Lscala_collection_SortedSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z(that))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.subsetOf__Lscala_collection_BitSet__ = (function(other) {
  return ScalaJS.bZ(this.subsetOf__Lscala_collection_BitSet__Z(other))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.contains__I__ = (function(elem) {
  return ScalaJS.bZ(this.contains__I__Z(elem))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$up__Lscala_collection_BitSet__ = (function(other$2) {
  return this.$$up__Lscala_collection_BitSet__Lscala_collection_BitSetLike(other$2)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$amp$tilde__Lscala_collection_BitSet__ = (function(other$3) {
  return this.$$amp$tilde__Lscala_collection_BitSet__Lscala_collection_BitSetLike(other$3)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$amp__Lscala_collection_BitSet__ = (function(other$4) {
  return this.$$amp__Lscala_collection_BitSet__Lscala_collection_BitSetLike(other$4)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$bar__Lscala_collection_BitSet__ = (function(other$5) {
  return this.$$bar__Lscala_collection_BitSet__Lscala_collection_BitSetLike(other$5)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__ = (function(from$3, until$3) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike(from$3, until$3)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.ordering__ = (function() {
  return this.ordering__Lscala_math_Ordering()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toBitMask__ = (function() {
  return this.toBitMask__AJ()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.toImmutable__ = (function() {
  return this.toImmutable__Lscala_collection_immutable_BitSet()
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$minus$eq__I__ = (function(elem$2) {
  return this.$$minus$eq__I__Lscala_collection_mutable_BitSet(elem$2)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$$plus$eq__I__ = (function(elem$3) {
  return this.$$plus$eq__I__Lscala_collection_mutable_BitSet(elem$3)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.remove__I__ = (function(elem$4) {
  return ScalaJS.bZ(this.remove__I__Z(elem$4))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.add__I__ = (function(elem$5) {
  return ScalaJS.bZ(this.add__I__Z(elem$5))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.fromBitMaskNoCopy__AJ__ = (function(words) {
  return this.fromBitMaskNoCopy__AJ__Lscala_collection_mutable_BitSet(words)
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.word__I__ = (function(idx) {
  return ScalaJS.bJ(this.word__I__J(idx))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.nwords__ = (function() {
  return ScalaJS.bI(this.nwords__I())
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.elems$und$eq__AJ__ = (function(x$1) {
  return ScalaJS.bV(this.elems$und$eq__AJ__V(x$1))
});
ScalaJS.c.scala_collection_mutable_BitSet.prototype.elems__ = (function() {
  return this.elems__AJ()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_BitSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_BitSet.prototype = ScalaJS.c.scala_collection_mutable_BitSet.prototype;
ScalaJS.is.scala_collection_mutable_BitSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_BitSet)))
});
ScalaJS.as.scala_collection_mutable_BitSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_BitSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.BitSet")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_BitSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_BitSet)))
});
ScalaJS.asArrayOf.scala_collection_mutable_BitSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_BitSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.BitSet;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_BitSet = new ScalaJS.ClassTypeData({
  scala_collection_mutable_BitSet: 0
}, false, "scala.collection.mutable.BitSet", ScalaJS.data.scala_collection_mutable_AbstractSet, {
  scala_collection_mutable_BitSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_BitSet: 1,
  scala_collection_BitSetLike: 1,
  scala_collection_mutable_SortedSet: 1,
  scala_collection_SortedSet: 1,
  scala_collection_SortedSetLike: 1,
  scala_collection_generic_Sorted: 1,
  scala_collection_mutable_AbstractSet: 1,
  scala_collection_mutable_Set: 1,
  scala_collection_mutable_SetLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_script_Scriptable: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_mutable_AbstractIterable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_BitSet.prototype.$classData = ScalaJS.data.scala_collection_mutable_BitSet;
//@ sourceMappingURL=BitSet.js.map
