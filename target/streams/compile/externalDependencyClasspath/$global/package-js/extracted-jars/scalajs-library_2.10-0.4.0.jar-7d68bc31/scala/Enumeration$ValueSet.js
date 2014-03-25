/** @constructor */
ScalaJS.c.scala_Enumeration$ValueSet = (function() {
  ScalaJS.c.scala_collection_AbstractSet.call(this);
  this.nnIds$4 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype = new ScalaJS.inheritable.scala_collection_AbstractSet();
ScalaJS.c.scala_Enumeration$ValueSet.prototype.constructor = ScalaJS.c.scala_Enumeration$ValueSet;
ScalaJS.c.scala_Enumeration$ValueSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__subsetOf__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.keySet__Lscala_collection_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__keySet__Lscala_collection_SortedSetLike__Lscala_collection_SortedSet(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.firstKey__O = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__firstKey__Lscala_collection_SortedSetLike__O(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.lastKey__O = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__lastKey__Lscala_collection_SortedSetLike__O(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.from__O__Lscala_collection_SortedSet = (function(from) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__from__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet(this, from)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.until__O__Lscala_collection_SortedSet = (function(until) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__until__Lscala_collection_SortedSetLike__O__Lscala_collection_SortedSet(this, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.range__O__O__Lscala_collection_SortedSet = (function(from, until) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__range__Lscala_collection_SortedSetLike__O__O__Lscala_collection_SortedSet(this, from, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__subsetOf__Lscala_collection_SortedSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.compare__O__O__I = (function(k0, k1) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__compare__Lscala_collection_generic_Sorted__O__O__I(this, k0, k1)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.to__O__Lscala_collection_generic_Sorted = (function(to) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__to__Lscala_collection_generic_Sorted__O__Lscala_collection_generic_Sorted(this, to)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.hasAll__Lscala_collection_Iterator__Z = (function(j) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__hasAll__Lscala_collection_generic_Sorted__Lscala_collection_Iterator__Z(this, j)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__companion__Lscala_collection_immutable_Set__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__toSet__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__seq__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__parCombiner__Lscala_collection_immutable_Set__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.ordering__Lscala_math_Ordering = (function() {
  return this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().ValueOrdering__Lscala_Enumeration$ValueOrdering$()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_Enumeration$ValueSet = (function(from, until) {
  return new ScalaJS.c.scala_Enumeration$ValueSet().init___Lscala_Enumeration__Lscala_collection_immutable_BitSet(this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration(), ScalaJS.as.scala_collection_immutable_BitSet(this.nnIds$4.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_BitSetLike(from.map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$2) {
      return ScalaJS.bI((x$2.id__I() - arg$outer.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().scala$Enumeration$$bottomId__I()))
    })
  })(this))), until.map__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x$3) {
      return ScalaJS.bI((x$3.id__I() - arg$outer.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().scala$Enumeration$$bottomId__I()))
    })
  })(this))))))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.empty__Lscala_Enumeration$ValueSet = (function() {
  return this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().ValueSet__Lscala_Enumeration$ValueSet$().empty__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.contains__Lscala_Enumeration$Value__Z = (function(v) {
  return this.nnIds$4.contains__I__Z((v.id__I() - this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().scala$Enumeration$$bottomId__I()))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$plus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet = (function(value) {
  return new ScalaJS.c.scala_Enumeration$ValueSet().init___Lscala_Enumeration__Lscala_collection_immutable_BitSet(this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration(), this.nnIds$4.$$plus__I__Lscala_collection_immutable_BitSet((value.id__I() - this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().scala$Enumeration$$bottomId__I())))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$minus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet = (function(value) {
  return new ScalaJS.c.scala_Enumeration$ValueSet().init___Lscala_Enumeration__Lscala_collection_immutable_BitSet(this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration(), this.nnIds$4.$$minus__I__Lscala_collection_immutable_BitSet((value.id__I() - this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().scala$Enumeration$$bottomId__I())))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return this.nnIds$4.iterator__Lscala_collection_Iterator().map__Lscala_Function1__Lscala_collection_Iterator(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(id) {
      id = ScalaJS.uI(id);
      return arg$outer.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().apply__I__Lscala_Enumeration$Value((id + arg$outer.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration().scala$Enumeration$$bottomId__I()))
    })
  })(this)))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.stringPrefix__T = (function() {
  return ScalaJS.modules.scala_runtime_StringAdd().$$plus$extension__O__T__T(ScalaJS.modules.scala_Predef().any2stringadd__O__O(this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration()), ".ValueSet")
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toBitMask__AJ = (function() {
  return this.nnIds$4.toBitMask__AJ()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.repr__Lscala_collection_generic_Sorted = (function() {
  return ScalaJS.as.scala_collection_generic_Sorted(this.repr__O())
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.range__O__O__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.until__O__Lscala_collection_generic_Sorted = (function(until) {
  return this.until__O__Lscala_collection_SortedSet(until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.from__O__Lscala_collection_generic_Sorted = (function(from) {
  return this.from__O__Lscala_collection_SortedSet(from)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(ScalaJS.as.scala_Enumeration$Value(elem))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(ScalaJS.as.scala_Enumeration$Value(elem))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(ScalaJS.as.scala_Enumeration$Value(elem))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(ScalaJS.as.scala_Enumeration$Value(elem))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(ScalaJS.as.scala_Enumeration$Value(elem))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.contains__O__Z = (function(elem) {
  return this.contains__Lscala_Enumeration$Value__Z(ScalaJS.as.scala_Enumeration$Value(elem))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.empty__Lscala_collection_SortedSet = (function() {
  return this.empty__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.empty__Lscala_collection_immutable_SortedSet = (function() {
  return this.empty__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_Enumeration$ValueSet(from, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_Enumeration$ValueSet(from, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.init___Lscala_Enumeration__Lscala_collection_immutable_BitSet = (function($$outer, nnIds) {
  this.nnIds$4 = nnIds;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_collection_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Set$class__$init$__Lscala_collection_immutable_Set__V(this);
  ScalaJS.impls.scala_collection_generic_Sorted$class__$init$__Lscala_collection_generic_Sorted__V(this);
  ScalaJS.impls.scala_collection_SortedSetLike$class__$init$__Lscala_collection_SortedSetLike__V(this);
  ScalaJS.impls.scala_collection_SortedSet$class__$init$__Lscala_collection_SortedSet__V(this);
  ScalaJS.impls.scala_collection_immutable_SortedSet$class__$init$__Lscala_collection_immutable_SortedSet__V(this);
  return this
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.hasAll__Lscala_collection_Iterator__ = (function(j) {
  return ScalaJS.bZ(this.hasAll__Lscala_collection_Iterator__Z(j))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.to__O__ = (function(to) {
  return this.to__O__Lscala_collection_generic_Sorted(to)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.compare__O__O__ = (function(k0, k1) {
  return ScalaJS.bI(this.compare__O__O__I(k0, k1))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.range__O__O__ = (function(from, until) {
  return this.range__O__O__Lscala_collection_SortedSet(from, until)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.until__O__ = (function(until$2) {
  return this.until__O__Lscala_collection_SortedSet(until$2)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.from__O__ = (function(from$2) {
  return this.from__O__Lscala_collection_SortedSet(from$2)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.lastKey__ = (function() {
  return this.lastKey__O()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.firstKey__ = (function() {
  return this.firstKey__O()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.keySet__ = (function() {
  return this.keySet__Lscala_collection_SortedSet()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z(that))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.scala$Enumeration$ValueSet$$$outer__ = (function() {
  return this.scala$Enumeration$ValueSet$$$outer__Lscala_Enumeration()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.toBitMask__ = (function() {
  return this.toBitMask__AJ()
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$minus__Lscala_Enumeration$Value__ = (function(value) {
  return this.$$minus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(value)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$$plus__Lscala_Enumeration$Value__ = (function(value$2) {
  return this.$$plus__Lscala_Enumeration$Value__Lscala_Enumeration$ValueSet(value$2)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.contains__Lscala_Enumeration$Value__ = (function(v) {
  return ScalaJS.bZ(this.contains__Lscala_Enumeration$Value__Z(v))
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__ = (function(from$3, until$3) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_Enumeration$ValueSet(from$3, until$3)
});
ScalaJS.c.scala_Enumeration$ValueSet.prototype.ordering__ = (function() {
  return this.ordering__Lscala_math_Ordering()
});
/** @constructor */
ScalaJS.inheritable.scala_Enumeration$ValueSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Enumeration$ValueSet.prototype = ScalaJS.c.scala_Enumeration$ValueSet.prototype;
ScalaJS.is.scala_Enumeration$ValueSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Enumeration$ValueSet)))
});
ScalaJS.as.scala_Enumeration$ValueSet = (function(obj) {
  if ((ScalaJS.is.scala_Enumeration$ValueSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Enumeration$ValueSet")
  }
});
ScalaJS.isArrayOf.scala_Enumeration$ValueSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Enumeration$ValueSet)))
});
ScalaJS.asArrayOf.scala_Enumeration$ValueSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Enumeration$ValueSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Enumeration$ValueSet;", depth)
  }
});
ScalaJS.data.scala_Enumeration$ValueSet = new ScalaJS.ClassTypeData({
  scala_Enumeration$ValueSet: 0
}, false, "scala.Enumeration$ValueSet", ScalaJS.data.scala_collection_AbstractSet, {
  scala_Enumeration$ValueSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_SortedSet: 1,
  scala_collection_SortedSet: 1,
  scala_collection_SortedSetLike: 1,
  scala_collection_generic_Sorted: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
  scala_collection_AbstractSet: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
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
ScalaJS.c.scala_Enumeration$ValueSet.prototype.$classData = ScalaJS.data.scala_Enumeration$ValueSet;
//@ sourceMappingURL=Enumeration$ValueSet.js.map
