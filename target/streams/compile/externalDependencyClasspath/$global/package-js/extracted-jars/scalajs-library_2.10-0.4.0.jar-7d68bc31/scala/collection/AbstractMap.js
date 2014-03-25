/** @constructor */
ScalaJS.c.scala_collection_AbstractMap = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_AbstractMap.prototype.constructor = ScalaJS.c.scala_collection_AbstractMap;
ScalaJS.c.scala_collection_AbstractMap.prototype.empty__Lscala_collection_Map = (function() {
  return ScalaJS.impls.scala_collection_Map$class__empty__Lscala_collection_Map__Lscala_collection_Map(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.seq__Lscala_collection_Map = (function() {
  return ScalaJS.impls.scala_collection_Map$class__seq__Lscala_collection_Map__Lscala_collection_Map(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__newBuilder__Lscala_collection_MapLike__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__isEmpty__Lscala_collection_MapLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.getOrElse__O__Lscala_Function0__O = (function(key, default$2) {
  return ScalaJS.impls.scala_collection_MapLike$class__getOrElse__Lscala_collection_MapLike__O__Lscala_Function0__O(this, key, default$2)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply__O__O = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__apply__Lscala_collection_MapLike__O__O(this, key)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.contains__O__Z = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__contains__Lscala_collection_MapLike__O__Z(this, key)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.isDefinedAt__O__Z = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__isDefinedAt__Lscala_collection_MapLike__O__Z(this, key)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keySet__Lscala_collection_Set = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__keySet__Lscala_collection_MapLike__Lscala_collection_Set(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keysIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__keysIterator__Lscala_collection_MapLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keys__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__keys__Lscala_collection_MapLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.values__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__values__Lscala_collection_MapLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.valuesIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__valuesIterator__Lscala_collection_MapLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$default__O__O = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__default__Lscala_collection_MapLike__O__O(this, key)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return ScalaJS.impls.scala_collection_MapLike$class__filterKeys__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map(this, p)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return ScalaJS.impls.scala_collection_MapLike$class__mapValues__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map(this, f)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return ScalaJS.impls.scala_collection_MapLike$class__updated__Lscala_collection_MapLike__O__O__Lscala_collection_Map(this, key, value)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return ScalaJS.impls.scala_collection_MapLike$class__$plus__Lscala_collection_MapLike__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map(this, kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return ScalaJS.impls.scala_collection_MapLike$class__$plus$plus__Lscala_collection_MapLike__Lscala_collection_GenTraversableOnce__Lscala_collection_Map(this, xs)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.filterNot__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return ScalaJS.impls.scala_collection_MapLike$class__filterNot__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map(this, p)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__toSeq__Lscala_collection_MapLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__toBuffer__Lscala_collection_MapLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__parCombiner__Lscala_collection_MapLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_MapLike$class__addString__Lscala_collection_MapLike__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.stringPrefix__T = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__stringPrefix__Lscala_collection_MapLike__T(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__toString__Lscala_collection_MapLike__T(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus__Lscala_collection_generic_Subtractable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus$minus__Lscala_collection_generic_Subtractable__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(this, xs)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.orElse__Lscala_PartialFunction__Lscala_PartialFunction = (function(that) {
  return ScalaJS.impls.scala_PartialFunction$class__orElse__Lscala_PartialFunction__Lscala_PartialFunction__Lscala_PartialFunction(this, that)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen__Lscala_Function1__Lscala_PartialFunction = (function(k) {
  return ScalaJS.impls.scala_PartialFunction$class__andThen__Lscala_PartialFunction__Lscala_Function1__Lscala_PartialFunction(this, k)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.lift__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_PartialFunction$class__lift__Lscala_PartialFunction__Lscala_Function1(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return ScalaJS.impls.scala_PartialFunction$class__applyOrElse__Lscala_PartialFunction__O__Lscala_Function1__O(this, x, default$2)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.runWith__Lscala_Function1__Lscala_Function1 = (function(action) {
  return ScalaJS.impls.scala_PartialFunction$class__runWith__Lscala_PartialFunction__Lscala_Function1__Lscala_Function1(this, action)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_GenMapLike$class__hashCode__Lscala_collection_GenMapLike__I(this)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenMapLike$class__equals__Lscala_collection_GenMapLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_AbstractMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_Map(key, value)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Map()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_Map()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_Map()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_GenMapLike$class__$init$__Lscala_collection_GenMapLike__V(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  ScalaJS.impls.scala_PartialFunction$class__$init$__Lscala_PartialFunction__V(this);
  ScalaJS.impls.scala_collection_generic_Subtractable$class__$init$__Lscala_collection_generic_Subtractable__V(this);
  ScalaJS.impls.scala_collection_MapLike$class__$init$__Lscala_collection_MapLike__V(this);
  ScalaJS.impls.scala_collection_Map$class__$init$__Lscala_collection_Map__V(this);
  return this
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$25) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.compose__Lscala_Function1__ = (function(g$49) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.runWith__Lscala_Function1__ = (function(action) {
  return this.runWith__Lscala_Function1__Lscala_Function1(action)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.applyOrElse__O__Lscala_Function1__ = (function(x, default$2) {
  return this.applyOrElse__O__Lscala_Function1__O(x, default$2)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.lift__ = (function() {
  return this.lift__Lscala_Function1()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.andThen__Lscala_Function1__ = (function(k) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(k)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.orElse__Lscala_PartialFunction__ = (function(that) {
  return this.orElse__Lscala_PartialFunction__Lscala_PartialFunction(that)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__ = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(xs)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$minus__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__ = (function(xs$2) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map(xs$2)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__ = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.updated__O__O__ = (function(key, value) {
  return this.updated__O__O__Lscala_collection_Map(key, value)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.mapValues__Lscala_Function1__ = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_Map(f)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.filterKeys__Lscala_Function1__ = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$default__O__ = (function(key$2) {
  return this.$default__O__O(key$2)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.valuesIterator__ = (function() {
  return this.valuesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.values__ = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keys__ = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keysIterator__ = (function() {
  return this.keysIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.keySet__ = (function() {
  return this.keySet__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.isDefinedAt__O__ = (function(key$3) {
  return ScalaJS.bZ(this.isDefinedAt__O__Z(key$3))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.contains__O__ = (function(key$4) {
  return ScalaJS.bZ(this.contains__O__Z(key$4))
});
ScalaJS.c.scala_collection_AbstractMap.prototype.apply__O__ = (function(key$5) {
  return this.apply__O__O(key$5)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.getOrElse__O__Lscala_Function0__ = (function(key$6, default$3) {
  return this.getOrElse__O__Lscala_Function0__O(key$6, default$3)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_Map()
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$minus__O__ = (function(key$7) {
  return this.$$minus__O__Lscala_collection_Map(key$7)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.$$plus__Lscala_Tuple2__ = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_Map(kv)
});
ScalaJS.c.scala_collection_AbstractMap.prototype.get__O__ = (function(key$8) {
  return this.get__O__Lscala_Option(key$8)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_AbstractMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_AbstractMap.prototype = ScalaJS.c.scala_collection_AbstractMap.prototype;
ScalaJS.is.scala_collection_AbstractMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_AbstractMap)))
});
ScalaJS.as.scala_collection_AbstractMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_AbstractMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.AbstractMap")
  }
});
ScalaJS.isArrayOf.scala_collection_AbstractMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_AbstractMap)))
});
ScalaJS.asArrayOf.scala_collection_AbstractMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_AbstractMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.AbstractMap;", depth)
  }
});
ScalaJS.data.scala_collection_AbstractMap = new ScalaJS.ClassTypeData({
  scala_collection_AbstractMap: 0
}, false, "scala.collection.AbstractMap", ScalaJS.data.scala_collection_AbstractIterable, {
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
ScalaJS.c.scala_collection_AbstractMap.prototype.$classData = ScalaJS.data.scala_collection_AbstractMap;
//@ sourceMappingURL=AbstractMap.js.map
