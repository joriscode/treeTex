/** @constructor */
ScalaJS.c.scala_collection_AbstractSet = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.call(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype = new ScalaJS.inheritable.scala_collection_AbstractIterable();
ScalaJS.c.scala_collection_AbstractSet.prototype.constructor = ScalaJS.c.scala_collection_AbstractSet;
ScalaJS.c.scala_collection_AbstractSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_Set$class__companion__Lscala_collection_Set__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.seq__Lscala_collection_Set = (function() {
  return ScalaJS.impls.scala_collection_Set$class__seq__Lscala_collection_Set__Lscala_collection_Set(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__map__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__newBuilder__Lscala_collection_SetLike__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__parCombiner__Lscala_collection_SetLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__toSeq__Lscala_collection_SetLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__toBuffer__Lscala_collection_SetLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_SetLike$class__map__Lscala_collection_SetLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_SetLike$class__$plus__Lscala_collection_SetLike__O__O__Lscala_collection_Seq__Lscala_collection_Set(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return ScalaJS.impls.scala_collection_SetLike$class__$plus$plus__Lscala_collection_SetLike__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this, elems)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__isEmpty__Lscala_collection_SetLike__Z(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.union__Lscala_collection_GenSet__Lscala_collection_Set = (function(that) {
  return ScalaJS.impls.scala_collection_SetLike$class__union__Lscala_collection_SetLike__Lscala_collection_GenSet__Lscala_collection_Set(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.diff__Lscala_collection_GenSet__Lscala_collection_Set = (function(that) {
  return ScalaJS.impls.scala_collection_SetLike$class__diff__Lscala_collection_SetLike__Lscala_collection_GenSet__Lscala_collection_Set(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.subsets__I__Lscala_collection_Iterator = (function(len) {
  return ScalaJS.impls.scala_collection_SetLike$class__subsets__Lscala_collection_SetLike__I__Lscala_collection_Iterator(this, len)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.subsets__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__subsets__Lscala_collection_SetLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.stringPrefix__T = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__stringPrefix__Lscala_collection_SetLike__T(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__toString__Lscala_collection_SetLike__T(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus__Lscala_collection_generic_Subtractable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus$minus__Lscala_collection_generic_Subtractable__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(this, xs)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericSetTemplate$class__empty__Lscala_collection_generic_GenericSetTemplate__Lscala_collection_GenSet(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__apply__Lscala_collection_GenSetLike__O__Z(this, elem)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.intersect__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__intersect__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$amp__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__$amp__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$bar__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__$bar__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$amp$tilde__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__$amp$tilde__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__subsetOf__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__equals__Lscala_collection_GenSetLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_GenSetLike$class__hashCode__Lscala_collection_GenSetLike__I(this)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_AbstractSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.empty__Lscala_collection_Set = (function() {
  return ScalaJS.as.scala_collection_Set(this.empty__Lscala_collection_GenSet())
});
ScalaJS.c.scala_collection_AbstractSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_Set()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_AbstractIterable.prototype.init___.call(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  ScalaJS.impls.scala_collection_GenSetLike$class__$init$__Lscala_collection_GenSetLike__V(this);
  ScalaJS.impls.scala_collection_generic_GenericSetTemplate$class__$init$__Lscala_collection_generic_GenericSetTemplate__V(this);
  ScalaJS.impls.scala_collection_GenSet$class__$init$__Lscala_collection_GenSet__V(this);
  ScalaJS.impls.scala_collection_generic_Subtractable$class__$init$__Lscala_collection_generic_Subtractable__V(this);
  ScalaJS.impls.scala_collection_SetLike$class__$init$__Lscala_collection_SetLike__V(this);
  ScalaJS.impls.scala_collection_Set$class__$init$__Lscala_collection_Set__V(this);
  return this
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.andThen__Lscala_Function1__ = (function(g$25) {
  return this.andThen__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$49) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.compose__Lscala_Function1__ = (function(g$50) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$50)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.subsetOf__Lscala_collection_GenSet__ = (function(that) {
  return ScalaJS.bZ(this.subsetOf__Lscala_collection_GenSet__Z(that))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$amp$tilde__Lscala_collection_GenSet__ = (function(that$2) {
  return this.$$amp$tilde__Lscala_collection_GenSet__O(that$2)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$bar__Lscala_collection_GenSet__ = (function(that$3) {
  return this.$$bar__Lscala_collection_GenSet__O(that$3)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$amp__Lscala_collection_GenSet__ = (function(that$4) {
  return this.$$amp__Lscala_collection_GenSet__O(that$4)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.intersect__Lscala_collection_GenSet__ = (function(that$5) {
  return this.intersect__Lscala_collection_GenSet__O(that$5)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.apply__O__ = (function(elem) {
  return ScalaJS.bZ(this.apply__O__Z(elem))
});
ScalaJS.c.scala_collection_AbstractSet.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_GenSet()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__ = (function(xs) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(xs)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$minus__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.subsets__ = (function() {
  return this.subsets__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_AbstractSet.prototype.subsets__I__ = (function(len) {
  return this.subsets__I__Lscala_collection_Iterator(len)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.diff__Lscala_collection_GenSet__ = (function(that$6) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that$6)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.union__Lscala_collection_GenSet__ = (function(that$7) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that$7)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__ = (function(elems$2) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(elems$2)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$plus__O__O__Lscala_collection_Seq__ = (function(elem1$2, elem2$2, elems$3) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set(elem1$2, elem2$2, elems$3)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f, bf) {
  return this.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f, bf)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$minus__O__ = (function(elem$2) {
  return this.$$minus__O__Lscala_collection_Set(elem$2)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.$$plus__O__ = (function(elem$3) {
  return this.$$plus__O__Lscala_collection_Set(elem$3)
});
ScalaJS.c.scala_collection_AbstractSet.prototype.contains__O__ = (function(elem$4) {
  return ScalaJS.bZ(this.contains__O__Z(elem$4))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_AbstractSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_AbstractSet.prototype = ScalaJS.c.scala_collection_AbstractSet.prototype;
ScalaJS.is.scala_collection_AbstractSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_AbstractSet)))
});
ScalaJS.as.scala_collection_AbstractSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_AbstractSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.AbstractSet")
  }
});
ScalaJS.isArrayOf.scala_collection_AbstractSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_AbstractSet)))
});
ScalaJS.asArrayOf.scala_collection_AbstractSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_AbstractSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.AbstractSet;", depth)
  }
});
ScalaJS.data.scala_collection_AbstractSet = new ScalaJS.ClassTypeData({
  scala_collection_AbstractSet: 0
}, false, "scala.collection.AbstractSet", ScalaJS.data.scala_collection_AbstractIterable, {
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
ScalaJS.c.scala_collection_AbstractSet.prototype.$classData = ScalaJS.data.scala_collection_AbstractSet;
//@ sourceMappingURL=AbstractSet.js.map
