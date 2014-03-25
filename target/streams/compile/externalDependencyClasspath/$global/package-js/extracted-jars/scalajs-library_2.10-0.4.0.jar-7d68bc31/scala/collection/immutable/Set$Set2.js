/** @constructor */
ScalaJS.c.scala_collection_immutable_Set$Set2 = (function() {
  ScalaJS.c.scala_collection_AbstractSet.call(this);
  this.elem1$4 = null;
  this.elem2$4 = null
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype = new ScalaJS.inheritable.scala_collection_AbstractSet();
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.constructor = ScalaJS.c.scala_collection_immutable_Set$Set2;
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__companion__Lscala_collection_immutable_Set__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__toSet__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__seq__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__parCombiner__Lscala_collection_immutable_Set__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.size__I = (function() {
  return 2
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.contains__O__Z = (function(elem) {
  return (ScalaJS.anyEqEq(elem, this.elem1$4) || ScalaJS.anyEqEq(elem, this.elem2$4))
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$plus__O__Lscala_collection_immutable_Set = (function(elem) {
  if (this.contains__O__Z(elem)) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_Set$Set3().init___O__O__O(this.elem1$4, this.elem2$4, elem)
  }
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$minus__O__Lscala_collection_immutable_Set = (function(elem) {
  if (ScalaJS.anyEqEq(elem, this.elem1$4)) {
    return new ScalaJS.c.scala_collection_immutable_Set$Set1().init___O(this.elem2$4)
  } else {
    if (ScalaJS.anyEqEq(elem, this.elem2$4)) {
      return new ScalaJS.c.scala_collection_immutable_Set$Set1().init___O(this.elem1$4)
    } else {
      return this
    }
  }
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_Iterator().apply__Lscala_collection_Seq__Lscala_collection_Iterator(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.elem1$4, this.elem2$4])))
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.foreach__Lscala_Function1__V = (function(f) {
  f.apply__O__O(this.elem1$4);
  f.apply__O__O(this.elem2$4)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.empty__Lscala_collection_Set = (function() {
  return ScalaJS.as.scala_collection_Set(this.empty__Lscala_collection_GenSet())
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Set(elem)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Set(elem)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_Set(elem)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_Set(elem)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_Set(elem)
});
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.init___O__O = (function(elem1, elem2) {
  this.elem1$4 = elem1;
  this.elem2$4 = elem2;
  ScalaJS.c.scala_collection_AbstractSet.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Set$class__$init$__Lscala_collection_immutable_Set__V(this);
  return this
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_Set$Set2 = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_Set$Set2.prototype = ScalaJS.c.scala_collection_immutable_Set$Set2.prototype;
ScalaJS.is.scala_collection_immutable_Set$Set2 = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_Set$Set2)))
});
ScalaJS.as.scala_collection_immutable_Set$Set2 = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_Set$Set2(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.Set$Set2")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_Set$Set2 = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_Set$Set2)))
});
ScalaJS.asArrayOf.scala_collection_immutable_Set$Set2 = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_Set$Set2(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.Set$Set2;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_Set$Set2 = new ScalaJS.ClassTypeData({
  scala_collection_immutable_Set$Set2: 0
}, false, "scala.collection.immutable.Set$Set2", ScalaJS.data.scala_collection_AbstractSet, {
  scala_collection_immutable_Set$Set2: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
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
ScalaJS.c.scala_collection_immutable_Set$Set2.prototype.$classData = ScalaJS.data.scala_collection_immutable_Set$Set2;
//@ sourceMappingURL=Set$Set2.js.map
