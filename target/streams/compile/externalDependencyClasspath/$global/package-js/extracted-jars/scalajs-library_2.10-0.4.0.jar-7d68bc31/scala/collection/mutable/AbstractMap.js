/** @constructor */
ScalaJS.c.scala_collection_mutable_AbstractMap = (function() {
  ScalaJS.c.scala_collection_AbstractMap.call(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype = new ScalaJS.inheritable.scala_collection_AbstractMap();
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.constructor = ScalaJS.c.scala_collection_mutable_AbstractMap;
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.empty__Lscala_collection_mutable_Map = (function() {
  return ScalaJS.impls.scala_collection_mutable_Map$class__empty__Lscala_collection_mutable_Map__Lscala_collection_mutable_Map(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_mutable_Map = (function() {
  return ScalaJS.impls.scala_collection_mutable_Map$class__seq__Lscala_collection_mutable_Map__Lscala_collection_mutable_Map(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.withDefault__Lscala_Function1__Lscala_collection_mutable_Map = (function(d) {
  return ScalaJS.impls.scala_collection_mutable_Map$class__withDefault__Lscala_collection_mutable_Map__Lscala_Function1__Lscala_collection_mutable_Map(this, d)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.withDefaultValue__O__Lscala_collection_mutable_Map = (function(d) {
  return ScalaJS.impls.scala_collection_mutable_Map$class__withDefaultValue__Lscala_collection_mutable_Map__O__Lscala_collection_mutable_Map(this, d)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__newBuilder__Lscala_collection_mutable_MapLike__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__parCombiner__Lscala_collection_mutable_MapLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.put__O__O__Lscala_Option = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__put__Lscala_collection_mutable_MapLike__O__O__Lscala_Option(this, key, value)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.update__O__O__V = (function(key, value) {
  ScalaJS.impls.scala_collection_mutable_MapLike$class__update__Lscala_collection_mutable_MapLike__O__O__V(this, key, value)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.updated__O__O__Lscala_collection_mutable_Map = (function(key, value) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__updated__Lscala_collection_mutable_MapLike__O__O__Lscala_collection_mutable_Map(this, key, value)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map = (function(kv) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__$plus__Lscala_collection_mutable_MapLike__Lscala_Tuple2__Lscala_collection_mutable_Map(this, kv)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__$plus__Lscala_collection_mutable_MapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map = (function(xs) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__$plus$plus__Lscala_collection_mutable_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(this, xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.remove__O__Lscala_Option = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__remove__Lscala_collection_mutable_MapLike__O__Lscala_Option(this, key)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus__O__Lscala_collection_mutable_Map = (function(key) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__$minus__Lscala_collection_mutable_MapLike__O__Lscala_collection_mutable_Map(this, key)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.clear__V = (function() {
  ScalaJS.impls.scala_collection_mutable_MapLike$class__clear__Lscala_collection_mutable_MapLike__V(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.getOrElseUpdate__O__Lscala_Function0__O = (function(key, op) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__getOrElseUpdate__Lscala_collection_mutable_MapLike__O__Lscala_Function0__O(this, key, op)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.transform__Lscala_Function2__Lscala_collection_mutable_MapLike = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__transform__Lscala_collection_mutable_MapLike__Lscala_Function2__Lscala_collection_mutable_MapLike(this, f)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.retain__Lscala_Function2__Lscala_collection_mutable_MapLike = (function(p) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__retain__Lscala_collection_mutable_MapLike__Lscala_Function2__Lscala_collection_mutable_MapLike(this, p)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.clone__Lscala_collection_mutable_Map = (function() {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__clone__Lscala_collection_mutable_MapLike__Lscala_collection_mutable_Map(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.result__Lscala_collection_mutable_Map = (function() {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__result__Lscala_collection_mutable_MapLike__Lscala_collection_mutable_Map(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__$minus__Lscala_collection_mutable_MapLike__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map = (function(xs) {
  return ScalaJS.impls.scala_collection_mutable_MapLike$class__$minus$minus__Lscala_collection_mutable_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(this, xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.scala$collection$mutable$Cloneable$$super$clone__O = (function() {
  return ScalaJS.c.java_lang_Object.prototype.clone__O.call(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Shrinkable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Shrinkable$class__$minus$eq__Lscala_collection_generic_Shrinkable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Shrinkable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Shrinkable$class__$minus$minus$eq__Lscala_collection_generic_Shrinkable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(this, xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_mutable_Iterable$class__companion__Lscala_collection_mutable_Iterable__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_mutable_Map(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.result__O = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_mutable_Map(elem)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_mutable_Map(key)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_mutable_Map(xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_mutable_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_mutable_Map(kv)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_mutable_Map(key, value)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractMap.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_mutable_Traversable$class__$init$__Lscala_collection_mutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_mutable_Iterable$class__$init$__Lscala_collection_mutable_Iterable__V(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  ScalaJS.impls.scala_collection_generic_Shrinkable$class__$init$__Lscala_collection_generic_Shrinkable__V(this);
  ScalaJS.impls.scala_collection_mutable_Cloneable$class__$init$__Lscala_collection_mutable_Cloneable__V(this);
  ScalaJS.impls.scala_collection_mutable_MapLike$class__$init$__Lscala_collection_mutable_MapLike__V(this);
  ScalaJS.impls.scala_collection_mutable_Map$class__$init$__Lscala_collection_mutable_Map__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$minus$eq__Lscala_collection_TraversableOnce__ = (function(xs$2) {
  return this.$$minus$minus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Shrinkable(xs$2)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$eq__O__O__Lscala_collection_Seq__ = (function(elem1$2, elem2$2, elems$2) {
  return this.$$minus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Shrinkable(elem1$2, elem2$2, elems$2)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.scala$collection$mutable$Cloneable$$super$clone__ = (function() {
  return this.scala$collection$mutable$Cloneable$$super$clone__O()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.result__ = (function() {
  return this.result__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.retain__Lscala_Function2__ = (function(p) {
  return this.retain__Lscala_Function2__Lscala_collection_mutable_MapLike(p)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.transform__Lscala_Function2__ = (function(f$2) {
  return this.transform__Lscala_Function2__Lscala_collection_mutable_MapLike(f$2)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.getOrElseUpdate__O__Lscala_Function0__ = (function(key, op) {
  return this.getOrElseUpdate__O__Lscala_Function0__O(key, op)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.remove__O__ = (function(key$2) {
  return this.remove__O__Lscala_Option(key$2)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.update__O__O__ = (function(key$3, value) {
  return ScalaJS.bV(this.update__O__O__V(key$3, value))
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.put__O__O__ = (function(key$4, value$2) {
  return this.put__O__O__Lscala_Option(key$4, value$2)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.withDefaultValue__O__ = (function(d) {
  return this.withDefaultValue__O__Lscala_collection_mutable_Map(d)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.withDefault__Lscala_Function1__ = (function(d$2) {
  return this.withDefault__Lscala_Function1__Lscala_collection_mutable_Map(d$2)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$minus$eq__O__ = (function(key$5) {
  return this.$$minus$eq__O__Lscala_collection_mutable_MapLike(key$5)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$eq__Lscala_Tuple2__ = (function(kv) {
  return this.$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike(kv)
});
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_Builder(elem)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_AbstractMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_AbstractMap.prototype = ScalaJS.c.scala_collection_mutable_AbstractMap.prototype;
ScalaJS.is.scala_collection_mutable_AbstractMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_AbstractMap)))
});
ScalaJS.as.scala_collection_mutable_AbstractMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_AbstractMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.AbstractMap")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_AbstractMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_AbstractMap)))
});
ScalaJS.asArrayOf.scala_collection_mutable_AbstractMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_AbstractMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.AbstractMap;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_AbstractMap = new ScalaJS.ClassTypeData({
  scala_collection_mutable_AbstractMap: 0
}, false, "scala.collection.mutable.AbstractMap", ScalaJS.data.scala_collection_AbstractMap, {
  scala_collection_mutable_AbstractMap: 1,
  scala_collection_mutable_Map: 1,
  scala_collection_mutable_MapLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_generic_Shrinkable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
  scala_collection_AbstractMap: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
ScalaJS.c.scala_collection_mutable_AbstractMap.prototype.$classData = ScalaJS.data.scala_collection_mutable_AbstractMap;
//@ sourceMappingURL=AbstractMap.js.map
