/** @constructor */
ScalaJS.c.scala_collection_immutable_TreeMap = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.tree$1 = null;
  this.ordering$1 = null
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.constructor = ScalaJS.c.scala_collection_immutable_TreeMap;
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keySet__Lscala_collection_immutable_SortedSet = (function() {
  return ScalaJS.impls.scala_collection_immutable_SortedMap$class__keySet__Lscala_collection_immutable_SortedMap__Lscala_collection_immutable_SortedSet(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_immutable_SortedMap = (function(p) {
  return ScalaJS.impls.scala_collection_immutable_SortedMap$class__filterKeys__Lscala_collection_immutable_SortedMap__Lscala_Function1__Lscala_collection_immutable_SortedMap(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mapValues__Lscala_Function1__Lscala_collection_immutable_SortedMap = (function(f) {
  return ScalaJS.impls.scala_collection_immutable_SortedMap$class__mapValues__Lscala_collection_immutable_SortedMap__Lscala_Function1__Lscala_collection_immutable_SortedMap(this, f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.hasAll__Lscala_collection_Iterator__Z = (function(j) {
  return ScalaJS.impls.scala_collection_generic_Sorted$class__hasAll__Lscala_collection_generic_Sorted__Lscala_collection_Iterator__Z(this, j)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_immutable_Map$class__toMap__Lscala_collection_immutable_Map__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_immutable_Map = (function() {
  return ScalaJS.impls.scala_collection_immutable_Map$class__seq__Lscala_collection_immutable_Map__Lscala_collection_immutable_Map(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.withDefault__Lscala_Function1__Lscala_collection_immutable_Map = (function(d) {
  return ScalaJS.impls.scala_collection_immutable_Map$class__withDefault__Lscala_collection_immutable_Map__Lscala_Function1__Lscala_collection_immutable_Map(this, d)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.withDefaultValue__O__Lscala_collection_immutable_Map = (function(d) {
  return ScalaJS.impls.scala_collection_immutable_Map$class__withDefaultValue__Lscala_collection_immutable_Map__O__Lscala_collection_immutable_Map(this, d)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.parCombiner__Lscala_collection_parallel_Combiner = (function() {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__parCombiner__Lscala_collection_immutable_MapLike__Lscala_collection_parallel_Combiner(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_immutable_MapLike$class__transform__Lscala_collection_immutable_MapLike__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__isEmpty__Lscala_collection_MapLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.getOrElse__O__Lscala_Function0__O = (function(key, default$2) {
  return ScalaJS.impls.scala_collection_MapLike$class__getOrElse__Lscala_collection_MapLike__O__Lscala_Function0__O(this, key, default$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply__O__O = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__apply__Lscala_collection_MapLike__O__O(this, key)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keys__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__keys__Lscala_collection_MapLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.values__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__values__Lscala_collection_MapLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$default__O__O = (function(key) {
  return ScalaJS.impls.scala_collection_MapLike$class__default__Lscala_collection_MapLike__O__O(this, key)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterNot__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return ScalaJS.impls.scala_collection_MapLike$class__filterNot__Lscala_collection_MapLike__Lscala_Function1__Lscala_collection_Map(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__toSeq__Lscala_collection_MapLike__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__toBuffer__Lscala_collection_MapLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_MapLike$class__addString__Lscala_collection_MapLike__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.stringPrefix__T = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__stringPrefix__Lscala_collection_MapLike__T(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_MapLike$class__toString__Lscala_collection_MapLike__T(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus__Lscala_collection_generic_Subtractable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Subtractable$class__$minus$minus__Lscala_collection_generic_Subtractable__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(this, xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.orElse__Lscala_PartialFunction__Lscala_PartialFunction = (function(that) {
  return ScalaJS.impls.scala_PartialFunction$class__orElse__Lscala_PartialFunction__Lscala_PartialFunction__Lscala_PartialFunction(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen__Lscala_Function1__Lscala_PartialFunction = (function(k) {
  return ScalaJS.impls.scala_PartialFunction$class__andThen__Lscala_PartialFunction__Lscala_Function1__Lscala_PartialFunction(this, k)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.lift__Lscala_Function1 = (function() {
  return ScalaJS.impls.scala_PartialFunction$class__lift__Lscala_PartialFunction__Lscala_Function1(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.applyOrElse__O__Lscala_Function1__O = (function(x, default$2) {
  return ScalaJS.impls.scala_PartialFunction$class__applyOrElse__Lscala_PartialFunction__O__Lscala_Function1__O(this, x, default$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.runWith__Lscala_Function1__Lscala_Function1 = (function(action) {
  return ScalaJS.impls.scala_PartialFunction$class__runWith__Lscala_PartialFunction__Lscala_Function1__Lscala_Function1(this, action)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZD$sp__D__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZD$sp__Lscala_Function1__D__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDD$sp__D__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDD$sp__Lscala_Function1__D__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFD$sp__D__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFD$sp__Lscala_Function1__D__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcID$sp__D__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcID$sp__Lscala_Function1__D__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJD$sp__D__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJD$sp__Lscala_Function1__D__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVD$sp__D__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVD$sp__Lscala_Function1__D__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZF$sp__F__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZF$sp__Lscala_Function1__F__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDF$sp__F__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDF$sp__Lscala_Function1__F__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFF$sp__F__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFF$sp__Lscala_Function1__F__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcIF$sp__F__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIF$sp__Lscala_Function1__F__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJF$sp__F__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJF$sp__Lscala_Function1__F__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVF$sp__F__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVF$sp__Lscala_Function1__F__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZI$sp__I__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZI$sp__Lscala_Function1__I__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDI$sp__I__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDI$sp__Lscala_Function1__I__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFI$sp__I__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFI$sp__Lscala_Function1__I__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcII$sp__I__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcII$sp__Lscala_Function1__I__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJI$sp__I__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJI$sp__Lscala_Function1__I__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVI$sp__I__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVI$sp__Lscala_Function1__I__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZJ$sp__J__Z = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcZJ$sp__Lscala_Function1__J__Z(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDJ$sp__J__D = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcDJ$sp__Lscala_Function1__J__D(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFJ$sp__J__F = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcFJ$sp__Lscala_Function1__J__F(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcIJ$sp__J__I = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcIJ$sp__Lscala_Function1__J__I(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJJ$sp__J__J = (function(v1) {
  return ScalaJS.impls.scala_Function1$class__apply$mcJJ$sp__Lscala_Function1__J__J(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVJ$sp__J__V = (function(v1) {
  ScalaJS.impls.scala_Function1$class__apply$mcVJ$sp__Lscala_Function1__J__V(this, v1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__compose$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcID$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcID$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVD$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVF$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcII$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcII$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVI$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1 = (function(g) {
  return ScalaJS.impls.scala_Function1$class__andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1__Lscala_Function1(this, g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_GenMapLike$class__hashCode__Lscala_collection_GenMapLike__I(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.equals__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_GenMapLike$class__equals__Lscala_collection_GenMapLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_immutable_Iterable$class__companion__Lscala_collection_immutable_Iterable__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__thisCollection__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return ScalaJS.impls.scala_collection_IterableLike$class__toCollection__Lscala_collection_IterableLike__O__Lscala_collection_Iterable(this, repr)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__forall__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__exists__Lscala_collection_IterableLike__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IterableLike$class__find__Lscala_collection_IterableLike__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__foldRight__Lscala_collection_IterableLike__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterable__Lscala_collection_IterableLike__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toIterator__Lscala_collection_IterableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.grouped__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__grouped__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliding__I__Lscala_collection_Iterator = (function(size) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__Lscala_collection_Iterator(this, size)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliding__I__I__Lscala_collection_Iterator = (function(size, step) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sliding__Lscala_collection_IterableLike__I__I__Lscala_collection_Iterator(this, size, step)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_IterableLike$class__copyToArray__Lscala_collection_IterableLike__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O = (function(that, thisElem, thatElem, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zipAll__Lscala_collection_IterableLike__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(this, that, thisElem, thatElem, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zipWithIndex__Lscala_collection_IterableLike__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__toStream__Lscala_collection_IterableLike__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.canEqual__O__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__canEqual__Lscala_collection_IterableLike__O__Z(this, that)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.view__Lscala_collection_IterableView = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__Lscala_collection_IterableView(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return ScalaJS.impls.scala_collection_IterableLike$class__view__Lscala_collection_IterableLike__I__I__Lscala_collection_IterableView(this, from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.genericBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__genericBuilder__Lscala_collection_generic_GenericTraversableTemplate__Lscala_collection_mutable_Builder(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.unzip__Lscala_Function1__Lscala_Tuple2 = (function(asPair) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple2(this, asPair)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.unzip3__Lscala_Function1__Lscala_Tuple3 = (function(asTriple) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__unzip3__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_Tuple3(this, asTriple)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.flatten__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__flatten__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.transpose__Lscala_Function1__Lscala_collection_GenTraversable = (function(asTraversable) {
  return ScalaJS.impls.scala_collection_generic_GenericTraversableTemplate$class__transpose__Lscala_collection_generic_GenericTraversableTemplate__Lscala_Function1__Lscala_collection_GenTraversable(this, asTraversable)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.repr__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__repr__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isTraversableAgain__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__isTraversableAgain__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__hasDefiniteSize__Lscala_collection_TraversableLike__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus__Lscala_collection_TraversableLike__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__$plus$plus$colon__Lscala_collection_TraversableLike__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__map__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O = (function(f, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__flatMap__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(this, f, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filter__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__filter__Lscala_collection_TraversableLike__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O = (function(pf, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__collect__Lscala_collection_TraversableLike__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(this, pf, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__partition__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.groupBy__Lscala_Function1__Lscala_collection_immutable_Map = (function(f) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__groupBy__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_immutable_Map(this, f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scan__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, cbf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scanLeft__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O = (function(z, op, bf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__scanRight__Lscala_collection_TraversableLike__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(this, z, op, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliceWithKnownDelta__I__I__I__O = (function(from, until, delta) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownDelta__Lscala_collection_TraversableLike__I__I__I__O(this, from, until, delta)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliceWithKnownBound__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__sliceWithKnownBound__Lscala_collection_TraversableLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.tails__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tails__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.inits__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__inits__Lscala_collection_TraversableLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toTraversable__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__toTraversable__Lscala_collection_TraversableLike__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.to__Lscala_collection_generic_CanBuildFrom__O = (function(cbf) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__to__Lscala_collection_TraversableLike__Lscala_collection_generic_CanBuildFrom__O(this, cbf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableLike$class__withFilter__Lscala_collection_TraversableLike__Lscala_Function1__Lscala_collection_generic_FilterMonadic(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.par__Lscala_collection_Parallel = (function() {
  return ScalaJS.impls.scala_collection_Parallelizable$class__par__Lscala_collection_Parallelizable__Lscala_collection_Parallel(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reversed__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.collectFirst__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option(this, pf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduce__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.fold__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__O = (function(z, seqop, combop) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O(this, z, seqop, combop)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V(this, xs, start)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V(this, xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSet__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T(this, sep)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T(this)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$div$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_GenTraversableOnce$class__$div$colon$bslash__Lscala_collection_GenTraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.ordering__Lscala_math_Ordering = (function() {
  return this.ordering$1
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isSmaller__O__O__Z = (function(x, y) {
  return this.ordering__Lscala_math_Ordering().lt__O__O__Z(x, y)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return ScalaJS.modules.scala_collection_immutable_TreeMap().newBuilder__Lscala_math_Ordering__Lscala_collection_mutable_Builder(this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.size__I = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().count__Lscala_collection_immutable_RedBlackTree$Tree__I(this.tree$1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeMap = (function(from, until) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().rangeImpl__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Option__Lscala_Option__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, until, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.range__O__O__Lscala_collection_immutable_TreeMap = (function(from, until) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().range__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, until, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.from__O__Lscala_collection_immutable_TreeMap = (function(from) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().from__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.to__O__Lscala_collection_immutable_TreeMap = (function(to) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().to__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, to, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.until__O__Lscala_collection_immutable_TreeMap = (function(until) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().until__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, until, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.firstKey__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().smallest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1).key__O()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.lastKey__O = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().greatest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1).key__O()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compare__O__O__I = (function(k0, k1) {
  return this.ordering__Lscala_math_Ordering().compare__O__O__I(k0, k1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.head__Lscala_Tuple2 = (function() {
  var smallest = ScalaJS.modules.scala_collection_immutable_RedBlackTree().smallest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1);
  return new ScalaJS.c.scala_Tuple2().init___O__O(smallest.key__O(), smallest.value__O())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.headOption__Lscala_Option = (function() {
  if (ScalaJS.modules.scala_collection_immutable_RedBlackTree().isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__Z(this.tree$1)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(this.head__Lscala_Tuple2())
  }
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.last__Lscala_Tuple2 = (function() {
  var greatest = ScalaJS.modules.scala_collection_immutable_RedBlackTree().greatest__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1);
  return new ScalaJS.c.scala_Tuple2().init___O__O(greatest.key__O(), greatest.value__O())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.lastOption__Lscala_Option = (function() {
  if (ScalaJS.modules.scala_collection_immutable_RedBlackTree().isEmpty__Lscala_collection_immutable_RedBlackTree$Tree__Z(this.tree$1)) {
    return ScalaJS.modules.scala_None()
  } else {
    return new ScalaJS.c.scala_Some().init___O(this.last__Lscala_Tuple2())
  }
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.tail__Lscala_collection_immutable_TreeMap = (function() {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, this.firstKey__O(), this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.init__Lscala_collection_immutable_TreeMap = (function() {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, this.lastKey__O(), this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.drop__I__Lscala_collection_immutable_TreeMap = (function(n) {
  if ((n <= 0)) {
    return this
  } else {
    if ((n >= this.size__I())) {
      return this.empty__Lscala_collection_immutable_TreeMap()
    } else {
      return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().drop__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, n, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
    }
  }
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.take__I__Lscala_collection_immutable_TreeMap = (function(n) {
  if ((n <= 0)) {
    return this.empty__Lscala_collection_immutable_TreeMap()
  } else {
    if ((n >= this.size__I())) {
      return this
    } else {
      return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().take__Lscala_collection_immutable_RedBlackTree$Tree__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, n, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
    }
  }
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.slice__I__I__Lscala_collection_immutable_TreeMap = (function(from, until) {
  if ((until <= from)) {
    return this.empty__Lscala_collection_immutable_TreeMap()
  } else {
    if ((from <= 0)) {
      return this.take__I__Lscala_collection_immutable_TreeMap(until)
    } else {
      if ((until >= this.size__I())) {
        return this.drop__I__Lscala_collection_immutable_TreeMap(from)
      } else {
        return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().slice__Lscala_collection_immutable_RedBlackTree$Tree__I__I__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, from, until, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
      }
    }
  }
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.dropRight__I__Lscala_collection_immutable_TreeMap = (function(n) {
  return this.take__I__Lscala_collection_immutable_TreeMap((this.size__I() - n))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.takeRight__I__Lscala_collection_immutable_TreeMap = (function(n) {
  return this.drop__I__Lscala_collection_immutable_TreeMap((this.size__I() - n))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return new ScalaJS.c.scala_Tuple2().init___O__O(this.take__I__Lscala_collection_immutable_TreeMap(n), this.drop__I__Lscala_collection_immutable_TreeMap(n))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.countWhile__p1__Lscala_Function1__I = (function(p) {
  var result = 0;
  var it = this.iterator__Lscala_collection_Iterator();
  while ((it.hasNext__Z() && ScalaJS.uZ(p.apply__O__O(it.next__O())))) {
    result = (result + 1)
  };
  return result
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.dropWhile__Lscala_Function1__Lscala_collection_immutable_TreeMap = (function(p) {
  return this.drop__I__Lscala_collection_immutable_TreeMap(this.countWhile__p1__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.takeWhile__Lscala_Function1__Lscala_collection_immutable_TreeMap = (function(p) {
  return this.take__I__Lscala_collection_immutable_TreeMap(this.countWhile__p1__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return this.splitAt__I__Lscala_Tuple2(this.countWhile__p1__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.empty__Lscala_collection_immutable_TreeMap = (function() {
  return ScalaJS.modules.scala_collection_immutable_TreeMap().empty__Lscala_math_Ordering__Lscala_collection_immutable_TreeMap(this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__Lscala_collection_immutable_TreeMap = (function(key, value) {
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, key, value, true, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap = (function(kv) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(kv.$$und1__O(), kv.$$und2__O())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_TreeMap = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(elem1).$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(elem2).$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap(elems)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap = (function(xs) {
  var x$1 = ScalaJS.as.scala_collection_immutable_TreeMap(this.repr__O());
  return ScalaJS.as.scala_collection_immutable_TreeMap(xs.seq__Lscala_collection_TraversableOnce().$$div$colon__O__Lscala_Function2__O(x$1, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(x$2, x$3) {
      return x$2.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(x$3)
    })
  })())))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.insert__O__O__Lscala_collection_immutable_TreeMap = (function(key, value) {
  ScalaJS.modules.scala_Predef().assert__Z__V((!ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, key, this.ordering__Lscala_math_Ordering())));
  return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().update__Lscala_collection_immutable_RedBlackTree$Tree__O__O__Z__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, key, value, true, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__Lscala_collection_immutable_TreeMap = (function(key) {
  if ((!ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, key, this.ordering__Lscala_math_Ordering()))) {
    return this
  } else {
    return new ScalaJS.c.scala_collection_immutable_TreeMap().init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering(ScalaJS.modules.scala_collection_immutable_RedBlackTree().$delete__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_collection_immutable_RedBlackTree$Tree(this.tree$1, key, this.ordering__Lscala_math_Ordering()), this.ordering__Lscala_math_Ordering())
  }
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.get__O__Lscala_Option = (function(key) {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().get__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Lscala_Option(this.tree$1, key, this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().iterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(this.tree$1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keysIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().keysIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(this.tree$1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.valuesIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().valuesIterator__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_collection_Iterator(this.tree$1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.contains__O__Z = (function(key) {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, key, this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isDefinedAt__O__Z = (function(key) {
  return ScalaJS.modules.scala_collection_immutable_RedBlackTree().contains__Lscala_collection_immutable_RedBlackTree$Tree__O__Lscala_math_Ordering__Z(this.tree$1, key, this.ordering__Lscala_math_Ordering())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.modules.scala_collection_immutable_RedBlackTree().foreach__Lscala_collection_immutable_RedBlackTree$Tree__Lscala_Function1__V(this.tree$1, f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.repr__Lscala_collection_generic_Subtractable = (function() {
  return ScalaJS.as.scala_collection_generic_Subtractable(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.repr__Lscala_collection_generic_Sorted = (function() {
  return ScalaJS.as.scala_collection_generic_Sorted(this.repr__O())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_IterableView(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen__Lscala_Function1__Lscala_Function1 = (function(g) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterNot__Lscala_Function1__O = (function(p) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.values__Lscala_collection_GenIterable = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keys__Lscala_collection_GenIterable = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_immutable_Traversable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_immutable_Iterable = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__Lscala_collection_Map = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mapValues__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_SortedMap(f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mapValues__Lscala_Function1__Lscala_collection_Map = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_SortedMap(f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mapValues__Lscala_Function1__Lscala_collection_immutable_Map = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_SortedMap(f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mapValues__Lscala_Function1__Lscala_collection_SortedMap = (function(f) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_SortedMap(f)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_GenMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_SortedMap(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_Map = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_SortedMap(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_immutable_Map = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_SortedMap(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterKeys__Lscala_Function1__Lscala_collection_SortedMap = (function(p) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_SortedMap(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keySet__Lscala_collection_GenSet = (function() {
  return this.keySet__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keySet__Lscala_collection_Set = (function() {
  return this.keySet__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keySet__Lscala_collection_immutable_Set = (function() {
  return this.keySet__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keySet__Lscala_collection_SortedSet = (function() {
  return this.keySet__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__O = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_TreeMap(key)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__Lscala_collection_generic_Subtractable = (function(elem) {
  return this.$$minus__O__Lscala_collection_immutable_TreeMap(elem)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__Lscala_collection_Map = (function(key) {
  return this.$$minus__O__Lscala_collection_immutable_TreeMap(key)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap(xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap(xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_SortedMap = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap(xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_SortedMap = (function(xs) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap(xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_Map = (function(kv1, kv2, kvs) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_TreeMap(kv1, kv2, kvs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_Map = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_TreeMap(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_SortedMap = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_TreeMap(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_SortedMap = (function(elem1, elem2, elems) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_TreeMap(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_GenMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(kv)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(kv)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_Map = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(kv)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_SortedMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(kv)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_collection_immutable_SortedMap = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(kv)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__Lscala_collection_GenMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(key, value)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__Lscala_collection_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(key, value)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__Lscala_collection_immutable_Map = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(key, value)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__Lscala_collection_SortedMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(key, value)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__Lscala_collection_immutable_SortedMap = (function(key, value) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(key, value)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.empty__Lscala_collection_Map = (function() {
  return this.empty__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.empty__Lscala_collection_immutable_Map = (function() {
  return this.empty__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.empty__Lscala_collection_SortedMap = (function() {
  return this.empty__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.empty__Lscala_collection_immutable_SortedMap = (function() {
  return this.empty__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_TreeMap(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_TreeMap(p)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.takeRight__I__O = (function(n) {
  return this.takeRight__I__Lscala_collection_immutable_TreeMap(n)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.dropRight__I__O = (function(n) {
  return this.dropRight__I__Lscala_collection_immutable_TreeMap(n)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.slice__I__I__O = (function(from, until) {
  return this.slice__I__I__Lscala_collection_immutable_TreeMap(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.take__I__O = (function(n) {
  return this.take__I__Lscala_collection_immutable_TreeMap(n)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.drop__I__O = (function(n) {
  return this.drop__I__Lscala_collection_immutable_TreeMap(n)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.init__O = (function() {
  return this.init__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.tail__O = (function() {
  return this.tail__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.last__O = (function() {
  return this.last__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.head__O = (function() {
  return this.head__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.until__O__Lscala_collection_generic_Sorted = (function(until) {
  return this.until__O__Lscala_collection_immutable_TreeMap(until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.to__O__Lscala_collection_generic_Sorted = (function(to) {
  return this.to__O__Lscala_collection_immutable_TreeMap(to)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.from__O__Lscala_collection_generic_Sorted = (function(from) {
  return this.from__O__Lscala_collection_immutable_TreeMap(from)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.range__O__O__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.range__O__O__Lscala_collection_immutable_TreeMap(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_generic_Sorted = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeMap(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_SortedMap = (function(from, until) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeMap(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering = (function(tree, ordering) {
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
  ScalaJS.impls.scala_collection_GenMapLike$class__$init$__Lscala_collection_GenMapLike__V(this);
  ScalaJS.impls.scala_Function1$class__$init$__Lscala_Function1__V(this);
  ScalaJS.impls.scala_PartialFunction$class__$init$__Lscala_PartialFunction__V(this);
  ScalaJS.impls.scala_collection_generic_Subtractable$class__$init$__Lscala_collection_generic_Subtractable__V(this);
  ScalaJS.impls.scala_collection_MapLike$class__$init$__Lscala_collection_MapLike__V(this);
  ScalaJS.impls.scala_collection_Map$class__$init$__Lscala_collection_Map__V(this);
  ScalaJS.impls.scala_collection_immutable_MapLike$class__$init$__Lscala_collection_immutable_MapLike__V(this);
  ScalaJS.impls.scala_collection_immutable_Map$class__$init$__Lscala_collection_immutable_Map__V(this);
  ScalaJS.impls.scala_collection_generic_Sorted$class__$init$__Lscala_collection_generic_Sorted__V(this);
  ScalaJS.impls.scala_collection_SortedMapLike$class__$init$__Lscala_collection_SortedMapLike__V(this);
  ScalaJS.impls.scala_collection_SortedMap$class__$init$__Lscala_collection_SortedMap__V(this);
  ScalaJS.impls.scala_collection_immutable_SortedMap$class__$init$__Lscala_collection_immutable_SortedMap__V(this);
  return this
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.init___Lscala_math_Ordering = (function(ordering) {
  ScalaJS.c.scala_collection_immutable_TreeMap.prototype.init___Lscala_collection_immutable_RedBlackTree$Tree__Lscala_math_Ordering.call(this, null, ordering);
  return this
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$div$colon$bslash__O__Lscala_Function2__ = (function(z, op) {
  return this.$$div$colon$bslash__O__Lscala_Function2__O(z, op)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.addString__Lscala_collection_mutable_StringBuilder__ = (function(b) {
  return this.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(b)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.addString__Lscala_collection_mutable_StringBuilder__T__ = (function(b$2, sep) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b$2, sep)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mkString__ = (function() {
  return this.mkString__T()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mkString__T__ = (function(sep$2) {
  return this.mkString__T__T(sep$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mkString__T__T__T__ = (function(start, sep$3, end) {
  return this.mkString__T__T__T__T(start, sep$3, end)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toVector__ = (function() {
  return this.toVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toSet__ = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIndexedSeq__ = (function() {
  return this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toArray__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.toArray__Lscala_reflect_ClassTag__O(evidence$1)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToArray__O__ = (function(xs) {
  return this.copyToArray__O__V(xs)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToArray__O__I__ = (function(xs$2, start$2) {
  return this.copyToArray__O__I__V(xs$2, start$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__ = (function(dest) {
  return this.copyToBuffer__Lscala_collection_mutable_Buffer__V(dest)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, cmp) {
  return this.minBy__Lscala_Function1__Lscala_math_Ordering__O(f, cmp)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$2, cmp$2) {
  return this.maxBy__Lscala_Function1__Lscala_math_Ordering__O(f$2, cmp$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.max__Lscala_math_Ordering__ = (function(cmp$3) {
  return this.max__Lscala_math_Ordering__O(cmp$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.min__Lscala_math_Ordering__ = (function(cmp$4) {
  return this.min__Lscala_math_Ordering__O(cmp$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.product__Lscala_math_Numeric__ = (function(num) {
  return this.product__Lscala_math_Numeric__O(num)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sum__Lscala_math_Numeric__ = (function(num$2) {
  return this.sum__Lscala_math_Numeric__O(num$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__ = (function(z$2, seqop, combop) {
  return this.aggregate__O__Lscala_Function2__Lscala_Function2__O(z$2, seqop, combop)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.fold__O__Lscala_Function2__ = (function(z$3, op$2) {
  return this.fold__O__Lscala_Function2__O(z$3, op$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceOption__Lscala_Function2__ = (function(op$3) {
  return this.reduceOption__Lscala_Function2__Lscala_Option(op$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduce__Lscala_Function2__ = (function(op$4) {
  return this.reduce__Lscala_Function2__O(op$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceRightOption__Lscala_Function2__ = (function(op$5) {
  return this.reduceRightOption__Lscala_Function2__Lscala_Option(op$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceLeftOption__Lscala_Function2__ = (function(op$6) {
  return this.reduceLeftOption__Lscala_Function2__Lscala_Option(op$6)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceLeft__Lscala_Function2__ = (function(op$7) {
  return this.reduceLeft__Lscala_Function2__O(op$7)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.foldLeft__O__Lscala_Function2__ = (function(z$4, op$8) {
  return this.foldLeft__O__Lscala_Function2__O(z$4, op$8)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$colon$bslash__O__Lscala_Function2__ = (function(z$5, op$9) {
  return this.$$colon$bslash__O__Lscala_Function2__O(z$5, op$9)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$div$colon__O__Lscala_Function2__ = (function(z$6, op$10) {
  return this.$$div$colon__O__Lscala_Function2__O(z$6, op$10)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.collectFirst__Lscala_PartialFunction__ = (function(pf) {
  return this.collectFirst__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.count__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.count__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reversed__ = (function() {
  return this.reversed__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.par__ = (function() {
  return this.par__Lscala_collection_Parallel()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.withFilter__Lscala_Function1__ = (function(p$2) {
  return this.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(p$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.to__Lscala_collection_generic_CanBuildFrom__ = (function(cbf) {
  return this.to__Lscala_collection_generic_CanBuildFrom__O(cbf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toTraversable__ = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.inits__ = (function() {
  return this.inits__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.tails__ = (function() {
  return this.tails__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliceWithKnownBound__I__I__ = (function(from, until) {
  return this.sliceWithKnownBound__I__I__O(from, until)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliceWithKnownDelta__I__I__I__ = (function(from$2, until$2, delta) {
  return this.sliceWithKnownDelta__I__I__I__O(from$2, until$2, delta)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$7, op$11, bf) {
  return this.scanRight__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$7, op$11, bf)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$8, op$12, bf$2) {
  return this.scanLeft__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$8, op$12, bf$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(z$9, op$13, cbf$2) {
  return this.scan__O__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(z$9, op$13, cbf$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.groupBy__Lscala_Function1__ = (function(f$3) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.partition__Lscala_Function1__ = (function(p$3) {
  return this.partition__Lscala_Function1__Lscala_Tuple2(p$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__ = (function(pf$2, bf$3) {
  return this.collect__Lscala_PartialFunction__Lscala_collection_generic_CanBuildFrom__O(pf$2, bf$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filter__Lscala_Function1__ = (function(p$4) {
  return this.filter__Lscala_Function1__O(p$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$4, bf$4) {
  return this.flatMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$4, bf$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__ = (function(f$5, bf$5) {
  return this.map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(f$5, bf$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__ = (function(that, bf$6) {
  return this.$$plus$plus$colon__Lscala_collection_Traversable__Lscala_collection_generic_CanBuildFrom__O(that, bf$6)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$2, bf$7) {
  return this.$$plus$plus$colon__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$2, bf$7)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf$8) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_CanBuildFrom__O(that$3, bf$8)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.hasDefiniteSize__ = (function() {
  return ScalaJS.bZ(this.hasDefiniteSize__Z())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isTraversableAgain__ = (function() {
  return ScalaJS.bZ(this.isTraversableAgain__Z())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.repr__ = (function() {
  return this.repr__O()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.transpose__Lscala_Function1__ = (function(asTraversable) {
  return this.transpose__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.flatten__Lscala_Function1__ = (function(asTraversable$2) {
  return this.flatten__Lscala_Function1__Lscala_collection_GenTraversable(asTraversable$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.unzip3__Lscala_Function1__ = (function(asTriple) {
  return this.unzip3__Lscala_Function1__Lscala_Tuple3(asTriple)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.unzip__Lscala_Function1__ = (function(asPair) {
  return this.unzip__Lscala_Function1__Lscala_Tuple2(asPair)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.genericBuilder__ = (function() {
  return this.genericBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.view__I__I__ = (function(from$3, until$3) {
  return this.view__I__I__Lscala_collection_IterableView(from$3, until$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.view__ = (function() {
  return this.view__Lscala_collection_IterableView()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.canEqual__O__ = (function(that$4) {
  return ScalaJS.bZ(this.canEqual__O__Z(that$4))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sameElements__Lscala_collection_GenIterable__ = (function(that$5) {
  return this.sameElements__Lscala_collection_GenIterable__Z(that$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__ = (function(bf$9) {
  return this.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O(bf$9)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__ = (function(that$6, thisElem, thatElem, bf$10) {
  return this.zipAll__Lscala_collection_GenIterable__O__O__Lscala_collection_generic_CanBuildFrom__O(that$6, thisElem, thatElem, bf$10)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$7, bf$11) {
  return this.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$7, bf$11)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.copyToArray__O__I__I__ = (function(xs$3, start$3, len) {
  return this.copyToArray__O__I__I__V(xs$3, start$3, len)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliding__I__I__ = (function(size, step) {
  return this.sliding__I__I__Lscala_collection_Iterator(size, step)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.sliding__I__ = (function(size$2) {
  return this.sliding__I__Lscala_collection_Iterator(size$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.grouped__I__ = (function(size$3) {
  return this.grouped__I__Lscala_collection_Iterator(size$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIterator__ = (function() {
  return this.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toIterable__ = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.reduceRight__Lscala_Function2__ = (function(op$14) {
  return this.reduceRight__Lscala_Function2__O(op$14)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.foldRight__O__Lscala_Function2__ = (function(z$10, op$15) {
  return this.foldRight__O__Lscala_Function2__O(z$10, op$15)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.find__Lscala_Function1__ = (function(p$5) {
  return this.find__Lscala_Function1__Lscala_Option(p$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.exists__Lscala_Function1__ = (function(p$6) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$6))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.forall__Lscala_Function1__ = (function(p$7) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p$7))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toCollection__O__ = (function(repr) {
  return this.toCollection__O__Lscala_collection_Iterable(repr)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.thisCollection__ = (function() {
  return this.thisCollection__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.companion__ = (function() {
  return this.companion__Lscala_collection_generic_GenericCompanion()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVJ$sp__Lscala_Function1__ = (function(g) {
  return this.andThen$mcVJ$sp__Lscala_Function1__Lscala_Function1(g)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJJ$sp__Lscala_Function1__ = (function(g$2) {
  return this.andThen$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcIJ$sp__Lscala_Function1__ = (function(g$3) {
  return this.andThen$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFJ$sp__Lscala_Function1__ = (function(g$4) {
  return this.andThen$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDJ$sp__Lscala_Function1__ = (function(g$5) {
  return this.andThen$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZJ$sp__Lscala_Function1__ = (function(g$6) {
  return this.andThen$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$6)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVI$sp__Lscala_Function1__ = (function(g$7) {
  return this.andThen$mcVI$sp__Lscala_Function1__Lscala_Function1(g$7)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJI$sp__Lscala_Function1__ = (function(g$8) {
  return this.andThen$mcJI$sp__Lscala_Function1__Lscala_Function1(g$8)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcII$sp__Lscala_Function1__ = (function(g$9) {
  return this.andThen$mcII$sp__Lscala_Function1__Lscala_Function1(g$9)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFI$sp__Lscala_Function1__ = (function(g$10) {
  return this.andThen$mcFI$sp__Lscala_Function1__Lscala_Function1(g$10)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDI$sp__Lscala_Function1__ = (function(g$11) {
  return this.andThen$mcDI$sp__Lscala_Function1__Lscala_Function1(g$11)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZI$sp__Lscala_Function1__ = (function(g$12) {
  return this.andThen$mcZI$sp__Lscala_Function1__Lscala_Function1(g$12)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVF$sp__Lscala_Function1__ = (function(g$13) {
  return this.andThen$mcVF$sp__Lscala_Function1__Lscala_Function1(g$13)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJF$sp__Lscala_Function1__ = (function(g$14) {
  return this.andThen$mcJF$sp__Lscala_Function1__Lscala_Function1(g$14)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcIF$sp__Lscala_Function1__ = (function(g$15) {
  return this.andThen$mcIF$sp__Lscala_Function1__Lscala_Function1(g$15)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFF$sp__Lscala_Function1__ = (function(g$16) {
  return this.andThen$mcFF$sp__Lscala_Function1__Lscala_Function1(g$16)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDF$sp__Lscala_Function1__ = (function(g$17) {
  return this.andThen$mcDF$sp__Lscala_Function1__Lscala_Function1(g$17)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZF$sp__Lscala_Function1__ = (function(g$18) {
  return this.andThen$mcZF$sp__Lscala_Function1__Lscala_Function1(g$18)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcVD$sp__Lscala_Function1__ = (function(g$19) {
  return this.andThen$mcVD$sp__Lscala_Function1__Lscala_Function1(g$19)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcJD$sp__Lscala_Function1__ = (function(g$20) {
  return this.andThen$mcJD$sp__Lscala_Function1__Lscala_Function1(g$20)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcID$sp__Lscala_Function1__ = (function(g$21) {
  return this.andThen$mcID$sp__Lscala_Function1__Lscala_Function1(g$21)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcFD$sp__Lscala_Function1__ = (function(g$22) {
  return this.andThen$mcFD$sp__Lscala_Function1__Lscala_Function1(g$22)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcDD$sp__Lscala_Function1__ = (function(g$23) {
  return this.andThen$mcDD$sp__Lscala_Function1__Lscala_Function1(g$23)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen$mcZD$sp__Lscala_Function1__ = (function(g$24) {
  return this.andThen$mcZD$sp__Lscala_Function1__Lscala_Function1(g$24)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVJ$sp__Lscala_Function1__ = (function(g$25) {
  return this.compose$mcVJ$sp__Lscala_Function1__Lscala_Function1(g$25)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJJ$sp__Lscala_Function1__ = (function(g$26) {
  return this.compose$mcJJ$sp__Lscala_Function1__Lscala_Function1(g$26)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcIJ$sp__Lscala_Function1__ = (function(g$27) {
  return this.compose$mcIJ$sp__Lscala_Function1__Lscala_Function1(g$27)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFJ$sp__Lscala_Function1__ = (function(g$28) {
  return this.compose$mcFJ$sp__Lscala_Function1__Lscala_Function1(g$28)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDJ$sp__Lscala_Function1__ = (function(g$29) {
  return this.compose$mcDJ$sp__Lscala_Function1__Lscala_Function1(g$29)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZJ$sp__Lscala_Function1__ = (function(g$30) {
  return this.compose$mcZJ$sp__Lscala_Function1__Lscala_Function1(g$30)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVI$sp__Lscala_Function1__ = (function(g$31) {
  return this.compose$mcVI$sp__Lscala_Function1__Lscala_Function1(g$31)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJI$sp__Lscala_Function1__ = (function(g$32) {
  return this.compose$mcJI$sp__Lscala_Function1__Lscala_Function1(g$32)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcII$sp__Lscala_Function1__ = (function(g$33) {
  return this.compose$mcII$sp__Lscala_Function1__Lscala_Function1(g$33)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFI$sp__Lscala_Function1__ = (function(g$34) {
  return this.compose$mcFI$sp__Lscala_Function1__Lscala_Function1(g$34)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDI$sp__Lscala_Function1__ = (function(g$35) {
  return this.compose$mcDI$sp__Lscala_Function1__Lscala_Function1(g$35)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZI$sp__Lscala_Function1__ = (function(g$36) {
  return this.compose$mcZI$sp__Lscala_Function1__Lscala_Function1(g$36)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVF$sp__Lscala_Function1__ = (function(g$37) {
  return this.compose$mcVF$sp__Lscala_Function1__Lscala_Function1(g$37)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJF$sp__Lscala_Function1__ = (function(g$38) {
  return this.compose$mcJF$sp__Lscala_Function1__Lscala_Function1(g$38)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcIF$sp__Lscala_Function1__ = (function(g$39) {
  return this.compose$mcIF$sp__Lscala_Function1__Lscala_Function1(g$39)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFF$sp__Lscala_Function1__ = (function(g$40) {
  return this.compose$mcFF$sp__Lscala_Function1__Lscala_Function1(g$40)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDF$sp__Lscala_Function1__ = (function(g$41) {
  return this.compose$mcDF$sp__Lscala_Function1__Lscala_Function1(g$41)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZF$sp__Lscala_Function1__ = (function(g$42) {
  return this.compose$mcZF$sp__Lscala_Function1__Lscala_Function1(g$42)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcVD$sp__Lscala_Function1__ = (function(g$43) {
  return this.compose$mcVD$sp__Lscala_Function1__Lscala_Function1(g$43)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcJD$sp__Lscala_Function1__ = (function(g$44) {
  return this.compose$mcJD$sp__Lscala_Function1__Lscala_Function1(g$44)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcID$sp__Lscala_Function1__ = (function(g$45) {
  return this.compose$mcID$sp__Lscala_Function1__Lscala_Function1(g$45)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcFD$sp__Lscala_Function1__ = (function(g$46) {
  return this.compose$mcFD$sp__Lscala_Function1__Lscala_Function1(g$46)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcDD$sp__Lscala_Function1__ = (function(g$47) {
  return this.compose$mcDD$sp__Lscala_Function1__Lscala_Function1(g$47)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose$mcZD$sp__Lscala_Function1__ = (function(g$48) {
  return this.compose$mcZD$sp__Lscala_Function1__Lscala_Function1(g$48)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compose__Lscala_Function1__ = (function(g$49) {
  return this.compose__Lscala_Function1__Lscala_Function1(g$49)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVJ$sp__J__ = (function(v1) {
  return ScalaJS.bV(this.apply$mcVJ$sp__J__V(v1))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJJ$sp__J__ = (function(v1$2) {
  return ScalaJS.bJ(this.apply$mcJJ$sp__J__J(v1$2))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcIJ$sp__J__ = (function(v1$3) {
  return ScalaJS.bI(this.apply$mcIJ$sp__J__I(v1$3))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFJ$sp__J__ = (function(v1$4) {
  return ScalaJS.bF(this.apply$mcFJ$sp__J__F(v1$4))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDJ$sp__J__ = (function(v1$5) {
  return ScalaJS.bD(this.apply$mcDJ$sp__J__D(v1$5))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZJ$sp__J__ = (function(v1$6) {
  return ScalaJS.bZ(this.apply$mcZJ$sp__J__Z(v1$6))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVI$sp__I__ = (function(v1$7) {
  return ScalaJS.bV(this.apply$mcVI$sp__I__V(v1$7))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJI$sp__I__ = (function(v1$8) {
  return ScalaJS.bJ(this.apply$mcJI$sp__I__J(v1$8))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcII$sp__I__ = (function(v1$9) {
  return ScalaJS.bI(this.apply$mcII$sp__I__I(v1$9))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFI$sp__I__ = (function(v1$10) {
  return ScalaJS.bF(this.apply$mcFI$sp__I__F(v1$10))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDI$sp__I__ = (function(v1$11) {
  return ScalaJS.bD(this.apply$mcDI$sp__I__D(v1$11))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZI$sp__I__ = (function(v1$12) {
  return ScalaJS.bZ(this.apply$mcZI$sp__I__Z(v1$12))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVF$sp__F__ = (function(v1$13) {
  return ScalaJS.bV(this.apply$mcVF$sp__F__V(v1$13))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJF$sp__F__ = (function(v1$14) {
  return ScalaJS.bJ(this.apply$mcJF$sp__F__J(v1$14))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcIF$sp__F__ = (function(v1$15) {
  return ScalaJS.bI(this.apply$mcIF$sp__F__I(v1$15))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFF$sp__F__ = (function(v1$16) {
  return ScalaJS.bF(this.apply$mcFF$sp__F__F(v1$16))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDF$sp__F__ = (function(v1$17) {
  return ScalaJS.bD(this.apply$mcDF$sp__F__D(v1$17))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZF$sp__F__ = (function(v1$18) {
  return ScalaJS.bZ(this.apply$mcZF$sp__F__Z(v1$18))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcVD$sp__D__ = (function(v1$19) {
  return ScalaJS.bV(this.apply$mcVD$sp__D__V(v1$19))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcJD$sp__D__ = (function(v1$20) {
  return ScalaJS.bJ(this.apply$mcJD$sp__D__J(v1$20))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcID$sp__D__ = (function(v1$21) {
  return ScalaJS.bI(this.apply$mcID$sp__D__I(v1$21))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcFD$sp__D__ = (function(v1$22) {
  return ScalaJS.bF(this.apply$mcFD$sp__D__F(v1$22))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcDD$sp__D__ = (function(v1$23) {
  return ScalaJS.bD(this.apply$mcDD$sp__D__D(v1$23))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply$mcZD$sp__D__ = (function(v1$24) {
  return ScalaJS.bZ(this.apply$mcZD$sp__D__Z(v1$24))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.runWith__Lscala_Function1__ = (function(action) {
  return this.runWith__Lscala_Function1__Lscala_Function1(action)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.applyOrElse__O__Lscala_Function1__ = (function(x, default$2) {
  return this.applyOrElse__O__Lscala_Function1__O(x, default$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.lift__ = (function() {
  return this.lift__Lscala_Function1()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.andThen__Lscala_Function1__ = (function(k) {
  return this.andThen__Lscala_Function1__Lscala_PartialFunction(k)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.orElse__Lscala_PartialFunction__ = (function(that$8) {
  return this.orElse__Lscala_PartialFunction__Lscala_PartialFunction(that$8)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus$minus__Lscala_collection_GenTraversableOnce__ = (function(xs$4) {
  return this.$$minus$minus__Lscala_collection_GenTraversableOnce__Lscala_collection_generic_Subtractable(xs$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$minus__O__O__Lscala_collection_Seq__Lscala_collection_generic_Subtractable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.stringPrefix__ = (function() {
  return this.stringPrefix__T()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__ = (function(b$3, start$4, sep$4, end$2) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b$3, start$4, sep$4, end$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toBuffer__ = (function() {
  return this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterNot__Lscala_Function1__ = (function(p$8) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Map(p$8)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$default__O__ = (function(key) {
  return this.$default__O__O(key)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.values__ = (function() {
  return this.values__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keys__ = (function() {
  return this.keys__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.apply__O__ = (function(key$2) {
  return this.apply__O__O(key$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.getOrElse__O__Lscala_Function0__ = (function(key$3, default$3) {
  return this.getOrElse__O__Lscala_Function0__O(key$3, default$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__ = (function(f$6, bf$12) {
  return this.transform__Lscala_Function2__Lscala_collection_generic_CanBuildFrom__O(f$6, bf$12)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.parCombiner__ = (function() {
  return this.parCombiner__Lscala_collection_parallel_Combiner()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.withDefaultValue__O__ = (function(d) {
  return this.withDefaultValue__O__Lscala_collection_immutable_Map(d)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.withDefault__Lscala_Function1__ = (function(d$2) {
  return this.withDefault__Lscala_Function1__Lscala_collection_immutable_Map(d$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.seq__ = (function() {
  return this.seq__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.toMap__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.hasAll__Lscala_collection_Iterator__ = (function(j) {
  return ScalaJS.bZ(this.hasAll__Lscala_collection_Iterator__Z(j))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.mapValues__Lscala_Function1__ = (function(f$7) {
  return this.mapValues__Lscala_Function1__Lscala_collection_immutable_SortedMap(f$7)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.filterKeys__Lscala_Function1__ = (function(p$9) {
  return this.filterKeys__Lscala_Function1__Lscala_collection_immutable_SortedMap(p$9)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keySet__ = (function() {
  return this.keySet__Lscala_collection_immutable_SortedSet()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.foreach__Lscala_Function1__ = (function(f$8) {
  return ScalaJS.bV(this.foreach__Lscala_Function1__V(f$8))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isDefinedAt__O__ = (function(key$4) {
  return ScalaJS.bZ(this.isDefinedAt__O__Z(key$4))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.contains__O__ = (function(key$5) {
  return ScalaJS.bZ(this.contains__O__Z(key$5))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.valuesIterator__ = (function() {
  return this.valuesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.keysIterator__ = (function() {
  return this.keysIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.iterator__ = (function() {
  return this.iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.get__O__ = (function(key$6) {
  return this.get__O__Lscala_Option(key$6)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$minus__O__ = (function(key$7) {
  return this.$$minus__O__Lscala_collection_immutable_TreeMap(key$7)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.insert__O__O__ = (function(key$8, value) {
  return this.insert__O__O__Lscala_collection_immutable_TreeMap(key$8, value)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus$plus__Lscala_collection_GenTraversableOnce__ = (function(xs$5) {
  return this.$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_TreeMap(xs$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__ = (function(elem1$2, elem2$2, elems$2) {
  return this.$$plus__Lscala_Tuple2__Lscala_Tuple2__Lscala_collection_Seq__Lscala_collection_immutable_TreeMap(elem1$2, elem2$2, elems$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$$plus__Lscala_Tuple2__ = (function(kv) {
  return this.$$plus__Lscala_Tuple2__Lscala_collection_immutable_TreeMap(kv)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.updated__O__O__ = (function(key$9, value$2) {
  return this.updated__O__O__Lscala_collection_immutable_TreeMap(key$9, value$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.empty__ = (function() {
  return this.empty__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.span__Lscala_Function1__ = (function(p$10) {
  return this.span__Lscala_Function1__Lscala_Tuple2(p$10)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.takeWhile__Lscala_Function1__ = (function(p$11) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_immutable_TreeMap(p$11)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.dropWhile__Lscala_Function1__ = (function(p$12) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_immutable_TreeMap(p$12)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.splitAt__I__ = (function(n) {
  return this.splitAt__I__Lscala_Tuple2(n)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.takeRight__I__ = (function(n$2) {
  return this.takeRight__I__Lscala_collection_immutable_TreeMap(n$2)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.dropRight__I__ = (function(n$3) {
  return this.dropRight__I__Lscala_collection_immutable_TreeMap(n$3)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.slice__I__I__ = (function(from$4, until$4) {
  return this.slice__I__I__Lscala_collection_immutable_TreeMap(from$4, until$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.take__I__ = (function(n$4) {
  return this.take__I__Lscala_collection_immutable_TreeMap(n$4)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.drop__I__ = (function(n$5) {
  return this.drop__I__Lscala_collection_immutable_TreeMap(n$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.init__ = (function() {
  return this.init__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.tail__ = (function() {
  return this.tail__Lscala_collection_immutable_TreeMap()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.lastOption__ = (function() {
  return this.lastOption__Lscala_Option()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.last__ = (function() {
  return this.last__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.headOption__ = (function() {
  return this.headOption__Lscala_Option()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.head__ = (function() {
  return this.head__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.compare__O__O__ = (function(k0, k1) {
  return ScalaJS.bI(this.compare__O__O__I(k0, k1))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.lastKey__ = (function() {
  return this.lastKey__O()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.firstKey__ = (function() {
  return this.firstKey__O()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.until__O__ = (function(until$5) {
  return this.until__O__Lscala_collection_immutable_TreeMap(until$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.to__O__ = (function(to) {
  return this.to__O__Lscala_collection_immutable_TreeMap(to)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.from__O__ = (function(from$5) {
  return this.from__O__Lscala_collection_immutable_TreeMap(from$5)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.range__O__O__ = (function(from$6, until$6) {
  return this.range__O__O__Lscala_collection_immutable_TreeMap(from$6, until$6)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.rangeImpl__Lscala_Option__Lscala_Option__ = (function(from$7, until$7) {
  return this.rangeImpl__Lscala_Option__Lscala_Option__Lscala_collection_immutable_TreeMap(from$7, until$7)
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.isSmaller__O__O__ = (function(x$2, y) {
  return ScalaJS.bZ(this.isSmaller__O__O__Z(x$2, y))
});
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.ordering__ = (function() {
  return this.ordering__Lscala_math_Ordering()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_TreeMap = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_TreeMap.prototype = ScalaJS.c.scala_collection_immutable_TreeMap.prototype;
ScalaJS.is.scala_collection_immutable_TreeMap = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_TreeMap)))
});
ScalaJS.as.scala_collection_immutable_TreeMap = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_TreeMap(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.TreeMap")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_TreeMap = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_TreeMap)))
});
ScalaJS.asArrayOf.scala_collection_immutable_TreeMap = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_TreeMap(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.TreeMap;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_TreeMap = new ScalaJS.ClassTypeData({
  scala_collection_immutable_TreeMap: 0
}, false, "scala.collection.immutable.TreeMap", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_TreeMap: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_immutable_SortedMap: 1,
  scala_collection_SortedMap: 1,
  scala_collection_SortedMapLike: 1,
  scala_collection_generic_Sorted: 1,
  scala_collection_immutable_Map: 1,
  scala_collection_immutable_MapLike: 1,
  scala_collection_Map: 1,
  scala_collection_MapLike: 1,
  scala_collection_generic_Subtractable: 1,
  scala_PartialFunction: 1,
  scala_Function1: 1,
  scala_collection_GenMap: 1,
  scala_collection_GenMapLike: 1,
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
ScalaJS.c.scala_collection_immutable_TreeMap.prototype.$classData = ScalaJS.data.scala_collection_immutable_TreeMap;
//@ sourceMappingURL=TreeMap.js.map
