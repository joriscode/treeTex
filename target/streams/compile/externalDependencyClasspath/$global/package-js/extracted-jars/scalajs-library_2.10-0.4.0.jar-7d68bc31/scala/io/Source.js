/** @constructor */
ScalaJS.c.scala_io_Source = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.descr$1 = null;
  this.nerrors$1 = 0;
  this.nwarnings$1 = 0;
  this.resetFunction$1 = null;
  this.closeFunction$1 = null;
  this.positioner$1 = null;
  this.RelaxedPosition$module$1 = null;
  this.RelaxedPositioner$module$1 = null;
  this.NoPositioner$module$1 = null
});
ScalaJS.c.scala_io_Source.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_io_Source.prototype.constructor = ScalaJS.c.scala_io_Source;
ScalaJS.c.scala_io_Source.prototype.RelaxedPosition$lzycompute__p1__Lscala_io_Source$RelaxedPosition$ = (function() {
  if ((this.RelaxedPosition$module$1 === null)) {
    this.RelaxedPosition$module$1 = new ScalaJS.c.scala_io_Source$RelaxedPosition$().init___Lscala_io_Source(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.RelaxedPosition$module$1
});
ScalaJS.c.scala_io_Source.prototype.RelaxedPositioner$lzycompute__p1__Lscala_io_Source$RelaxedPositioner$ = (function() {
  if ((this.RelaxedPositioner$module$1 === null)) {
    this.RelaxedPositioner$module$1 = new ScalaJS.c.scala_io_Source$RelaxedPositioner$().init___Lscala_io_Source(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.RelaxedPositioner$module$1
});
ScalaJS.c.scala_io_Source.prototype.NoPositioner$lzycompute__p1__Lscala_io_Source$NoPositioner$ = (function() {
  if ((this.NoPositioner$module$1 === null)) {
    this.NoPositioner$module$1 = new ScalaJS.c.scala_io_Source$NoPositioner$().init___Lscala_io_Source(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.NoPositioner$module$1
});
ScalaJS.c.scala_io_Source.prototype.seq__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__seq__Lscala_collection_Iterator__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_io_Source.prototype.isEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__isEmpty__Lscala_collection_Iterator__Z(this)
});
ScalaJS.c.scala_io_Source.prototype.isTraversableAgain__Z = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__isTraversableAgain__Lscala_collection_Iterator__Z(this)
});
ScalaJS.c.scala_io_Source.prototype.hasDefiniteSize__Z = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__hasDefiniteSize__Lscala_collection_Iterator__Z(this)
});
ScalaJS.c.scala_io_Source.prototype.take__I__Lscala_collection_Iterator = (function(n) {
  return ScalaJS.impls.scala_collection_Iterator$class__take__Lscala_collection_Iterator__I__Lscala_collection_Iterator(this, n)
});
ScalaJS.c.scala_io_Source.prototype.drop__I__Lscala_collection_Iterator = (function(n) {
  return ScalaJS.impls.scala_collection_Iterator$class__drop__Lscala_collection_Iterator__I__Lscala_collection_Iterator(this, n)
});
ScalaJS.c.scala_io_Source.prototype.slice__I__I__Lscala_collection_Iterator = (function(from, until) {
  return ScalaJS.impls.scala_collection_Iterator$class__slice__Lscala_collection_Iterator__I__I__Lscala_collection_Iterator(this, from, until)
});
ScalaJS.c.scala_io_Source.prototype.map__Lscala_Function1__Lscala_collection_Iterator = (function(f) {
  return ScalaJS.impls.scala_collection_Iterator$class__map__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, f)
});
ScalaJS.c.scala_io_Source.prototype.$$plus$plus__Lscala_Function0__Lscala_collection_Iterator = (function(that) {
  return ScalaJS.impls.scala_collection_Iterator$class__$plus$plus__Lscala_collection_Iterator__Lscala_Function0__Lscala_collection_Iterator(this, that)
});
ScalaJS.c.scala_io_Source.prototype.flatMap__Lscala_Function1__Lscala_collection_Iterator = (function(f) {
  return ScalaJS.impls.scala_collection_Iterator$class__flatMap__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, f)
});
ScalaJS.c.scala_io_Source.prototype.filter__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__filter__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_io_Source.prototype.corresponds__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z = (function(that, p) {
  return ScalaJS.impls.scala_collection_Iterator$class__corresponds__Lscala_collection_Iterator__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z(this, that, p)
});
ScalaJS.c.scala_io_Source.prototype.withFilter__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__withFilter__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_io_Source.prototype.filterNot__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__filterNot__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_io_Source.prototype.collect__Lscala_PartialFunction__Lscala_collection_Iterator = (function(pf) {
  return ScalaJS.impls.scala_collection_Iterator$class__collect__Lscala_collection_Iterator__Lscala_PartialFunction__Lscala_collection_Iterator(this, pf)
});
ScalaJS.c.scala_io_Source.prototype.scanLeft__O__Lscala_Function2__Lscala_collection_Iterator = (function(z, op) {
  return ScalaJS.impls.scala_collection_Iterator$class__scanLeft__Lscala_collection_Iterator__O__Lscala_Function2__Lscala_collection_Iterator(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.scanRight__O__Lscala_Function2__Lscala_collection_Iterator = (function(z, op) {
  return ScalaJS.impls.scala_collection_Iterator$class__scanRight__Lscala_collection_Iterator__O__Lscala_Function2__Lscala_collection_Iterator(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.takeWhile__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__takeWhile__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_io_Source.prototype.partition__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__partition__Lscala_collection_Iterator__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_io_Source.prototype.span__Lscala_Function1__Lscala_Tuple2 = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__span__Lscala_collection_Iterator__Lscala_Function1__Lscala_Tuple2(this, p)
});
ScalaJS.c.scala_io_Source.prototype.dropWhile__Lscala_Function1__Lscala_collection_Iterator = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__dropWhile__Lscala_collection_Iterator__Lscala_Function1__Lscala_collection_Iterator(this, p)
});
ScalaJS.c.scala_io_Source.prototype.zip__Lscala_collection_Iterator__Lscala_collection_Iterator = (function(that) {
  return ScalaJS.impls.scala_collection_Iterator$class__zip__Lscala_collection_Iterator__Lscala_collection_Iterator__Lscala_collection_Iterator(this, that)
});
ScalaJS.c.scala_io_Source.prototype.padTo__I__O__Lscala_collection_Iterator = (function(len, elem) {
  return ScalaJS.impls.scala_collection_Iterator$class__padTo__Lscala_collection_Iterator__I__O__Lscala_collection_Iterator(this, len, elem)
});
ScalaJS.c.scala_io_Source.prototype.zipWithIndex__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__zipWithIndex__Lscala_collection_Iterator__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_io_Source.prototype.zipAll__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator = (function(that, thisElem, thatElem) {
  return ScalaJS.impls.scala_collection_Iterator$class__zipAll__Lscala_collection_Iterator__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator(this, that, thisElem, thatElem)
});
ScalaJS.c.scala_io_Source.prototype.foreach__Lscala_Function1__V = (function(f) {
  ScalaJS.impls.scala_collection_Iterator$class__foreach__Lscala_collection_Iterator__Lscala_Function1__V(this, f)
});
ScalaJS.c.scala_io_Source.prototype.forall__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__forall__Lscala_collection_Iterator__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_io_Source.prototype.exists__Lscala_Function1__Z = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__exists__Lscala_collection_Iterator__Lscala_Function1__Z(this, p)
});
ScalaJS.c.scala_io_Source.prototype.contains__O__Z = (function(elem) {
  return ScalaJS.impls.scala_collection_Iterator$class__contains__Lscala_collection_Iterator__O__Z(this, elem)
});
ScalaJS.c.scala_io_Source.prototype.find__Lscala_Function1__Lscala_Option = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__find__Lscala_collection_Iterator__Lscala_Function1__Lscala_Option(this, p)
});
ScalaJS.c.scala_io_Source.prototype.indexWhere__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_Iterator$class__indexWhere__Lscala_collection_Iterator__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_io_Source.prototype.indexOf__O__I = (function(elem) {
  return ScalaJS.impls.scala_collection_Iterator$class__indexOf__Lscala_collection_Iterator__O__I(this, elem)
});
ScalaJS.c.scala_io_Source.prototype.buffered__Lscala_collection_BufferedIterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__buffered__Lscala_collection_Iterator__Lscala_collection_BufferedIterator(this)
});
ScalaJS.c.scala_io_Source.prototype.grouped__I__Lscala_collection_Iterator$GroupedIterator = (function(size) {
  return ScalaJS.impls.scala_collection_Iterator$class__grouped__Lscala_collection_Iterator__I__Lscala_collection_Iterator$GroupedIterator(this, size)
});
ScalaJS.c.scala_io_Source.prototype.sliding__I__I__Lscala_collection_Iterator$GroupedIterator = (function(size, step) {
  return ScalaJS.impls.scala_collection_Iterator$class__sliding__Lscala_collection_Iterator__I__I__Lscala_collection_Iterator$GroupedIterator(this, size, step)
});
ScalaJS.c.scala_io_Source.prototype.length__I = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__length__Lscala_collection_Iterator__I(this)
});
ScalaJS.c.scala_io_Source.prototype.duplicate__Lscala_Tuple2 = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__duplicate__Lscala_collection_Iterator__Lscala_Tuple2(this)
});
ScalaJS.c.scala_io_Source.prototype.patch__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator = (function(from, patchElems, replaced) {
  return ScalaJS.impls.scala_collection_Iterator$class__patch__Lscala_collection_Iterator__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator(this, from, patchElems, replaced)
});
ScalaJS.c.scala_io_Source.prototype.copyToArray__O__I__I__V = (function(xs, start, len) {
  ScalaJS.impls.scala_collection_Iterator$class__copyToArray__Lscala_collection_Iterator__O__I__I__V(this, xs, start, len)
});
ScalaJS.c.scala_io_Source.prototype.sameElements__Lscala_collection_Iterator__Z = (function(that) {
  return ScalaJS.impls.scala_collection_Iterator$class__sameElements__Lscala_collection_Iterator__Lscala_collection_Iterator__Z(this, that)
});
ScalaJS.c.scala_io_Source.prototype.toTraversable__Lscala_collection_Traversable = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toTraversable__Lscala_collection_Iterator__Lscala_collection_Traversable(this)
});
ScalaJS.c.scala_io_Source.prototype.toIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toIterator__Lscala_collection_Iterator__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_io_Source.prototype.toStream__Lscala_collection_immutable_Stream = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toStream__Lscala_collection_Iterator__Lscala_collection_immutable_Stream(this)
});
ScalaJS.c.scala_io_Source.prototype.toString__T = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__toString__Lscala_collection_Iterator__T(this)
});
ScalaJS.c.scala_io_Source.prototype.sliding$default$2__I = (function() {
  return ScalaJS.impls.scala_collection_Iterator$class__sliding$default$2__Lscala_collection_Iterator__I(this)
});
ScalaJS.c.scala_io_Source.prototype.reversed__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reversed__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_io_Source.prototype.size__I = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__size__Lscala_collection_TraversableOnce__I(this)
});
ScalaJS.c.scala_io_Source.prototype.nonEmpty__Z = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__nonEmpty__Lscala_collection_TraversableOnce__Z(this)
});
ScalaJS.c.scala_io_Source.prototype.count__Lscala_Function1__I = (function(p) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__count__Lscala_collection_TraversableOnce__Lscala_Function1__I(this, p)
});
ScalaJS.c.scala_io_Source.prototype.collectFirst__Lscala_PartialFunction__Lscala_Option = (function(pf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__collectFirst__Lscala_collection_TraversableOnce__Lscala_PartialFunction__Lscala_Option(this, pf)
});
ScalaJS.c.scala_io_Source.prototype.$$div$colon__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$div$colon__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.$$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__$colon$bslash__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.foldLeft__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldLeft__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.foldRight__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__foldRight__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.reduceLeft__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeft__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_io_Source.prototype.reduceRight__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRight__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_io_Source.prototype.reduceLeftOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceLeftOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_io_Source.prototype.reduceRightOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceRightOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_io_Source.prototype.reduce__Lscala_Function2__O = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduce__Lscala_collection_TraversableOnce__Lscala_Function2__O(this, op)
});
ScalaJS.c.scala_io_Source.prototype.reduceOption__Lscala_Function2__Lscala_Option = (function(op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__reduceOption__Lscala_collection_TraversableOnce__Lscala_Function2__Lscala_Option(this, op)
});
ScalaJS.c.scala_io_Source.prototype.fold__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__fold__Lscala_collection_TraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__O = (function(z, seqop, combop) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__aggregate__Lscala_collection_TraversableOnce__O__Lscala_Function2__Lscala_Function2__O(this, z, seqop, combop)
});
ScalaJS.c.scala_io_Source.prototype.sum__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__sum__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_io_Source.prototype.product__Lscala_math_Numeric__O = (function(num) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__product__Lscala_collection_TraversableOnce__Lscala_math_Numeric__O(this, num)
});
ScalaJS.c.scala_io_Source.prototype.min__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__min__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_io_Source.prototype.max__Lscala_math_Ordering__O = (function(cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__max__Lscala_collection_TraversableOnce__Lscala_math_Ordering__O(this, cmp)
});
ScalaJS.c.scala_io_Source.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__maxBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_io_Source.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__O = (function(f, cmp) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__minBy__Lscala_collection_TraversableOnce__Lscala_Function1__Lscala_math_Ordering__O(this, f, cmp)
});
ScalaJS.c.scala_io_Source.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__V = (function(dest) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer__V(this, dest)
});
ScalaJS.c.scala_io_Source.prototype.copyToArray__O__I__V = (function(xs, start) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__I__V(this, xs, start)
});
ScalaJS.c.scala_io_Source.prototype.copyToArray__O__V = (function(xs) {
  ScalaJS.impls.scala_collection_TraversableOnce$class__copyToArray__Lscala_collection_TraversableOnce__O__V(this, xs)
});
ScalaJS.c.scala_io_Source.prototype.toArray__Lscala_reflect_ClassTag__O = (function(evidence$1) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toArray__Lscala_collection_TraversableOnce__Lscala_reflect_ClassTag__O(this, evidence$1)
});
ScalaJS.c.scala_io_Source.prototype.toList__Lscala_collection_immutable_List = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toList__Lscala_collection_TraversableOnce__Lscala_collection_immutable_List(this)
});
ScalaJS.c.scala_io_Source.prototype.toIterable__Lscala_collection_Iterable = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIterable__Lscala_collection_TraversableOnce__Lscala_collection_Iterable(this)
});
ScalaJS.c.scala_io_Source.prototype.toSeq__Lscala_collection_Seq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSeq__Lscala_collection_TraversableOnce__Lscala_collection_Seq(this)
});
ScalaJS.c.scala_io_Source.prototype.toIndexedSeq__Lscala_collection_immutable_IndexedSeq = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toIndexedSeq__Lscala_collection_TraversableOnce__Lscala_collection_immutable_IndexedSeq(this)
});
ScalaJS.c.scala_io_Source.prototype.toBuffer__Lscala_collection_mutable_Buffer = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toBuffer__Lscala_collection_TraversableOnce__Lscala_collection_mutable_Buffer(this)
});
ScalaJS.c.scala_io_Source.prototype.toSet__Lscala_collection_immutable_Set = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toSet__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Set(this)
});
ScalaJS.c.scala_io_Source.prototype.toVector__Lscala_collection_immutable_Vector = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toVector__Lscala_collection_TraversableOnce__Lscala_collection_immutable_Vector(this)
});
ScalaJS.c.scala_io_Source.prototype.to__Lscala_collection_generic_CanBuildFrom__O = (function(cbf) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__to__Lscala_collection_TraversableOnce__Lscala_collection_generic_CanBuildFrom__O(this, cbf)
});
ScalaJS.c.scala_io_Source.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map = (function(ev) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__toMap__Lscala_collection_TraversableOnce__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(this, ev)
});
ScalaJS.c.scala_io_Source.prototype.mkString__T__T__T__T = (function(start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T__T__T(this, start, sep, end)
});
ScalaJS.c.scala_io_Source.prototype.mkString__T__T = (function(sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T__T(this, sep)
});
ScalaJS.c.scala_io_Source.prototype.mkString__T = (function() {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__mkString__Lscala_collection_TraversableOnce__T(this)
});
ScalaJS.c.scala_io_Source.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder = (function(b, start, sep, end) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(this, b, start, sep, end)
});
ScalaJS.c.scala_io_Source.prototype.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder = (function(b, sep) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(this, b, sep)
});
ScalaJS.c.scala_io_Source.prototype.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(b) {
  return ScalaJS.impls.scala_collection_TraversableOnce$class__addString__Lscala_collection_TraversableOnce__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(this, b)
});
ScalaJS.c.scala_io_Source.prototype.$$div$colon$bslash__O__Lscala_Function2__O = (function(z, op) {
  return ScalaJS.impls.scala_collection_GenTraversableOnce$class__$div$colon$bslash__Lscala_collection_GenTraversableOnce__O__Lscala_Function2__O(this, z, op)
});
ScalaJS.c.scala_io_Source.prototype.descr__T = (function() {
  return this.descr$1
});
ScalaJS.c.scala_io_Source.prototype.descr$und$eq__T__V = (function(x$1) {
  this.descr$1 = x$1
});
ScalaJS.c.scala_io_Source.prototype.nerrors__I = (function() {
  return this.nerrors$1
});
ScalaJS.c.scala_io_Source.prototype.nerrors$und$eq__I__V = (function(x$1) {
  this.nerrors$1 = x$1
});
ScalaJS.c.scala_io_Source.prototype.nwarnings__I = (function() {
  return this.nwarnings$1
});
ScalaJS.c.scala_io_Source.prototype.nwarnings$und$eq__I__V = (function(x$1) {
  this.nwarnings$1 = x$1
});
ScalaJS.c.scala_io_Source.prototype.lineNum__p1__I__T = (function(line) {
  return this.getLines__Lscala_collection_Iterator().drop__I__Lscala_collection_Iterator((line - 1)).take__I__Lscala_collection_Iterator(1).mkString__T()
});
ScalaJS.c.scala_io_Source.prototype.getLines__Lscala_collection_Iterator = (function() {
  return new ScalaJS.c.scala_io_Source$LineIterator().init___Lscala_io_Source(this)
});
ScalaJS.c.scala_io_Source.prototype.hasNext__Z = (function() {
  return this.iter__Lscala_collection_Iterator().hasNext__Z()
});
ScalaJS.c.scala_io_Source.prototype.next__C = (function() {
  return this.positioner$1.next__C()
});
ScalaJS.c.scala_io_Source.prototype.RelaxedPosition__Lscala_io_Source$RelaxedPosition$ = (function() {
  if ((this.RelaxedPosition$module$1 === null)) {
    return this.RelaxedPosition$lzycompute__p1__Lscala_io_Source$RelaxedPosition$()
  } else {
    return this.RelaxedPosition$module$1
  }
});
ScalaJS.c.scala_io_Source.prototype.RelaxedPositioner__Lscala_io_Source$RelaxedPositioner$ = (function() {
  if ((this.RelaxedPositioner$module$1 === null)) {
    return this.RelaxedPositioner$lzycompute__p1__Lscala_io_Source$RelaxedPositioner$()
  } else {
    return this.RelaxedPositioner$module$1
  }
});
ScalaJS.c.scala_io_Source.prototype.NoPositioner__Lscala_io_Source$NoPositioner$ = (function() {
  if ((this.NoPositioner$module$1 === null)) {
    return this.NoPositioner$lzycompute__p1__Lscala_io_Source$NoPositioner$()
  } else {
    return this.NoPositioner$module$1
  }
});
ScalaJS.c.scala_io_Source.prototype.ch__C = (function() {
  return this.positioner$1.ch__C()
});
ScalaJS.c.scala_io_Source.prototype.pos__I = (function() {
  return this.positioner$1.pos__I()
});
ScalaJS.c.scala_io_Source.prototype.reportError__I__T__Ljava_io_PrintStream__V = (function(pos, msg, out) {
  this.nerrors$und$eq__I__V((this.nerrors__I() + 1));
  this.report__I__T__Ljava_io_PrintStream__V(pos, msg, out)
});
ScalaJS.c.scala_io_Source.prototype.spaces__p1__I__T = (function(n) {
  return ScalaJS.as.scala_collection_TraversableOnce(ScalaJS.modules.scala_collection_immutable_List().fill__I__Lscala_Function0__Lscala_collection_GenTraversable(n, new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function() {
    return (function() {
      return ScalaJS.bC(32)
    })
  })()))).mkString__T()
});
ScalaJS.c.scala_io_Source.prototype.report__I__T__Ljava_io_PrintStream__V = (function(pos, msg, out) {
  var line = ScalaJS.modules.scala_io_Position().line__I__I(pos);
  var col = ScalaJS.modules.scala_io_Position().column__I__I(pos);
  out.println__T__V(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("%s:%d:%d: %s%s%s^")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [this.descr__T(), ScalaJS.bI(line), ScalaJS.bI(col), msg, this.lineNum__p1__I__T(line), this.spaces__p1__I__T((col - 1))]))))
});
ScalaJS.c.scala_io_Source.prototype.reportError$default$3__Ljava_io_PrintStream = (function() {
  return ScalaJS.modules.scala_Console().err__Ljava_io_PrintStream()
});
ScalaJS.c.scala_io_Source.prototype.reportWarning__I__T__Ljava_io_PrintStream__V = (function(pos, msg, out) {
  this.nwarnings$und$eq__I__V((this.nwarnings__I() + 1));
  this.report__I__T__Ljava_io_PrintStream__V(pos, ("warning! " + msg), out)
});
ScalaJS.c.scala_io_Source.prototype.reportWarning$default$3__Ljava_io_PrintStream = (function() {
  return ScalaJS.modules.scala_Console().out__Ljava_io_PrintStream()
});
ScalaJS.c.scala_io_Source.prototype.withReset__Lscala_Function0__Lscala_io_Source = (function(f) {
  this.resetFunction$1 = f;
  return this
});
ScalaJS.c.scala_io_Source.prototype.withClose__Lscala_Function0__Lscala_io_Source = (function(f) {
  this.closeFunction$1 = f;
  return this
});
ScalaJS.c.scala_io_Source.prototype.withDescription__T__Lscala_io_Source = (function(text) {
  this.descr$und$eq__T__V(text);
  return this
});
ScalaJS.c.scala_io_Source.prototype.withPositioning__Z__Lscala_io_Source = (function(on) {
  if (on) {
    var jsx$1 = this.RelaxedPositioner__Lscala_io_Source$RelaxedPositioner$()
  } else {
    var jsx$1 = this.NoPositioner__Lscala_io_Source$NoPositioner$()
  };
  this.positioner$1 = jsx$1;
  return this
});
ScalaJS.c.scala_io_Source.prototype.withPositioning__Lscala_io_Source$Positioner__Lscala_io_Source = (function(pos) {
  this.positioner$1 = pos;
  return this
});
ScalaJS.c.scala_io_Source.prototype.close__V = (function() {
  if ((!ScalaJS.anyRefEqEq(this.closeFunction$1, null))) {
    this.closeFunction$1.apply$mcV$sp__V()
  }
});
ScalaJS.c.scala_io_Source.prototype.reset__Lscala_io_Source = (function() {
  if ((!ScalaJS.anyRefEqEq(this.resetFunction$1, null))) {
    return ScalaJS.as.scala_io_Source(this.resetFunction$1.apply__O())
  } else {
    throw new ScalaJS.c.java_lang_UnsupportedOperationException().init___T("Source's reset() method was not set.")
  }
});
ScalaJS.c.scala_io_Source.prototype.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_GenMap = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_io_Source.prototype.toSet__Lscala_collection_GenSet = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_io_Source.prototype.toSeq__Lscala_collection_GenSeq = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_io_Source.prototype.toIterable__Lscala_collection_GenIterable = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_io_Source.prototype.toTraversable__Lscala_collection_GenTraversable = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_io_Source.prototype.seq__Lscala_collection_TraversableOnce = (function() {
  return this.seq__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_Source.prototype.next__O = (function() {
  return ScalaJS.bC(this.next__C())
});
ScalaJS.c.scala_io_Source.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_collection_GenTraversableOnce$class__$init$__Lscala_collection_GenTraversableOnce__V(this);
  ScalaJS.impls.scala_collection_TraversableOnce$class__$init$__Lscala_collection_TraversableOnce__V(this);
  ScalaJS.impls.scala_collection_Iterator$class__$init$__Lscala_collection_Iterator__V(this);
  this.descr$1 = "";
  this.nerrors$1 = 0;
  this.nwarnings$1 = 0;
  this.resetFunction$1 = null;
  this.closeFunction$1 = null;
  this.positioner$1 = this.RelaxedPositioner__Lscala_io_Source$RelaxedPositioner$();
  return this
});
ScalaJS.c.scala_io_Source.prototype.$$div$colon$bslash__O__Lscala_Function2__ = (function(z, op) {
  return this.$$div$colon$bslash__O__Lscala_Function2__O(z, op)
});
ScalaJS.c.scala_io_Source.prototype.addString__Lscala_collection_mutable_StringBuilder__ = (function(b) {
  return this.addString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(b)
});
ScalaJS.c.scala_io_Source.prototype.addString__Lscala_collection_mutable_StringBuilder__T__ = (function(b$2, sep) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__Lscala_collection_mutable_StringBuilder(b$2, sep)
});
ScalaJS.c.scala_io_Source.prototype.addString__Lscala_collection_mutable_StringBuilder__T__T__T__ = (function(b$3, start, sep$2, end) {
  return this.addString__Lscala_collection_mutable_StringBuilder__T__T__T__Lscala_collection_mutable_StringBuilder(b$3, start, sep$2, end)
});
ScalaJS.c.scala_io_Source.prototype.mkString__ = (function() {
  return this.mkString__T()
});
ScalaJS.c.scala_io_Source.prototype.mkString__T__ = (function(sep$3) {
  return this.mkString__T__T(sep$3)
});
ScalaJS.c.scala_io_Source.prototype.mkString__T__T__T__ = (function(start$2, sep$4, end$2) {
  return this.mkString__T__T__T__T(start$2, sep$4, end$2)
});
ScalaJS.c.scala_io_Source.prototype.toMap__Lscala_Predef$$less$colon$less__ = (function(ev) {
  return this.toMap__Lscala_Predef$$less$colon$less__Lscala_collection_immutable_Map(ev)
});
ScalaJS.c.scala_io_Source.prototype.to__Lscala_collection_generic_CanBuildFrom__ = (function(cbf) {
  return this.to__Lscala_collection_generic_CanBuildFrom__O(cbf)
});
ScalaJS.c.scala_io_Source.prototype.toVector__ = (function() {
  return this.toVector__Lscala_collection_immutable_Vector()
});
ScalaJS.c.scala_io_Source.prototype.toSet__ = (function() {
  return this.toSet__Lscala_collection_immutable_Set()
});
ScalaJS.c.scala_io_Source.prototype.toBuffer__ = (function() {
  return this.toBuffer__Lscala_collection_mutable_Buffer()
});
ScalaJS.c.scala_io_Source.prototype.toIndexedSeq__ = (function() {
  return this.toIndexedSeq__Lscala_collection_immutable_IndexedSeq()
});
ScalaJS.c.scala_io_Source.prototype.toSeq__ = (function() {
  return this.toSeq__Lscala_collection_Seq()
});
ScalaJS.c.scala_io_Source.prototype.toIterable__ = (function() {
  return this.toIterable__Lscala_collection_Iterable()
});
ScalaJS.c.scala_io_Source.prototype.toList__ = (function() {
  return this.toList__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_io_Source.prototype.toArray__Lscala_reflect_ClassTag__ = (function(evidence$1) {
  return this.toArray__Lscala_reflect_ClassTag__O(evidence$1)
});
ScalaJS.c.scala_io_Source.prototype.copyToArray__O__ = (function(xs) {
  return this.copyToArray__O__V(xs)
});
ScalaJS.c.scala_io_Source.prototype.copyToArray__O__I__ = (function(xs$2, start$3) {
  return this.copyToArray__O__I__V(xs$2, start$3)
});
ScalaJS.c.scala_io_Source.prototype.copyToBuffer__Lscala_collection_mutable_Buffer__ = (function(dest) {
  return this.copyToBuffer__Lscala_collection_mutable_Buffer__V(dest)
});
ScalaJS.c.scala_io_Source.prototype.minBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f, cmp) {
  return this.minBy__Lscala_Function1__Lscala_math_Ordering__O(f, cmp)
});
ScalaJS.c.scala_io_Source.prototype.maxBy__Lscala_Function1__Lscala_math_Ordering__ = (function(f$2, cmp$2) {
  return this.maxBy__Lscala_Function1__Lscala_math_Ordering__O(f$2, cmp$2)
});
ScalaJS.c.scala_io_Source.prototype.max__Lscala_math_Ordering__ = (function(cmp$3) {
  return this.max__Lscala_math_Ordering__O(cmp$3)
});
ScalaJS.c.scala_io_Source.prototype.min__Lscala_math_Ordering__ = (function(cmp$4) {
  return this.min__Lscala_math_Ordering__O(cmp$4)
});
ScalaJS.c.scala_io_Source.prototype.product__Lscala_math_Numeric__ = (function(num) {
  return this.product__Lscala_math_Numeric__O(num)
});
ScalaJS.c.scala_io_Source.prototype.sum__Lscala_math_Numeric__ = (function(num$2) {
  return this.sum__Lscala_math_Numeric__O(num$2)
});
ScalaJS.c.scala_io_Source.prototype.aggregate__O__Lscala_Function2__Lscala_Function2__ = (function(z$2, seqop, combop) {
  return this.aggregate__O__Lscala_Function2__Lscala_Function2__O(z$2, seqop, combop)
});
ScalaJS.c.scala_io_Source.prototype.fold__O__Lscala_Function2__ = (function(z$3, op$2) {
  return this.fold__O__Lscala_Function2__O(z$3, op$2)
});
ScalaJS.c.scala_io_Source.prototype.reduceOption__Lscala_Function2__ = (function(op$3) {
  return this.reduceOption__Lscala_Function2__Lscala_Option(op$3)
});
ScalaJS.c.scala_io_Source.prototype.reduce__Lscala_Function2__ = (function(op$4) {
  return this.reduce__Lscala_Function2__O(op$4)
});
ScalaJS.c.scala_io_Source.prototype.reduceRightOption__Lscala_Function2__ = (function(op$5) {
  return this.reduceRightOption__Lscala_Function2__Lscala_Option(op$5)
});
ScalaJS.c.scala_io_Source.prototype.reduceLeftOption__Lscala_Function2__ = (function(op$6) {
  return this.reduceLeftOption__Lscala_Function2__Lscala_Option(op$6)
});
ScalaJS.c.scala_io_Source.prototype.reduceRight__Lscala_Function2__ = (function(op$7) {
  return this.reduceRight__Lscala_Function2__O(op$7)
});
ScalaJS.c.scala_io_Source.prototype.reduceLeft__Lscala_Function2__ = (function(op$8) {
  return this.reduceLeft__Lscala_Function2__O(op$8)
});
ScalaJS.c.scala_io_Source.prototype.foldRight__O__Lscala_Function2__ = (function(z$4, op$9) {
  return this.foldRight__O__Lscala_Function2__O(z$4, op$9)
});
ScalaJS.c.scala_io_Source.prototype.foldLeft__O__Lscala_Function2__ = (function(z$5, op$10) {
  return this.foldLeft__O__Lscala_Function2__O(z$5, op$10)
});
ScalaJS.c.scala_io_Source.prototype.$$colon$bslash__O__Lscala_Function2__ = (function(z$6, op$11) {
  return this.$$colon$bslash__O__Lscala_Function2__O(z$6, op$11)
});
ScalaJS.c.scala_io_Source.prototype.$$div$colon__O__Lscala_Function2__ = (function(z$7, op$12) {
  return this.$$div$colon__O__Lscala_Function2__O(z$7, op$12)
});
ScalaJS.c.scala_io_Source.prototype.collectFirst__Lscala_PartialFunction__ = (function(pf) {
  return this.collectFirst__Lscala_PartialFunction__Lscala_Option(pf)
});
ScalaJS.c.scala_io_Source.prototype.count__Lscala_Function1__ = (function(p) {
  return ScalaJS.bI(this.count__Lscala_Function1__I(p))
});
ScalaJS.c.scala_io_Source.prototype.nonEmpty__ = (function() {
  return ScalaJS.bZ(this.nonEmpty__Z())
});
ScalaJS.c.scala_io_Source.prototype.size__ = (function() {
  return ScalaJS.bI(this.size__I())
});
ScalaJS.c.scala_io_Source.prototype.reversed__ = (function() {
  return this.reversed__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_io_Source.prototype.toStream__ = (function() {
  return this.toStream__Lscala_collection_immutable_Stream()
});
ScalaJS.c.scala_io_Source.prototype.toIterator__ = (function() {
  return this.toIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_Source.prototype.toTraversable__ = (function() {
  return this.toTraversable__Lscala_collection_Traversable()
});
ScalaJS.c.scala_io_Source.prototype.sameElements__Lscala_collection_Iterator__ = (function(that) {
  return ScalaJS.bZ(this.sameElements__Lscala_collection_Iterator__Z(that))
});
ScalaJS.c.scala_io_Source.prototype.copyToArray__O__I__I__ = (function(xs$3, start$4, len) {
  return this.copyToArray__O__I__I__V(xs$3, start$4, len)
});
ScalaJS.c.scala_io_Source.prototype.patch__I__Lscala_collection_Iterator__I__ = (function(from, patchElems, replaced) {
  return this.patch__I__Lscala_collection_Iterator__I__Lscala_collection_Iterator(from, patchElems, replaced)
});
ScalaJS.c.scala_io_Source.prototype.duplicate__ = (function() {
  return this.duplicate__Lscala_Tuple2()
});
ScalaJS.c.scala_io_Source.prototype.length__ = (function() {
  return ScalaJS.bI(this.length__I())
});
ScalaJS.c.scala_io_Source.prototype.sliding__I__I__ = (function(size, step) {
  return this.sliding__I__I__Lscala_collection_Iterator$GroupedIterator(size, step)
});
ScalaJS.c.scala_io_Source.prototype.grouped__I__ = (function(size$2) {
  return this.grouped__I__Lscala_collection_Iterator$GroupedIterator(size$2)
});
ScalaJS.c.scala_io_Source.prototype.buffered__ = (function() {
  return this.buffered__Lscala_collection_BufferedIterator()
});
ScalaJS.c.scala_io_Source.prototype.indexOf__O__ = (function(elem) {
  return this.indexOf__O__I(elem)
});
ScalaJS.c.scala_io_Source.prototype.indexWhere__Lscala_Function1__ = (function(p$2) {
  return ScalaJS.bI(this.indexWhere__Lscala_Function1__I(p$2))
});
ScalaJS.c.scala_io_Source.prototype.find__Lscala_Function1__ = (function(p$3) {
  return this.find__Lscala_Function1__Lscala_Option(p$3)
});
ScalaJS.c.scala_io_Source.prototype.contains__O__ = (function(elem$2) {
  return ScalaJS.bZ(this.contains__O__Z(elem$2))
});
ScalaJS.c.scala_io_Source.prototype.exists__Lscala_Function1__ = (function(p$4) {
  return ScalaJS.bZ(this.exists__Lscala_Function1__Z(p$4))
});
ScalaJS.c.scala_io_Source.prototype.forall__Lscala_Function1__ = (function(p$5) {
  return ScalaJS.bZ(this.forall__Lscala_Function1__Z(p$5))
});
ScalaJS.c.scala_io_Source.prototype.foreach__Lscala_Function1__ = (function(f$3) {
  return this.foreach__Lscala_Function1__V(f$3)
});
ScalaJS.c.scala_io_Source.prototype.zipAll__Lscala_collection_Iterator__O__O__ = (function(that$2, thisElem, thatElem) {
  return this.zipAll__Lscala_collection_Iterator__O__O__Lscala_collection_Iterator(that$2, thisElem, thatElem)
});
ScalaJS.c.scala_io_Source.prototype.zipWithIndex__ = (function() {
  return this.zipWithIndex__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_Source.prototype.padTo__I__O__ = (function(len$2, elem$3) {
  return this.padTo__I__O__Lscala_collection_Iterator(len$2, elem$3)
});
ScalaJS.c.scala_io_Source.prototype.zip__Lscala_collection_Iterator__ = (function(that$3) {
  return this.zip__Lscala_collection_Iterator__Lscala_collection_Iterator(that$3)
});
ScalaJS.c.scala_io_Source.prototype.dropWhile__Lscala_Function1__ = (function(p$6) {
  return this.dropWhile__Lscala_Function1__Lscala_collection_Iterator(p$6)
});
ScalaJS.c.scala_io_Source.prototype.span__Lscala_Function1__ = (function(p$7) {
  return this.span__Lscala_Function1__Lscala_Tuple2(p$7)
});
ScalaJS.c.scala_io_Source.prototype.partition__Lscala_Function1__ = (function(p$8) {
  return this.partition__Lscala_Function1__Lscala_Tuple2(p$8)
});
ScalaJS.c.scala_io_Source.prototype.takeWhile__Lscala_Function1__ = (function(p$9) {
  return this.takeWhile__Lscala_Function1__Lscala_collection_Iterator(p$9)
});
ScalaJS.c.scala_io_Source.prototype.scanRight__O__Lscala_Function2__ = (function(z$8, op$13) {
  return this.scanRight__O__Lscala_Function2__Lscala_collection_Iterator(z$8, op$13)
});
ScalaJS.c.scala_io_Source.prototype.scanLeft__O__Lscala_Function2__ = (function(z$9, op$14) {
  return this.scanLeft__O__Lscala_Function2__Lscala_collection_Iterator(z$9, op$14)
});
ScalaJS.c.scala_io_Source.prototype.collect__Lscala_PartialFunction__ = (function(pf$2) {
  return this.collect__Lscala_PartialFunction__Lscala_collection_Iterator(pf$2)
});
ScalaJS.c.scala_io_Source.prototype.filterNot__Lscala_Function1__ = (function(p$10) {
  return this.filterNot__Lscala_Function1__Lscala_collection_Iterator(p$10)
});
ScalaJS.c.scala_io_Source.prototype.withFilter__Lscala_Function1__ = (function(p$11) {
  return this.withFilter__Lscala_Function1__Lscala_collection_Iterator(p$11)
});
ScalaJS.c.scala_io_Source.prototype.corresponds__Lscala_collection_GenTraversableOnce__Lscala_Function2__ = (function(that$4, p$12) {
  return this.corresponds__Lscala_collection_GenTraversableOnce__Lscala_Function2__Z(that$4, p$12)
});
ScalaJS.c.scala_io_Source.prototype.filter__Lscala_Function1__ = (function(p$13) {
  return this.filter__Lscala_Function1__Lscala_collection_Iterator(p$13)
});
ScalaJS.c.scala_io_Source.prototype.flatMap__Lscala_Function1__ = (function(f$4) {
  return this.flatMap__Lscala_Function1__Lscala_collection_Iterator(f$4)
});
ScalaJS.c.scala_io_Source.prototype.$$plus$plus__Lscala_Function0__ = (function(that$5) {
  return this.$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(that$5)
});
ScalaJS.c.scala_io_Source.prototype.map__Lscala_Function1__ = (function(f$5) {
  return this.map__Lscala_Function1__Lscala_collection_Iterator(f$5)
});
ScalaJS.c.scala_io_Source.prototype.slice__I__I__ = (function(from$2, until) {
  return this.slice__I__I__Lscala_collection_Iterator(from$2, until)
});
ScalaJS.c.scala_io_Source.prototype.drop__I__ = (function(n) {
  return this.drop__I__Lscala_collection_Iterator(n)
});
ScalaJS.c.scala_io_Source.prototype.take__I__ = (function(n$2) {
  return this.take__I__Lscala_collection_Iterator(n$2)
});
ScalaJS.c.scala_io_Source.prototype.hasDefiniteSize__ = (function() {
  return ScalaJS.bZ(this.hasDefiniteSize__Z())
});
ScalaJS.c.scala_io_Source.prototype.isTraversableAgain__ = (function() {
  return ScalaJS.bZ(this.isTraversableAgain__Z())
});
ScalaJS.c.scala_io_Source.prototype.isEmpty__ = (function() {
  return ScalaJS.bZ(this.isEmpty__Z())
});
ScalaJS.c.scala_io_Source.prototype.seq__ = (function() {
  return this.seq__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_Source.prototype.reset__ = (function() {
  return this.reset__Lscala_io_Source()
});
ScalaJS.c.scala_io_Source.prototype.close__ = (function() {
  return ScalaJS.bV(this.close__V())
});
ScalaJS.c.scala_io_Source.prototype.withPositioning__Lscala_io_Source$Positioner__ = (function(pos) {
  return this.withPositioning__Lscala_io_Source$Positioner__Lscala_io_Source(pos)
});
ScalaJS.c.scala_io_Source.prototype.withPositioning__Z__ = (function(on) {
  return this.withPositioning__Z__Lscala_io_Source(on)
});
ScalaJS.c.scala_io_Source.prototype.withDescription__T__ = (function(text) {
  return this.withDescription__T__Lscala_io_Source(text)
});
ScalaJS.c.scala_io_Source.prototype.withClose__Lscala_Function0__ = (function(f$6) {
  return this.withClose__Lscala_Function0__Lscala_io_Source(f$6)
});
ScalaJS.c.scala_io_Source.prototype.withReset__Lscala_Function0__ = (function(f$7) {
  return this.withReset__Lscala_Function0__Lscala_io_Source(f$7)
});
ScalaJS.c.scala_io_Source.prototype.reportWarning__I__T__Ljava_io_PrintStream__ = (function(pos$2, msg, out) {
  return ScalaJS.bV(this.reportWarning__I__T__Ljava_io_PrintStream__V(pos$2, msg, out))
});
ScalaJS.c.scala_io_Source.prototype.report__I__T__Ljava_io_PrintStream__ = (function(pos$3, msg$2, out$2) {
  return ScalaJS.bV(this.report__I__T__Ljava_io_PrintStream__V(pos$3, msg$2, out$2))
});
ScalaJS.c.scala_io_Source.prototype.reportError__I__T__Ljava_io_PrintStream__ = (function(pos$4, msg$3, out$3) {
  return ScalaJS.bV(this.reportError__I__T__Ljava_io_PrintStream__V(pos$4, msg$3, out$3))
});
ScalaJS.c.scala_io_Source.prototype.pos__ = (function() {
  return ScalaJS.bI(this.pos__I())
});
ScalaJS.c.scala_io_Source.prototype.ch__ = (function() {
  return ScalaJS.bC(this.ch__C())
});
ScalaJS.c.scala_io_Source.prototype.NoPositioner__ = (function() {
  return this.NoPositioner__Lscala_io_Source$NoPositioner$()
});
ScalaJS.c.scala_io_Source.prototype.RelaxedPositioner__ = (function() {
  return this.RelaxedPositioner__Lscala_io_Source$RelaxedPositioner$()
});
ScalaJS.c.scala_io_Source.prototype.RelaxedPosition__ = (function() {
  return this.RelaxedPosition__Lscala_io_Source$RelaxedPosition$()
});
ScalaJS.c.scala_io_Source.prototype.next__ = (function() {
  return ScalaJS.bC(this.next__C())
});
ScalaJS.c.scala_io_Source.prototype.hasNext__ = (function() {
  return ScalaJS.bZ(this.hasNext__Z())
});
ScalaJS.c.scala_io_Source.prototype.getLines__ = (function() {
  return this.getLines__Lscala_collection_Iterator()
});
ScalaJS.c.scala_io_Source.prototype.nwarnings$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.nwarnings$und$eq__I__V(x$1))
});
ScalaJS.c.scala_io_Source.prototype.nwarnings__ = (function() {
  return ScalaJS.bI(this.nwarnings__I())
});
ScalaJS.c.scala_io_Source.prototype.nerrors$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.nerrors$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_io_Source.prototype.nerrors__ = (function() {
  return ScalaJS.bI(this.nerrors__I())
});
ScalaJS.c.scala_io_Source.prototype.descr$und$eq__T__ = (function(x$1$3) {
  return ScalaJS.bV(this.descr$und$eq__T__V(x$1$3))
});
ScalaJS.c.scala_io_Source.prototype.descr__ = (function() {
  return this.descr__T()
});
ScalaJS.c.scala_io_Source.prototype.iter__ = (function() {
  return this.iter__Lscala_collection_Iterator()
});
/** @constructor */
ScalaJS.inheritable.scala_io_Source = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_io_Source.prototype = ScalaJS.c.scala_io_Source.prototype;
ScalaJS.is.scala_io_Source = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_io_Source)))
});
ScalaJS.as.scala_io_Source = (function(obj) {
  if ((ScalaJS.is.scala_io_Source(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.io.Source")
  }
});
ScalaJS.isArrayOf.scala_io_Source = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_io_Source)))
});
ScalaJS.asArrayOf.scala_io_Source = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_io_Source(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.io.Source;", depth)
  }
});
ScalaJS.data.scala_io_Source = new ScalaJS.ClassTypeData({
  scala_io_Source: 0
}, false, "scala.io.Source", ScalaJS.data.java_lang_Object, {
  scala_io_Source: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_io_Source.prototype.$classData = ScalaJS.data.scala_io_Source;
//@ sourceMappingURL=Source.js.map
