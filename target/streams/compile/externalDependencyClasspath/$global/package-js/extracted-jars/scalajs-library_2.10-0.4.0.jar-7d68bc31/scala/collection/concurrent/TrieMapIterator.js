/** @constructor */
ScalaJS.c.scala_collection_concurrent_TrieMapIterator = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.level$1 = 0;
  this.ct$1 = null;
  this.stack$1 = null;
  this.stackpos$1 = null;
  this.depth$1 = 0;
  this.subiter$1 = null;
  this.current$1 = null
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.constructor = ScalaJS.c.scala_collection_concurrent_TrieMapIterator;
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.seq__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__seq__Lscala_collection_Iterator__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__isEmpty__Lscala_collection_Iterator__Z(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.isTraversableAgain__Z = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__isTraversableAgain__Lscala_collection_Iterator__Z(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__hasDefiniteSize__Lscala_collection_Iterator__Z(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.take__I__Lscala_collection_Iterator = (function(n) {
  return ScalaJS.impls.scala_collection_Iterator$class__take__Lscala_collection_Iterator__I__Lscala_collection_Iterator(this, n)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.drop__I__Lscala_collection_Iterator = (function(n) {
  return ScalaJS.impls.scala_collection_Iterator$class__drop__Lscala_collection_Iterator__I__Lscala_collection_Iterator(this, n)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.slice__I__I__Lscala_collection_Iterator = (function(from, until) {
  return ScalaJS.impls.scala_collection_Iterator$class__slice__Lscala_collection_Iterator__I__I__Lscala_collection_Iterator(this, from, until)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.map__Lscala_Function1__Lscala_collection_Iterator = (function(f) {
  return ScalaJS.impls.scala_collection_Iterator$class__map__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, f)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$plus$plus__Lscala_Function0__Lscala_collection_Iterator = (function(that) {
  return ScalaJS.impls.scala_collection_Iterator$class__$plus$plus__Lscala_collection_Iterator__Lscala_Function0__Lscala_collection_Iterator(this, that)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.flatMap__Lscala_Function1__Lscala_collection_Iterator = (function(f) {
  return ScalaJS.impls.scala_collection_Iterator$class__flatMap__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, f)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.filter__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__filter__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.corresponds__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_Iterator$class__corresponds__Lscala_collection_Iterator__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.withFilter__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__withFilter__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.filterNot__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__filterNot__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.collect__Lscala_PartialFunction__Lscala_collection_Iterator = (function(pf) {
  return ScalaJS.impls.scala_collection_Iterator$class__collect__Lscala_collection_Iterator__Lscala_PartialFunction__Lscala_collection_Iterator(this, pf)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_Iterator = (function(z, op) {
  return ScalaJS.impls.scala_collection_Iterator$class__scanLeft__Lscala_collection_Iterator__O__Lscala_Function2__Lscala_collection_Iterator(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.scanRight__O__Lscala_Function2__Lscala_collection_Iterator = (function(z, op) {
  return ScalaJS.impls.scala_collection_Iterator$class__scanRight__Lscala_collection_Iterator__O__Lscala_Function2__Lscala_collection_Iterator(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.takeWhile__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__takeWhile__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__partition__Lscala_collection_Iterator__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__span__Lscala_collection_Iterator__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.dropWhile__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__dropWhile__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.zip__Lscala_collection_Iterator__Lscala_collection_Iterator = (function(that) {
  return ScalaJS.impls.scala_collection_Iterator$class__zip__Lscala_collection_Iterator__Lscala_collection_Iterator__Lscala_collection_Iterator(this, that)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.padTo__I__O__Lscala_collection_Iterator = (function(len, elem) {
  return ScalaJS.impls.scala_collection_Iterator$class__padTo__Lscala_collection_Iterator__I__O__Lscala_collection_Iterator(this, len, elem)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.zipWithIndex__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__zipWithIndex__Lscala_collection_Iterator__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.zipAll__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator = (function(that, thisElem, thatElem) {
  return ScalaJS.impls.scala_collection_Iterator$class__zipAll__Lscala_collection_Iterator__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator(this, that, thisElem, thatElem)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_Iterator$class__foreach__Lscala_collection_Iterator__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__forall__Lscala_collection_Iterator__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__exists__Lscala_collection_Iterator__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_Iterator$class__contains__Lscala_collection_Iterator__O__Z(this, elem)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__find__Lscala_collection_Iterator__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.indexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__indexWhere__Lscala_collection_Iterator__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.indexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_Iterator$class__indexOf__Lscala_collection_Iterator__O__I(this, elem)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.buffered__Lscala_collection_BufferedIterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__buffered__Lscala_collection_Iterator__Lscala_collection_BufferedIterator(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.grouped__I__Lscala_collection_Iterator$GroupedIterator = (function(size) {
  return ScalaJS.impls.scala_collection_Iterator$class__grouped__Lscala_collection_Iterator__I__Lscala_collection_Iterator$GroupedIterator(this, size)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sliding__I__I__Lscala_collection_Iterator$GroupedIterator = (function(size, step) {
  return ScalaJS.impls.scala_collection_Iterator$class__sliding__Lscala_collection_Iterator__I__I__Lscala_collection_Iterator$GroupedIterator(this, size, step)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__length__Lscala_collection_Iterator__I(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.duplicate__Lscala_Tuple2 = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__duplicate__Lscala_collection_Iterator__Lscala_Tuple2(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.patch__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator = (function(from, patchElems, replaced) {
  return ScalaJS.impls.scala_collection_Iterator$class__patch__Lscala_collection_Iterator__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator(this, from, patchElems, replaced)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_Iterator$class__copyToArray__Lscala_collection_Iterator__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sameElements__Lscala_collection_Iterator__Z = (function(that) {
  return ScalaJS.impls.scala_collection_Iterator$class__sameElements__Lscala_collection_Iterator__Lscala_collection_Iterator__Z(this, that)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toTraversable__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toTraversable__Lscala_collection_Iterator__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toIterator__Lscala_collection_Iterator__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toStream__Lscala_collection_Iterator__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toString__Lscala_collection_Iterator__T(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sliding$default$2__I = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__sliding$default$2__Lscala_collection_Iterator__I(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reversed__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__size__Lscala_collection_TraversableOnce__I(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.collectFirst__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option(this, pf)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldRight__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRight__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduce__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.fold__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__O = (function(z, seqop, combop) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O(this, z, seqop, combop)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V(this, xs, start)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V(this, xs)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIterable__Lscala_collection_TraversableOnce__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSeq__Lscala_collection_TraversableOnce__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSet__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.to__Lscala_collection_generic_CanBuildFrom__O = (function(cbf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__to__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, cbf)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toMap__Lscala_collection_TraversableOnce__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T(this, sep)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T(this)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$div$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_GenTraversableOnce$class__$div$colon$bslash__Lscala_collection_GenTraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.level__I = (function() {
  return this.level$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.level$und$eq__I__V = (function(x$1) {
  this.level$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.ct__p1__Lscala_collection_concurrent_TrieMap = (function() {
  return this.ct$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.ct$und$eq__p1__Lscala_collection_concurrent_TrieMap__V = (function(x$1) {
  this.ct$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.stack__p1__AALscala_collection_concurrent_BasicNode = (function() {
  return this.stack$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.stack$und$eq__p1__AALscala_collection_concurrent_BasicNode__V = (function(x$1) {
  this.stack$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.stackpos__p1__AI = (function() {
  return this.stackpos$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.stackpos$und$eq__p1__AI__V = (function(x$1) {
  this.stackpos$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.depth__p1__I = (function() {
  return this.depth$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.depth$und$eq__p1__I__V = (function(x$1) {
  this.depth$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.subiter__p1__Lscala_collection_Iterator = (function() {
  return this.subiter$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.subiter$und$eq__p1__Lscala_collection_Iterator__V = (function(x$1) {
  this.subiter$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.current__p1__Lscala_collection_concurrent_KVNode = (function() {
  return this.current$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.current$und$eq__p1__Lscala_collection_concurrent_KVNode__V = (function(x$1) {
  this.current$1 = x$1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.hasNext__Z = (function() {
  return ((this.current__p1__Lscala_collection_concurrent_KVNode() !== null) || (this.subiter__p1__Lscala_collection_Iterator() !== null))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.next__Lscala_Tuple2 = (function() {
  if (this.hasNext__Z()) {
    var r = null;
    if ((this.subiter__p1__Lscala_collection_Iterator() !== null)) {
      r = ScalaJS.as.scala_Tuple2(this.subiter__p1__Lscala_collection_Iterator().next__O());
      this.checkSubiter__p1__V()
    } else {
      r = this.current__p1__Lscala_collection_concurrent_KVNode().kvPair__Lscala_Tuple2();
      this.advance__V()
    };
    return r
  } else {
    return ScalaJS.as.scala_Tuple2(ScalaJS.modules.scala_collection_Iterator().empty__Lscala_collection_Iterator().next__O())
  }
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.readin__p1__Lscala_collection_concurrent_INode__V = (function(in$2) {
  var x1 = in$2.gcasRead__Lscala_collection_concurrent_TrieMap__Lscala_collection_concurrent_MainNode(this.ct__p1__Lscala_collection_concurrent_TrieMap());
  matchEnd7: {
    if (ScalaJS.is.scala_collection_concurrent_CNode(x1)) {
      var x2 = ScalaJS.as.scala_collection_concurrent_CNode(x1);
      this.depth$und$eq__p1__I__V((this.depth__p1__I() + 1));
      this.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[this.depth__p1__I()] = x2.array__ALscala_collection_concurrent_BasicNode();
      this.stackpos__p1__AI().underlying[this.depth__p1__I()] = -1;
      this.advance__V();
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.is.scala_collection_concurrent_TNode(x1)) {
      var x3 = ScalaJS.as.scala_collection_concurrent_TNode(x1);
      this.current$und$eq__p1__Lscala_collection_concurrent_KVNode__V(x3);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.is.scala_collection_concurrent_LNode(x1)) {
      var x4 = ScalaJS.as.scala_collection_concurrent_LNode(x1);
      this.subiter$und$eq__p1__Lscala_collection_Iterator__V(x4.listmap__Lscala_collection_immutable_ListMap().iterator__Lscala_collection_Iterator());
      this.checkSubiter__p1__V();
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.anyRefEqEq(null, x1)) {
      this.current$und$eq__p1__Lscala_collection_concurrent_KVNode__V(null);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.checkSubiter__p1__V = (function() {
  if ((!this.subiter__p1__Lscala_collection_Iterator().hasNext__Z())) {
    this.subiter$und$eq__p1__Lscala_collection_Iterator__V(null);
    this.advance__V()
  }
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.initialize__p1__V = (function() {
  ScalaJS.modules.scala_Predef().assert__Z__V(this.ct__p1__Lscala_collection_concurrent_TrieMap().isReadOnly__Z());
  var qual$1 = this.ct__p1__Lscala_collection_concurrent_TrieMap();
  var x$6 = qual$1.RDCSS$undREAD$undROOT$default$1__Z();
  var r = qual$1.RDCSS$undREAD$undROOT__Z__Lscala_collection_concurrent_INode(x$6);
  this.readin__p1__Lscala_collection_concurrent_INode__V(r)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.advance__V = (function() {
  if ((this.depth__p1__I() >= 0)) {
    var npos = (this.stackpos__p1__AI().underlying[this.depth__p1__I()] + 1);
    if ((npos < this.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[this.depth__p1__I()].underlying.length)) {
      this.stackpos__p1__AI().underlying[this.depth__p1__I()] = npos;
      var x1 = this.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[this.depth__p1__I()].underlying[npos];
      matchEnd5: {
        if (ScalaJS.is.scala_collection_concurrent_SNode(x1)) {
          var x2 = ScalaJS.as.scala_collection_concurrent_SNode(x1);
          this.current$und$eq__p1__Lscala_collection_concurrent_KVNode__V(x2);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd5
        };
        if (ScalaJS.is.scala_collection_concurrent_INode(x1)) {
          var x3 = ScalaJS.as.scala_collection_concurrent_INode(x1);
          this.readin__p1__Lscala_collection_concurrent_INode__V(x3);
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd5
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      }
    } else {
      this.depth$und$eq__p1__I__V((this.depth__p1__I() - 1));
      this.advance__V()
    }
  } else {
    this.current$und$eq__p1__Lscala_collection_concurrent_KVNode__V(null)
  }
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.newIterator__I__Lscala_collection_concurrent_TrieMap__Z__Lscala_collection_concurrent_TrieMapIterator = (function(_lev, _ct, _mustInit) {
  return new ScalaJS.c.scala_collection_concurrent_TrieMapIterator().init___I__Lscala_collection_concurrent_TrieMap__Z(_lev, _ct, _mustInit)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.dupTo__Lscala_collection_concurrent_TrieMapIterator__V = (function(it) {
  it.level$und$eq__I__V(this.level__I());
  it.ct$und$eq__p1__Lscala_collection_concurrent_TrieMap__V(this.ct__p1__Lscala_collection_concurrent_TrieMap());
  it.depth$und$eq__p1__I__V(this.depth__p1__I());
  it.current$und$eq__p1__Lscala_collection_concurrent_KVNode__V(this.current__p1__Lscala_collection_concurrent_KVNode());
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.stack__p1__AALscala_collection_concurrent_BasicNode(), 0, it.stack__p1__AALscala_collection_concurrent_BasicNode(), 0, 7);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(this.stackpos__p1__AI(), 0, it.stackpos__p1__AI(), 0, 7);
  if (ScalaJS.anyRefEqEq(this.subiter__p1__Lscala_collection_Iterator(), null)) {
    it.subiter$und$eq__p1__Lscala_collection_Iterator__V(null)
  } else {
    var lst = this.subiter__p1__Lscala_collection_Iterator().toList__Lscala_collection_immutable_List();
    this.subiter$und$eq__p1__Lscala_collection_Iterator__V(lst.iterator__Lscala_collection_Iterator());
    it.subiter$und$eq__p1__Lscala_collection_Iterator__V(lst.iterator__Lscala_collection_Iterator())
  }
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.subdivide__Lscala_collection_Seq = (function() {
  if ((this.subiter__p1__Lscala_collection_Iterator() !== null)) {
    var it = this.subiter__p1__Lscala_collection_Iterator();
    this.subiter$und$eq__p1__Lscala_collection_Iterator__V(null);
    this.advance__V();
    this.level$und$eq__I__V((this.level__I() + 1));
    return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_Iterator.getArrayOf(), [it, this]), 1))))
  } else {
    if ((this.depth__p1__I() === -1)) {
      this.level$und$eq__I__V((this.level__I() + 1));
      return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_concurrent_TrieMapIterator.getArrayOf(), [this]), 1))))
    } else {
      var d = 0;
      while ((d <= this.depth__p1__I())) {
        var rem = ((this.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[d].underlying.length - 1) - this.stackpos__p1__AI().underlying[d]);
        if ((rem > 0)) {
          var x1 = ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[d], 1)).drop__I__O((this.stackpos__p1__AI().underlying[d] + 1)), 1)).splitAt__I__Lscala_Tuple2(((rem / 2) | 0));
          matchEnd3: {
            if ((x1 !== null)) {
              var arr1 = ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(x1.$$und1__O(), 1);
              var arr2 = ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(x1.$$und2__O(), 1);
              var x$5 = new ScalaJS.c.scala_Tuple2().init___O__O(arr1, arr2);
              break matchEnd3
            };
            throw new ScalaJS.c.scala_MatchError().init___O(x1)
          };
          var arr1$2 = ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(x$5.$$und1__O(), 1);
          var arr2$2 = ScalaJS.asArrayOf.scala_collection_concurrent_BasicNode(x$5.$$und2__O(), 1);
          this.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[d] = arr1$2;
          this.stackpos__p1__AI().underlying[d] = -1;
          var it$2 = this.newIterator__I__Lscala_collection_concurrent_TrieMap__Z__Lscala_collection_concurrent_TrieMapIterator((this.level__I() + 1), this.ct__p1__Lscala_collection_concurrent_TrieMap(), false);
          it$2.stack__p1__AALscala_collection_concurrent_BasicNode().underlying[0] = arr2$2;
          it$2.stackpos__p1__AI().underlying[0] = -1;
          it$2.depth$und$eq__p1__I__V(0);
          it$2.advance__V();
          this.level$und$eq__I__V((this.level__I() + 1));
          return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_concurrent_TrieMapIterator.getArrayOf(), [this, it$2]), 1))))
        };
        d = (d + 1)
      };
      this.level$und$eq__I__V((this.level__I() + 1));
      return ScalaJS.as.scala_collection_Seq(ScalaJS.modules.scala_collection_Seq().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_collection_concurrent_TrieMapIterator.getArrayOf(), [this]), 1))))
    }
  }
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.printDebug__V = (function() {
  ScalaJS.modules.scala_Predef().println__O__V("ctrie iterator");
  ScalaJS.modules.scala_Predef().println__O__V(ScalaJS.modules.scala_Predef().intArrayOps__AI__Lscala_collection_mutable_ArrayOps(this.stackpos__p1__AI()).mkString__T__T(","));
  ScalaJS.modules.scala_Predef().println__O__V(("depth: " + ScalaJS.bI(this.depth__p1__I())));
  ScalaJS.modules.scala_Predef().println__O__V(("curr.: " + this.current__p1__Lscala_collection_concurrent_KVNode()));
  ScalaJS.modules.scala_Predef().println__O__V(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(this.stack__p1__AALscala_collection_concurrent_BasicNode(), 1)).mkString__T__T("\n"))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.next__O = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.init___I__Lscala_collection_concurrent_TrieMap__Z = (function(level, ct, mustInit) {
  this.level$1 = level;
  this.ct$1 = ct;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_GenTraversableOnce$class__$init$__Lscala_collection_GenTraversableOnce__V(this);
  ScalaJS.impls.scala_collection_TraversableOnce$class__$init$__Lscala_collection_TraversableOnce__V(this);
  ScalaJS.impls.scala_collection_Iterator$class__$init$__Lscala_collection_Iterator__V(this);
  this.stack$1 = ScalaJS.newArrayObject(ScalaJS.data.scala_collection_concurrent_BasicNode.getArrayOf().getArrayOf(), [7]);
  this.stackpos$1 = ScalaJS.newArrayObject(ScalaJS.data.scala_Int.getArrayOf(), [7]);
  this.depth$1 = -1;
  this.subiter$1 = null;
  this.current$1 = null;
  if (mustInit) {
    this.initialize__p1__V()
  };
  return this
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$div$colon$bslash__O__Lscala_Function2__ = (function(z, op) {
  return this.$$div$colon$bslash__O__Lscala_Function2__O(z, op)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.addString__Lscala_collection_mutable_StringBuilder__ = (function(b) {
  return this.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(b)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.addString__Lscala_collection_mutable_StringBuilder__T__ = (function(b$2, sep) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b$2, sep)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__ = (function(b$3, start, sep$2, end) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b$3, start, sep$2, end)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.mkString__ = (function() {
  return this.mkString__T()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.mkString__T__ = (function(sep$3) {
  return this.mkString__T__T(sep$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.mkString__T__T__T__ = (function(start$2, sep$4, end$2) {
  return this.mkString__T__T__T__T(start$2, sep$4, end$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toMap__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.to__Lscala_collection_generic_CanBuildFrom__ = (function(cbf) {
  return this.to__Lscala_collection_generic_CanBuildFrom__O(cbf)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toVector__ = (function() {
  return this.toVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toSet__ = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toBuffer__ = (function() {
  return this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIndexedSeq__ = (function() {
  return this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIterable__ = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toArray__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.toArray__Lscala_reflect_ClassTag__O(evidence$1)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToArray__O__ = (function(xs) {
  return this.copyToArray__O__V(xs)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToArray__O__I__ = (function(xs$2, start$3) {
  return this.copyToArray__O__I__V(xs$2, start$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__ = (function(dest) {
  return this.copyToBuffer__Lscala_collection_mutable_Buffer__V(dest)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, cmp) {
  return this.minBy__Lscala_Function1__Lscala_math_Ordering__O(f, cmp)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$2, cmp$2) {
  return this.maxBy__Lscala_Function1__Lscala_math_Ordering__O(f$2, cmp$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.max__Lscala_math_Ordering__ = (function(cmp$3) {
  return this.max__Lscala_math_Ordering__O(cmp$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.min__Lscala_math_Ordering__ = (function(cmp$4) {
  return this.min__Lscala_math_Ordering__O(cmp$4)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.product__Lscala_math_Numeric__ = (function(num) {
  return this.product__Lscala_math_Numeric__O(num)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sum__Lscala_math_Numeric__ = (function(num$2) {
  return this.sum__Lscala_math_Numeric__O(num$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__ = (function(z$2, seqop, combop) {
  return this.aggregate__O__Lscala_Function2__Lscala_Function2__O(z$2, seqop, combop)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.fold__O__Lscala_Function2__ = (function(z$3, op$2) {
  return this.fold__O__Lscala_Function2__O(z$3, op$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceOption__Lscala_Function2__ = (function(op$3) {
  return this.reduceOption__Lscala_Function2__Lscala_Option(op$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduce__Lscala_Function2__ = (function(op$4) {
  return this.reduce__Lscala_Function2__O(op$4)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceRightOption__Lscala_Function2__ = (function(op$5) {
  return this.reduceRightOption__Lscala_Function2__Lscala_Option(op$5)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceLeftOption__Lscala_Function2__ = (function(op$6) {
  return this.reduceLeftOption__Lscala_Function2__Lscala_Option(op$6)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceRight__Lscala_Function2__ = (function(op$7) {
  return this.reduceRight__Lscala_Function2__O(op$7)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reduceLeft__Lscala_Function2__ = (function(op$8) {
  return this.reduceLeft__Lscala_Function2__O(op$8)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.foldRight__O__Lscala_Function2__ = (function(z$4, op$9) {
  return this.foldRight__O__Lscala_Function2__O(z$4, op$9)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.foldLeft__O__Lscala_Function2__ = (function(z$5, op$10) {
  return this.foldLeft__O__Lscala_Function2__O(z$5, op$10)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$colon$bslash__O__Lscala_Function2__ = (function(z$6, op$11) {
  return this.$$colon$bslash__O__Lscala_Function2__O(z$6, op$11)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$div$colon__O__Lscala_Function2__ = (function(z$7, op$12) {
  return this.$$div$colon__O__Lscala_Function2__O(z$7, op$12)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.collectFirst__Lscala_PartialFunction__ = (function(pf) {
  return this.collectFirst__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.count__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.count__Lscala_Function1__I(p))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.reversed__ = (function() {
  return this.reversed__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toIterator__ = (function() {
  return this.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.toTraversable__ = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sameElements__Lscala_collection_Iterator__ = (function(that) {
  return ScalaJS.bZ(this.sameElements__Lscala_collection_Iterator__Z(that))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.copyToArray__O__I__I__ = (function(xs$3, start$4, len) {
  return this.copyToArray__O__I__I__V(xs$3, start$4, len)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.patch__I__Lscala_collection_Iterator__I__ = (function(from, patchElems, replaced) {
  return this.patch__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator(from, patchElems, replaced)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.duplicate__ = (function() {
  return this.duplicate__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.sliding__I__I__ = (function(size, step) {
  return this.sliding__I__I__Lscala_collection_Iterator$GroupedIterator(size, step)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.grouped__I__ = (function(size$2) {
  return this.grouped__I__Lscala_collection_Iterator$GroupedIterator(size$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.buffered__ = (function() {
  return this.buffered__Lscala_collection_BufferedIterator()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.indexOf__O__ = (function(elem) {
  return this.indexOf__O__I(elem)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.indexWhere__Lscala_Function1__ = (function(p$2) {
  return ScalaJS.bI(this.indexWhere__Lscala_Function1__I(p$2))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.find__Lscala_Function1__ = (function(p$3) {
  return this.find__Lscala_Function1__Lscala_Option(p$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.contains__O__ = (function(elem$2) {
  return ScalaJS.bZ(this.contains__O__Z(elem$2))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.exists__Lscala_Function1__ = (function(p$4) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$4))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.forall__Lscala_Function1__ = (function(p$5) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p$5))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.foreach__Lscala_Function1__ = (function(f$3) {
  return this.foreach__Lscala_Function1__V(f$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.zipAll__Lscala_collection_Iterator__O__O__ = (function(that$2, thisElem, thatElem) {
  return this.zipAll__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator(that$2, thisElem, thatElem)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.zipWithIndex__ = (function() {
  return this.zipWithIndex__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.padTo__I__O__ = (function(len$2, elem$3) {
  return this.padTo__I__O__Lscala_collection_Iterator(len$2, elem$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.zip__Lscala_collection_Iterator__ = (function(that$3) {
  return this.zip__Lscala_collection_Iterator__Lscala_collection_Iterator(that$3)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.dropWhile__Lscala_Function1__ = (function(p$6) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_Iterator(p$6)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.span__Lscala_Function1__ = (function(p$7) {
  return this.span__Lscala_Function1__Lscala_Tuple2(p$7)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.partition__Lscala_Function1__ = (function(p$8) {
  return this.partition__Lscala_Function1__Lscala_Tuple2(p$8)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.takeWhile__Lscala_Function1__ = (function(p$9) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_Iterator(p$9)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.scanRight__O__Lscala_Function2__ = (function(z$8, op$13) {
  return this.scanRight__O__Lscala_Function2__Lscala_collection_Iterator(z$8, op$13)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.scanLeft__O__Lscala_Function2__ = (function(z$9, op$14) {
  return this.scanLeft__O__Lscala_Function2__Lscala_collection_Iterator(z$9, op$14)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.collect__Lscala_PartialFunction__ = (function(pf$2) {
  return this.collect__Lscala_PartialFunction__Lscala_collection_Iterator(pf$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.filterNot__Lscala_Function1__ = (function(p$10) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Iterator(p$10)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.withFilter__Lscala_Function1__ = (function(p$11) {
  return this.withFilter__Lscala_Function1__Lscala_collection_Iterator(p$11)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.corresponds__Lscala_collection_GenTraversableOnce__Lscala_Function2__ = (function(that$4, p$12) {
  return this.corresponds__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z(that$4, p$12)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.filter__Lscala_Function1__ = (function(p$13) {
  return this.filter__Lscala_Function1__Lscala_collection_Iterator(p$13)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.flatMap__Lscala_Function1__ = (function(f$4) {
  return this.flatMap__Lscala_Function1__Lscala_collection_Iterator(f$4)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$$plus$plus__Lscala_Function0__ = (function(that$5) {
  return this.$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(that$5)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.map__Lscala_Function1__ = (function(f$5) {
  return this.map__Lscala_Function1__Lscala_collection_Iterator(f$5)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.slice__I__I__ = (function(from$2, until) {
  return this.slice__I__I__Lscala_collection_Iterator(from$2, until)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.drop__I__ = (function(n) {
  return this.drop__I__Lscala_collection_Iterator(n)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.take__I__ = (function(n$2) {
  return this.take__I__Lscala_collection_Iterator(n$2)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.hasDefiniteSize__ = (function() {
  return ScalaJS.bZ(this.hasDefiniteSize__Z())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.isTraversableAgain__ = (function() {
  return ScalaJS.bZ(this.isTraversableAgain__Z())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.seq__ = (function() {
  return this.seq__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.printDebug__ = (function() {
  return ScalaJS.bV(this.printDebug__V())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.subdivide__ = (function() {
  return this.subdivide__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.dupTo__Lscala_collection_concurrent_TrieMapIterator__ = (function(it) {
  return ScalaJS.bV(this.dupTo__Lscala_collection_concurrent_TrieMapIterator__V(it))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.newIterator__I__Lscala_collection_concurrent_TrieMap__Z__ = (function(_lev, _ct, _mustInit) {
  return this.newIterator__I__Lscala_collection_concurrent_TrieMap__Z__Lscala_collection_concurrent_TrieMapIterator(_lev, _ct, _mustInit)
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.advance__ = (function() {
  return ScalaJS.bV(this.advance__V())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.next__ = (function() {
  return this.next__Lscala_Tuple2()
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.hasNext__ = (function() {
  return ScalaJS.bZ(this.hasNext__Z())
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.level$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.level$und$eq__I__V(x$1))
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.level__ = (function() {
  return ScalaJS.bI(this.level__I())
});
/** @constructor */
ScalaJS.inheritable.scala_collection_concurrent_TrieMapIterator = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_concurrent_TrieMapIterator.prototype = ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype;
ScalaJS.is.scala_collection_concurrent_TrieMapIterator = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_concurrent_TrieMapIterator)))
});
ScalaJS.as.scala_collection_concurrent_TrieMapIterator = (function(obj) {
  if ((ScalaJS.is.scala_collection_concurrent_TrieMapIterator(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.concurrent.TrieMapIterator")
  }
});
ScalaJS.isArrayOf.scala_collection_concurrent_TrieMapIterator = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_concurrent_TrieMapIterator)))
});
ScalaJS.asArrayOf.scala_collection_concurrent_TrieMapIterator = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_concurrent_TrieMapIterator(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.concurrent.TrieMapIterator;", depth)
  }
});
ScalaJS.data.scala_collection_concurrent_TrieMapIterator = new ScalaJS.ClassTypeData({
  scala_collection_concurrent_TrieMapIterator: 0
}, false, "scala.collection.concurrent.TrieMapIterator", ScalaJS.data.java_lang_Object, {
  scala_collection_concurrent_TrieMapIterator: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_concurrent_TrieMapIterator.prototype.$classData = ScalaJS.data.scala_collection_concurrent_TrieMapIterator;
//@ sourceMappingURL=TrieMapIterator.js.map
