/** @constructor */
ScalaJS.c.scala_collection_immutable_TreeSet = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.tree$1 = null;
  this.ordering$1 = null
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.constructor = ScalaJS.c.scala_collection_immutable_TreeSet;
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__subsetOf__Lscala_collection_GenSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.keySet__Lscala_collection_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__keySet__Lscala_collection_SortedSetLike__Lscala_collection_SortedSet(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.subsetOf__Lscala_collection_GenSet__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SortedSetLike$class__subsetOf__Lscala_collection_SortedSetLike__Lscala_collection_GenSet__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compare__O__O__I = (function(k0, k1) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__compare__Lscala_collection_generic_Sorted__O__O__I(this, k0, k1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.hasAll__Lscala_collection_Iterator__Z = (function(j) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__hasAll__Lscala_collection_generic_Sorted__Lscala_collection_Iterator__Z(this, j)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__companion__Lscala_collection_immutable_Set__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__toSet__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__seq__Lscala_collection_immutable_Set__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_Set$class__parCombiner__Lscala_collection_immutable_Set__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__map__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__newBuilder__Lscala_collection_SetLike__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__toSeq__Lscala_collection_SetLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__toBuffer__Lscala_collection_SetLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_SetLike$class__map__Lscala_collection_SetLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_SetLike$class__$plus__Lscala_collection_SetLike__O__O__Lscala_collection_Seq__Lscala_collection_Set(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set = (function(elems) {
  return ScalaJS.impls.scala_collection_SetLike$class__$plus$plus__Lscala_collection_SetLike__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(this, elems)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__isEmpty__Lscala_collection_SetLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.union__Lscala_collection_GenSet__Lscala_collection_Set = (function(that) {
  return ScalaJS.impls.scala_collection_SetLike$class__union__Lscala_collection_SetLike__Lscala_collection_GenSet__Lscala_collection_Set(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.diff__Lscala_collection_GenSet__Lscala_collection_Set = (function(that) {
  return ScalaJS.impls.scala_collection_SetLike$class__diff__Lscala_collection_SetLike__Lscala_collection_GenSet__Lscala_collection_Set(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.subsets__I__Lscala_collection_Iterator = (function(len) {
  return ScalaJS.impls.scala_collection_SetLike$class__subsets__Lscala_collection_SetLike__I__Lscala_collection_Iterator(this, len)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.subsets__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__subsets__Lscala_collection_SetLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_SetLike$class__toString__Lscala_collection_SetLike__T(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus__Lscala_collection_generic_Subtractable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus$minus__Lscala_collection_generic_Subtractable__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(this, xs)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__apply__Lscala_collection_GenSetLike__O__Z(this, elem)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.intersect__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__intersect__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$amp__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__$amp__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$bar__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__$bar__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$amp$tilde__Lscala_collection_GenSet__O = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__$amp$tilde__Lscala_collection_GenSetLike__Lscala_collection_GenSet__O(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenSetLike$class__equals__Lscala_collection_GenSetLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_GenSetLike$class__hashCode__Lscala_collection_GenSetLike__I(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__thisCollection__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return ScalaJS.impls.scala_collection_IterableLike$class__toCollection__Lscala_collection_IterableLike__O__Lscala_collection_Iterable(this, repr)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__forall__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__exists__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__find__Lscala_collection_IterableLike__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__foldRight__Lscala_collection_IterableLike__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterable__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterator__Lscala_collection_IterableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.grouped__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__grouped__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliding__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliding__I__I__Lscala_collection_Iterator = (function(size, step) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__I__Lscala_collection_Iterator(this, size, step)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_IterableLike$class__copyToArray__Lscala_collection_IterableLike__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O = (function(that, thisElem, thatElem, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zipAll__Lscala_collection_IterableLike__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(this, that, thisElem, thatElem, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zipWithIndex__Lscala_collection_IterableLike__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toStream__Lscala_collection_IterableLike__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.canEqual__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__canEqual__Lscala_collection_IterableLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.view__Lscala_collection_IterableView = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__Lscala_collection_IterableView(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__I__I__Lscala_collection_IterableView(this, from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.genericBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__genericBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.unzip__Lscala_Function1__Lscala_Tuple2 = (function(asPair) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple2(this, asPair)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.unzip3__Lscala_Function1__Lscala_Tuple3 = (function(asTriple) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip3__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple3(this, asTriple)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.flatten__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__flatten__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.transpose__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__transpose__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.repr__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__repr__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.isTraversableAgain__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__isTraversableAgain__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__hasDefiniteSize__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__flatMap__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.filter__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__filter__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__filterNot__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function(pf, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__collect__Lscala_collection_TraversableLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(this, pf, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__partition__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.groupBy__Lscala_Function1__Lscala_collection_immutable_Map = (function(f) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__groupBy__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_immutable_Map(this, f)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scan__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, cbf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scanLeft__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scanRight__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliceWithKnownDelta__I__I__I__O = (function(from, until, delta) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownDelta__Lscala_collection_TraversableLike__I__I__I__O(this, from, until, delta)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliceWithKnownBound__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownBound__Lscala_collection_TraversableLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.tails__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tails__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.inits__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__inits__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toTraversable__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toTraversable__Lscala_collection_TraversableLike__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.to__Lscala_collection_generic_CanBuildFrom__O = (function(cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__to__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__O(this, cbf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__withFilter__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_FilterMonadic(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.par__Lscala_collection_Parallel = (function() {
  return ScalaJS.impls.scala_collection_Parallelizable$class__par__Lscala_collection_Parallelizable__Lscala_collection_Parallel(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reversed__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.collectFirst__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option(this, pf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduce__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.fold__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__O = (function(z, seqop, combop) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O(this, z, seqop, combop)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V(this, xs, start)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V(this, xs)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toMap__Lscala_collection_TraversableOnce__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T(this, sep)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T(this)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$div$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_GenTraversableOnce$class__$div$colon$bslash__Lscala_collection_GenTraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.ordering__Lscala_math_Ordering = (function() {
  return this.ordering$1
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.stringPrefix__T = (function() {
  return "TreeSet"
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.size__I = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().count__Lscala_collection_immutable_RedBlackTree$Tree__I(this.tree$1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.head__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().smallest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1).key__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.headOption__Lscala_Option = (function() {
  if (ScalaJS.modules.scala_collection_immutable_RedBlackTree().isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__Z(this.tree$1)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(this.head__O())
  }
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.last__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().greatest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1).key__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.lastOption__Lscala_Option = (function() {
  if (ScalaJS.modules.scala_collection_immutable_RedBlackTree().isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__Z(this.tree$1)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(this.last__O())
  }
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.tail__Lscala_collection_immutable_TreeSet = (function() {
  return new ScalaJS.c.scala_collection_immutable_TreeSet().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, this.firstKey__O(), this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.init__Lscala_collection_immutable_TreeSet = (function() {
  return new ScalaJS.c.scala_collection_immutable_TreeSet().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, this.lastKey__O(), this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.drop__I__Lscala_collection_immutable_TreeSet = (function(n) {
  if ((n <= 0)) {
    return this
  } else {
    if ((n >= this.size__I())) {
      return this.empty__Lscala_collection_immutable_TreeSet()
    } else {
      return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().drop__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, n, this.ordering__Lscala_math_Ordering()))
    }
  }
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.take__I__Lscala_collection_immutable_TreeSet = (function(n) {
  if ((n <= 0)) {
    return this.empty__Lscala_collection_immutable_TreeSet()
  } else {
    if ((n >= this.size__I())) {
      return this
    } else {
      return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().take__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, n, this.ordering__Lscala_math_Ordering()))
    }
  }
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.slice__I__I__Lscala_collection_immutable_TreeSet = (function(from, until) {
  if ((until <= from)) {
    return this.empty__Lscala_collection_immutable_TreeSet()
  } else {
    if ((from <= 0)) {
      return this.take__I__Lscala_collection_immutable_TreeSet(until)
    } else {
      if ((until >= this.size__I())) {
        return this.drop__I__Lscala_collection_immutable_TreeSet(from)
      } else {
        return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().slice__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, until, this.ordering__Lscala_math_Ordering()))
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.dropRight__I__Lscala_collection_immutable_TreeSet = (function(n) {
  return this.take__I__Lscala_collection_immutable_TreeSet((this.size__I() - n))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.takeRight__I__Lscala_collection_immutable_TreeSet = (function(n) {
  return this.drop__I__Lscala_collection_immutable_TreeSet((this.size__I() - n))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.take__I__Lscala_collection_immutable_TreeSet(n), this.drop__I__Lscala_collection_immutable_TreeSet(n))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.countWhile__p1__Lscala_Function1__I = (function(p) {
  var result = 0;
  var it = this.iterator__Lscala_collection_Iterator();
  while ((it.hasNext__Z() && ScalaJS.uZ(p.apply__O__O(it.next__O())))) {
    result = (result + 1)
  };
  return result
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.dropWhile__Lscala_Function1__Lscala_collection_immutable_TreeSet = (function(p) {
  return this.drop__I__Lscala_collection_immutable_TreeSet(this.countWhile__p1__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.takeWhile__Lscala_Function1__Lscala_collection_immutable_TreeSet = (function(p) {
  return this.take__I__Lscala_collection_immutable_TreeSet(this.countWhile__p1__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return this.splitAt__I__Lscala_Tuple2(this.countWhile__p1__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.isSmaller__O__O__Z = (function(x, y) {
  return (this.compare__O__O__I(x, y) < 0)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet = (function(t) {
  return new ScalaJS.c.scala_collection_immutable_TreeSet().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(t, this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.empty__Lscala_collection_immutable_TreeSet = (function() {
  return ScalaJS.modules.scala_collection_immutable_TreeSet().empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeSet(this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus__O__Lscala_collection_immutable_TreeSet = (function(elem) {
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, elem, ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit(), false, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.insert__O__Lscala_collection_immutable_TreeSet = (function(elem) {
  ScalaJS.modules.scala_Predef().assert__Z__V((!ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, elem, this.ordering__Lscala_math_Ordering())));
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, elem, ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit(), false, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__Lscala_collection_immutable_TreeSet = (function(elem) {
  if ((!ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, elem, this.ordering__Lscala_math_Ordering()))) {
    return this
  } else {
    return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, elem, this.ordering__Lscala_math_Ordering()))
  }
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, elem, this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().keysIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(this.tree$1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.modules.scala_collection_immutable_RedBlackTree().foreachKey__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V(this.tree$1, f)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeSet = (function(from, until) {
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().rangeImpl__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Option__Lscala_Option__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, until, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.range__O__O__Lscala_collection_immutable_TreeSet = (function(from, until) {
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().range__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, until, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.from__O__Lscala_collection_immutable_TreeSet = (function(from) {
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().from__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.to__O__Lscala_collection_immutable_TreeSet = (function(to) {
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().to__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, to, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.until__O__Lscala_collection_immutable_TreeSet = (function(until) {
  return this.newSet__p1__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_TreeSet(ScalaJS.modules.scala_collection_immutable_RedBlackTree().until__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, until, this.ordering__Lscala_math_Ordering()))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.firstKey__O = (function() {
  return this.head__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.lastKey__O = (function() {
  return this.last__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.repr__Lscala_collection_generic_Sorted = (function() {
  return ScalaJS.as.scala_collection_generic_Sorted(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bZ(this.apply__O__Z(v1))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.diff__Lscala_collection_GenSet__O = (function(that) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.union__Lscala_collection_GenSet__O = (function(that) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__Lscala_collection_Set = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.until__O__Lscala_collection_generic_Sorted = (function(until) {
  return this.until__O__Lscala_collection_immutable_TreeSet(until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.until__O__Lscala_collection_SortedSet = (function(until) {
  return this.until__O__Lscala_collection_immutable_TreeSet(until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.to__O__Lscala_collection_generic_Sorted = (function(to) {
  return this.to__O__Lscala_collection_immutable_TreeSet(to)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.from__O__Lscala_collection_generic_Sorted = (function(from) {
  return this.from__O__Lscala_collection_immutable_TreeSet(from)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.from__O__Lscala_collection_SortedSet = (function(from) {
  return this.from__O__Lscala_collection_immutable_TreeSet(from)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.range__O__O__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.range__O__O__Lscala_collection_immutable_TreeSet(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.range__O__O__Lscala_collection_SortedSet = (function(from, until) {
  return this.range__O__O__Lscala_collection_immutable_TreeSet(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeSet(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedSet = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeSet(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__O = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_TreeSet(elem)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_TreeSet(elem)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__Lscala_collection_Set = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_TreeSet(elem)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus__O__O = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_TreeSet(elem)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus__O__Lscala_collection_Set = (function(elem) {
  return this.$$plus__O__Lscala_collection_immutable_TreeSet(elem)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.empty__Lscala_collection_Set = (function() {
  return this.empty__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.empty__Lscala_collection_GenSet = (function() {
  return this.empty__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.empty__Lscala_collection_SortedSet = (function() {
  return this.empty__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.empty__Lscala_collection_immutable_SortedSet = (function() {
  return this.empty__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_TreeSet(p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_TreeSet(p)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__Lscala_collection_immutable_TreeSet(n)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_immutable_TreeSet(n)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_TreeSet(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_TreeSet(n)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_TreeSet(n)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.init__O = (function() {
  return this.init__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering = (function(tree, ordering) {
  this.tree$1 = tree;
  this.ordering$1 = ordering;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_GenTraversableOnce$class__$init$__Lscala_collection_GenTraversableOnce__V(this);
  ScalaJS.impls.scala_collection_TraversableOnce$class__$init$__Lscala_collection_TraversableOnce__V(this);
  ScalaJS.impls.scala_collection_Parallelizable$class__$init$__Lscala_collection_Parallelizable__V(this);
  ScalaJS.impls.scala_collection_TraversableLike$class__$init$__Lscala_collection_TraversableLike__V(this);
  ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__$init$__Lscala_collection_generic_GenericTraversableTemplate__V(this);
  ScalaJS.impls.scala_collection_GenTraversable$class__$init$__Lscala_collection_GenTraversable__V(this);
  ScalaJS.impls.scala_collection_Traversable$class__$init$__Lscala_collection_Traversable__V(this);
  ScalaJS.impls.scala_collection_immutable_Traversable$class__$init$__Lscala_collection_immutable_Traversable__V(this);
  ScalaJS.impls.scala_collection_GenIterable$class__$init$__Lscala_collection_GenIterable__V(this);
  ScalaJS.impls.scala_collection_IterableLike$class__$init$__Lscala_collection_IterableLike__V(this);
  ScalaJS.impls.scala_collection_Iterable$class__$init$__Lscala_collection_Iterable__V(this);
  ScalaJS.impls.scala_collection_immutable_Iterable$class__$init$__Lscala_collection_immutable_Iterable__V(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  ScalaJS.impls.scala_collection_GenSetLike$class__$init$__Lscala_collection_GenSetLike__V(this);
  ScalaJS.impls.scala_collection_generic_GenericSetTemplate$class__$init$__Lscala_collection_generic_GenericSetTemplate__V(this);
  ScalaJS.impls.scala_collection_GenSet$class__$init$__Lscala_collection_GenSet__V(this);
  ScalaJS.impls.scala_collection_generic_Subtractable$class__$init$__Lscala_collection_generic_Subtractable__V(this);
  ScalaJS.impls.scala_collection_SetLike$class__$init$__Lscala_collection_SetLike__V(this);
  ScalaJS.impls.scala_collection_Set$class__$init$__Lscala_collection_Set__V(this);
  ScalaJS.impls.scala_collection_immutable_Set$class__$init$__Lscala_collection_immutable_Set__V(this);
  ScalaJS.impls.scala_collection_generic_Sorted$class__$init$__Lscala_collection_generic_Sorted__V(this);
  ScalaJS.impls.scala_collection_SortedSetLike$class__$init$__Lscala_collection_SortedSetLike__V(this);
  ScalaJS.impls.scala_collection_SortedSet$class__$init$__Lscala_collection_SortedSet__V(this);
  ScalaJS.impls.scala_collection_immutable_SortedSet$class__$init$__Lscala_collection_immutable_SortedSet__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.init___Lscala_math_Ordering = (function(ordering) {
  ScalaJS.c.scala_collection_immutable_TreeSet.prototype.init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering.call(this, null, ordering);
  return this
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$div$colon$bslash__O__Lscala_Function2__ = (function(z, op) {
  return this.$$div$colon$bslash__O__Lscala_Function2__O(z, op)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.addString__Lscala_collection_mutable_StringBuilder__ = (function(b) {
  return this.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(b)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.addString__Lscala_collection_mutable_StringBuilder__T__ = (function(b$2, sep) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b$2, sep)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__ = (function(b$3, start, sep$2, end) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b$3, start, sep$2, end)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.mkString__ = (function() {
  return this.mkString__T()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.mkString__T__ = (function(sep$3) {
  return this.mkString__T__T(sep$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.mkString__T__T__T__ = (function(start$2, sep$4, end$2) {
  return this.mkString__T__T__T__T(start$2, sep$4, end$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toMap__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toVector__ = (function() {
  return this.toVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIndexedSeq__ = (function() {
  return this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toArray__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.toArray__Lscala_reflect_ClassTag__O(evidence$1)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToArray__O__ = (function(xs) {
  return this.copyToArray__O__V(xs)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToArray__O__I__ = (function(xs$2, start$3) {
  return this.copyToArray__O__I__V(xs$2, start$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__ = (function(dest) {
  return this.copyToBuffer__Lscala_collection_mutable_Buffer__V(dest)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, cmp) {
  return this.minBy__Lscala_Function1__Lscala_math_Ordering__O(f, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$2, cmp$2) {
  return this.maxBy__Lscala_Function1__Lscala_math_Ordering__O(f$2, cmp$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.max__Lscala_math_Ordering__ = (function(cmp$3) {
  return this.max__Lscala_math_Ordering__O(cmp$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.min__Lscala_math_Ordering__ = (function(cmp$4) {
  return this.min__Lscala_math_Ordering__O(cmp$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.product__Lscala_math_Numeric__ = (function(num) {
  return this.product__Lscala_math_Numeric__O(num)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sum__Lscala_math_Numeric__ = (function(num$2) {
  return this.sum__Lscala_math_Numeric__O(num$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__ = (function(z$2, seqop, combop) {
  return this.aggregate__O__Lscala_Function2__Lscala_Function2__O(z$2, seqop, combop)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.fold__O__Lscala_Function2__ = (function(z$3, op$2) {
  return this.fold__O__Lscala_Function2__O(z$3, op$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceOption__Lscala_Function2__ = (function(op$3) {
  return this.reduceOption__Lscala_Function2__Lscala_Option(op$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduce__Lscala_Function2__ = (function(op$4) {
  return this.reduce__Lscala_Function2__O(op$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceRightOption__Lscala_Function2__ = (function(op$5) {
  return this.reduceRightOption__Lscala_Function2__Lscala_Option(op$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceLeftOption__Lscala_Function2__ = (function(op$6) {
  return this.reduceLeftOption__Lscala_Function2__Lscala_Option(op$6)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceLeft__Lscala_Function2__ = (function(op$7) {
  return this.reduceLeft__Lscala_Function2__O(op$7)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.foldLeft__O__Lscala_Function2__ = (function(z$4, op$8) {
  return this.foldLeft__O__Lscala_Function2__O(z$4, op$8)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$colon$bslash__O__Lscala_Function2__ = (function(z$5, op$9) {
  return this.$$colon$bslash__O__Lscala_Function2__O(z$5, op$9)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$div$colon__O__Lscala_Function2__ = (function(z$6, op$10) {
  return this.$$div$colon__O__Lscala_Function2__O(z$6, op$10)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.collectFirst__Lscala_PartialFunction__ = (function(pf) {
  return this.collectFirst__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.count__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.count__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reversed__ = (function() {
  return this.reversed__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.par__ = (function() {
  return this.par__Lscala_collection_Parallel()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.withFilter__Lscala_Function1__ = (function(p$2) {
  return this.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(p$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.to__Lscala_collection_generic_CanBuildFrom__ = (function(cbf) {
  return this.to__Lscala_collection_generic_CanBuildFrom__O(cbf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toTraversable__ = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.inits__ = (function() {
  return this.inits__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.tails__ = (function() {
  return this.tails__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliceWithKnownBound__I__I__ = (function(from, until) {
  return this.sliceWithKnownBound__I__I__O(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliceWithKnownDelta__I__I__I__ = (function(from$2, until$2, delta) {
  return this.sliceWithKnownDelta__I__I__I__O(from$2, until$2, delta)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$7, op$11, bf) {
  return this.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$7, op$11, bf)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$8, op$12, bf$2) {
  return this.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$8, op$12, bf$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$9, op$13, cbf$2) {
  return this.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$9, op$13, cbf$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.groupBy__Lscala_Function1__ = (function(f$3) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.partition__Lscala_Function1__ = (function(p$3) {
  return this.partition__Lscala_Function1__Lscala_Tuple2(p$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__ = (function(pf$2, bf$3) {
  return this.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(pf$2, bf$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.filterNot__Lscala_Function1__ = (function(p$4) {
  return this.filterNot__Lscala_Function1__O(p$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.filter__Lscala_Function1__ = (function(p$5) {
  return this.filter__Lscala_Function1__O(p$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$4, bf$4) {
  return this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$4, bf$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__ = (function(that, bf$5) {
  return this.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(that, bf$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$2, bf$6) {
  return this.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$2, bf$6)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf$7) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$3, bf$7)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.hasDefiniteSize__ = (function() {
  return ScalaJS.bZ(this.hasDefiniteSize__Z())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.isTraversableAgain__ = (function() {
  return ScalaJS.bZ(this.isTraversableAgain__Z())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.repr__ = (function() {
  return this.repr__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.transpose__Lscala_Function1__ = (function(asTraversable) {
  return this.transpose__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.flatten__Lscala_Function1__ = (function(asTraversable$2) {
  return this.flatten__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.unzip3__Lscala_Function1__ = (function(asTriple) {
  return this.unzip3__Lscala_Function1__Lscala_Tuple3(asTriple)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.unzip__Lscala_Function1__ = (function(asPair) {
  return this.unzip__Lscala_Function1__Lscala_Tuple2(asPair)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.genericBuilder__ = (function() {
  return this.genericBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.view__I__I__ = (function(from$3, until$3) {
  return this.view__I__I__Lscala_collection_IterableView(from$3, until$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.view__ = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.canEqual__O__ = (function(that$4) {
  return ScalaJS.bZ(this.canEqual__O__Z(that$4))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sameElements__Lscala_collection_GenIterable__ = (function(that$5) {
  return this.sameElements__Lscala_collection_GenIterable__Z(that$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__ = (function(bf$8) {
  return this.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(bf$8)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__ = (function(that$6, thisElem, thatElem, bf$9) {
  return this.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(that$6, thisElem, thatElem, bf$9)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$7, bf$10) {
  return this.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$7, bf$10)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.copyToArray__O__I__I__ = (function(xs$3, start$4, len) {
  return this.copyToArray__O__I__I__V(xs$3, start$4, len)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliding__I__I__ = (function(size, step) {
  return this.sliding__I__I__Lscala_collection_Iterator(size, step)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.sliding__I__ = (function(size$2) {
  return this.sliding__I__Lscala_collection_Iterator(size$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.grouped__I__ = (function(size$3) {
  return this.grouped__I__Lscala_collection_Iterator(size$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIterator__ = (function() {
  return this.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toIterable__ = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.reduceRight__Lscala_Function2__ = (function(op$14) {
  return this.reduceRight__Lscala_Function2__O(op$14)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.foldRight__O__Lscala_Function2__ = (function(z$10, op$15) {
  return this.foldRight__O__Lscala_Function2__O(z$10, op$15)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.find__Lscala_Function1__ = (function(p$6) {
  return this.find__Lscala_Function1__Lscala_Option(p$6)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.exists__Lscala_Function1__ = (function(p$7) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$7))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.forall__Lscala_Function1__ = (function(p$8) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p$8))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toCollection__O__ = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.thisCollection__ = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.andThen__Lscala_Function1__ = (function(g$25) {
  return this.andThen__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$49) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compose__Lscala_Function1__ = (function(g$50) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$50)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$amp$tilde__Lscala_collection_GenSet__ = (function(that$8) {
  return this.$$amp$tilde__Lscala_collection_GenSet__O(that$8)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$bar__Lscala_collection_GenSet__ = (function(that$9) {
  return this.$$bar__Lscala_collection_GenSet__O(that$9)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$amp__Lscala_collection_GenSet__ = (function(that$10) {
  return this.$$amp__Lscala_collection_GenSet__O(that$10)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.intersect__Lscala_collection_GenSet__ = (function(that$11) {
  return this.intersect__Lscala_collection_GenSet__O(that$11)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.apply__O__ = (function(elem) {
  return ScalaJS.bZ(this.apply__O__Z(elem))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__ = (function(xs$4) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(xs$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.subsets__ = (function() {
  return this.subsets__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.subsets__I__ = (function(len$2) {
  return this.subsets__I__Lscala_collection_Iterator(len$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.diff__Lscala_collection_GenSet__ = (function(that$12) {
  return this.diff__Lscala_collection_GenSet__Lscala_collection_Set(that$12)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.union__Lscala_collection_GenSet__ = (function(that$13) {
  return this.union__Lscala_collection_GenSet__Lscala_collection_Set(that$13)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__ = (function(elems$2) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Set(elems$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus__O__O__Lscala_collection_Seq__ = (function(elem1$2, elem2$2, elems$3) {
  return this.$$plus__O__O__Lscala_collection_Seq__Lscala_collection_Set(elem1$2, elem2$2, elems$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$5, bf$11) {
  return this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$5, bf$11)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toBuffer__ = (function() {
  return this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$6, bf$12) {
  return this.scala$collection$SetLike$$super$map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$6, bf$12)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.parCombiner__ = (function() {
  return this.parCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.seq__ = (function() {
  return this.seq__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.toSet__ = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.companion__ = (function() {
  return this.companion__Lscala_collection_generic_GenericCompanion()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.hasAll__Lscala_collection_Iterator__ = (function(j) {
  return ScalaJS.bZ(this.hasAll__Lscala_collection_Iterator__Z(j))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.compare__O__O__ = (function(k0, k1) {
  return ScalaJS.bI(this.compare__O__O__I(k0, k1))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.subsetOf__Lscala_collection_GenSet__ = (function(that$14) {
  return ScalaJS.bZ(this.subsetOf__Lscala_collection_GenSet__Z(that$14))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.keySet__ = (function() {
  return this.keySet__Lscala_collection_SortedSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__ = (function(that$15) {
  return ScalaJS.bZ(this.scala$collection$SortedSetLike$$super$subsetOf__Lscala_collection_GenSet__Z(that$15))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.lastKey__ = (function() {
  return this.lastKey__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.firstKey__ = (function() {
  return this.firstKey__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.until__O__ = (function(until$4) {
  return this.until__O__Lscala_collection_immutable_TreeSet(until$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.to__O__ = (function(to) {
  return this.to__O__Lscala_collection_immutable_TreeSet(to)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.from__O__ = (function(from$4) {
  return this.from__O__Lscala_collection_immutable_TreeSet(from$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.range__O__O__ = (function(from$5, until$5) {
  return this.range__O__O__Lscala_collection_immutable_TreeSet(from$5, until$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.rangeImpl__Lscala_Option__Lscala_Option__ = (function(from$6, until$6) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeSet(from$6, until$6)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.foreach__Lscala_Function1__ = (function(f$7) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f$7))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.contains__O__ = (function(elem$2) {
  return ScalaJS.bZ(this.contains__O__Z(elem$2))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$minus__O__ = (function(elem$3) {
  return this.$$minus__O__Lscala_collection_immutable_TreeSet(elem$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.insert__O__ = (function(elem$4) {
  return this.insert__O__Lscala_collection_immutable_TreeSet(elem$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$$plus__O__ = (function(elem$5) {
  return this.$$plus__O__Lscala_collection_immutable_TreeSet(elem$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.isSmaller__O__O__ = (function(x, y) {
  return ScalaJS.bZ(this.isSmaller__O__O__Z(x, y))
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.span__Lscala_Function1__ = (function(p$9) {
  return this.span__Lscala_Function1__Lscala_Tuple2(p$9)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.takeWhile__Lscala_Function1__ = (function(p$10) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_TreeSet(p$10)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.dropWhile__Lscala_Function1__ = (function(p$11) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_TreeSet(p$11)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.splitAt__I__ = (function(n) {
  return this.splitAt__I__Lscala_Tuple2(n)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.takeRight__I__ = (function(n$2) {
  return this.takeRight__I__Lscala_collection_immutable_TreeSet(n$2)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.dropRight__I__ = (function(n$3) {
  return this.dropRight__I__Lscala_collection_immutable_TreeSet(n$3)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.slice__I__I__ = (function(from$7, until$7) {
  return this.slice__I__I__Lscala_collection_immutable_TreeSet(from$7, until$7)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.take__I__ = (function(n$4) {
  return this.take__I__Lscala_collection_immutable_TreeSet(n$4)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.drop__I__ = (function(n$5) {
  return this.drop__I__Lscala_collection_immutable_TreeSet(n$5)
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.init__ = (function() {
  return this.init__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.tail__ = (function() {
  return this.tail__Lscala_collection_immutable_TreeSet()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.lastOption__ = (function() {
  return this.lastOption__Lscala_Option()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.last__ = (function() {
  return this.last__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.headOption__ = (function() {
  return this.headOption__Lscala_Option()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.head__ = (function() {
  return this.head__O()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.stringPrefix__ = (function() {
  return this.stringPrefix__T()
});
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.ordering__ = (function() {
  return this.ordering__Lscala_math_Ordering()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TreeSet = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TreeSet.prototype = ScalaJS.c.scala_collection_immutable_TreeSet.prototype;
ScalaJS.is.scala_collection_immutable_TreeSet = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TreeSet)))
});
ScalaJS.as.scala_collection_immutable_TreeSet = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TreeSet(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TreeSet")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TreeSet = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TreeSet)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TreeSet = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TreeSet(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TreeSet;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TreeSet = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TreeSet: 0
}, false, "scala.collection.immutable.TreeSet", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_TreeSet: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_SortedSet: 1,
  scala_collection_SortedSet: 1,
  scala_collection_SortedSetLike: 1,
  scala_collection_generic_Sorted: 1,
  scala_collection_immutable_Set: 1,
  scala_collection_Set: 1,
  scala_collection_SetLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_collection_GenSet: 1,
  scala_collection_generic_GenericSetTemplate: 1,
  scala_collection_GenSetLike: 1,
  scala_Function1: 1,
  scala_collection_immutable_Iterable: 1,
  scala_collection_Iterable: 1,
  scala_collection_IterableLike: 1,
  scala_Equals: 1,
  scala_collection_GenIterable: 1,
  scala_collection_GenIterableLike: 1,
  scala_collection_immutable_Traversable: 1,
  scala_Immutable: 1,
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
ScalaJS.c.scala_collection_immutable_TreeSet.prototype.$classData = ScalaJS.data.scala_collection_immutable_TreeSet;
//@ sourceMappingURL=TreeSet.js.map
