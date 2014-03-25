/** @constructor */
ScalaJS.c.scala_collection_mutable_StringBuilder = (function() {
  ScalaJS.c.scala_collection_mutable_AbstractSeq.call(this);
  this.underlying$5 = null
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype = new ScalaJS.inheritable.scala_collection_mutable_AbstractSeq();
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.constructor = ScalaJS.c.scala_collection_mutable_StringBuilder;
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHint__I__V = (function(size) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__I__V(this, size)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__V = (function(coll) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__V(this, coll)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__V = (function(coll, delta) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHint__Lscala_collection_mutable_Builder__Lscala_collection_TraversableLike__I__V(this, coll, delta)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__V = (function(size, boundingColl) {
  ScalaJS.impls.scala_collection_mutable_Builder$class__sizeHintBounded__Lscala_collection_mutable_Builder__I__Lscala_collection_TraversableLike__V(this, size, boundingColl)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder = (function(f) {
  return ScalaJS.impls.scala_collection_mutable_Builder$class__mapResult__Lscala_collection_mutable_Builder__Lscala_Function1__Lscala_collection_mutable_Builder(this, f)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable = (function(elem1, elem2, elems) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$eq__Lscala_collection_generic_Growable__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(this, elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable = (function(xs) {
  return ScalaJS.impls.scala_collection_generic_Growable$class__$plus$plus$eq__Lscala_collection_generic_Growable__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this, xs)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.slice__I__I__O = (function(from, until) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__slice__Lscala_collection_immutable_StringLike__I__I__O(this, from, until)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$times__I__T = (function(n) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__$times__Lscala_collection_immutable_StringLike__I__T(this, n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.compare__T__I = (function(other) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__compare__Lscala_collection_immutable_StringLike__T__I(this, other)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripLineEnd__T = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__stripLineEnd__Lscala_collection_immutable_StringLike__T(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.linesWithSeparators__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__linesWithSeparators__Lscala_collection_immutable_StringLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lines__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__lines__Lscala_collection_immutable_StringLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.linesIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__linesIterator__Lscala_collection_immutable_StringLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.capitalize__T = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__capitalize__Lscala_collection_immutable_StringLike__T(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripPrefix__T__T = (function(prefix) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__stripPrefix__Lscala_collection_immutable_StringLike__T__T(this, prefix)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripSuffix__T__T = (function(suffix) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__stripSuffix__Lscala_collection_immutable_StringLike__T__T(this, suffix)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.replaceAllLiterally__T__T__T = (function(literal, replacement) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__replaceAllLiterally__Lscala_collection_immutable_StringLike__T__T__T(this, literal, replacement)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripMargin__C__T = (function(marginChar) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__stripMargin__Lscala_collection_immutable_StringLike__C__T(this, marginChar)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripMargin__T = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__stripMargin__Lscala_collection_immutable_StringLike__T(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.split__C__AT = (function(separator) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__split__Lscala_collection_immutable_StringLike__C__AT(this, separator)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.split__AC__AT = (function(separators) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__split__Lscala_collection_immutable_StringLike__AC__AT(this, separators)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.r__Lscala_util_matching_Regex = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__r__Lscala_collection_immutable_StringLike__Lscala_util_matching_Regex(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.r__Lscala_collection_Seq__Lscala_util_matching_Regex = (function(groupNames) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__r__Lscala_collection_immutable_StringLike__Lscala_collection_Seq__Lscala_util_matching_Regex(this, groupNames)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toBoolean__Z = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toBoolean__Lscala_collection_immutable_StringLike__Z(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toByte__B = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toByte__Lscala_collection_immutable_StringLike__B(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toShort__S = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toShort__Lscala_collection_immutable_StringLike__S(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toInt__I = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toInt__Lscala_collection_immutable_StringLike__I(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toLong__J = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toLong__Lscala_collection_immutable_StringLike__J(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toFloat__F = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toFloat__Lscala_collection_immutable_StringLike__F(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toDouble__D = (function() {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toDouble__Lscala_collection_immutable_StringLike__D(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__toArray__Lscala_collection_immutable_StringLike__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.format__Lscala_collection_Seq__T = (function(args) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__format__Lscala_collection_immutable_StringLike__Lscala_collection_Seq__T(this, args)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.formatLocal__Ljava_util_Locale__Lscala_collection_Seq__T = (function(l, args) {
  return ScalaJS.impls.scala_collection_immutable_StringLike$class__formatLocal__Lscala_collection_immutable_StringLike__Ljava_util_Locale__Lscala_collection_Seq__T(this, l, args)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$less__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$greater__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$less$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$less$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$greater$eq__O__Z = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__$greater$eq__Lscala_math_Ordered__O__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.compareTo__O__I = (function(that) {
  return ScalaJS.impls.scala_math_Ordered$class__compareTo__Lscala_math_Ordered__O__I(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IterableLike$class__reduceRight__Lscala_collection_IterableLike__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IterableLike$class__zip__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$head__O = (function() {
  return ScalaJS.impls.scala_collection_IterableLike$class__head__Lscala_collection_IterableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$tail__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__tail__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$last__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__last__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$init__O = (function() {
  return ScalaJS.impls.scala_collection_TraversableLike$class__init__Lscala_collection_TraversableLike__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IterableLike$class__sameElements__Lscala_collection_IterableLike__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_SeqLike$class__endsWith__Lscala_collection_SeqLike__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__isEmpty__Lscala_collection_IndexedSeqOptimized__Z(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foreach__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__forall__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__exists__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__find__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldLeft__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__foldRight__Lscala_collection_IndexedSeqOptimized__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceLeft__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reduceRight__Lscala_collection_IndexedSeqOptimized__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O = (function(that, bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zip__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(this, that, bf)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.zipWithIndex__Lscala_collection_generic_CanBuildFrom__O = (function(bf) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__zipWithIndex__Lscala_collection_IndexedSeqOptimized__Lscala_collection_generic_CanBuildFrom__O(this, bf)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.head__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__head__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.tail__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__tail__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.last__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__last__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init__O = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__init__Lscala_collection_IndexedSeqOptimized__O(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.take__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__take__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.drop__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__drop__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.takeRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.dropRight__I__O = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropRight__Lscala_collection_IndexedSeqOptimized__I__O(this, n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.splitAt__I__Lscala_Tuple2 = (function(n) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__splitAt__Lscala_collection_IndexedSeqOptimized__I__Lscala_Tuple2(this, n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.takeWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__takeWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.dropWhile__Lscala_Function1__O = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__dropWhile__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__O(this, p)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__span__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sameElements__Lscala_collection_GenIterable__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__sameElements__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenIterable__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__copyToArray__Lscala_collection_IndexedSeqOptimized__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lengthCompare__Lscala_collection_IndexedSeqOptimized__I__I(this, len)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.segmentLength__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__segmentLength__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.indexWhere__Lscala_Function1__I__I = (function(p, from) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__indexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, from)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lastIndexWhere__Lscala_Function1__I__I = (function(p, end) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__lastIndexWhere__Lscala_collection_IndexedSeqOptimized__Lscala_Function1__I__I(this, p, end)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reverseIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__reverseIterator__Lscala_collection_IndexedSeqOptimized__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.startsWith__Lscala_collection_GenSeq__I__Z = (function(that, offset) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__startsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__I__Z(this, that, offset)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.endsWith__Lscala_collection_GenSeq__Z = (function(that) {
  return ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__endsWith__Lscala_collection_IndexedSeqOptimized__Lscala_collection_GenSeq__Z(this, that)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.companion__Lscala_collection_generic_GenericCompanion = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__companion__Lscala_collection_mutable_IndexedSeq__Lscala_collection_generic_GenericCompanion(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_mutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__seq__Lscala_collection_mutable_IndexedSeq__Lscala_collection_mutable_IndexedSeq(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__O__Lscala_collection_mutable_IndexedSeq = (function(repr) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__toCollection__Lscala_collection_mutable_IndexedSeqLike__O__Lscala_collection_mutable_IndexedSeq(this, repr)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__Lscala_collection_mutable_IndexedSeqView = (function() {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__Lscala_collection_mutable_IndexedSeqView(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__I__I__Lscala_collection_mutable_IndexedSeqView = (function(from, until) {
  return ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__view__Lscala_collection_mutable_IndexedSeqLike__I__I__Lscala_collection_mutable_IndexedSeqView(this, from, until)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.hashCode__I = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__hashCode__Lscala_collection_IndexedSeqLike__I(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.iterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__iterator__Lscala_collection_IndexedSeqLike__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_IndexedSeqLike$class__toBuffer__Lscala_collection_IndexedSeqLike__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.underlying__p5__Ljava_lang_StringBuilder = (function() {
  return this.underlying$5
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.thisCollection__Lscala_collection_mutable_StringBuilder = (function() {
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(repr) {
  return repr
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.newBuilder__Lscala_collection_mutable_GrowingBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_GrowingBuilder().init___Lscala_collection_generic_Growable(new ScalaJS.c.scala_collection_mutable_StringBuilder().init___())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toArray__AC = (function() {
  var arr = ScalaJS.newArrayObject(ScalaJS.data.scala_Char.getArrayOf(), [this.length__I()]);
  this.underlying__p5__Ljava_lang_StringBuilder().getChars__I__I__AC__I__V(0, this.length__I(), arr, 0);
  return arr
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.length__I = (function() {
  return this.underlying__p5__Ljava_lang_StringBuilder().length__I()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.length$und$eq__I__V = (function(n) {
  this.underlying__p5__Ljava_lang_StringBuilder().setLength__I__V(n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.clear__V = (function() {
  this.setLength__I__V(0)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.setLength__I__V = (function(len) {
  this.underlying__p5__Ljava_lang_StringBuilder().setLength__I__V(len)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.capacity__I = (function() {
  return this.underlying__p5__Ljava_lang_StringBuilder().capacity__I()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.ensureCapacity__I__V = (function(newCapacity) {
  this.underlying__p5__Ljava_lang_StringBuilder().ensureCapacity__I__V(newCapacity)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.charAt__I__C = (function(index) {
  return this.underlying__p5__Ljava_lang_StringBuilder().charAt__I__C(index)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.apply__I__C = (function(index) {
  return this.underlying__p5__Ljava_lang_StringBuilder().charAt__I__C(index)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.deleteCharAt__I__Lscala_collection_mutable_StringBuilder = (function(index) {
  this.underlying__p5__Ljava_lang_StringBuilder().deleteCharAt__I__Ljava_lang_StringBuilder(index);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.setCharAt__I__C__V = (function(index, ch) {
  this.underlying__p5__Ljava_lang_StringBuilder().setCharAt__I__C__V(index, ch)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.update__I__C__V = (function(i, c) {
  this.setCharAt__I__C__V(i, c)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.substring__I__T = (function(start) {
  return this.substring__I__I__T(start, this.length__I())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.substring__I__I__T = (function(start, end) {
  return this.underlying__p5__Ljava_lang_StringBuilder().substring__I__I__T(start, end)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.subSequence__I__I__Ljava_lang_CharSequence = (function(start, end) {
  return this.substring__I__I__T(start, end)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__C__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.append__C__Lscala_collection_mutable_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder = (function(s) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__T__Ljava_lang_StringBuilder(s);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__T__Lscala_collection_mutable_StringBuilder = (function(xs) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__T__Ljava_lang_StringBuilder(xs);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus__C__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.$$plus$eq__C__Lscala_collection_mutable_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__O__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__T__Ljava_lang_StringBuilder(ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__O__T(x));
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__T__Lscala_collection_mutable_StringBuilder = (function(s) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__T__Ljava_lang_StringBuilder(s);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__Ljava_lang_CharSequence__Ljava_lang_StringBuilder(sb);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder = (function(xs) {
  return this.appendAll__AC__Lscala_collection_mutable_StringBuilder(ScalaJS.asArrayOf.scala_Char(xs.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Char__Lscala_reflect_ClassTag()), 1))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__AC__Lscala_collection_mutable_StringBuilder = (function(xs) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__AC__Ljava_lang_StringBuilder(xs);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__AC__I__I__Lscala_collection_mutable_StringBuilder = (function(xs, offset, len) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__AC__I__I__Ljava_lang_StringBuilder(xs, offset, len);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__Z__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__Z__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__B__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__I__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__S__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__I__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__I__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__I__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__J__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__J__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__F__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__F__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__D__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__D__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__C__Lscala_collection_mutable_StringBuilder = (function(x) {
  this.underlying__p5__Ljava_lang_StringBuilder().append__C__Ljava_lang_StringBuilder(x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$delete__I__I__Lscala_collection_mutable_StringBuilder = (function(start, end) {
  this.underlying__p5__Ljava_lang_StringBuilder().$delete__I__I__Ljava_lang_StringBuilder(start, end);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.replace__I__I__T__Lscala_collection_mutable_StringBuilder = (function(start, end, str) {
  this.underlying__p5__Ljava_lang_StringBuilder().replace__I__I__T__Ljava_lang_StringBuilder(start, end, str);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insertAll__I__AC__I__I__Lscala_collection_mutable_StringBuilder = (function(index, str, offset, len) {
  this.underlying__p5__Ljava_lang_StringBuilder().insert__I__AC__I__I__Ljava_lang_StringBuilder(index, str, offset, len);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__O__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__O__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__T__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  this.underlying__p5__Ljava_lang_StringBuilder().insert__I__T__Ljava_lang_StringBuilder(index, x);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insertAll__I__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder = (function(index, xs) {
  return this.insertAll__I__AC__Lscala_collection_mutable_StringBuilder(index, ScalaJS.asArrayOf.scala_Char(xs.toArray__Lscala_reflect_ClassTag__O(ScalaJS.modules.scala_reflect_ClassTag().Char__Lscala_reflect_ClassTag()), 1))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insertAll__I__AC__Lscala_collection_mutable_StringBuilder = (function(index, xs) {
  this.underlying__p5__Ljava_lang_StringBuilder().insert__I__AC__Ljava_lang_StringBuilder(index, xs);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__Z__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__Z__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__B__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__S__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__I__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__I__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__J__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__J__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__F__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__F__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__D__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__D__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__C__Lscala_collection_mutable_StringBuilder = (function(index, x) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index, ScalaJS.modules.scala_scalajs_runtime_RuntimeString().valueOf__C__T(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.indexOf__T__I = (function(str) {
  return this.underlying__p5__Ljava_lang_StringBuilder().indexOf__T__I(str)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.indexOf__T__I__I = (function(str, fromIndex) {
  return this.underlying__p5__Ljava_lang_StringBuilder().indexOf__T__I__I(str, fromIndex)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lastIndexOf__T__I = (function(str) {
  return this.underlying__p5__Ljava_lang_StringBuilder().lastIndexOf__T__I(str)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lastIndexOf__T__I__I = (function(str, fromIndex) {
  return this.underlying__p5__Ljava_lang_StringBuilder().lastIndexOf__T__I__I(str, fromIndex)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reverse__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___Ljava_lang_StringBuilder(new ScalaJS.c.java_lang_StringBuilder().init___Ljava_lang_CharSequence(this.underlying__p5__Ljava_lang_StringBuilder()).reverse__Ljava_lang_StringBuilder())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.clone__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___Ljava_lang_StringBuilder(new ScalaJS.c.java_lang_StringBuilder().init___Ljava_lang_CharSequence(this.underlying__p5__Ljava_lang_StringBuilder()))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reverseContents__Lscala_collection_mutable_StringBuilder = (function() {
  this.underlying__p5__Ljava_lang_StringBuilder().reverse__Ljava_lang_StringBuilder();
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toString__T = (function() {
  return this.underlying__p5__Ljava_lang_StringBuilder().toString__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.mkString__T = (function() {
  return this.toString__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.result__T = (function() {
  return this.toString__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.groupBy__Lscala_Function1__Lscala_collection_GenMap = (function(f) {
  return this.groupBy__Lscala_Function1__Lscala_collection_immutable_Map(f)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.isDefinedAt__O__Z = (function(x) {
  return this.isDefinedAt__I__Z(ScalaJS.uI(x))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__I__I__Lscala_collection_TraversableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__I__I__Lscala_collection_IterableView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__I__I__Lscala_collection_SeqView = (function(from, until) {
  return this.view__I__I__Lscala_collection_mutable_IndexedSeqView(from, until)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__Lscala_collection_TraversableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__Lscala_collection_IterableView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.view__Lscala_collection_SeqView = (function() {
  return this.view__Lscala_collection_mutable_IndexedSeqView()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_mutable_Traversable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_mutable_Iterable = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_mutable_Seq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.seq__Lscala_collection_IndexedSeq = (function() {
  return this.seq__Lscala_collection_mutable_IndexedSeq()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.compare__O__I = (function(that) {
  return this.compare__T__I(ScalaJS.as.java_lang_String(that))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.result__O = (function() {
  return this.result__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.clone__O = (function() {
  return this.clone__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reverse__O = (function() {
  return this.reverse__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__O__Lscala_collection_generic_Growable = (function(elem) {
  return this.$$plus$eq__C__Lscala_collection_mutable_StringBuilder(ScalaJS.uC(elem))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__O__Lscala_collection_mutable_Builder = (function(elem) {
  return this.$$plus$eq__C__Lscala_collection_mutable_StringBuilder(ScalaJS.uC(elem))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.update__I__O__V = (function(idx, elem) {
  this.update__I__C__V(idx, ScalaJS.uC(elem))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.apply__O__O = (function(v1) {
  return ScalaJS.bC(this.apply__I__C(ScalaJS.uI(v1)))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.apply__I__O = (function(idx) {
  return ScalaJS.bC(this.apply__I__C(idx))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return this.newBuilder__Lscala_collection_mutable_GrowingBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__O__Lscala_collection_Traversable = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_collection_mutable_StringBuilder(repr))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__O__Lscala_collection_Iterable = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_collection_mutable_StringBuilder(repr))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__O__Lscala_collection_Seq = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_collection_mutable_StringBuilder(repr))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__O__Lscala_collection_IndexedSeq = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(ScalaJS.as.scala_collection_mutable_StringBuilder(repr))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.thisCollection__Lscala_collection_Traversable = (function() {
  return this.thisCollection__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.thisCollection__Lscala_collection_Iterable = (function() {
  return this.thisCollection__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.thisCollection__Lscala_collection_Seq = (function() {
  return this.thisCollection__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.thisCollection__Lscala_collection_IndexedSeq = (function() {
  return this.thisCollection__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.thisCollection__Lscala_collection_mutable_IndexedSeq = (function() {
  return this.thisCollection__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___Ljava_lang_StringBuilder = (function(underlying) {
  this.underlying$5 = underlying;
  ScalaJS.c.scala_collection_mutable_AbstractSeq.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_IndexedSeqLike$class__$init$__Lscala_collection_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_IndexedSeq$class__$init$__Lscala_collection_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeqLike$class__$init$__Lscala_collection_mutable_IndexedSeqLike__V(this);
  ScalaJS.impls.scala_collection_mutable_IndexedSeq$class__$init$__Lscala_collection_mutable_IndexedSeq__V(this);
  ScalaJS.impls.scala_collection_IndexedSeqOptimized$class__$init$__Lscala_collection_IndexedSeqOptimized__V(this);
  ScalaJS.impls.scala_math_Ordered$class__$init$__Lscala_math_Ordered__V(this);
  ScalaJS.impls.scala_collection_immutable_StringLike$class__$init$__Lscala_collection_immutable_StringLike__V(this);
  ScalaJS.impls.scala_collection_generic_Growable$class__$init$__Lscala_collection_generic_Growable__V(this);
  ScalaJS.impls.scala_collection_mutable_Builder$class__$init$__Lscala_collection_mutable_Builder__V(this);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___I__T = (function(initCapacity, initValue) {
  ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___Ljava_lang_StringBuilder.call(this, new ScalaJS.c.java_lang_StringBuilder().init___I((ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I(initValue) + initCapacity)).append__T__Ljava_lang_StringBuilder(initValue));
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___ = (function() {
  ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___I__T.call(this, 16, "");
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___I = (function(capacity) {
  ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___I__T.call(this, capacity, "");
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___T = (function(str) {
  ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.init___I__T.call(this, 16, str);
  return this
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__ = (function(that) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$endsWith__Lscala_collection_GenSeq__Z(that))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__ = (function(that$2) {
  return ScalaJS.bZ(this.scala$collection$IndexedSeqOptimized$$super$sameElements__Lscala_collection_GenIterable__Z(that$2))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$init__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$init__O()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$last__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$last__O()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$tail__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$tail__O()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$head__ = (function() {
  return this.scala$collection$IndexedSeqOptimized$$super$head__O()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__ = (function(that$3, bf) {
  return this.scala$collection$IndexedSeqOptimized$$super$zip__Lscala_collection_GenIterable__Lscala_collection_generic_CanBuildFrom__O(that$3, bf)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__ = (function(op) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceRight__Lscala_Function2__O(op)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__ = (function(op$2) {
  return this.scala$collection$IndexedSeqOptimized$$super$reduceLeft__Lscala_Function2__O(op$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.compareTo__O__ = (function(that$4) {
  return ScalaJS.bI(this.compareTo__O__I(that$4))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$greater$eq__O__ = (function(that$5) {
  return ScalaJS.bZ(this.$$greater$eq__O__Z(that$5))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$less$eq__O__ = (function(that$6) {
  return ScalaJS.bZ(this.$$less$eq__O__Z(that$6))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$greater__O__ = (function(that$7) {
  return ScalaJS.bZ(this.$$greater__O__Z(that$7))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$less__O__ = (function(that$8) {
  return ScalaJS.bZ(this.$$less__O__Z(that$8))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.formatLocal__Ljava_util_Locale__Lscala_collection_Seq__ = (function(l, args) {
  return this.formatLocal__Ljava_util_Locale__Lscala_collection_Seq__T(l, args)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.format__Lscala_collection_Seq__ = (function(args$2) {
  return this.format__Lscala_collection_Seq__T(args$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toDouble__ = (function() {
  return ScalaJS.bD(this.toDouble__D())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toFloat__ = (function() {
  return ScalaJS.bF(this.toFloat__F())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toLong__ = (function() {
  return ScalaJS.bJ(this.toLong__J())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toInt__ = (function() {
  return ScalaJS.bI(this.toInt__I())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toShort__ = (function() {
  return ScalaJS.bS(this.toShort__S())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toByte__ = (function() {
  return ScalaJS.bB(this.toByte__B())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toBoolean__ = (function() {
  return ScalaJS.bZ(this.toBoolean__Z())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.r__Lscala_collection_Seq__ = (function(groupNames) {
  return this.r__Lscala_collection_Seq__Lscala_util_matching_Regex(groupNames)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.r__ = (function() {
  return this.r__Lscala_util_matching_Regex()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.split__AC__ = (function(separators) {
  return this.split__AC__AT(separators)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.split__C__ = (function(separator) {
  return this.split__C__AT(separator)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripMargin__ = (function() {
  return this.stripMargin__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripMargin__C__ = (function(marginChar) {
  return this.stripMargin__C__T(marginChar)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.replaceAllLiterally__T__T__ = (function(literal, replacement) {
  return this.replaceAllLiterally__T__T__T(literal, replacement)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripSuffix__T__ = (function(suffix) {
  return this.stripSuffix__T__T(suffix)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripPrefix__T__ = (function(prefix) {
  return this.stripPrefix__T__T(prefix)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.capitalize__ = (function() {
  return this.capitalize__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.linesIterator__ = (function() {
  return this.linesIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lines__ = (function() {
  return this.lines__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.linesWithSeparators__ = (function() {
  return this.linesWithSeparators__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.stripLineEnd__ = (function() {
  return this.stripLineEnd__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.compare__T__ = (function(other) {
  return ScalaJS.bI(this.compare__T__I(other))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$times__I__ = (function(n) {
  return this.$$times__I__T(n)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$plus$eq__Lscala_collection_TraversableOnce__ = (function(xs) {
  return this.$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(xs)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__O__O__Lscala_collection_Seq__ = (function(elem1, elem2, elems) {
  return this.$$plus$eq__O__O__Lscala_collection_Seq__Lscala_collection_generic_Growable(elem1, elem2, elems)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.mapResult__Lscala_Function1__ = (function(f) {
  return this.mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(f)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHintBounded__I__Lscala_collection_TraversableLike__ = (function(size, boundingColl) {
  return ScalaJS.bV(this.sizeHintBounded__I__Lscala_collection_TraversableLike__V(size, boundingColl))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__I__ = (function(coll, delta) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__I__V(coll, delta))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHint__Lscala_collection_TraversableLike__ = (function(coll$2) {
  return ScalaJS.bV(this.sizeHint__Lscala_collection_TraversableLike__V(coll$2))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.sizeHint__I__ = (function(size$2) {
  return ScalaJS.bV(this.sizeHint__I__V(size$2))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.result__ = (function() {
  return this.result__T()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.reverseContents__ = (function() {
  return this.reverseContents__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lastIndexOf__T__I__ = (function(str, fromIndex) {
  return ScalaJS.bI(this.lastIndexOf__T__I__I(str, fromIndex))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.lastIndexOf__T__ = (function(str$2) {
  return ScalaJS.bI(this.lastIndexOf__T__I(str$2))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.indexOf__T__I__ = (function(str$3, fromIndex$2) {
  return ScalaJS.bI(this.indexOf__T__I__I(str$3, fromIndex$2))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.indexOf__T__ = (function(str$4) {
  return ScalaJS.bI(this.indexOf__T__I(str$4))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__C__ = (function(index, x) {
  return this.insert__I__C__Lscala_collection_mutable_StringBuilder(index, x)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__D__ = (function(index$2, x$2) {
  return this.insert__I__D__Lscala_collection_mutable_StringBuilder(index$2, x$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__F__ = (function(index$3, x$3) {
  return this.insert__I__F__Lscala_collection_mutable_StringBuilder(index$3, x$3)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__J__ = (function(index$4, x$4) {
  return this.insert__I__J__Lscala_collection_mutable_StringBuilder(index$4, x$4)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__I__ = (function(index$5, x$5) {
  return this.insert__I__I__Lscala_collection_mutable_StringBuilder(index$5, x$5)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__S__ = (function(index$6, x$6) {
  return this.insert__I__S__Lscala_collection_mutable_StringBuilder(index$6, x$6)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__B__ = (function(index$7, x$7) {
  return this.insert__I__B__Lscala_collection_mutable_StringBuilder(index$7, x$7)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__Z__ = (function(index$8, x$8) {
  return this.insert__I__Z__Lscala_collection_mutable_StringBuilder(index$8, x$8)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insertAll__I__AC__ = (function(index$9, xs$2) {
  return this.insertAll__I__AC__Lscala_collection_mutable_StringBuilder(index$9, xs$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insertAll__I__Lscala_collection_TraversableOnce__ = (function(index$10, xs$3) {
  return this.insertAll__I__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder(index$10, xs$3)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__T__ = (function(index$11, x$9) {
  return this.insert__I__T__Lscala_collection_mutable_StringBuilder(index$11, x$9)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insert__I__O__ = (function(index$12, x$10) {
  return this.insert__I__O__Lscala_collection_mutable_StringBuilder(index$12, x$10)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.insertAll__I__AC__I__I__ = (function(index$13, str$5, offset, len) {
  return this.insertAll__I__AC__I__I__Lscala_collection_mutable_StringBuilder(index$13, str$5, offset, len)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.replace__I__I__T__ = (function(start, end, str$6) {
  return this.replace__I__I__T__Lscala_collection_mutable_StringBuilder(start, end, str$6)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$delete__I__I__ = (function(start$2, end$2) {
  return this.$delete__I__I__Lscala_collection_mutable_StringBuilder(start$2, end$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__C__ = (function(x$11) {
  return this.append__C__Lscala_collection_mutable_StringBuilder(x$11)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__D__ = (function(x$12) {
  return this.append__D__Lscala_collection_mutable_StringBuilder(x$12)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__F__ = (function(x$13) {
  return this.append__F__Lscala_collection_mutable_StringBuilder(x$13)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__J__ = (function(x$14) {
  return this.append__J__Lscala_collection_mutable_StringBuilder(x$14)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__I__ = (function(x$15) {
  return this.append__I__Lscala_collection_mutable_StringBuilder(x$15)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__S__ = (function(x$16) {
  return this.append__S__Lscala_collection_mutable_StringBuilder(x$16)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__B__ = (function(x$17) {
  return this.append__B__Lscala_collection_mutable_StringBuilder(x$17)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__Z__ = (function(x$18) {
  return this.append__Z__Lscala_collection_mutable_StringBuilder(x$18)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__AC__I__I__ = (function(xs$4, offset$2, len$2) {
  return this.appendAll__AC__I__I__Lscala_collection_mutable_StringBuilder(xs$4, offset$2, len$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__AC__ = (function(xs$5) {
  return this.appendAll__AC__Lscala_collection_mutable_StringBuilder(xs$5)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__Lscala_collection_TraversableOnce__ = (function(xs$6) {
  return this.appendAll__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder(xs$6)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__Lscala_collection_mutable_StringBuilder__ = (function(sb) {
  return this.append__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__T__ = (function(s) {
  return this.append__T__Lscala_collection_mutable_StringBuilder(s)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.append__O__ = (function(x$19) {
  return this.append__O__Lscala_collection_mutable_StringBuilder(x$19)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus__C__ = (function(x$20) {
  return this.$$plus__C__Lscala_collection_mutable_StringBuilder(x$20)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.appendAll__T__ = (function(xs$7) {
  return this.appendAll__T__Lscala_collection_mutable_StringBuilder(xs$7)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$plus$eq__T__ = (function(s$2) {
  return this.$$plus$plus$eq__T__Lscala_collection_mutable_StringBuilder(s$2)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__C__ = (function(x$21) {
  return this.$$plus$eq__C__Lscala_collection_mutable_StringBuilder(x$21)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.subSequence__I__I__ = (function(start$3, end$3) {
  return this.subSequence__I__I__Ljava_lang_CharSequence(start$3, end$3)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.substring__I__I__ = (function(start$4, end$4) {
  return this.substring__I__I__T(start$4, end$4)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.substring__I__ = (function(start$5) {
  return this.substring__I__T(start$5)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.update__I__C__ = (function(i, c) {
  return ScalaJS.bV(this.update__I__C__V(i, c))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.setCharAt__I__C__ = (function(index$14, ch) {
  return ScalaJS.bV(this.setCharAt__I__C__V(index$14, ch))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.deleteCharAt__I__ = (function(index$15) {
  return this.deleteCharAt__I__Lscala_collection_mutable_StringBuilder(index$15)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.charAt__I__ = (function(index$16) {
  return ScalaJS.bC(this.charAt__I__C(index$16))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.ensureCapacity__I__ = (function(newCapacity) {
  return ScalaJS.bV(this.ensureCapacity__I__V(newCapacity))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.capacity__ = (function() {
  return ScalaJS.bI(this.capacity__I())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.setLength__I__ = (function(len$3) {
  return ScalaJS.bV(this.setLength__I__V(len$3))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.clear__ = (function() {
  return ScalaJS.bV(this.clear__V())
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.length$und$eq__I__ = (function(n$2) {
  return ScalaJS.bV(this.length$und$eq__I__V(n$2))
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toArray__ = (function() {
  return this.toArray__AC()
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.toCollection__Lscala_collection_mutable_StringBuilder__ = (function(repr) {
  return this.toCollection__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(repr)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$$plus$eq__O__ = (function(elem) {
  return this.$$plus$eq__O__Lscala_collection_mutable_Builder(elem)
});
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.compare__O__ = (function(that$9) {
  return ScalaJS.bI(this.compare__O__I(that$9))
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_StringBuilder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_StringBuilder.prototype = ScalaJS.c.scala_collection_mutable_StringBuilder.prototype;
ScalaJS.is.scala_collection_mutable_StringBuilder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_StringBuilder)))
});
ScalaJS.as.scala_collection_mutable_StringBuilder = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_StringBuilder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.StringBuilder")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_StringBuilder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_StringBuilder)))
});
ScalaJS.asArrayOf.scala_collection_mutable_StringBuilder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_StringBuilder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_StringBuilder = new ScalaJS.ClassTypeData({
  scala_collection_mutable_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", ScalaJS.data.scala_collection_mutable_AbstractSeq, {
  scala_collection_mutable_StringBuilder: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_mutable_Builder: 1,
  scala_collection_generic_Growable: 1,
  scala_collection_generic_Clearable: 1,
  scala_collection_immutable_StringLike: 1,
  scala_math_Ordered: 1,
  java_lang_Comparable: 1,
  scala_collection_IndexedSeqOptimized: 1,
  scala_collection_mutable_IndexedSeq: 1,
  scala_collection_mutable_IndexedSeqLike: 1,
  scala_collection_IndexedSeq: 1,
  scala_collection_IndexedSeqLike: 1,
  java_lang_CharSequence: 1,
  scala_collection_mutable_AbstractSeq: 1,
  scala_collection_mutable_Seq: 1,
  scala_collection_mutable_SeqLike: 1,
  scala_collection_mutable_Cloneable: 1,
  scala_Cloneable: 1,
  java_lang_Cloneable: 1,
  scala_collection_mutable_Iterable: 1,
  scala_collection_mutable_Traversable: 1,
  scala_Mutable: 1,
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
ScalaJS.c.scala_collection_mutable_StringBuilder.prototype.$classData = ScalaJS.data.scala_collection_mutable_StringBuilder;
//@ sourceMappingURL=StringBuilder.js.map
